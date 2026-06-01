// 1. GLOBAL UI CORE CONFIGURATION
const siteConfiguration = {
  "logoTitle": "#P1EXP",
  "navigationMenu": [
    { "id": "p1exp", "label": "P1EXP" },         // <-- NEW FRONT PAGE ADDED HERE
    { "id": "projects", "label": "Projects" },
    { "id": "interlooper", "label": "Interlooper" },
    { "id": "legacy", "label": "Legacy" }
  ],
  "sectionLabels": {
    "deckMatrixShow": "▲ SHOW DECK MATRIX",
    "deckMatrixHide": "▼ HIDE DECK MATRIX"
  }
};

// 2. PORTAL LAYOUT ENGINE (Maps out unlimited sections per page)
const pageLayoutEngine = {
  "p1exp": {
    "titleBanner": {
      "title": "<strong>#P1EXP</strong> // PLATFORM-1 EXPERIMENTAL",
      "text": "#P1EXP is an experiment of sound. Select a category above to explore the timeline archives.",
      "imageName": "p1_bg.jpg" 
    },
    "sections": [
      {
        "title": "FEATURED TRANSMISSIONS",
        "text": "Latest dispatches and highlighted archives from the Platform-1 tracking matrix.",
        "imageName": "NEUR.jpg", 
        "archiveKeys": ["NEUR", "ILS2", "INMA"] // Pulls a highlight from Projects, Sessions, and Legacy
      }
    ]
  },
  "projects": {
    "titleBanner": {
      "title": "<strong>#P1EXP</strong> PROJECTS // 2007 - PRESENT",
      "text": "A discography of current projects are listed below to hear and download. The projects are listed in release order. Collections are hosted on YouTube and Bandcamp.",
      "imageName": "projects_bg.jpg" 
    },
    "sections": [
      {
        "title": "TRICHROMAT SERIES // 2021 - 2025",
        "text": "The Machinebrain project concentrates on creating sound and beats using algorithmic and generative sequences mixed with traditional sequencing. Modular synthesis is also used with computer DAW technology.",
        "imageName": "trichromat_bg.jpg", 
        "archiveKeys": ["NEUR", "COSP", "COVI"] 
      },
            {
        "title": "IMMUNO // 2015 - 2020",
        "text": "Experimental loop compositions recorded during earlier modular synth experimentation. Imported into a DAW and arranged.",
        "imageName": "immuno_bg.jpg",
        "archiveKeys": ["SCDO", "TTLG", "CLEN", "INTL"]
      },
      {
        "title": "ELECTRIC ABUSE // 2007 - 2014",
        "text": "This project represents a time when computer systems running DAW software had come of age. A vast array of multigenre samples were mixed and manipulated.",
        "imageName": "electricabuse_bg.jpg",
        "archiveKeys": ["BREL", "EXCP", "STRA"]
      }
    ]
  },
  "interlooper": {
    "titleBanner": {
      "title": "INTERLOOPER LIVE // SESSION LABS",
      "text": "Recordings of live sets and studio jam sessions from current and historical collaboration configurations.",
      "imageName": "interlooper_bg.jpg"
    },
    "sections": [
      {
        "title": "INTERLOOPER LIVE GIGS",
        "text": "Live experimental improvised collaboration jam sessions with RmS, which are raw and unedited. Predominantly dawless setups with modular synthesis racks.",
        "imageName": "interlooperlive_bg.jpg",
        "archiveKeys": ["ILS2", "ILS1"]
      },
      {
        "title": "INTERLOOPER SESSION LABS",
        "text": "Multi user session live jams recorded onto historical tape formats during structural analogue studio experiments.",
        "imageName": "interloopersessions_bg.jpg",
        "archiveKeys": ["INS2", "INS1"]
      }
    ]
  },
  "legacy": {
    "titleBanner": {
      "title": "LEGACY ARCHIVE // 1992 - 2006",
      "text": "Collections, tracker modules, and live operational tape mixdowns from earlier foundational projects.",
      "imageName": "legacy_bg.jpg"
    },
    "sections": [
      {
        "title": "CARBON60 // 1998 - 2006",
        "text": "Crossover archives representing transition from retro hardware to computer WAV tracking array, alongside the best selections from the Quanta solo project.",
        "imageName": "carbon60_bg.jpg",
        "archiveKeys": ["INMA", "TCSO"]
      },
            {
        "title": "QUANTA // 1996 - 1997",
        "text": "Crossover archives representing transition from retro hardware to computer WAV tracking array, alongside the best selections from the Quanta solo project.",
        "imageName": "quanta_bg.jpg",
        "archiveKeys": ["SYNO", "ALGO", "XTFU", "MHTH"]
      },
            {
        "title": "JAMBIENCE // 1996 - 1997",
        "text": "Crossover archives representing transition from retro hardware to computer WAV tracking array, alongside the best selections from the Quanta solo project.",
        "imageName": "jambience_bg.jpg",
        "archiveKeys": ["SYPS", "JAMB"]
      },
      {
        "title": "ALCHERINGGA // 1994 - 1995",
        "text": "The initial hardware tracking operations under the Alcheringga collaborative lineage. Restored and compiled from legacy cassette data modules.",
        "imageName": "alcheringga_bg.jpg",
        "archiveKeys": ["KNSL", "INNO", "INFA"]
      },
      {
        "title": "ORIGIN // 1992 - 1993",
        "text": "The very first collaborative tracking projects showcasing early workspace rave arrays generated using legacy tracking systems.",
        "imageName": "forerunner_bg.jpg",
        "archiveKeys": ["ELEM", "GURU"]
      }
    ]
  }
};

// 3. MASTER PLATFORM-1 FLAT REGISTRY INDEXED BY UNIQUE CATALOG NUMBER
const masterCollectionRegistry = {
  "NEUR": { "title": "NEUROFLUX25", "date": "2025", "description": "Experimental live jam sessions recorded on eurorack.", "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF", "footer": "Status: Finished" },
  "COSP": { "title": "COLORSPLASH24", "date": "2024", "description": "Experimental live jam sessions recorded from 2021 - 2024.", "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF", "footer": "Format: YouTube Video Playlist" },
  "COVI": { "title": "THE CO:VIDZ", "date": "2021", "description": "Composed on real electronic music gear without a computer.", "mediaUrl": "https://www.youtube.com/embed/videoseries?si=OEJasDLnXC8gD7uV&list=PLkEwPD_31_HZz2iUCB5rqiQpOQM1Ubb-m", "footer": "Format: YouTube Video Playlist" },
  "BREL": { "title": "BROKEN ELECTRIC", "date": "2020", "description": "Group of DAW loops and sessions arranged into full tracks.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1131803323/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Status: Incomplete" },
  "SCDO": { "title": "SCHRODINGER'S DOG", "date": "2019", "description": "Arranged tracks of experimental loop compositions.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1568662603/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "TTLG": { "title": "THROUGH THE LOOKING GLASS", "date": "2018", "description": "Unedited experimental dawless ambient session.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1510586443/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "CLEN": { "title": "CLOSE ENCOUNTERS", "date": "2018", "description": "Exploration of generative modular synthesis.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2494523694/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "EXCP": { "title": "EXCEPTION", "date": "2012", "description": "Solo project created on a DAW with loops and samples.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=327864152/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "STRA": { "title": "STRANGELET", "date": "2010", "description": "Collaboration project of sessions with an electronic dub sound.", "mediaUrl": "", "footer": "Status: Archived set" },
  "INTL": { "title": "INTERLOPER", "date": "2009", "description": "Collab collection composed and arranged with RmS.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=4116788522/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ILS2": { "title": "INTERLOOPER LIVE SET 2025", "date": "2025", "description": "Recorded onto cassette during collaborative jam sessions.", "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-lakefest-2025%2F", "footer": "Mixcloud Stream" },
  "ILS1": { "title": "INTERLOOPER LIVE SET LODE", "date": "2025", "description": "Live hardware arrangements captured onto tape.", "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-carry-on-up-the-lode-live-jam-april-25%2F", "footer": "Mixcloud Stream" },
  "INS2": { "title": "INTERLOPER SESSIONS #2", "date": "2021", "description": "Live experimental improvised collaboration jam sessions.", "mediaUrl": "", "footer": null },
  "INS1": { "title": "INTERLOPER SESSIONS #1", "date": "2017", "description": "Live improvised collab sessions with RmS.", "mediaUrl": "", "footer": null },
  "INMA": { "title": "INFERNAL MACHINE", "date": "2006", "description": "Distorted experimental industrial hardcore.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2012227265/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "TCSO": { "title": "2001: A CYBERSPACE ODDITY", "date": "2001", "description": "Crossover archive representing transition to WAV tracking.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=3659035163/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "SYNO": { "title": "SYNOPSIS", "date": "1997", "description": "Best selections from the Quanta solo project.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2512928884/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ALGO": { "title": "ALGORHYTHM", "date": "1997", "description": "Experimental trance tech session jams recorded on DAT.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2017899892/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "XTFU": { "title": "XTAL FUNGII", "date": "1997", "description": "Experimental psychedelic trance tech sessions.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=634481990/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "JOBJ": { "title": "JOIN OR BE JOINED", "date": "1996", "description": "Ambient electronic collaboration setups featuring guests.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2619486285/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "MHTH": { "title": "MAINS HUM AND TAPE HISS", "date": "1996", "description": "Experimental trance tech session tracks.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1546770038/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "KNSL": { "title": "KNOBS & SLIDERS", "date": "1995", "description": "Finest selections from the Alcheringga tracking modules.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2532253640/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "INNO": { "title": "INNOVATION", "date": "1995", "description": "Recorded onto cassette tape layers during collaborative jams.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=271905516/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "INFA": { "title": "INFANCY", "date": "1994", "description": "The initial hardware tracking operations under Alcheringga.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1071539434/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ELEM": { "title": "CROWHAWK - ELEMENTS", "date": "1993", "description": "New age-style composition configurations combining didgeridoo.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=433899581/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "GURU": { "title": "E/LIT/R8 - GURUS", "date": "1992", "description": "Collaborative tracking project showcasing early workspace rave arrays.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1972960043/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "SYPS": { "title": "SYNTHEPSYCHOSIS", "date": "1997", "description": "Multi user session live jams recorded onto historical tape.", "mediaUrl": "", "footer": "Tape Archive" },
  "JAMB": { "title": "JAMBIENCE SESSIONS", "date": "1996", "description": "Legacy multi-user improvisation jams tracking sound explorations.", "mediaUrl": "", "footer": "Tape Archive" }
};
