// 1. GLOBAL UI MOCK CONFIGURATION
const siteConfiguration = {
  "logoTitle": "P1EXP // DECK MATRIX",
  "navigationMenu": [
    { "id": "projects", "label": "Projects" },
    { "id": "sessions", "label": "Sessions" },
    { "id": "legacy", "label": "Legacy" }
  ],
  "sectionLabels": {
    "spotlight": "SPOTLIGHT TARGET MODULE",
    "archive": "ARCHIVE COLLECTION COMPILATIONS",
    "deckMatrixShow": "▲ SHOW DECK MATRIX",
    "deckMatrixHide": "▼ HIDE DECK MATRIX"
  }
};

// 2. PORTAL LAYOUT ENGINE (Simulates dynamic listing orders via Cat No references)
const pageLayoutEngine = {
  "projects": {
    "titleBanner": {
      "title": "<strong>#P1EXP</strong> // PROJECTS",
      "text": "A discography of current projects are listed below to hear and download. The projects are listed in release order. Collections are hosted on YouTube and Bandcamp.",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQppuRULLHixQSyzf2Fo0bK7H3eEKsRzXY4-LwfJhE4tUwk8iYOe23J8M3RwLP5nRmQIIU87ShamNQR51h1gwo7Gd7vmi3FIzxo57e7ug_Wb-mPiVQDCNNZsaY7IPKBTHFo2C8kR8KA2MMVYSHx019Fr6Al0AU3SJKNjKsjattpLagiA/s400/colorsplash24.jpg"
    },
    "featuredKey": "COSP", // Main Spotlight Project Cat No
    "archiveKeys": ["COVI", "BREL", "SCDO", "TTLG", "CLEN", "EXCP", "STRA", "INTL"]
  },
  "sessions": {
    "titleBanner": {
      "title": "SESSION RECORDINGS // LIVE LABS",
      "text": "Recordings of live sets and studio jam sessions from current and historical collaboration configurations.",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK4z1aVRJatxwcBIittZV_T-Sfi111Yy4NCVX7Jg-Dgse5rLJuX3g9YVgTF084Gyff9mjNxaDTqEeI37PUhjFSEKwldLCA4HpVMTfNl8CqyGJx5zR8DjOaprn4g_6Hqq2I4Cmsone7J-nj34iaDT1CUXDbhay9SMbkcSj6kSPLVkyIDQ/s400/interlopersessions1.jpg"
    },
    "featuredKey": "ILS2", // Main Spotlight Session Cat No
    "archiveKeys": ["ILS1", "INS2", "INS1", "SYPS", "JAMB", "COSP"] // Crossover: COSP cross-referenced here!
  },
  "legacy": {
    "titleBanner": {
      "title": "LEGACY ARCHIVE // 1994 - 2006",
      "text": "Collections, tracker modules, and live operational tape mixdowns from earlier foundational projects.",
      "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbzpO0joe0-Lftu8YsP0tQEy5LSfDXUZ6j2OuVe2oP1B4Y4fQYNetuYVL805Ap-7sCGT4expnfNHm4ZAOKgrimUPGqB9xv4NzM5JABhKy3jyTFfx9doT1hd3pMemrOcZEWI495-u6lfJALoPgfhBOJB84patqB5P0lHBaRDoWfWuGxTA/s400/2001acyberspaceoddity.jpg"
    },
    "featuredKey": "INMA", // Main Spotlight Legacy Cat No
    "archiveKeys": ["TCSO", "SYNO", "ALGO", "XTFU", "JOBJ", "MHTH", "KNSL", "INNO", "INFA", "ELEM", "GURU"]
  }
};

// 3. MASTER PLATFORM-1 FLAT REGISTRY INDEXED BY UNIQUE CATALOG KEY NUMBER
const masterCollectionRegistry = {
  "NUER": {
    "title": "NEUROFLUX25",
    "date": "2024 - Composed @ Blueroom",
    "description": "The Colorsplash24 project is a series of experimental live jam sessions recorded from 2021 - 2024. The live jams were created on eurorack with MPC One.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQppuRULLHixQSyzf2Fo0bK7H3eEKsRzXY4-LwfJhE4tUwk8iYOe23J8M3RwLP5nRmQIIU87ShamNQR51h1gwo7Gd7vmi3FIzxo57e7ug_Wb-mPiVQDCNNZsaY7IPKBTHFo2C8kR8KA2MMVYSHx019Fr6Al0AU3SJKNjKsjattpLagiA/s400/colorsplash24.jpg",
    "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF",
    "footer": "Status: Finished"
  },
  "COSP": {
    "title": "COLORSPLASH24",
    "date": "2024 - Composed @ Blueroom",
    "description": "Experimental live jam sessions recorded from 2021 - 2024 on eurorack with MPC One and other synths captured live into OBS with blended generative video overlays managed in Premiere.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjQppuRULLHixQSyzf2Fo0bK7H3eEKsRzXY4-LwfJhE4tUwk8iYOe23J8M3RwLP5nRmQIIU87ShamNQR51h1gwo7Gd7vmi3FIzxo57e7ug_Wb-mPiVQDCNNZsaY7IPKBTHFo2C8kR8KA2MMVYSHx019Fr6Al0AU3SJKNjKsjattpLagiA/s400/colorsplash24.jpg",
    "mediaUrl": "https://www.youtube.com/embed/videoseries?si=bskhsRpzIY5H0zky&list=PLkEwPD_31_HYX9vjfsXC6o5cNyAPL0qiF",
    "footer": "Format: YouTube Video Playlist"
  },
  "COVI": {
    "title": "THE CO:VIDZ",
    "date": "2021 - Composed @ Ermin",
    "description": "Composed on real electronic music gear without a computer: MPC One, Eurorack, 0-Coast, MB33, TD3. Loop jammed live with no pre-written sequences direct into OBS Studio with randomly sequenced video clips.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje32rJlQD_9R_cnfkhKyS1WpYauyLu4kBqwAvh64e0_kFCXCeAra8ebkB60NwY9PAl--imbhCrvm21SRXLfaWcHlChRs03JjlXZ61IhK3eEOIYoZoTgWSUNpwFc0BbFMRBi3K2xoKdWyIoaE-Gc3T4lnFduv4rZ3y2S8E1qr-GciqtGg/s400/TheCoVidz.jpg",
    "mediaUrl": "https://www.youtube.com/embed/videoseries?si=OEJasDLnXC8gD7uV&list=PLkEwPD_31_HZz2iUCB5rqiQpOQM1Ubb-m",
    "footer": "Format: YouTube Video Playlist"
  },
  "BREL": {
    "title": "BROKEN ELECTRIC",
    "date": "2020 - Composed @ Ermin",
    "description": "Group of DAW loops and sessions composed between 2007 – 2014 and used for live sessions during the ELECTRIC ABUSE project, arranged into full tracks.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhVUhbtoM-M_UozK98GZy-TUSkKxaO-6rcHFP9B-6-qdBaFiqOOsBt96vLIWtYeNU4cVU8UbJVoonqrxDvszC5DWNvXcJu-7Sx2GgZ_7haNLr28uEMqNlcva7EpHHMSh3o4SEDMkpDWiwL5T2qjXZwtxGkc0xX2BPrKwc2qG-dC6om7TQ/s400/brokenelectric.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1131803323/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Status: Incomplete/Awaiting final remaster"
  },
  "SCDO": {
    "title": "SCHRODINGER'S DOG",
    "date": "2019 - Composed @ Ermin",
    "description": "Arranged tracks of experimental loop compositions, recorded during earlier modular synth experimentation. Imported into a DAW and arranged with added percussion.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiD6gacNO8wRx-Y3iVyfS6lX1vA2_XKAcwqFMDten7xIsX6vqDb2kdbGvRygKbDtmY7mDB_k7ga7F4KhDZxxILljT85NmhuYhN5WPcGat3rY_kprJykCIRj-Q42_NqseRwtuSVjNmIU7fo5nrLBl-hz_c7tTBXbofm5xBore3NS6X_e5A/s400/schrodingersdog.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1568662603/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "TTLG": {
    "title": "THROUGH THE LOOKING GLASS",
    "date": "2018 - Composed @ Ermin",
    "description": "Unedited experimental dawless ambient session. This session was an exploration of generative modular synthesis with no fixed BPM clock.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgtfvjRBucmot4-fTtrxBMU2wT856UmD-iipjcqpd9WD6OfdAU9JRuYSRuZhy_lm7BAWiYAUVsqrDp4Od1bY4Y3d2GF_iO-QpcmdQg7jq8dE4keRLc8RMV0zVAhFL7uhUYJ3AEYx8BkGEtOrv0Ii3otLm6PLjpFHoemzFlAq6Z9zsUYtQ/s400/throughthelookingglass.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1510586443/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "CLEN": {
    "title": "CLOSE ENCOUNTERS",
    "date": "2018 - Composed @ Ermin",
    "description": "Unedited experimental dawless ambient session. Exploration of generative modular synthesis with parts captured to be organized at a later date.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgYA5AwcZ6kPy1OFeA2UF3wgdoiAmXjqW7k2s9qImxJO0jgx5fUeYyS7w7Y4e_0qUEMLz_AzjR1H_yZnapMqr4bX1B6Nmle-LrtfThjL7wqAueKJsfKTYGCX5EEQnBqJn9PWNqKZM6WpLFOl2lzSJC4zK--I3B9hLkK1kJMp789qgeMdg/s400/closeencounters.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2494523694/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "EXCP": {
    "title": "EXCEPTION",
    "date": "2012 - Composed @ Lloyds",
    "description": "Solo project created on a DAW with loops and samples between 2008 - 2012. It features a breakbeat trip hop techno flavor with an added touch of hardware distortion.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEivyhW9F30aaEEUP3W_bNvV5AxAbY5r4icVFxzoo-AxSIcd9I9jNvNHhHiWPb4hcIk_Ylnsj9pMVmpttMmmZfR4btFAGndIP4-EInwZWwAMZgV_e3FvVUsRFi2Ali9VOqZJoOpJXFuNC9xafiaf4ugro5v1aaV2UxCBNJ0hxrnUZcgIIA/s400/exception.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=327864152/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "STRA": {
    "title": "STRANGELET",
    "date": "2010 - Composed @ Lloyds",
    "description": "Collaboration project of sessions with an electronic downtempo dub sound. Tracks were composed on a DAW with some featuring lead and bass guitars.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgeBK5zLNbjDAxm72aHdD3rQrz5ch43wcoxL5WPmKfzVnPYUlUJbiQMVIjY5BoJuzl9bMg-bPr7viGklhJG46R2kD_4n5v5J8Ki8xViZUadYTeTI5RqJXj_QfzHhc6oD8x3DaqDYkdl7lo8X5gXp-yiWIA0PoTmjHRtAV75xMVxVMu4Ng/s400/strangelet.jpg",
    "mediaUrl": "",
    "footer": "Status: Archived set"
  },
  "INTL": {
    "title": "INTERLOPER",
    "date": "2009 - Composed @ Lloyds",
    "description": "Collab collection composed and arranged with RmS between 2007 and 2009. It has a breakbeat trip hop techno flavor with a bit of added distortion.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg7adGtlbQx_b22cC-FMUCa8L4k6WVoLRyxCjCG5gcOdn1ki_RKjRPonAtoVw2lE7mRVMH1EQbvttzh_VmQoUtRonQJb7Z_RKmlL006pQdn4MGvIpq5R-oFySvBXzlUzcvlEzDbaGQYzSgUYZ6BjhLqDYpyMakrRgb46OYFr6WCdI9DeQ/s400/interloper.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=4116788522/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "ILS2": {
    "title": "INTERLOOPER LIVE SET - LAKEFEST 2025",
    "date": "2025 - Recorded @ Lakefest Festival - August 2025",
    "description": "Recorded onto cassette during collaborative jam sessions. Arranged on a Korg 01/WFD workstation and complemented by retro analog gear including SH101s and a PolySix.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvqyPuFjSyWDRv6-dgKiH0G7B3nu-YH6_TrLYnBgT351UDAoRa_sl3SogKCSsyIY577WEwIkgyS2CR0iLHwo_nyL2tAE-DpSOEEfdF9c8JvedfUtL6RLJmX9aJnqWu6OMu2NUgsr0qzUiOEPcazAPdjr6nPIcl7cmd5E2aQa8KFkOIcA/s400/innovation.jpg",
    "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-lakefest-2025%2F",
    "footer": "Live Performance Recording Feed"
  },
  "ILS1": {
    "title": "INTERLOOPER LIVE SET - LOWER LODE 2025",
    "date": "2025 - Recorded @ Carry on up the Lode Festival - April 2025",
    "description": "Live hardware arrangements captured onto tape format streams. Arranged using a hybrid digital workstation and legacy analog components.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvqyPuFjSyWDRv6-dgKiH0G7B3nu-YH6_TrLYnBgT351UDAoRa_sl3SogKCSsyIY577WEwIkgyS2CR0iLHwo_nyL2tAE-DpSOEEfdF9c8JvedfUtL6RLJmX9aJnqWu6OMu2NUgsr0qzUiOEPcazAPdjr6nPIcl7cmd5E2aQa8KFkOIcA/s400/innovation.jpg",
    "mediaUrl": "https://player-widget.mixcloud.com/widget/iframe/?hide_cover=1&feed=%2Fp1exp%2Finterlooper-carry-on-up-the-lode-live-jam-april-25%2F",
    "footer": "Live Performance Recording Feed"
  },
  "INS2": {
    "title": "INTERLOPER SESSIONS #2",
    "date": "2021 - Recorded @ Blueroom",
    "description": "Live experimental improvised collaboration jam sessions with RmS, which are raw and unedited. Predominantly dawless setups with modular synthesis racks.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK4z1aVRJatxwcBIittZV_T-Sfi111Yy4NCVX7Jg-Dgse5rLJuX3g9YVgTF084Gyff9mjNxaDTqEeI37PUhjFSEKwldLCA4HpVMTfNl8CqyGJx5zR8DjOaprn4g_6Hqq2I4Cmsone7J-nj34iaDT1CUXDbhay9SMbkcSj6kSPLVkyIDQ/s400/interlopersessions1.jpg",
    "mediaUrl": "",
    "footer": null
  },
  "INS1": {
    "title": "INTERLOPER SESSIONS #1",
    "date": "2017 - Recorded @ Ermin",
    "description": "Live improvised collab sessions with RmS, raw and unedited. Handled using discrete hardware modules and hardware analog tracking nodes.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjK4z1aVRJatxwcBIittZV_T-Sfi111Yy4NCVX7Jg-Dgse5rLJuX3g9YVgTF084Gyff9mjNxaDTqEeI37PUhjFSEKwldLCA4HpVMTfNl8CqyGJx5zR8DjOaprn4g_6Hqq2I4Cmsone7J-nj34iaDT1CUXDbhay9SMbkcSj6kSPLVkyIDQ/s400/interlopersessions1.jpg",
    "mediaUrl": "",
    "footer": null
  },
  "INMA": {
    "title": "INFERNAL MACHINE",
    "date": "2006 - Composed @ Boverton & Astor",
    "description": "Distorted experimental industrial hardcore with some bpms reaching beyond the 200 mark. Composed entirely inside a DAW environment with loops and samples.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhy-HK3v0QXdxnne60vERCgqam-NQV96_Pjsnbbw8d36eEqo7O6BwSS-4wacJQ0O-bOaTy81BqjP8uCupy34XlNHmO4ivRnC-LZeijVs7tqgyG8fV1YzHM8kvRF3unISb7F74bTyqV6lXlXAAgIlJoqIzpwZ7RXRQKlIGovOOn11SUCTw/s400/infernalmachine.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2012227265/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "TCSO": {
    "title": "2001: A CYBERSPACE ODDITY",
    "date": "2001 - Composed @ Astor",
    "description": "Crossover archive representing transition from retro hardware to computer WAV tracking array. Shifts styles from trance to harder techno streams.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbzpO0joe0-Lftu8YsP0tQEy5LSfDXUZ6j2OuVe2oP1B4Y4fQYNetuYVL805Ap-7sCGT4expnfNHm4ZAOKgrimUPGqB9xv4NzM5JABhKy3jyTFfx9doT1hd3pMemrOcZEWI495-u6lfJALoPgfhBOJB84patqB5P0lHBaRDoWfWuGxTA/s400/2001acyberspaceoddity.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=3659035163/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "SYNO": {
    "title": "SYNOPSIS",
    "date": "1997 - Composed @ Staplins",
    "description": "Best selections from the Quanta solo project. Programmed on an Atari ST tracking engine and printed direct to DAT tape streams.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgCFoqK7IrET6rVSAyDDKuz5EAZvkC-6RAwmEEV1W4Wr4nEDoA6XYKITCENkaQhb26yKudhdvYQlki2RklHMEdQvuhkc-5p3lfVfzQ1p7rIyJcF7Ue_mKnhB9pApaa8ahyKgmRtCdX-zD3mt_v14yVASQlZjxAFa3Jtv1fJoM6fxVSB6A/s400/synopsis.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2512928884/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "ALGO": {
    "title": "ALGORHYTHM",
    "date": "1997 - Recorded @ Staplins",
    "description": "This collection features experimental trance tech session jams recorded on both DAT and cassette. Vintage analogue gear sequenced using an Atari ST tracking link.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhCgkGZu9riSOcaCL8ZZykZYhTJ0LpjbgF_5quNvKDD1-8UKcJVjncRdGIHzx5lcsKDc5GRFvx4wYIVw7Z6qBB0PDN60E4sG15nNSJwRD-WOZTTtsaWn-uIUedW2bvtAcyNtWd-v2bCnw94nzkN9jgo3ppIvTI4wGuUHP4u9UqrM1ud5A/s400/algorhythm.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2017899892/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "XTFU": {
    "title": "XTAL FUNGII",
    "date": "1997 - Recorded @ Staplins",
    "description": "Experimental psychedelic trance tech sessions recorded onto tape cassette tracks, sequenced seamlessly via Atari hardware systems.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEix4KVOjk64ydrv-I4OyevJXfNWTiIgUFIjn09G5chUBCiTkExNtSW-Mkumco6lQ9GZrgb8R4cbkpuJEVEMx3j1bvdFWcqEPd-nz_sgtvVrrHIMRmZt4_Td6CdaCD0YWnMSnkGQ7nwN52cg2prnDKS4a9-GSu5Eq820RRYQazBUnNC3jg/s400/xtalfungii.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=634481990/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "JOBJ": {
    "title": "JOIN OR BE JOINED",
    "date": "1996 - Recorded @ Staplins & Bertie Towers",
    "description": "Ambient electronic collaboration setups featuring instruments from guest sound engineers. Whistle by Becky, Didj by Jase, Flute by Mark, Vocals by Anthony.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1nvzt6zzv-BC4hseVT4R6ZMn-jW5b55dHSgpWmWWf3FDNFm5vAjkWzIx1MtH1wwe1kUIyeXlT_L2aNRMeXmGDEPlsRet7E5TCNuivLwBmPMbZhttptc-JQdSUkA5hCE-M41HyhpYn6ftklq7CalIxZ0-1-U7500jTSKYUqap5WPZTDQ/s400/joinorbejoined.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2619486285/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "MHTH": {
    "title": "MAINS HUM AND TAPE HISS",
    "date": "1996 - Recorded @ Staplins",
    "description": "Unreleased album tracks. Experimental trance tech session tracks recorded direct to audio cassette links via Atari sequencing configurations.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiJBR0QYHME8fF-MtrdWA1VKKE8UulloBC0c05WySdrWMvJwpzKdTgXTKbdek6nsiA65NLMv4Fvvzr9jQwfiD-rcrQdqK_evUltoISWSrI3D2jNXrl1n7df_xPTunuFswUHlTH27J9fL0xZgplG3FtyMI43DsjqP65aAxVVYuHVApbzKg/s400/mainshumandtapehiss.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1546770038/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "KNSL": {
    "title": "KNOBS & SLIDERS",
    "date": "1995 - Composed @ Bertie Towers",
    "description": "Finest selections from the Alcheringga tracking modules recorded direct to DAT. Arranged using workstation disk engines alongside real vintage synthesis hardware layers.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgFbIVBul0wdKhcuciSFYlBq_r4rKVimLPzVUqPGZKIN1WnmsDgepbjer7RDy28Kx3Ilw2EqeH10ZN8awgRoKohCopjoE_MkvDAIW0Y8-7gUQYlB1EhFh64pftd7GF-i1IZQ7Lvz4m4iRo-oVLvQNlQWqwp7VOef7mSYnvguhS6s7-BOA/s400/knobsandsliders.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=2532253640/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "INNO": {
    "title": "INNOVATION",
    "date": "1995 - Composed @ Bertie Towers",
    "description": "Recorded onto cassette tape layers during collaborative jam tracking configurations under the Alcheringga project. Minimum studio hardware layers printed live.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvqyPuFjSyWDRv6-dgKiH0G7B3nu-YH6_TrLYnBgT351UDAoRa_sl3SogKCSsyIY577WEwIkgyS2CR0iLHwo_nyL2tAE-DpSOEEfdF9c8JvedfUtL6RLJmX9aJnqWu6OMu2NUgsr0qzUiOEPcazAPdjr6nPIcl7cmd5E2aQa8KFkOIcA/s400/innovation.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=271905516/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "INFA": {
    "title": "INFANCY",
    "date": "1994 - Recorded @ Bertie Towers",
    "description": "The initial hardware tracking operations under the Alcheringga collaborative lineage. Restored and compiled from legacy cassette data modules.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhLv9L8OCV5PJUIn1KDdoiA_2BxXxARimqjEqoQ2D29thDiGKx-RWsWZUiKacY4Wxx2V81CXKmGyto4owIsutrW43dF0LvPp33Zq-OBhoDCF4RSj-et3ou8YXlz4p5n8drIXNEv2j5QDuwOWuaKVC8vblY-uYwWQh7FCEREzTtL5Dmnkg/s400/infancy.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1071539434/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "ELEM": {
    "title": "CROWHAWK - ELEMENTS",
    "date": "1993 - Recorded @ Pagan Media, Runcorn",
    "description": "New age-style composition configurations combining didgeridoo tracks and organic tracking tribal percussion, captured over 24-channel ADAT tape infrastructure.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbzekAtt4tY0ykO4lMSzytMKfkS8SOLg92qahHD2QyyY6vBOGjzs-ttBM8EBu3WhR5ghyphenhyphen35fRWwbsqeMyy7yxOgD0bSZJpgZpxUp-oJrZF5UvQ3y_K6w-smdXMBEkK1l0H-B9cqL13ihZmYzZfvWP6H1tfRcXloCqkd_ePQTED6lTxAQ/s400/crowhawk.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=433899581/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "GURU": {
    "title": "E/LIT/R8 - GURUS OF HIGH SIGNIFICANCE",
    "date": "1992 - Recorded @ Steel City",
    "description": "Collaborative tracking project showcasing early workspace rave arrays generated by engineering students at Sheffield Hallam using legacy tracking systems and Amiga systems.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhnMxu8O0AKMpNtDyi-RpUBfTEmmGUJpxAAyUE4N1xbQ0cySDd9tV-N4IWVgF4v0CStlJ6m50t6u3Bp2Ty6Q2HhyA12LkLsaQI5T_KOgmClTIpsACP-ogGQp7XOMhr26uSWPd7WFsj5WK6R3GXeg3RULsu477KuQY5W53uBXs-WKG1kqQ/s400/elitr8.jpg",
    "mediaUrl": "https://bandcamp.com/EmbeddedPlayer/album=1972960043/size=large/bgcol=333333/linkcol=00ffcc/tracklist=true/artwork=small/transparent=true/",
    "footer": "Download from BANDCAMP for free"
  },
  "SYPS": {
    "title": "SYNTHEPSYCHOSIS",
    "date": "1997 - Composed @ Staplins",
    "description": "Multi user session live jams recorded onto historical tape formats during structural analogue studio experiments.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKphMi2tZwROHtAi4y6GjHCLcJW156H2lO6n6-OOZguWWwjXZYLFDo9TglvQd59tlKRWjF373RH9Sq9sqV5wfTNCbr1tGxzsZ5syAZZzzPPCLOnJB3cpXprUkWChxN3i7h8Qtd6dLHLqsv6zuDmHknRdOXlpQ4pxPJodYZc4L47YHd9w/s400/2001CyberspaceOddity.jpg",
    "mediaUrl": "",
    "footer": "Format: Tape Mix Archive Feed"
  },
  "JAMB": {
    "title": "JAMBIENCE SESSIONS",
    "date": "1996 - Composed @ Staplins",
    "description": "Legacy multi-user improvisation jams tracking early structural hardware sound explorations.",
    "image": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhKphMi2tZwROHtAi4y6GjHCLcJW156H2lO6n6-OOZguWWwjXZYLFDo9TglvQd59tlKRWjF373RH9Sq9sqV5wfTNCbr1tGxzsZ5syAZZzzPPCLOnJB3cpXprUkWChxN3i7h8Qtd6dLHLqsv6zuDmHknRdOXlpQ4pxPJodYZc4L47YHd9w/s400/2001CyberspaceOddity.jpg",
    "mediaUrl": "",
    "footer": "Format: Tape Mix Archive Feed"
  }
};
