#!/usr/bin/env node
// Script to update Plex movie list in app.js
// Run with: node update-plex-list.js

const fs = require('fs');
const path = require('path');

const PLEX_TOKEN = 'c_1F9pbcAswu46a3TFaZ';
const PLEX_SERVER_URL = 'http://192.168.86.56:32400';
const APP_JS_PATH = path.join(__dirname, 'app.js');

async function fetchPlexMovies() {
    console.log('Fetching Plex library...');

    try {
        // Get library sections
        const sectionsResponse = await fetch(
            `${PLEX_SERVER_URL}/library/sections?X-Plex-Token=${PLEX_TOKEN}`,
            { headers: { 'Accept': 'application/json' } }
        );
        const sectionsData = await sectionsResponse.json();

        // Find movie libraries
        const movieSections = sectionsData.MediaContainer.Directory.filter(
            dir => dir.type === 'movie'
        );

        if (movieSections.length === 0) {
            console.log('No movie libraries found in Plex');
            return null;
        }

        // Fetch all movies
        const allTitles = [];

        for (const section of movieSections) {
            console.log(`Fetching from library: ${section.title}...`);
            const moviesResponse = await fetch(
                `${PLEX_SERVER_URL}/library/sections/${section.key}/all?X-Plex-Token=${PLEX_TOKEN}`,
                { headers: { 'Accept': 'application/json' } }
            );
            const moviesData = await moviesResponse.json();

            if (moviesData.MediaContainer.Metadata) {
                moviesData.MediaContainer.Metadata.forEach(movie => {
                    allTitles.push(movie.title);
                });
            }
        }

        // Sort alphabetically
        allTitles.sort((a, b) => a.localeCompare(b));

        console.log(`Found ${allTitles.length} movies`);
        return allTitles;

    } catch (error) {
        console.error('Error fetching Plex library:', error.message);
        return null;
    }
}

function updateAppJs(titles) {
    console.log('Updating app.js...');

    let appJs = fs.readFileSync(APP_JS_PATH, 'utf8');

    // Create the new PLEX_LIBRARY_TITLES array
    const titlesArray = JSON.stringify(titles, null, null);
    const newPlexLibrary = `const PLEX_LIBRARY_TITLES = ${titlesArray};`;

    // Check if PLEX_LIBRARY_TITLES already exists
    const plexLibraryRegex = /const PLEX_LIBRARY_TITLES = \[[\s\S]*?\];/;

    if (plexLibraryRegex.test(appJs)) {
        // Replace existing
        appJs = appJs.replace(plexLibraryRegex, newPlexLibrary);
    } else {
        // Add after PLEX_SERVER_URL line
        const insertPoint = appJs.indexOf("const PLEX_SERVER_URL = ");
        if (insertPoint !== -1) {
            const lineEnd = appJs.indexOf('\n', insertPoint);
            appJs = appJs.slice(0, lineEnd + 1) + '\n' + newPlexLibrary + '\n' + appJs.slice(lineEnd + 1);
        } else {
            console.error('Could not find insertion point in app.js');
            return false;
        }
    }

    fs.writeFileSync(APP_JS_PATH, appJs);
    console.log('✅ app.js updated successfully!');
    return true;
}

async function main() {
    const titles = await fetchPlexMovies();

    if (titles && titles.length > 0) {
        updateAppJs(titles);
        console.log(`\n${titles.length} movies synced from Plex.`);
        console.log('Refresh your browser to see the changes.');
    } else {
        console.log('No movies found or error occurred.');
    }
}

main();
