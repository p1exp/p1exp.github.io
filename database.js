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
            "text": `<h3>The central processing deck for the #P1EXP audio matrix</h3><p><strong>Swipe the page or select from the menu above to view the timeline archives and projects or view the featured showcase below. Select PLAY ARCHIVE DECK to stream the collections.</strong></p><p>Explore the archive dedicated to experimental electronic music, abstract breaks, ambient soundscapes, and high-density industrial techno.</p><p>This catalogue explores the structural evolution of underground machine compositions, engineered through a hybrid workflow of live hardware modular synthesis, custom generative MIDI sequencing, and complex DAW sample manipulation.</p>`,
            "imageName": "p1_bg.jpg"
        },
        "sections": [
            {
                "title": "IN THE LAB // ON THE SLAB",
                "text": `<h4>LATEST EXPERIMENTS</h4><p>Raw audio telemetry.</p><p>Tracks from various projects currently under development.</p>`,
                "imageName": "lab_bg.jpg",
                "archiveKeys": ["LAB1", "EPH1"]
            },
            {
                "title": "FEATURED TRANSMISSIONS",
                "text": `<h4>Highlighted archives</h4><p>Pulled from active hardware grids, collaborative studio sessions, and legacy data vaults.</p>`,
                "imageName": "featured_bg.jpg",
                "archiveKeys": ["COSP", "ILS2", "BREL", "EXCP", "INTL", "INMA"]
            }
        ]
    },
    "projects": {
        "titleBanner": {
            "title": "<strong>#P1EXP</strong> PROJECTS // 2007 - PRESENT",
            "text": `<h3>Refined studio compositions and arrangements</h3><p>Complex loop structures and sequences engineered within the audio workspace.</p>`,
            "imageName": "projects_bg.jpg"
        },
        "sections": [
            {
                "title": "MACHINEBRAIN // NOW - 2026",
                "text": `<h4>AI humanoid fusion</h4><span class="meta-tag">Location: Blueroom</span><p>Experiments with Artificial Intelligence, augmenting human composition.</p>`,
                "imageName": "machinebrain_bg.jpg",
                "archiveKeys": ["TETR"]
            },
            {
                "title": "EPHEMERAL SESSIONS // NOW - 2026",
                "text": `<h4>Ephemeral development sessions</h4><span class="meta-tag">Location: Blueroom</span><p>The structural evolution of live compositions, captured and archived in real-time.</p>`,
                "imageName": "ephemeral_bg.jpg",
                "archiveKeys": ["EPH1"]
            },
            {
                "title": "TRICHROMAT SERIES // 2025 - 2021",
                "text": `<h4>Generative visual sequences and algorithmic pattern design</h4><span class="meta-tag">Location: Blueroom</span><p>Exploring the intersection of human arrangement and autonomous generative machine logic.</p>`,
                "imageName": "trichromat_bg.jpg",
                "archiveKeys": ["NEUR", "COSP", "COVI"]
            },
            {
                "title": "IMMUNO // 2020 - 2015",
                "text": `<h4>Fragmented modular audio</h4><span class="meta-tag">Location: Ermin</span><p>experimental loop compositions reconstructed into complete, structured tracks.</p>`,
                "imageName": "immuno_bg.jpg",
                "archiveKeys": ["BREL", "SCDO", "TTLG", "CLEN"]
            },
            {
                "title": "ELECTRIC ABUSE // 2014 - 2007",
                "text": `<h4>High-density digital sample manipulation</h4><span class="meta-tag">Location: Lloyds</span><p>Complex loop arrangements mixed and sequenced exclusively within DAW environments.</p>`,
                "imageName": "electricabuse_bg.jpg",
                "archiveKeys": ["EXCP", "STRA", "INTL"]
            }
        ]
    },
    "interlooper": {
        "titleBanner": {
            "title": "INTERLOOPER LIVE // SESSION LABS",
            "text": `<h3>Collaborative lab sessions and multi-user hardware setups</h3><p>Live electronic improvisations documented alongside RmS.</p>`,
            "imageName": "interlooper_bg.jpg"
        },
        "sections": [
            {
                "title": "INTERLOOPER LIVE GIGS",
                "text": `<h4>Live hardware sets captured on location</h4><p>Remote collaborative jams tracked directly to digital magnetic disc.</p>`,
                "imageName": "interlooperlive_bg.jpg",
                "archiveKeys": ["ILS2", "ILS1"]
            },
            {
                "title": "INTERLOOPER SESSION LABS",
                "text": `<h4>Improvisational studio cross-talk communication</h4><span class="meta-tag">Location: Blueroom &amp; Ermin</span><p>Raw, unedited live streams documenting collective hardware experiments.</p>`,
                "imageName": "interloopersessions_bg.jpg",
                "archiveKeys": ["INS2", "INS1"]
            }
        ]
    },
    "legacy": {
        "titleBanner": {
            "title": "LEGACY ARCHIVE // 1992 - 2006",
            "text": `<h3>The foundational project archives</h3><p>Historical tracking data, tape mixdowns, and early studio experiments retrieved from the vaults.</p>`,
            "imageName": "legacy_bg.jpg"
        },
        "sections": [
            {
                "title": "CARBON60 // 1998 - 2006",
                "text": `<h4>The transition to the digital audio workspace</h4><span class="meta-tag">Location: Astor</span><p>Heavy industrial distortions and experimental crossover configurations.</p>`,
                "imageName": "carbon60_bg.jpg",
                "archiveKeys": ["INMA", "TCSO"]
            },
            {
                "title": "QUANTA // 1996 - 1997",
                "text": `<h4>Pure analogue synthesis</h4><span class="meta-tag">Location: Staplins</span><p>Solo algorithmic trance and techno explorations recorded on high-fidelity DAT.</p>`,
                "imageName": "quanta_bg.jpg",
                "archiveKeys": ["SYNO", "ALGO", "XTFU", "JOBJ", "MHTH"]
            },
            {
                "title": "JAMBIENCE // 1996 - 1997",
                "text": `<h4>Restored magnetic tape archives</h4><span class="meta-tag">Location: Staplins</span><p>Legacy multi-user improvised studio sessions capturing raw analogue stress tests.</p>`,
                "imageName": "jambience_bg.jpg",
                "archiveKeys": ["SYPS", "JAMB"]
            },
            {
                "title": "ALCHERINGGA // 1994 - 1995",
                "text": `<h4>The earliest synthetic operations</h4><span class="meta-tag">Location: Grosvenor</span><p>Restored hardware configurations compiled from original cassette data.</p>`,
                "imageName": "alcheringga_bg.jpg",
                "archiveKeys": ["KNSL", "INNO", "INFA"]
            },
            {
                "title": "ORIGIN // 1992 - 1993",
                "text": `<h4>Earliest collaborative projects</h4><span class="meta-tag">Location: North</span><p>showcasing the foundational workspace arrays generated using legacy insruments and software.</p>`,
                "imageName": "forerunner_bg.jpg",
                "archiveKeys": ["ELEM", "GURU"]
            }
        ]
    }
};

// 3. MASTER PLATFORM-1 FLAT REGISTRY INDEXED BY UNIQUE CATALOG NUMBER
const masterCollectionRegistry = {
    "LAB1": {
        "title": "LABORATORY PRELIMS", "date": "2026",
        "description": "Latest tracks currently under development from various projects.",
        "mediaUrl": "https://hearthis.at/set/551685/embed/?hcolor=00ffcc",
        "footer": "HEARTHIS Stream - Status: Incomplete"
    },
    "TETR": {
        "title": "TETRACHROME VISION", "date": "2026",
        "description": "A new visual FX project to run with the sound in all medias. More info to follow.",
        "mediaUrl": "",
        "footer": ""
    },
    "EPH1": {
        "title": "EPHEMERAL SESSIONS #1", "date": "2026",
        "description": `Test captures from the Lower Lode 2026 Live set development.<details><summary>+ VIEW HARDWARE LOG</summary><div class="details-content"><strong>SEQUENCER:</strong> Akai Force<br><strong>MODULAR:</strong> Eurorack 104HP<br><strong>STATUS:</strong> Unmastered telemetry</div></details>`,
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1687209366/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download free from BANDCAMP - Status: Final"
    },
    "NEUR": {
        "title": "NEUROFLUX", "date": "2025",
        "description": `Real-time eurorack telemetry. Unfiltered live jam sessions extracted from unstable modular arrays.<br/><br/><a href="https://www.youtube.com/watch?v=2qkMhV3raU4&list=PLG9oUASPsH7I" target="_blank">YouTube Playlist</a><br/>
        
        <details><summary>+ VIEW HARDWARE LOG</summary><div class="details-content">NEUROFLUX
Part 3/3 of the Trichromat Video Series

🌐 #P1EXP - Explore the full project and discography:
https://p1exp.github.io/

This series of 13 music videos captures a fully dawless, improvised hardware ecosystem. Instead of timeline arrangements, tracks were built using live sequencing and generative loops, relying entirely on real-time parameter tweaking to build tension and structure.

🎛️ The Process & Gear:
• The Brain & Beats: The MPC One acts as the master clock, providing percussion and musical loops punched in live on the pads. Ableton Session mode is used more in this series to provide addtional percussion and sounds, but not as a sequencer.

• Acid & Bass: Independent generative sequencers drive the Behringer TD-3 and MAM MB33 via MIDI for evolving basslines.

• Modular Textures: The F:Wheel - a custom-built, microcontroller-based generative sequencer drives the Eurorack and Make Noise 0-Coast to create unpredictable, evolving textures. A Moog Subharmonicum and Behringer Spice is also used.

• The Live Jam Execution: Every track is a single, continuous take. There are no pre-written arrangements - just riding the mixer, triggering live mutes, and manually sweeping filters on the hardware in real-time - all recorded in one take.

• Generative Visuals: The video element is just as live as the audio. Video clips were randomised and sequenced on the fly to match the unpredictable nature of the hardware jam, with both audio and video captured simultaneously direct to OBS Studio.

• Post-Production & Mastering: The raw OBS capture was imported and mastered in Adobe Premiere. 

📺 Watch the full series playlist:
https://www.youtube.com/playlist?list=PLG9oUASPsH7I

⭐ Stream the Audio & Socials:
https://linktr.ee/p1exp

Enjoy, and listen on speakers or headphones.

©2024 Platform-1 Experimental Recordings - All Rights Reserved

#P1EXP #HardwareJam #Dawless #ElectronicMusic #MPCOne #Eurorack</div></details>`,
        "mediaUrl": "https://www.youtube.com/embed/videoseries?list=PLG9oUASPsH7I",
        "footer": `YOUTUBE Video Playlist - Status: Final`
    },
    "COSP": {
        "title": "COLORSPLASH", "date": "2024",
        "description": `Aggregated data from 2021-2024. A compiled spectrum of experimental live session logs.<br/><br/><a href="https://www.youtube.com/watch?v=Ydfegw4KryU&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF" target="_blank">YouTube Playlist</a>`,
        "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF",
        "footer": "YOUTUBE Video Playlist - Status: Final"
    },
    "COVI": {
        "title": "THE CO:VIDZ", "date": "2021",
        "description": `Isolation protocol enactments. Pure hardware synthesis executed offline without central computational assistance.<br/><br/><a href="https://www.youtube.com/watch?v=8lbLWdj4dw8&list=PLkEwPD_31_HZz2iUCB5rqiQpOQM1Ubb-m" target="_blank">YouTube Playlist</a>`,
        "mediaUrl": "https://www.youtube.com/embed/videoseries?si=OEJasDLnXC8gD7uV&list=PLkEwPD_31_HZz2iUCB5rqiQpOQM1Ubb-m",
        "footer": "YOUTUBE Video Playlist - Status: Final"
    },
    "BREL": {
        "title": "BROKEN ELECTRIC", "date": "2020 - 2016",
        "description": "Fractured DAW signals reconstructed and arranged into stable full-track architectures.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1131803323/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Status: Incomplete"
    },
    "SCDO": {
        "title": "SCHRODINGER'S DOG", "date": "2019 - 2017",
        "description": "Quantum state loop configurations. Compositions arranged from highly volatile audio matter.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1568662603/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download free from BANDCAMP"
    },
    "TTLG": {
        "title": "THROUGH THE LOOKING GLASS", "date": "2018",
        "description": "Unedited ambient anomalies. A pure dawless transmission recorded directly from the source.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1510586443/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download free from BANDCAMP"
    },
    "CLEN": {
        "title": "CLOSE ENCOUNTERS", "date": "2018",
        "description": "Algorithmic contact. Deep exploration of generative patterns and autonomous modular synthesis.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2494523694/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download free from BANDCAMP"
    },
    "EXCP": {
        "title": "EXCEPTION", "date": "2012",
        "description": "Digital audio workspace anomalies. A solo containment project utilizing high-density loop manipulation.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=327864152/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download free from BANDCAMP"
    },
    "STRA": {
        "title": "STRANGELET", "date": "2010",
        "description": "Sub-bass frequency experiments. Collaborative sessions yielding a mutated electronic dub sound.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=679892495/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Status: Archived set"
    },
    "INTL": {
        "title": "INTERLOPER", "date": "2009", "description":
            "Synchronized multi-user operations. A collaborative matrix composed and sequenced with RmS.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=4116788522/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "ILS2": {
        "title": "INTERLOOPER LAKEFEST LIVE SET 2025", "date": "2025",
        "description": "Field recordings from the Lakefest sector. Collaborative jam telemetry captured direct to magnetic cassette.",
        "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-lakefest-2025%2F",
        "footer": "MIXCLOUD Stream"
    },
    "ILS1": {
        "title": "INTERLOOPER LOWER LODE LIVE SET 2025", "date": "2025",
        "description": "Live hardware stress-tests. Tactical audio arrangements captured to tape at the Lower Lode coordinates.",
        "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-carry-on-up-the-lode-live-jam-april-25%2F",
        "footer": "MIXCLOUD Stream"
    },
    "INS2": {
        "title": "INTERLOOPER SESSIONS #2", "date": "2022 - 2019",
        "description": "Unregulated improvisational protocols. Live collaborative experiments in unstable sound design.",
        "mediaUrl": "",
        "footer": null
    },
    "INS1": {
        "title": "INTERLOOPER SESSIONS #1", "date": "2019 - 2017",
        "description": "Initial collaborative lab tests. Live improvised hardware interfacing alongside RmS.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1559419773/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": null
    },
    "INMA": {
        "title": "INFERNAL MACHINE", "date": "2006",
        "description": "Hostile industrial distortions. Extreme decibel hardcore extracted from corrupted data cores.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2012227265/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", 
        "footer": "Download from BANDCAMP"
    },
    "TCSO": {
        "title": "2001: A CYBERSPACE ODDITY", "date": "2001",
        "description": "The transitional paradigm shift. Archival records bridging retro hardware and the new WAV tracking array.", 
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=3659035163/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/", 
        "footer": "Download from BANDCAMP"
    },
    "SYNO": {
        "title": "SYNOPSIS", "date": "1997",
        "description": "Classified Quanta project files. The optimal structural selections from solo isolation experiments.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2512928884/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "ALGO": {
        "title": "ALGORHYTHM", "date": "1997",
        "description": "Algorithmic trance inductions. Experimental tech jams preserved on high-fidelity DAT storage.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2017899892/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "XTFU": {
        "title": "XTAL FUNGII", "date": "1997", "description": "Psycho-acoustic sequences. Experimental tech sessions heavily saturated with organic modulation.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=634481990/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "JOBJ": {
        "title": "JOIN OR BE JOINED", "date": "1996",
        "description": "Networked ambient setups. Electronic configurations featuring external guest input vectors.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2619486285/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "MHTH": {
        "title": "MAINS HUM AND TAPE HISS", "date": "1996",
        "description": "Analogue degradation studies. Experimental trance tech tracked through raw electrical interference.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1546770038/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "KNSL": {
        "title": "KNOBS & SLIDERS", "date": "1995",
        "description": "Tactile interface archives. The most stable output modules preserved from the Alcheringga tracking era.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2532253640/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "INNO": {
        "title": "INNOVATION", "date": "1995",
        "description": "Magnetic tape layering operations. Historical collaborative jams fused directly onto cassette substrates.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=271905516/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "INFA": {
        "title": "INFANCY", "date": "1994",
        "description": "Genesis protocols. The absolute earliest hardware tracking outputs retrieved from the Alcheringga lineage.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1071539434/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "ELEM": {
        "title": "CROWHAWK - ELEMENTS", "date": "1993",
        "description": "Bio-acoustic fusions. New age compositional parameters combined with organic didgeridoo resonance.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=433899581/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "GURU": {
        "title": "E/LIT/R8 - GURUS OF HIGH SIGNIFICANCE", "date": "1992",
        "description": "Early workspace rave arrays. The foundational collaborative tracking project that initiated the matrix.",
        "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1972960043/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
        "footer": "Download from BANDCAMP"
    },
    "SYPS": {
        "title": "SYNTHEPSYCHOSIS", "date": "1997",
        "description": "Psychological acoustic stressors. Multi-user session jams archived on historical magnetic tape.",
        "mediaUrl": "",
        "footer": "Tape Archive"
    },
    "JAMB": {
        "title": "JAMBIENCE SESSIONS", "date": "1996",
        "description": "Legacy exploratory logs. Multi-user improvisations mapping uncharted analog sound environments.",
        "mediaUrl": "",
        "footer": "Tape Archive"
    }
};
