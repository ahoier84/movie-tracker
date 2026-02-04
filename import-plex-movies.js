// Plex Movies Import Script
// Run this in the browser console after signing in to your Movie Tracker app

const plexMovies = [
  {
    "id": 217316,
    "title": "1",
    "release_date": "2013-09-30",
    "poster_path": "/nIHvkb3M1B9TnaiaABsfTzmFMYP.jpg",
    "overview": "Set in the golden era of Grand Prix Racing '1' tells the story of a generation of charismatic drivers who raced on the edge, risking their lives during Formula 1's deadliest period, and the men who stood up and changed the sport forever.",
    "watchedDate": "2026-02-03T20:23:46.000Z"
  },
  {
    "id": 192102,
    "title": "3 Days to Kill",
    "release_date": "2014-02-14",
    "poster_path": "/8xOH2JhBHPmk2ZCniBpWhiZ6xeC.jpg",
    "overview": "A dangerous international spy is determined to give up his high stakes life to finally build a closer relationship with his estranged wife and daughter. But first, he must complete one last mission - even if it means juggling the two toughest assignments yet: hunting down the world's most ruthless terrorist and looking after his teenage daughter for the first time in ten years, while his wife is out of town.",
    "watchedDate": "2026-02-03T20:23:46.000Z"
  },
  {
    "id": 10096,
    "title": "13 Going on 30",
    "release_date": "2004-04-13",
    "poster_path": "/iNZdSIfhSCMtRILDNyhLn8UKeSG.jpg",
    "overview": "After total humiliation at her thirteenth birthday party, Jenna Rink wants to just hide until she's thirty. Thanks to some magic wishing dust, Jenna's prayer has been answered. With a knockout body, a fabulous wardrobe, an athlete boyfriend, a dream job, and superstar friends, this can't be a better life. But soon Jenna realizes that adult life isn\u2019t as easy as she hoped for.",
    "watchedDate": "2026-02-03T20:23:46.000Z"
  },
  {
    "id": 64688,
    "title": "21 Jump Street",
    "release_date": "2012-03-14",
    "poster_path": "/8v3Sqv9UcIUC4ebmpKWROqPBINZ.jpg",
    "overview": "When cops Schmidt and Jenko join the secret Jump Street unit, they use their youthful appearances to go undercover as high school students. They trade in their guns and badges for backpacks, and set out to shut down a dangerous drug ring. But, as time goes on, Schmidt and Jenko discover that high school is nothing like it was just a few years earlier -- and, what's more, they must again confront the teenage terror and anxiety they thought they had left behind.",
    "watchedDate": "2026-02-03T20:23:46.000Z"
  },
  {
    "id": 6557,
    "title": "27 Dresses",
    "release_date": "2008-01-10",
    "poster_path": "/rEfourJfgEyKiewwH8ZkUYt9AqE.jpg",
    "overview": "Altruistic Jane finds herself facing her worst nightmare as her younger sister announces her engagement to the man Jane secretly adores.",
    "watchedDate": "2026-02-03T20:23:47.000Z"
  },
  {
    "id": 17984,
    "title": "The Absent-Minded Professor",
    "release_date": "1961-01-20",
    "poster_path": "/gCnuDDqoyaBdeeItQ4BjKtYpzF6.jpg",
    "overview": "Bumbling professor Ned Brainard accidentally invents flying rubber, or \"Flubber\", an incredible material that gains energy every time it strikes a hard surface. It allows for the invention of shoes that can allow jumps of amazing heights and enables a modified Model-T to fly. Unfortunately, no one is interested in the material except for Alonzo Hawk, a corrupt businessman who wants to steal the material for himself.",
    "watchedDate": "2026-02-03T20:23:47.000Z"
  },
  {
    "id": 10843,
    "title": "After Hours",
    "release_date": "1985-09-13",
    "poster_path": "/eamOBurHBu0MIxohTIVcfxmZ6Z7.jpg",
    "overview": "Desperate to escape his mind-numbing routine, uptown Manhattan office worker Paul Hackett ventures downtown for a hookup with a mystery woman.",
    "watchedDate": "2026-02-03T20:23:47.000Z"
  },
  {
    "id": 812,
    "title": "Aladdin",
    "release_date": "1992-11-25",
    "poster_path": "/eLFfl7vS8dkeG1hKp5mwbm37V83.jpg",
    "overview": "In the boorish city of Agrabah, kind-hearted street urchin Aladdin and Princess Jasmine fall in love, although she can only marry a prince. He and power-hungry Grand Vizier Jafar vie for a magic lamp that can fulfill their wishes.",
    "watchedDate": "2026-02-03T20:23:47.000Z"
  },
  {
    "id": 420817,
    "title": "Aladdin",
    "release_date": "2019-05-22",
    "poster_path": "/ykUEbfpkf8d0w49pHh0AD2KrT52.jpg",
    "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
    "watchedDate": "2026-02-03T20:23:48.000Z"
  },
  {
    "id": 218778,
    "title": "Alexander and the Terrible, Horrible, No Good, Very Bad Day",
    "release_date": "2014-10-08",
    "poster_path": "/pxbAepXQjsGFDHaR3dPndFSxDU0.jpg",
    "overview": "Alexander's day begins with gum stuck in his hair, followed by more calamities. Though he finds little sympathy from his family and begins to wonder if bad things only happen to him, his mom, dad, brother, and sister all find themselves living through their own terrible, horrible, no good, very bad day.",
    "watchedDate": "2026-02-03T20:23:48.000Z"
  },
  {
    "id": 16153,
    "title": "Alice Doesn't Live Here Anymore",
    "release_date": "1974-12-09",
    "poster_path": "/A99yzz1W3NCG6zR2HXSwn2kWlse.jpg",
    "overview": "After her husband dies, Alice and her son, Tommy, leave their small New Mexico town for California, where Alice hopes to make a new life for herself as a singer. Money problems force them to settle in Arizona instead, where Alice takes a job as waitress in a small diner.",
    "watchedDate": "2026-02-03T20:23:48.000Z"
  },
  {
    "id": 12092,
    "title": "Alice in Wonderland",
    "release_date": "1951-07-28",
    "poster_path": "/20cvfwfaFqNbe9Fc3VEHJuPRxmn.jpg",
    "overview": "On a golden afternoon, wildly curious young Alice tumbles into the burrow and enters the merry, madcap world of Wonderland full of whimsical escapades.",
    "watchedDate": "2026-02-03T20:23:48.000Z"
  },
  {
    "id": 258509,
    "title": "Alvin and the Chipmunks: The Road Chip",
    "release_date": "2015-12-17",
    "poster_path": "/16OcuuW5z509WILR6BmscNdXgw0.jpg",
    "overview": "Through a series of misunderstandings, Alvin, Simon and Theodore come to believe that Dave is going to propose to his new girlfriend in New York City - and dump them. They have three days to get to him and stop the proposal.",
    "watchedDate": "2026-02-03T20:23:49.000Z"
  },
  {
    "id": 102382,
    "title": "The Amazing Spider-Man 2",
    "release_date": "2014-04-16",
    "poster_path": "/dGjoPttcbKR5VWg1jQuNFB247KL.jpg",
    "overview": "For Peter Parker, life is busy. Between taking out the bad guys as Spider-Man and spending time with the person he loves, Gwen Stacy, high school graduation cannot come quickly enough. Peter has not forgotten about the promise he made to Gwen\u2019s father to protect her by staying away, but that is a promise he cannot keep. Things will change for Peter when a new villain, Electro, emerges, an old friend, Harry Osborn, returns, and Peter uncovers new clues about his past.",
    "watchedDate": "2026-02-03T20:23:49.000Z"
  },
  {
    "id": 168672,
    "title": "American Hustle",
    "release_date": "2013-12-03",
    "poster_path": "/z6O1KDhfWDTm5ZBr6Ovr0eg8LqO.jpg",
    "overview": "A conman and his seductive partner are forced to work for a wild FBI agent, who pushes them into a world of Jersey power-brokers and the Mafia.",
    "watchedDate": "2026-02-03T20:23:49.000Z"
  },
  {
    "id": 153518,
    "title": "The Angry Birds Movie",
    "release_date": "2016-05-11",
    "poster_path": "/iOH0fEFtV9z9rZp9zmBFGGeWicv.jpg",
    "overview": "An island populated entirely by happy, flightless birds or almost entirely. In this paradise, Red, a bird with a temper problem, speedy Chuck, and the volatile Bomb have always been outsiders. But when the island is visited by mysterious green piggies, it\u2019s up to these unlikely outcasts to figure out what the pigs are up to.",
    "watchedDate": "2026-02-03T20:23:49.000Z"
  },
  {
    "id": 102899,
    "title": "Ant-Man",
    "release_date": "2015-07-14",
    "poster_path": "/rQRnQfUl3kfp78nCWq8Ks04vnq1.jpg",
    "overview": "Armed with the astonishing ability to shrink in scale but increase in strength, master thief Scott Lang must embrace his inner-hero and help his mentor, Doctor Hank Pym, protect the secret behind his spectacular Ant-Man suit from a new generation of towering threats. Against seemingly insurmountable obstacles, Pym and Lang must plan and pull off a heist that will save the world.",
    "watchedDate": "2026-02-03T20:23:49.000Z"
  },
  {
    "id": 363088,
    "title": "Ant-Man and the Wasp",
    "release_date": "2018-07-04",
    "poster_path": "/cFQEO687n1K6umXbInzocxcnAQz.jpg",
    "overview": "Just when his time under house arrest is about to end, Scott Lang once again puts his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.",
    "watchedDate": "2026-02-03T20:23:50.000Z"
  },
  {
    "id": 640146,
    "title": "Ant-Man and the Wasp: Quantumania",
    "release_date": "2023-02-15",
    "poster_path": "/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg",
    "overview": "Super-Hero partners Scott Lang and Hope van Dyne, along with with Hope's parents Janet van Dyne and Hank Pym, and Scott's daughter Cassie Lang, find themselves exploring the Quantum Realm, interacting with strange new creatures and embarking on an adventure that will push them beyond the limits of what they thought possible.",
    "watchedDate": "2026-02-03T20:23:50.000Z"
  },
  {
    "id": 18660,
    "title": "The Apple Dumpling Gang",
    "release_date": "1975-07-01",
    "poster_path": "/cSbRtW2rSpz6AxS4BwtunpFHma.jpg",
    "overview": "A roving bachelor gets saddled with three children and a wealth of trouble when the youngsters stumble upon a huge gold nugget. They join forces with two bumbling outlaws to fend off the greedy townspeople and soon find themselves facing a surly gang of sharpshooters.",
    "watchedDate": "2026-02-03T20:23:50.000Z"
  },
  {
    "id": 22328,
    "title": "The Apple Dumpling Gang Rides Again",
    "release_date": "1979-06-27",
    "poster_path": "/oPGACB1ZfPM9bKlQva2TFpCkWSD.jpg",
    "overview": "Amos and Theodore, the two bumbling outlaw wannabes from The Apple Dumpling Gang, are back and trying to make it on their own. This time, the crazy duo gets involved in an army supply theft case -- and, of course, gets in lots of comic trouble along the way!",
    "watchedDate": "2026-02-03T20:23:50.000Z"
  },
  {
    "id": 68734,
    "title": "Argo",
    "release_date": "2012-10-11",
    "poster_path": "/m5gPWFZFIp4UJFABgWyLkbXv8GX.jpg",
    "overview": "As the Iranian revolution reaches a boiling point, a CIA 'exfiltration' specialist concocts a risky plan to free six Americans who have found shelter at the home of the Canadian ambassador.",
    "watchedDate": "2026-02-03T20:23:50.000Z"
  },
  {
    "id": 766,
    "title": "Army of Darkness",
    "release_date": "1992-10-31",
    "poster_path": "/xsgTuAtR2zSH8Umg3jWZcZjlDpe.jpg",
    "overview": "Ash, a handsome, shotgun-toting, chainsaw-armed department store clerk, is time warped backwards into England's Dark Ages, where he romances a beauty and faces legions of the undead.",
    "watchedDate": "2026-02-03T20:23:51.000Z"
  },
  {
    "id": 10865,
    "title": "Atlantis: The Lost Empire",
    "release_date": "2001-06-02",
    "poster_path": "/rdCyK9hgoA2vYrLtVFpDc3KWBaC.jpg",
    "overview": "A young linguist named Milo Thatch joins an intrepid group of explorers to find the mysterious lost continent of Atlantis.",
    "watchedDate": "2026-02-03T20:23:51.000Z"
  },
  {
    "id": 76600,
    "title": "Avatar: The Way of Water",
    "release_date": "2022-12-14",
    "poster_path": "/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
    "overview": "Set more than a decade after the events of the first film, learn the story of the Sully family (Jake, Neytiri, and their kids), the trouble that follows them, the lengths they go to keep each other safe, the battles they fight to stay alive, and the tragedies they endure.",
    "watchedDate": "2026-02-03T20:23:51.000Z"
  },
  {
    "id": 19995,
    "title": "Avatar",
    "release_date": "2009-12-16",
    "poster_path": "/gKY6q7SjCkAU6FqvqWybDYgUKIF.jpg",
    "overview": "In the 22nd century, a paraplegic Marine is dispatched to the moon Pandora on a unique mission, but becomes torn between following orders and protecting an alien civilization.",
    "watchedDate": "2026-02-03T20:23:51.000Z"
  },
  {
    "id": 24428,
    "title": "The Avengers",
    "release_date": "2012-04-25",
    "poster_path": "/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg",
    "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
    "watchedDate": "2026-02-03T20:23:51.000Z"
  },
  {
    "id": 99861,
    "title": "Avengers: Age of Ultron",
    "release_date": "2015-04-22",
    "poster_path": "/4ssDuvEDkSArWEdyBl2X5EHvYKU.jpg",
    "overview": "When Tony Stark tries to jumpstart a dormant peacekeeping program, things go awry and Earth\u2019s Mightiest Heroes are put to the ultimate test as the fate of the planet hangs in the balance. As the villainous Ultron emerges, it is up to The Avengers to stop him from enacting his terrible plans, and soon uneasy alliances and unexpected action pave the way for an epic and unique global adventure.",
    "watchedDate": "2026-02-03T20:23:52.000Z"
  },
  {
    "id": 299534,
    "title": "Avengers: Endgame",
    "release_date": "2019-04-24",
    "poster_path": "/ulzhLuWrPK07P1YkdWQLZnQh1JL.jpg",
    "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
    "watchedDate": "2026-02-03T20:23:52.000Z"
  },
  {
    "id": 299536,
    "title": "Avengers: Infinity War",
    "release_date": "2018-04-25",
    "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
    "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
    "watchedDate": "2026-02-03T20:23:52.000Z"
  },
  {
    "id": 2567,
    "title": "The Aviator",
    "release_date": "2004-12-17",
    "poster_path": "/lx4kWcZc3o9PaNxlQpEJZM17XUI.jpg",
    "overview": "A biopic depicting the life of filmmaker and aviation pioneer Howard Hughes from 1927 to 1947, during which time he became a successful film producer and an aviation magnate, while simultaneously growing more unstable due to severe obsessive-compulsive disorder.",
    "watchedDate": "2026-02-03T20:23:52.000Z"
  },
  {
    "id": 3170,
    "title": "Bambi",
    "release_date": "1942-08-14",
    "poster_path": "/wV9e2y4myJ4KMFsyFfWYcUOawyK.jpg",
    "overview": "Bambi's tale unfolds from season to season as the young prince of the forest learns about life, love, and friends.",
    "watchedDate": "2026-02-03T20:23:52.000Z"
  },
  {
    "id": 346698,
    "title": "Barbie",
    "release_date": "2023-07-19",
    "poster_path": "/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg",
    "overview": "Barbie and Ken are having the time of their lives in the colorful and seemingly perfect world of Barbie Land. However, when they get a chance to go to the real world, they soon discover the joys and perils of living among humans.",
    "watchedDate": "2026-02-03T20:23:53.000Z"
  },
  {
    "id": 414906,
    "title": "The Batman",
    "release_date": "2022-03-01",
    "poster_path": "/74xTEgt7R36Fpooo50r9T25onhq.jpg",
    "overview": "In his second year of fighting crime, Batman uncovers corruption in Gotham City that connects to his own family while facing a serial killer known as the Riddler.",
    "watchedDate": "2026-02-03T20:23:53.000Z"
  },
  {
    "id": 272,
    "title": "Batman Begins",
    "release_date": "2005-06-10",
    "poster_path": "/sPX89Td70IDDjVr85jdSBb4rWGr.jpg",
    "overview": "Driven by tragedy, billionaire Bruce Wayne dedicates his life to uncovering and defeating the corruption that plagues his home, Gotham City.  Unable to work within the system, he instead creates a new identity, a symbol of fear for the criminal underworld - The Batman.",
    "watchedDate": "2026-02-03T20:23:53.000Z"
  },
  {
    "id": 327418,
    "title": "Batman Unlimited: Animal Instincts",
    "release_date": "2015-05-12",
    "poster_path": "/9e6iPMBr9rQKPoK8g3YDTVvI5ud.jpg",
    "overview": "Gotham City is under siege by a series of bizarre crimes and only the world's greatest detective, Batman, can unravel the mystery! The trail leads to none other than the Penguin and his Animilitia, an animal-inspired squad of villains including Silverback, Cheetah, Killer Croc and the monstrous Man-Bat.",
    "watchedDate": "2026-02-03T20:23:53.000Z"
  },
  {
    "id": 342917,
    "title": "Batman Unlimited: Monster Mayhem",
    "release_date": "2015-08-18",
    "poster_path": "/jceXBNFMPLAKlo2MPJGJlXJBQJL.jpg",
    "overview": "The Joker is aided in his Halloween quest to render modern technology useless and take over Gotham City by Solomon Grundy, Silver Banshee, Clayface and Scarecrow.",
    "watchedDate": "2026-02-03T20:23:53.000Z"
  },
  {
    "id": 10020,
    "title": "Beauty and the Beast",
    "release_date": "1991-10-22",
    "poster_path": "/hUJ0UvQ5tgE2Z9WpfuduVSdiCiU.jpg",
    "overview": "Follow the adventures of Belle, a bright young woman who finds herself in the castle of a prince who's been turned into a mysterious beast. With the help of the castle's enchanted staff, Belle soon learns the most important lesson of all -- that true beauty comes from within.",
    "watchedDate": "2026-02-03T20:23:54.000Z"
  },
  {
    "id": 321612,
    "title": "Beauty and the Beast",
    "release_date": "2017-03-16",
    "poster_path": "/hKegSKIDep2ewJWPUQD7u0KqFIp.jpg",
    "overview": "A live-action adaptation of Disney's version of the classic tale of a cursed prince and a beautiful young woman who helps him break the spell.",
    "watchedDate": "2026-02-03T20:23:54.000Z"
  },
  {
    "id": 177572,
    "title": "Big Hero 6",
    "release_date": "2014-10-24",
    "poster_path": "/2mxS4wUimwlLmI1xp6QW6NSU361.jpg",
    "overview": "A special bond develops between plus-sized inflatable robot Baymax, and prodigy Hiro Hamada, who team up with a group of friends to form a band of high-tech heroes.",
    "watchedDate": "2026-02-03T20:23:54.000Z"
  },
  {
    "id": 318846,
    "title": "The Big Short",
    "release_date": "2015-12-11",
    "poster_path": "/scVEaJEwP8zUix8vgmMoJJ9Nq0w.jpg",
    "overview": "The men who made millions from a global economic meltdown.",
    "watchedDate": "2026-02-03T20:23:55.000Z"
  },
  {
    "id": 1649,
    "title": "Bill & Ted's Bogus Journey",
    "release_date": "1991-07-19",
    "poster_path": "/tldtDfLnPFOtTWp758EmIP2Hbz5.jpg",
    "overview": "Amiable slackers Bill and Ted are once again roped into a fantastical adventure when De Nomolos, a villain from the future, sends evil robot duplicates of the two lads to terminate and replace them. The robot doubles actually succeed in killing Bill and Ted, but the two are determined to escape the afterlife, challenging the Grim Reaper to a series of games in order to return to the land of the living.",
    "watchedDate": "2026-02-03T20:23:55.000Z"
  },
  {
    "id": 1648,
    "title": "Bill & Ted's Excellent Adventure",
    "release_date": "1989-02-17",
    "poster_path": "/tV25lGWGWGEqUe3U0xjQTBgilSx.jpg",
    "overview": "Bill and Ted are high school buddies starting a band. They are also about to fail their history class\u2014which means Ted would be sent to military school\u2014but receive help from Rufus, a traveller from a future where their band is the foundation for a perfect society. With the use of Rufus' time machine, Bill and Ted travel to various points in history, returning with important figures to help them complete their final history presentation.",
    "watchedDate": "2026-02-03T20:23:55.000Z"
  },
  {
    "id": 194662,
    "title": "Birdman or (The Unexpected Virtue of Ignorance)",
    "release_date": "2014-10-17",
    "poster_path": "/rHUg2AuIuLSIYMYFgavVwqt1jtc.jpg",
    "overview": "A fading actor best known for his portrayal of a popular superhero attempts to mount a comeback by appearing in a Broadway play. As opening night approaches, his attempts to become more altruistic, rebuild his career, and reconnect with friends and family prove more difficult than expected.",
    "watchedDate": "2026-02-03T20:23:56.000Z"
  },
  {
    "id": 10957,
    "title": "The Black Cauldron",
    "release_date": "1985-07-24",
    "poster_path": "/ef11J5KGMp26kEzeg8ghAKeB65C.jpg",
    "overview": "Taran is an assistant pigkeeper with boyish dreams of becoming a great warrior. However, he has to put the daydreaming aside when his charge, an oracular pig named Hen Wen, is kidnapped by an evil lord known as the Horned King. The villain hopes Hen will show him the way to The Black Cauldron, which has the power to create a giant army of unstoppable soldiers.",
    "watchedDate": "2026-02-03T20:23:56.000Z"
  },
  {
    "id": 284054,
    "title": "Black Panther",
    "release_date": "2018-02-13",
    "poster_path": "/uxzzxijgPIY7slzFvMotPv8wjKA.jpg",
    "overview": "King T'Challa returns home to the reclusive, technologically advanced African nation of Wakanda to serve as his country's new leader. However, T'Challa soon finds that he is challenged for the throne by factions within his own country as well as without. Using powers reserved to Wakandan kings, T'Challa assumes the Black Panther mantle to join with ex-girlfriend Nakia, the queen-mother, his princess-kid sister, members of the Dora Milaje (the Wakandan 'special forces') and an American secret agent, to prevent Wakanda from being dragged into a world war.",
    "watchedDate": "2026-02-03T20:23:56.000Z"
  },
  {
    "id": 505642,
    "title": "Black Panther: Wakanda Forever",
    "release_date": "2022-11-09",
    "poster_path": "/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
    "overview": "Queen Ramonda, Shuri, M\u2019Baku, Okoye and the Dora Milaje fight to protect their nation from intervening world powers in the wake of King T\u2019Challa\u2019s death.  As the Wakandans strive to embrace their next chapter, the heroes must band together with the help of War Dog Nakia and Everett Ross and forge a new path for the kingdom of Wakanda.",
    "watchedDate": "2026-02-03T20:23:56.000Z"
  },
  {
    "id": 13053,
    "title": "Bolt",
    "release_date": "2008-11-21",
    "poster_path": "/v5aC4nrzXFGJDWY4JO1eengXzqk.jpg",
    "overview": "Bolt is the star of the biggest show in Hollywood. The only problem is, he thinks it's real. After he's accidentally shipped to New York City and separated from Penny, his beloved co-star and owner, Bolt must harness all his \"super powers\" to find a way home.",
    "watchedDate": "2026-02-03T20:23:57.000Z"
  },
  {
    "id": 228326,
    "title": "The Book of Life",
    "release_date": "2014-10-01",
    "poster_path": "/aotTZos5KswgCryEzx2rlOjFsm1.jpg",
    "overview": "The journey of Manolo, a young man who is torn between fulfilling the expectations of his family and following his heart. Before choosing which path to follow, he embarks on an incredible adventure that spans fantastical worlds where he must face his greatest fears.",
    "watchedDate": "2026-02-03T20:23:57.000Z"
  },
  {
    "id": 22784,
    "title": "Boxcar Bertha",
    "release_date": "1972-06-14",
    "poster_path": "/gF5VslUB2xpWbboc735VVnO7DXh.jpg",
    "overview": "\"Boxcar\" Bertha Thompson, a transient woman in Arkansas during the violence-filled Depression of the early '30s, meets up with rabble-rousing union man \"Big\" Bill Shelly and the two team up to fight the corrupt railroad establishment.",
    "watchedDate": "2026-02-03T20:23:57.000Z"
  },
  {
    "id": 8649,
    "title": "Bringing Out the Dead",
    "release_date": "1999-10-22",
    "poster_path": "/gE2Q8mL0m0EA6HakRyc92uzSPJn.jpg",
    "overview": "Once called \"Father Frank\" for his efforts to rescue lives, Frank Pierce sees the ghosts of those he failed to save around every turn. He has tried everything he can to get fired, calling in sick, delaying taking calls where he might have to face one more victim he couldn't help, yet cannot quit the job on his own.",
    "watchedDate": "2026-02-03T20:23:57.000Z"
  },
  {
    "id": 9487,
    "title": "A Bug's Life",
    "release_date": "1998-11-25",
    "poster_path": "/Ah3J9OJVc2CNCuH2zMydXy9fmIC.jpg",
    "overview": "On behalf of \"oppressed bugs everywhere,\" an inventive ant named Flik hires a troupe of warrior bugs to defend his bustling colony from a horde of freeloading grasshoppers led by the evil-minded Hopper.",
    "watchedDate": "2026-02-03T20:23:57.000Z"
  },
  {
    "id": 1598,
    "title": "Cape Fear",
    "release_date": "1991-11-13",
    "poster_path": "/ws4mrtndzgSH5QGCamOFAgilr2R.jpg",
    "overview": "Sam Bowden is a small-town corporate attorney. Max Cady is a tattooed, cigar-smoking, Bible-quoting, psychotic rapist. What do they have in common? 14 years ago, Sam was a public defender assigned to Max Cady's rape trial, and he made a serious error: he hid a document from his illiterate client that could have gotten him acquitted. Now, the cagey Cady has been released, and he intends to teach Sam Bowden and his family a thing or two about loss.",
    "watchedDate": "2026-02-03T20:23:58.000Z"
  },
  {
    "id": 271110,
    "title": "Captain America: Civil War",
    "release_date": "2016-04-27",
    "poster_path": "/rAGiXaUfPzY7CDEyNKUofk3Kw2e.jpg",
    "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
    "watchedDate": "2026-02-03T20:23:58.000Z"
  },
  {
    "id": 1771,
    "title": "Captain America: The First Avenger",
    "release_date": "2011-07-22",
    "poster_path": "/vSNxAJTlD0r02V9sPYpOjqDZXUK.jpg",
    "overview": "During World War II, Steve Rogers is a sickly man from Brooklyn who's transformed into super-soldier Captain America to aid in the war effort. Rogers must stop the Red Skull \u2013 Adolf Hitler's ruthless head of weaponry, and the leader of an organization that intends to use a mysterious device of untold powers for world domination.",
    "watchedDate": "2026-02-03T20:23:58.000Z"
  },
  {
    "id": 100402,
    "title": "Captain America: The Winter Soldier",
    "release_date": "2014-03-20",
    "poster_path": "/tVFRpFw3xTedgPGqxW0AOI8Qhh0.jpg",
    "overview": "After the cataclysmic events in New York with The Avengers, Steve Rogers, aka Captain America is living quietly in Washington, D.C. and trying to adjust to the modern world. But when a S.H.I.E.L.D. colleague comes under attack, Steve becomes embroiled in a web of intrigue that threatens to put the world at risk. Joining forces with the Black Widow, Captain America struggles to expose the ever-widening conspiracy while fighting off professional assassins sent to silence him at every turn. When the full scope of the villainous plot is revealed, Captain America and the Black Widow enlist the help of a new ally, the Falcon. However, they soon find themselves up against an unexpected and formidable enemy\u2014the Winter Soldier.",
    "watchedDate": "2026-02-03T20:23:58.000Z"
  },
  {
    "id": 822119,
    "title": "Captain America: Brave New World",
    "release_date": "2025-02-12",
    "poster_path": "/pzIddUEMWhWzfvLI3TwxUG2wGoi.jpg",
    "overview": "After meeting with newly elected U.S. President Thaddeus Ross, Sam finds himself in the middle of an international incident. He must discover the reason behind a nefarious global plot before the true mastermind has the entire world seeing red.",
    "watchedDate": "2026-02-03T20:23:59.000Z"
  },
  {
    "id": 299537,
    "title": "Captain Marvel",
    "release_date": "2019-03-06",
    "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
    "overview": "The story follows Carol Danvers as she becomes one of the universe\u2019s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
    "watchedDate": "2026-02-03T20:23:59.000Z"
  },
  {
    "id": 109424,
    "title": "Captain Phillips",
    "release_date": "2013-10-10",
    "poster_path": "/8Td0kkocW6sD3uRpzwfMfkqMWhx.jpg",
    "overview": "The true story of Captain Richard Phillips and the 2009 hijacking by Somali pirates of the US-flagged MV Maersk Alabama, the first American cargo ship to be hijacked in two hundred years.",
    "watchedDate": "2026-02-03T20:23:59.000Z"
  },
  {
    "id": 268531,
    "title": "Captain Underpants: The First Epic Movie",
    "release_date": "2017-06-01",
    "poster_path": "/vKSmaPct5OEeMoD8ue30RisHlKD.jpg",
    "overview": "Based on the bestselling book series, this outrageous comedy tells the story of George and Harold,  two overly imaginative pranksters who hypnotize their principal into thinking he\u2019s an enthusiastic, yet dimwitted, superhero named Captain Underpants.",
    "watchedDate": "2026-02-03T20:23:59.000Z"
  },
  {
    "id": 49013,
    "title": "Cars 2",
    "release_date": "2011-06-11",
    "poster_path": "/okIz1HyxeVOMzYwwHUjH2pHi74I.jpg",
    "overview": "Star race car Lightning McQueen and his pal Mater head overseas to compete in the World Grand Prix race. But the road to the championship becomes rocky as Mater gets caught up in an intriguing adventure of his own: international espionage.",
    "watchedDate": "2026-02-03T20:23:59.000Z"
  },
  {
    "id": 260514,
    "title": "Cars 3",
    "release_date": "2017-06-15",
    "poster_path": "/fyy1nDC8wm553FCiBDojkJmKLCs.jpg",
    "overview": "Blindsided by a new generation of blazing-fast racers, the legendary Lightning McQueen is suddenly pushed out of the sport he loves. To get back in the game, he will need the help of an eager young race technician with her own plan to win, inspiration from the late Fabulous Hudson Hornet, and a few unexpected turns.",
    "watchedDate": "2026-02-03T20:24:00.000Z"
  },
  {
    "id": 920,
    "title": "Cars",
    "release_date": "2006-06-08",
    "poster_path": "/2Touk3m5gzsqr1VsvxypdyHY5ci.jpg",
    "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
    "watchedDate": "2026-02-03T20:24:00.000Z"
  },
  {
    "id": 36557,
    "title": "Casino Royale",
    "release_date": "2006-11-14",
    "poster_path": "/lMrxYKKhd4lqRzwUHAy5gcx9PSO.jpg",
    "overview": "Le Chiffre, a banker to the world's terrorists, is scheduled to participate in a high-stakes poker game in Montenegro, where he intends to use his winnings to establish his financial grip on the terrorist market. M sends Bond\u2014on his maiden mission as a 00 Agent\u2014to attend this game and prevent Le Chiffre from winning. With the help of Vesper Lynd and Felix Leiter, Bond enters the most important poker game in his already dangerous career.",
    "watchedDate": "2026-02-03T20:24:00.000Z"
  },
  {
    "id": 198184,
    "title": "Chappie",
    "release_date": "2015-03-04",
    "poster_path": "/uuDUpzlMFomdSfNWlpEPS9nVZWV.jpg",
    "overview": "Every child comes into the world full of promise, and none more so than Chappie: he is gifted, special, a prodigy. Like any child, Chappie will come under the influence of his surroundings\u2014some good, some bad\u2014and he will rely on his heart and soul to find his way in the world and become his own man. But there's one thing that makes Chappie different from any one else: he is a robot.",
    "watchedDate": "2026-02-03T20:24:00.000Z"
  },
  {
    "id": 13187,
    "title": "A Charlie Brown Christmas",
    "release_date": "1965-12-09",
    "poster_path": "/vtaufTzJBMJAeziQA1eP4BLU24C.jpg",
    "overview": "When Charlie Brown complains about the overwhelming materialism that he sees amongst everyone during the Christmas season, Lucy suggests that he become director of the school Christmas pageant. Charlie Brown accepts, but it is a frustrating struggle. When an attempt to restore the proper spirit with a forlorn little fir Christmas tree fails, he needs Linus' help to learn the meaning of Christmas.",
    "watchedDate": "2026-02-03T20:24:00.000Z"
  },
  {
    "id": 2255,
    "title": "Chasing Amy",
    "release_date": "1997-04-04",
    "poster_path": "/9LKAXq3FztoUbsTR52Fmkzoqao2.jpg",
    "overview": "Holden and Banky are comic book artists. Everything is going good for them until they meet Alyssa, also a comic book artist. Holden falls for her, but his hopes are crushed when he finds out she's a lesbian.",
    "watchedDate": "2026-02-03T20:24:01.000Z"
  },
  {
    "id": 9982,
    "title": "Chicken Little",
    "release_date": "2005-11-04",
    "poster_path": "/87FpA4b90eTaw3U6zmCNikoPLir.jpg",
    "overview": "When the sky really is falling and sanity has flown the coop, who will rise to save the day? Together with his hysterical band of misfit friends, Chicken Little must hatch a plan to save the planet from alien invasion and prove that the world's biggest hero is a little chicken.",
    "watchedDate": "2026-02-03T20:24:01.000Z"
  },
  {
    "id": 17979,
    "title": "A Christmas Carol",
    "release_date": "2009-11-04",
    "poster_path": "/xNwlAIdx1Ln28GRiQttUP9Gojy2.jpg",
    "overview": "Miser Ebenezer Scrooge is awakened on Christmas Eve by spirits who reveal to him his own miserable existence, what opportunities he wasted in his youth, his current cruelties, and the dire fate that awaits him if he does not change his ways. Scrooge is faced with his own story of growing bitterness and meanness, and must decide what his own future will hold: death or redemption.",
    "watchedDate": "2026-02-03T20:24:01.000Z"
  },
  {
    "id": 850,
    "title": "A Christmas Story",
    "release_date": "1983-11-18",
    "poster_path": "/34nSHYqmb7222tiqiuKqKJmZiQa.jpg",
    "overview": "The comic mishaps and adventures of a young boy named Ralph, trying to convince his parents, teachers, and Santa that a Red Ryder B.B. gun really is the perfect Christmas gift for the 1940s.",
    "watchedDate": "2026-02-03T20:24:01.000Z"
  },
  {
    "id": 11224,
    "title": "Cinderella",
    "release_date": "1950-02-22",
    "poster_path": "/4nssBcQUBadCTBjrAkX46mVEKts.jpg",
    "overview": "Cinderella has faith her dreams of a better life will come true. With help from her loyal mice friends and a wave of her Fairy Godmother's wand, Cinderella's rags are magically turned into a glorious gown and off she goes to the Royal Ball. But when the clock strikes midnight, the spell is broken, leaving a single glass slipper... the only key to the ultimate fairy-tale ending!",
    "watchedDate": "2026-02-03T20:24:01.000Z"
  },
  {
    "id": 15,
    "title": "Citizen Kane",
    "release_date": "1941-04-17",
    "poster_path": "/sav0jxhqiH0bPr2vZFU0Kjt2nZL.jpg",
    "overview": "Newspaper magnate Charles Foster Kane is taken from his mother as a boy and made the ward of a rich industrialist. As a result, every well-meaning, tyrannical or self-destructive move he makes for the rest of his life appears in some way to be a reaction to that deeply wounding event.",
    "watchedDate": "2026-02-03T20:24:02.000Z"
  },
  {
    "id": 22794,
    "title": "Cloudy with a Chance of Meatballs",
    "release_date": "2009-09-17",
    "poster_path": "/qhOhIKf7QEyQ5dMrRUqs5eTX1Oq.jpg",
    "overview": "Inventor Flint Lockwood creates a machine that makes clouds rain food, enabling the down-and-out citizens of Chewandswallow to feed themselves. But when the falling food reaches gargantuan proportions, Flint must scramble to avert disaster. Can he regain control of the machine and put an end to the wild weather before the town is destroyed?",
    "watchedDate": "2026-02-03T20:24:02.000Z"
  },
  {
    "id": 109451,
    "title": "Cloudy with a Chance of Meatballs 2",
    "release_date": "2013-09-26",
    "poster_path": "/ss5NcK2NWFg2YcKKYXLrk8q1myS.jpg",
    "overview": "After the disastrous food storm in the first film, Flint and his friends are forced to leave the town. Flint accepts the invitation from his idol Chester V to join The Live Corp Company, which has been tasked to clean the island, and where the best inventors in the world create technologies for the betterment of mankind. When Flint discovers that his machine still operates and now creates mutant food beasts like living pickles, hungry tacodiles, shrimpanzees and apple pie-thons, he and his friends must return to save the world.",
    "watchedDate": "2026-02-03T20:24:02.000Z"
  },
  {
    "id": 354912,
    "title": "Coco",
    "release_date": "2017-10-27",
    "poster_path": "/6Ryitt95xrO8KXuqRGm1fUuNwqF.jpg",
    "overview": "Despite his family\u2019s baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead following a mysterious chain of events. Along the way, he meets charming trickster Hector, and together, they set off on an extraordinary journey to unlock the real story behind Miguel's family history.",
    "watchedDate": "2026-02-03T20:24:02.000Z"
  },
  {
    "id": 548473,
    "title": "Color Out of Space",
    "release_date": "2020-01-24",
    "poster_path": "/k7rD7LzlsPS4jmE6Siah0QO4tAc.jpg",
    "overview": "The Gardner family moves to a remote farmstead in rural New England to escape the hustle of the 21st century. They are busy adapting to their new life when a meteorite crashes into their front yard, melts into the earth, and infects both the land and the properties of space-time with a strange, otherworldly colour. To their horror, the family discovers this alien force is gradually mutating every life form that it touches\u2014including them.",
    "watchedDate": "2026-02-03T20:24:02.000Z"
  },
  {
    "id": 20048,
    "title": "Confessions of a Shopaholic",
    "release_date": "2009-02-05",
    "poster_path": "/r17R9OIC0pKDqqsNore6atYLCVZ.jpg",
    "overview": "In the glamorous world of New York City, Rebecca Bloomwood is a fun-loving girl who is really good at shopping \u2013 a little too good, perhaps. She dreams of working for her favorite fashion magazine, but can't quite get her foot in the door \u2013 until ironically, she snags a job as an advice columnist for a financial magazine published by the same company.",
    "watchedDate": "2026-02-03T20:24:03.000Z"
  },
  {
    "id": 11132,
    "title": "Confessions of a Teenage Drama Queen",
    "release_date": "2004-02-17",
    "poster_path": "/3LUWyY3WXNDaezwbz69uB9qtVpk.jpg",
    "overview": "After moving to New Jersey, Lola bags a coveted role in a school play, which earns her the wrath of Carla, the most popular girl in school, who will do anything to ruin Lola's life.",
    "watchedDate": "2026-02-03T20:24:03.000Z"
  },
  {
    "id": 561,
    "title": "Constantine",
    "release_date": "2005-02-08",
    "poster_path": "/vPYgvd2MwHlxTamAOjwVQp4qs1W.jpg",
    "overview": "John Constantine has literally been to Hell and back. When he teams up with a policewoman to solve the mysterious suicide of her twin sister, their investigation takes them through the world of demons and angels that exists beneath the landscape of contemporary Los Angeles.",
    "watchedDate": "2026-02-03T20:24:03.000Z"
  },
  {
    "id": 155,
    "title": "The Dark Knight",
    "release_date": "2008-07-16",
    "poster_path": "/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    "overview": "Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.",
    "watchedDate": "2026-02-03T20:24:03.000Z"
  },
  {
    "id": 870360,
    "title": "The Day the Earth Blew Up: A Looney Tunes Movie",
    "release_date": "2024-08-01",
    "poster_path": "/s2lB1kaYCdGSnZX5meQCiOR6HfX.jpg",
    "overview": "Porky and Daffy, the classic animated odd couple, turn into unlikely heroes when their antics at the local bubble gum factory uncover a secret alien mind control plot. Against all odds, the two are determined to save their town (and the world!)...that is if they don't drive each other crazy in the process.",
    "watchedDate": "2026-02-03T20:24:04.000Z"
  },
  {
    "id": 293660,
    "title": "Deadpool",
    "release_date": "2016-02-09",
    "poster_path": "/3E53WEZJqP6aM84D8CckXx4pIHw.jpg",
    "overview": "The origin story of former Special Forces operative turned mercenary Wade Wilson, who, after being subjected to a rogue experiment that leaves him with accelerated healing powers, adopts the alter ego Deadpool. Armed with his new abilities and a dark, twisted sense of humor, Deadpool hunts down the man who nearly destroyed his life.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 533535,
    "title": "Deadpool & Wolverine",
    "release_date": "2024-07-24",
    "poster_path": "/8cdWjvZQUExUUTzyp4t6EDMubfO.jpg",
    "overview": "A listless Wade Wilson toils away in civilian life with his days as the morally flexible mercenary, Deadpool, behind him. But when his homeworld faces an existential threat, Wade must reluctantly suit-up again with an even more reluctant Wolverine.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 1422,
    "title": "The Departed",
    "release_date": "2006-10-04",
    "poster_path": "/nT97ifVT2J1yMQmeq20Qblg61T.jpg",
    "overview": "To take down South Boston's Irish Mafia, the police send in one of their own to infiltrate the underworld, not realizing the syndicate has done likewise. While an undercover cop curries favor with the mob kingpin, a career criminal rises through the police ranks. But both sides soon discover there's a mole among them.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 93456,
    "title": "Despicable Me 2",
    "release_date": "2013-06-26",
    "poster_path": "/5Fh4NdoEnCjCK9wLjdJ9DJNFl2b.jpg",
    "overview": "Gru is recruited by the Anti-Villain League to help deal with a powerful new super criminal.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 324852,
    "title": "Despicable Me 3",
    "release_date": "2017-06-15",
    "poster_path": "/6t3YWl7hrr88lCEFlGVqW5yV99R.jpg",
    "overview": "Gru and his wife Lucy must stop former '80s child star Balthazar Bratt from achieving world domination.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 447404,
    "title": "Pok\u00e9mon Detective Pikachu",
    "release_date": "2019-05-03",
    "poster_path": "/uhWvnFgg3BNlcUz0Re1HfQqIcCD.jpg",
    "overview": "In a world where people collect pocket-size monsters (Pok\u00e9mon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
    "watchedDate": "2026-02-03T20:24:05.000Z"
  },
  {
    "id": 36669,
    "title": "Die Another Day",
    "release_date": "2002-11-17",
    "poster_path": "/bZmGqOhMhaLn8AoFMvFDct4tbrL.jpg",
    "overview": "James Bond is sent to investigate the connection between a North Korean terrorist and a diamond mogul, who is funding the development of an international space weapon.",
    "watchedDate": "2026-02-03T20:24:06.000Z"
  },
  {
    "id": 562,
    "title": "Die Hard",
    "release_date": "1988-07-15",
    "poster_path": "/7Bjd8kfmDSOzpmhySpEhkUyK2oH.jpg",
    "overview": "NYPD cop John McClane's plan to reconcile with his estranged wife is thrown for a serious loop when, minutes after he arrives at her office's Christmas Party, the entire building is overtaken by a group of terrorists. With little help from the LAPD, wisecracking McClane sets out to single-handedly rescue the hostages and bring the bad guys down.",
    "watchedDate": "2026-02-03T20:24:06.000Z"
  },
  {
    "id": 1573,
    "title": "Die Hard 2",
    "release_date": "1990-07-03",
    "poster_path": "/ybki0UWO3OPhaM6MSniuKC7sy1R.jpg",
    "overview": "One year after his heroics in Los Angeles, John McClane is an off-duty cop who is the wrong guy in the wrong place at the wrong time. On a snowy Christmas Eve, as he waits for his wife's plane to land at Washington Dulles International Airport, terrorists take over the air traffic control system in a plot to free a South American army general and drug smuggler being flown into the US to face drug charges. It's now up to McClane to take on the terrorists, while coping with an inept airport police chief, an uncooperative anti-terrorist squad, and the life of his wife and everyone else trapped in planes circling overhead.",
    "watchedDate": "2026-02-03T20:24:06.000Z"
  },
  {
    "id": 1572,
    "title": "Die Hard: With a Vengeance",
    "release_date": "1995-05-19",
    "poster_path": "/buqmCdFQEWwEpL3agGgg2GVjN2d.jpg",
    "overview": "New York detective John McClane is back and kicking bad-guy butt in the third installment of this action-packed series, which finds him teaming with civilian Zeus Carver to prevent the loss of innocent lives. McClane thought he'd seen it all, until a genius named Simon engages McClane, his new \"partner\" -- and his beloved city -- in a deadly game that demands their concentration.",
    "watchedDate": "2026-02-03T20:24:06.000Z"
  },
  {
    "id": 10677,
    "title": "Dirty Dancing: Havana Nights",
    "release_date": "2004-02-27",
    "poster_path": "/5FnSCH592YIivbKtotq7YQanvmu.jpg",
    "overview": "In pre-revolution Cuba, Katey Miller is about to defy everyone's expectations. Instead of a parent-approved suitor, Katey is drawn to the sexy waiter, Javier, who spends his nights dancing in Havana's nightclubs. As she secretly learns to dance with Javier, she learns the meanings of love, sensuality and independence.",
    "watchedDate": "2026-02-03T20:24:06.000Z"
  },
  {
    "id": 284052,
    "title": "Doctor Strange",
    "release_date": "2016-10-25",
    "poster_path": "/xf8PbyQcR5ucXErmZNzdKR0s8ya.jpg",
    "overview": "After his career is destroyed, a brilliant but arrogant surgeon gets a new lease on life when a sorcerer takes him under her wing and trains him to defend the world against evil.",
    "watchedDate": "2026-02-03T20:24:07.000Z"
  },
  {
    "id": 453395,
    "title": "Doctor Strange in the Multiverse of Madness",
    "release_date": "2022-05-04",
    "poster_path": "/ddJcSKbcp4rKZTmuyWaMhuwcfMz.jpg",
    "overview": "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary.",
    "watchedDate": "2026-02-03T20:24:07.000Z"
  },
  {
    "id": 9472,
    "title": "DodgeBall: A True Underdog Story",
    "release_date": "2004-06-18",
    "poster_path": "/r8KbNHkkwFXLjV1suGwm0Qjure5.jpg",
    "overview": "When megalomaniacal White Goodman, the owner of a trendy, high-end fitness center, makes a move to take over the struggling local gym run by happy-go-lucky Pete La Fleur, there's only one way for La Fleur to fight back: dodgeball. Aided by a dodgeball guru and Goodman's attorney, La Fleur and his rag-tag team of underdogs launch a knock-down, drag-out battle in which the winner takes all.",
    "watchedDate": "2026-02-03T20:24:07.000Z"
  },
  {
    "id": 774370,
    "title": "Dog Man",
    "release_date": "2025-01-24",
    "poster_path": "/89wNiexZdvLQ41OQWIsQy4O6jAQ.jpg",
    "overview": "When a faithful police dog and his human police officer owner are injured together on the job, a harebrained but life-saving surgery fuses the two of them together and Dog Man is born. Dog Man is sworn to protect and serve\u2014and fetch, sit and roll over. As Dog Man embraces his new identity and strives to impress his Chief, he must stop the pretty evil plots of feline supervillain Petey the Cat.",
    "watchedDate": "2026-02-03T20:24:07.000Z"
  },
  {
    "id": 752361,
    "title": "Dora the Explorer: Dora's Easter Adventure",
    "release_date": "2012-02-14",
    "poster_path": "/6C8OQYSIFvHm3gxhlXxE7jSGULt.jpg",
    "overview": "Get ready for an egg-citing Easter adventure as you help Dora and Boots save the Hip-Hop Bunny's basket of eggs! Dora and Boots are waiting for a visit from the Hip-Hop Bunny, who's bringing all the Easter Eggs for the big Egg Hunt! But when Swiper swipes the Hip-Hop Bunny's basket, Dora and Boots need your help on an adventure to make sure it's a hop-hop-happy Easter for all! Plus, a troll wedding and a trip to Troll Land!",
    "watchedDate": "2026-02-03T20:24:07.000Z"
  },
  {
    "id": 646,
    "title": "Dr. No",
    "release_date": "1962-10-07",
    "poster_path": "/f9HsemSsBEHN5eoMble1bj6fDxs.jpg",
    "overview": "Agent 007 battles mysterious Dr. No, a scientific genius bent on destroying the U.S. space program. As the countdown to disaster begins, Bond must go to Jamaica, where he encounters beautiful Honey Ryder, to confront a megalomaniacal villain in his massive island headquarters.",
    "watchedDate": "2026-02-03T20:24:08.000Z"
  },
  {
    "id": 438631,
    "title": "Dune",
    "release_date": "2021-09-15",
    "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
    "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
    "watchedDate": "2026-02-03T20:24:08.000Z"
  },
  {
    "id": 693134,
    "title": "Dune: Part Two",
    "release_date": "2024-02-27",
    "poster_path": "/6izwz7rsy95ARzTR3poZ8H6c5pp.jpg",
    "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
    "watchedDate": "2026-02-03T20:24:08.000Z"
  },
  {
    "id": 137113,
    "title": "Edge of Tomorrow",
    "release_date": "2014-05-27",
    "poster_path": "/nBM9MMa2WCwvMG4IJ3eiGUdbPe6.jpg",
    "overview": "Major Bill Cage is an officer who has never seen a day of combat when he is unceremoniously demoted and dropped into combat. Cage is killed within minutes, managing to take an alpha alien down with him. He awakens back at the beginning of the same day and is forced to fight and die again... and again - as physical contact with the alien has thrown him into a time loop.",
    "watchedDate": "2026-02-03T20:24:08.000Z"
  },
  {
    "id": 976573,
    "title": "Elemental",
    "release_date": "2023-06-14",
    "poster_path": "/4Y1WNkd88JXmGfhtWR7dmDAo1T2.jpg",
    "overview": "In a city where fire, water, land and air residents live together, a fiery young woman and a go-with-the-flow guy will discover something elemental: how much they have in common.",
    "watchedDate": "2026-02-03T20:24:08.000Z"
  },
  {
    "id": 10719,
    "title": "Elf",
    "release_date": "2003-11-07",
    "poster_path": "/oOleziEempUPu96jkGs0Pj6tKxj.jpg",
    "overview": "When young Buddy falls into Santa's gift sack on Christmas Eve, he's transported back to the North Pole and raised as a toy-making elf by Santa's helpers. But as he grows into adulthood, he can't shake the nagging feeling that he doesn't belong. Buddy vows to visit Manhattan and find his real dad, a workaholic.",
    "watchedDate": "2026-02-03T20:24:09.000Z"
  },
  {
    "id": 11688,
    "title": "The Emperor's New Groove",
    "release_date": "2000-12-15",
    "poster_path": "/isA0acj3ONKBLp1pKadUNzxEPFv.jpg",
    "overview": "Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne and his human form with the help of Pacha, a gentle llama herder.",
    "watchedDate": "2026-02-03T20:24:09.000Z"
  },
  {
    "id": 568124,
    "title": "Encanto",
    "release_date": "2021-10-13",
    "poster_path": "/4j0PNHkMr5ax3IA8tjtxcmPU3QT.jpg",
    "overview": "The tale of an extraordinary family, the Madrigals, who live hidden in the mountains of Colombia, in a magical house, in a vibrant town, in a wondrous, charmed place called an Encanto. The magic of the Encanto has blessed every child in the family\u2014every child except one, Mirabel. But when she discovers that the magic surrounding the Encanto is in danger, Mirabel decides that she, the only ordinary Madrigal, might just be her exceptional family's last hope.",
    "watchedDate": "2026-02-03T20:24:09.000Z"
  },
  {
    "id": 4523,
    "title": "Enchanted",
    "release_date": "2007-11-20",
    "poster_path": "/8KCNzCArLlvLdQoHx6npua2VSVc.jpg",
    "overview": "The beautiful princess Giselle is banished by an evil queen from her magical, musical animated land and finds herself in the gritty reality of the streets of modern-day Manhattan. Shocked by this strange new environment that doesn't operate on a \"happily ever after\" basis, Giselle is now adrift in a chaotic world badly in need of enchantment. But when Giselle begins to fall in love with a charmingly flawed divorce lawyer who has come to her aid - even though she is already promised to a perfect fairy tale prince back home - she has to wonder: Can a storybook view of romance survive in the real world?",
    "watchedDate": "2026-02-03T20:24:09.000Z"
  },
  {
    "id": 14821,
    "title": "Escape to Witch Mountain",
    "release_date": "1975-03-21",
    "poster_path": "/cXicoCiCfO6FDfv6ozwcfQCnhVW.jpg",
    "overview": "Tia and Tony are two orphaned youngsters with extraordinary powers. Lucas Deranian poses as their uncle in order to get the kids into the clutches of Deranian's megalomaniacal boss, evil millionaire Aristotle Bolt, who wants to exploit them. Jason, a cynical widower, helps Tia and Tony escape to witch mountain, while at the same time Tia and Tony help Jason escape the pain of the loss of his wife.",
    "watchedDate": "2026-02-03T20:24:09.000Z"
  },
  {
    "id": 524434,
    "title": "Eternals",
    "release_date": "2021-11-03",
    "poster_path": "/lFByFSLV5WDJEv3KabbdAF959F2.jpg",
    "overview": "The Eternals are a team of ancient aliens who have been living on Earth in secret for thousands of years. When an unexpected tragedy forces them out of the shadows, they are forced to reunite against mankind\u2019s most ancient enemy, the Deviants.",
    "watchedDate": "2026-02-03T20:24:10.000Z"
  },
  {
    "id": 764,
    "title": "The Evil Dead",
    "release_date": "1981-10-15",
    "poster_path": "/54C1qdaiSijIU5NeNb4WsPJdNkG.jpg",
    "overview": "In 1979, a group of college students find a Sumerian Book of the Dead in an old wilderness cabin they've rented for a weekend getaway.",
    "watchedDate": "2026-02-03T20:24:10.000Z"
  },
  {
    "id": 264660,
    "title": "Ex Machina",
    "release_date": "2015-01-21",
    "poster_path": "/dmJW8IAKHKxFNiUnoDR7JfsK7Rp.jpg",
    "overview": "Caleb, a coder at the world's largest internet company, wins a competition to spend a week at a private mountain retreat belonging to Nathan, the reclusive CEO of the company. But when Caleb arrives at the remote location he finds that he will have to participate in a strange and fascinating experiment in which he must interact with the world's first true artificial intelligence, housed in the body of a beautiful robot girl.",
    "watchedDate": "2026-02-03T20:24:10.000Z"
  },
  {
    "id": 911430,
    "title": "F1",
    "release_date": "2025-06-25",
    "poster_path": "/vqBmyAj0Xm9LnS1xe1MSlMAJyHq.jpg",
    "overview": "Racing legend Sonny Hayes is coaxed out of retirement to lead a struggling Formula 1 team\u2014and mentor a young hotshot driver\u2014while chasing one more chance at glory.",
    "watchedDate": "2026-02-03T20:24:10.000Z"
  },
  {
    "id": 746036,
    "title": "The Fall Guy",
    "release_date": "2024-04-24",
    "poster_path": "/e7olqFmzcIX5c23kX4zSmLPJi8c.jpg",
    "overview": "Fresh off an almost career-ending accident, stuntman Colt Seavers has to track down a missing movie star, solve a conspiracy and try to win back the love of his life while still doing his day job.",
    "watchedDate": "2026-02-03T20:24:11.000Z"
  },
  {
    "id": 9411,
    "title": "Fallen",
    "release_date": "1998-01-16",
    "poster_path": "/nEDvTB9cP2oIKY0M1ZdDvuUEJ8d.jpg",
    "overview": "Homicide detective John Hobbes witnesses the execution of serial killer Edgar Reese. Soon after the execution the killings start again, and they are very similar to Reese's style.",
    "watchedDate": "2026-02-03T20:24:11.000Z"
  },
  {
    "id": 259316,
    "title": "Fantastic Beasts and Where to Find Them",
    "release_date": "2016-11-16",
    "poster_path": "/fLsaFKExQt05yqjoAvKsmOMYvJR.jpg",
    "overview": "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
    "watchedDate": "2026-02-03T20:24:11.000Z"
  },
  {
    "id": 338952,
    "title": "Fantastic Beasts: The Crimes of Grindelwald",
    "release_date": "2018-11-14",
    "poster_path": "/fMMrl8fD9gRCFJvsx0SuFwkEOop.jpg",
    "overview": "Gellert Grindelwald has escaped imprisonment and has begun gathering followers to his cause\u2014elevating wizards above all non-magical beings. The only one capable of putting a stop to him is the wizard he once called his closest friend, Albus Dumbledore. However, Dumbledore will need to seek help from the wizard who had thwarted Grindelwald once before, his former student Newt Scamander, who agrees to help, unaware of the dangers that lie ahead. Lines are drawn as love and loyalty are tested, even among the truest friends and family, in an increasingly divided wizarding world.",
    "watchedDate": "2026-02-03T20:24:11.000Z"
  },
  {
    "id": 338953,
    "title": "Fantastic Beasts: The Secrets of Dumbledore",
    "release_date": "2022-04-06",
    "poster_path": "/3c5GNLB4yRSLBby0trHoA1DSQxQ.jpg",
    "overview": "Professor Albus Dumbledore knows the powerful, dark wizard Gellert Grindelwald is moving to seize control of the wizarding world. Unable to stop him alone, he entrusts magizoologist Newt Scamander to lead an intrepid team of wizards and witches. They soon encounter an array of old and new beasts as they clash with Grindelwald's growing legion of followers.",
    "watchedDate": "2026-02-03T20:24:11.000Z"
  },
  {
    "id": 341174,
    "title": "Fifty Shades Darker",
    "release_date": "2017-02-08",
    "poster_path": "/w3qa274gvca9t8pkUoG8nfQgTU3.jpg",
    "overview": "When a wounded Christian Grey tries to entice a cautious Ana Steele back into his life, she demands a new arrangement before she will give him another chance. As the two begin to build trust and find stability, shadowy figures from Christian\u2019s past start to circle the couple, determined to destroy their hopes for a future together.",
    "watchedDate": "2026-02-03T20:24:12.000Z"
  },
  {
    "id": 337167,
    "title": "Fifty Shades Freed",
    "release_date": "2018-01-17",
    "poster_path": "/jjPJ4s3DWZZvI4vw8Xfi4Vqa1Q8.jpg",
    "overview": "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
    "watchedDate": "2026-02-03T20:24:12.000Z"
  },
  {
    "id": 550,
    "title": "Fight Club",
    "release_date": "1999-10-15",
    "poster_path": "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
    "watchedDate": "2026-02-03T20:24:12.000Z"
  },
  {
    "id": 127380,
    "title": "Finding Dory",
    "release_date": "2016-06-16",
    "poster_path": "/3UVe8NL1E2ZdUZ9EDlKGJY5UzE.jpg",
    "overview": "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
    "watchedDate": "2026-02-03T20:24:12.000Z"
  },
  {
    "id": 12,
    "title": "Finding Nemo",
    "release_date": "2003-05-30",
    "poster_path": "/axyrDKJmQpynKOESqxO2wKmhj9n.jpg",
    "overview": "Nemo, an adventurous young clownfish, is unexpectedly taken from his Great Barrier Reef home to a dentist's office aquarium. It's up to his worrisome father Marlin and a friendly but forgetful fish Dory to bring Nemo home -- meeting vegetarian sharks, surfer dude turtles, hypnotic jellyfish, hungry seagulls, and more along the way.",
    "watchedDate": "2026-02-03T20:24:13.000Z"
  },
  {
    "id": 391,
    "title": "A Fistful of Dollars",
    "release_date": "1964-09-12",
    "poster_path": "/lBwOEpwVeUAmrmglcstnaGcJq3Y.jpg",
    "overview": "The Man With No Name enters the Mexican village of San Miguel in the midst of a power struggle among the three Rojo brothers and sheriff John Baxter. When a regiment of Mexican soldiers bearing gold intended to pay for new weapons is waylaid by the Rojo brothers, the stranger inserts himself into the middle of the long-simmering battle, selling false information to both sides for his own benefit.",
    "watchedDate": "2026-02-03T20:24:14.000Z"
  },
  {
    "id": 938,
    "title": "For a Few Dollars More",
    "release_date": "1965-12-18",
    "poster_path": "/ooqASvA7qxlTVKL3KwOzBwy57Dh.jpg",
    "overview": "Two bounty hunters both pursue the brutal and sadistic bandit, El Indio, who has a large bounty on his head.",
    "watchedDate": "2026-02-03T20:24:14.000Z"
  },
  {
    "id": 699,
    "title": "For Your Eyes Only",
    "release_date": "1981-06-24",
    "poster_path": "/xV4Nnr6DjjERlqNikqDQX8LUgua.jpg",
    "overview": "A British spy ship has sunk and on board was a hi-tech encryption device. James Bond is sent to find the device that holds British launching instructions before the enemy Soviets get to it first.",
    "watchedDate": "2026-02-03T20:24:14.000Z"
  },
  {
    "id": 9948,
    "title": "The Fox and the Hound 2",
    "release_date": "2006-11-09",
    "poster_path": "/o3b8nenAzu5OJk7sbPJURwmeHSV.jpg",
    "overview": "Best friends Tod, a fox kit, and Copper, a hound puppy, visit a country fair when they see a band of dogs called \"The Singin' Strays\". The band has five members: Dixie, Cash, Granny Rose, and twin brothers Waylon and Floyd. It is important that they perform well because a talent scout is visiting.",
    "watchedDate": "2026-02-03T20:24:14.000Z"
  },
  {
    "id": 10948,
    "title": "The Fox and the Hound",
    "release_date": "1981-07-10",
    "poster_path": "/aC3k6XBaYnulGSkK8263ABjU3Md.jpg",
    "overview": "When a feisty little fox named Tod is adopted into a farm family, he quickly becomes friends with a fun and adorable hound puppy named Copper. Life is full of hilarious adventures until Copper is expected to take on his role as a hunting dog -- and the object of his search is his best friend!",
    "watchedDate": "2026-02-03T20:24:14.000Z"
  },
  {
    "id": 5375,
    "title": "Fred Claus",
    "release_date": "2007-11-09",
    "poster_path": "/9gATbvoRMxVeoHInwS8nR0KZMVc.jpg",
    "overview": "Fred Claus and Santa Claus have been estranged brothers for many years. Now Fred must reconcile his differences with his brother whom he believes overshadows him. When an efficiency expert assesses the workings at the North Pole and threatens to shut Santa down, Fred must help his brother to save Christmas.",
    "watchedDate": "2026-02-03T20:24:15.000Z"
  },
  {
    "id": 550988,
    "title": "Free Guy",
    "release_date": "2021-08-11",
    "poster_path": "/dxraF0qPr1OEgJk17ltQTO84kQF.jpg",
    "overview": "A bank teller discovers he is actually a background player in an open-world video game, and decides to become the hero of his own story. Now, in a world where there are no limits, he is determined to be the guy who saves his world his way before it's too late.",
    "watchedDate": "2026-02-03T20:24:15.000Z"
  },
  {
    "id": 28042,
    "title": "Frosty Returns",
    "release_date": "1993-09-15",
    "poster_path": "/qYgHxkiRvjVnPihSAm9Je91kOZq.jpg",
    "overview": "Mr. Twitchell, a greedy old businessman, has invented Summer Wheeze: a spray that instantly removes snow and slush! Now Holly has to keep Frosty from melting, and convince everybody that snow's actually a good thing.",
    "watchedDate": "2026-02-03T20:24:15.000Z"
  },
  {
    "id": 13675,
    "title": "Frosty the Snowman",
    "release_date": "1969-12-07",
    "poster_path": "/gw7ie4W3iW8nefnZ4kuw8dgYNM2.jpg",
    "overview": "A discarded silk top-hat becomes the focus of a struggle between a washed-up stage magician and a group of schoolchildren, after it magically brings a snowman to life. Realizing that newly-living Frosty will melt in spring unless he takes refuge in a colder climate, the magic snowman and Karen, a young girl whom he befriends, stow away on a freight train headed for the North Pole. Little do they know that the magician is following them, and he wants his hat back!",
    "watchedDate": "2026-02-03T20:24:15.000Z"
  },
  {
    "id": 109445,
    "title": "Frozen",
    "release_date": "2013-11-20",
    "poster_path": "/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg",
    "overview": "Young princess Anna of Arendelle dreams about finding true love at her sister Elsa\u2019s coronation. Fate takes her on a dangerous journey in an attempt to end the eternal winter that has fallen over the kingdom. She's accompanied by ice delivery man Kristoff, his reindeer Sven, and snowman Olaf. On an adventure where she will find out what friendship, courage, family, and true love really means.",
    "watchedDate": "2026-02-03T20:24:15.000Z"
  },
  {
    "id": 330457,
    "title": "Frozen II",
    "release_date": "2019-11-20",
    "poster_path": "/mINJaa34MtknCYl5AjtNJzWj8cD.jpg",
    "overview": "Elsa, Anna, Kristoff and Olaf head far into the forest to learn the truth about an ancient mystery of their kingdom.",
    "watchedDate": "2026-02-03T20:24:16.000Z"
  },
  {
    "id": 786892,
    "title": "Furiosa: A Mad Max Saga",
    "release_date": "2024-05-22",
    "poster_path": "/iADOJ8Zymht2JPMoy3R7xceZprc.jpg",
    "overview": "As the world falls, young Furiosa is snatched from the Green Place of Many Mothers into the hands of a great biker horde led by the warlord Dementus. Sweeping through the wasteland, they encounter the citadel presided over by Immortan Joe. The two tyrants wage war for dominance, and Furiosa must survive many trials as she puts together the means to find her way home.",
    "watchedDate": "2026-02-03T20:24:16.000Z"
  },
  {
    "id": 19585,
    "title": "G-Force",
    "release_date": "2009-07-24",
    "poster_path": "/9Tly3ZXTTsQKM26fis8v9LR4GxG.jpg",
    "overview": "A team of trained secret agent animals, guinea pigs Darwin, Hurley, Juarez, Blaster, mole Speckles, and fly Mooch takes on a mission for the US government to stop evil Leonard Saber, who plans to destroy the world with household appliances. But the government shuts them down and they are sentenced to a pet shop. Can they escape to defeat the villain and save the world?",
    "watchedDate": "2026-02-03T20:24:16.000Z"
  },
  {
    "id": 445571,
    "title": "Game Night",
    "release_date": "2018-02-15",
    "poster_path": "/85R8LMyn9f2Lev2YPBF8Nughrkv.jpg",
    "overview": "Max and Annie's weekly game night gets kicked up a notch when Max's brother Brooks arranges a murder mystery party -- complete with fake thugs and federal agents. So when Brooks gets kidnapped, it's all supposed to be part of the game. As the competitors set out to solve the case, they start to learn that neither the game nor Brooks are what they seem to be. The friends soon find themselves in over their heads as each twist leads to another unexpected turn over the course of one chaotic night.",
    "watchedDate": "2026-02-03T20:24:16.000Z"
  },
  {
    "id": 3131,
    "title": "Gangs of New York",
    "release_date": "2002-12-14",
    "poster_path": "/lemqKtcCuAano5aqrzxYiKC8kkn.jpg",
    "overview": "In early 1860s New York, Irish immigrant Amsterdam Vallon is released from prison and returns to the Five Points, seeking revenge against his father's killer, William Cutting, a powerful anti-immigrant gang leader. He knows that revenge can only be attained by infiltrating Cutting's inner circle. Vallon's journey becomes a fight for personal survival and to find a place for the Irish people.",
    "watchedDate": "2026-02-03T20:24:17.000Z"
  },
  {
    "id": 419430,
    "title": "Get Out",
    "release_date": "2017-02-24",
    "poster_path": "/tFXcEccSQMf3lfhfXKSU9iRBpa3.jpg",
    "overview": "Chris and his girlfriend Rose go upstate to visit her parents for the weekend. At first, Chris reads the family's overly accommodating behavior as nervous attempts to deal with their daughter's interracial relationship, but as the weekend progresses, a series of increasingly disturbing discoveries lead him to a truth that he never could have imagined.",
    "watchedDate": "2026-02-03T20:24:17.000Z"
  },
  {
    "id": 620,
    "title": "Ghostbusters",
    "release_date": "1984-06-08",
    "poster_path": "/7E8nLijS9AwwUEPu2oFYOVKhdFA.jpg",
    "overview": "After losing their academic posts at a prestigious university, a team of parapsychologists goes into business as proton-pack-toting \"ghostbusters\" who exterminate ghouls, hobgoblins and supernatural pests of all stripes. An ad campaign pays off when a knockout cellist hires the squad to purge her swanky digs of demons that appear to be living in her refrigerator.",
    "watchedDate": "2026-02-03T20:24:17.000Z"
  },
  {
    "id": 2978,
    "title": "Ghostbusters II",
    "release_date": "1989-06-16",
    "poster_path": "/yObYPMA58DnTMvJooFW7GG6jWAt.jpg",
    "overview": "The discovery of a massive river of ectoplasm and a resurgence of spectral activity allows the staff of Ghostbusters to revive the business.",
    "watchedDate": "2026-02-03T20:24:17.000Z"
  },
  {
    "id": 3635,
    "title": "Girl with a Pearl Earring",
    "release_date": "2003-12-12",
    "poster_path": "/41DkOi1MvTgTQXt5BevVSzo94kk.jpg",
    "overview": "This film, adapted from a work of fiction by author Tracy Chevalier, tells a story about the events surrounding the creation of the painting \"Girl With A Pearl Earring\" by 17th century Dutch master Johannes Vermeer. A young peasant maid working in the house of painter Johannes Vermeer becomes his talented assistant and the model for one of his most famous works.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 124905,
    "title": "Godzilla",
    "release_date": "2014-05-14",
    "poster_path": "/tphkjmQq8WebuVwNXelmjLUXuPJ.jpg",
    "overview": "Ford Brody, a Navy bomb expert, has just reunited with his family in San Francisco when he is forced to go to Japan to help his estranged father, Joe. Soon, both men are swept up in an escalating crisis when an ancient alpha predator arises from the sea to combat malevolent adversaries that threaten the survival of humanity. The creatures leave colossal destruction in their wake, as they make their way toward their final battleground: San Francisco.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 823464,
    "title": "Godzilla x Kong: The New Empire",
    "release_date": "2024-03-27",
    "poster_path": "/z1p34vh7dEOnLDmyCrlUVLuoDzd.jpg",
    "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence \u2013 and our own.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 710,
    "title": "GoldenEye",
    "release_date": "1995-11-16",
    "poster_path": "/z0ljRnNxIO7CRBhLEO0DvLgAFPR.jpg",
    "overview": "When a powerful satellite system falls into the hands of Alec Trevelyan, AKA Agent 006, a former ally-turned-enemy, only James Bond can save the world from a dangerous space weapon that -- in one short pulse -- could destroy the earth! As Bond squares off against his former compatriot, he also battles Xenia Onatopp, an assassin who uses pleasure as her ultimate weapon.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 658,
    "title": "Goldfinger",
    "release_date": "1964-09-20",
    "poster_path": "/aKNFzaqQgPzsGXnsMc4kJH5hFIV.jpg",
    "overview": "Special agent 007 comes face to face with one of the most notorious villains of all time, and now he must outwit and outgun the powerful tycoon to prevent him from cashing in on a devious scheme to raid Fort Knox -- and obliterate the world's economy.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 105864,
    "title": "The Good Dinosaur",
    "release_date": "2015-11-14",
    "poster_path": "/8RSkxOO80btfKjyiC5ZiTaCHIT8.jpg",
    "overview": "An epic journey into the world of dinosaurs where an Apatosaurus named Arlo makes an unlikely human friend.",
    "watchedDate": "2026-02-03T20:24:18.000Z"
  },
  {
    "id": 489,
    "title": "Good Will Hunting",
    "release_date": "1997-12-05",
    "poster_path": "/z2FnLKpFi1HPO7BEJxdkv6hpJSU.jpg",
    "overview": "Will Hunting is a headstrong, working-class genius who is failing the lessons of life. After one too many run-ins with the law, Will's last chance is a psychology professor, who might be the only man who can reach him.",
    "watchedDate": "2026-02-03T20:24:19.000Z"
  },
  {
    "id": 429,
    "title": "The Good, the Bad and the Ugly",
    "release_date": "1966-12-22",
    "poster_path": "/bX2xnavhMYjWDoZp1VM6VnU1xwe.jpg",
    "overview": "While the Civil War rages on between the Union and the Confederacy, three men \u2013 a quiet loner, a ruthless hitman, and a Mexican bandit \u2013 comb the American Southwest in search of a strongbox containing $200,000 in stolen gold.",
    "watchedDate": "2026-02-03T20:24:19.000Z"
  },
  {
    "id": 769,
    "title": "GoodFellas",
    "release_date": "1990-09-12",
    "poster_path": "/9OkCLM73MIU2CrKZbqiT8Ln1wY2.jpg",
    "overview": "The true story of Henry Hill, a half-Irish, half-Sicilian Brooklyn kid who is adopted by neighbourhood gangsters at an early age and climbs the ranks of a Mafia family under the guidance of Jimmy Conway.",
    "watchedDate": "2026-02-03T20:24:19.000Z"
  },
  {
    "id": 257445,
    "title": "Goosebumps",
    "release_date": "2015-08-05",
    "poster_path": "/aeZT9pqEgrmXOGdESFkAuVjX6kw.jpg",
    "overview": "After moving to a small town, Zach Cooper finds a silver lining when he meets next door neighbor Hannah, the daughter of bestselling Goosebumps series author R.L. Stine. When Zach unintentionally unleashes real monsters from their manuscripts and they begin to terrorize the town, it\u2019s suddenly up to Stine, Zach and Hannah to get all of them back in the books where they belong.",
    "watchedDate": "2026-02-03T20:24:19.000Z"
  },
  {
    "id": 316029,
    "title": "The Greatest Showman",
    "release_date": "2017-12-20",
    "poster_path": "/b9CeobiihCx1uG1tpw8hXmpi7nm.jpg",
    "overview": "The story of American showman P.T. Barnum, founder of the circus that became the famous traveling Ringling Bros. and Barnum & Bailey Circus.",
    "watchedDate": "2026-02-03T20:24:19.000Z"
  },
  {
    "id": 118340,
    "title": "Guardians of the Galaxy",
    "release_date": "2014-07-30",
    "poster_path": "/r7vmZjiyZw9rpJMQJdXpjgiCOk9.jpg",
    "overview": "Light years from Earth, 26 years after being abducted, Peter Quill finds himself the prime target of a manhunt after discovering an orb wanted by Ronan the Accuser.",
    "watchedDate": "2026-02-03T20:24:20.000Z"
  },
  {
    "id": 283995,
    "title": "Guardians of the Galaxy Vol. 2",
    "release_date": "2017-04-19",
    "poster_path": "/y4MBh0EjBlMuOzv9axM4qJlmhzz.jpg",
    "overview": "The Guardians must fight to keep their newfound family together as they unravel the mysteries of Peter Quill's true parentage.",
    "watchedDate": "2026-02-03T20:24:20.000Z"
  },
  {
    "id": 447365,
    "title": "Guardians of the Galaxy Vol. 3",
    "release_date": "2023-05-03",
    "poster_path": "/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg",
    "overview": "Peter Quill, still reeling from the loss of Gamora, must rally his team around him to defend the universe along with protecting one of their own. A mission that, if not completed successfully, could quite possibly lead to the end of the Guardians as we know them.",
    "watchedDate": "2026-02-03T20:24:20.000Z"
  },
  {
    "id": 20639,
    "title": "Gus",
    "release_date": "1976-07-07",
    "poster_path": "/p85XLgX858DoH5WjE07iABii7ja.jpg",
    "overview": "The California Atoms are in last place with no hope of moving up. But by switching the mule from team mascot to team member, (He can kick 100 yard field goals!) they start winning, and move up in the rankings, Hurrah! The competition isn't so happy.",
    "watchedDate": "2026-02-03T20:24:20.000Z"
  },
  {
    "id": 11282,
    "title": "Harold & Kumar Go to White Castle",
    "release_date": "2004-07-02",
    "poster_path": "/5vO7R4xYlDipTp8gzfRbWegO8eb.jpg",
    "overview": "Nerdy accountant Harold and his irrepressible friend, Kumar, get stoned watching television and find themselves utterly bewitched by a commercial for White Castle. Convinced there must be one nearby, the two set out on a late-night odyssey that takes them deep into New Jersey. Somehow, the boys manage to run afoul of rednecks, cops and even a car-stealing Neil Patrick Harris before getting anywhere near their beloved sliders.",
    "watchedDate": "2026-02-03T20:24:20.000Z"
  },
  {
    "id": 672,
    "title": "Harry Potter and the Chamber of Secrets",
    "release_date": "2002-11-13",
    "poster_path": "/sdEOH0992YZ0QSxgXNIGLq1ToUi.jpg",
    "overview": "Cars fly, trees fight back, and a mysterious house-elf comes to warn Harry Potter at the start of his second year at Hogwarts. Adventure and danger await when bloody writing on a wall announces: The Chamber Of Secrets Has Been Opened. To save Hogwarts will require all of Harry, Ron and Hermione's magical abilities and courage.",
    "watchedDate": "2026-02-03T20:24:21.000Z"
  },
  {
    "id": 12444,
    "title": "Harry Potter and the Deathly Hallows: Part 1",
    "release_date": "2010-11-17",
    "poster_path": "/iGoXIpQb7Pot00EEdwpwPajheZ5.jpg",
    "overview": "Harry, Ron and Hermione walk away from their last year at Hogwarts to find and destroy the remaining Horcruxes, putting an end to Voldemort's bid for immortality. But with Harry's beloved Dumbledore dead and Voldemort's unscrupulous Death Eaters on the loose, the world is more dangerous than ever.",
    "watchedDate": "2026-02-03T20:24:21.000Z"
  },
  {
    "id": 12445,
    "title": "Harry Potter and the Deathly Hallows: Part 2",
    "release_date": "2011-07-12",
    "poster_path": "/c54HpQmuwXjHq2C9wmoACjxoom3.jpg",
    "overview": "Harry, Ron and Hermione continue their quest to vanquish the evil Voldemort once and for all. Just as things begin to look hopeless for the young wizards, Harry discovers a trio of magical objects that endow him with powers to rival Voldemort's formidable skills.",
    "watchedDate": "2026-02-03T20:24:21.000Z"
  },
  {
    "id": 674,
    "title": "Harry Potter and the Goblet of Fire",
    "release_date": "2005-11-16",
    "poster_path": "/fECBtHlr0RB3foNHDiCBXeg9Bv9.jpg",
    "overview": "When Harry Potter's name emerges from the Goblet of Fire, he becomes a competitor in a grueling battle for glory among three wizarding schools\u2014the Triwizard Tournament. But since Harry never submitted his name for the Tournament, who did? Now Harry must confront a deadly dragon, fierce water demons and an enchanted maze only to find himself in the cruel grasp of He Who Must Not Be Named.",
    "watchedDate": "2026-02-03T20:24:21.000Z"
  },
  {
    "id": 767,
    "title": "Harry Potter and the Half-Blood Prince",
    "release_date": "2009-07-15",
    "poster_path": "/z7uo9zmQdQwU5ZJHFpv2Upl30i1.jpg",
    "overview": "As Lord Voldemort tightens his grip on both the Muggle and wizarding worlds, Hogwarts is no longer a safe haven. Harry suspects perils may even lie within the castle, but Dumbledore is more intent upon preparing him for the final battle fast approaching. Together they work to find the key to unlock Voldemorts defenses and to this end, Dumbledore recruits his old friend and colleague Horace Slughorn, whom he believes holds crucial information. Even as the decisive showdown looms, romance blossoms for Harry, Ron, Hermione and their classmates. Love is in the air, but danger lies ahead and Hogwarts may never be the same again.",
    "watchedDate": "2026-02-03T20:24:21.000Z"
  },
  {
    "id": 675,
    "title": "Harry Potter and the Order of the Phoenix",
    "release_date": "2007-07-08",
    "poster_path": "/5aOyriWkPec0zUDxmHFP9qMmBaj.jpg",
    "overview": "Returning for his fifth year at Hogwarts, Harry is stunned to find that his warnings about the return of Lord Voldemort have been ignored. Left with no choice, Harry takes matters into his own hands, training a small group of motivated students to defend themselves against the Dark Arts.",
    "watchedDate": "2026-02-03T20:24:23.000Z"
  },
  {
    "id": 673,
    "title": "Harry Potter and the Prisoner of Azkaban",
    "release_date": "2004-05-31",
    "poster_path": "/aWxwnYoe8p2d2fcxOqtvAtJ72Rw.jpg",
    "overview": "Year three at Hogwarts means new fun and challenges as Harry learns the delicate art of approaching a Hippogriff, transforming shape-shifting Boggarts into hilarity and even turning back time. But the term also brings danger: soul-sucking Dementors hover over the school, an ally of the accursed He-Who-Cannot-Be-Named lurks within the castle walls, and fearsome wizard Sirius Black escapes Azkaban. And Harry will confront them all.",
    "watchedDate": "2026-02-03T20:24:23.000Z"
  },
  {
    "id": 671,
    "title": "Harry Potter and the Philosopher's Stone",
    "release_date": "2001-11-16",
    "poster_path": "/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg",
    "overview": "Harry Potter has lived under the stairs at his aunt and uncle's house his whole life. But on his 11th birthday, he learns he's a powerful wizard\u2014with a place waiting for him at the Hogwarts School of Witchcraft and Wizardry. As he learns to harness his newfound powers with the help of the school's kindly headmaster, Harry uncovers the truth about his parents' deaths\u2014and about the villain who's to blame.",
    "watchedDate": "2026-02-03T20:24:23.000Z"
  },
  {
    "id": 11787,
    "title": "Harvey",
    "release_date": "1950-12-04",
    "poster_path": "/dgd82hYmpiXDM1G867HqNaWe8wj.jpg",
    "overview": "The story of Elwood P. Dowd who makes friends with a spirit taking the form of a human-sized rabbit named Harvey that only he sees (and a few privileged others on occasion also.) After his sister tries to commit him to a mental institution, a comedy of errors ensues. Elwood and Harvey become the catalysts for a family mending its wounds and for romance blossoming in unexpected places.",
    "watchedDate": "2026-02-03T20:24:23.000Z"
  },
  {
    "id": 273248,
    "title": "The Hateful Eight",
    "release_date": "2015-12-25",
    "poster_path": "/jIywvdPjia2t3eKYbjVTcwBQlG8.jpg",
    "overview": "Bounty hunters seek shelter from a raging blizzard and get caught up in a plot of betrayal and deception.",
    "watchedDate": "2026-02-03T20:24:23.000Z"
  },
  {
    "id": 1487,
    "title": "Hellboy",
    "release_date": "2004-04-02",
    "poster_path": "/lbaTEneOofwvAyg77R8HbFML2zT.jpg",
    "overview": "In the final days of World War II, the Nazis attempt to use black magic to aid their dying cause. The Allies raid the camp where the ceremony is taking place, but not before they summon a baby demon who is rescued by Allied forces and dubbed \"Hellboy\". Sixty years later, Hellboy serves the cause of good rather than evil as an agent in the Bureau of Paranormal Research & Defense, along with Abe Sapien - a merman with psychic powers, and Liz Sherman - a woman with pyrokinesis, protecting America against dark forces.",
    "watchedDate": "2026-02-03T20:24:24.000Z"
  },
  {
    "id": 152601,
    "title": "Her",
    "release_date": "2013-12-18",
    "poster_path": "/eCOtqtfvn7mxGl6nfmq4b1exJRc.jpg",
    "overview": "In the not so distant future, Theodore, a lonely writer, purchases a newly developed operating system designed to meet the user's every need. To Theodore's surprise, a romantic relationship develops between him and his operating system. This unconventional love story blends science fiction and romance in a sweet tale that explores the nature of love and the ways that technology isolates and connects us all.",
    "watchedDate": "2026-02-03T20:24:24.000Z"
  },
  {
    "id": 79,
    "title": "Hero",
    "release_date": "2002-07-22",
    "poster_path": "/vxgZto2Cz7ILHAlmRXt50I2brB2.jpg",
    "overview": "During China's Warring States period, a district prefect arrives at the palace of Qin Shi Huang, claiming to have killed the three assassins who had made an attempt on the king's life three years ago.",
    "watchedDate": "2026-02-03T20:24:24.000Z"
  },
  {
    "id": 49051,
    "title": "The Hobbit: An Unexpected Journey",
    "release_date": "2012-12-12",
    "poster_path": "/yHA9Fc37VmpUA5UncTxxo3rTGVA.jpg",
    "overview": "Bilbo Baggins, a hobbit enjoying his quiet life, is swept into an epic quest by Gandalf the Grey and thirteen dwarves who seek to reclaim their mountain home from Smaug, the dragon.",
    "watchedDate": "2026-02-03T20:24:24.000Z"
  },
  {
    "id": 122917,
    "title": "The Hobbit: The Battle of the Five Armies",
    "release_date": "2014-12-10",
    "poster_path": "/xT98tLqatZPQApyRmlPL12LtiWp.jpg",
    "overview": "Following Smaug's attack on Laketown, Bilbo and the dwarves try to defend Erebor's mountain of treasure from others who claim it: the men of the ruined Laketown and the elves of Mirkwood. Meanwhile an army of Orcs led by Azog the Defiler is marching on Erebor, fueled by the rise of the dark lord Sauron. Dwarves, elves and men must unite, and the hope for Middle-Earth falls into Bilbo's hands.",
    "watchedDate": "2026-02-03T20:24:24.000Z"
  },
  {
    "id": 57158,
    "title": "The Hobbit: The Desolation of Smaug",
    "release_date": "2013-12-11",
    "poster_path": "/xQYiXsheRCDBA39DOrmaw1aSpbk.jpg",
    "overview": "The Dwarves, Bilbo and Gandalf have successfully escaped the Misty Mountains, and Bilbo has gained the One Ring. They all continue their journey to get their gold back from the Dragon, Smaug.",
    "watchedDate": "2026-02-03T20:24:25.000Z"
  },
  {
    "id": 228161,
    "title": "Home",
    "release_date": "2015-03-18",
    "poster_path": "/usFenYnk6mr8C62dB1MoAfSWMGR.jpg",
    "overview": "When Earth is taken over by the overly-confident Boov, an alien race in search of a new place to call home, all humans are promptly relocated, while all Boov get busy reorganizing the planet. But when one resourceful girl, Tip, manages to avoid capture, she finds herself the accidental accomplice of a banished Boov named Oh. The two fugitives realize there\u2019s a lot more at stake than intergalactic relations as they embark on the road trip of a lifetime.",
    "watchedDate": "2026-02-03T20:24:25.000Z"
  },
  {
    "id": 772,
    "title": "Home Alone 2: Lost in New York",
    "release_date": "1992-11-15",
    "poster_path": "/9CAkQ9nfrDaIAyncWndwg0tfC8g.jpg",
    "overview": "Instead of flying to Florida with his folks, Kevin ends up alone in New York, where he gets a hotel room with his dad's credit card\u2014despite problems from a clerk and meddling bellboy. But when Kevin runs into his old nemeses, the Wet Bandits, he's determined to foil their plans to rob a toy store on Christmas Eve.",
    "watchedDate": "2026-02-03T20:24:25.000Z"
  },
  {
    "id": 50359,
    "title": "Hop",
    "release_date": "2011-03-30",
    "poster_path": "/qgYzapTlgnIG6CAH3Pjgp44nxgS.jpg",
    "overview": "E.B., the Easter Bunny's teenage son, heads to Hollywood, determined to become a drummer in a rock 'n' roll band. In L.A., he's taken in by Fred after the out-of-work slacker hits E.B. with his car.",
    "watchedDate": "2026-02-03T20:24:25.000Z"
  },
  {
    "id": 2026,
    "title": "Hostage",
    "release_date": "2005-03-10",
    "poster_path": "/vjhLmtjO2pMQXRgkxcwZoq2Ma8n.jpg",
    "overview": "When a mafia accountant is taken hostage on his beat, a police officer \u2013 wracked by guilt from a prior stint as a negotiator \u2013 must negotiate the standoff, even as his own family is held captive by the mob.",
    "watchedDate": "2026-02-03T20:24:25.000Z"
  },
  {
    "id": 28736,
    "title": "Hot Lead & Cold Feet",
    "release_date": "1978-07-05",
    "poster_path": "/zr6pX2rUfaub8QcGaIjYInuJBqQ.jpg",
    "overview": "Twin brothers -- one rough and tough, the other a city-bred milquetoast -- compete for their father's fortune.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 159824,
    "title": "Hotel Transylvania 2",
    "release_date": "2015-09-21",
    "poster_path": "/3nFnrivNgipSKZ8LZJJbRSlAcTR.jpg",
    "overview": "When the old-old-old-fashioned vampire Vlad arrives at the hotel for an impromptu family get-together, Hotel Transylvania is in for a collision of supernatural old-school and modern day cool.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 400155,
    "title": "Hotel Transylvania 3: Summer Vacation",
    "release_date": "2018-06-28",
    "poster_path": "/lzE5BwGQea1nek7TPXUuC5AZ6rq.jpg",
    "overview": "Dracula, Mavis, Johnny and the rest of the Drac Pack take a vacation on a luxury Monster Cruise Ship, where Dracula falls in love with the ship\u2019s captain, Ericka, who\u2019s secretly a descendant of Abraham Van Helsing, the notorious monster slayer.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 82702,
    "title": "How to Train Your Dragon 2",
    "release_date": "2014-06-05",
    "poster_path": "/d13Uj86LdbDLrfDoHR5aDOFYyJC.jpg",
    "overview": "Five years have passed since Hiccup and Toothless united the dragons and Vikings of Berk. Now, they spend their time charting unmapped territories. During one of their adventures, the pair discover a secret cave that houses hundreds of wild dragons -- and a mysterious dragon rider. Now, Hiccup and Toothless find themselves at the center of a battle to protect Berk from a power-hungry warrior.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 166428,
    "title": "How to Train Your Dragon: The Hidden World",
    "release_date": "2019-01-03",
    "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
    "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless\u2019 discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup\u2019s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 10922,
    "title": "The Human Stain",
    "release_date": "2003-10-29",
    "poster_path": "/fWbnGCEj2QkY7z0DTQUVjsCJkkh.jpg",
    "overview": "Coleman Silk is a worldly and admired professor who loses his job after unwittingly making a racial slur. To clear his name, Silk writes a book about the events with his friend and colleague Nathan Zuckerman, who in the process discovers a dark secret Silk has hidden his whole life. All the while, Silk engages in an affair with Faunia Farley, a younger woman whose tormented past threatens to unravel the layers of deception Silk has constructed.",
    "watchedDate": "2026-02-03T20:24:26.000Z"
  },
  {
    "id": 101299,
    "title": "The Hunger Games: Catching Fire",
    "release_date": "2013-11-15",
    "poster_path": "/vrQHDXjVmbYzadOXQ0UaObunoy2.jpg",
    "overview": "After surviving the Hunger Games, Katniss and Peeta struggle with the consequences of their victory as unrest spreads across Panem. Forced back into the spotlight, they become symbols of hope and resistance while the Capitol prepares a new and deadly challenge that will change the future of the nation forever.",
    "watchedDate": "2026-02-03T20:24:27.000Z"
  },
  {
    "id": 131631,
    "title": "The Hunger Games: Mockingjay - Part 1",
    "release_date": "2014-11-19",
    "poster_path": "/4FAA18ZIja70d1Tu5hr5cj2q1sB.jpg",
    "overview": "After surviving the Quarter Quell, Katniss finds herself in the hidden stronghold of District 13, where the rebellion against the Capitol is gaining momentum. Struggling with the weight of becoming the symbol of resistance, she must navigate fragile alliances while trying to protect those she loves. As propaganda battles rage and Panem moves closer to full-scale war, Katniss is forced to confront the true cost of revolution.",
    "watchedDate": "2026-02-03T20:24:27.000Z"
  },
  {
    "id": 10400,
    "title": "The Hurricane",
    "release_date": "1999-09-17",
    "poster_path": "/zhnxjsNnnpsBMF5V1H7Pzkec45Y.jpg",
    "overview": "The story of Rubin \"Hurricane\" Carter, a boxer wrongly imprisoned for murder, and the people who aided in his fight to prove his innocence.",
    "watchedDate": "2026-02-03T20:24:27.000Z"
  },
  {
    "id": 6479,
    "title": "I Am Legend",
    "release_date": "2007-12-12",
    "poster_path": "/iPDkaSdKk2jRLTM65UOEoKtsIZ8.jpg",
    "overview": "Robert Neville is a scientist who was unable to stop the spread of the terrible virus that was incurable and man-made. Immune, Neville is now the last human survivor in what is left of New York City and perhaps the world. For three years, Neville has faithfully sent out daily radio messages, desperate to find any other survivors who might be out there. But he is not alone.",
    "watchedDate": "2026-02-03T20:24:27.000Z"
  },
  {
    "id": 1599,
    "title": "I \u2665 Huckabees",
    "release_date": "2004-09-10",
    "poster_path": "/h27ytqXyOrAB6KmRx2abOp8p2W.jpg",
    "overview": "A husband-and-wife team play detective, but not in the traditional sense. Instead, the happy duo helps others solve their existential issues, the kind that keep you up at night, wondering what it all means.",
    "watchedDate": "2026-02-03T20:24:27.000Z"
  },
  {
    "id": 2048,
    "title": "I, Robot",
    "release_date": "2004-07-15",
    "poster_path": "/efwv6F2lGaghjPpBRSINHtoEiZB.jpg",
    "overview": "In 2035, where robots are commonplace and abide by the three laws of robotics, a technophobic cop investigates an apparent suicide. Suspecting that a robot may be responsible for the death, his investigation leads him to believe that humanity may be in danger.",
    "watchedDate": "2026-02-03T20:24:28.000Z"
  },
  {
    "id": 278154,
    "title": "Ice Age: Collision Course",
    "release_date": "2016-06-23",
    "poster_path": "/dWyaaP1dmW5peBvgiVaugdRuyYD.jpg",
    "overview": "Set after the events of Continental Drift, Scrat's epic pursuit of his elusive acorn catapults him outside of Earth, where he accidentally sets off a series of cosmic events that transform and threaten the planet. To save themselves from peril, Manny, Sid, Diego, and the rest of the herd leave their home and embark on a quest full of thrills and spills, highs and lows, laughter and adventure while traveling to exotic new lands and locations.",
    "watchedDate": "2026-02-03T20:24:28.000Z"
  },
  {
    "id": 57800,
    "title": "Ice Age: Continental Drift",
    "release_date": "2012-06-27",
    "poster_path": "/dfp1BZF7FxbBUyzHvMOI9t8NWDD.jpg",
    "overview": "Manny, Diego, and Sid embark upon another adventure after their continent is set adrift. Using an iceberg as a ship, they encounter sea creatures and battle pirates as they explore a new world.",
    "watchedDate": "2026-02-03T20:24:28.000Z"
  },
  {
    "id": 13374,
    "title": "Ice Princess",
    "release_date": "2005-03-17",
    "poster_path": "/oLWeyvu0ZJrpxDsRrzsMeaGzyZp.jpg",
    "overview": "With the help of her coach, her mom, and the boy who drives the Zamboni, nothing can stop Casey Carlyle from realizing her dream to be a champion figure skater.",
    "watchedDate": "2026-02-03T20:24:28.000Z"
  },
  {
    "id": 13465,
    "title": "The Adventures of Ichabod and Mr. Toad",
    "release_date": "1949-10-05",
    "poster_path": "/o6GfVkgPaaHJnXNywDLpHJII2tW.jpg",
    "overview": "The Wind in the Willows: Concise version of Kenneth Grahame's story of the same name. J. Thaddeus Toad, owner of Toad Hall, is prone to fads, such as the newfangled motor car. This desire for the very latest lands him in much trouble with the wrong crowd, and it is up to his friends, Mole, Rat and Badger to save him from himself. - The Legend of Sleepy Hollow: Retelling of Washington Irving's story set in a tiny New England town. Ichabod Crane, the new schoolmaster, falls for the town beauty, Katrina Van Tassel, and the town Bully Brom Bones decides that he is a little too successful and needs \"convincing\" that Katrina is not for him.",
    "watchedDate": "2026-02-03T20:24:29.000Z"
  },
  {
    "id": 9685,
    "title": "Igby Goes Down",
    "release_date": "2002-09-13",
    "poster_path": "/f53JBgzYESamcYT3LkUeeoSXPgi.jpg",
    "overview": "Igby Slocumb, a rebellious and sarcastic 17-year-old boy, is at war with the stifling world of old money privilege he was born into. With a schizophrenic father, a self-absorbed, distant mother, and a shark-like young Republican big brother, Igby figures there must be a better life out there -- and sets about finding it.",
    "watchedDate": "2026-02-03T20:24:29.000Z"
  },
  {
    "id": 10633,
    "title": "In the Heat of the Night",
    "release_date": "1967-08-02",
    "poster_path": "/qFpfALhprXmOAbA5upTNupZw8rq.jpg",
    "overview": "African-American Philadelphia police detective Virgil Tibbs is arrested on suspicion of murder by Bill Gillespie, the racist police chief of tiny Sparta, Mississippi. After Tibbs proves not only his own innocence but that of another man, he joins forces with Gillespie to track down the real killer. Their investigation takes them through every social level of the town, with Tibbs making enemies as well as unlikely friends as he hunts for the truth.",
    "watchedDate": "2026-02-03T20:24:29.000Z"
  },
  {
    "id": 27205,
    "title": "Inception",
    "release_date": "2010-07-15",
    "poster_path": "/xlaY2zyzMfkhk0HSC5VUwzoZPU1.jpg",
    "overview": "Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \"inception\", the implantation of another person's idea into a target's subconscious.",
    "watchedDate": "2026-02-03T20:24:29.000Z"
  },
  {
    "id": 9806,
    "title": "The Incredibles",
    "release_date": "2004-11-05",
    "poster_path": "/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg",
    "overview": "Bob Parr has given up his superhero days to log in time as an insurance adjuster and raise his three children with his formerly heroic wife in suburbia. But when he receives a mysterious assignment, it's time to get back into costume.",
    "watchedDate": "2026-02-03T20:24:30.000Z"
  },
  {
    "id": 260513,
    "title": "Incredibles 2",
    "release_date": "2018-06-14",
    "poster_path": "/9lFKBtaVIhP7E2Pk0IY1CwTKTMZ.jpg",
    "overview": "Elastigirl springs into action to save the day, while Mr. Incredible faces his greatest challenge yet \u2013 taking care of the problems of his three children.",
    "watchedDate": "2026-02-03T20:24:30.000Z"
  },
  {
    "id": 335977,
    "title": "Indiana Jones and the Dial of Destiny",
    "release_date": "2023-06-25",
    "poster_path": "/Af4bXE63pVsb2FtbW8uYIyPBadD.jpg",
    "overview": "Finding himself in a new era, and approaching retirement, Indy wrestles with fitting into a world that seems to have outgrown him. But as the tentacles of an all-too-familiar evil return in the form of an old rival, Indy must don his hat and pick up his whip once more to make sure an ancient and powerful artifact doesn't fall into the wrong hands.",
    "watchedDate": "2026-02-03T20:24:30.000Z"
  },
  {
    "id": 217,
    "title": "Indiana Jones and the Kingdom of the Crystal Skull",
    "release_date": "2008-05-21",
    "poster_path": "/56As6XEM1flWvprX4LgkPl8ii4K.jpg",
    "overview": "Set during the Cold War, the Soviets\u2014led by sword-wielding Irina Spalko\u2014are in search of a crystal skull which has supernatural powers related to a mystical Lost City of Gold. Indy is coerced to head to Peru at the behest of a young man whose friend\u2014and Indy's colleague\u2014Professor Oxley has been captured for his knowledge of the skull's whereabouts.",
    "watchedDate": "2026-02-03T20:24:30.000Z"
  },
  {
    "id": 89,
    "title": "Indiana Jones and the Last Crusade",
    "release_date": "1989-05-24",
    "poster_path": "/sizg1AU8f8JDZX4QIgE4pjUMBvx.jpg",
    "overview": "In 1938, an art collector appeals to eminent archaeologist Dr. Indiana Jones to embark on a search for the Holy Grail. Indy learns that a medieval historian has vanished while searching for it, and the missing man is his own father, Dr. Henry Jones Sr.. He sets out to rescue his father by following clues in the old man's notebook, which his father had mailed to him before he went missing. Indy arrives in Venice, where he enlists the help of a beautiful academic, Dr. Elsa Schneider, along with Marcus Brody and Sallah. Together they must stop the Nazis from recovering the power of eternal life and taking over the world!",
    "watchedDate": "2026-02-03T20:24:30.000Z"
  },
  {
    "id": 87,
    "title": "Indiana Jones and the Temple of Doom",
    "release_date": "1984-05-23",
    "poster_path": "/gpdVNUaa4LhRMLfJOPj1AZdhAZ3.jpg",
    "overview": "After arriving in India, Indiana Jones is asked by a desperate village to find a mystical stone. He agrees \u2013 and stumbles upon a secret cult plotting a terrible plan in the catacombs of an ancient palace.",
    "watchedDate": "2026-02-03T20:24:32.000Z"
  },
  {
    "id": 16869,
    "title": "Inglourious Basterds",
    "release_date": "2009-08-02",
    "poster_path": "/7sfbEnaARXDDhKm0CZ7D7uc2sbo.jpg",
    "overview": "In Nazi-occupied France during World War II, a group of Jewish-American soldiers known as \"The Basterds\" are chosen specifically to spread fear throughout the Third Reich by scalping and brutally killing Nazis. The Basterds, lead by Lt. Aldo Raine soon cross paths with a French-Jewish teenage girl who runs a movie theater in Paris which is targeted by the soldiers.",
    "watchedDate": "2026-02-03T20:24:32.000Z"
  },
  {
    "id": 150540,
    "title": "Inside Out",
    "release_date": "2015-06-17",
    "poster_path": "/2H1TmgdfNtsKlU9jKdeNyYL5y8T.jpg",
    "overview": "When 11-year-old Riley moves to a new city, her Emotions team up to help her through the transition. Joy, Fear, Anger, Disgust and Sadness work together, but when Joy and Sadness get lost, they must journey through unfamiliar places to get back home.",
    "watchedDate": "2026-02-03T20:24:32.000Z"
  },
  {
    "id": 1022789,
    "title": "Inside Out 2",
    "release_date": "2024-06-11",
    "poster_path": "/vpnVM9B6NMmQpWeZvzLvDESb2QY.jpg",
    "overview": "Teenager Riley's mind headquarters is undergoing a sudden demolition to make room for something entirely unexpected: new Emotions! Joy, Sadness, Anger, Fear and Disgust, who\u2019ve long been running a successful operation by all accounts, aren\u2019t sure how to feel when Anxiety shows up. And it looks like she\u2019s not alone.",
    "watchedDate": "2026-02-03T20:24:32.000Z"
  },
  {
    "id": 157336,
    "title": "Interstellar",
    "release_date": "2014-11-05",
    "poster_path": "/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
    "overview": "The adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
    "watchedDate": "2026-02-03T20:24:32.000Z"
  },
  {
    "id": 1726,
    "title": "Iron Man",
    "release_date": "2008-04-30",
    "poster_path": "/78lPtwv72eTNqFW9COBYI0dWDJa.jpg",
    "overview": "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
    "watchedDate": "2026-02-03T20:24:33.000Z"
  },
  {
    "id": 10138,
    "title": "Iron Man 2",
    "release_date": "2010-04-28",
    "poster_path": "/6WBeq4fCfn7AN0o21W9qNcRF2l9.jpg",
    "overview": "With the world now aware of his dual life as the armored superhero Iron Man, billionaire inventor Tony Stark faces pressure from the government, the press and the public to share his technology with the military. Unwilling to let go of his invention, Stark, with Pepper Potts and James 'Rhodey' Rhodes at his side, must forge new alliances \u2013 and confront powerful enemies.",
    "watchedDate": "2026-02-03T20:24:33.000Z"
  },
  {
    "id": 68721,
    "title": "Iron Man 3",
    "release_date": "2013-04-18",
    "poster_path": "/qhPtAc1TKbMPqNvcdXSOn9Bn7hZ.jpg",
    "overview": "When Tony Stark's world is torn apart by a formidable terrorist called the Mandarin, he starts an odyssey of rebuilding and retribution.",
    "watchedDate": "2026-02-03T20:24:33.000Z"
  },
  {
    "id": 1585,
    "title": "It's a Wonderful Life",
    "release_date": "1946-12-20",
    "poster_path": "/bSqt9rhDZx1Q7UZ86dBPKdNomp2.jpg",
    "overview": "George Bailey has spent his entire life giving to the people of Bedford Falls.  All that prevents rich skinflint Mr. Potter from taking over the entire town is George's modest building and loan company.  But on Christmas Eve the business's $8,000 is lost and George's troubles begin.",
    "watchedDate": "2026-02-03T20:24:33.000Z"
  },
  {
    "id": 13353,
    "title": "It's the Great Pumpkin, Charlie Brown",
    "release_date": "1966-10-27",
    "poster_path": "/59wp9OWexYsxlSPHYmVLsl5xlFt.jpg",
    "overview": "Join the Peanuts gang for a timeless adventure as Charlie Brown preps for a party, Snoopy sets his sights on the Red Baron, and Linus patiently awaits a pumpkin patch miracle.",
    "watchedDate": "2026-02-03T20:24:34.000Z"
  },
  {
    "id": 578,
    "title": "Jaws",
    "release_date": "1975-06-20",
    "poster_path": "/tjbLSFwi0I3phZwh8zoHWNfbsEp.jpg",
    "overview": "When the seaside community of Amity finds itself under attack by a dangerous great white shark, the town's chief of police, a young marine biologist, and a grizzled shark hunter embark on a desperate quest to kill the beast before it strikes again.",
    "watchedDate": "2026-02-03T20:24:34.000Z"
  },
  {
    "id": 475557,
    "title": "Joker",
    "release_date": "2019-10-01",
    "poster_path": "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    "overview": "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    "watchedDate": "2026-02-03T20:24:34.000Z"
  },
  {
    "id": 8844,
    "title": "Jumanji",
    "release_date": "1995-12-15",
    "poster_path": "/vgpXmVaVyUL7GGiDeiK1mKEKzcX.jpg",
    "overview": "When siblings Judy and Peter discover an enchanted board game that opens the door to a magical world, they unwittingly invite Alan -- an adult who's been trapped inside the game for 26 years -- into their living room. Alan's only hope for freedom is to finish the game, which proves risky as all three find themselves running from giant rhinoceroses, evil monkeys and other terrifying creatures.",
    "watchedDate": "2026-02-03T20:24:34.000Z"
  },
  {
    "id": 9325,
    "title": "The Jungle Book",
    "release_date": "1967-10-18",
    "poster_path": "/9BgcTVV43dZ8A1TpuXWkuNTXtfI.jpg",
    "overview": "The boy Mowgli makes his way to the man-village with Bagheera, the wise panther. Along the way he meets jazzy King Louie, the hypnotic snake Kaa and the lovable, happy-go-lucky bear Baloo, who teaches Mowgli \"The Bare Necessities\" of life and the true meaning of friendship.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 9325,
    "title": "The Jungle Book",
    "release_date": "1967-10-18",
    "poster_path": "/9BgcTVV43dZ8A1TpuXWkuNTXtfI.jpg",
    "overview": "The boy Mowgli makes his way to the man-village with Bagheera, the wise panther. Along the way he meets jazzy King Louie, the hypnotic snake Kaa and the lovable, happy-go-lucky bear Baloo, who teaches Mowgli \"The Bare Necessities\" of life and the true meaning of friendship.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 451048,
    "title": "Jungle Cruise",
    "release_date": "2021-07-28",
    "poster_path": "/yKy9ELL8CON5sqDg4yIvBb5LTZL.jpg",
    "overview": "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal \u2013 a discovery that will change the future of medicine.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 329,
    "title": "Jurassic Park",
    "release_date": "1993-06-11",
    "poster_path": "/maFjKnJ62hDQ9E66dKqDZgbUy0H.jpg",
    "overview": "A wealthy entrepreneur secretly creates a theme park featuring living dinosaurs drawn from prehistoric DNA. Before opening day, he invites a team of experts and his two eager grandchildren to experience the park and help calm anxious investors. However, the park is anything but amusing as the security systems go off-line and the dinosaurs escape.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 331,
    "title": "Jurassic Park III",
    "release_date": "2001-07-18",
    "poster_path": "/oQXj4NUfS3r3gHXtDOzcJgj1lLc.jpg",
    "overview": "In need of funds for research, Dr. Alan Grant accepts a large sum of money to accompany Paul and Amanda Kirby on an aerial tour of the infamous Isla Sorna. It isn't long before all hell breaks loose and the stranded wayfarers must fight for survival as a host of new -- and even more deadly -- dinosaurs try to make snacks of them.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 135397,
    "title": "Jurassic World",
    "release_date": "2015-06-06",
    "poster_path": "/rhr4y79GpxQF9IsfJItRXVaoGs4.jpg",
    "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
    "watchedDate": "2026-02-03T20:24:35.000Z"
  },
  {
    "id": 351286,
    "title": "Jurassic World: Fallen Kingdom",
    "release_date": "2018-06-06",
    "poster_path": "/x2Us3jR6ToMJjbcPbLimYoxf6xr.jpg",
    "overview": "Three years after Jurassic World was destroyed, Isla Nublar now sits abandoned. When the island's dormant volcano begins roaring to life, Owen and Claire mount a campaign to rescue the remaining dinosaurs from this extinction-level event.",
    "watchedDate": "2026-02-03T20:24:36.000Z"
  },
  {
    "id": 507086,
    "title": "Jurassic World Dominion",
    "release_date": "2022-06-01",
    "poster_path": "/jbAvCACjLf1ZG0unB2tdmx5HAf1.jpg",
    "overview": "Four years after Isla Nublar was destroyed, dinosaurs now live\u2014and hunt\u2014alongside humans all over the world. This fragile balance will reshape the future and determine, once and for all, whether human beings are to remain the apex predators on a planet they now share with history's most fearsome creatures.",
    "watchedDate": "2026-02-03T20:24:36.000Z"
  },
  {
    "id": 414419,
    "title": "Kill Bill: The Whole Bloody Affair",
    "release_date": "2011-03-27",
    "poster_path": "/lRQHS8x9ofDPVx9gjq6sGAfERkf.jpg",
    "overview": "A former assassin\u2014known only as The Bride\u2014wakes up from a coma after her former boss and lover, Bill, shoots her in the head and steals her unborn child during her wedding rehearsal. She soon embarks on a bloody quest for revenge, hunting down her ex-colleagues of the Deadly Viper Assassination Squad before confronting Bill himself. Quentin Tarantino\u2019s complete Kill Bill, a combination of Volumes 1 and 2, previously deleted scenes, alternate takes, a full-color remaster of the Crazy 88 fight, a 7-minute anime sequence by Production I.G., and a built-in intermission.",
    "watchedDate": "2026-02-03T20:24:36.000Z"
  },
  {
    "id": 262,
    "title": "The King of Comedy",
    "release_date": "1982-12-18",
    "poster_path": "/3sGuQv0UxfjDODCC9IQG5S1jXK8.jpg",
    "overview": "Aspiring comic Rupert Pupkin attempts to achieve success in show business by stalking his idol, a late night talk-show host who craves his own privacy.",
    "watchedDate": "2026-02-03T20:24:36.000Z"
  },
  {
    "id": 207703,
    "title": "Kingsman: The Secret Service",
    "release_date": "2015-01-24",
    "poster_path": "/r6q9wZK5a2K51KFj4LWVID6Ja1r.jpg",
    "overview": "The story of a super-secret spy organization that recruits an unrefined but promising street kid into the agency's ultra-competitive training program just as a global threat emerges from a twisted tech genius.",
    "watchedDate": "2026-02-03T20:24:36.000Z"
  },
  {
    "id": 140300,
    "title": "Kung Fu Panda 3",
    "release_date": "2016-01-23",
    "poster_path": "/oajNi4Su39WAByHI6EONu8G8HYn.jpg",
    "overview": "While Po and his father are visiting a secret panda village, an evil spirit threatens all of China, forcing Po to form a ragtag army to fight back.",
    "watchedDate": "2026-02-03T20:24:37.000Z"
  },
  {
    "id": 10340,
    "title": "Lady and the Tramp",
    "release_date": "1955-06-22",
    "poster_path": "/340NcWz9SQXWQyf4oicMxjbrLOb.jpg",
    "overview": "Lady, a golden cocker spaniel, meets up with a mongrel dog who calls himself the Tramp. He is obviously from the wrong side of town, but happenings at Lady's home make her decide to travel with him for a while.",
    "watchedDate": "2026-02-03T20:24:37.000Z"
  },
  {
    "id": 11051,
    "title": "The Last Temptation of Christ",
    "release_date": "1988-05-28",
    "poster_path": "/7L4qwrC1mipZXJfU5oRgQWChLv1.jpg",
    "overview": "Jesus, a humble Judean carpenter beginning to see that he is the son of God, is drawn into revolutionary action against the Roman occupiers by Judas -- despite his protestations that love, not violence, is the path to salvation. The burden of being the savior of mankind torments Jesus throughout his life, leading him to doubt.",
    "watchedDate": "2026-02-03T20:24:37.000Z"
  },
  {
    "id": 324849,
    "title": "The Lego Batman Movie",
    "release_date": "2017-02-08",
    "poster_path": "/snGwr2gag4Fcgx2OGmH9otl6ofW.jpg",
    "overview": "A cooler-than-ever Bruce Wayne must deal with the usual suspects as they plan to rule Gotham City, while discovering that he has accidentally adopted a teenage orphan who wishes to become his sidekick.",
    "watchedDate": "2026-02-03T20:24:37.000Z"
  },
  {
    "id": 137106,
    "title": "The Lego Movie",
    "release_date": "2014-02-06",
    "poster_path": "/lbctonEnewCYZ4FYoTZhs8cidAl.jpg",
    "overview": "An ordinary Lego mini-figure, mistakenly thought to be the extraordinary MasterBuilder, is recruited to join a quest to stop an evil Lego tyrant from conquering the universe.",
    "watchedDate": "2026-02-03T20:24:37.000Z"
  },
  {
    "id": 392536,
    "title": "LEGO Scooby-Doo! Haunted Hollywood",
    "release_date": "2016-01-28",
    "poster_path": "/fZ53SvgcryXaWctiiRtlxR1p4Uq.jpg",
    "overview": "The gang find themselves in a tinsel-town twist! While on a VIP tour of the legendary Brickton Studios, Scooby and friends get a first-hand experience of the rumored hauntings when classic movie monsters drop in for a creepy casting call.",
    "watchedDate": "2026-02-03T20:24:38.000Z"
  },
  {
    "id": 136406,
    "title": "LEGO Star Wars: The Empire Strikes Out",
    "release_date": "2012-09-26",
    "poster_path": "/doeFDzZ0Ywp8YUoRaEhVE5UBqka.jpg",
    "overview": "Luke Skywalker embarks on a mission to destroy an Imperial base, but is relentlessly chased by a group of fanatic girls who think of him as a celebrity. Meanwhile, Darth Vader engages a rivalry with Darth Maul, in order to prove that he's the best Sith Lord.",
    "watchedDate": "2026-02-03T20:24:38.000Z"
  },
  {
    "id": 280217,
    "title": "The Lego Movie 2: The Second Part",
    "release_date": "2019-02-06",
    "poster_path": "/QTESAsBVZwjtGJNDP7utiGV37z.jpg",
    "overview": "It's been five years since everything was awesome and the citizens are facing a huge new threat: LEGO DUPLO\u00ae invaders from outer space, wrecking everything faster than they can rebuild.",
    "watchedDate": "2026-02-03T20:24:38.000Z"
  },
  {
    "id": 274862,
    "title": "The Lego Ninjago Movie",
    "release_date": "2017-09-21",
    "poster_path": "/vUo0pNXGhp2ffTJxiStWt6fHL7F.jpg",
    "overview": "Six young ninjas are tasked with defending their island home of Ninjago. By night, they\u2019re gifted warriors using their skill and awesome fleet of vehicles to fight villains and monsters. By day, they\u2019re ordinary teens struggling against their greatest enemy....high school.",
    "watchedDate": "2026-02-03T20:24:38.000Z"
  },
  {
    "id": 11774,
    "title": "Lemony Snicket's A Series of Unfortunate Events",
    "release_date": "2004-12-16",
    "poster_path": "/76Xi8z7Whv5WFIdfzzvC5tKSicd.jpg",
    "overview": "Three wealthy children's parents are killed in a fire. When they are sent to a distant relative, they find out that he is plotting to kill them and seize their fortune.",
    "watchedDate": "2026-02-03T20:24:38.000Z"
  },
  {
    "id": 82695,
    "title": "Les Mis\u00e9rables",
    "release_date": "2012-12-18",
    "poster_path": "/6CuzBs2Lb8At7qQr64mLXg2RYRb.jpg",
    "overview": "An adaptation of the successful stage musical based on Victor Hugo's classic novel set in 19th-century France. Jean Valjean, a man imprisoned for stealing bread, must flee a relentless policeman named Javert. The pursuit consumes both men's lives, and soon Valjean finds himself in the midst of the student revolutions in France.",
    "watchedDate": "2026-02-03T20:24:39.000Z"
  },
  {
    "id": 709,
    "title": "Licence to Kill",
    "release_date": "1989-06-13",
    "poster_path": "/8nzJve63EXA79HGAyidZwivZrQ2.jpg",
    "overview": "After capturing the notorious drug lord Franz Sanchez, Bond's close friend and former CIA agent Felix Leiter is left for dead and his wife is murdered. Bond goes rogue and seeks vengeance on those responsible, as he infiltrates Sanchez's organization from the inside.",
    "watchedDate": "2026-02-03T20:24:39.000Z"
  },
  {
    "id": 8587,
    "title": "The Lion King",
    "release_date": "1994-06-15",
    "poster_path": "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "overview": "Young lion prince Simba, eager to one day become king of the Pride Lands, grows up under the watchful eye of his father Mufasa; all the while his villainous uncle Scar conspires to take the throne for himself. Amid betrayal and tragedy, Simba must confront his past and find his rightful place in the Circle of Life.",
    "watchedDate": "2026-02-03T20:24:39.000Z"
  },
  {
    "id": 11430,
    "title": "The Lion King 1\u00bd",
    "release_date": "2004-10-28",
    "poster_path": "/sVJME5R1NmTXtbdnAxYPx7Xa7kr.jpg",
    "overview": "Timon the meerkat and Pumbaa the warthog are best pals and the unsung heroes of the African savanna. This prequel to the smash Disney animated adventure takes you back -- way back -- before Simba's adventure began. You'll find out all about Timon and Pumbaa and tag along as they search for the perfect home and attempt to raise a rambunctious lion cub.",
    "watchedDate": "2026-02-03T20:24:39.000Z"
  },
  {
    "id": 8587,
    "title": "The Lion King",
    "release_date": "1994-06-15",
    "poster_path": "/sKCr78MXSLixwmZ8DyJLrpMsd15.jpg",
    "overview": "Young lion prince Simba, eager to one day become king of the Pride Lands, grows up under the watchful eye of his father Mufasa; all the while his villainous uncle Scar conspires to take the throne for himself. Amid betrayal and tragedy, Simba must confront his past and find his rightful place in the Circle of Life.",
    "watchedDate": "2026-02-03T20:24:39.000Z"
  },
  {
    "id": 10144,
    "title": "The Little Mermaid",
    "release_date": "1989-11-17",
    "poster_path": "/plcZXvI310FkbwIptvd6rqk63LP.jpg",
    "overview": "This colorful adventure tells the story of an impetuous mermaid princess named Ariel who falls in love with the very human Prince Eric and puts everything on the line for the chance to be with him. Memorable songs and characters -- including the villainous sea witch Ursula.",
    "watchedDate": "2026-02-03T20:24:41.000Z"
  },
  {
    "id": 253,
    "title": "Live and Let Die",
    "release_date": "1973-06-27",
    "poster_path": "/39qkrjqMZs6utwNmihVImC3ghas.jpg",
    "overview": "James Bond must investigate a mysterious murder case of a British agent in New Orleans. Soon he finds himself up against a gangster boss named Mr. Big.",
    "watchedDate": "2026-02-03T20:24:41.000Z"
  },
  {
    "id": 1571,
    "title": "Live Free or Die Hard",
    "release_date": "2007-06-20",
    "poster_path": "/31TT47YjBl7a7uvJ3ff1nrirXhP.jpg",
    "overview": "John McClane is back and badder than ever, and this time he calls on the services of a young hacker in his bid to stop a ring of Internet terrorists intent on taking control of America's computer infrastructure.",
    "watchedDate": "2026-02-03T20:24:41.000Z"
  },
  {
    "id": 708,
    "title": "The Living Daylights",
    "release_date": "1987-06-29",
    "poster_path": "/1oRlmWX9hewpn2B44wawBjHd7dx.jpg",
    "overview": "After a defecting Russian general reveals a plot to assassinate foreign spies, James Bond is assigned a secret mission to dispatch the new head of the KGB to prevent an escalation of tensions between the Soviet Union and the West.",
    "watchedDate": "2026-02-03T20:24:41.000Z"
  },
  {
    "id": 11412,
    "title": "The Long Kiss Goodnight",
    "release_date": "1996-10-11",
    "poster_path": "/yREdXX5lMFUKhTvb0ofI7mzUHlR.jpg",
    "overview": "Samantha Caine is a small-town schoolteacher and mom with no memory of her life before washing up on a beach eight years ago. After a car accident and a violent home invasion trigger flashes of her past, she discovers she used to be a deadly CIA assassin. Teaming up with a wisecracking private investigator, Samantha must return to her old ways to take down the people who tried to erase her.",
    "watchedDate": "2026-02-03T20:24:41.000Z"
  },
  {
    "id": 120,
    "title": "The Lord of the Rings: The Fellowship of the Ring",
    "release_date": "2001-12-18",
    "poster_path": "/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    "overview": "Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 122,
    "title": "The Lord of the Rings: The Return of the King",
    "release_date": "2003-12-17",
    "poster_path": "/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg",
    "overview": "As armies mass for a final battle that will decide the fate of the world--and powerful, ancient forces of Light and Dark compete to determine the outcome--one member of the Fellowship of the Ring is revealed as the noble heir to the throne of the Kings of Men. Yet, the sole hope for triumph over evil lies with a brave hobbit, Frodo, who, accompanied by his loyal friend Sam and the hideous, wretched Gollum, ventures deep into the very dark heart of Mordor on his seemingly impossible quest to destroy the Ring of Power.\u200b",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 121,
    "title": "The Lord of the Rings: The Two Towers",
    "release_date": "2002-12-18",
    "poster_path": "/5VTN0pR8gcqV3EPUHHfMGnJYN9L.jpg",
    "overview": "Frodo Baggins and the other members of the Fellowship continue on their sacred quest to destroy the One Ring--but on separate paths. Their destinies lie at two towers--Orthanc Tower in Isengard, where the corrupt wizard Saruman awaits, and Sauron's fortress at Barad-dur, deep within the dark lands of Mordor. Frodo and Sam are trekking to Mordor to destroy the One Ring of Power while Gimli, Legolas and Aragorn search for the orc-captured Merry and Pippin. All along, nefarious wizard Saruman awaits the Fellowship members at the Orthanc Tower in Isengard.",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 752623,
    "title": "The Lost City",
    "release_date": "2022-03-23",
    "poster_path": "/rnheO8cFvCYcmZsDrBoabJbKLFE.jpg",
    "overview": "Reclusive author Loretta Sage writes about exotic places in her popular adventure novels that feature a handsome cover model named Alan. While on tour promoting her new book with Alan, Loretta gets kidnapped by an eccentric billionaire who hopes she can lead him to the ancient city's lost treasure that featured in her latest story. Alan, determined to prove he can be a hero in real life and not just on the pages of her books, sets off to rescue her.",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 330,
    "title": "The Lost World: Jurassic Park",
    "release_date": "1997-05-23",
    "poster_path": "/6fSkhv35nPSw9hwPVCMINQFG1WD.jpg",
    "overview": "Four years after Jurassic Park's genetically bred dinosaurs ran amok, multimillionaire John Hammond shocks chaos theorist Ian Malcolm by revealing that he has been breeding more beasties at a secret location. Malcolm, his paleontologist ladylove and a wildlife videographer join an expedition to document the lethal lizards' natural behavior in this action-packed thriller.",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 14136,
    "title": "The Love Bug",
    "release_date": "1968-12-23",
    "poster_path": "/9Lc1efdYZUZia2zsRWcUkiD1KdN.jpg",
    "overview": "Down-on-his-luck race car driver Jim Douglas teams up with a little VW Bug that has a mind of its own, not realizing Herbie's worth until a sneaky rival plots to steal him.",
    "watchedDate": "2026-02-03T20:24:42.000Z"
  },
  {
    "id": 508943,
    "title": "Luca",
    "release_date": "2021-06-17",
    "poster_path": "/9x4i9uKGXt8IiiIF5Ey0DIoY738.jpg",
    "overview": "Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water\u2019s surface.",
    "watchedDate": "2026-02-03T20:24:43.000Z"
  },
  {
    "id": 240832,
    "title": "Lucy",
    "release_date": "2014-07-25",
    "poster_path": "/kRbpUTRNm6QbLQFPFWUcNC4czEm.jpg",
    "overview": "A woman, accidentally caught in a dark deal, turns the tables on her captors and transforms into a merciless warrior evolved beyond human logic.",
    "watchedDate": "2026-02-03T20:24:43.000Z"
  },
  {
    "id": 76341,
    "title": "Mad Max: Fury Road",
    "release_date": "2015-05-13",
    "poster_path": "/hA2ple9q4qnwxp3hKVNhroipsir.jpg",
    "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order.",
    "watchedDate": "2026-02-03T20:24:43.000Z"
  },
  {
    "id": 80321,
    "title": "Madagascar 3: Europe's Most Wanted",
    "release_date": "2012-06-06",
    "poster_path": "/ekraj4ksvIKeuvQVEevEJkuybZd.jpg",
    "overview": "Animal pals Alex, Marty, Melman, and Gloria are still trying to make it back to New York's Central Park Zoo. They are forced to take a detour to Europe to find the penguins and chimps who broke the bank at a Monte Carlo casino. When French animal-control officer Capitaine Chantel DuBois picks up their scent, Alex and company are forced to hide out in a traveling circus.",
    "watchedDate": "2026-02-03T20:24:43.000Z"
  },
  {
    "id": 10761,
    "title": "Made of Honor",
    "release_date": "2008-04-30",
    "poster_path": "/pDg8D0jNqmz7RbCBgblWvmPswHE.jpg",
    "overview": "Tom and Hannah have been platonic friends for 10 years. He's a serial dater, while she wants marriage but hasn't found Mr. Right. Just as Tom is starting to think that he is relationship material after all, Hannah gets engaged. When she asks Tom to be her 'maid' of honor, he reluctantly agrees just so he can attempt to stop the wedding and woo her.",
    "watchedDate": "2026-02-03T20:24:43.000Z"
  },
  {
    "id": 334,
    "title": "Magnolia",
    "release_date": "1999-12-17",
    "poster_path": "/tpfC325Jk6S38VTe5dDWjWtoyxr.jpg",
    "overview": "On one random day in the San Fernando Valley, a dying father, a young wife, a male caretaker, a famous lost son, a police officer in love, a boy genius, an ex-boy genius, a game show host and an estranged daughter will each become part of a dazzling multiplicity of plots, but one story.",
    "watchedDate": "2026-02-03T20:24:44.000Z"
  },
  {
    "id": 11631,
    "title": "Mamma Mia!",
    "release_date": "2008-07-03",
    "poster_path": "/zdUA4FNHbXPadzVOJiU0Rgn6cHR.jpg",
    "overview": "A spirited young bride-to-be living with her single mother on a small Greek island secretly invites three of her mother's ex-boyfriends in hope of finding her biological father to walk her down the aisle.",
    "watchedDate": "2026-02-03T20:24:44.000Z"
  },
  {
    "id": 682,
    "title": "The Man with the Golden Gun",
    "release_date": "1974-12-04",
    "poster_path": "/xVkbKwGnBVNQ122GN5bCTMyPbWz.jpg",
    "overview": "Cool government operative James Bond searches for a stolen invention that can turn the sun's heat into a destructive weapon. He soon crosses paths with the menacing Francisco Scaramanga, a hitman so skilled he has a seven-figure working fee. Bond then joins forces with the swimsuit-clad Mary Goodnight, and together they track Scaramanga to a Thai tropical isle hideout where the killer-for-hire lures the slick spy into a deadly maze for a final duel.",
    "watchedDate": "2026-02-03T20:24:44.000Z"
  },
  {
    "id": 286217,
    "title": "The Martian",
    "release_date": "2015-09-30",
    "poster_path": "/fASz8A0yFE3QB6LgGoOfwvFSseV.jpg",
    "overview": "During a manned mission to Mars, Astronaut Mark Watney is presumed dead after a fierce storm and left behind by his crew. But Watney has survived and finds himself stranded and alone on the hostile planet. With only meager supplies, he must draw upon his ingenuity, wit and spirit to subsist and find a way to signal to Earth that he is alive.",
    "watchedDate": "2026-02-03T20:24:44.000Z"
  },
  {
    "id": 609681,
    "title": "The Marvels",
    "release_date": "2023-11-08",
    "poster_path": "/9GBhzXMFjgcZ3FdR9w3bUMMTps5.jpg",
    "overview": "When her duties send her to an anomalous wormhole linked to a Kree revolutionary, Carol's powers become entangled with that of Jersey City super-fan Kamala Khan, aka Ms. Marvel, and Carol's estranged niece, now S.A.B.E.R. astronaut Captain Monica Rambeau. Together, this unlikely trio must team up and learn to work in concert to save the universe.",
    "watchedDate": "2026-02-03T20:24:44.000Z"
  },
  {
    "id": 433,
    "title": "Mary Poppins",
    "release_date": "1964-12-17",
    "poster_path": "/pHyWpWn2pRIfhS3Arcn4SKtKKW4.jpg",
    "overview": "In turn of the century London, a magical nanny employs music and adventure to help two neglected children become closer to their father.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 400650,
    "title": "Mary Poppins Returns",
    "release_date": "2018-12-13",
    "poster_path": "/uTVGku4LibMGyKgQvjBtv3OYfAX.jpg",
    "overview": "Mary Poppins returns to the Banks family and helps them evade grave dangers by taking them on magical, musical adventures.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 603,
    "title": "The Matrix",
    "release_date": "1999-03-31",
    "poster_path": "/p96dm7sCMn4VYAStA6siNz30G1r.jpg",
    "overview": "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 203,
    "title": "Mean Streets",
    "release_date": "1973-10-14",
    "poster_path": "/9msfwOeGc9uL1iRRTBdEf15XonC.jpg",
    "overview": "A small-time hood must choose from among love, friendship and the chance to rise within the mob.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 77,
    "title": "Memento",
    "release_date": "2000-10-11",
    "poster_path": "/fKTPH2WvH8nHTXeBYBVhawtRqtR.jpg",
    "overview": "Leonard Shelby is tracking down the man who raped and murdered his wife. The difficulty of locating his wife's killer, however, is compounded by the fact that he suffers from a rare, untreatable form of short-term memory loss. Although he can recall details of life before his accident, Leonard cannot remember what happened fifteen minutes ago, where he's going, or why.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 14813,
    "title": "Mickey's Christmas Carol",
    "release_date": "1983-10-19",
    "poster_path": "/6QH10DqZ0feBW2phvrtoLqT1s0k.jpg",
    "overview": "Ebenezer Scrooge is far too greedy to understand that Christmas is a time for kindness and generosity. But with the guidance of some new found friends, Scrooge learns to embrace the spirit of the season. A retelling of the classic Dickens tale with Disney's classic characters.",
    "watchedDate": "2026-02-03T20:24:45.000Z"
  },
  {
    "id": 13378,
    "title": "Mickey's Twice Upon a Christmas",
    "release_date": "2004-11-09",
    "poster_path": "/yPtfdYkhOWf3TbO1BOnRCF2vtBt.jpg",
    "overview": "Santa Claus, Mickey Mouse and all his Disney pals star in an original movie about the importance of opening your heart to the true spirit of Christmas. Stubborn old Donald tries in vain to resist the joys of the season, and Mickey and Pluto learn a great lesson about the power of friendship.",
    "watchedDate": "2026-02-03T20:24:46.000Z"
  },
  {
    "id": 950387,
    "title": "A Minecraft Movie",
    "release_date": "2025-03-31",
    "poster_path": "/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
    "overview": "Four misfits find themselves struggling with ordinary problems when they are suddenly pulled through a mysterious portal into the Overworld: a bizarre, cubic wonderland that thrives on imagination. To get back home, they'll have to master this world while embarking on a magical quest with an unexpected, expert crafter, Steve.",
    "watchedDate": "2026-02-03T20:24:46.000Z"
  },
  {
    "id": 211672,
    "title": "Minions",
    "release_date": "2015-06-17",
    "poster_path": "/dr02BdCNAUPVU07aOodwPYv6HCf.jpg",
    "overview": "Minions Stuart, Kevin and Bob are recruited by Scarlet Overkill, a super-villain who, alongside her inventor husband Herb, hatches a plot to take over the world.",
    "watchedDate": "2026-02-03T20:24:46.000Z"
  },
  {
    "id": 56292,
    "title": "Mission: Impossible - Ghost Protocol",
    "release_date": "2011-12-07",
    "poster_path": "/eRZTGx7GsiKqPch96k27LK005ZL.jpg",
    "overview": "Ethan Hunt and his team are racing against time to track down a dangerous terrorist named Hendricks, who has gained access to Russian nuclear launch codes and is planning a strike on the United States. An attempt to stop him ends in an explosion causing severe destruction to the Kremlin and the IMF to be implicated in the bombing, forcing the President to disavow them. No longer being aided by the government, Ethan and his team chase Hendricks around the globe, although they might still be too late to stop a disaster.",
    "watchedDate": "2026-02-03T20:24:46.000Z"
  },
  {
    "id": 575264,
    "title": "Mission: Impossible - Dead Reckoning Part One",
    "release_date": "2023-07-08",
    "poster_path": "/NNxYkU70HPurnNCSiCjYAmacwm.jpg",
    "overview": "Ethan Hunt and his IMF team embark on their most dangerous mission yet: To track down a terrifying new weapon that threatens all of humanity before it falls into the wrong hands. With control of the future and the world's fate at stake and dark forces from Ethan's past closing in, a deadly race around the globe begins. Confronted by a mysterious, all-powerful enemy, Ethan must consider that nothing can matter more than his mission\u2014not even the lives of those he cares about most.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 277834,
    "title": "Moana",
    "release_date": "2016-10-13",
    "poster_path": "/9tzN8sPbyod2dsa0lwuvrwBDWra.jpg",
    "overview": "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 1241982,
    "title": "Moana 2",
    "release_date": "2024-11-21",
    "poster_path": "/aLVkiINlIeCkcZIzb7XHzPYgO6L.jpg",
    "overview": "After receiving an unexpected call from her wayfinding ancestors, Moana journeys alongside Maui and a new crew to the far seas of Oceania and into dangerous, long-lost waters for an adventure unlike anything she's ever faced.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 62211,
    "title": "Monsters University",
    "release_date": "2013-06-19",
    "poster_path": "/y7thwJ7z5Bplv6vwl6RI0yteaDD.jpg",
    "overview": "A look at the relationship between Mike and Sulley during their days at Monsters University \u2014 when they weren't necessarily the best of friends.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 585,
    "title": "Monsters, Inc.",
    "release_date": "2001-11-01",
    "poster_path": "/wFSpyMsp7H0ttERbxY7Trlv8xry.jpg",
    "overview": "Lovable Sulley and his wisecracking sidekick Mike Wazowski are the top scare team at Monsters, Inc., the scream-processing factory in Monstropolis. When a little girl named Boo wanders into their world, it's the monsters who are scared silly, and it's up to Sulley and Mike to keep her out of sight and get her back home.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 698,
    "title": "Moonraker",
    "release_date": "1979-06-26",
    "poster_path": "/6LrJdXNmu5uHOVALZxVYd44Lva0.jpg",
    "overview": "After Drax Industries' Moonraker space shuttle is hijacked, secret agent James Bond is assigned to investigate, traveling to California to meet the company's owner, the mysterious Hugo Drax. With the help of scientist Dr. Holly Goodhead, Bond soon uncovers Drax's nefarious plans for humanity, all the while fending off an old nemesis, Jaws, and venturing to Venice, Rio, the Amazon...and even outer space.",
    "watchedDate": "2026-02-03T20:24:47.000Z"
  },
  {
    "id": 381283,
    "title": "mother!",
    "release_date": "2017-09-13",
    "poster_path": "/fjny9chXPx69ln1LMJxbwi5yHMt.jpg",
    "overview": "A couple's relationship is tested when uninvited guests arrive at their home, disrupting their tranquil existence.",
    "watchedDate": "2026-02-03T20:24:48.000Z"
  },
  {
    "id": 762509,
    "title": "Mufasa: The Lion King",
    "release_date": "2024-12-18",
    "poster_path": "/lurEK87kukWNaHd0zYnsi3yzJrs.jpg",
    "overview": "Mufasa, a cub lost and alone, meets a sympathetic lion named Taka, the heir to a royal bloodline. The chance meeting sets in motion an expansive journey of a group of misfits searching for their destiny.",
    "watchedDate": "2026-02-03T20:24:48.000Z"
  },
  {
    "id": 10674,
    "title": "Mulan",
    "release_date": "1998-06-18",
    "poster_path": "/jAbexAtB0aSfP5Ay4TpWHARyVnG.jpg",
    "overview": "To save her father from certain death in the army, a young woman secretly enlists in his place and becomes one of China's greatest heroines in the process.",
    "watchedDate": "2026-02-03T20:24:48.000Z"
  },
  {
    "id": 1018,
    "title": "Mulholland Drive",
    "release_date": "2001-06-06",
    "poster_path": "/x7A59t6ySylr1L7aubOQEA480vM.jpg",
    "overview": "Blonde Betty Elms has only just arrived in Hollywood to become a movie star when she meets an enigmatic brunette with amnesia. Meanwhile, as the two set off to solve the second woman's identity, filmmaker Adam Kesher runs into ominous trouble while casting his latest project.",
    "watchedDate": "2026-02-03T20:24:49.000Z"
  },
  {
    "id": 64328,
    "title": "The Muppets",
    "release_date": "2011-11-23",
    "poster_path": "/mOB0Hdm23NslPNDkZC9eueatW3b.jpg",
    "overview": "When Kermit the Frog and the Muppets learn that their beloved theater is slated for demolition, a sympathetic human, Gary, and his puppet brother, Walter, swoop in to help the gang put on a show and raise the $10 million they need to save the day.",
    "watchedDate": "2026-02-03T20:24:49.000Z"
  },
  {
    "id": 10208,
    "title": "Muppets from Space",
    "release_date": "1999-07-14",
    "poster_path": "/Aww9cF4uMsbald9ddhCYFoP4gBi.jpg",
    "overview": "When Gonzo's breakfast cereal tells him that he's the descendant of aliens from another planet, his attempts at extraterrestrial communication get him kidnapped by a secret government agency, prompting the Muppets to spring into action to rescue their friend.",
    "watchedDate": "2026-02-03T20:24:50.000Z"
  },
  {
    "id": 145220,
    "title": "Muppets Most Wanted",
    "release_date": "2014-03-20",
    "poster_path": "/8CU1WSLAaQjLmRbEmyhfDoOJCyh.jpg",
    "overview": "While on a grand world tour, The Muppets find themselves wrapped into an European jewel-heist caper headed by a Kermit the Frog look-alike and his dastardly sidekick.",
    "watchedDate": "2026-02-03T20:24:50.000Z"
  },
  {
    "id": 10377,
    "title": "My Cousin Vinny",
    "release_date": "1992-03-13",
    "poster_path": "/iwSURa8nS2ujwrU3s1lfxxX7voH.jpg",
    "overview": "Two carefree pals from Brooklyn traveling through rural Alabama on their way back to college are mistakenly arrested, and charged with murder. Fortunately, one of them has a cousin who's a lawyer - Vincent Gambini, a former auto mechanic from Brooklyn who just passed his bar exam after his sixth try. When he arrives with his leather-clad girlfriend, to try his first case, it's a real shock - for him and the Deep South!",
    "watchedDate": "2026-02-03T20:24:50.000Z"
  },
  {
    "id": 335360,
    "title": "My Little Pony: The Movie",
    "release_date": "2017-10-05",
    "poster_path": "/AiJRCzcZSVs9xPHoEKZRp80TyTA.jpg",
    "overview": "A new dark force threatens Ponyville, and the Mane 6 \u2013 Twilight Sparkle, Applejack, Rainbow Dash, Pinkie Pie, Fluttershy and Rarity \u2013 embark on an unforgettable journey beyond Equestria where they meet new friends and exciting challenges on a quest to use the magic of friendship and save their home.",
    "watchedDate": "2026-02-03T20:24:50.000Z"
  },
  {
    "id": 2059,
    "title": "National Treasure",
    "release_date": "2004-11-19",
    "poster_path": "/pxL6E4GBOPUG6CdkO9cUQN5VMwI.jpg",
    "overview": "Modern treasure hunters, led by archaeologist Ben Gates, search for a chest of riches rumored to have been stashed away by George Washington, Thomas Jefferson and Benjamin Franklin during the Revolutionary War. The chest's whereabouts may lie in secret clues embedded in the Constitution and the Declaration of Independence, and Gates is in a race to find the gold before his enemies do.",
    "watchedDate": "2026-02-03T20:24:50.000Z"
  },
  {
    "id": 6637,
    "title": "National Treasure: Book of Secrets",
    "release_date": "2007-12-19",
    "poster_path": "/dc9F1vNOGbgeZrO9ejNkbgHPlfw.jpg",
    "overview": "Benjamin Franklin Gates and Abigail Chase re-team with Riley Poole and, now armed with a stack of long-lost pages from John Wilkes Booth's diary, Ben must follow a clue left there to prove his ancestor's innocence in the assassination of Abraham Lincoln.",
    "watchedDate": "2026-02-03T20:24:51.000Z"
  },
  {
    "id": 178590,
    "title": "Women in New York",
    "release_date": "1977-06-21",
    "poster_path": "/60EJdyogoP59rpya0yRdWcuQio0.jpg",
    "overview": "Wives of rich men have nothing to do because they have staff \u2013 like the cook, the maid, the hairdresser, the manicurist, the governess, the teacher, the tailor, etc. \u2013 who work for them. Naturally, the wives themselves do not pursue careers; they depend on their husbands\u2019 money. This is why most of their thoughts revolve around the husband. And because the husband only appears as \u201cthe\u201d man, there is no man in this film. All women fight for the same man. Those who have one want to keep him no matter what. And those who do not have one yet only have one goal: to take away somebody else\u2019s husband.",
    "watchedDate": "2026-02-03T20:24:51.000Z"
  },
  {
    "id": 1593,
    "title": "Night at the Museum",
    "release_date": "2006-12-20",
    "poster_path": "/pDsAAYf6Zn0yiAGJ6lYGs6hoZ4E.jpg",
    "overview": "Chaos reigns at the natural history museum when night watchman Larry Daley accidentally stirs up an ancient curse, awakening Attila the Hun, an army of gladiators, a Tyrannosaurus rex and other exhibits.",
    "watchedDate": "2026-02-03T20:24:51.000Z"
  },
  {
    "id": 181533,
    "title": "Night at the Museum: Secret of the Tomb",
    "release_date": "2014-12-17",
    "poster_path": "/xwgy305K6qDs3D20xUO4OZu1HPY.jpg",
    "overview": "When the magic powers of The Tablet of Ahkmenrah begin to die out, Larry Daley spans the globe, uniting favorite and new characters while embarking on an epic quest to save the magic before it is gone forever.",
    "watchedDate": "2026-02-03T20:24:51.000Z"
  },
  {
    "id": 242582,
    "title": "Nightcrawler",
    "release_date": "2014-10-23",
    "poster_path": "/j9HrX8f7GbZQm1BrBiR40uFQZSb.jpg",
    "overview": "When Lou Bloom, desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.",
    "watchedDate": "2026-02-03T20:24:51.000Z"
  },
  {
    "id": 370172,
    "title": "No Time to Die",
    "release_date": "2021-09-29",
    "poster_path": "/iUgygt3fscRoKWCV1d0C7FbM9TP.jpg",
    "overview": "Bond has left active service and is enjoying a tranquil life in Jamaica. His peace is short-lived when his old friend Felix Leiter from the CIA turns up asking for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond onto the trail of a mysterious villain armed with dangerous new technology.",
    "watchedDate": "2026-02-03T20:24:52.000Z"
  },
  {
    "id": 134,
    "title": "O Brother, Where Art Thou?",
    "release_date": "2000-08-30",
    "poster_path": "/s9foMAcLg8GEzzQzer04qOGdD1k.jpg",
    "overview": "In the deep south during the 1930s, three escaped convicts search for hidden treasure while a relentless lawman pursues them.",
    "watchedDate": "2026-02-03T20:24:52.000Z"
  },
  {
    "id": 700,
    "title": "Octopussy",
    "release_date": "1983-06-05",
    "poster_path": "/yoosZitM9igSk3Sd0sBXIhKlAh1.jpg",
    "overview": "James Bond is sent to investigate after a fellow \u201c00\u201d agent is found dead with a priceless Indian Faberg\u00e9 egg. Bond follows the mystery and uncovers a smuggling scandal and a Russian General who wants to provoke a new World War.",
    "watchedDate": "2026-02-03T20:24:52.000Z"
  },
  {
    "id": 460793,
    "title": "Olaf's Frozen Adventure",
    "release_date": "2017-10-27",
    "poster_path": "/As8WTtxXs9e3cBit3ztTf7zoRmm.jpg",
    "overview": "Olaf is on a mission to harness the best holiday traditions for Anna, Elsa, and Kristoff.",
    "watchedDate": "2026-02-03T20:24:52.000Z"
  },
  {
    "id": 668,
    "title": "On Her Majesty's Secret Service",
    "release_date": "1969-12-18",
    "poster_path": "/m3KfbxvqaiAvRJ6MpguA3GuLdDQ.jpg",
    "overview": "James Bond tracks his archnemesis, Ernst Blofeld, to a mountaintop retreat in the Swiss alps where he is training an army of beautiful, lethal women. Along the way, Bond falls for Italian contessa Tracy Draco, and marries her in order to get closer to Blofeld.",
    "watchedDate": "2026-02-03T20:24:52.000Z"
  },
  {
    "id": 1139087,
    "title": "Once Upon a Studio",
    "release_date": "2023-09-24",
    "poster_path": "/aiy3G1cYWV3LgKZHY6a3jL8bjYL.jpg",
    "overview": "Created for Disney's 100th anniversary, the short features Mickey Mouse corralling a gallery of legendary Disney characters for a group photo.",
    "watchedDate": "2026-02-03T20:24:53.000Z"
  },
  {
    "id": 1428,
    "title": "Once Upon a Time in Mexico",
    "release_date": "2003-09-11",
    "poster_path": "/bsHbVPpaOfmGlcLMG20HfrPv1hg.jpg",
    "overview": "A corrupt CIA agent Sands hires hitman El Mariachi to assassinate a Mexican general hired by a drug kingpin attempting a coup d'\u00e9tat of the President of Mexico.",
    "watchedDate": "2026-02-03T20:24:53.000Z"
  },
  {
    "id": 508439,
    "title": "Onward",
    "release_date": "2020-02-29",
    "poster_path": "/f4aul3FyD3jv3v4bul1IrkWZvzq.jpg",
    "overview": "In a suburban fantasy world, two teenage elf brothers embark on an extraordinary quest to discover if there is still a little magic left out there.",
    "watchedDate": "2026-02-03T20:24:53.000Z"
  },
  {
    "id": 6023,
    "title": "P.S. I Love You",
    "release_date": "2007-11-15",
    "poster_path": "/x6M9nlTpgpI4AOw0tMkOAVbhL5z.jpg",
    "overview": "A young widow discovers that her late husband has left her 10 messages intended to help ease her pain and start a new life.",
    "watchedDate": "2026-02-03T20:24:53.000Z"
  },
  {
    "id": 116149,
    "title": "Paddington",
    "release_date": "2014-11-24",
    "poster_path": "/wpchRGhRhvhtU083PfX2yixXtiw.jpg",
    "overview": "A young Peruvian bear travels to London in search of a home. Finding himself lost and alone at Paddington Station, he meets the kindly Brown family, who offer him a temporary haven.",
    "watchedDate": "2026-02-03T20:24:53.000Z"
  },
  {
    "id": 346648,
    "title": "Paddington 2",
    "release_date": "2017-11-09",
    "poster_path": "/1OJ9vkD5xPt3skC6KguyXAgagRZ.jpg",
    "overview": "Paddington, now happily settled with the Browns, picks up a series of odd jobs to buy the perfect present for his Aunt Lucy, but it is stolen.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 227973,
    "title": "The Peanuts Movie",
    "release_date": "2015-11-05",
    "poster_path": "/aiwdwnl7RFs1vcBanOKr13ye3wE.jpg",
    "overview": "Snoopy embarks upon his greatest mission as he and his team take to the skies to pursue their arch-nemesis, while his best pal Charlie Brown begins his own epic quest.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 270946,
    "title": "Penguins of Madagascar",
    "release_date": "2014-11-22",
    "poster_path": "/dXbpNrPDZDMEbujFoOxmMNQVMHa.jpg",
    "overview": "Skipper, Kowalski, Rico and Private join forces with undercover organization The North Wind to stop the villainous Dr. Octavius Brine from destroying the world as we know it.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 11114,
    "title": "Pete's Dragon",
    "release_date": "1977-11-03",
    "poster_path": "/noShGNQKAgMqNanJL5EiZlf6LCp.jpg",
    "overview": "Pete, a young orphan, runs away to a Maine fishing town with his best friend a lovable, sometimes invisible dragon named Elliott! When they are taken in by a kind lighthouse keeper, Nora, and her father, Elliott's prank playing lands them in big trouble. Then, when crooked salesmen try to capture Elliott for their own gain, Pete must attempt a daring rescue.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 10693,
    "title": "Peter Pan",
    "release_date": "1953-02-05",
    "poster_path": "/fJJOs1iyrhKfZceANxoPxPwNGF1.jpg",
    "overview": "Leaving the safety of their nursery behind, Wendy, Michael and John follow Peter Pan to a magical world where childhood lasts forever. But while in Neverland, the kids must face Captain Hook and foil his attempts to get rid of Peter for good.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 381719,
    "title": "Peter Rabbit",
    "release_date": "2018-02-07",
    "poster_path": "/lugOvdaNpbVGQK9TyMRDiUbLtY6.jpg",
    "overview": "Peter Rabbit's feud with Mr. McGregor escalates to greater heights than ever before as they rival for the affections of the warm-hearted animal lover who lives next door.",
    "watchedDate": "2026-02-03T20:24:54.000Z"
  },
  {
    "id": 285,
    "title": "Pirates of the Caribbean: At World's End",
    "release_date": "2007-05-19",
    "poster_path": "/jGWpG4YhpQwVmjyHEGkxEkeRf0S.jpg",
    "overview": "Captain Jack Sparrow, that wily charmer of a pirate, is trapped in Davy Jones' Locker when his pirate brethren begin a desperate quest to locate and rescue him. Follow their wild seafaring adventures from exotic Singapore to World's End and beyond.",
    "watchedDate": "2026-02-03T20:24:55.000Z"
  },
  {
    "id": 58,
    "title": "Pirates of the Caribbean: Dead Man's Chest",
    "release_date": "2006-07-06",
    "poster_path": "/uXEqmloGyP7UXAiphJUu2v2pcuE.jpg",
    "overview": "Jack's got a blood debt to pay: he owes his soul to the legendary Davy Jones, ghastly Ruler of the Ocean Depths.  But ever-crafty Jack isn't about to go down without a fight.",
    "watchedDate": "2026-02-03T20:24:55.000Z"
  },
  {
    "id": 166426,
    "title": "Pirates of the Caribbean: Dead Men Tell No Tales",
    "release_date": "2017-05-23",
    "poster_path": "/6lAPOAFYFWIO3SQRemEY2wInQMC.jpg",
    "overview": "Thrust into an all-new adventure, a down-on-his-luck Capt. Jack Sparrow feels the winds of ill-fortune blowing even more strongly when deadly ghost sailors led by his old nemesis, the evil Capt. Salazar, escape from the Devil's Triangle. Jack's only hope of survival lies in seeking out the legendary Trident of Poseidon, but to find it, he must forge an uneasy alliance with a brilliant and beautiful astronomer and a headstrong young man in the British navy.",
    "watchedDate": "2026-02-03T20:24:55.000Z"
  },
  {
    "id": 1865,
    "title": "Pirates of the Caribbean: On Stranger Tides",
    "release_date": "2011-05-15",
    "poster_path": "/keGfSvCmYj7CvdRx36OdVrAEibE.jpg",
    "overview": "When Jack crosses paths with a woman from his past, he's not sure if it's love...or if she's a ruthless con artist using him to find the fabled Fountain of Youth.",
    "watchedDate": "2026-02-03T20:24:55.000Z"
  },
  {
    "id": 22,
    "title": "Pirates of the Caribbean: The Curse of the Black Pearl",
    "release_date": "2003-07-09",
    "poster_path": "/poHwCZeWzJCShH7tOjg8RIoyjcw.jpg",
    "overview": "When wily Captain Barbossa steals Jack Sparrow's ship and kidnaps the governor's beautiful daughter, Elizabeth, her childhood friend Will Turner joins forces with Jack to save her and recapture Jack's ship, the Black Pearl.",
    "watchedDate": "2026-02-03T20:24:55.000Z"
  },
  {
    "id": 151960,
    "title": "Planes",
    "release_date": "2013-08-09",
    "poster_path": "/i2xgU0y0p77WTrB0oIkbpdaWq8R.jpg",
    "overview": "Dusty is a cropdusting plane who dreams of competing in a famous aerial race. The problem? He is hopelessly afraid of heights. With the support of his mentor Skipper and a host of new friends, Dusty sets off to make his dreams come true.",
    "watchedDate": "2026-02-03T20:24:56.000Z"
  },
  {
    "id": 316541,
    "title": "Planes | Fire and Rescue: Smokejumpers",
    "release_date": "2014-11-04",
    "poster_path": "/tsVv04zhHFBO03Aq6BpzJx0OrFh.jpg",
    "overview": "The Smokejumpers handle another mission in the park.",
    "watchedDate": "2026-02-03T20:24:56.000Z"
  },
  {
    "id": 2609,
    "title": "Planes, Trains and Automobiles",
    "release_date": "1987-11-26",
    "poster_path": "/fwi2cET87xArJCb8MdbWq2BZO3n.jpg",
    "overview": "An irritable marketing executive, Neal Page, is heading home to Chicago for Thanksgiving when a number of delays force him to travel with a well meaning but overbearing shower curtain ring salesman, Del Griffith.",
    "watchedDate": "2026-02-03T20:24:56.000Z"
  },
  {
    "id": 10530,
    "title": "Pocahontas",
    "release_date": "1995-06-16",
    "poster_path": "/kZ1ft0QZ4e3zDUPMBftEkwI9ftd.jpg",
    "overview": "Pocahontas, daughter of a Native American tribe chief, falls in love with an English soldier as colonists invade 17th century Virginia.",
    "watchedDate": "2026-02-03T20:24:57.000Z"
  },
  {
    "id": 5255,
    "title": "The Polar Express",
    "release_date": "2004-11-10",
    "poster_path": "/eOoCzH0MqeGr2taUZO4SwG416PF.jpg",
    "overview": "When a doubting young boy takes an extraordinary train ride to the North Pole, he embarks on a journey of self-discovery that shows him that the wonder of life never fades for those who believe.",
    "watchedDate": "2026-02-03T20:24:58.000Z"
  },
  {
    "id": 114,
    "title": "Pretty Woman",
    "release_date": "1990-03-23",
    "poster_path": "/hVHUfT801LQATGd26VPzhorIYza.jpg",
    "overview": "While on a business trip in Los Angeles, Edward Lewis, a millionaire entrepreneur who makes a living buying and breaking up companies, picks up a prostitute, Vivian, while asking for directions; after, Edward hires Vivian to stay with him for the weekend to accompany him to a few social events, and the two get closer only to discover there are significant hurdles to overcome as they try to bridge the gap between their very different worlds.",
    "watchedDate": "2026-02-03T20:24:58.000Z"
  },
  {
    "id": 11137,
    "title": "The Prince & Me",
    "release_date": "2004-03-28",
    "poster_path": "/2voUK98TW1cJ3w0qmDIdB16A3x6.jpg",
    "overview": "A fairy tale love-story about pre-med student Paige who falls in love with a Danish Prince \"Eddie\" who refused to follow the traditions of his parents and has come to the US to quench his thirst for rebellion. Paige and Edward come from two different worlds, but there is an undeniable attraction between them.",
    "watchedDate": "2026-02-03T20:24:59.000Z"
  },
  {
    "id": 10198,
    "title": "The Princess and the Frog",
    "release_date": "2009-12-08",
    "poster_path": "/v6nAUs62OJ4DXmnnmPFeVmMz8H9.jpg",
    "overview": "A waitress, desperate to fulfill her dreams as a restaurant owner, is set on a journey to turn a frog prince back into a human being, but she has to face the same problem after she kisses him.",
    "watchedDate": "2026-02-03T20:24:59.000Z"
  },
  {
    "id": 11130,
    "title": "The Princess Diaries 2: Royal Engagement",
    "release_date": "2004-08-06",
    "poster_path": "/5XToqGcE4qdfOSaCPWI7kAb1bm7.jpg",
    "overview": "Mia Thermopolis is now a college graduate and on her way to Genovia to take up her duties as princess. Accompanied by her friend Lilly, Mia continues her 'princess lessons', like riding horses side-saddle and archery. But her already complicated life is turned upside down once again when she learns that she is to take the crown as queen earlier than expected, all while she meets a mysteriously charming young man.",
    "watchedDate": "2026-02-03T20:24:59.000Z"
  },
  {
    "id": 680,
    "title": "Pulp Fiction",
    "release_date": "1994-09-10",
    "poster_path": "/vQWk5YBFWF4bZaofAbv0tShwBvQ.jpg",
    "overview": "A burger-loving hit man, his philosophical partner, a drug-addled gangster's moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.",
    "watchedDate": "2026-02-03T20:24:59.000Z"
  },
  {
    "id": 315162,
    "title": "Puss in Boots: The Last Wish",
    "release_date": "2022-12-07",
    "poster_path": "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
    "overview": "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
    "watchedDate": "2026-02-03T20:24:59.000Z"
  },
  {
    "id": 10764,
    "title": "Quantum of Solace",
    "release_date": "2008-10-29",
    "poster_path": "/e3DXXLJHGqMx9yYpXsql1XNljmM.jpg",
    "overview": "Betrayed by Vesper, the woman he loved, 007 fights the urge to make his latest mission personal. Pursuing his determination to uncover the truth, Bond and M interrogate Mr. White, who reveals that the organization that blackmailed Vesper is far more complex and dangerous than anyone had imagined.",
    "watchedDate": "2026-02-03T20:25:00.000Z"
  },
  {
    "id": 300792,
    "title": "Racing Extinction",
    "release_date": "2015-01-24",
    "poster_path": "/gydw7e4QCWrp5qExSJSvzyPJ42E.jpg",
    "overview": "An unlikely team of activists and innovators hatches a bold mission to save endangered species.",
    "watchedDate": "2026-02-03T20:25:00.000Z"
  },
  {
    "id": 1578,
    "title": "Raging Bull",
    "release_date": "1980-11-14",
    "poster_path": "/1WV7WlTS8LI1L5NkCgjWT9GSW3O.jpg",
    "overview": "The life of boxer Jake LaMotta, whose violence and temper that led him to the top in the ring destroyed his life outside of it.",
    "watchedDate": "2026-02-03T20:25:00.000Z"
  },
  {
    "id": 404368,
    "title": "Ralph Breaks the Internet",
    "release_date": "2018-11-20",
    "poster_path": "/iVCrhBcpDaHGvv7CLYbK6PuXZo1.jpg",
    "overview": "Video game bad guy Ralph and fellow misfit Vanellope von Schweetz must risk it all by traveling to the World Wide Web in search of a replacement part to save Vanellope's video game, Sugar Rush. In way over their heads, Ralph and Vanellope rely on the citizens of the internet \u2014 the netizens \u2014 to help navigate their way, including an entrepreneur named Yesss, who is the head algorithm and the heart and soul of trend-making site BuzzzTube.",
    "watchedDate": "2026-02-03T20:25:00.000Z"
  },
  {
    "id": 427641,
    "title": "Rampage",
    "release_date": "2018-04-11",
    "poster_path": "/MGADip4thVSErP34FAAfzFBTZ5.jpg",
    "overview": "Primatologist Davis Okoye shares an unshakable bond with George, the extraordinarily intelligent, silverback gorilla who has been in his care since birth.  But a rogue genetic experiment gone awry mutates this gentle ape into a raging creature of enormous size.  To make matters worse, it\u2019s soon discovered there are other similarly altered animals.  As these newly created alpha predators tear across North America, destroying everything in their path, Okoye teams with a discredited genetic engineer to secure an antidote, fighting his way through an ever-changing battlefield, not only to halt a global catastrophe but to save the fearsome creature that was once his friend.",
    "watchedDate": "2026-02-03T20:25:00.000Z"
  },
  {
    "id": 2062,
    "title": "Ratatouille",
    "release_date": "2007-06-28",
    "poster_path": "/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg",
    "overview": "Remy, a resident of Paris, has quite a sophisticated palate. He would love to become a chef so he can create and enjoy culinary masterpieces to his heart's delight. The only problem is, Remy is a rat. When he winds up in the sewer beneath one of Paris' finest restaurants, Remy finds himself ideally placed to realize his dream. He forms an unusual alliance with the restaurants rookie employee, and together they work through challenges stemming from Head Chef Skinner, Remy\u2019s colony, and renowned food critic Anton Ego, who strikes fear in the hearts of chefs all throughout France.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 527774,
    "title": "Raya and the Last Dragon",
    "release_date": "2021-03-03",
    "poster_path": "/5nVhgCzxKbK47OLIKxCR1syulOn.jpg",
    "overview": "Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it\u2019s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 333339,
    "title": "Ready Player One",
    "release_date": "2018-03-28",
    "poster_path": "/pU1ULUq8D3iRxl1fdX2lZIzdHuI.jpg",
    "overview": "When the creator of a popular video game system dies, a virtual contest is created to compete for his fortune.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 10637,
    "title": "Remember the Titans",
    "release_date": "2000-09-29",
    "poster_path": "/825ohvC4wZ3gCuncCaqkWeQnK8h.jpg",
    "overview": "After leading his football team to 15 winning seasons, coach Bill Yoast is demoted and replaced by Herman Boone \u2013 tough, opinionated and as different from the beloved Yoast as he could be. The two men learn to overcome their differences and turn a group of hostile young men into champions.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 1833,
    "title": "Rent",
    "release_date": "2005-11-17",
    "poster_path": "/fomBrfOHWxlaVcjPk4yCQgIwAnh.jpg",
    "overview": "In New York City's gritty East Village, a group of bohemians strive for success and acceptance while enduring the obstacles of poverty, illness and the AIDS epidemic.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 11319,
    "title": "The Rescuers",
    "release_date": "1977-06-22",
    "poster_path": "/9jpDjrRyvv9Nw0piXOpHHQTfxw9.jpg",
    "overview": "Two agents of the mouse-run International Rescue Aid Society search for a little orphan girl kidnapped by sinister treasure hunters.",
    "watchedDate": "2026-02-03T20:25:01.000Z"
  },
  {
    "id": 11135,
    "title": "The Rescuers Down Under",
    "release_date": "1990-11-16",
    "poster_path": "/5koTDBmMAkJOgAe4PL4163UKjvG.jpg",
    "overview": "A lawless poacher wants to capture a majestic and rare golden eagle, so he kidnaps the boy who knows where to find the bird. Not to worry -- the Rescue Aid Society's top agents, heroic mice Miss Bianca and Bernard, fly to Australia to save the day. Accompanying the fearless duo are bumbling albatross Wilbur and local field operative Jake the Kangaroo Rat.",
    "watchedDate": "2026-02-03T20:25:02.000Z"
  },
  {
    "id": 11886,
    "title": "Robin Hood",
    "release_date": "1973-11-08",
    "poster_path": "/x9AvkYek0bGdxQSZ8W3lAjGrREm.jpg",
    "overview": "With King Richard off to the Crusades, Prince John and his slithering minion, Sir Hiss, set about taxing Nottingham's citizens with support from the corrupt sheriff - and staunch opposition by the wily Robin Hood and his band of merry men.",
    "watchedDate": "2026-02-03T20:25:02.000Z"
  },
  {
    "id": 12508,
    "title": "Rock Star",
    "release_date": "2001-09-04",
    "poster_path": "/8pRMweo9WA1MvYOLsD2hWyFpZ1V.jpg",
    "overview": "A wannabe rock star who fronts a Pennsylvania-based tribute band is devastated when his bandmates kick him out of the group he founded. Things begin to look up for Izzy when he is asked to join Steel Dragon, the heavy metal rockers he had been imitating for so long. This film is loosely based on the true story of the band Judas Priest.",
    "watchedDate": "2026-02-03T20:25:02.000Z"
  },
  {
    "id": 10249,
    "title": "The Rocketeer",
    "release_date": "1991-06-21",
    "poster_path": "/2tDFRESFwKww1LHRE8W1Exj9edH.jpg",
    "overview": "A stunt pilot comes across a prototype jetpack that gives him the ability to fly. However, evil forces of the world also want this jetpack at any cost.",
    "watchedDate": "2026-02-03T20:25:02.000Z"
  },
  {
    "id": 330459,
    "title": "Rogue One: A Star Wars Story",
    "release_date": "2016-12-14",
    "poster_path": "/i0yw1mFbB7sNGHCs7EXZPzFkdA1.jpg",
    "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
    "watchedDate": "2026-02-03T20:25:02.000Z"
  },
  {
    "id": 13382,
    "title": "Rudolph the Red-Nosed Reindeer",
    "release_date": "1964-12-06",
    "poster_path": "/xjAElUhXuc7zFJPj3qUHjcySNsE.jpg",
    "overview": "Sam the snowman tells us the story of a young red-nosed reindeer who, after being ousted from the reindeer games because of his glowing nose, teams up with Hermey, an elf who wants to be a dentist, and Yukon Cornelius, the prospector. They run into the Abominable Snowman and find a whole island of misfit toys. Rudolph vows to see if he can get Santa to help the toys, and he goes back to the North Pole on Christmas Eve. But Santa's sleigh is fogged in. But when Santa looks over Rudolph, he gets a very bright idea...",
    "watchedDate": "2026-02-03T20:25:03.000Z"
  },
  {
    "id": 14906,
    "title": "Saludos Amigos",
    "release_date": "1942-08-24",
    "poster_path": "/jiNSrKpgKdLXEUasOvNaCBgEner.jpg",
    "overview": "A whimsical blend of live action and animation, \"Saludos Amigos\" is a colorful kaleidoscope of art, adventure and music set to a toe-tapping samba beat. From high Andes peaks and Argentina's pampas to the sights and sounds of Rio de Janeiro, your international traveling companions are none other than those famous funny friends, Donald Duck and Goofy. They keep things lively as Donald encounters a stubborn llama and \"El Gaucho\" Goofy tries on the cowboy way of life....South American-style.",
    "watchedDate": "2026-02-03T20:25:03.000Z"
  },
  {
    "id": 9021,
    "title": "The Santa Clause 2",
    "release_date": "2002-09-29",
    "poster_path": "/2EAMkz0z1pbr9weOY1Y7buy2AxV.jpg",
    "overview": "Better watch out! The big guy in red is coming to town once again. This time, Scott Calvin -- also known as Santa Claus -- finds out there's an obscure clause in his contract requiring him to take on a wife. He has to leave the North Pole to fulfill his obligations, or else he'll be forced to give up his Yuletide gig.",
    "watchedDate": "2026-02-03T20:25:03.000Z"
  },
  {
    "id": 857,
    "title": "Saving Private Ryan",
    "release_date": "1998-07-24",
    "poster_path": "/uqx37cS8cpHg8U35f9U5IBlrCV3.jpg",
    "overview": "As U.S. troops storm the beaches of Normandy, three brothers lie dead on the battlefield, with a fourth trapped behind enemy lines. Ranger captain John Miller and seven men are tasked with penetrating German-held territory and bringing the boy home.",
    "watchedDate": "2026-02-03T20:25:03.000Z"
  },
  {
    "id": 9637,
    "title": "Scooby-Doo",
    "release_date": "2002-06-14",
    "poster_path": "/mTAiBJGg8mqEfnYHHbi37ZoRSZm.jpg",
    "overview": "When the Mystery Inc. gang is invited to Spooky Island, a popular amusement park, they soon discover that the attractions aren't the only things that are spooky. Strange things are happening, and it's up to Scooby, Shaggy, Fred, Daphne, and Velma to uncover the truth behind the mysterious happenings.",
    "watchedDate": "2026-02-03T20:25:03.000Z"
  },
  {
    "id": 11024,
    "title": "Scooby-Doo 2: Monsters Unleashed",
    "release_date": "2004-03-24",
    "poster_path": "/5BrXCJrs22bR5KR6mLHluYo6y4m.jpg",
    "overview": "A masked villain wreaks mayhem on the city of Coolsville with a monster machine that creates real-life versions of Mystery Inc.'s former foes like The 10,000 Volt Ghost, The Cotton Candy Glob, The Skelemen and The Pterodactyl Ghost. Fred, Daphne, Shaggy, Velma and Scooby-Doo launch an investigation into the monster outbreak that leaves Shaggy and Scooby questioning their roles in Mystery Inc. Eager to prove their detective skills, the ever-ravenous duo comes up with a secret plan to solve the mystery all by themselves. Can the gang unravel their most challenging case?",
    "watchedDate": "2026-02-03T20:25:04.000Z"
  },
  {
    "id": 12903,
    "title": "Scooby-Doo! and the Goblin King",
    "release_date": "2008-09-23",
    "poster_path": "/jscb7MiWTYBjKlAb9TuNnFMSR81.jpg",
    "overview": "Scooby-Doo and Shaggy must go into the underworld ruled by The Goblin King in order to stop a mortal named The Amazing Krudsky who wants power and is a threat to their pals: Fred, Velma, and Daphne.",
    "watchedDate": "2026-02-03T20:25:04.000Z"
  },
  {
    "id": 295421,
    "title": "Scooby Doo and The Zombies",
    "release_date": "2011-08-30",
    "poster_path": "/by29jSBFVvEKbM3vlOOPPJU5lNN.jpg",
    "overview": "A DVD compilation of 3 zombie-themed episodes from What's New, Scooby-Doo?. Smile and say \"ciao\"! The phantom-busters travel to Italy in Pompeii and Circumstance. With a colossal mystery to solve, will our friends be ghoulish gladiator goners, or will their love for Italian art and Scooby Snax save them? Then it's off to the City by the Bay for the Grind Games in The San Franpsycho, where a seaweed-sprouting ghoul from Alcatraz prison cares competing skateboarders to the core. If they don't find the creep behind the Legend of the Creepy Keeper, it'll be lights out in Fright House of a Lighthouse. Who's scared of zombies? Not Scooby-Doo!",
    "watchedDate": "2026-02-03T20:25:04.000Z"
  },
  {
    "id": 13151,
    "title": "Scooby-Doo on Zombie Island",
    "release_date": "1998-09-22",
    "poster_path": "/7EdvFUGvT5Pn8rUFRKCrdUzNthf.jpg",
    "overview": "After going their separate ways, Scooby-Doo, Shaggy, Velma, Daphne, and Fred reunite to investigate the ghost of Moonscar the pirate on a haunted bayou island, but it turns out the swashbuckler's spirit isn't the only creepy character on the island. The sleuths also meet up with cat creatures and zombies... and it looks like for the first time in their lives, these ghouls might actually be real.",
    "watchedDate": "2026-02-03T20:25:04.000Z"
  },
  {
    "id": 347688,
    "title": "Scooby-Doo! and KISS: Rock and Roll Mystery",
    "release_date": "2015-07-09",
    "poster_path": "/nTkQZPXZl9yx3tfPS9TSDZBdhHC.jpg",
    "overview": "Get ready to Rock! Scooby-Doo and the Mystery Inc. Gang team up with the one and only KISS in this all-new, out-of-this-world adventure! We join the Gang at KISS World \u2013 the all-things-KISS theme park, as they investigate a series of strange hauntings. With help from KISS, they discover that the Crimson Witch has returned to summon The Destroyer from the alternate dimension of Kissteria! The evil duos ghastly plan, to destroy the earth! Can the Gang's cunning and KISS's power of rock save the day?!",
    "watchedDate": "2026-02-03T20:25:05.000Z"
  },
  {
    "id": 302960,
    "title": "Scooby-Doo! Moon Monster Madness",
    "release_date": "2015-02-03",
    "poster_path": "/gwyT0ljh8mVViwO6N5p4ACcIsW5.jpg",
    "overview": "It's one giant step for dog-kind as Scooby-Doo and the Gang blast off for an epic, other-worldly adventure in this all-new original movie! After winning the last 5 seats in a lottery, Scooby-Doo, Shaggy, Fred, Daphne and Velma are off to space in billionaire Sly Baron's brand new ship, the Sly Star One. It's all gravity-free fun until a mysterious alien begins destroying the ship! As the ship breaks down, the crew is forced to land on Sly Baron's base... on the dark side of the moon! Will the gang unravel this alien mystery? Will Scooby-Doo and Shaggy find snacks on the moon? Will Fred ever take his space helmet off?! Journey to the outer limits with Scooby-Doo to find out!",
    "watchedDate": "2026-02-03T20:25:05.000Z"
  },
  {
    "id": 258893,
    "title": "Scooby-Doo! WrestleMania Mystery",
    "release_date": "2014-03-11",
    "poster_path": "/vgnxicD1qvhTrh4db9F7hJLoOaa.jpg",
    "overview": "The mystery begins when Shaggy and Scooby win tickets to \"WrestleMania\" and convince the crew to go with them to WWE City. But this city harbors a spooky secret - a ghastly Ghost Bear holds the town in his terrifying grip! To protect the coveted WWE Championship Title, the gang gets help from WWE Superstars like John Cena, Triple H, Sin Cara, Brodus Clay, AJ Lee, The Miz and Kane. Watch Scooby and the gang grapple with solving this case before it's too late.",
    "watchedDate": "2026-02-03T20:25:05.000Z"
  },
  {
    "id": 346,
    "title": "Seven Samurai",
    "release_date": "1954-04-26",
    "poster_path": "/lOMGc8bnSwQhS4XyE1S99uH8NXf.jpg",
    "overview": "A samurai answers a village's request for protection after he falls on hard times. The town needs protection from bandits, so the samurai gathers six others to help him teach the people how to defend themselves, and the villagers provide the soldiers with food.",
    "watchedDate": "2026-02-03T20:25:05.000Z"
  },
  {
    "id": 566525,
    "title": "Shang-Chi and the Legend of the Ten Rings",
    "release_date": "2021-09-01",
    "poster_path": "/d08HqqeBQSwN8i8MEvpsZ8Cb438.jpg",
    "overview": "Shang-Chi must confront the past he thought he left behind when he is drawn into the web of the mysterious Ten Rings organization.",
    "watchedDate": "2026-02-03T20:25:05.000Z"
  },
  {
    "id": 399055,
    "title": "The Shape of Water",
    "release_date": "2017-12-01",
    "poster_path": "/9zfwPffUXpBrEP26yp0q1ckXDcj.jpg",
    "overview": "An other-worldly story, set against the backdrop of Cold War era America circa 1962, where a mute janitor working at a lab falls in love with an amphibious man being held captive there and devises a plan to help him escape.",
    "watchedDate": "2026-02-03T20:25:06.000Z"
  },
  {
    "id": 594767,
    "title": "Shazam! Fury of the Gods",
    "release_date": "2023-03-15",
    "poster_path": "/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg",
    "overview": "Billy Batson and his foster siblings, who transform into superheroes by saying \"Shazam!\", are forced to get back into action and fight the Daughters of Atlas, who they must stop from using a weapon that could destroy the world.",
    "watchedDate": "2026-02-03T20:25:06.000Z"
  },
  {
    "id": 808,
    "title": "Shrek",
    "release_date": "2001-05-18",
    "poster_path": "/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg",
    "overview": "It ain't easy bein' green -- especially if you're a likable (albeit smelly) ogre named Shrek. On a mission to retrieve a gorgeous princess from the clutches of a fire-breathing dragon, Shrek teams up with an unlikely compatriot -- a wisecracking donkey.",
    "watchedDate": "2026-02-03T20:25:06.000Z"
  },
  {
    "id": 809,
    "title": "Shrek 2",
    "release_date": "2004-05-19",
    "poster_path": "/2yYP0PQjG8zVqturh1BAqu2Tixl.jpg",
    "overview": "Shrek, Fiona, and Donkey set off to Far, Far Away to meet Fiona's mother and father, the Queen and King. But not everyone is happily ever after, as Shrek and the King find it difficult to get along. But when the Fairy Godmother discovers that Fiona has married Shrek instead of her son Prince Charming as King Harold had promised, she plots to destroy their marriage and replace the ogre with her son Charming.",
    "watchedDate": "2026-02-03T20:25:07.000Z"
  },
  {
    "id": 11324,
    "title": "Shutter Island",
    "release_date": "2010-02-14",
    "poster_path": "/nrmXQ0zcZUL8jFLrakWc90IR8z9.jpg",
    "overview": "World War II soldier-turned-U.S. Marshal Teddy Daniels investigates the disappearance of a patient from a hospital for the criminally insane, but his efforts are compromised by troubling visions and a mysterious doctor.",
    "watchedDate": "2026-02-03T20:25:07.000Z"
  },
  {
    "id": 82693,
    "title": "Silver Linings Playbook",
    "release_date": "2012-11-16",
    "poster_path": "/fhHB1uvfFKKFbj6bTKE8xdtsjKi.jpg",
    "overview": "After losing his job and wife, and spending time in an institution, a former teacher winds up living with his parents. He wants to rebuild his life and reconcile with his wife, but his father would be happy if he shared his obsession with the Philadelphia Eagles. Things get complicated when he meets Tiffany Maxwell who offers to help him reconnect with his wife if he will do something very important for her in exchange.",
    "watchedDate": "2026-02-03T20:25:07.000Z"
  },
  {
    "id": 6279,
    "title": "Sister Act 2: Back in the Habit",
    "release_date": "1993-12-09",
    "poster_path": "/2jmPYqep3r2eumauyTauNIhSmR7.jpg",
    "overview": "Deloris Van Cartier is again asked to don the nun's habit to help a run-down Catholic school, presided over by Mother Superior. And if trying to reach out to a class full of uninterested students wasn't bad enough, the sisters discover that the school is due to be closed by the unscrupulous chief of a local authority.",
    "watchedDate": "2026-02-03T20:25:08.000Z"
  },
  {
    "id": 37724,
    "title": "Skyfall",
    "release_date": "2012-10-24",
    "poster_path": "/d0IVecFQvsGdSbnMAHqiYsNYaJT.jpg",
    "overview": "When Bond's latest assignment goes gravely wrong, agents around the world are exposed and MI6 headquarters is attacked. While M faces challenges to her authority and position from Gareth Mallory, the new Chairman of the Intelligence and Security Committee, it's up to Bond, aided only by field agent Eve, to locate the mastermind behind the attack.",
    "watchedDate": "2026-02-03T20:25:08.000Z"
  },
  {
    "id": 10882,
    "title": "Sleeping Beauty",
    "release_date": "1959-02-17",
    "poster_path": "/n3pxoMDDxp10c1smgbDzW4bwlzq.jpg",
    "overview": "Cursed to die by the evil fairy Maleficent when she was a baby, Princess Aurora is sent into hiding under protection from three good fairies. As she grows up far away, Maleficent becomes increasingly determined to seal the princess's fate.",
    "watchedDate": "2026-02-03T20:25:08.000Z"
  },
  {
    "id": 447273,
    "title": "Snow White",
    "release_date": "2025-03-19",
    "poster_path": "/xWWg47tTfparvjK0WJNX4xL8lW2.jpg",
    "overview": "Following the benevolent King's disappearance, the Evil Queen dominated the once fair land with a cruel streak. Princess Snow White flees the castle when the Queen, in her jealousy over Snow White's inner beauty, tries to kill her. Deep into the dark woods, she stumbles upon seven magical dwarves and a young bandit named Jonathan. Together, they strive to survive the Queen's relentless pursuit and aspire to take back the kingdom.",
    "watchedDate": "2026-02-03T20:25:08.000Z"
  },
  {
    "id": 408,
    "title": "Snow White and the Seven Dwarfs",
    "release_date": "1938-01-14",
    "poster_path": "/3VAHfuNb6Z7UiW12iYKANSPBl8m.jpg",
    "overview": "A beautiful girl, Snow White, takes refuge in the forest in the house of seven dwarfs to hide from her stepmother, the wicked Queen. The Queen is jealous because she wants to be known as \"the fairest in the land,\" and Snow White's beauty surpasses her own.",
    "watchedDate": "2026-02-03T20:25:08.000Z"
  },
  {
    "id": 348350,
    "title": "Solo: A Star Wars Story",
    "release_date": "2018-05-15",
    "poster_path": "/4oD6VEccFkorEBTEDXtpLAaz0Rl.jpg",
    "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
    "watchedDate": "2026-02-03T20:25:09.000Z"
  },
  {
    "id": 19762,
    "title": "Son of Flubber",
    "release_date": "1963-01-16",
    "poster_path": "/9k3DwDpQeLN4sZ7hWnWII9DcQXA.jpg",
    "overview": "Beleaguered professor Ned Brainard has already run into a pile of misfortunes with his discovery of the super-elastic substance \"Flubber.\" Now he hopes to have better luck with a gravity-busting derivative he's dubbed \"Flubbergas.\" Ned's experiments, constantly hampered by government obstruction, earn the consternation of his wife, Betsy. But a game-winning modification to a football uniform may help Ned make the case for his fantastic new invention.",
    "watchedDate": "2026-02-03T20:25:09.000Z"
  },
  {
    "id": 508442,
    "title": "Soul",
    "release_date": "2020-12-25",
    "poster_path": "/6jmppcaubzLF8wkXM36ganVISCo.jpg",
    "overview": "Joe Gardner is a middle school teacher with a love for jazz music. After a successful audition at the Half Note Club, he suddenly gets into an accident that separates his soul from his body and is transported to the You Seminar, a center in which souls develop and gain passions before being transported to a newborn child. Joe must enlist help from the other souls-in-training, like 22, a soul who has spent eons in the You Seminar, in order to get back to Earth.",
    "watchedDate": "2026-02-03T20:25:09.000Z"
  },
  {
    "id": 2539,
    "title": "Spanglish",
    "release_date": "2004-12-17",
    "poster_path": "/x3OTaBvjqzhRL53Q39fOoIYqxyO.jpg",
    "overview": "Mexican immigrant and single mother Flor Moreno finds housekeeping work with Deborah and John Clasky, a well-off couple with two children of their own. When Flor admits she can't handle the schedule because of her daughter, Cristina, Deborah decides they should move into the Clasky home. Cultures clash and tensions run high as Flor and the Claskys struggle to share space while raising their children on their own, and very different, terms.",
    "watchedDate": "2026-02-03T20:25:09.000Z"
  },
  {
    "id": 206647,
    "title": "Spectre",
    "release_date": "2015-10-26",
    "poster_path": "/zj8ongFhtWNsVlfjOGo8pSr7PQg.jpg",
    "overview": "A cryptic message from Bond\u2019s past sends him on a trail to uncover a sinister organization. While M battles political forces to keep the secret service alive, Bond peels back the layers of deceit to reveal the terrible truth behind SPECTRE.",
    "watchedDate": "2026-02-03T20:25:09.000Z"
  },
  {
    "id": 569094,
    "title": "Spider-Man: Across the Spider-Verse",
    "release_date": "2023-05-31",
    "poster_path": "/8Vt6mWEReuy4Of61Lnj5Xj704m8.jpg",
    "overview": "After reuniting with Gwen Stacy, Brooklyn\u2019s full-time, friendly neighborhood Spider-Man is catapulted across the Multiverse, where he encounters the Spider Society, a team of Spider-People charged with protecting the Multiverse's very existence. But when the heroes clash on how to handle a new threat, Miles finds himself pitted against the other Spiders and must set out on his own to save those he loves most.",
    "watchedDate": "2026-02-03T20:25:10.000Z"
  },
  {
    "id": 429617,
    "title": "Spider-Man: Far From Home",
    "release_date": "2019-06-28",
    "poster_path": "/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg",
    "overview": "Peter Parker and his friends go on a summer trip to Europe. However, they will hardly be able to rest - Peter will have to agree to help Nick Fury uncover the mystery of creatures that cause natural disasters and destruction throughout the continent.",
    "watchedDate": "2026-02-03T20:25:10.000Z"
  },
  {
    "id": 315635,
    "title": "Spider-Man: Homecoming",
    "release_date": "2017-07-05",
    "poster_path": "/c24sv2weTHPsmDa7jEMN0m2P3RT.jpg",
    "overview": "Following the events of Captain America: Civil War, Peter Parker, with the help of his mentor Tony Stark, tries to balance his life as an ordinary high school student in Queens, New York City, with fighting crime as his superhero alter ego Spider-Man as a new threat, the Vulture, emerges.",
    "watchedDate": "2026-02-03T20:25:10.000Z"
  },
  {
    "id": 324857,
    "title": "Spider-Man: Into the Spider-Verse",
    "release_date": "2018-12-06",
    "poster_path": "/iiZZdoQBEYBv6id8su7ImL0oCbD.jpg",
    "overview": "Struggling to find his place in the world while juggling school and family, Brooklyn teenager Miles Morales is unexpectedly bitten by a radioactive spider and develops unfathomable powers just like the one and only Spider-Man. While wrestling with the implications of his new abilities, Miles discovers a super collider created by the madman Wilson \"Kingpin\" Fisk, causing others from across the Spider-Verse to be inadvertently transported to his dimension.",
    "watchedDate": "2026-02-03T20:25:10.000Z"
  },
  {
    "id": 634649,
    "title": "Spider-Man: No Way Home",
    "release_date": "2021-12-15",
    "poster_path": "/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
    "overview": "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.",
    "watchedDate": "2026-02-03T20:25:10.000Z"
  },
  {
    "id": 10054,
    "title": "Spy Kids",
    "release_date": "2001-03-18",
    "poster_path": "/j3rUkHIAAoKr6jU30q3Db4fcIF9.jpg",
    "overview": "Carmen and Juni think their parents are boring. Little do they know that in their day, Gregorio and Ingrid Cortez were the top secret agents from their respective countries. They gave up that life to raise their children. Now, the disappearances of several of their old colleagues forces the Cortez' return from retirement. What they didn't count on was Carmen and Juni joining the \"family business.\"",
    "watchedDate": "2026-02-03T20:25:11.000Z"
  },
  {
    "id": 9488,
    "title": "Spy Kids 2: The Island of Lost Dreams",
    "release_date": "2002-08-07",
    "poster_path": "/z8pfWCk6SlxxDLXXQdUHdxF5dwJ.jpg",
    "overview": "Exploring the further adventures of Carmen and Juni Cortez, who have now joined the family spy business as Level 2 OSS agents. Their new mission is to save the world from a mad scientist living on a volcanic island populated by an imaginative menagerie of creatures. On this bizarre island, none of the Cortez's gadgets work and they must rely on their wits--and each other--to survive and save the day.",
    "watchedDate": "2026-02-03T20:25:11.000Z"
  },
  {
    "id": 12279,
    "title": "Spy Kids 3-D: Game Over",
    "release_date": "2003-07-25",
    "poster_path": "/buA8dN4zLNr0dYBeKfHfMnEfdLE.jpg",
    "overview": "Carmen's caught in a virtual reality game designed by the Kids' new nemesis, the Toymaker. It's up to Juni to save his sister, and ultimately the world.",
    "watchedDate": "2026-02-03T20:25:11.000Z"
  },
  {
    "id": 691,
    "title": "The Spy Who Loved Me",
    "release_date": "1977-07-07",
    "poster_path": "/3ZxHKFxMYvAko680DsRgAZKWcLi.jpg",
    "overview": "Russian and British submarines with nuclear missiles on board both vanish from sight without a trace. England and Russia both blame each other as James Bond tries to solve the riddle of the disappearing ships. But the KGB also has an agent on the case.",
    "watchedDate": "2026-02-03T20:25:11.000Z"
  },
  {
    "id": 12180,
    "title": "Star Wars: The Clone Wars",
    "release_date": "2008-08-05",
    "poster_path": "/iJQfixW818LUdSXlCDL3JZm0S0g.jpg",
    "overview": "As the Clone Wars sweep through the galaxy, the heroic Jedi Knights struggle to maintain order and restore peace. More and more systems are falling prey to the forces of the dark side as the Galactic Republic slips further and further under the sway of the Separatists and their never-ending droid army. Anakin Skywalker and his Padawan learner Ahsoka Tano find themselves on a mission with far-reaching consequences, one that brings them face-to-face with crime lord Jabba the Hutt. But Count Dooku and his sinister agents, including the nefarious Asajj Ventress, will stop at nothing to ensure that Anakin and Ahsoka fail at their quest. Meanwhile, on the front lines of the Clone Wars, Obi-Wan Kenobi and Master Yoda lead the massive clone army in a valiant effort to resist the forces of the dark side...",
    "watchedDate": "2026-02-03T20:25:12.000Z"
  },
  {
    "id": 1893,
    "title": "Star Wars: Episode I - The Phantom Menace",
    "release_date": "1999-05-19",
    "poster_path": "/6wkfovpn7Eq8dYNKaG5PY3q2oq6.jpg",
    "overview": "Anakin Skywalker, a young slave strong with the Force, is discovered on Tatooine. Meanwhile, the evil Sith have returned, enacting their plot for revenge against the Jedi.",
    "watchedDate": "2026-02-03T20:25:12.000Z"
  },
  {
    "id": 1894,
    "title": "Star Wars: Episode II - Attack of the Clones",
    "release_date": "2002-05-15",
    "poster_path": "/oZNPzxqM2s5DyVWab09NTQScDQt.jpg",
    "overview": "Following an assassination attempt on Senator Padm\u00e9 Amidala, Jedi Knights Anakin Skywalker and Obi-Wan Kenobi investigate a mysterious plot into the heart of the Separatist movement and the beginning of the Clone Wars.",
    "watchedDate": "2026-02-03T20:25:12.000Z"
  },
  {
    "id": 1895,
    "title": "Star Wars: Episode III - Revenge of the Sith",
    "release_date": "2005-05-17",
    "poster_path": "/xfSAoBEm9MNBjmlNcDYLvLSMlnq.jpg",
    "overview": "When the sinister Sith unveil a thousand-year-old plot to rule the galaxy, the Republic crumbles and from its ashes rises the evil Galactic Empire. Jedi hero Anakin Skywalker must choose a side.",
    "watchedDate": "2026-02-03T20:25:12.000Z"
  },
  {
    "id": 11,
    "title": "Star Wars",
    "release_date": "1977-05-25",
    "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    "watchedDate": "2026-02-03T20:25:12.000Z"
  },
  {
    "id": 1892,
    "title": "Return of the Jedi",
    "release_date": "1983-05-25",
    "poster_path": "/jQYlydvHm3kUix1f8prMucrplhm.jpg",
    "overview": "Luke Skywalker leads a mission to rescue his friend Han Solo from the clutches of Jabba the Hutt, the Emperor prepares to crush the Rebellion with a more powerful Death Star, and the Rebel fleet mounts a massive attack on the space station. Luke Skywalker confronts Darth Vader in a final climactic duel before the evil Emperor.",
    "watchedDate": "2026-02-03T20:25:13.000Z"
  },
  {
    "id": 140607,
    "title": "Star Wars: The Force Awakens",
    "release_date": "2015-12-15",
    "poster_path": "/wqnLdwVXoBjKibFRR5U3y0aDUhs.jpg",
    "overview": "Thirty years after defeating the Galactic Empire, Han Solo and his allies face a new threat from the evil Kylo Ren and his army of Stormtroopers.",
    "watchedDate": "2026-02-03T20:25:13.000Z"
  },
  {
    "id": 181808,
    "title": "Star Wars: The Last Jedi",
    "release_date": "2017-12-13",
    "poster_path": "/kOVEVeg59E0wsnXmF9nrh6OmWII.jpg",
    "overview": "Rey develops her newly discovered abilities with the guidance of Luke Skywalker, who is unsettled by the strength of her powers. Meanwhile, the Resistance prepares to do battle with the First Order.",
    "watchedDate": "2026-02-03T20:25:13.000Z"
  },
  {
    "id": 181812,
    "title": "Star Wars: The Rise of Skywalker",
    "release_date": "2019-12-18",
    "poster_path": "/db32LaOibwEliAmSL2jjDF6oDdj.jpg",
    "overview": "The surviving Resistance faces the First Order once again as the journey of Rey, Finn and Poe Dameron continues. With the power and knowledge of generations behind them, the final battle begins.",
    "watchedDate": "2026-02-03T20:25:13.000Z"
  },
  {
    "id": 277216,
    "title": "Straight Outta Compton",
    "release_date": "2015-08-11",
    "poster_path": "/1CiLJx8Xtv3TbbFj6k7BboSmKgC.jpg",
    "overview": "In 1987, five young men, using brutally honest rhymes and hardcore beats, put their frustration and anger about life in the most dangerous place in America into the most powerful weapon they had: their music.  Taking us back to where it all began, Straight Outta Compton tells the true story of how these cultural rebels\u2014armed only with their lyrics, swagger, bravado and raw talent\u2014stood up to the authorities that meant to keep them down and formed the world\u2019s most dangerous group, N.W.A.  And as they spoke the truth that no one had before and exposed life in the hood, their voice ignited a social revolution that is still reverberating today.",
    "watchedDate": "2026-02-03T20:25:13.000Z"
  },
  {
    "id": 502356,
    "title": "The Super Mario Bros. Movie",
    "release_date": "2023-04-05",
    "poster_path": "/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg",
    "overview": "While working underground to fix a water main, Brooklyn plumbers\u2014and brothers\u2014Mario and Luigi are transported down a mysterious pipe and wander into a magical new world. But when the brothers are separated, Mario embarks on an epic quest to find Luigi.",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 1061474,
    "title": "Superman",
    "release_date": "2025-07-09",
    "poster_path": "/oe5TVF6GQDESLsGiFrN6GyJEekh.jpg",
    "overview": "Superman, a journalist in Metropolis, embarks on a journey to reconcile his Kryptonian heritage with his human upbringing as Clark Kent.",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 10218,
    "title": "Swingers",
    "release_date": "1996-10-18",
    "poster_path": "/rRjWk68kU3a2so4lgr3TKB7Y5vA.jpg",
    "overview": "After 6 years together, Mike's girlfriend leaves him, so he travels to LA to be a star. Six months on, he's still not doing very well\u2014 so a few of his friends try to reconnect him to the social scene and hopefully help him forget his failed relationship.",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 9078,
    "title": "The Sword in the Stone",
    "release_date": "1963-12-25",
    "poster_path": "/7lyeeuhGAJSNXYEW34S8mJ1bwI8.jpg",
    "overview": "Wart is a young boy who aspires to be a knight's squire. On a hunting trip he falls in on Merlin, a powerful but amnesiac wizard who has plans for him beyond mere squiredom. He starts by trying to give him an education, believing that once one has an education, one can go anywhere. Needless to say, it doesn't quite work out that way.",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 38757,
    "title": "Tangled",
    "release_date": "2010-11-24",
    "poster_path": "/ym7Kst6a4uodryxqbGOxmewF235.jpg",
    "overview": "Feisty teenager Rapunzel, who has long and magical hair, wants to go and see sky lanterns on her eighteenth birthday, but she's bound to a tower by her overprotective mother. She strikes a deal with Flynn Rider, a charming wanted thief, and the duo set off on an action-packed escapade.",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 37135,
    "title": "Tarzan",
    "release_date": "1999-06-17",
    "poster_path": "/bTvHlcqiOjGa3lFtbrTLTM3zasY.jpg",
    "overview": "Tarzan was a small orphan who was raised by an ape named Kala since he was a child. He believed that this was his family, but on an expedition Jane Porter is rescued by Tarzan. He then finds out that he's human. Now Tarzan must make the decision as to which family he should belong to...",
    "watchedDate": "2026-02-03T20:25:14.000Z"
  },
  {
    "id": 103,
    "title": "Taxi Driver",
    "release_date": "1976-02-09",
    "poster_path": "/ekstpH614fwDX8DUln1a2Opz0N8.jpg",
    "overview": "Suffering from insomnia, disturbed loner Travis Bickle takes a job as a New York City cabbie, haunting the streets nightly, growing increasingly detached from reality as he dreams of cleaning up the filthy city.",
    "watchedDate": "2026-02-03T20:25:15.000Z"
  },
  {
    "id": 266856,
    "title": "The Theory of Everything",
    "release_date": "2014-11-07",
    "poster_path": "/kJuL37NTE51zVP3eG5aGMyKAIlh.jpg",
    "overview": "The Theory of Everything is the extraordinary story of one of the world\u2019s greatest living minds, the renowned astrophysicist Stephen Hawking, who falls deeply in love with fellow Cambridge student Jane Wilde.",
    "watchedDate": "2026-02-03T20:25:15.000Z"
  },
  {
    "id": 10195,
    "title": "Thor",
    "release_date": "2011-04-21",
    "poster_path": "/prSfAi1xGrhLQNxVSUFh61xQ4Qy.jpg",
    "overview": "Against his father Odin's will, The Mighty Thor - a powerful but arrogant warrior god - recklessly reignites an ancient war. Thor is cast down to Earth and forced to live among humans as punishment. Once here, Thor learns what it takes to be a true hero when the most dangerous villain of his world sends the darkest forces of Asgard to invade Earth.",
    "watchedDate": "2026-02-03T20:25:16.000Z"
  },
  {
    "id": 616037,
    "title": "Thor: Love and Thunder",
    "release_date": "2022-07-06",
    "poster_path": "/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg",
    "overview": "After his retirement is interrupted by Gorr the God Butcher, a galactic killer who seeks the extinction of the gods, Thor Odinson enlists the help of King Valkyrie, Korg, and ex-girlfriend Jane Foster, who now wields Mjolnir as the Mighty Thor. Together they embark upon a harrowing cosmic adventure to uncover the mystery of the God Butcher\u2019s vengeance and stop him before it\u2019s too late.",
    "watchedDate": "2026-02-03T20:25:16.000Z"
  },
  {
    "id": 284053,
    "title": "Thor: Ragnarok",
    "release_date": "2017-10-02",
    "poster_path": "/rzRwTcFvttcN1ZpX2xv4j3tSdJu.jpg",
    "overview": "Thor is imprisoned on the other side of the universe and finds himself in a race against time to get back to Asgard to stop Ragnarok, the destruction of his home-world and the end of Asgardian civilization, at the hands of a powerful new threat, the ruthless Hela.",
    "watchedDate": "2026-02-03T20:25:16.000Z"
  },
  {
    "id": 76338,
    "title": "Thor: The Dark World",
    "release_date": "2013-10-30",
    "poster_path": "/wp6OxE4poJ4G7c0U2ZIXasTSMR7.jpg",
    "overview": "Thor fights to restore order across the cosmos\u2026 but an ancient race led by the vengeful Malekith returns to plunge the universe back into darkness. Faced with an enemy that even Odin and Asgard cannot withstand, Thor must embark on his most perilous and personal journey yet, one that will reunite him with Jane Foster and force him to sacrifice everything to save us all.",
    "watchedDate": "2026-02-03T20:25:17.000Z"
  },
  {
    "id": 8388,
    "title": "\u00a1Three Amigos!",
    "release_date": "1986-12-12",
    "poster_path": "/keQ4ra50w1nktSPRPauxpLaAM2F.jpg",
    "overview": "A trio of unemployed silent film actors are mistaken for real heroes by a small Mexican village in search of someone to stop a malevolent bandit.",
    "watchedDate": "2026-02-03T20:25:17.000Z"
  },
  {
    "id": 6415,
    "title": "Three Kings",
    "release_date": "1999-09-27",
    "poster_path": "/fClJQW8xn8wHOFqoA4jUn0PZh1f.jpg",
    "overview": "A group of American soldiers stationed in Iraq at the end of the Gulf War find a map they believe will take them to a huge cache of stolen Kuwaiti gold hidden near their base, and they embark on a secret mission that's destined to change everything.",
    "watchedDate": "2026-02-03T20:25:17.000Z"
  },
  {
    "id": 660,
    "title": "Thunderball",
    "release_date": "1965-12-11",
    "poster_path": "/wCc4qllaTDsQN8zgGkAgQrKO6N9.jpg",
    "overview": "A criminal organization has obtained two nuclear bombs and are asking for a 100 million pound ransom in the form of diamonds in seven days or they will use the weapons. The secret service sends James Bond to the Bahamas to once again save the world.",
    "watchedDate": "2026-02-03T20:25:17.000Z"
  },
  {
    "id": 986056,
    "title": "Thunderbolts*",
    "release_date": "2025-04-30",
    "poster_path": "/hqcexYHbiTBfDIdDWxrxPtVndBX.jpg",
    "overview": "After finding themselves ensnared in a death trap, seven disillusioned castoffs must embark on a dangerous mission that will force them to confront the darkest corners of their pasts.",
    "watchedDate": "2026-02-03T20:25:17.000Z"
  },
  {
    "id": 7450,
    "title": "Titan A.E.",
    "release_date": "2000-06-16",
    "poster_path": "/el2iHk3LTJWfEnwrvcRkvWY501G.jpg",
    "overview": "A young man finds out that he holds the key to restoring hope and ensuring survival for the human race, while an alien species called the Drej are bent on mankind's destruction.",
    "watchedDate": "2026-02-03T20:25:18.000Z"
  },
  {
    "id": 714,
    "title": "Tomorrow Never Dies",
    "release_date": "1997-12-11",
    "poster_path": "/gZm002w7q9yLOkltxT76TWGfdZX.jpg",
    "overview": "A deranged media mogul is staging international incidents to pit the world's superpowers against each other. Now James Bond must take on this evil mastermind in an adrenaline-charged battle to end his reign of terror and prevent global pandemonium.",
    "watchedDate": "2026-02-03T20:25:18.000Z"
  },
  {
    "id": 158852,
    "title": "Tomorrowland",
    "release_date": "2015-05-19",
    "poster_path": "/kziYpr5Nfw60P0My8aj1sgCEqed.jpg",
    "overview": "Bound by a shared destiny, a bright, optimistic teen bursting with scientific curiosity and a former boy-genius inventor jaded by disillusionment embark on a danger-filled mission to unearth the secrets of an enigmatic place somewhere in time and space that exists in their collective memory as \"Tomorrowland.\"",
    "watchedDate": "2026-02-03T20:25:18.000Z"
  },
  {
    "id": 862,
    "title": "Toy Story",
    "release_date": "1995-11-22",
    "poster_path": "/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg",
    "overview": "Led by Woody, Andy's toys live happily in his room until Andy's birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andy's heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.",
    "watchedDate": "2026-02-03T20:25:18.000Z"
  },
  {
    "id": 863,
    "title": "Toy Story 2",
    "release_date": "1999-10-30",
    "poster_path": "/4rbcp3ng8n1MKHjpeqW0L7Fnpzz.jpg",
    "overview": "Andy heads off to Cowboy Camp, leaving his toys to their own devices. Things shift into high gear when an obsessive toy collector named Al McWhiggen, owner of Al's Toy Barn kidnaps Woody. Andy's toys mount a daring rescue mission, Buzz Lightyear meets his match and Woody has to decide where he and his heart truly belong.",
    "watchedDate": "2026-02-03T20:25:18.000Z"
  },
  {
    "id": 10193,
    "title": "Toy Story 3",
    "release_date": "2010-06-16",
    "poster_path": "/AbbXspMOwdvwWZgVN0nabZq03Ec.jpg",
    "overview": "Woody, Buzz, and the rest of Andy's toys haven't been played with in years. With Andy about to go to college, the gang find themselves accidentally left at a nefarious day care center. The toys must band together to escape and return home to Andy.",
    "watchedDate": "2026-02-03T20:25:19.000Z"
  },
  {
    "id": 213121,
    "title": "Toy Story of Terror!",
    "release_date": "2013-10-16",
    "poster_path": "/oPBEnNP4Fg4gv9c0KBhchmtoG4H.jpg",
    "overview": "What starts out as a fun road trip for the Toy Story gang takes an unexpected turn for the worse when the trip detours to a roadside motel. After one of the toys goes missing, the others find themselves caught up in a mysterious sequence of events that must be solved before they all suffer the same fate in this Toy Story of Terror.",
    "watchedDate": "2026-02-03T20:25:19.000Z"
  },
  {
    "id": 256835,
    "title": "Toy Story That Time Forgot",
    "release_date": "2014-12-02",
    "poster_path": "/kVOaFo8RaYQceHfTqbZGmV9R80q.jpg",
    "overview": "During a post-Christmas play date, the gang find themselves in uncharted territory when the coolest set of action figures ever turn out to be dangerously delusional. It's all up to Trixie, the triceratops, if the gang hopes to return to Bonnie's room in this Toy Story That Time Forgot.",
    "watchedDate": "2026-02-03T20:25:19.000Z"
  },
  {
    "id": 901362,
    "title": "Trolls Band Together",
    "release_date": "2023-10-12",
    "poster_path": "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
    "overview": "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
    "watchedDate": "2026-02-03T20:25:19.000Z"
  },
  {
    "id": 20526,
    "title": "TRON: Legacy",
    "release_date": "2010-12-14",
    "poster_path": "/vuifSABRpSnxCAOxEnWpNbZSXpp.jpg",
    "overview": "Sam Flynn, the tech-savvy and daring son of Kevin Flynn, investigates his father's disappearance and is pulled into The Grid. With the help of a mysterious program named Quorra, Sam quests to stop evil dictator Clu from crossing into the real world.",
    "watchedDate": "2026-02-03T20:25:19.000Z"
  },
  {
    "id": 319,
    "title": "True Romance",
    "release_date": "1993-09-09",
    "poster_path": "/39lXk6ud6KiJgGbbWI2PUKS7y2.jpg",
    "overview": "Clarence marries hooker Alabama, steals cocaine from her pimp, and tries to sell it in Hollywood, while the owners of the coke try to reclaim it.",
    "watchedDate": "2026-02-03T20:25:20.000Z"
  },
  {
    "id": 77950,
    "title": "Turbo",
    "release_date": "2013-07-11",
    "poster_path": "/w6GdF5hcnsU5IwaRhyhnysNy5hO.jpg",
    "overview": "The tale of an ordinary garden snail who dreams of winning the Indy 500.",
    "watchedDate": "2026-02-03T20:25:20.000Z"
  },
  {
    "id": 508947,
    "title": "Turning Red",
    "release_date": "2022-03-10",
    "poster_path": "/qsdjk9oAKSQMWs0Vt5Pyfh6O4GZ.jpg",
    "overview": "Thirteen-year-old Mei is experiencing the awkwardness of being a teenager with a twist \u2013 when she gets too excited, she transforms into a giant red panda.",
    "watchedDate": "2026-02-03T20:25:20.000Z"
  },
  {
    "id": 718821,
    "title": "Twisters",
    "release_date": "2024-07-10",
    "poster_path": "/pjnD08FlMAIXsfOLKQbvmO0f0MD.jpg",
    "overview": "As storm season intensifies, the paths of former storm chaser Kate Carter and reckless social-media superstar Tyler Owens collide when terrifying phenomena never seen before are unleashed. The pair and their competing teams find themselves squarely in the paths of multiple storm systems converging over central Oklahoma in the fight of their lives.",
    "watchedDate": "2026-02-03T20:25:20.000Z"
  },
  {
    "id": 14609,
    "title": "Ultimate Avengers: The Movie",
    "release_date": "2006-02-21",
    "poster_path": "/iMCkGHVrYRdqKROPRPmVaJVSlg3.jpg",
    "overview": "When a nuclear missile was fired at Washington in 1945, Captain America managed to detonate it in the upper atmosphere. But then he fell miles into the icy depths of the North Atlantic, where he remained lost for over sixty years. But now, with the world facing the very same evil, Captain America must rise again as our last hope for survival.",
    "watchedDate": "2026-02-03T20:25:20.000Z"
  },
  {
    "id": 14160,
    "title": "Up",
    "release_date": "2009-05-28",
    "poster_path": "/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg",
    "overview": "Carl Fredricksen spent his entire life dreaming of exploring the globe and experiencing life to its fullest. But at age 78, life seems to have passed him by, until a twist of fate (and a persistent 8-year old Wilderness Explorer named Russell) gives him a new lease on life.",
    "watchedDate": "2026-02-03T20:25:21.000Z"
  },
  {
    "id": 296099,
    "title": "Vacation",
    "release_date": "2015-07-28",
    "poster_path": "/fYDALvoCt3DBlSWN6pSAnGQ9ld7.jpg",
    "overview": "Hoping to bring his family closer together and to recreate his childhood vacation for his own kids, a grown up Rusty Griswold takes his wife and their two sons on a cross-country road trip to the coolest theme park in America, Walley World. Needless to say, things don't go quite as planned.",
    "watchedDate": "2026-02-03T20:25:21.000Z"
  },
  {
    "id": 24226,
    "title": "The Verdict",
    "release_date": "1982-12-08",
    "poster_path": "/m3DdNJZfBcsTiFe0SwsLChWavrG.jpg",
    "overview": "Frank Galvin is a down-on-his-luck lawyer and reduced to drinking and ambulance chasing, when a former associate reminds him of his obligations in a medical malpractice suit by serving it to Galvin on a silver platter\u2014all parties are willing to settle out of court. Blundering his way through the preliminaries, Galvin suddenly realizes that the case should actually go to court\u2014to punish the guilty, to get a decent settlement for his clients... and to restore his standing as a lawyer.",
    "watchedDate": "2026-02-03T20:25:21.000Z"
  },
  {
    "id": 707,
    "title": "A View to a Kill",
    "release_date": "1985-05-24",
    "poster_path": "/arJF829RP9cYvh0NU70dC5TtXSa.jpg",
    "overview": "A newly-developed microchip designed by Zorin Industries for the British Government that can survive the electromagnetic radiation caused by a nuclear explosion has landed in the hands of the KGB. James Bond must find out how and why. His suspicions soon lead him to big industry leader Max Zorin who forms a plan to destroy his only competition in Silicon Valley by triggering a massive earthquake in the San Francisco Bay.",
    "watchedDate": "2026-02-03T20:25:21.000Z"
  },
  {
    "id": 6947,
    "title": "The Village",
    "release_date": "2004-07-30",
    "poster_path": "/v7UvYtKfIVaHLaHwVgfalyrK7Ho.jpg",
    "overview": "When a willful young man tries to venture beyond his sequestered Pennsylvania hamlet, his actions set off a chain of chilling incidents that will alter the community forever.",
    "watchedDate": "2026-02-03T20:25:21.000Z"
  },
  {
    "id": 177018,
    "title": "Vintage Mickey",
    "release_date": "2005-07-12",
    "poster_path": "/uCmQMJV6lcMpg9mzOwvjeIVQZX1.jpg",
    "overview": "Celebrate one of the world's most famous characters in this timeless collection of Mickey's most memorable cartoons featuring the classic \"Steamboat Willie\" \u2014 which marked the first appearance of Mickey and Minnie Mouse \u2014 as well as other landmark animated shorts, including the Academy Award nominated \"Mickey's Orphans\" and \"Building A Building.\"",
    "watchedDate": "2026-02-03T20:25:22.000Z"
  },
  {
    "id": 187596,
    "title": "Walk of Shame",
    "release_date": "2014-05-02",
    "poster_path": "/3zMS66gtw8ccvy1BWD6thJ67jgX.jpg",
    "overview": "A reporter's dream of becoming a news anchor is compromised after a one-night stand leaves her stranded in downtown L.A. without a phone, car, ID or money - and only 8 hours to make it to the most important job interview of her life.",
    "watchedDate": "2026-02-03T20:25:22.000Z"
  },
  {
    "id": 77951,
    "title": "Walking with Dinosaurs",
    "release_date": "2013-12-18",
    "poster_path": "/lkElT9HpOUIjIL20Hwy3LZqgXWc.jpg",
    "overview": "In a time when dinosaurs rule the Earth, the smallest dinosaur of the herd, a playful Pachyrhinosaurus named Patchi, embarks on the biggest adventure of his life. As he tries to find his place in a spectacular world filled with fun-loving friends and a few dangerous foes, Patchi will discover the courage he needs to become the leader of the herd and a hero for the ages.",
    "watchedDate": "2026-02-03T20:25:22.000Z"
  },
  {
    "id": 10681,
    "title": "WALL\u00b7E",
    "release_date": "2008-06-22",
    "poster_path": "/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg",
    "overview": "After hundreds of years doing what he was built for, WALL\u2022E\u2014 a robot designed to clean up the earth\u2014discovers a new purpose in life when he meets a sleek search robot named EVE. EVE comes to realize that WALL\u2022E has inadvertently stumbled upon the key to the planet's future, and races back to space to report to the humans. Meanwhile, WALL\u2022E chases EVE across the galaxy and sets into motion one of the most imaginative adventures ever brought to the big screen.",
    "watchedDate": "2026-02-03T20:25:22.000Z"
  },
  {
    "id": 244786,
    "title": "Whiplash",
    "release_date": "2014-10-10",
    "poster_path": "/7fn624j5lj3xTme2SgiLCeuedmO.jpg",
    "overview": "Under the direction of a ruthless instructor, a talented young drummer begins to pursue perfection at any cost, even his humanity.",
    "watchedDate": "2026-02-03T20:25:22.000Z"
  },
  {
    "id": 42694,
    "title": "Who's That Knocking at My Door",
    "release_date": "1968-09-13",
    "poster_path": "/zcH6pKZKeImwcBtIH7fSdUyoQ2e.jpg",
    "overview": "A Catholic New Yorker falls in love with a girl and wants to marry her, but he struggles to accept her past and what it means for their future.",
    "watchedDate": "2026-02-03T20:25:23.000Z"
  },
  {
    "id": 402431,
    "title": "Wicked",
    "release_date": "2024-10-16",
    "poster_path": "/xDGbZ0JJ3mYaGKy4Nzd9Kph6M9L.jpg",
    "overview": "In the land of Oz, ostracized and misunderstood green-skinned Elphaba is forced to share a room with the popular aristocrat Glinda at Shiz University, and the two's unlikely friendship is tested as they begin to fulfill their respective destinies as Glinda the Good and the Wicked Witch of the West.",
    "watchedDate": "2026-02-03T20:25:23.000Z"
  },
  {
    "id": 228970,
    "title": "Wild",
    "release_date": "2014-12-05",
    "poster_path": "/ohhWI4Xwf4m4HjbQiIkyAhLekUy.jpg",
    "overview": "A woman with a tragic past decides to start her new life by hiking for one thousand miles on the Pacific Crest Trail.",
    "watchedDate": "2026-02-03T20:25:23.000Z"
  },
  {
    "id": 1184918,
    "title": "The Wild Robot",
    "release_date": "2024-09-12",
    "poster_path": "/wTnV3PCVW5O92JMrFvvrRcV39RU.jpg",
    "overview": "After a shipwreck, an intelligent robot called Roz is stranded on an uninhabited island. To survive the harsh environment, Roz bonds with the island's animals and cares for an orphaned baby goose.",
    "watchedDate": "2026-02-03T20:25:23.000Z"
  },
  {
    "id": 847,
    "title": "Willow",
    "release_date": "1988-05-20",
    "poster_path": "/pAIRGMIdN7ZdZhflazdV2ezuJ9f.jpg",
    "overview": "The evil Queen Bavmorda hunts the newborn princess Elora Danan, a child prophesied to bring about her downfall. When the royal infant is found by Willow, a timid farmer and aspiring sorcerer, he's entrusted with delivering her from evil.",
    "watchedDate": "2026-02-03T20:25:23.000Z"
  },
  {
    "id": 51162,
    "title": "Winnie the Pooh",
    "release_date": "2011-04-06",
    "poster_path": "/xlFs85nq62jeR4a9iHNGB113m6x.jpg",
    "overview": "During an ordinary day in Hundred Acre Wood, Winnie the Pooh sets out to find some honey. Misinterpreting a note from Christopher Robin, Owl convinces Pooh, Tigger, Rabbit, Piglet, Kanga, Roo, and Eeyore that their young friend has been captured by a creature named \"Backson\" and they set out to rescue him.",
    "watchedDate": "2026-02-03T20:25:24.000Z"
  },
  {
    "id": 1022796,
    "title": "Wish",
    "release_date": "2023-11-13",
    "poster_path": "/nesuSdJakNkf0zs7OfoasB6Clxf.jpg",
    "overview": "Asha, a sharp-witted idealist, makes a wish so powerful that it is answered by a cosmic force \u2013 a little ball of boundless energy called Star. Together, Asha and Star confront a most formidable foe - the ruler of Rosas, King Magnifico - to save her community and prove that when the will of one courageous human connects with the magic of the stars, wondrous things can happen.",
    "watchedDate": "2026-02-03T20:25:24.000Z"
  },
  {
    "id": 297762,
    "title": "Wonder Woman",
    "release_date": "2017-05-30",
    "poster_path": "/v4ncgZjG2Zu8ZW5al1vIZTsSjqX.jpg",
    "overview": "An Amazon princess comes to the world of Man in the grips of the First World War to confront the forces of evil and bring an end to human conflict.",
    "watchedDate": "2026-02-03T20:25:25.000Z"
  },
  {
    "id": 787699,
    "title": "Wonka",
    "release_date": "2023-12-06",
    "poster_path": "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
    "overview": "Willy Wonka \u2013 chock-full of ideas and determined to change the world one delectable bite at a time \u2013 is proof that the best things in life begin with a dream, and if you\u2019re lucky enough to meet Willy Wonka, anything is possible.",
    "watchedDate": "2026-02-03T20:25:25.000Z"
  },
  {
    "id": 36643,
    "title": "The World Is Not Enough",
    "release_date": "1999-11-17",
    "poster_path": "/wCb2msgoZPK01WIqry24M4xsM73.jpg",
    "overview": "Greed, revenge, world dominance and high-tech terrorism \u2013 it's all in a day's work for Bond, who's on a mission to protect a beautiful oil heiress from a notorious terrorist. In a race against time that culminates in a dramatic submarine showdown, Bond works to defuse the international power struggle that has the world's oil supply hanging in the balance.",
    "watchedDate": "2026-02-03T20:25:25.000Z"
  },
  {
    "id": 82690,
    "title": "Wreck-It Ralph",
    "release_date": "2012-11-01",
    "poster_path": "/zWoIgZ7mgmPkaZjG0102BSKFIqQ.jpg",
    "overview": "Wreck-It Ralph is the 9-foot-tall, 643-pound villain of an arcade video game named Fix-It Felix Jr., in which the game's titular hero fixes buildings that Ralph destroys. Wanting to prove he can be a good guy and not just a villain, Ralph escapes his game and lands in Hero's Duty, a first-person shooter where he helps the game's hero battle against alien invaders. He later enters Sugar Rush, a kart racing game set on tracks made of candies, cookies and other sweets. There, Ralph meets Vanellope von Schweetz who has learned that her game is faced with a dire threat that could affect the entire arcade, and one that Ralph may have inadvertently started.",
    "watchedDate": "2026-02-03T20:25:26.000Z"
  },
  {
    "id": 27874,
    "title": "A Wrinkle in Time",
    "release_date": "2003-04-25",
    "poster_path": "/mMES5XApmhBmc06RxsT1a0DmUHQ.jpg",
    "overview": "Meg and Charles Wallace are aided by Calvin and three interesting women in the search for their father who disappeared during a government experiment. Their travels take them around the universe to a place unlike any other.",
    "watchedDate": "2026-02-03T20:25:26.000Z"
  },
  {
    "id": 2080,
    "title": "X-Men Origins: Wolverine",
    "release_date": "2009-04-28",
    "poster_path": "/yj8LbTju1p7CUJg7US2unSBk33s.jpg",
    "overview": "After seeking to live a normal life, Logan sets out to avenge the death of his girlfriend by undergoing the mutant Weapon X program and becoming Wolverine.",
    "watchedDate": "2026-02-03T20:25:26.000Z"
  },
  {
    "id": 127585,
    "title": "X-Men: Days of Future Past",
    "release_date": "2014-05-15",
    "poster_path": "/tYfijzolzgoMOtegh1Y7j2Enorg.jpg",
    "overview": "The ultimate X-Men ensemble fights a war for the survival of the species across two time periods as they join forces with their younger selves in an epic battle that must change the past \u2013 to save our future.",
    "watchedDate": "2026-02-03T20:25:26.000Z"
  },
  {
    "id": 667,
    "title": "You Only Live Twice",
    "release_date": "1967-06-13",
    "poster_path": "/fdRbvRcEXcf2rC4ghLFZzCWPSmB.jpg",
    "overview": "A mysterious spacecraft captures Russian and American space capsules and brings the two superpowers to the brink of war. James Bond investigates the case in Japan and comes face to face with his archenemy Blofeld.",
    "watchedDate": "2026-02-03T20:25:26.000Z"
  },
  {
    "id": 97630,
    "title": "Zero Dark Thirty",
    "release_date": "2012-12-19",
    "poster_path": "/wNSdSSxowM3WIqmPJNg3RagYbwP.jpg",
    "overview": "A chronicle of the decade-long hunt for al-Qaeda terrorist leader Osama bin Laden after the September 2001 attacks, and his death at the hands of the Navy S.E.A.L. Team 6 in May, 2011.",
    "watchedDate": "2026-02-03T20:25:27.000Z"
  },
  {
    "id": 269149,
    "title": "Zootopia",
    "release_date": "2016-02-11",
    "poster_path": "/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg",
    "overview": "Determined to prove herself, Officer Judy Hopps, the first bunny on Zootopia's police force, jumps at the chance to crack her first case - even if it means partnering with scam-artist fox Nick Wilde to solve the mystery.",
    "watchedDate": "2026-02-03T20:25:27.000Z"
  }
];

// Import function
(function importPlexMovies() {
    let imported = 0;
    let skipped = 0;
    
    plexMovies.forEach(movie => {
        // Check if movie already exists in watchedList
        if (!watchedList.some(m => m.id === movie.id)) {
            watchedList.push(movie);
            imported++;
        } else {
            skipped++;
        }
    });
    
    // Save to localStorage and Firebase
    saveWatchedList();
    renderWatchedList();
    
    console.log(`✅ Import complete!`);
    console.log(`   Imported: ${imported} movies`);
    console.log(`   Skipped (already in list): ${skipped} movies`);
    console.log(`   Total watched: ${watchedList.length} movies`);
})();
