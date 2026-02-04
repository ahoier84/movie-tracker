// Movie Tracker Application
// ========================

// TMDB API Configuration
// Get your free API key at: https://www.themoviedb.org/settings/api
const TMDB_API_KEY = 'fd838145670c57a8da8628a5a0f45b12';
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE = 'https://image.tmdb.org/t/p/w500';

// OMDb API Configuration (for Rotten Tomatoes scores)
// Get your free API key at: https://www.omdbapi.com/apikey.aspx
const OMDB_API_KEY = '39d1839d';
const OMDB_BASE_URL = 'https://www.omdbapi.com';

// Cache for RT scores to avoid repeated API calls
const rtScoreCache = {};

// Plex Configuration
const PLEX_TOKEN = 'c_1F9pbcAswu46a3TFaZ';
const PLEX_SERVER_URL = 'http://192.168.86.56:32400';

// Plex Library Titles (updated by running: node update-plex-list.js)
const PLEX_LIBRARY_TITLES = ["1","1000000014 Apple TV","1000000015 Apple TV","13 Going on 30","21 Jump Street","27 Dresses","3 Days to Kill","300 Rise of the Empire","A Bug's Life","A Charlie Brown Christmas","A Christmas Carol","A Christmas Story","A Fistful of Dollars","A Minecraft Movie","A View to a Kill","A Wrinkle In Time","After Hours","Aladdin","Aladdin Live Action","Alexander and the Terrible, Horrible, No Good, Very Bad Day","Alice Doesn't Live Here Anymore","Alice in Wonderland","Alvin and the Chipmunks The Road Chip","American Hustle","Ant Man","Ant-Man and the Wasp","Ant-Man and the Wasp Quantumania","Argo","Army of Darkness","Atlantis The Lost Empire","Avatar","Avatar The Way of Water","Avengers Age of Ultron","Avengers Endgame","Avengers Infinity War","Bambi","Barbie","Batman Begins","Batman Unlimited: Animal Instincts","Batman Unlimited: Monster Mayhem","Beauty and the Beast","Beauty and the Beast Live Action","Big Hero 6","Bill & Ted's Bogus Journey","Bill & Ted's Excellent Adventure","Birdman or (The Unexpected Virtue of Ignorance)","Black Panther","Black Panther 2: Wakanda Forever","Bolt","Boxcar Bertha","Bringing Out The Dead","Cape Fear","Captain America Civil War","Captain America The First Avenger","Captain America The Winter Soldier","Captain America: Brave New World","Captain Marvel","Captain Phillips","Captain Underpants: The First Epic Movie","Cars","Cars 2","Cars 3","Casino Royale","Chappie","Chasing Amy","Chicken Little","Cinderella","Citizen Kane","Cloudy with a Chance of Meatballs","Cloudy with a Chance of Meatballs 2","Coco","Color Out of Space","Confessions of a Shopaholic","Confessions of a Teenage Drama Queen","Constantine","Deadpool","Deadpool and Wolverine","Despicable Me 2","Despicable Me 3","Detective Pikachu","Diamonds Are Forever Title 01 Whole Film","Die Another Day","Die Hard","Die Hard 2","Die Hard with a Vengeance","Dirty Dancing: Havana Nights","Doctor Strange","Doctor Strange in the Multiverse of Madness","Dodgeball: A True Underdog Story","Dog Man","Dora's Easter Adventure","Dr. No","Dune Part 1","Dune: Part Two","Edge of Tomorrow","Elemental","Elf","Encanto","Enchanted","Escape to Witch Mountain","Eternals","Ex Machina","F1: The Movie","Fallen","Fantastic Beasts and Where to Find Them","Fantastic Beasts The Crimes of Grindelwald","Fantastic Beasts The Secrets of Dumbledore","Fifty Shades Darker","Fifty Shades Freed","Fight Club","Finding Dory","Finding Nemo","For a Few Dollars More","For Your Eyes Only","Fred Claus","Free Guy","Frosty Returns","Frosty the Snowman","Frosty the Snowman Documentary","Frozen","Frozen 2","Furiosa: A Mad Max Saga","G-Force","Game Night","Gangs of New York","Get Out","Ghostbusters","Ghostbusters 2","Girl With a Pearl Earring","Godzilla","Godzilla x Kong: The New Empire","Goldeneye","Goldfinger","Good Will Hunting","Goodfellas","Goosebumps","Guardians of the Galaxy","Guardians of the Galaxy Vol 2","Guardians of the Galaxy Vol 3","Gus","Harold & Kumar Go to White Castle","Harry Potter and the Chamber of Secrets","Harry Potter and the Deathly Hallows: Part 1","Harry Potter and the Deathly Hallows: Part 2","Harry Potter and the Goblet of Fire","Harry Potter and the Half-Blood Prince","Harry Potter and the Order of the Phoenix","Harry Potter and the Prisoner of Azkaban","Harry Potter and the Sorcerer's Stone","Harvey","Hellboy","Her","Hercules","Hero","Home","Home Alone 2: Lost in New York","Hop","Hostage","Hot Lead & Cold Feet","Hotel Transylvania 2","Hotel Transylvania 3","How to Train Your Dragon 2","How to Train Your Dragon: The Hidden World","I Am Legend","I Heart Huckabees","i,Robot","Ice Age Collision Course","Ice Age Continental Drift","Ice Princess","Ichabod and Mr Toad","Igby Goes Down","IMG 0008","IMG 0025 Apple TV","IMG 0026 Apple TV","IMG 0046 Apple TV","IMG 0061 Apple TV","IMG 0074 Apple TV","IMG 0082 Apple TV","IMG 0082 Apple TV 1","IMG 0098 Apple TV","IMG 0107 Apple TV","IMG 0135 Apple TV","IMG 0138 Apple TV","IMG 0155 Apple TV","IMG 0174 Apple TV","IMG 0206 Apple TV","IMG 0245 Apple TV","IMG 0318 Apple TV","IMG 0327 Apple TV","IMG 0328 Apple TV","IMG 0331","IMG 0348 Apple TV","IMG 0615 Apple TV","IMG 0648 Apple TV","IMG 0650 Apple TV","IMG 0659 Apple TV","IMG 0682 Apple TV","IMG 0701 Apple TV","IMG 0740 Apple TV","IMG 0747 Apple TV","IMG 0751 Apple TV","IMG 0781 Apple TV","IMG 0797","IMG 0798","IMG 0800","IMG 0820 Apple TV","IMG 0822","IMG 0839","IMG 0898 Apple TV","IMG 0925","IMG 0926","IMG 0944 Apple TV","IMG 0945 Apple TV","IMG 0946 Apple TV","IMG 0947","IMG 0947 Apple TV","IMG 0956 Apple TV","IMG 0977 Apple TV","IMG 1005","IMG 1007","IMG 1008","IMG 1023","IMG 1023 Apple TV","IMG 1024","IMG 1024 Apple TV","IMG 1033","IMG 1074","IMG 1090 Apple TV","IMG 1098 Apple TV","IMG 1099 Apple TV","IMG 1106","IMG 1115 Apple TV","IMG 1116","IMG 1153 Apple TV","IMG 1158 Apple TV","IMG 1159 Apple TV","IMG 1163","IMG 1163 Apple TV","IMG 1164","IMG 1164 Apple TV","IMG 1165 Apple TV","IMG 1184 Apple TV","IMG 1256 Apple TV","IMG 1257","IMG 1261 Apple TV","IMG 1270","IMG 1281","IMG 1286 Apple TV","IMG 1292 Apple TV","IMG 1323 Apple TV","IMG 1334","IMG 1349 Apple TV","IMG 1355","IMG 1382","IMG 1409","IMG 1432","IMG 1495","IMG 1525","IMG 1529","IMG 1531","IMG 1538","IMG 1539","IMG 1540","IMG 1551","IMG 1560","IMG 1561","IMG 1569","IMG 1574","IMG 1580","IMG 1583","IMG 1587","IMG 1636","IMG 1639","IMG 1729","IMG 1753","IMG 1775","IMG 1776","IMG 1798","IMG 1812","IMG 1830","IMG 1857","IMG 1858","IMG 1888","IMG 1890","IMG 1891","IMG 1903","IMG 1958","IMG 1982","IMG 2112","IMG 2138","IMG 2148","IMG 2154","IMG 2228","IMG 2230","IMG 2231","IMG 2239","IMG 2255","IMG 2347","IMG 2359","IMG 2580","IMG 2615","IMG 2619","IMG 2620","IMG 2621","IMG 2622","IMG 2715","IMG 2739","IMG 2809","IMG 2908","IMG 2959","IMG 2985","IMG 3015","IMG 3068","IMG 3130","IMG 3217","IMG 3220","IMG 3266","IMG 3305","IMG 3314","IMG 3447","IMG 3447 1","IMG 3476","IMG 3476 1","IMG 3495","IMG 3540","IMG 3540 1","IMG 3565","IMG 3671","IMG 3702","IMG 3703","IMG 3715","IMG 3871","IMG 3958","IMG 3967","IMG 3968","IMG 4188","IMG 4189","IMG 4246","IMG 4334","IMG 4362","IMG 4394 2","IMG 4395 2","IMG 4453","IMG 4455 2","IMG 4460 2","IMG 4474 2","IMG 4481","IMG 4482","IMG 4597","IMG 4600","IMG 4752","IMG 4883","IMG 5114","IMG 5247","IMG 5320","IMG 5336","IMG 5709","IMG 5803","In the Heat of the Night","Inception","Incredibles 2","Indiana Jone and the Raiders of the Lost Ark","Indiana Jones and the Dial of Destiny","Indiana Jones and the Kingdom of the Crystal Skull","Indiana Jones and the Last Crusade","Indiana Jones and the Temple of Doom","Inglourious Basterds","Inside Out","Inside Out 2","Interstellar","Iron Man","Iron Man 2","Iron Man 3","It's a Wonderful Life","It's The Great Pumpkin Charlie Brown","Jaws","Joker","Jumanji","Jungle Cruise","Jurassic Park","Jurassic Park III","Jurassic World","Jurassic World Fallen Kingdom","Jurassic World: Dominion","Kill Bill: The Whole Bloody Affair","Kingsman: The Secret Service","Kung Fu Panda 3","Lady and the Tramp","Lego Scooby-Doo! Haunted Hollywood","Lego Star Wars The Empire Strikes Out","Lemony Snicket's A Series of Unfortunate Events","Les Misérables","Licence to Kill","Live and Let Die","Live Free or Die Hard","Luca","Lucy","Mad Max: Fury Road","Madagascar 3 Europe's Most Wanted","Made of Honor","Magnolia","Mamma Mia!","Mary Poppins","Mary Poppins Returns","Mean Streets","Memento","Mickey's Christmas Carol","Mickey's Twice Upon A Christmas","Minions","Mission: Impossible - Ghost Protocol","Mission: Impossible - The Final Reckoning","Mission: Impossible Dead Reckoning","Moana","Moana 2","Monsters University","Monsters, Inc.","Moonraker","Mother!","Mufasa: The Lion King","Mulan","Mulholland Dr.","Muppets From Space","Muppets Most Wanted","My Cousin Vinny","My Little Pony The Movie","National Treasure","National Treasure 2 Book of Secrets","New York, New York","Night at the Museum","Night at the Museum 3: Secret of the Tomb","Nightcrawler","No Time To Die","O Brother, Where Art Thou?","Octopussy","Olaf's Frozen Adventure","On Her Majesty's Secret Service","Once Upon a Studio","Once Upon a Time in Mexico","Onward","P.S. I Love You","Paddington","Paddington 2","Penguins of Madagascar","Pete's Dragon","Peter Pan","Peter Rabbit","Pirates of the Caribbean At World's End","Pirates of the Caribbean Dead Man's Chest","Pirates of the Caribbean Dead Men Tell No Tales","Pirates of the Caribbean On Stranger Tides","Pirates of the Caribbean The Curse of the Black Pearl","Planes","Planes Fire and Rescue","Planes Trains and Automobiles","Planet Earth Part I","Planet Earth Part II","Planet Earth Part III","Planet Earth Part IV","Pocahontas","Pretty Woman","Pulp Fiction","Puss In Boots The Last Wish","Quantum of Solace","Racing Extinction","Raging Bull","Ralph Breaks the Internet","Rampage","Ratatouille","Raya and the Last Dragon","Ready Player One","Remember the Titans","Rent","Robin Hood","Rock Star","Rogue One A Star Wars Story","Rudolph the Red-Nosed Reindeer","Saludos Amigos","Saving Private Ryan","Scooby-Doo","Scooby-Doo 2 Monsters Unleashed","Scooby-Doo and the Goblin King","Scooby-Doo And The Zombies","Scooby-Doo On Zombie Island","Scooby-Doo! and KISS Rock and Roll Mystery","Scooby-Doo! Moon Monster Madness","Scooby-Doo! WrestleMania Mystery","Seven Samurai","Shang-Chi and the Legend of the Ten Rings","Shazam! Fury of the Gods","Shrek","Shrek 2","Shutter Island","Silver Linings Playbook","Sister Act 2: Back in the Habit","Skyfall","Sleeping Beauty","Snow White","Snow White and the Seven Dwarfs","Solo A Star Wars Story","Son of Flubber","Soul","Spanglish","Spectre","Spider- Man Far From Home","Spider-Man Across the Spiderverse","Spider-Man Homecoming","Spider-Man Into the Spiderverse","Spider-Man No Way Home","Spy Kids","Spy Kids 2: The Island of Lost Dreams","Spy Kids 3: Game Over","Star Wars Clone Wars","Star Wars Episode 1 The Phantom Menace","Star Wars Episode 2 Attack of the Clones","Star Wars Episode 3 Revenge of the Sith","Star Wars Episode 4 A New Hope","Star Wars Episode 5 The Empire Strikes Back","Star Wars Episode 6 Return of the Jedi","Star Wars Episode 7 The Force Awakens","Star Wars Episode 8 The Last Jedi","Star Wars Episode 9 The Rise of Skywalker","Straight Outta Compton","Superman","Swingers","Tangled","Tarzan","Taxi Driver","The Absent-Minded Professor","The Amazing Spider-Man 2","The Angry Birds Movie","The Apple Dumpling Gang","The Apple Dumpling Gang Rides Again","The Avengers","The Aviator","The Batman","The Big Short","The Black Cauldron","The Book of Life","The Dark Knight","The Day the Earth Blew Up","The Departed","The Emperor's New Groove","The Evil Dead","The Fall Guy","The Fantastic Four: First Steps","The Fox and the Hound","The Fox and the Hound 2","The Good Dinosaur","The Good, the Bad and the Ugly","The Greatest Showman","The Hateful Eight","The Hobbit: An Unexpected Journey","The Hobbit: The Battle of the Five Armies","The Hobbit: The Desolation of Smaug","The Human Stain","The Hunger Games: Catching Fire","The Hunger Games: Mockingjay - Part 1","The Hurricane","The Incredibles","The Jungle Book","The Jungle Book Live Action","The King of Comedy","The Last Temptation of Christ","The Lego Batman Movie","The Lego Movie","The Lego® Movie 2 The Second Part","The Lego® Ninjago® Movie","The Lion King","The Lion King 1 1/2","The Lion King Live Action","The Little Mermaid","The Living Daylights","The Long Kiss Goodnight","The Lord of the Rings: The Fellowship of the Ring","The Lord of the Rings: The Return of the King","The Lord of the Rings: The Two Towers","The Lost City","The Lost World: Jurassic Park","The Love Bug","The Man With the Golden Gun","The Martian","The Marvels","The Matrix","The Muppets","The Peanuts Movie","The Polar Express","The Prince & Me","The Princess and the Frog","The Princess Diaries 2","The Rescuers","The Rescuers Down Under","The Rocketeer","The Rocketeer 1","The Santa Clause 2","The Shape of Water","The Spy Who Loved Me","The Super Mario Bros. Movie","The Sword in the Stone","The Theory of Everything","The Verdict","The Village","The Wild Robot","The World Is Not Enough","Thor","Thor Love and Thunder","Thor Ragnarok","Thor: The Dark World","Three Amigos!","Three Kings","Thunderball","Thunderbolts*","Titan A.E.","Tomorrow Never Dies","Tomorrowland","Toy Story","Toy Story 2","Toy Story 3","Toy Story of Terror","Toy Story That Time Forgot","Trolls Band Together","Tron Legacy","True Romance","Turbo","Turning Red","Twisters","Ultimate Avengers","Up","Vacation","VID 00000 IPhone & IPod","Vintage Mickey","Walk of Shame","Walking With Dinosaurs","WALL·E","Whiplash","Who's That Knocking At My Door","Wicked","Wild","Willow","Winnie the Pooh","Wish","Wonder Woman","Wonka","Wreck It Ralph","X-Men Origins: Wolverine","X-Men: Days of Future Past","You Only Live Twice","Zero Dark Thirty","Zootopia"];

// Plex library cache
let plexLibraryTitles = new Map();
let plexLibraryLoaded = false;

// Firebase Configuration
// =====================
// IMPORTANT: You need to create a Firebase project and replace these values
// 1. Go to https://console.firebase.google.com/
// 2. Create a new project (or use existing)
// 3. Go to Project Settings > General > Your apps > Add app (Web)
// 4. Copy your config values below
// 5. Enable Authentication > Sign-in method > Google
// 6. Enable Firestore Database (start in test mode)
const firebaseConfig = {
    apiKey: "AIzaSyATtxMV8k3os8d1Cjsl_0S5arOFr5Xjg2E",
    authDomain: "movie-watchlist-289e4.firebaseapp.com",
    projectId: "movie-watchlist-289e4",
    storageBucket: "movie-watchlist-289e4.firebasestorage.app",
    messagingSenderId: "838617388708",
    appId: "1:838617388708:web:3a3271d7658fc179ddf831"
};

// Initialize Firebase
let db = null;
let auth = null;
let currentUser = null;

function initFirebase() {
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        auth = firebase.auth();
        db = firebase.firestore();

        // Listen for auth state changes
        auth.onAuthStateChanged(handleAuthStateChange);
    } else {
        console.log('Firebase not configured - using local storage only');
        updateAuthUI(null);
    }
}

// DOM Elements
const tabs = document.querySelectorAll('.tab');
const tabContents = document.querySelectorAll('.tab-content');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const upcomingMoviesContainer = document.getElementById('upcomingMovies');
const watchlistMoviesContainer = document.getElementById('watchlistMovies');
const addMovieForm = document.getElementById('addMovieForm');
const searchResultsModal = document.getElementById('searchResults');
const searchResultsGrid = document.getElementById('searchResultsGrid');
const closeModalBtn = document.querySelector('.close-modal');

// State
let watchlist = [];
let watchedList = [];
let upcomingPage = 1;
let totalUpcomingPages = 1;
let allUpcomingMovies = [];
let maxDate = ''; // 3 months from today
let browsePage = 1;
let totalBrowsePages = 1;
let allBrowseMovies = [];
let currentLetter = 'A';

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    initFirebase();
    loadWatchlist();
    loadWatchedList();
    fetchUpcomingMovies();
    setupEventListeners();
    setupAuthListeners();
    fetchPlexLibrary(); // Load Plex library for automatic matching
});

// Auth UI Elements
function setupAuthListeners() {
    const googleSignInBtn = document.getElementById('googleSignIn');
    const signOutBtn = document.getElementById('signOutBtn');

    if (googleSignInBtn) {
        googleSignInBtn.addEventListener('click', signInWithGoogle);
    }
    if (signOutBtn) {
        signOutBtn.addEventListener('click', signOut);
    }
}

// Handle auth state changes
function handleAuthStateChange(user) {
    currentUser = user;
    updateAuthUI(user);

    if (user && db) {
        // User signed in - load data from Firebase
        loadFromFirebase();
    } else {
        // User signed out or Firebase not configured - use local storage
        loadWatchlist();
        loadWatchedList();
    }
}

// Update UI based on auth state
function updateAuthUI(user) {
    const loginSection = document.getElementById('loginSection');
    const userSection = document.getElementById('userSection');
    const userEmail = document.getElementById('userEmail');

    if (!loginSection || !userSection) return;

    if (user) {
        loginSection.classList.add('hidden');
        userSection.classList.remove('hidden');
        userEmail.textContent = user.email;
    } else {
        loginSection.classList.remove('hidden');
        userSection.classList.add('hidden');
        userEmail.textContent = '';
    }
}

// Sign in with Google
async function signInWithGoogle() {
    if (!auth) {
        alert('Firebase not configured. Please add your Firebase config to app.js to enable cloud sync.');
        return;
    }

    try {
        const provider = new firebase.auth.GoogleAuthProvider();
        await auth.signInWithPopup(provider);
    } catch (error) {
        console.error('Sign in error:', error);
        alert('Error signing in: ' + error.message);
    }
}

// Sign out
async function signOut() {
    if (!auth) return;

    try {
        await auth.signOut();
        // Clear local state but keep local storage as backup
        watchlist = [];
        watchedList = [];
        renderWatchlist();
        renderWatchedList();
    } catch (error) {
        console.error('Sign out error:', error);
    }
}

// Load data from Firebase
async function loadFromFirebase() {
    if (!db || !currentUser) return;

    try {
        // Load watchlist
        const watchlistDoc = await db.collection('users').doc(currentUser.uid).collection('data').doc('watchlist').get();
        if (watchlistDoc.exists) {
            watchlist = watchlistDoc.data().movies || [];
        } else {
            // First time user - migrate from local storage if exists
            const localWatchlist = localStorage.getItem('movieWatchlist');
            if (localWatchlist) {
                watchlist = JSON.parse(localWatchlist);
                saveWatchlist(); // Save to Firebase
            }
        }
        renderWatchlist();

        // Load watched list
        const watchedDoc = await db.collection('users').doc(currentUser.uid).collection('data').doc('watched').get();
        if (watchedDoc.exists) {
            watchedList = watchedDoc.data().movies || [];
        } else {
            // First time user - migrate from local storage if exists
            const localWatched = localStorage.getItem('movieWatchedList');
            if (localWatched) {
                watchedList = JSON.parse(localWatched);
                saveWatchedList(); // Save to Firebase
            }
        }
        renderWatchedList();

        // Set up real-time listeners
        setupFirebaseListeners();
    } catch (error) {
        console.error('Error loading from Firebase:', error);
        // Fall back to local storage
        loadWatchlist();
        loadWatchedList();
    }
}

// Set up real-time listeners for syncing
function setupFirebaseListeners() {
    if (!db || !currentUser) return;

    // Listen for watchlist changes
    db.collection('users').doc(currentUser.uid).collection('data').doc('watchlist')
        .onSnapshot((doc) => {
            if (doc.exists) {
                watchlist = doc.data().movies || [];
                renderWatchlist();
                // Also refresh upcoming/browse to update button states
                if (allUpcomingMovies.length > 0) {
                    renderMovies(allUpcomingMovies, upcomingMoviesContainer, 'upcoming');
                }
            }
        });

    // Listen for watched list changes
    db.collection('users').doc(currentUser.uid).collection('data').doc('watched')
        .onSnapshot((doc) => {
            if (doc.exists) {
                watchedList = doc.data().movies || [];
                renderWatchedList();
                // Also refresh upcoming/browse to update button states
                if (allUpcomingMovies.length > 0) {
                    renderMovies(allUpcomingMovies, upcomingMoviesContainer, 'upcoming');
                }
            }
        });
}

// Event Listeners
function setupEventListeners() {
    // Tab switching
    tabs.forEach(tab => {
        tab.addEventListener('click', () => switchTab(tab.dataset.tab));
    });

    // Search
    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') handleSearch();
    });

    // Add movie form
    addMovieForm.addEventListener('submit', handleAddMovie);

    // Close modal
    closeModalBtn.addEventListener('click', closeModal);
    searchResultsModal.addEventListener('click', (e) => {
        if (e.target === searchResultsModal) closeModal();
    });

    // Load more button
    const loadMoreBtn = document.getElementById('loadMoreBtn');
    if (loadMoreBtn) {
        loadMoreBtn.addEventListener('click', loadMoreUpcoming);
    }

    // Load more browse button
    const loadMoreBrowseBtn = document.getElementById('loadMoreBrowseBtn');
    if (loadMoreBrowseBtn) {
        loadMoreBrowseBtn.addEventListener('click', loadMoreBrowse);
    }

    // Alphabet navigation
    const alphabetNav = document.getElementById('alphabetNav');
    if (alphabetNav) {
        alphabetNav.addEventListener('click', (e) => {
            if (e.target.classList.contains('letter-btn')) {
                const letter = e.target.dataset.letter;
                selectLetter(letter);
            }
        });
    }
}

// Tab Management
function switchTab(tabId) {
    tabs.forEach(tab => tab.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));

    document.querySelector(`[data-tab="${tabId}"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Get date range for upcoming movies (today to 3 months out)
function getDateRange() {
    const today = new Date();
    const threeMonthsLater = new Date();
    threeMonthsLater.setMonth(threeMonthsLater.getMonth() + 3);

    const formatDate = (date) => date.toISOString().split('T')[0];

    return {
        minDate: formatDate(today),
        maxDate: formatDate(threeMonthsLater)
    };
}

// Fetch Upcoming Movies from TMDB
async function fetchUpcomingMovies(loadMore = false) {
    const loadMoreBtn = document.getElementById('loadMoreBtn');

    if (!TMDB_API_KEY) {
        upcomingMoviesContainer.innerHTML = `
            <p class="empty-state">
                To see upcoming movies, add your TMDB API key to app.js<br>
                <small>Get a free key at <a href="https://www.themoviedb.org/settings/api" target="_blank">themoviedb.org</a></small>
            </p>
        `;
        return;
    }

    if (!loadMore) {
        upcomingPage = 1;
        allUpcomingMovies = [];
    }

    const { minDate, maxDate: maxDateValue } = getDateRange();
    maxDate = maxDateValue;

    try {
        if (loadMore && loadMoreBtn) {
            loadMoreBtn.textContent = 'Loading...';
            loadMoreBtn.disabled = true;
        }

        // Use discover endpoint to filter by date range and USA releases only
        const response = await fetch(
            `${TMDB_BASE_URL}/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&page=${upcomingPage}&region=US&sort_by=release_date.asc&release_date.gte=${minDate}&release_date.lte=${maxDate}&with_release_type=2|3&watch_region=US`
        );
        const data = await response.json();

        totalUpcomingPages = data.total_pages;

        if (data.results && data.results.length > 0) {
            allUpcomingMovies = [...allUpcomingMovies, ...data.results];
            renderMovies(allUpcomingMovies, upcomingMoviesContainer, 'upcoming');

            // Show/hide load more button
            if (loadMoreBtn) {
                if (upcomingPage < totalUpcomingPages) {
                    loadMoreBtn.classList.remove('hidden');
                    loadMoreBtn.textContent = 'Load More Movies';
                    loadMoreBtn.disabled = false;
                } else {
                    loadMoreBtn.classList.add('hidden');
                }
            }
        } else {
            upcomingMoviesContainer.innerHTML = '<p class="empty-state">No upcoming movies found</p>';
        }
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        upcomingMoviesContainer.innerHTML = '<p class="empty-state">Error loading movies. Check your API key.</p>';
        if (loadMoreBtn) {
            loadMoreBtn.textContent = 'Load More Movies';
            loadMoreBtn.disabled = false;
        }
    }
}

// Load more upcoming movies
function loadMoreUpcoming() {
    upcomingPage++;
    fetchUpcomingMovies(true);
}

// Search Movies
async function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) return;

    if (!TMDB_API_KEY) {
        alert('Please add your TMDB API key to app.js to enable search');
        return;
    }

    try {
        searchResultsGrid.innerHTML = '<p class="loading">Searching...</p>';
        searchResultsModal.classList.remove('hidden');

        const response = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${encodeURIComponent(query)}&language=en-US&page=1`
        );
        const data = await response.json();

        if (data.results && data.results.length > 0) {
            renderMovies(data.results, searchResultsGrid, 'search');
        } else {
            searchResultsGrid.innerHTML = '<p class="empty-state">No movies found</p>';
        }
    } catch (error) {
        console.error('Error searching movies:', error);
        searchResultsGrid.innerHTML = '<p class="empty-state">Error searching movies</p>';
    }
}

// Generate star rating HTML
function generateStarRating(movieId, currentRating = 0) {
    let stars = '';
    for (let i = 1; i <= 5; i++) {
        const filled = i <= currentRating ? 'filled' : '';
        stars += `<span class="star ${filled}" data-movie-id="${movieId}" data-rating="${i}" onclick="rateMovie(${movieId}, ${i})">★</span>`;
    }
    return `<div class="star-rating">${stars}</div>`;
}

// Check if movie is currently in theaters (released within last 8 weeks)
function isInTheaters(releaseDate) {
    if (!releaseDate || releaseDate === 'TBA') return false;

    const release = new Date(releaseDate);
    const today = new Date();
    const eightWeeksAgo = new Date();
    eightWeeksAgo.setDate(today.getDate() - 56); // 8 weeks = 56 days

    return release <= today && release >= eightWeeksAgo;
}

// Generate Fandango ticket link (more reliable search than Cinemark)
function getTicketLink(movieTitle) {
    const searchQuery = encodeURIComponent(movieTitle);
    return `https://www.fandango.com/search?q=${searchQuery}&mode=movies`;
}

// Generate JustWatch streaming search link
function getStreamingLink(movieTitle) {
    const searchQuery = encodeURIComponent(movieTitle);
    return `https://www.justwatch.com/us/search?q=${searchQuery}`;
}

// Generate Plex web app link for a movie
function getPlexLink(movieTitle) {
    const searchQuery = encodeURIComponent(movieTitle);
    return `https://app.plex.tv/desktop/#!/search?query=${searchQuery}`;
}

// Plex Library Integration
// ========================

// Roman numeral conversion for title matching
const romanToArabic = { 'i': '1', 'ii': '2', 'iii': '3', 'iv': '4', 'v': '5', 'vi': '6', 'vii': '7', 'viii': '8', 'ix': '9', 'x': '10' };

// Number word to digit conversion
const wordToNumber = { 'one': '1', 'two': '2', 'three': '3', 'four': '4', 'five': '5', 'six': '6', 'seven': '7', 'eight': '8', 'nine': '9', 'ten': '10' };
const numberToWord = { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six', '7': 'seven', '8': 'eight', '9': 'nine', '10': 'ten' };

// Normalize a title for fuzzy matching
function normalizePlexTitle(title) {
    let t = title
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // remove punctuation
        .replace(/\s+/g, ' ')    // normalize spaces
        .trim();

    // Convert Roman numerals at end of title to Arabic
    t = t.replace(/\b(i{1,3}|iv|vi{0,3}|ix|x)\b$/i, (match) => {
        return romanToArabic[match.toLowerCase()] || match;
    });

    // Convert number words to digits (e.g., "four" -> "4")
    t = t.replace(/\b(one|two|three|four|five|six|seven|eight|nine|ten)\b/gi, (match) => {
        return wordToNumber[match.toLowerCase()] || match;
    });

    return t;
}

// Load Plex library from static titles array (updated by running: node update-plex-list.js)
function fetchPlexLibrary() {
    if (!PLEX_LIBRARY_TITLES || PLEX_LIBRARY_TITLES.length === 0) {
        console.log('Plex library not configured. Run: node update-plex-list.js');
        return;
    }

    // Build normalized map from static titles
    const normalizedMap = new Map(); // normalized -> original title

    PLEX_LIBRARY_TITLES.forEach(title => {
        const normalized = normalizePlexTitle(title);
        normalizedMap.set(normalized, title);

        // Also add version without "The Movie" suffix
        const withoutTheMovie = title.replace(/[:\s]*The Movie$/i, '');
        if (withoutTheMovie !== title) {
            normalizedMap.set(normalizePlexTitle(withoutTheMovie), title);
        }
    });

    plexLibraryTitles = normalizedMap;
    plexLibraryLoaded = true;
    console.log(`✅ Loaded ${PLEX_LIBRARY_TITLES.length} movies from Plex library`);

    // Update watched list with Plex status
    updateWatchedListPlexStatus();
}

// Check if a movie title matches Plex library
function isOnPlex(movieTitle) {
    if (!plexLibraryLoaded) return false;

    const normalized = normalizePlexTitle(movieTitle);

    // Try exact normalized match
    if (plexLibraryTitles.has(normalized)) {
        return true;
    }

    // Try without "The Movie" suffix
    const withoutTheMovie = normalized.replace(/\s*the movie$/i, '');
    if (withoutTheMovie !== normalized && plexLibraryTitles.has(withoutTheMovie)) {
        return true;
    }

    // Try adding "The Movie" suffix
    const withTheMovie = normalized + ' the movie';
    if (plexLibraryTitles.has(withTheMovie)) {
        return true;
    }

    // Try with "The" prefix (e.g., "Fantastic Four" -> "The Fantastic Four")
    const withThe = 'the ' + normalized;
    if (plexLibraryTitles.has(withThe)) {
        return true;
    }

    // Try without "The" prefix (e.g., "The Fantastic Four" -> "Fantastic Four")
    const withoutThe = normalized.replace(/^the\s+/, '');
    if (withoutThe !== normalized && plexLibraryTitles.has(withoutThe)) {
        return true;
    }

    return false;
}

// Update all watched movies with Plex status
function updateWatchedListPlexStatus() {
    if (!plexLibraryLoaded) return;

    let updated = false;
    watchedList.forEach(movie => {
        const onPlex = isOnPlex(movie.title);
        if (movie.onPlex !== onPlex) {
            movie.onPlex = onPlex;
            updated = true;
        }
    });

    if (updated) {
        saveWatchedList();
        renderWatchedList();
    }
}

// Fetch Rotten Tomatoes score from OMDb API
async function fetchRTScore(movieTitle, releaseYear, movieId) {
    const cacheKey = `${movieTitle}-${releaseYear}`;

    // Return cached score if available
    if (rtScoreCache[cacheKey] !== undefined) {
        return rtScoreCache[cacheKey];
    }

    try {
        const year = releaseYear ? `&y=${releaseYear}` : '';
        const response = await fetch(
            `${OMDB_BASE_URL}/?t=${encodeURIComponent(movieTitle)}${year}&apikey=${OMDB_API_KEY}`
        );
        const data = await response.json();

        if (data.Response === 'True' && data.Ratings) {
            const rtRating = data.Ratings.find(r => r.Source === 'Rotten Tomatoes');
            const score = rtRating ? rtRating.Value : null;
            rtScoreCache[cacheKey] = score;
            return score;
        }

        rtScoreCache[cacheKey] = null;
        return null;
    } catch (error) {
        console.error('Error fetching RT score:', error);
        rtScoreCache[cacheKey] = null;
        return null;
    }
}

// Load RT scores for visible movies (parallel batches of 10)
async function loadRTScores(movies) {
    const BATCH_SIZE = 10;
    const filteredMovies = movies.filter(m => !m.isCustom);

    for (let i = 0; i < filteredMovies.length; i += BATCH_SIZE) {
        const batch = filteredMovies.slice(i, i + BATCH_SIZE);

        // Fetch all scores in this batch in parallel
        const promises = batch.map(async (movie) => {
            const year = movie.release_date ? movie.release_date.split('-')[0] : null;
            const score = await fetchRTScore(movie.title, year, movie.id);
            return { movie, score };
        });

        const results = await Promise.all(promises);

        // Update UI for all results in this batch
        results.forEach(({ movie, score }) => {
            if (score) {
                const scoreElement = document.querySelector(`.rt-score[data-movie-id="${movie.id}"]`);
                if (scoreElement) {
                    const numericScore = parseInt(score);
                    const freshClass = numericScore >= 60 ? 'fresh' : 'rotten';
                    scoreElement.innerHTML = `<span class="rt-icon ${freshClass}">🍅</span> ${score}`;
                    scoreElement.classList.add(freshClass);
                }
            }
        });
    }
}

// Render Movies
function renderMovies(movies, container, source) {
    container.innerHTML = movies.map(movie => {
        const isInWatchlist = watchlist.some(m => m.id === movie.id);
        const isInWatched = watchedList.some(m => m.id === movie.id);
        const releaseDate = movie.release_date || 'TBA';
        const countdown = getCountdown(releaseDate);
        const posterUrl = movie.poster_path
            ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
            : null;
        const inTheaters = isInTheaters(releaseDate);

        let actionButtons = '';
        let ratingHtml = '';
        const tmdbLink = !movie.isCustom ? `<a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="btn-info">Cast & Crew</a>` : '';
        const ticketLink = inTheaters && !movie.isCustom ? `<a href="${getTicketLink(movie.title)}" target="_blank" class="btn-tickets">🎟️ Buy Tickets</a>` : '';

        if (source === 'watchlist') {
            actionButtons = `
                <button class="btn-watched" onclick="markAsWatched(${movie.id})">Watched</button>
                <button class="btn-remove" onclick="removeFromWatchlist(${movie.id})">Remove</button>
            `;
        } else if (source === 'watched') {
            ratingHtml = generateStarRating(movie.id, movie.rating || 0);
            const streamingLink = !movie.isCustom ? `<a href="${getStreamingLink(movie.title)}" target="_blank" class="btn-streaming">📺 Where to Watch</a>` : '';
            actionButtons = `
                ${streamingLink}
                <button class="btn-remove" onclick="removeFromWatched(${movie.id})">Remove</button>
            `;
        } else if (isInWatchlist) {
            actionButtons = `<button class="btn-remove" disabled>In Watchlist</button>`;
        } else if (isInWatched) {
            actionButtons = `<button class="btn-remove" disabled>Watched</button>`;
        } else {
            actionButtons = `
                <button class="btn-add" onclick='addToWatchlist(${JSON.stringify(movie).replace(/'/g, "&#39;")})'>+ Watchlist</button>
                <button class="btn-watched-direct" onclick='addToWatched(${JSON.stringify(movie).replace(/'/g, "&#39;")})'>+ Watched</button>
            `;
        }

        const rtScorePlaceholder = !movie.isCustom ? `<span class="rt-score" data-movie-id="${movie.id}"></span>` : '';

        return `
            <div class="movie-card" data-id="${movie.id}">
                ${movie.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
                ${posterUrl
                    ? `<img src="${posterUrl}" alt="${movie.title}" class="movie-poster">`
                    : `<div class="movie-poster placeholder">🎬</div>`
                }
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-date">${formatDate(releaseDate)}</p>
                    ${rtScorePlaceholder}
                    ${countdown ? `<span class="countdown ${countdown.released ? 'released' : ''}">${countdown.text}</span>` : ''}
                    ${ratingHtml}
                    <div class="movie-actions">
                        ${!movie.isCustom ? `<button class="btn-trailer" onclick="openTrailer(${movie.id})">Trailer</button>` : ''}
                        ${tmdbLink}
                        ${ticketLink}
                        ${actionButtons}
                    </div>
                </div>
            </div>
        `;
    }).join('');

    // Load RT scores after rendering
    loadRTScores(movies);
}

// Add Movie to Watchlist
function addToWatchlist(movie) {
    if (!watchlist.some(m => m.id === movie.id)) {
        watchlist.push(movie);
        saveWatchlist();
        renderWatchlist();

        // Update all button states for this movie without reloading
        const movieCards = document.querySelectorAll(`.movie-card[data-id="${movie.id}"]`);
        movieCards.forEach(movieCard => {
            const addBtn = movieCard.querySelector('.btn-add');
            if (addBtn) {
                addBtn.textContent = 'In Watchlist';
                addBtn.disabled = true;
                addBtn.classList.remove('btn-add');
                addBtn.classList.add('btn-remove');
                addBtn.removeAttribute('onclick');
            }
        });
    }
}

// Remove Movie from Watchlist
function removeFromWatchlist(movieId) {
    watchlist = watchlist.filter(m => m.id !== movieId);
    saveWatchlist();
    renderWatchlist();
}

// Handle Add Custom Movie
function handleAddMovie(e) {
    e.preventDefault();

    const title = document.getElementById('movieTitle').value.trim();
    const releaseDate = document.getElementById('movieDate').value;
    const posterUrl = document.getElementById('moviePoster').value.trim();
    const overview = document.getElementById('movieOverview').value.trim();

    const customMovie = {
        id: Date.now(), // Unique ID for custom movies
        title,
        release_date: releaseDate,
        poster_path: posterUrl || null,
        overview,
        isCustom: true
    };

    addToWatchlist(customMovie);
    addMovieForm.reset();
    switchTab('watchlist');
}

// Render Watchlist
function renderWatchlist() {
    if (watchlist.length === 0) {
        watchlistMoviesContainer.innerHTML = '<p class="empty-state">No movies in your watchlist yet. Add some!</p>';
        return;
    }

    // Sort by release date
    const sortedWatchlist = [...watchlist].sort((a, b) => {
        const dateA = new Date(a.release_date || '2099-12-31');
        const dateB = new Date(b.release_date || '2099-12-31');
        return dateA - dateB;
    });

    renderMovies(sortedWatchlist, watchlistMoviesContainer, 'watchlist');
}

// Mark movie as watched
function markAsWatched(movieId) {
    const movie = watchlist.find(m => m.id === movieId);
    if (movie) {
        // Remove from watchlist
        watchlist = watchlist.filter(m => m.id !== movieId);
        saveWatchlist();
        renderWatchlist();

        // Add to watched list
        if (!watchedList.some(m => m.id === movieId)) {
            movie.watchedDate = new Date().toISOString();
            // Automatically check if movie is on Plex
            if (plexLibraryLoaded) {
                movie.onPlex = isOnPlex(movie.title);
            }
            watchedList.push(movie);
            saveWatchedList();
            renderWatchedList();
        }
    }
}

// Remove from watched list
function removeFromWatched(movieId) {
    watchedList = watchedList.filter(m => m.id !== movieId);
    saveWatchedList();
    renderWatchedList();
}

// Add movie directly to watched list
function addToWatched(movie) {
    if (!watchedList.some(m => m.id === movie.id)) {
        movie.watchedDate = new Date().toISOString();
        // Automatically check if movie is on Plex
        if (plexLibraryLoaded) {
            movie.onPlex = isOnPlex(movie.title);
        }
        watchedList.push(movie);
        saveWatchedList();
        renderWatchedList();

        // Update all button states for this movie without reloading
        const movieCards = document.querySelectorAll(`.movie-card[data-id="${movie.id}"]`);
        movieCards.forEach(movieCard => {
            const actionsDiv = movieCard.querySelector('.movie-actions');
            const addBtn = movieCard.querySelector('.btn-add');
            const watchedBtn = movieCard.querySelector('.btn-watched-direct');
            if (addBtn) {
                addBtn.textContent = 'Watched';
                addBtn.disabled = true;
                addBtn.classList.remove('btn-add');
                addBtn.classList.add('btn-remove');
                addBtn.removeAttribute('onclick');
            }
            if (watchedBtn) {
                watchedBtn.remove();
            }
        });
    }
}

// Rate a movie
function rateMovie(movieId, rating) {
    const movie = watchedList.find(m => m.id === movieId);
    if (movie) {
        movie.rating = rating;
        saveWatchedList();

        // Update stars visually without re-rendering entire list
        const stars = document.querySelectorAll(`.star[data-movie-id="${movieId}"]`);
        stars.forEach(star => {
            const starRating = parseInt(star.dataset.rating);
            if (starRating <= rating) {
                star.classList.add('filled');
            } else {
                star.classList.remove('filled');
            }
        });
    }
}

// Helper function to strip leading articles from titles
function stripArticle(title) {
    return title.replace(/^(the|a|an)\s+/i, '');
}

// Get the sort letter for a movie title (ignoring articles)
function getSortLetter(title) {
    const stripped = stripArticle(title);
    const firstChar = stripped.charAt(0).toUpperCase();
    // If it starts with a number, group under #
    return /[A-Z]/.test(firstChar) ? firstChar : '#';
}

// Render Watched List
function renderWatchedList() {
    const watchedMoviesContainer = document.getElementById('watchedMovies');
    const alphabetNav = document.getElementById('watchedAlphabetNav');
    const countElement = document.getElementById('watchedCount');
    if (!watchedMoviesContainer) return;

    // Update movie count
    if (countElement) {
        countElement.textContent = `(${watchedList.length})`;
    }

    if (watchedList.length === 0) {
        watchedMoviesContainer.innerHTML = '<p class="empty-state">No movies watched yet. Mark movies as watched from your watchlist!</p>';
        if (alphabetNav) alphabetNav.innerHTML = '';
        return;
    }

    // Sort alphabetically by title, ignoring leading articles (the, a, an)
    const sortedWatched = [...watchedList].sort((a, b) => {
        return stripArticle(a.title).localeCompare(stripArticle(b.title));
    });

    // Find which letters have movies
    const lettersWithMovies = new Set();
    sortedWatched.forEach(movie => {
        lettersWithMovies.add(getSortLetter(movie.title));
    });

    // Render alphabet navigation
    if (alphabetNav) {
        const letters = '#ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
        alphabetNav.innerHTML = letters.map(letter => {
            const hasMovies = lettersWithMovies.has(letter);
            return `<button class="letter-btn ${hasMovies ? '' : 'disabled'}"
                           data-letter="${letter}"
                           ${hasMovies ? `onclick="scrollToLetter('${letter}')"` : 'disabled'}>
                        ${letter}
                    </button>`;
        }).join('');
    }

    // Group movies by letter and render with section headers
    let currentLetter = '';
    let html = '';

    sortedWatched.forEach(movie => {
        const movieLetter = getSortLetter(movie.title);

        // Add letter header if we're starting a new letter
        if (movieLetter !== currentLetter) {
            currentLetter = movieLetter;
            html += `<div class="letter-header" id="letter-${currentLetter}">${currentLetter}</div>`;
        }
    });

    // Render movies with letter headers interspersed
    renderWatchedMoviesWithHeaders(sortedWatched, watchedMoviesContainer);
}

// Render watched movies with letter section headers
function renderWatchedMoviesWithHeaders(movies, container) {
    let currentLetter = '';
    let html = '';

    movies.forEach(movie => {
        const movieLetter = getSortLetter(movie.title);

        // Add letter header if we're starting a new letter
        if (movieLetter !== currentLetter) {
            currentLetter = movieLetter;
            html += `<div class="letter-header" id="letter-${currentLetter}">${currentLetter}</div>`;
        }

        const releaseDate = movie.release_date || 'TBA';
        const posterUrl = movie.poster_path
            ? `${TMDB_IMAGE_BASE}${movie.poster_path}`
            : null;
        const ratingHtml = generateStarRating(movie.id, movie.rating || 0);
        const streamingLink = !movie.isCustom ? `<a href="${getStreamingLink(movie.title)}" target="_blank" class="btn-streaming">📺 Where to Watch</a>` : '';
        const plexLink = movie.onPlex ? `<a href="${getPlexLink(movie.title)}" target="_blank" class="btn-plex">🎬 Plex</a>` : '';
        const tmdbLink = !movie.isCustom ? `<a href="https://www.themoviedb.org/movie/${movie.id}" target="_blank" class="btn-info">Cast & Crew</a>` : '';
        const rtScorePlaceholder = !movie.isCustom ? `<span class="rt-score" data-movie-id="${movie.id}"></span>` : '';

        html += `
            <div class="movie-card" data-id="${movie.id}">
                ${movie.isCustom ? '<span class="custom-badge">Custom</span>' : ''}
                ${posterUrl
                    ? `<img src="${posterUrl}" alt="${movie.title}" class="movie-poster">`
                    : `<div class="movie-poster placeholder">🎬</div>`
                }
                <div class="movie-info">
                    <h3 class="movie-title">${movie.title}</h3>
                    <p class="movie-date">${formatDate(releaseDate)}</p>
                    ${rtScorePlaceholder}
                    ${ratingHtml}
                    <div class="movie-actions">
                        ${!movie.isCustom ? `<button class="btn-trailer" onclick="openTrailer(${movie.id})">Trailer</button>` : ''}
                        ${tmdbLink}
                        ${plexLink}
                        ${streamingLink}
                        <button class="btn-remove" onclick="removeFromWatched(${movie.id})">Remove</button>
                    </div>
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    // Load RT scores after rendering
    loadRTScores(movies);
}

// Scroll to a letter section
function scrollToLetter(letter) {
    const element = document.getElementById(`letter-${letter}`);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Make scrollToLetter available globally
window.scrollToLetter = scrollToLetter;

// Save watched list to local storage and Firebase
function saveWatchedList() {
    localStorage.setItem('movieWatchedList', JSON.stringify(watchedList));

    // Also save to Firebase if user is signed in
    if (db && currentUser) {
        db.collection('users').doc(currentUser.uid).collection('data').doc('watched')
            .set({ movies: watchedList, updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
            .catch(error => console.error('Error saving watched list to Firebase:', error));
    }
}

// Load watched list from local storage
function loadWatchedList() {
    const saved = localStorage.getItem('movieWatchedList');
    if (saved) {
        watchedList = JSON.parse(saved);
        renderWatchedList();
    }
}

// Local Storage and Firebase Sync
function saveWatchlist() {
    localStorage.setItem('movieWatchlist', JSON.stringify(watchlist));

    // Also save to Firebase if user is signed in
    if (db && currentUser) {
        db.collection('users').doc(currentUser.uid).collection('data').doc('watchlist')
            .set({ movies: watchlist, updatedAt: firebase.firestore.FieldValue.serverTimestamp() })
            .catch(error => console.error('Error saving watchlist to Firebase:', error));
    }
}

function loadWatchlist() {
    const saved = localStorage.getItem('movieWatchlist');
    if (saved) {
        watchlist = JSON.parse(saved);
        renderWatchlist();
    }
}

// Utility Functions
function formatDate(dateString) {
    if (!dateString || dateString === 'TBA') return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
}

function getCountdown(dateString) {
    if (!dateString || dateString === 'TBA') return null;

    const releaseDate = new Date(dateString);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    releaseDate.setHours(0, 0, 0, 0);

    const diffTime = releaseDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
        return { text: 'Released', released: true };
    } else if (diffDays === 0) {
        return { text: 'Today!', released: false };
    } else if (diffDays === 1) {
        return { text: 'Tomorrow', released: false };
    } else if (diffDays <= 7) {
        return { text: `${diffDays} days`, released: false };
    } else if (diffDays <= 30) {
        const weeks = Math.ceil(diffDays / 7);
        return { text: `${weeks} week${weeks > 1 ? 's' : ''}`, released: false };
    } else {
        const months = Math.ceil(diffDays / 30);
        return { text: `${months} month${months > 1 ? 's' : ''}`, released: false };
    }
}

function closeModal() {
    searchResultsModal.classList.add('hidden');
}

// Browse movies by letter
function selectLetter(letter) {
    currentLetter = letter;
    browsePage = 1;
    allBrowseMovies = [];

    // Update active letter button
    const letterBtns = document.querySelectorAll('.letter-btn');
    letterBtns.forEach(btn => {
        btn.classList.toggle('active', btn.dataset.letter === letter);
    });

    fetchMoviesByLetter();
}

async function fetchMoviesByLetter(loadMore = false) {
    const browseMoviesContainer = document.getElementById('browseMovies');
    const loadMoreBrowseBtn = document.getElementById('loadMoreBrowseBtn');

    if (!TMDB_API_KEY) {
        browseMoviesContainer.innerHTML = '<p class="empty-state">Add your TMDB API key to browse movies</p>';
        return;
    }

    if (!loadMore) {
        browseMoviesContainer.innerHTML = '<p class="loading">Loading movies...</p>';
    }

    try {
        if (loadMore && loadMoreBrowseBtn) {
            loadMoreBrowseBtn.textContent = 'Loading...';
            loadMoreBrowseBtn.disabled = true;
        }

        // Search for movies starting with the selected letter
        const response = await fetch(
            `${TMDB_BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&query=${currentLetter}&language=en-US&page=${browsePage}`
        );
        const data = await response.json();

        totalBrowsePages = data.total_pages;

        if (data.results && data.results.length > 0) {
            // Filter to only movies that start with the selected letter and sort alphabetically
            const filteredMovies = data.results
                .filter(movie => movie.title.toUpperCase().startsWith(currentLetter))
                .sort((a, b) => a.title.localeCompare(b.title));

            allBrowseMovies = [...allBrowseMovies, ...filteredMovies];

            // Remove duplicates
            const uniqueMovies = allBrowseMovies.filter((movie, index, self) =>
                index === self.findIndex(m => m.id === movie.id)
            );
            allBrowseMovies = uniqueMovies;

            // Sort all movies alphabetically
            allBrowseMovies.sort((a, b) => a.title.localeCompare(b.title));

            if (allBrowseMovies.length > 0) {
                renderMovies(allBrowseMovies, browseMoviesContainer, 'browse');
            } else {
                browseMoviesContainer.innerHTML = `<p class="empty-state">No movies found starting with "${currentLetter}"</p>`;
            }

            // Show/hide load more button
            if (loadMoreBrowseBtn) {
                if (browsePage < totalBrowsePages) {
                    loadMoreBrowseBtn.classList.remove('hidden');
                    loadMoreBrowseBtn.textContent = 'Load More Movies';
                    loadMoreBrowseBtn.disabled = false;
                } else {
                    loadMoreBrowseBtn.classList.add('hidden');
                }
            }
        } else {
            browseMoviesContainer.innerHTML = `<p class="empty-state">No movies found starting with "${currentLetter}"</p>`;
            if (loadMoreBrowseBtn) {
                loadMoreBrowseBtn.classList.add('hidden');
            }
        }
    } catch (error) {
        console.error('Error fetching movies:', error);
        browseMoviesContainer.innerHTML = '<p class="empty-state">Error loading movies</p>';
        if (loadMoreBrowseBtn) {
            loadMoreBrowseBtn.textContent = 'Load More Movies';
            loadMoreBrowseBtn.disabled = false;
        }
    }
}

function loadMoreBrowse() {
    browsePage++;
    fetchMoviesByLetter(true);
}

// Fetch and open movie trailer
async function openTrailer(movieId) {
    try {
        const response = await fetch(
            `${TMDB_BASE_URL}/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`
        );
        const data = await response.json();

        // Find a YouTube trailer (prefer official trailers)
        const trailer = data.results.find(
            video => video.site === 'YouTube' && video.type === 'Trailer'
        ) || data.results.find(
            video => video.site === 'YouTube'
        );

        if (trailer) {
            window.open(`https://www.youtube.com/watch?v=${trailer.key}`, '_blank');
        } else {
            alert('No trailer available for this movie');
        }
    } catch (error) {
        console.error('Error fetching trailer:', error);
        alert('Error loading trailer');
    }
}

// Make functions available globally for onclick handlers
window.addToWatchlist = addToWatchlist;
window.removeFromWatchlist = removeFromWatchlist;
window.openTrailer = openTrailer;
window.markAsWatched = markAsWatched;
window.removeFromWatched = removeFromWatched;
window.rateMovie = rateMovie;
window.addToWatched = addToWatched;
window.fetchPlexLibrary = fetchPlexLibrary;
