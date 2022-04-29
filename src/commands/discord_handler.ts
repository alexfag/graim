import Discord = require("discord.js");
export const discord_client = new Discord.Client({
  intents: [
    // Discord API requires you explicitly request for each part of the API you want to access
    Discord.Intents.FLAGS.GUILDS,
    Discord.Intents.FLAGS.GUILD_MESSAGES,
    Discord.Intents.FLAGS.GUILD_MEMBERS,
  ],
});
import config from "../config";

let nightly_songs = [
  // :)
  "Deca - Waiting",
  "Bread - Dismal Day",
  "Bread Club - Late Night Fever",
  "Felix Rabito - Anna Muse",
  "Mindy Gledhill - Rabbit Hole",
  "Stoop Kids - Cup",
  "August Kuper - Headache",
  "Trash Panda - Heartbreak Pulsar",
  "The Happy Fits - Best Tears",
  "Brother Moses - Older",
  "FLEXPROPHET, Toast - outchea",
  "SN0WCRASH - Switching Off",
  "carpetgarden - Can Ghosts Be Gay?",
  "MANWOLVES - Georgia Peach",
  "dodie - Would You Be So Kind",
  "Sarah and the Sundays - Moving On",
  "Carver Commodore - Stranger Things",
  "King Shelter - Everything Hurts",
  "King Shelter - Everything Hurts",
  "King Shelter - Everything Hurts",
  'Carver Commodore - Tell Me What You Want (I Want It) (Will "FRANKLIN" Chapman Remix)',
  "Conan Gray - Heather",
  "Felix Rabito - Bread",
  "Aesop Rock - None Shall Pass",
  "Kill Bill, Rav - lovedrug (off that)",
  "Piché, Clara Hannigan - Euphoria and Nosebleeds",
  "Fury Weekend, Scandroid - Euphoria",
  "marinelli - Turtleneck Sweater",
  "Watsky - Exquisite Corpse",
  "atlas - her",
  "The Breadheads - Ghosts",
  "Rejjie Snow - Relax",
  "Biosphere, khai dreams - Inner Peace",
  "People Under the Stairs - Selfish Destruction",
  "Rav - Wings",
  "Deca - Breadcrumbs",
  "Felix Rabito - Cure",
  "Toast - May Not Need Him",
  "Felix Rabito - Stay Away",
  "Deca - The Way In",
  "Carolyn Cleary - Mr. Happy Smile",
  "People Under the Stairs - The Sound of a Memory",
  "DROELOE - zZz",
  "The Notorious B.I.G. - Suicidal Thoughts",
  "King Shelter - People Change",
  "Bread Club - Predictable",
  "Destiny Rogers - Euphoria",
  "Mindy Gledhill - Boo Hoo!",
  "King Shelter - Dreams",
  "imkyami - Dead Plants",
  "King Shelter - Holy Ghost",
  "Rav - walls",
  "Felix Rabito - Gold",
  "King Shelter - Blue Pigz",
  "People Under the Stairs - Keepin It Live",
  "VHS - Eagle",
  "Rav - i don't even remember recording this but whatever i don't even care to be honest",
  "The Notorious B.I.G. - Warning (2007)",
  "love-sadKID - cash",
  "Felix Rabito - Kombucha Blues",
  "King Shelter - Hope & Smoke",
  "Rav - Tachyon",
  "Sugar Pine 7 - These Drugs",
  "King Shelter - CALAMITY",
  "K.A.A.N. - KAANCEPTS 2",
  "King Shelter - Preoccupy",
  "Deca - Salome",
  "Belaganas - Crumbs",
  "samsa - haunt me",
  "King Shelter - Failure",
  "Anarbor - Whiskey In Hell",
  "Deca - Silverline",
  "Kill Bill, Rav - dirge",
  "King Shelter - Gholy Host",
  "Ice Cube - It Was A Good Day",
  "Nas - Death Row East",
  "Good Kid - Tell Me You Know",
  "AJ Super - Nightmares",
  "khai dreams - Nice Colors",
  "Good Kid - Alchemist",
  "Rav - dying at the speed of light (a verse done a second time)",
  "King Shelter - Bag of Bones",
  "Anarbor - 18",
  "Good Kid - Everything Everything",
  "Al Bowlly - Heartaches",
  "Tally Hall - The Bidding",
  "Rav - You Fuckers Were Asking For This One",
  "The Rare Occasions - Origami",
  "King Shelter - Luvsub",
  "Passion Pit - Eyes As Candles",
  "Elton John - I'm Still Standing",
  "Noisettes - Don't Give Up",
  "Deca - Delilah",
  "Felix Rabito - Storm",
  "Brother Moses - Please Stop",
  "Big Data ft. Joywave - Dangerous",
  "The ME Band - Loaf of Bread Man",
  "1990nowhere - Grim Mary",
  "The Chordettes - Pink Shoe Laces",
  "Invisible Inc. - Same Way",
  "The Rare Occasions - Notion",
  "iamkyami - concrete rose",
  "Rav, Kill Bill, Scuare - Molasses",
  "atlas - sunshine",
  "khai dreams - in love",
  "Roderick Porter - i didn't realize how empty my bed was until you left",
  "King Shelter - Creature Preacher",
  "Ivory Hours - Boys Club",
  "Kill Bill - Dream Eater",
  "Joyner Lucas - The Problem",
  "Kuwada - Starlight",
  "King Shelter - Paradigm",
  "atlas - ayla",
  "People Under the Stairs - Plunken Em",
  "Al Bowlly - The Very Thought of You",
  "WOODKID - Run Boy Run",
  "The Doobie Brothers - What a Fool Believes",
  "Passion Pit - Lifted Up (1985)",
  "lando - sweater",
  "Andy Leon - Breadcrumbs",
  "Tally Hall - Hymn for a Scarecrow",
  "WOODKID - Goliath",
  "Rick Astley - Unwanted",
  "grouptherapy - raise it up!",
  "Rav - A Better Place",
  "omniboi - amnesia",
  "atlas - in between",
  "Jeff Touhy - Bourbon Street",
  "Passion Pit - Sleepyhead",
  "Good Kid - Orbit",
  "Rav - My Time",
  "atlas - valentine",
  "Bready - Boy (don't try)",
  "The Treacherous Three, Spoonie Gee - The New Rap Language",
  "samsa, atlas - anthropocene",
  "K.A.A.N. - Dispatch",
  "The Oxford Choir - The Music of Stillness [SATB]",
  "Good Kid - Atlas",
  "fun. - Some Nights",
  "Møbius - Stings",
  "King Shelter - Sellout",
  "Deca - Edenville",
  "Felix Rabito - Petrified",
  "Kill Bill - About Last Night",
  "Skout - Sting",
  "if.else - High Hopes",
  "Manic Morrow - Bind",
  "Passion Pit - Moth's Wings (stripped down)",
  "Felix Rabito - Please",
  "Kaius - Twisted",
  "Deca - Gabriel Ratchet",
  "Rav - Stasis Tank",
  "Møbius - Mind",
  "atlas - early graves",
  "samsa - solo",
  "King Shelter - Antidote",
  "Jara, Near Tears - Switchblade",
  "People Under the Stairs - The Wiz",
  "New Move - When Did We Stop",
  "Bear Ghost - Sirens",
  "Ren - Money Game",
  "Shutups - NSA",
  "atlas - call failed",
  "bo en - sometimes",
  "Röyksopp - Vision One",
  "exociety - EXP Share",
  "Ren - Jenny's Tale",
  "wych elm - scolds bridle",
  "Aesop Rock - Lice",
  "Shutups - Yellowjacket",
  "Kill Bill - ib",
  "Al Bowlly - They Say",
  "Møbius - Snowflakes",
  "AJR - 3 O'Clock Things",
  "Passion Pit - Whole Life Story",
  "meltycanon - brittle",
  "Ren - Screech's Tale",
  "Deca - False Light",
  "if.else - Self Driving",
  "Max Sensibar - I'm Not Gonna Hold Your Hand",
  "Kill Bill - DoNotDisturb",
  "atlas - they/them",
  "The Technicolors - Howl",
  "Wes Park - If Nothing Else Mattered",
  "Sister. - Fighter",
  "love-sadKID, Kill Bill - a lesson in silence",
  "Deca - Skyward",
  "Daniel Caesar - Blessed",
  "atlas - you're my world",
  "Belaganas - Lean On Me",
  "Good Kid - Pox",
  "Ren, Chinchilla - How To Be Me",
  "King Shelter - Pick Your Poison",
  "Bready - Where Did The Time Go (do i move too slowly?)",
  "Kill Kill - Cigarettes",
  "Tally Hall - &",
  "Nas - Memory Lane",
  "Kill Bill, Rav - when i am successful i'mma buy a neo geo",
  "Louis Armstrong - What a Wonderful World",
  "joe p - leaves",
  "Bruno Major - Old Fashioned",
  "Rav - ANXIETY PERSISTS [a verse done once]",
  "Ren, Sam Tompkins - Blind Eyed (live)",
  "gianni and kyle - do u even miss me at all?",
  "Kill Bill - snowdancer",
  "Bread - Everything I Own",
  "Good Kid - Drifting",
  "ARMORS - Revolvers",
  "Daniela Andrade - Creep",
  "1990nowhere - Watergun",
  "Belaganas - Silk",
  "Rob Cantor - Old Bike",
  "love-sadKID - Stalemate",
  "Night Talks - Green",
  "People Under the Stairs - Acid Raindrops",
  "Tally Hall - Just Apathy",
  "Rav - sociesuicide",
  "Feed Me Jack - Promiscuity",
  "Max Sensibar - Bright Side",
  "Good Kid - Nomu",
  "King Shelter - Gimme Knowledge",
  "K.A.A.N. - Reaper",
  "fun. - Carry On",
  "senses - When It Rains",
  "Frank Sinatra - Pennies From Heaven",
  "atlas - chamomile",
  "Bready - I Don't Wanna (hear what you gotta say)",
  "The Rare Occasions - Futureproof",
  "OCS, atlas - Rocketman",
  "Tally Hall - A Lady",
  "Ren, Eden Nash - Ocean",
  "Kill Bill - What To Say",
  "ARMORS - Comatose",
  "Brother Moses - Someone Make It Stop!",
  "Rav - this was a demo for this one song but i couldn't find the more up to date version so this one will have to do sorry",
  "People Under the Stairs - Mid-City Fiesta",
  "Made Violent - On My Own",
  "Tally Hall - Hidden In the Sand",
  "Made Violent - Two Tone Hair",
  "Skee-Lo - I Wish",
  "Ren, Eden Nash - Humble",
  "Lauryn Hill - Ex-Factor",
  "Deca - Clockwork",
  "Jim Yosef - Hate You",
  "Louis Armstrong - A Kiss to Build a Dream On",
  "King Shelter - Dust of L.A.",
  "Belaganas - Room 4 U",
  "Aesop Rock - Catacomb Kids",
  "atlas - back then",
  "Rob Cantor - I'm Gonna Win",
  "Ren - love music 3",
  "Jeff Tuohy - Monogamy",
  "Bails - Questionnaire For an Idiot",
  "shiey - element",
  "People Under the Stairs - Tales of Kidd Drunkadelic",
  "King Shelter - I've Seen Worse",
  "Boba Boyz - Thai Tea Trippin'",
  "Tally Hall - Fate of the Stars",
  "The Rare Occasions - The Fold",
  "Rav - Neuroframe 14",
  "shiey - no lanes",
  "Belaganas - Hashtag.AD",
  "Rob Cantor - Perfect",
  "Good Kid - Faster",
  "Al Bowlly - Blow Blow Thou Winter Wind",
  "atlas - final form!",
  "Lauryn Hill - I Used to Love Him",
  "Kill Bill, Rav, Square - down.exe",
  "Ella Fitzgerald - They Can't Take That Away From Me",
  "Dagny - Wearing Nothing",
  "Near Tears - Was It Worth The Love Song",
  "atlas - broken record",
  "Fats'e - salty!",
  "The Moxies - Main Street Drive-In",
  "Eminem - Remember Me?",
  "Ren - Blind Eyed",
  "King Shelter - Goodbye Horses",
  "The Rare Occasions - notion (acoustic)",
  "Passion Pit - You Have The Right",
  "Ren, Chinchilla - Chalk Outlines",
  "Rav - Me? Never",
  "King Shelter - Searching for Alchemy",
  "Ryan Leahan - Steal My Bike",
  "Watsky - Strong As An Oak",
  "People Under the Stairs - Let The Record Show",
];

export let guild;
export let mute_role;

const rotate_status = () => {
  // :)
  discord_client.user.setActivity(
    nightly_songs[Math.floor(Math.random() * nightly_songs.length)],
    { type: "LISTENING" }
  );
  setTimeout(rotate_status, 120000); // 2 mins
};

discord_client.on("ready", () => {
  console.info("Discord bot started! Logged in: " + discord_client.user.tag);
  rotate_status();
  guild = discord_client.guilds.resolve(config.discordGuild); // get the graim guild
  mute_role = guild.roles.cache.get(config.discordMutedRole); // get the muted role
});

discord_client.login(config.discordToken);
