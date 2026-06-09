// 1. GLOBAL UI CORE CONFIGURATION
const siteConfiguration = {
  "logoTitle": "#P1EXP",
  "navigationMenu": [
    { "id": "p1exp", "label": "P1EXP" },         
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
      "text": `The central processing deck for the #P1EXP audio matrix.<br/>Swipe right or select from above to explore the timeline archives and project logs, or view the featured showcases below.`,
      "imageName": "p1_bg.jpg" 
    },
    "sections": [
      {
        "title": "FEATURED TRANSMISSIONS",
        "text": "Highlighted archives pulled from active hardware grids, collaborative studio sessions, and legacy data vaults.",
        "imageName": "featured_bg.jpg", 
        "archiveKeys": ["COSP", "ILS2", "BREL", "EXCP", "INTL", "INMA"] 
      }
    ]
  },
  "projects": {
    "titleBanner": {
      "title": "<strong>#P1EXP</strong> PROJECTS // 2007 - PRESENT",
      "text": "Refined studio compositions and arrangements. Complex loop structures and sequences engineered within the audio workspace.",
      "imageName": "projects_bg.jpg" 
    },
    "sections": [
        {
        "title": "EPHEMERAL SESSIONS // 2026",
        "text": "Ephemeral diagnostic sessions. The structural evolution of live compositions, captured and archived in real-time.<br/><br/>Coming soon.",
        "imageName": "ephemeral_bg.jpg", 
        "archiveKeys": [] 
      },
      {
        "title": "TRICHROMAT SERIES // 2021 - 2025",
        "text": "Generative visual sequences and algorithmic pattern design. Exploring the intersection of human arrangement and autonomous machine logic.",
        "imageName": "trichromat_bg.jpg", 
        "archiveKeys": ["NEUR", "COSP", "COVI"] 
      },
      {
        "title": "IMMUNO // 2015 - 2020",
        "text": "Fragmented modular audio and experimental loop compositions reconstructed into complete, structured tracks.",
        "imageName": "immuno_bg.jpg",
        "archiveKeys": ["BREL", "SCDO", "TTLG", "CLEN"]
      },
      {
        "title": "ELECTRIC ABUSE // 2007 - 2014",
        "text": "High-density digital sample manipulation. Complex loop arrangements mixed and sequenced exclusively within DAW environments.",
        "imageName": "electricabuse_bg.jpg",
        "archiveKeys": ["EXCP", "STRA", "INTL"]
      }
    ]
  },
  "interlooper": {
    "titleBanner": {
      "title": "INTERLOOPER LIVE // SESSION LABS",
      "text": "Collaborative lab sessions and multi-user hardware setups. Live electronic improvisations documented alongside RmS.",
      "imageName": "interlooper_bg.jpg"
    },
    "sections": [
      {
        "title": "INTERLOOPER LIVE GIGS",
        "text": "Live hardware sets captured on location. Remote collaborative jams tracked directly to digital magnetic disc.",
        "imageName": "interlooperlive_bg.jpg",
        "archiveKeys": ["ILS2", "ILS1"]
      },
      {
        "title": "INTERLOOPER SESSION LABS",
        "text": "Improvisational studio cross-talk communication. Raw, unedited live streams documenting collective hardware experiments.",
        "imageName": "interloopersessions_bg.jpg",
        "archiveKeys": ["INS2", "INS1"]
      }
    ]
  },
  "legacy": {
    "titleBanner": {
      "title": "LEGACY ARCHIVE // 1992 - 2006",
      "text": "The foundational project archives. Historical tracking data, tape mixdowns, and early studio experiments retrieved from the vaults.",
      "imageName": "legacy_bg.jpg"
    },
    "sections": [
      {
        "title": "CARBON60 // 1998 - 2006",
        "text": "The transition to the digital audio workspace. Heavy industrial distortions and experimental crossover configurations.",
        "imageName": "carbon60_bg.jpg",
        "archiveKeys": ["INMA", "TCSO"]
      },
      {
        "title": "QUANTA // 1996 - 1997",
        "text": "Pure analogue synthetic modules and high-fidelity DAT recordings. Solo algorithmic trance and techno explorations.",
        "imageName": "quanta_bg.jpg",
        "archiveKeys": ["SYNO", "ALGO", "XTFU", "JOBJ", "MHTH"]
      },
      {
        "title": "JAMBIENCE // 1996 - 1997",
        "text": "Restored magnetic tape archives. Legacy multi-user improvised studio sessions capturing raw analogue stress tests.",
        "imageName": "jambience_bg.jpg",
        "archiveKeys": ["SYPS", "JAMB"]
      },
      {
        "title": "ALCHERINGGA // 1994 - 1995",
        "text": "The earliest synthetic operations. Restored hardware configurations compiled from original cassette data.",
        "imageName": "alcheringga_bg.jpg",
        "archiveKeys": ["KNSL", "INNO", "INFA"]
      },
      {
        "title": "ORIGIN // 1992 - 1993",
        "text": "Earliest collaborative tracking projects showcasing the foundational workspace arrays generated using legacy insruments and software.",
        "imageName": "forerunner_bg.jpg",
        "archiveKeys": ["ELEM", "GURU"]
      }
    ]
  }
};

// 3. MASTER PLATFORM-1 FLAT REGISTRY INDEXED BY UNIQUE CATALOG NUMBER
const masterCollectionRegistry = {
  "NEUR": { "title": "NEUROFLUX25", "date": "2025", "description": "Real-time eurorack telemetry. Unfiltered live jam sessions extracted from unstable modular arrays.", "mediaUrl": "", "footer": "Status: Unfinished" },
  "COSP": { "title": "COLORSPLASH24", "date": "2024", "description": "Aggregated data from 2021-2024. A compiled spectrum of experimental live session logs.", "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF", "footer": "Format: YouTube Video Playlist" },
  "COVI": { "title": "THE CO:VIDZ", "date": "2021", "description": "Isolation protocol enactments. Pure hardware synthesis executed offline without central computational assistance.", "mediaUrl": "https://www.youtube.com/embed/videoseries?si=OEJasDLnXC8gD7uV&list=PLkEwPD_31_HZz2iUCB5rqiQpOQM1Ubb-m", "footer": "Format: YouTube Video Playlist" },
  "BREL": { "title": "BROKEN ELECTRIC", "date": "2020", "description": "Fractured DAW signals reconstructed and arranged into stable full-track architectures.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1131803323/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Status: Incomplete" },
  "SCDO": { "title": "SCHRODINGER'S DOG", "date": "2019", "description": "Quantum state loop configurations. Compositions arranged from highly volatile audio matter.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1568662603/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "TTLG": { "title": "THROUGH THE LOOKING GLASS", "date": "2018", "description": "Unedited ambient anomalies. A pure dawless transmission recorded directly from the source.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1510586443/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "CLEN": { "title": "CLOSE ENCOUNTERS", "date": "2018", "description": "Algorithmic contact. Deep exploration of generative patterns and autonomous modular synthesis.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2494523694/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "EXCP": { "title": "EXCEPTION", "date": "2012", "description": "Digital audio workspace anomalies. A solo containment project utilizing high-density loop manipulation.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=327864152/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "STRA": { "title": "STRANGELET", "date": "2010", "description": "Sub-bass frequency experiments. Collaborative sessions yielding a mutated electronic dub sound.", "mediaUrl": "", "footer": "Status: Archived set" },
  "INTL": { "title": "INTERLOPER", "date": "2009", "description": "Synchronized multi-user operations. A collaborative matrix composed and sequenced with RmS.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=4116788522/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ILS2": { "title": "INTERLOOPER LAKEFEST LIVE SET 2025", "date": "2025", "description": "Field recordings from the Lakefest sector. Collaborative jam telemetry captured direct to magnetic cassette.", "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-lakefest-2025%2F", "footer": "Mixcloud Stream" },
  "ILS1": { "title": "INTERLOOPER LOWER LODE LIVE SET 2025", "date": "2025", "description": "Live hardware stress-tests. Tactical audio arrangements captured to tape at the Lower Lode coordinates.", "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-carry-on-up-the-lode-live-jam-april-25%2F", "footer": "Mixcloud Stream" },
  "INS2": { "title": "INTERLOOPER SESSIONS #2", "date": "2021", "description": "Unregulated improvisational protocols. Live collaborative experiments in unstable sound design.", "mediaUrl": "", "footer": null },
  "INS1": { "title": "INTERLOOPER SESSIONS #1", "date": "2017", "description": "Initial collaborative lab tests. Live improvised hardware interfacing alongside RmS.", "mediaUrl": "", "footer": null },
  "INMA": { "title": "INFERNAL MACHINE", "date": "2006", "description": "Hostile industrial distortions. Extreme decibel hardcore extracted from corrupted data cores.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2012227265/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "TCSO": { "title": "2001: A CYBERSPACE ODDITY", "date": "2001", "description": "The transitional paradigm shift. Archival records bridging retro hardware and the new WAV tracking array.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=3659035163/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "SYNO": { "title": "SYNOPSIS", "date": "1997", "description": "Classified Quanta project files. The optimal structural selections from solo isolation experiments.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2512928884/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ALGO": { "title": "ALGORHYTHM", "date": "1997", "description": "Algorithmic trance inductions. Experimental tech jams preserved on high-fidelity DAT storage.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2017899892/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "XTFU": { "title": "XTAL FUNGII", "date": "1997", "description": "Psycho-acoustic sequences. Experimental tech sessions heavily saturated with organic modulation.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=634481990/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "JOBJ": { "title": "JOIN OR BE JOINED", "date": "1996", "description": "Networked ambient setups. Electronic configurations featuring external guest input vectors.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2619486285/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "MHTH": { "title": "MAINS HUM AND TAPE HISS", "date": "1996", "description": "Analogue degradation studies. Experimental trance tech tracked through raw electrical interference.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1546770038/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "KNSL": { "title": "KNOBS & SLIDERS", "date": "1995", "description": "Tactile interface archives. The most stable output modules preserved from the Alcheringga tracking era.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2532253640/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "INNO": { "title": "INNOVATION", "date": "1995", "description": "Magnetic tape layering operations. Historical collaborative jams fused directly onto cassette substrates.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=271905516/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "INFA": { "title": "INFANCY", "date": "1994", "description": "Genesis protocols. The absolute earliest hardware tracking outputs retrieved from the Alcheringga lineage.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1071539434/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "ELEM": { "title": "CROWHAWK - ELEMENTS", "date": "1993", "description": "Bio-acoustic fusions. New age compositional parameters combined with organic didgeridoo resonance.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=433899581/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "GURU": { "title": "E/LIT/R8 - GURUS", "date": "1992", "description": "Early workspace rave arrays. The foundational collaborative tracking project that initiated the matrix.", "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1972960043/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", "footer": "Download from BANDCAMP" },
  "SYPS": { "title": "SYNTHEPSYCHOSIS", "date": "1997", "description": "Psychological acoustic stressors. Multi-user session jams archived on historical magnetic tape.", "mediaUrl": "", "footer": "Tape Archive" },
  "JAMB": { "title": "JAMBIENCE SESSIONS", "date": "1996", "description": "Legacy exploratory logs. Multi-user improvisations mapping uncharted analog sound environments.", "mediaUrl": "", "footer": "Tape Archive" }
};
