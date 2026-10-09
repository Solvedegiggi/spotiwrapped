/* ================================================================
   Spotify Wrapped Viewer — app.js
   ================================================================ */

// ===== LOCALIZATION =====
const i18n = {
  en: {
    uploadTitle: "Your Spotify Wrapped",
    uploadSubtitle: "Upload your streaming history to explore your listening stats, top tracks, and more.",
    dropText: "Drag & drop your JSON or ZIP file here",
    dropHint: "or click to browse",
    nameLabel: "YOUR NAME",
    namePlaceholder: "Enter your name",
    loadingText: "Processing your streaming history…",
    changeHistory: "Change history",
    wrappedTitle: "'s Spotify Wrapped",
    defaultTitle: "Spotify Wrapped",
    tabTotal: "Total",
    tabByYear: "By Year",
    tabRecap: "Recap",
    tabSearch: "Search",
    searchPlaceholder: "Search songs and artists...",
    searchNoResults: "No results found for",
    searchPillAll: "All",
    searchPillSongs: "Songs",
    searchPillArtists: "Artists",
    backToSearch: "Back to Search",
    backToTab: "Back to",
    totalTracksListened: "Total tracks listened",
    uniqueTracksListened: "Unique tracks listened",
    totalTime: "Total time",
    minutes: "minutes",
    thRank: "#",
    thTitle: "Title",
    thTimesListened: "Times Listened",
    thAlbum: "Album",
    thFirstListened: "First Listened",
    thDuration: "Duration",
    thTotalTime: "Total Time",
    showMore: "Show more",
    showLess: "Show less",
    errorInvalidJson: "Invalid JSON file. Please upload a valid Spotify streaming history.",
    errorEmptyFile: "The file appears to be empty or contains no valid streams.",
    errorInvalidZip: "Invalid or corrupted ZIP file. Please try again.",
    errorNoStreamsInZip: "No valid Spotify streaming history JSON files found in the ZIP.",
    lastUpdate: "Last update",
    // Recap
    recapTotalMinutes: "Total Minutes",
    recapTotalSongs: "Songs Played",
    recapUniqueSongs: "Unique Songs",
    recapTotalArtists: "Total Artists",
    recapTopArtists: "Top Artists",
    recapTopSongs: "Top Songs",
    recapMonthlyActivity: "Monthly Activity",
    recapHourlyActivity: "Listening Hours",
    recapPlays: "plays",
    recapMin: "min",
    recapSelectYear: "Year:",
    recapAllYears: "All Years",
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    // Stats Tab
    tabStats: "Stats",
    statsAllSongs: "All Songs",
    statsThisSong: "This Song",
    statsGeneralOverview: "Account Records & Insights",
    statsStreamsOverTime: "Streams Over Time",
    statsMonthlyActivity: "Monthly Activity",
    statsListeningHours: "Listening Hours",
    statsRecordAllTime: "Most Streamed (All Time)",
    statsRecordLastYear: "Most Streamed (Last Year)",
    statsRecordStreak: "Most in a Row",
    statsRecord1Day: "Peak 1 Day (24h)",
    statsRecord7Days: "Peak 7 Days",
    statsRecord30Days: "Peak 30 Days",
    statsRecord365Days: "Peak 365 Days",
    statsStreakCount: "in a row",
    statsPeakCount: "plays",
    scale1Day: "1 Day",
    scale1Week: "1 Week",
    scale2Weeks: "2 Weeks",
    scale1Month: "1 Month",
    scale3Months: "3 Months",
    scale6Months: "6 Months",
    scale1Year: "1 Year",
    scale3Years: "3 Years",
    scale6Years: "6 Years",
    scale12Years: "12 Years",
    scaleAllTime: "All Time",
    hourFrom: "From:",
    hourTo: "To:",
    allHours: "All Hours",
    searchSongPlaceholder: "Search for a song...",
    emptySearchTitle: "Search for any song",
    emptySearchDesc: "Type a song name above or click the Stats button next to any track in your library to explore its detailed listening history.",
    songStatsBtn: "Stats",
    badgeTotalPlays: "Total Plays",
    badgeTotalTime: "Total Time",
    badgeDuration: "Est. Duration",
    badgeFirstListened: "First Listened",
    badgeAllTimeRank: "All-Time Rank",
    badgePersonalStreak: "Most in a Row",
    badgePeak1Day: "Peak 1 Day",
    badgePeak7Days: "Peak 7 Days",
    // Guide Screen
    whereToFindData: "Where do I find it?",
    guideBackBtn: "Back to Upload",
    guideTitle: "How to Download Your Spotify Data",
    guideSubtitle: "Follow this step-by-step guide to get your complete lifetime streaming history from Spotify.",
    guideStep1Title: "1. Open Spotify Privacy Settings",
    guideStep1Desc: "Log into your Spotify account in your browser and visit the Account Privacy page.",
    guideStep1Btn: "Open Spotify Privacy Page",
    guideStep2Title: "2. Request Extended Streaming History",
    guideStep2Desc: "Scroll down to the 'Download your data' section. Make sure to check the box for <strong>Extended streaming history</strong>. Then click <strong>Request data</strong>.",
    guideStep2Tip: "Important: Do not select only 'Account data' (it only covers the last 1 year). Be sure to select <strong>Extended streaming history</strong> for your full lifetime history!",
    guideStep3Title: "3. Confirm the Request via Email",
    guideStep3Desc: "Spotify will send a confirmation email with a link. Open it and click <strong>Confirm</strong> to start processing.",
    guideStep4Title: "4. Wait for Spotify to Prepare Your Files",
    guideStep4Desc: "Spotify compiles your data over several days (usually between <strong>2 to 5 days</strong>, up to 30 days). You'll receive an email as soon as it's ready.",
    guideStep5Title: "5. Download & Drop It Here!",
    guideStep5Desc: "Download the ZIP file from the email. You can drag and drop the entire ZIP file directly onto the upload screen—<strong>no unzipping needed</strong>!",
    guideCtaReady: "I have my file ready →",
  },
  it: {
    uploadTitle: "Il Tuo Spotify Wrapped",
    uploadSubtitle: "Carica la tua cronologia di ascolto per esplorare le statistiche, i brani più ascoltati e altro.",
    dropText: "Trascina il tuo file JSON o ZIP qui",
    dropHint: "oppure clicca per sfogliare",
    nameLabel: "IL TUO NOME",
    namePlaceholder: "Inserisci il tuo nome",
    loadingText: "Elaborazione della cronologia di ascolto…",
    changeHistory: "Cambia cronologia",
    wrappedTitle: " — Spotify Wrapped",
    defaultTitle: "Spotify Wrapped",
    tabTotal: "Totale",
    tabByYear: "Per Anno",
    tabRecap: "Riepilogo",
    tabSearch: "Cerca",
    searchPlaceholder: "Cerca brani e artisti...",
    searchNoResults: "Nessun risultato trovato per",
    searchPillAll: "Tutti",
    searchPillSongs: "Brani",
    searchPillArtists: "Artisti",
    backToSearch: "Torna alla ricerca",
    backToTab: "Torna a",
    totalTracksListened: "Brani ascoltati totali",
    uniqueTracksListened: "Brani unici ascoltati",
    totalTime: "Tempo totale",
    minutes: "minuti",
    thRank: "#",
    thTitle: "Titolo",
    thTimesListened: "Ascolti",
    thAlbum: "Album",
    thFirstListened: "Primo Ascolto",
    thDuration: "Durata",
    thTotalTime: "Tempo Totale",
    showMore: "Mostra di più",
    showLess: "Mostra di meno",
    errorInvalidJson: "File JSON non valido. Carica una cronologia di ascolto Spotify valida.",
    errorEmptyFile: "Il file sembra essere vuoto o non contiene stream validi.",
    errorInvalidZip: "File ZIP non valido o corrotto. Riprova.",
    errorNoStreamsInZip: "Nessun file JSON valido della cronologia di ascolto trovato nello ZIP.",
    lastUpdate: "Ultimo aggiornamento",
    // Recap
    recapTotalMinutes: "Minuti Totali",
    recapTotalSongs: "Brani Ascoltati",
    recapUniqueSongs: "Brani Unici",
    recapTotalArtists: "Artisti Totali",
    recapTopArtists: "Artisti Più Ascoltati",
    recapTopSongs: "Brani Più Ascoltati",
    recapMonthlyActivity: "Attività Mensile",
    recapHourlyActivity: "Ore di Ascolto",
    recapPlays: "ascolti",
    recapMin: "min",
    recapSelectYear: "Anno:",
    recapAllYears: "Tutti gli anni",
    monthNames: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"],
    // Stats Tab
    tabStats: "Statistiche",
    statsAllSongs: "Tutti i brani",
    statsThisSong: "Questo brano",
    statsGeneralOverview: "Record dell'account e statistiche",
    statsStreamsOverTime: "Ascolti nel tempo",
    statsMonthlyActivity: "Attività Mensile",
    statsListeningHours: "Ore di Ascolto",
    statsRecordAllTime: "Più ascoltato (Sempre)",
    statsRecordLastYear: "Più ascoltato (Ultimo anno)",
    statsRecordStreak: "Più ascolti di fila",
    statsRecord1Day: "Record in 1 Giorno (24h)",
    statsRecord7Days: "Record in 7 Giorni",
    statsRecord30Days: "Record in 30 Giorni",
    statsRecord365Days: "Record in 365 Giorni",
    statsStreakCount: "di fila",
    statsPeakCount: "ascolti",
    scale1Day: "1 Giorno",
    scale1Week: "1 Settimana",
    scale2Weeks: "2 Settimane",
    scale1Month: "1 Mese",
    scale3Months: "3 Mesi",
    scale6Months: "6 Mesi",
    scale1Year: "1 Anno",
    scale3Years: "3 Anni",
    scale6Years: "6 Anni",
    scale12Years: "12 Anni",
    scaleAllTime: "Tutto",
    hourFrom: "Da:",
    hourTo: "A:",
    allHours: "Tutte le ore",
    searchSongPlaceholder: "Cerca un brano...",
    emptySearchTitle: "Cerca qualsiasi brano",
    emptySearchDesc: "Scrivi il nome di un brano sopra o clicca il pulsante Statistiche accanto a qualsiasi traccia nella tua libreria per visualizzarne la cronologia dettagliata.",
    songStatsBtn: "Stats",
    badgeTotalPlays: "Ascolti Totali",
    badgeTotalTime: "Tempo Totale",
    badgeDuration: "Durata Stimata",
    badgeFirstListened: "Primo Ascolto",
    badgeAllTimeRank: "Posizione Globale",
    badgePersonalStreak: "Record di Fila",
    badgePeak1Day: "Record 1 Giorno",
    badgePeak7Days: "Record 7 Giorni",
    // Guide Screen
    whereToFindData: "Dove lo trovo?",
    guideBackBtn: "Torna al caricamento",
    guideTitle: "Come scaricare i tuoi dati Spotify",
    guideSubtitle: "Segui questa guida passo passo per ottenere la tua cronologia completa di ascolto da Spotify.",
    guideStep1Title: "1. Apri le Impostazioni Privacy di Spotify",
    guideStep1Desc: "Accedi al tuo account Spotify nel browser e visita la pagina della Privacy dell'account.",
    guideStep1Btn: "Apri Pagina Privacy Spotify",
    guideStep2Title: "2. Richiedi la Cronologia di Ascolto Estesa",
    guideStep2Desc: "Scorri fino alla sezione 'Scarica i tuoi dati'. Assicurati di spuntare la casella <strong>Cronologia di ascolto estesa</strong>. Poi clicca su <strong>Richiedi dati</strong>.",
    guideStep2Tip: "Importante: Non selezionare solo 'Dati dell'account' (copre solo l'ultimo anno). Assicurati di scegliere <strong>Cronologia di ascolto estesa</strong> per avere tutti gli anni!",
    guideStep3Title: "3. Conferma la richiesta via Email",
    guideStep3Desc: "Spotify ti invierà un'email di verifica con un link. Aprila e clicca su <strong>Conferma</strong> per avviare l'elaborazione.",
    guideStep4Title: "4. Attendi la preparazione dei file",
    guideStep4Desc: "Spotify impiega solitamente tra <strong>2 e 5 giorni</strong> (fino a 30 giorni) per creare l'archivio. Riceverai un'email quando i file saranno pronti per il download.",
    guideStep5Title: "5. Scarica e trascina il file qui!",
    guideStep5Desc: "Scarica il file ZIP dall'email. Puoi trascinare direttamente l'intero file ZIP nella schermata di caricamento—<strong>senza doverlo estrarre</strong>!",
    guideCtaReady: "Ho già il mio file →",
  },
};

// ===== APP STATE =====
const state = {
  language: "en",
  viewMode: "byYear",
  userName: "",
  processedData: null,
  sortConfigs: {}, // key: "total" | year string, value: { column, direction }
  expandedYears: new Set(),
  displayLimits: {}, // key: "total" | year string, value: number of items shown
  artworkCache: {},  // trackUri -> imageUrl or null
  recapYear: "all",
  searchQuery: "",
  searchFilter: "all",
  previousViewMode: "",
  expandedSearchItems: new Set(),
  // Stats Tab State
  selectedStatsSongUri: null,
  statsAllSongsScale: "all",
  statsAllSongsTargetTime: null,
  statsAllSongsHourFrom: 0,
  statsAllSongsHourTo: 23,
  statsAllSongsMonthlyYear: "all",
  statsSongScale: "all",
  statsSongTargetTime: null,
  statsSongHourFrom: 0,
  statsSongHourTo: 23,
  statsSongMonthlyYear: "all",
};

const DEFAULT_DISPLAY_LIMIT = 100;
const DISPLAY_INCREMENT = 100;

// ===== HELPERS =====
function t(key) {
  return (i18n[state.language] && i18n[state.language][key]) || key;
}

function formatMinutes(ms) {
  const totalMin = Math.round(ms / 60000);
  return totalMin.toLocaleString();
}

function formatDuration(ms) {
  const totalSec = Math.round(ms / 1000);
  const min = Math.floor(totalSec / 60);
  const sec = totalSec % 60;
  return `${min}:${sec.toString().padStart(2, "0")}`;
}

function formatDate(isoString) {
  const d = new Date(isoString);
  const day = d.getDate().toString().padStart(2, "0");
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const year = d.getFullYear();
  return `${day}/${month}/${year}`;
}

function formatRecordDateRange(start, end) {
  if (!start) return "";
  const sStr = formatDate(start);
  if (!end) return sStr;
  const eStr = formatDate(end);
  return (sStr && eStr && sStr !== eStr) ? `${sStr} - ${eStr}` : sStr;
}

function formatNumber(n) {
  return n.toLocaleString();
}

function getTrackId(uri) {
  if (!uri || uri.startsWith("local:")) return null;
  const parts = uri.split(":");
  return parts[parts.length - 1];
}

function generateGradient(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h1 = Math.abs(hash) % 360;
  const h2 = (h1 + 40) % 360;
  return `linear-gradient(135deg, hsl(${h1}, 55%, 35%), hsl(${h2}, 60%, 25%))`;
}

function getInitials(trackName, artistName) {
  const t = (trackName || "?")[0];
  const a = (artistName || "?")[0];
  return (t + a).toUpperCase();
}

function estimateTrackDuration(durations) {
  if (!durations || durations.length === 0) return 0;
  if (durations.length === 1) return durations[0];

  const freq = {};
  for (let i = 0; i < durations.length; i++) {
    const ms = durations[i];
    const sec = Math.round(ms / 1000);
    if (!freq[sec]) {
      freq[sec] = { count: 0, maxMs: 0 };
    }
    freq[sec].count++;
    if (ms > freq[sec].maxMs) {
      freq[sec].maxMs = ms;
    }
  }

  let maxCount = 0;
  let bestSec = -1;
  let bestMs = 0;

  for (const secStr in freq) {
    const sec = parseInt(secStr);
    const entry = freq[secStr];
    if (entry.count > maxCount) {
      maxCount = entry.count;
      bestSec = sec;
      bestMs = entry.maxMs;
    } else if (entry.count === maxCount) {
      if (sec > bestSec) {
        bestSec = sec;
        bestMs = entry.maxMs;
      }
    }
  }

  return bestMs;
}

function getSpotifyTrackUrl(track) {
  return `https://open.spotify.com/search/${encodeURIComponent((track.trackName || track.master_metadata_track_name || "") + " " + (track.artistName || track.master_metadata_album_artist_name || ""))}`;
}

function getSpotifyArtistUrl(artistName) {
  return `https://open.spotify.com/search/${encodeURIComponent(artistName)}`;
}

function getSpotifyAlbumUrl(albumName, artistName) {
  return `https://open.spotify.com/search/${encodeURIComponent(albumName + " " + artistName)}`;
}

// ===== NORMALIZE STREAM DATA =====
// Supports both Spotify export formats:
// Extended: { ts, ms_played, master_metadata_track_name, master_metadata_album_artist_name, master_metadata_album_album_name, spotify_track_uri }
// Basic:    { endTime, msPlayed, trackName, artistName }
function normalizeStream(s) {
  // Extended format
  if (s.ts !== undefined && s.ms_played !== undefined) {
    return {
      ts: s.ts,
      ms_played: s.ms_played,
      trackName: s.master_metadata_track_name || null,
      artistName: s.master_metadata_album_artist_name || "Unknown",
      albumName: s.master_metadata_album_album_name || "",
      trackUri: s.spotify_track_uri || null,
    };
  }
  // Basic format
  if (s.endTime !== undefined && s.msPlayed !== undefined) {
    return {
      ts: s.endTime.replace(" ", "T") + ":00Z",
      ms_played: s.msPlayed,
      trackName: s.trackName || null,
      artistName: s.artistName || "Unknown",
      albumName: "",
      trackUri: null,
    };
  }
  return null;
}

// ===== DATA PROCESSING (main thread) =====
function processRawData(rawData) {
  const MIN_MS = 3000;

  // Normalize all streams
  const normalized = [];
  for (let i = 0; i < rawData.length; i++) {
    const n = normalizeStream(rawData[i]);
    if (n && n.ms_played > MIN_MS && n.trackName) {
      normalized.push(n);
    }
  }

  if (normalized.length === 0) {
    return { error: "empty" };
  }

  // Sort normalized streams chronologically
  normalized.sort((a, b) => new Date(a.ts).getTime() - new Date(b.ts).getTime());

  // Build a synthetic URI for tracks that don't have one (basic format)
  // We use artistName + trackName as a key
  for (let i = 0; i < normalized.length; i++) {
    if (!normalized[i].trackUri) {
      normalized[i].trackUri = "local:" + normalized[i].artistName + ":" + normalized[i].trackName;
    }
  }

  const earliestTs = normalized[0].ts;
  const latestTs = normalized[normalized.length - 1].ts;
  const earliestMs = new Date(earliestTs).getTime();
  const latestMs = new Date(latestTs).getTime();
  const totalSpanMs = Math.max(latestMs - earliestMs, 0);
  const allStreamTimestamps = [];

  const trackMap = {};
  const artistMap = {};
  const albumMap = {};
  const yearMap = {};
  const monthlyMap = {};
  const hourlyMap = {};
  let totalTimeMs = 0;

  for (let i = 0; i < normalized.length; i++) {
    const s = normalized[i];
    const uri = s.trackUri;
    const trackName = s.trackName;
    const artistName = s.artistName;
    const albumName = s.albumName;
    const ms = s.ms_played;
    const ts = s.ts;
    const date = new Date(ts);
    const year = date.getFullYear().toString();
    const monthKey = year + "-" + (date.getMonth() + 1).toString().padStart(2, "0");
    const hour = date.getHours();
    const timeMs = date.getTime();

    totalTimeMs += ms;
    allStreamTimestamps.push(timeMs);

    // Global track aggregation
    if (!trackMap[uri]) {
      trackMap[uri] = {
        trackUri: uri,
        trackName: trackName,
        artistName: artistName,
        albumName: albumName,
        timesListened: 0,
        totalTimeMs: 0,
        firstListened: ts,
        estimatedDurationMs: 0,
        durations: [],
        years: {},
        streamTimestamps: [],
        monthlyMap: {},
        hourlyMap: {},
        maxStreak: 1,
      };
    }
    const track = trackMap[uri];
    track.timesListened++;
    track.totalTimeMs += ms;
    track.durations.push(ms);
    track.streamTimestamps.push(timeMs);

    if (!track.monthlyMap[monthKey]) track.monthlyMap[monthKey] = { count: 0, totalTimeMs: 0 };
    track.monthlyMap[monthKey].count++;
    track.monthlyMap[monthKey].totalTimeMs += ms;

    if (!track.hourlyMap[hour]) track.hourlyMap[hour] = { count: 0, totalTimeMs: 0 };
    track.hourlyMap[hour].count++;
    track.hourlyMap[hour].totalTimeMs += ms;

    if (ts < track.firstListened) track.firstListened = ts;

    if (!track.years[year]) {
      track.years[year] = { timesListened: 0, totalTimeMs: 0 };
    }
    track.years[year].timesListened++;
    track.years[year].totalTimeMs += ms;

    // Artist aggregation
    if (!artistMap[artistName]) {
      artistMap[artistName] = { name: artistName, totalTimeMs: 0, timesListened: 0, uniqueTracks: new Set(), years: {} };
    }
    artistMap[artistName].totalTimeMs += ms;
    artistMap[artistName].timesListened++;
    artistMap[artistName].uniqueTracks.add(uri);

    if (!artistMap[artistName].years[year]) {
      artistMap[artistName].years[year] = { timesListened: 0, totalTimeMs: 0 };
    }
    artistMap[artistName].years[year].timesListened++;
    artistMap[artistName].years[year].totalTimeMs += ms;

    // Album aggregation (only if albumName is not empty)
    if (albumName) {
      const albumKey = albumName + " - " + artistName;
      if (!albumMap[albumKey]) {
        albumMap[albumKey] = {
          name: albumName,
          artistName: artistName,
          totalTimeMs: 0,
          timesListened: 0,
          uniqueTracks: new Set(),
          years: {},
        };
      }
      albumMap[albumKey].totalTimeMs += ms;
      albumMap[albumKey].timesListened++;
      albumMap[albumKey].uniqueTracks.add(uri);

      if (!albumMap[albumKey].years[year]) {
        albumMap[albumKey].years[year] = { timesListened: 0, totalTimeMs: 0 };
      }
      albumMap[albumKey].years[year].timesListened++;
      albumMap[albumKey].years[year].totalTimeMs += ms;
    }

    // Year aggregation
    if (!yearMap[year]) {
      yearMap[year] = { 
        trackMap: {}, 
        artistMap: {}, 
        monthlyMap: {}, 
        hourlyMap: {}, 
        totalTimeMs: 0, 
        totalStreams: 0 
      };
    }
    const yData = yearMap[year];
    yData.totalTimeMs += ms;
    yData.totalStreams++;

    if (!yData.trackMap[uri]) {
      yData.trackMap[uri] = {
        trackUri: uri,
        trackName: trackName,
        artistName: artistName,
        albumName: albumName,
        timesListened: 0,
        totalTimeMs: 0,
        firstListened: ts,
        estimatedDurationMs: 0,
      };
    }
    const yt = yData.trackMap[uri];
    yt.timesListened++;
    yt.totalTimeMs += ms;
    if (ts < yt.firstListened) yt.firstListened = ts;

    if (!yData.artistMap[artistName]) {
      yData.artistMap[artistName] = { name: artistName, totalTimeMs: 0, timesListened: 0, uniqueTracks: new Set() };
    }
    yData.artistMap[artistName].totalTimeMs += ms;
    yData.artistMap[artistName].timesListened++;
    yData.artistMap[artistName].uniqueTracks.add(uri);

    if (!yData.monthlyMap[monthKey]) yData.monthlyMap[monthKey] = { totalTimeMs: 0, count: 0 };
    yData.monthlyMap[monthKey].totalTimeMs += ms;
    yData.monthlyMap[monthKey].count++;

    if (!yData.hourlyMap[hour]) yData.hourlyMap[hour] = { totalTimeMs: 0, count: 0 };
    yData.hourlyMap[hour].totalTimeMs += ms;
    yData.hourlyMap[hour].count++;

    // Monthly
    if (!monthlyMap[monthKey]) monthlyMap[monthKey] = { totalTimeMs: 0, count: 0 };
    monthlyMap[monthKey].totalTimeMs += ms;
    monthlyMap[monthKey].count++;

    // Hourly
    if (!hourlyMap[hour]) hourlyMap[hour] = { totalTimeMs: 0, count: 0 };
    hourlyMap[hour].totalTimeMs += ms;
    hourlyMap[hour].count++;
  }

  // Post-process global track durations using our mode-based estimator
  for (const track of Object.values(trackMap)) {
    track.estimatedDurationMs = estimateTrackDuration(track.durations);
    delete track.durations; // Free memory
  }

  // Update year-specific track durations to match the global estimate
  for (const yearData of Object.values(yearMap)) {
    for (const [uri, yt] of Object.entries(yearData.trackMap)) {
      yt.estimatedDurationMs = trackMap[uri].estimatedDurationMs;
    }
  }

  // Convert track map to sorted array
  const globalTracks = Object.values(trackMap).sort((a, b) => b.timesListened - a.timesListened);

  // Convert artist map
  const artists = Object.values(artistMap)
    .map((a) => {
      const topTrack = globalTracks.find((t) => t.artistName === a.name);
      return {
        name: a.name,
        totalTimeMs: a.totalTimeMs,
        timesListened: a.timesListened,
        uniqueTracks: a.uniqueTracks.size,
        topTrackUri: topTrack ? topTrack.trackUri : null,
        years: a.years,
      };
    })
    .sort((a, b) => b.totalTimeMs - a.totalTimeMs);

  // Convert album map
  const albums = Object.values(albumMap)
    .map((a) => {
      const topTrack = globalTracks.find((t) => t.albumName === a.name && t.artistName === a.artistName);
      return {
        name: a.name,
        artistName: a.artistName,
        totalTimeMs: a.totalTimeMs,
        timesListened: a.timesListened,
        uniqueTracks: a.uniqueTracks.size,
        trackUris: Array.from(a.uniqueTracks),
        topTrackUri: topTrack ? topTrack.trackUri : null,
        years: a.years,
      };
    })
    .sort((a, b) => b.totalTimeMs - a.totalTimeMs);

  // Convert year data
  const years = {};
  for (const [year, data] of Object.entries(yearMap)) {
    const tracks = Object.values(data.trackMap).sort((a, b) => b.timesListened - a.timesListened);
    const artists = Object.values(data.artistMap)
      .map((a) => {
        const topTrack = tracks.find((t) => t.artistName === a.name);
        return {
          name: a.name,
          totalTimeMs: a.totalTimeMs,
          timesListened: a.timesListened,
          uniqueTracks: a.uniqueTracks.size,
          topTrackUri: topTrack ? topTrack.trackUri : null,
        };
      })
      .sort((a, b) => b.totalTimeMs - a.totalTimeMs);

    const yHourly = {};
    for (let h = 0; h < 24; h++) {
      yHourly[h] = data.hourlyMap[h] || { totalTimeMs: 0, count: 0 };
    }

    years[year] = {
      totalTracksListened: data.totalStreams,
      uniqueTracksListened: tracks.length,
      totalTimeMs: data.totalTimeMs,
      totalArtists: artists.length,
      tracks: tracks,
      artists: artists,
      monthly: data.monthlyMap,
      hourly: yHourly,
    };
  }

  // Fill hourly map
  for (let h = 0; h < 24; h++) {
    if (!hourlyMap[h]) hourlyMap[h] = { totalTimeMs: 0, count: 0 };
  }

  // Calculate consecutive streams streak (all time and per track)
  let maxStreak = 0;
  let maxStreakTrackUri = null;
  let maxStreakStart = null;
  let maxStreakEnd = null;

  let currentStreak = 0;
  let currentStreakUri = null;
  let currentStreakStart = null;

  for (let i = 0; i < normalized.length; i++) {
    const s = normalized[i];
    if (s.trackUri === currentStreakUri) {
      currentStreak++;
    } else {
      if (currentStreakUri && trackMap[currentStreakUri]) {
        if (currentStreak > (trackMap[currentStreakUri].maxStreak || 0)) {
          trackMap[currentStreakUri].maxStreak = currentStreak;
        }
      }
      if (currentStreak > maxStreak) {
        maxStreak = currentStreak;
        maxStreakTrackUri = currentStreakUri;
        maxStreakStart = currentStreakStart;
        maxStreakEnd = normalized[i - 1].ts;
      }
      currentStreakUri = s.trackUri;
      currentStreak = 1;
      currentStreakStart = s.ts;
    }
  }
  if (currentStreakUri && trackMap[currentStreakUri]) {
    if (currentStreak > (trackMap[currentStreakUri].maxStreak || 0)) {
      trackMap[currentStreakUri].maxStreak = currentStreak;
    }
    if (currentStreak > maxStreak) {
      maxStreak = currentStreak;
      maxStreakTrackUri = currentStreakUri;
      maxStreakStart = currentStreakStart;
      maxStreakEnd = normalized[normalized.length - 1].ts;
    }
  }

  // Two-pointer sliding window to find peak streams in 1, 7, 30, and 365 days
  function getPeakWindow(candidateTracks, windowMs) {
    let bestCount = 0;
    let bestTrack = null;
    let bestStart = null;
    let bestEnd = null;

    for (let i = 0; i < candidateTracks.length; i++) {
      const t = candidateTracks[i];
      if (t.timesListened <= bestCount) break;
      const tsList = t.streamTimestamps;
      if (!tsList || tsList.length <= bestCount) continue;

      let left = 0;
      for (let right = 0; right < tsList.length; right++) {
        while (tsList[right] - tsList[left] > windowMs) {
          left++;
        }
        const count = right - left + 1;
        if (count > bestCount) {
          bestCount = count;
          bestTrack = t;
          bestStart = tsList[left];
          bestEnd = tsList[right];
        }
      }
    }
    return { track: bestTrack, count: bestCount, start: bestStart, end: bestEnd };
  }

  const peak1Day = getPeakWindow(globalTracks, 24 * 3600 * 1000);
  const peak7Days = getPeakWindow(globalTracks, 7 * 24 * 3600 * 1000);
  const peak30Days = getPeakWindow(globalTracks, 30 * 24 * 3600 * 1000);
  const peak365Days = getPeakWindow(globalTracks, 365 * 24 * 3600 * 1000);

  const yearKeysSorted = Object.keys(yearMap).sort((a, b) => b - a);
  const latestYear = yearKeysSorted[0] || null;
  const topTrackLastYear = (latestYear && years[latestYear] && years[latestYear].tracks[0]) ? years[latestYear].tracks[0] : null;

  return {
    global: {
      totalTracksListened: normalized.length,
      uniqueTracksListened: globalTracks.length,
      totalTimeMs: totalTimeMs,
      totalArtists: artists.length,
      lastUpdateTs: latestTs,
      earliestTs: earliestTs,
      totalSpanMs: totalSpanMs,
    },
    tracks: globalTracks,
    trackMap: trackMap,
    years: years,
    artists: artists,
    albums: albums,
    monthly: monthlyMap,
    hourly: hourlyMap,
    allStreamTimestamps: allStreamTimestamps,
    records: {
      allTime: globalTracks[0] || null,
      lastYear: { track: topTrackLastYear, year: latestYear },
      streak: { track: trackMap[maxStreakTrackUri] || null, count: maxStreak, start: maxStreakStart, end: maxStreakEnd },
      peak1Day: peak1Day,
      peak7Days: peak7Days,
      peak30Days: peak30Days,
      peak365Days: peak365Days,
    },
  };
}

// ===== ARTWORK FETCHING =====
const artworkQueue = [];
let artworkFetching = false;

async function fetchArtwork(trackUri, imgElement) {
  const trackId = getTrackId(trackUri);
  if (!trackId) return;

  // Check cache
  if (state.artworkCache[trackUri] !== undefined) {
    if (state.artworkCache[trackUri]) {
      imgElement.src = state.artworkCache[trackUri];
      imgElement.style.display = "block";
      imgElement.previousElementSibling && (imgElement.previousElementSibling.style.display = "none");
    }
    return;
  }

  artworkQueue.push({ trackUri, trackId, imgElement });
  processArtworkQueue();
}

async function processArtworkQueue() {
  if (artworkFetching || artworkQueue.length === 0) return;
  artworkFetching = true;

  while (artworkQueue.length > 0) {
    const { trackUri, trackId, imgElement } = artworkQueue.shift();

    // Skip if already cached while in queue
    if (state.artworkCache[trackUri] !== undefined) {
      if (state.artworkCache[trackUri] && imgElement.isConnected) {
        imgElement.src = state.artworkCache[trackUri];
        imgElement.style.display = "block";
        if (imgElement.previousElementSibling) imgElement.previousElementSibling.style.display = "none";
      }
      continue;
    }

    try {
      const url = `https://open.spotify.com/oembed?url=https://open.spotify.com/track/${trackId}`;
      const resp = await fetch(url);
      if (!resp.ok) throw new Error("Not ok");
      const data = await resp.json();
      let thumbUrl = data.thumbnail_url || null;
      if (thumbUrl) {
        // Robustly replace whatever resolution suffix Spotify returns (e.g. 0000b273, 00001e02, 00005f1f) with the 64x64px thumbnail suffix (00004851)
        thumbUrl = thumbUrl.replace(/\/image\/([a-f0-9]{8})0000[a-f0-9]{4}/, "/image/$100004851");
      }
      state.artworkCache[trackUri] = thumbUrl;

      if (thumbUrl && imgElement.isConnected) {
        imgElement.src = thumbUrl;
        imgElement.style.display = "block";
        if (imgElement.previousElementSibling) imgElement.previousElementSibling.style.display = "none";
      }
    } catch {
      state.artworkCache[trackUri] = null;
    }

    // Small delay to avoid rate limiting
    await new Promise((r) => setTimeout(r, 50));
  }

  artworkFetching = false;
}

// ===== INTERSECTION OBSERVER FOR LAZY ARTWORK =====
let artworkObserver = null;

function setupArtworkObserver() {
  if (artworkObserver) artworkObserver.disconnect();

  artworkObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const container = entry.target;
          const trackUri = container.dataset.trackUri;
          const img = container.querySelector("img");
          if (trackUri && img) {
            fetchArtwork(trackUri, img);
          }
          artworkObserver.unobserve(container);
        }
      });
    },
    { rootMargin: "200px" }
  );
}

function observeArtwork(container) {
  if (artworkObserver) artworkObserver.observe(container);
}

// ===== DOM ELEMENTS =====
const $uploadScreen = document.getElementById("upload-screen");
const $loadingOverlay = document.getElementById("loading-overlay");
const $dashboard = document.getElementById("dashboard");
const $dropZone = document.getElementById("drop-zone");
const $fileInput = document.getElementById("file-input");
const $userName = document.getElementById("user-display-alias");
const $uploadError = document.getElementById("upload-error");
const $dashboardTitle = document.getElementById("dashboard-title");
const $globalStatsBar = document.getElementById("global-stats-bar");
const $content = document.getElementById("content");
const $changeHistoryBtn = document.getElementById("change-history-btn");
const $viewTabs = document.getElementById("view-tabs");

// ===== LANGUAGE SWITCHING =====
function setLanguage(lang) {
  state.language = lang;

  // Update all language buttons
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update static i18n texts
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    el.innerHTML = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  // If dashboard is visible, refresh it
  if (state.processedData) {
    updateDashboardTitle();
    renderGlobalStats();
    renderCurrentView();
  }
}

// ===== FILE HANDLING =====
// Helper to parse JSON text, supporting robust fallbacks
function parseJsonText(rawText) {
  // Strip BOM if present
  if (rawText.charCodeAt(0) === 0xfeff) {
    rawText = rawText.slice(1);
  }

  rawText = rawText.trim();

  let rawData;

  // Attempt 1: direct parse
  try {
    rawData = JSON.parse(rawText);
    if (rawData && !Array.isArray(rawData) && typeof rawData === "object") {
      const keys = Object.keys(rawData);
      for (const key of keys) {
        if (Array.isArray(rawData[key])) { rawData = rawData[key]; break; }
      }
    }
  } catch (err1) {
    console.warn("[Spotify Wrapped] Direct parse failed:", err1.message);
    console.log("[Spotify Wrapped] Falling back to object-by-object extraction…");

    // Fallback: extract individual {...} objects one by one
    // This handles corrupted entries, concatenated files, missing commas, etc.
    rawData = [];
    let depth = 0;
    let start = -1;
    let skipped = 0;

    for (let i = 0; i < rawText.length; i++) {
      const ch = rawText[i];
      if (ch === "{") {
        if (depth === 0) start = i;
        depth++;
      } else if (ch === "}") {
        depth--;
        if (depth === 0 && start >= 0) {
          try {
            rawData.push(JSON.parse(rawText.substring(start, i + 1)));
          } catch {
            skipped++;
          }
          start = -1;
        }
      } else if (ch === '"') {
        // Skip string content including escaped characters
        i++;
        while (i < rawText.length) {
          if (rawText[i] === "\\") { i++; }
          else if (rawText[i] === '"') { break; }
          i++;
        }
      }
    }

    console.log("[Spotify Wrapped] Extracted", rawData.length, "objects,", skipped, "skipped due to errors");
  }
  return Array.isArray(rawData) ? rawData : null;
}

// Process normalized stream history array and render dashboard
function processAndShowData(rawData, errorText) {
  console.log("[Spotify Wrapped] Ready to process", rawData.length, "entries. First entry keys:", rawData[0] ? Object.keys(rawData[0]) : "empty");

  // Process on main thread with a setTimeout to let the loading spinner render
  setTimeout(() => {
    try {
      const result = processRawData(rawData);

      if (result.error) {
        console.error("[Spotify Wrapped] Processing error:", result.error);
        $loadingOverlay.classList.add("hidden");
        $uploadScreen.classList.remove("hidden");
        showError(result.error === "empty" ? t("errorEmptyFile") : errorText);
        return;
      }

      state.processedData = result;

      // Initialize sort configs
      state.sortConfigs = { total: { column: "timesListened", direction: "desc" } };
      state.displayLimits = { total: DEFAULT_DISPLAY_LIMIT };

      const yearKeys = Object.keys(result.years).sort((a, b) => b - a);
      yearKeys.forEach((y) => {
        state.sortConfigs[y] = { column: "timesListened", direction: "desc" };
        state.displayLimits[y] = DEFAULT_DISPLAY_LIMIT;
      });

      // Expand the most recent year by default
      state.expandedYears.clear();
      if (yearKeys.length > 0) state.expandedYears.add(yearKeys[0]);

      // Show dashboard
      $loadingOverlay.classList.add("hidden");
      $dashboard.classList.remove("hidden");
      $dashboard.classList.add("fade-in");

      setupArtworkObserver();
      updateDashboardTitle();
      renderGlobalStats();
      renderCurrentView();

      console.log("[Spotify Wrapped] Dashboard rendered. Years:", yearKeys, "Total tracks:", result.global.uniqueTracksListened);
    } catch (procErr) {
      console.error("[Spotify Wrapped] Processing exception:", procErr);
      $loadingOverlay.classList.add("hidden");
      $uploadScreen.classList.remove("hidden");
      showError(errorText);
    }
  }, 50);
}

// Main file upload handler
function handleFile(file) {
  if (!file) return;
  const name = file.name.toLowerCase();
  const isJson = name.endsWith(".json");
  const isZip = name.endsWith(".zip");

  if (!isJson && !isZip) {
    showError(t("errorInvalidJson"));
    return;
  }

  $uploadError.classList.add("hidden");
  $uploadScreen.classList.add("hidden");
  $loadingOverlay.classList.remove("hidden");

  state.userName = $userName.value.trim();

  if (isJson) {
    const reader = new FileReader();
    reader.onload = function (e) {
      const rawData = parseJsonText(e.target.result);
      if (!rawData || rawData.length === 0) {
        $loadingOverlay.classList.add("hidden");
        $uploadScreen.classList.remove("hidden");
        showError(t("errorInvalidJson"));
        return;
      }
      processAndShowData(rawData, t("errorInvalidJson"));
    };
    reader.onerror = function (err) {
      console.error("[Spotify Wrapped] FileReader error:", err);
      $loadingOverlay.classList.add("hidden");
      $uploadScreen.classList.remove("hidden");
      showError(t("errorInvalidJson"));
    };
    reader.readAsText(file);
  } else if (isZip) {
    if (typeof JSZip === "undefined") {
      $loadingOverlay.classList.add("hidden");
      $uploadScreen.classList.remove("hidden");
      showError("JSZip library not loaded. Please ensure you are connected to the internet.");
      return;
    }

    const reader = new FileReader();
    reader.onload = async function (e) {
      try {
        const arrayBuffer = e.target.result;
        const zip = await JSZip.loadAsync(arrayBuffer);
        
        // Find matching JSON files
        const jsonFiles = [];
        zip.forEach((relativePath, zipEntry) => {
          if (!zipEntry.dir && relativePath.toLowerCase().endsWith(".json")) {
            const baseName = relativePath.split('/').pop().toLowerCase();
            // Match Spotify streaming history patterns
            if (baseName.includes("streaming_history_audio") || 
                baseName.includes("streaminghistory") || 
                baseName.includes("streaming_history_video")) {
              jsonFiles.push(zipEntry);
            }
          }
        });

        // Fallback: if no files match the naming convention, let's take all JSON files
        if (jsonFiles.length === 0) {
          zip.forEach((relativePath, zipEntry) => {
            if (!zipEntry.dir && relativePath.toLowerCase().endsWith(".json")) {
              jsonFiles.push(zipEntry);
            }
          });
        }

        if (jsonFiles.length === 0) {
          $loadingOverlay.classList.add("hidden");
          $uploadScreen.classList.remove("hidden");
          showError(t("errorNoStreamsInZip"));
          return;
        }

        console.log("[Spotify Wrapped] Found", jsonFiles.length, "JSON file(s) in ZIP. Extracting...");

        let combinedData = [];

        for (const zipEntry of jsonFiles) {
          try {
            const fileText = await zipEntry.async("string");
            const parsed = parseJsonText(fileText);
            if (parsed && parsed.length > 0) {
              // Ensure we only concatenate arrays containing actual Spotify stream objects
              const hasStreams = parsed.some(item => normalizeStream(item) !== null);
              if (hasStreams) {
                combinedData = combinedData.concat(parsed);
                console.log(`[Spotify Wrapped] Successfully extracted ${parsed.length} streams from ${zipEntry.name}`);
              } else {
                console.log(`[Spotify Wrapped] Skipped ${zipEntry.name}: does not contain Spotify streams`);
              }
            }
          } catch (fileErr) {
            console.warn(`[Spotify Wrapped] Failed to parse file ${zipEntry.name}:`, fileErr);
          }
        }

        if (combinedData.length === 0) {
          $loadingOverlay.classList.add("hidden");
          $uploadScreen.classList.remove("hidden");
          showError(t("errorNoStreamsInZip"));
          return;
        }

        console.log(`[Spotify Wrapped] Total extracted streams from ZIP: ${combinedData.length}`);
        processAndShowData(combinedData, t("errorInvalidZip"));

      } catch (zipErr) {
        console.error("[Spotify Wrapped] ZIP loading error:", zipErr);
        $loadingOverlay.classList.add("hidden");
        $uploadScreen.classList.remove("hidden");
        showError(t("errorInvalidZip"));
      }
    };
    reader.onerror = function (err) {
      console.error("[Spotify Wrapped] FileReader error for ZIP:", err);
      $loadingOverlay.classList.add("hidden");
      $uploadScreen.classList.remove("hidden");
      showError(t("errorInvalidZip"));
    };
    reader.readAsArrayBuffer(file);
  }
}

function showError(msg) {
  $uploadError.textContent = msg;
  $uploadError.classList.remove("hidden");
}

// ===== DASHBOARD RENDERING =====
function updateDashboardTitle() {
  if (state.userName) {
    $dashboardTitle.innerHTML = `<span class="accent">${escapeHtml(state.userName)}</span>${t("wrappedTitle")}`;
  } else {
    $dashboardTitle.textContent = t("defaultTitle");
  }

  const $lastUpdate = document.getElementById("dashboard-last-update");
  if ($lastUpdate && state.processedData && state.processedData.global.lastUpdateTs) {
    const formattedDate = formatDate(state.processedData.global.lastUpdateTs);
    $lastUpdate.textContent = `${t("lastUpdate")}: ${formattedDate}`;
    $lastUpdate.classList.remove("hidden");
  } else if ($lastUpdate) {
    $lastUpdate.classList.add("hidden");
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderGlobalStats() {
  const g = state.processedData.global;
  $globalStatsBar.innerHTML = `
    <span class="stat-item">${t("totalTracksListened")}: <strong class="stat-value">${formatNumber(g.totalTracksListened)}</strong></span>
    <span class="stat-item">${t("uniqueTracksListened")}: <strong class="stat-value">${formatNumber(g.uniqueTracksListened)}</strong></span>
    <span class="stat-item">${t("totalTime")}: <strong class="stat-value">${formatMinutes(g.totalTimeMs)}</strong> ${t("minutes")}</span>
  `;
}

function renderCurrentView() {
  switch (state.viewMode) {
    case "total":
      renderTotalView();
      break;
    case "byYear":
      renderByYearView();
      break;
    case "recap":
      renderRecapView();
      break;
    case "stats":
      renderStatsView();
      break;
    case "search":
      renderSearchView();
      break;
  }
}

// ===== TOTAL VIEW =====
function renderTotalView() {
  const data = state.processedData;
  const sortConfig = state.sortConfigs["total"];
  const tracks = sortTracks([...data.tracks], sortConfig.column, sortConfig.direction);
  const limit = state.displayLimits["total"] || DEFAULT_DISPLAY_LIMIT;

  $content.innerHTML = "";
  const container = document.createElement("div");
  container.className = "fade-in";

  if (state.searchQuery) {
    container.appendChild(createBackToSearchBtn());
  }

  container.appendChild(createTable(tracks, limit, "total", sortConfig));

  if (tracks.length > limit) {
    container.appendChild(createShowMoreBtn("total", tracks.length, limit));
  }

  $content.appendChild(container);
}

// ===== BY YEAR VIEW =====
function renderByYearView() {
  const data = state.processedData;
  const yearKeys = Object.keys(data.years).sort((a, b) => b - a);

  $content.innerHTML = "";
  const container = document.createElement("div");
  container.className = "fade-in";

  if (state.searchQuery) {
    container.appendChild(createBackToSearchBtn());
  }

  yearKeys.forEach((year) => {
    const yearData = data.years[year];
    const section = document.createElement("div");
    section.className = "year-section";

    const isExpanded = state.expandedYears.has(year);

    // Header
    const header = document.createElement("div");
    header.className = `year-header${isExpanded ? " expanded" : ""}`;
    header.innerHTML = `
      <span class="year-name">${year}</span>
      <span class="year-toggle-icon">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
      </span>
      <div class="year-stats">
        <span class="stat-item">${t("totalTracksListened")}: <strong class="stat-value">${formatNumber(yearData.totalTracksListened)}</strong></span>
        <span class="stat-item">${t("uniqueTracksListened")}: <strong class="stat-value">${formatNumber(yearData.uniqueTracksListened)}</strong></span>
        <span class="stat-item">${t("totalTime")}: <strong class="stat-value">${formatMinutes(yearData.totalTimeMs)}</strong> ${t("minutes")}</span>
      </div>
    `;
    header.addEventListener("click", () => toggleYear(year, section));
    section.appendChild(header);

    // Content
    const content = document.createElement("div");
    content.className = "year-content";
    content.id = `year-content-${year}`;

    if (isExpanded) {
      const inner = document.createElement("div");
      inner.className = "year-content-inner";
      const sortConfig = state.sortConfigs[year];
      const tracks = sortTracks([...yearData.tracks], sortConfig.column, sortConfig.direction);
      const limit = state.displayLimits[year] || DEFAULT_DISPLAY_LIMIT;

      inner.appendChild(createTable(tracks, limit, year, sortConfig));
      if (tracks.length > limit) {
        inner.appendChild(createShowMoreBtn(year, tracks.length, limit));
      }
      content.appendChild(inner);
      content.style.maxHeight = "none";
    }

    section.appendChild(content);
    container.appendChild(section);
  });

  $content.appendChild(container);
}

function toggleYear(year, sectionEl) {
  const header = sectionEl.querySelector(".year-header");
  const content = sectionEl.querySelector(".year-content");

  if (state.expandedYears.has(year)) {
    // Collapse
    state.expandedYears.delete(year);
    header.classList.remove("expanded");
    content.style.maxHeight = content.scrollHeight + "px";
    requestAnimationFrame(() => {
      content.style.maxHeight = "0";
    });
    setTimeout(() => {
      content.innerHTML = "";
    }, 500);
  } else {
    // Expand
    state.expandedYears.add(year);
    header.classList.add("expanded");

    const inner = document.createElement("div");
    inner.className = "year-content-inner";
    const yearData = state.processedData.years[year];
    const sortConfig = state.sortConfigs[year];
    const tracks = sortTracks([...yearData.tracks], sortConfig.column, sortConfig.direction);
    const limit = state.displayLimits[year] || DEFAULT_DISPLAY_LIMIT;

    inner.appendChild(createTable(tracks, limit, year, sortConfig));
    if (tracks.length > limit) {
      inner.appendChild(createShowMoreBtn(year, tracks.length, limit));
    }
    content.appendChild(inner);

    content.style.maxHeight = "0";
    requestAnimationFrame(() => {
      content.style.maxHeight = content.scrollHeight + "px";
      setTimeout(() => {
        content.style.maxHeight = "none";
      }, 500);
    });

    // Setup artwork observer for new content
    setupArtworkObserver();
    content.querySelectorAll(".track-artwork[data-track-uri]").forEach(observeArtwork);
  }
}

// ===== TABLE CREATION =====
function createTable(tracks, limit, key, sortConfig) {
  const table = document.createElement("table");
  table.className = "tracks-table";

  // THEAD
  const thead = document.createElement("thead");
  const headerRow = document.createElement("tr");

  const columns = [
    { id: "rank", label: t("thRank"), sortable: false, className: "rank-col" },
    { id: "artwork", label: "", sortable: false, className: "art-col" },
    { id: "title", label: t("thTitle"), sortable: true, className: "" },
    { id: "timesListened", label: t("thTimesListened"), sortable: true, className: "col-numeric" },
    { id: "album", label: t("thAlbum"), sortable: true, className: "col-album" },
    { id: "firstListened", label: t("thFirstListened"), sortable: true, className: "col-date" },
    { id: "duration", label: t("thDuration"), sortable: true, className: "col-numeric" },
    { id: "totalTime", label: t("thTotalTime"), sortable: true, className: "col-numeric" },
  ];

  columns.forEach((col) => {
    const th = document.createElement("th");
    th.textContent = col.label;
    th.className = col.className;

    if (col.sortable) {
      th.classList.add("sortable");
      if (sortConfig && sortConfig.column === col.id) {
        th.classList.add("sorted");
        const icon = document.createElement("span");
        icon.className = "sort-icon";
        icon.textContent = sortConfig.direction === "asc" ? "▲" : "▼";
        th.appendChild(icon);
      }
      th.addEventListener("click", () => handleSort(key, col.id));
    }

    headerRow.appendChild(th);
  });

  thead.appendChild(headerRow);
  table.appendChild(thead);

  // TBODY
  const tbody = document.createElement("tbody");
  const displayTracks = tracks.slice(0, limit);

  displayTracks.forEach((track, index) => {
    const tr = document.createElement("tr");

    // Rank
    const tdRank = document.createElement("td");
    tdRank.className = "track-rank";
    tdRank.textContent = index + 1;
    tr.appendChild(tdRank);

    // Artwork
    const tdArt = document.createElement("td");
    tdArt.className = "track-artwork-cell";
    const artDiv = document.createElement("div");
    artDiv.className = "track-artwork";
    artDiv.dataset.trackUri = track.trackUri;

    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient(track.trackName + track.artistName);
    placeholder.textContent = getInitials(track.trackName, track.artistName);

    const img = document.createElement("img");
    img.style.display = "none";
    img.alt = "";
    img.loading = "lazy";

    artDiv.appendChild(placeholder);
    artDiv.appendChild(img);
    tdArt.appendChild(artDiv);
    tr.appendChild(tdArt);

    // Title + Artist
    const tdTitle = document.createElement("td");
    const info = document.createElement("div");
    info.className = "track-info";
    
    const titleDiv = document.createElement("div");
    titleDiv.className = "track-title track-title-wrapper";
    titleDiv.title = track.trackName;
    const titleSpan = document.createElement("span");
    titleSpan.className = "searchable-item";
    titleSpan.textContent = track.trackName;
    titleSpan.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyTrackUrl(track), "_blank");
    });
    titleDiv.appendChild(titleSpan);
    titleDiv.appendChild(createSongStatsButton(track.trackUri));
    
    const artistDiv = document.createElement("div");
    artistDiv.className = "track-artist";
    artistDiv.title = track.artistName;
    const artistSpan = document.createElement("span");
    artistSpan.className = "searchable-item";
    artistSpan.textContent = track.artistName;
    artistSpan.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyArtistUrl(track.artistName), "_blank");
    });
    artistDiv.appendChild(artistSpan);
    
    info.appendChild(titleDiv);
    info.appendChild(artistDiv);
    tdTitle.appendChild(info);
    tr.appendChild(tdTitle);

    // Times Listened
    const tdTimes = document.createElement("td");
    tdTimes.className = "col-numeric";
    tdTimes.textContent = formatNumber(track.timesListened);
    tr.appendChild(tdTimes);

    // Album
    const tdAlbum = document.createElement("td");
    tdAlbum.className = "col-album";
    if (track.albumName) {
      const albumSpan = document.createElement("span");
      albumSpan.className = "searchable-item";
      albumSpan.textContent = track.albumName;
      albumSpan.title = track.albumName;
      albumSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(getSpotifyAlbumUrl(track.albumName, track.artistName), "_blank");
      });
      tdAlbum.appendChild(albumSpan);
    } else {
      tdAlbum.textContent = "";
    }
    tr.appendChild(tdAlbum);

    // First Listened
    const tdFirst = document.createElement("td");
    tdFirst.className = "col-date";
    tdFirst.textContent = formatDate(track.firstListened);
    tr.appendChild(tdFirst);

    // Duration
    const tdDur = document.createElement("td");
    tdDur.className = "col-numeric";
    tdDur.textContent = formatDuration(track.estimatedDurationMs);
    tr.appendChild(tdDur);

    // Total Time
    const tdTotal = document.createElement("td");
    tdTotal.className = "col-numeric";
    tdTotal.textContent = `${formatMinutes(track.totalTimeMs)} ${t("recapMin")}`;
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);

  // Setup artwork observer after table is in DOM
  requestAnimationFrame(() => {
    table.querySelectorAll(".track-artwork[data-track-uri]").forEach(observeArtwork);
  });

  return table;
}

// ===== SORTING =====
function sortTracks(tracks, column, direction) {
  const dir = direction === "asc" ? 1 : -1;

  return tracks.sort((a, b) => {
    let va, vb;
    switch (column) {
      case "title":
        va = (a.trackName || "").toLowerCase();
        vb = (b.trackName || "").toLowerCase();
        return va < vb ? -1 * dir : va > vb ? 1 * dir : 0;
      case "timesListened":
        return (a.timesListened - b.timesListened) * dir;
      case "album":
        va = (a.albumName || "").toLowerCase();
        vb = (b.albumName || "").toLowerCase();
        return va < vb ? -1 * dir : va > vb ? 1 * dir : 0;
      case "firstListened":
        va = new Date(a.firstListened).getTime();
        vb = new Date(b.firstListened).getTime();
        return (va - vb) * dir;
      case "duration":
        return (a.estimatedDurationMs - b.estimatedDurationMs) * dir;
      case "totalTime":
        return (a.totalTimeMs - b.totalTimeMs) * dir;
      default:
        return 0;
    }
  });
}

function handleSort(key, column) {
  const current = state.sortConfigs[key];
  if (current.column === column) {
    current.direction = current.direction === "asc" ? "desc" : "asc";
  } else {
    current.column = column;
    // Default direction based on column type
    current.direction = (column === "title" || column === "album") ? "asc" : "desc";
  }
  renderCurrentView();
}

// ===== SHOW MORE =====
function createShowMoreBtn(key, totalCount, currentLimit) {
  const container = document.createElement("div");
  container.className = "show-more-container";

  const btn = document.createElement("button");
  btn.className = "show-more-btn";
  const remaining = totalCount - currentLimit;
  btn.textContent = `${t("showMore")} (${Math.min(remaining, DISPLAY_INCREMENT)} ${t("recapMin") === "min" ? "more" : "in più"})`;

  btn.addEventListener("click", () => {
    state.displayLimits[key] = (state.displayLimits[key] || DEFAULT_DISPLAY_LIMIT) + DISPLAY_INCREMENT;
    renderCurrentView();
  });

  container.appendChild(btn);
  return container;
}

// ===== RECAP VIEW =====
function renderRecapView() {
  const data = state.processedData;
  $content.innerHTML = "";

  const container = document.createElement("div");
  container.className = "recap-container fade-in";

  if (state.searchQuery) {
    container.appendChild(createBackToSearchBtn());
  }

  // Create the Year selector header row
  const headerRow = document.createElement("div");
  headerRow.className = "recap-header-row";

  const title = document.createElement("h2");
  title.className = "recap-main-title";
  title.textContent = t("tabRecap");

  const filterDiv = document.createElement("div");
  filterDiv.className = "recap-filter-group";

  const label = document.createElement("label");
  label.setAttribute("for", "recap-year-select");
  label.textContent = t("recapSelectYear");

  const select = document.createElement("select");
  select.id = "recap-year-select";
  select.className = "recap-select";

  // Add "All Years" option
  const optAll = document.createElement("option");
  optAll.value = "all";
  optAll.textContent = t("recapAllYears");
  if (state.recapYear === "all") optAll.selected = true;
  select.appendChild(optAll);

  // Add each year
  const years = Object.keys(data.years).sort((a, b) => b - a);
  years.forEach((y) => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    if (state.recapYear === y) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener("change", (e) => {
    state.recapYear = e.target.value;
    renderRecapView();
  });

  filterDiv.appendChild(label);
  filterDiv.appendChild(select);
  headerRow.appendChild(title);
  headerRow.appendChild(filterDiv);
  container.appendChild(headerRow);

  // Filter sources
  const isAll = state.recapYear === "all";
  const source = isAll ? data.global : data.years[state.recapYear];
  const tracks = isAll ? data.tracks : source.tracks;
  const artists = isAll ? data.artists : source.artists;

  // Overview Cards
  const overview = document.createElement("div");
  overview.className = "recap-overview";

  const totalMinutes = Math.round(source.totalTimeMs / 60000);
  const totalHours = Math.round(totalMinutes / 60);

  const cards = [
    { icon: "🎵", value: formatNumber(totalMinutes), label: t("recapTotalMinutes"), sub: `(~${formatNumber(totalHours)}h)` },
    { icon: "🔊", value: formatNumber(source.totalTracksListened), label: t("recapTotalSongs") },
    { icon: "💿", value: formatNumber(source.uniqueTracksListened), label: t("recapUniqueSongs") },
    { icon: "🎤", value: formatNumber(source.totalArtists), label: t("recapTotalArtists") },
  ];

  cards.forEach((card) => {
    const el = document.createElement("div");
    el.className = "recap-card";
    el.innerHTML = `
      <div class="recap-card-icon">${card.icon}</div>
      <div class="recap-card-value">${card.value}</div>
      ${card.sub ? `<div style="color: var(--text-tertiary); font-size: 0.8rem; margin-bottom: 4px;">${card.sub}</div>` : ""}
      <div class="recap-card-label">${card.label}</div>
    `;
    overview.appendChild(el);
  });

  container.appendChild(overview);

  // Top Artists
  const topArtistsSection = document.createElement("div");
  topArtistsSection.className = "recap-section";
  topArtistsSection.innerHTML = `<h2 class="recap-section-title"><span class="emoji">👑</span> ${t("recapTopArtists")}</h2>`;
  const artistList = document.createElement("div");
  artistList.className = "top-list";

  artists.slice(0, 10).forEach((artist, i) => {
    const item = document.createElement("div");
    item.className = "top-item";

    const rankDiv = document.createElement("div");
    rankDiv.className = "top-rank";
    rankDiv.textContent = i + 1;
    item.appendChild(rankDiv);

    const artDiv = document.createElement("div");
    artDiv.className = "top-artwork";
    if (artist.topTrackUri) {
      artDiv.dataset.trackUri = artist.topTrackUri;
    }
    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient(artist.name);
    placeholder.textContent = artist.name.substring(0, 2).toUpperCase();
    artDiv.appendChild(placeholder);

    if (artist.topTrackUri) {
      const img = document.createElement("img");
      img.style.display = "none";
      img.alt = "";
      artDiv.appendChild(img);
    }
    item.appendChild(artDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "top-info";
    const nameDiv = document.createElement("div");
    nameDiv.className = "top-name";
    const nameSpan = document.createElement("span");
    nameSpan.className = "searchable-item";
    nameSpan.textContent = artist.name;
    nameSpan.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyArtistUrl(artist.name), "_blank");
    });
    nameDiv.appendChild(nameSpan);
    const detailDiv = document.createElement("div");
    detailDiv.className = "top-detail";
    detailDiv.textContent = `${formatNumber(artist.uniqueTracks)} ${state.language === "it" ? "brani unici" : "unique tracks"} · ${formatNumber(artist.timesListened)} ${t("recapPlays")}`;
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(detailDiv);
    item.appendChild(infoDiv);

    const statDiv = document.createElement("div");
    statDiv.className = "top-stat";
    const statValue = document.createElement("div");
    statValue.className = "top-stat-value";
    statValue.textContent = formatMinutes(artist.totalTimeMs);
    const statLabel = document.createElement("div");
    statLabel.className = "top-stat-label";
    statLabel.textContent = t("recapMin");
    statDiv.appendChild(statValue);
    statDiv.appendChild(statLabel);
    item.appendChild(statDiv);

    artistList.appendChild(item);
  });
  topArtistsSection.appendChild(artistList);
  container.appendChild(topArtistsSection);

  // Top Songs
  const topSongsSection = document.createElement("div");
  topSongsSection.className = "recap-section";
  topSongsSection.innerHTML = `<h2 class="recap-section-title"><span class="emoji">🏆</span> ${t("recapTopSongs")}</h2>`;
  const songList = document.createElement("div");
  songList.className = "top-list";

  tracks.slice(0, 10).forEach((track, i) => {
    const item = document.createElement("div");
    item.className = "top-item";

    const rankDiv = document.createElement("div");
    rankDiv.className = "top-rank";
    rankDiv.textContent = i + 1;
    item.appendChild(rankDiv);

    const artDiv = document.createElement("div");
    artDiv.className = "top-artwork";
    artDiv.dataset.trackUri = track.trackUri;
    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient(track.trackName + track.artistName);
    placeholder.textContent = getInitials(track.trackName, track.artistName);
    const img = document.createElement("img");
    img.style.display = "none";
    img.alt = "";
    artDiv.appendChild(placeholder);
    artDiv.appendChild(img);
    item.appendChild(artDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "top-info";
    const nameDiv = document.createElement("div");
    nameDiv.className = "top-name track-title-wrapper";
    const nameSpan = document.createElement("span");
    nameSpan.className = "searchable-item";
    nameSpan.textContent = track.trackName;
    nameSpan.addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyTrackUrl(track), "_blank");
    });
    nameDiv.appendChild(nameSpan);
    nameDiv.appendChild(createSongStatsButton(track.trackUri));
    const detailDiv = document.createElement("div");
    detailDiv.className = "top-detail";
    detailDiv.innerHTML = `
      <span class="searchable-item">${escapeHtml(track.artistName)}</span> · 
      <span class="searchable-item">${escapeHtml(track.albumName)}</span>
    `;
    detailDiv.querySelectorAll(".searchable-item")[0].addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyArtistUrl(track.artistName), "_blank");
    });
    detailDiv.querySelectorAll(".searchable-item")[1].addEventListener("click", (e) => {
      e.stopPropagation();
      window.open(getSpotifyAlbumUrl(track.albumName, track.artistName), "_blank");
    });
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(detailDiv);
    item.appendChild(infoDiv);

    const statDiv = document.createElement("div");
    statDiv.className = "top-stat";
    const statValue = document.createElement("div");
    statValue.className = "top-stat-value";
    statValue.textContent = formatNumber(track.timesListened);
    const statLabel = document.createElement("div");
    statLabel.className = "top-stat-label";
    statLabel.textContent = t("recapPlays");
    statDiv.appendChild(statValue);
    statDiv.appendChild(statLabel);
    item.appendChild(statDiv);

    songList.appendChild(item);
  });
  topSongsSection.appendChild(songList);
  container.appendChild(topSongsSection);

  $content.appendChild(container);

  // Observe top song artworks
  setupArtworkObserver();
  container.querySelectorAll(".top-artwork[data-track-uri]").forEach(observeArtwork);
}

function createMonthlyChart(monthlyData) {
  const data = monthlyData || {};
  const chart = document.createElement("div");
  chart.className = "chart-container";
  chart.innerHTML = `<h3 class="chart-title"><span class="emoji">📅</span> ${t("recapMonthlyActivity")}</h3>`;

  const monthNames = t("monthNames");
  const monthData = [];

  for (let m = 1; m <= 12; m++) {
    let count = 0;
    if (state.recapYear === "all") {
      for (const [key, val] of Object.entries(data)) {
        const parts = key.split("-");
        if (parts.length === 2 && parseInt(parts[1], 10) === m) {
          count += (val.count || 0);
        }
      }
    } else {
      const key = state.recapYear + "-" + m.toString().padStart(2, "0");
      count = data[key] ? data[key].count : 0;
    }
    monthData.push({
      monthNum: m,
      monthName: monthNames[m - 1],
      count,
    });
  }

  const counts = monthData.map((d) => d.count);
  const maxCount = Math.max(...counts, 0);

  const barChart = document.createElement("div");
  barChart.className = "bar-chart";

  monthData.forEach((d) => {
    const col = document.createElement("div");
    col.className = "bar-column";

    const bar = document.createElement("div");
    const heightPct = maxCount > 0 ? (d.count / maxCount) * 100 : 0;
    bar.className = "bar";
    bar.style.height = `${Math.max(heightPct, 1)}%`;

    const tooltip = document.createElement("div");
    tooltip.className = "bar-tooltip";
    tooltip.textContent = `${d.monthName}: ${formatNumber(d.count)} ${t("recapPlays")}`;
    bar.appendChild(tooltip);

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = d.monthName;

    col.appendChild(bar);
    col.appendChild(label);
    barChart.appendChild(col);
  });

  chart.appendChild(barChart);
  return chart;
}

function createHourlyChart(hourlyData) {
  const data = hourlyData || {};
  const chart = document.createElement("div");
  chart.className = "chart-container";
  chart.innerHTML = `<h3 class="chart-title"><span class="emoji">🕐</span> ${t("recapHourlyActivity")}</h3>`;

  const maxCount = Math.max(...Object.values(data).map((h) => h.count), 0);

  const barChart = document.createElement("div");
  barChart.className = "bar-chart";

  for (let h = 0; h < 24; h++) {
    const hourData = data[h] || { count: 0 };
    const col = document.createElement("div");
    col.className = "bar-column";

    const bar = document.createElement("div");
    const heightPct = maxCount > 0 ? (hourData.count / maxCount) * 100 : 0;
    bar.className = "bar";
    bar.style.height = `${Math.max(heightPct, 1)}%`;

    const tooltip = document.createElement("div");
    tooltip.className = "bar-tooltip";
    tooltip.textContent = `${formatNumber(hourData.count)} ${t("recapPlays")}`;
    bar.appendChild(tooltip);

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = h.toString().padStart(2, "0");

    col.appendChild(bar);
    col.appendChild(label);
    barChart.appendChild(col);
  }

  chart.appendChild(barChart);
  return chart;
}

// ===== STATS FEATURE FUNCTIONS =====

function createSongStatsButton(trackUri) {
  const btn = document.createElement("button");
  btn.className = "song-stats-btn";
  btn.title = t("songStatsBtn");
  btn.setAttribute("aria-label", t("songStatsBtn"));
  btn.innerHTML = `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="20" x2="18" y2="10"/>
      <line x1="12" y1="20" x2="12" y2="4"/>
      <line x1="6" y1="20" x2="6" y2="14"/>
    </svg>
    <span>${t("songStatsBtn")}</span>
  `;
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    navigateToSongStats(trackUri);
  });
  return btn;
}

function navigateToSongStats(trackUri) {
  state.selectedStatsSongUri = trackUri;
  state.statsSongTargetTime = null;
  state.viewMode = "stats";
  $viewTabs.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === "stats");
  });
  renderCurrentView();
  requestAnimationFrame(() => {
    const el = document.getElementById("this-song-section");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
}

// Binary search for earliest stream at or after target timestamp
function findStartIndex(tsArray, target) {
  let low = 0, high = tsArray.length;
  while (low < high) {
    const mid = (low + high) >>> 1;
    if (tsArray[mid] < target) low = mid + 1;
    else high = mid;
  }
  return low;
}

// Fast bucket counter using binary search
function getBucketCounts(timestamps, winStartMs, stepMs, numBuckets) {
  const counts = new Array(numBuckets).fill(0);
  if (!timestamps || timestamps.length === 0) return counts;

  const winEndMs = winStartMs + numBuckets * stepMs;
  let idx = findStartIndex(timestamps, winStartMs);
  const n = timestamps.length;

  while (idx < n && timestamps[idx] < winEndMs) {
    const b = Math.floor((timestamps[idx] - winStartMs) / stepMs);
    if (b >= 0 && b < numBuckets) {
      counts[b]++;
    }
    idx++;
  }
  return counts;
}

const TIME_SCALE_CONFIGS = {
  "1d": {
    id: "1d",
    labelKey: "scale1Day",
    windowMs: 24 * 3600 * 1000,
    stepMs: 1 * 3600 * 1000,       // 1 hour
    numBuckets: 24,
    formatXLabel: (d) => `${d.getHours().toString().padStart(2, "0")}:00`,
    formatTooltip: (d, nextD) => `${formatDate(d)} ${d.getHours().toString().padStart(2, "0")}:00 - ${nextD.getHours().toString().padStart(2, "0")}:00`,
    formatHeaderDate: (s, e) => formatDate(s),
  },
  "1w": {
    id: "1w",
    labelKey: "scale1Week",
    windowMs: 7 * 24 * 3600 * 1000,
    stepMs: 6 * 3600 * 1000,       // 6 hours
    numBuckets: 28,
    formatXLabel: (d) => `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`,
    formatTooltip: (d, nextD) => `${formatDate(d)} ${d.getHours().toString().padStart(2, "0")}:00 - ${nextD.getHours().toString().padStart(2, "0")}:00`,
    formatHeaderDate: (s, e) => `${formatDate(s)} – ${formatDate(e)}`,
  },
  "2w": {
    id: "2w",
    labelKey: "scale2Weeks",
    windowMs: 14 * 24 * 3600 * 1000,
    stepMs: 12 * 3600 * 1000,      // 12 hours
    numBuckets: 28,
    formatXLabel: (d) => `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`,
    formatTooltip: (d, nextD) => `${formatDate(d)} ${d.getHours() < 12 ? "00:00 - 12:00" : "12:00 - 24:00"}`,
    formatHeaderDate: (s, e) => `${formatDate(s)} – ${formatDate(e)}`,
  },
  "1m": {
    id: "1m",
    labelKey: "scale1Month",
    windowMs: 30 * 24 * 3600 * 1000,
    stepMs: 24 * 3600 * 1000,      // 1 day
    numBuckets: 30,
    formatXLabel: (d) => `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`,
    formatTooltip: (d) => formatDate(d),
    formatHeaderDate: (s, e) => `${formatDate(s)} – ${formatDate(e)}`,
  },
  "3m": {
    id: "3m",
    labelKey: "scale3Months",
    windowMs: 30 * 3 * 24 * 3600 * 1000,
    stepMs: 3 * 24 * 3600 * 1000,  // 3 days
    numBuckets: 30,
    formatXLabel: (d) => `${d.getDate().toString().padStart(2, "0")}/${(d.getMonth() + 1).toString().padStart(2, "0")}`,
    formatTooltip: (d, nextD) => `${formatDate(d)} – ${formatDate(nextD)}`,
    formatHeaderDate: (s, e) => `${t("monthNames")[s.getMonth()]} ${s.getFullYear()} – ${t("monthNames")[e.getMonth()]} ${e.getFullYear()}`,
  },
  "6m": {
    id: "6m",
    labelKey: "scale6Months",
    windowMs: 26 * 7 * 24 * 3600 * 1000, // 26 weeks (~6 months)
    stepMs: 7 * 24 * 3600 * 1000,  // 7 days
    numBuckets: 26,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d, nextD) => `${formatDate(d)} – ${formatDate(nextD)}`,
    formatHeaderDate: (s, e) => `${t("monthNames")[s.getMonth()]} ${s.getFullYear()} – ${t("monthNames")[e.getMonth()]} ${e.getFullYear()}`,
  },
  "1y": {
    id: "1y",
    labelKey: "scale1Year",
    windowMs: 26 * 14 * 24 * 3600 * 1000, // 26 * 14 days = 364 days (~1 year)
    stepMs: 14 * 24 * 3600 * 1000, // 14 days
    numBuckets: 26,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d, nextD) => `${formatDate(d)} – ${formatDate(nextD)}`,
    formatHeaderDate: (s, e) => `${t("monthNames")[s.getMonth()]} ${s.getFullYear()} – ${t("monthNames")[e.getMonth()]} ${e.getFullYear()}`,
  },
  "3y": {
    id: "3y",
    labelKey: "scale3Years",
    windowMs: 36 * 30 * 24 * 3600 * 1000, // 36 months (3 years)
    stepMs: 30 * 24 * 3600 * 1000, // 1 month (~30 days)
    numBuckets: 36,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d) => `${t("monthNames")[d.getMonth()]} ${d.getFullYear()}`,
    formatHeaderDate: (s, e) => `${s.getFullYear()} – ${e.getFullYear()}`,
  },
  "6y": {
    id: "6y",
    labelKey: "scale6Years",
    windowMs: 36 * 60 * 24 * 3600 * 1000, // 36 * 2 months (6 years)
    stepMs: 60 * 24 * 3600 * 1000, // 2 months (~60 days)
    numBuckets: 36,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d, nextD) => `${t("monthNames")[d.getMonth()]} ${d.getFullYear()} – ${t("monthNames")[nextD.getMonth()]} ${nextD.getFullYear()}`,
    formatHeaderDate: (s, e) => `${s.getFullYear()} – ${e.getFullYear()}`,
  },
  "12y": {
    id: "12y",
    labelKey: "scale12Years",
    windowMs: 36 * 120 * 24 * 3600 * 1000, // 36 * 4 months (12 years)
    stepMs: 120 * 24 * 3600 * 1000, // 4 months (~120 days)
    numBuckets: 36,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d, nextD) => `${t("monthNames")[d.getMonth()]} ${d.getFullYear()} – ${t("monthNames")[nextD.getMonth()]} ${nextD.getFullYear()}`,
    formatHeaderDate: (s, e) => `${s.getFullYear()} – ${e.getFullYear()}`,
  },
  "all": {
    id: "all",
    labelKey: "scaleAllTime",
    windowMs: Infinity,
    stepMs: null,
    numBuckets: 36,
    formatXLabel: (d) => `${t("monthNames")[d.getMonth()]} '${d.getFullYear().toString().slice(-2)}`,
    formatTooltip: (d) => `${t("monthNames")[d.getMonth()]} ${d.getFullYear()}`,
    formatHeaderDate: (s, e) => `${s.getFullYear()} – ${e.getFullYear()}`,
  },
};

const SCALE_ORDER = ["1d", "1w", "2w", "1m", "3m", "6m", "1y", "3y", "6y", "12y", "all"];

const SCALE_ALIASES = {
  "1day": "1d",
  "1week": "1w",
  "2weeks": "2w",
  "1month": "1m",
  "3months": "3m",
  "6months": "6m",
  "1year": "1y",
  "3years": "3y",
  "6years": "6y",
  "12years": "12y",
  "12y": "12y",
};

function getClosestScaleConfig(spanMs) {
  const candidateKeys = ["1d", "1w", "2w", "1m", "3m", "6m", "1y", "3y", "6y", "12y"];
  let closest = TIME_SCALE_CONFIGS[candidateKeys[0]];
  let minDiff = Math.abs(spanMs - closest.windowMs);

  for (let i = 1; i < candidateKeys.length; i++) {
    const key = candidateKeys[i];
    const cfg = TIME_SCALE_CONFIGS[key];
    const diff = Math.abs(spanMs - cfg.windowMs);
    if (diff < minDiff) {
      minDiff = diff;
      closest = cfg;
    }
  }
  return closest;
}

function getNiceCeiling(n) {
  if (n <= 3) return 3;
  if (n <= 5) return 5;
  if (n <= 10) return 10;
  const mag = Math.pow(10, Math.floor(Math.log10(n)));
  const normalized = n / mag;
  let nice;
  if (normalized <= 1.2) nice = 1.2;
  else if (normalized <= 1.5) nice = 1.5;
  else if (normalized <= 2.0) nice = 2.0;
  else if (normalized <= 2.5) nice = 2.5;
  else if (normalized <= 3.0) nice = 3.0;
  else if (normalized <= 4.0) nice = 4.0;
  else if (normalized <= 5.0) nice = 5.0;
  else if (normalized <= 6.0) nice = 6.0;
  else if (normalized <= 8.0) nice = 8.0;
  else nice = 10.0;
  return Math.ceil(nice * mag);
}

function computeFixedMax(timestamps, stepMs, startMs) {
  if (!timestamps || timestamps.length === 0) return 5;
  let maxCount = 1;
  let currentBucketIdx = -1;
  let currentCount = 0;

  for (let i = 0; i < timestamps.length; i++) {
    const b = Math.floor((timestamps[i] - startMs) / stepMs);
    if (b === currentBucketIdx) {
      currentCount++;
    } else {
      if (currentCount > maxCount) maxCount = currentCount;
      currentBucketIdx = b;
      currentCount = 1;
    }
  }
  if (currentCount > maxCount) maxCount = currentCount;
  return getNiceCeiling(maxCount);
}

function createLineChart({ timestamps, currentScale, onScaleChange, titleText, titleEmoji, isSongSpecific, targetTimeMs, onTimeChange }) {
  const card = document.createElement("div");
  card.className = "chart-card";

  // Normalize scale key
  if (SCALE_ALIASES[currentScale]) {
    currentScale = SCALE_ALIASES[currentScale];
  }

  // Determine overall timeline boundaries
  let startMs, endMs, totalSpanMs;
  if (isSongSpecific && timestamps && timestamps.length > 0) {
    startMs = timestamps[0];
    const globalEnd = state.processedData.global.lastUpdateTs
      ? new Date(state.processedData.global.lastUpdateTs).getTime()
      : timestamps[timestamps.length - 1];
    endMs = Math.max(globalEnd, timestamps[timestamps.length - 1]);
    if (endMs <= startMs) endMs = startMs + 24 * 3600 * 1000;
    totalSpanMs = Math.max(endMs - startMs, 24 * 3600 * 1000);
  } else {
    startMs = state.processedData.global.earliestTs
      ? new Date(state.processedData.global.earliestTs).getTime()
      : Date.now() - 365 * 24 * 3600 * 1000;
    endMs = state.processedData.global.lastUpdateTs
      ? new Date(state.processedData.global.lastUpdateTs).getTime()
      : Date.now();
    totalSpanMs = state.processedData.global.totalSpanMs || Math.max(endMs - startMs, 24 * 3600 * 1000);
  }

  // Dynamic scale filtering: cap options to duration of history
  const availableScales = SCALE_ORDER.filter((key) => {
    if (key === "all") return true;
    return TIME_SCALE_CONFIGS[key].windowMs <= totalSpanMs;
  });

  if (!availableScales.includes(currentScale)) {
    currentScale = "all";
  }

  // Resolve active scale config and stepMs
  let activeConfig;
  let stepMs;
  let numBuckets;

  if (currentScale === "all") {
    const closest = getClosestScaleConfig(totalSpanMs);
    stepMs = closest.stepMs;
    activeConfig = closest;
    numBuckets = null; // will be totalBuckets
  } else {
    const cfg = TIME_SCALE_CONFIGS[currentScale];
    stepMs = cfg.stepMs;
    activeConfig = cfg;
    numBuckets = cfg.numBuckets;
  }

  // Preload EVERY datapoint for this scale from startMs to endMs
  let baseTime;
  if (stepMs < 24 * 3600 * 1000) {
    const d = new Date(startMs);
    d.setMinutes(0, 0, 0, 0);
    baseTime = d.getTime();
  } else {
    const d = new Date(startMs);
    d.setHours(0, 0, 0, 0);
    baseTime = d.getTime();
  }

  const totalBuckets = Math.max(Math.ceil((endMs - baseTime) / stepMs) + 1, 1);
  const allCounts = new Uint32Array(totalBuckets);
  let maxCount = 0;

  if (timestamps && timestamps.length > 0) {
    for (let i = 0; i < timestamps.length; i++) {
      const b = Math.floor((timestamps[i] - baseTime) / stepMs);
      if (b >= 0 && b < totalBuckets) {
        allCounts[b]++;
        if (allCounts[b] > maxCount) maxCount = allCounts[b];
      }
    }
  }

  // Determine visible buckets count and scrollability
  let visibleBuckets;
  let isScrollable;

  if (currentScale === "all") {
    visibleBuckets = totalBuckets;
    isScrollable = false;
  } else {
    visibleBuckets = Math.min(numBuckets, totalBuckets);
    isScrollable = totalBuckets > visibleBuckets;
  }

  // Compute FIXED Y-axis ceiling across all preloaded datapoints
  const fixedMax = getNiceCeiling(maxCount);

  // Header row (Clean: Title on left, Scale buttons on right)
  const header = document.createElement("div");
  header.className = "chart-header-row";

  const title = document.createElement("h3");
  title.className = "chart-title";
  title.innerHTML = `
    <span class="emoji">${titleEmoji || "📈"}</span> 
    <span>${titleText || t("statsStreamsOverTime")}</span>
  `;
  header.appendChild(title);

  // Scale buttons bar
  const scaleBar = document.createElement("div");
  scaleBar.className = "time-scale-bar";
  availableScales.forEach((scaleKey) => {
    const scale = TIME_SCALE_CONFIGS[scaleKey];
    const btn = document.createElement("button");
    btn.className = `time-scale-btn ${scale.id === currentScale ? "active" : ""}`;
    btn.textContent = t(scale.labelKey);
    btn.addEventListener("click", () => {
      if (scale.id !== currentScale && onScaleChange) {
        onScaleChange(scale.id);
      }
    });
    scaleBar.appendChild(btn);
  });
  header.appendChild(scaleBar);
  card.appendChild(header);

  // Chart Container with Axis
  const chartContainer = document.createElement("div");
  chartContainer.className = "chart-with-axis-container";

  // Y-axis labels on left (pinned and FIXED - never changes while scrolling)
  const yAxis = document.createElement("div");
  yAxis.className = "y-axis-labels";
  yAxis.innerHTML = `
    <span>${formatNumber(fixedMax)}</span>
    <span>${formatNumber(Math.round(fixedMax * 0.66))}</span>
    <span>${formatNumber(Math.round(fixedMax * 0.33))}</span>
    <span>0</span>
  `;
  chartContainer.appendChild(yAxis);

  // Stage (fixed 100% width)
  const stage = document.createElement("div");
  stage.className = "chart-stage";
  if (isScrollable) {
    stage.style.cursor = "grab";
  } else {
    stage.style.cursor = "pointer";
    stage.addEventListener("click", (e) => {
      const rect = stage.getBoundingClientRect();
      const mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
      const frac = mouseX / rect.width;
      if (frac >= 0.98) {
        if (onTimeChange) onTimeChange(null);
      } else if (frac <= 0.02) {
        if (onTimeChange) onTimeChange("START");
      } else {
        const clickedTime = startMs + frac * totalSpanMs;
        if (onTimeChange) onTimeChange(clickedTime);
      }
    });
  }

  const svgH = 160;
  const svgW = 800;
  const padTop = 15;
  const padBottom = 15;
  const plotH = svgH - padTop - padBottom; // 130
  const clipId = "chartClip_" + Math.random().toString(36).substring(2, 9);
  const gradId = "lineGrad_" + Math.random().toString(36).substring(2, 9);

  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("viewBox", `0 0 ${svgW} ${svgH}`);
  svg.setAttribute("class", "line-chart-svg");
  svg.setAttribute("preserveAspectRatio", "none");
  svg.style.width = "100%";
  svg.style.height = `${svgH}px`;
  svg.innerHTML = `
    <defs>
      <linearGradient id="${gradId}" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1DB954" stop-opacity="0.4"/>
        <stop offset="100%" stop-color="#1DB954" stop-opacity="0.0"/>
      </linearGradient>
      <clipPath id="${clipId}">
        <rect x="0" y="0" width="${svgW}" height="${svgH}" />
      </clipPath>
    </defs>
    <line x1="0" y1="${padTop}" x2="${svgW}" y2="${padTop}" class="chart-grid-line"/>
    <line x1="0" y1="${padTop + plotH * 0.33}" x2="${svgW}" y2="${padTop + plotH * 0.33}" class="chart-grid-line"/>
    <line x1="0" y1="${padTop + plotH * 0.66}" x2="${svgW}" y2="${padTop + plotH * 0.66}" class="chart-grid-line"/>
    <line x1="0" y1="${padTop + plotH}" x2="${svgW}" y2="${padTop + plotH}" class="chart-grid-line"/>
    <g clip-path="url(#${clipId})">
      <path class="chart-area" fill="url(#${gradId})" />
      <path class="chart-line" />
    </g>
  `;

  const chartAreaPath = svg.querySelector(".chart-area");
  const chartLinePath = svg.querySelector(".chart-line");

  const hoverLine = document.createElement("div");
  hoverLine.className = "line-chart-hover-indicator";

  const hoverDot = document.createElement("div");
  hoverDot.className = "line-chart-hover-dot";

  const tooltip = document.createElement("div");
  tooltip.className = "line-chart-tooltip";

  const xLabelsDiv = document.createElement("div");
  xLabelsDiv.className = "chart-x-labels";
  xLabelsDiv.style.width = "100%";

  stage.appendChild(svg);
  stage.appendChild(hoverLine);
  stage.appendChild(hoverDot);
  stage.appendChild(tooltip);
  stage.appendChild(xLabelsDiv);
  chartContainer.appendChild(stage);
  card.appendChild(chartContainer);

  const maxViewPos = Math.max(0, totalBuckets - visibleBuckets);
  let currentViewPos = maxViewPos;

  if (targetTimeMs === "END" || targetTimeMs == null) {
    currentViewPos = maxViewPos;
  } else if (targetTimeMs === "START") {
    currentViewPos = 0;
  } else if (typeof targetTimeMs === "number" && !isNaN(targetTimeMs)) {
    const targetK = (targetTimeMs - baseTime) / stepMs;
    const idealViewPos = targetK - visibleBuckets / 2;
    currentViewPos = Math.max(0, Math.min(maxViewPos, idealViewPos));
  }

  function notifyTimeChange() {
    if (!onTimeChange || !isScrollable) return;
    const isAtEnd = (maxViewPos <= 0) || (currentViewPos >= maxViewPos - 0.5);
    const isAtStart = (currentViewPos <= 0.5);
    if (isAtEnd) {
      onTimeChange(null);
    } else if (isAtStart) {
      onTimeChange("START");
    } else {
      const centerTimeMs = baseTime + (currentViewPos + visibleBuckets / 2) * stepMs;
      onTimeChange(centerTimeMs);
    }
  }

  // Render the portion viewed from the preloaded dataset
  function renderPortion(viewPos) {
    currentViewPos = Math.max(0, Math.min(maxViewPos, viewPos));
    const spacing = visibleBuckets > 1 ? svgW / (visibleBuckets - 1) : svgW;

    const startK = Math.max(0, Math.floor(currentViewPos) - 1);
    const endK = Math.min(totalBuckets - 1, Math.ceil(currentViewPos + visibleBuckets));

    const points = [];
    for (let k = startK; k <= endK; k++) {
      const x = (k - currentViewPos) * spacing;
      const count = allCounts[k];
      const clamped = Math.min(count, fixedMax);
      const y = padTop + plotH - (clamped / fixedMax) * plotH;
      points.push({ x, y, count, k, time: baseTime + k * stepMs });
    }

    if (points.length === 0) return;

    let pathD = `M ${points[0].x} ${points[0].y}`;
    if (points.length === 1) {
      pathD = `M 0 ${points[0].y} L ${svgW} ${points[0].y}`;
    } else {
      for (let i = 1; i < points.length; i++) {
        const prev = points[i - 1];
        const curr = points[i];
        const midX = (prev.x + curr.x) / 2;
        pathD += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
      }
    }

    const lastPt = points[points.length - 1];
    const firstPt = points[0];
    const areaD = `${pathD} L ${lastPt.x} ${svgH} L ${firstPt.x} ${svgH} Z`;

    chartLinePath.setAttribute("d", pathD);
    chartAreaPath.setAttribute("d", areaD);

    // X-Axis labels (~6 evenly spaced labels across the visible window)
    xLabelsDiv.innerHTML = "";
    const numLabels = Math.min(6, visibleBuckets);
    const denom = visibleBuckets > 1 ? (visibleBuckets - 1) : 1;
    for (let i = 0; i < numLabels; i++) {
      const frac = numLabels > 1 ? i / (numLabels - 1) : 0.5;
      const k = Math.round(currentViewPos + frac * denom);
      if (k >= 0 && k < totalBuckets) {
        const span = document.createElement("span");
        span.textContent = activeConfig.formatXLabel(new Date(baseTime + k * stepMs));
        span.style.position = "absolute";
        span.style.left = `${frac * 100}%`;
        span.style.transform = "translateX(-50%)";
        span.style.whiteSpace = "nowrap";
        xLabelsDiv.appendChild(span);
      }
    }
  }

  // Interactive mouseover
  stage.addEventListener("mousemove", (e) => {
    const rect = stage.getBoundingClientRect();
    const mouseX = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const frac = mouseX / rect.width;
    const denom = visibleBuckets > 1 ? (visibleBuckets - 1) : 1;
    const targetK = Math.max(0, Math.min(totalBuckets - 1, Math.round(currentViewPos + frac * denom)));

    const ptPixelX = ((targetK - currentViewPos) / denom) * rect.width;
    const count = allCounts[targetK];
    const clamped = Math.min(count, fixedMax);
    const ptPixelY = padTop + plotH - (clamped / fixedMax) * plotH;
    const time = baseTime + targetK * stepMs;

    hoverLine.style.display = "block";
    hoverLine.style.left = `${ptPixelX}px`;

    hoverDot.style.display = "block";
    hoverDot.style.left = `${ptPixelX}px`;
    hoverDot.style.top = `${ptPixelY}px`;

    tooltip.style.display = "block";
    tooltip.style.left = `${ptPixelX}px`;
    tooltip.style.top = `${Math.max(ptPixelY - 12, 16)}px`;
    if (frac < 0.15) {
      tooltip.style.transform = "translate(0, -120%)";
    } else if (frac > 0.85) {
      tooltip.style.transform = "translate(-100%, -120%)";
    } else {
      tooltip.style.transform = "translate(-50%, -120%)";
    }

    const dStart = new Date(time);
    const dEnd = new Date(time + stepMs);
    const tooltipDateStr = activeConfig.formatTooltip(dStart, dEnd);
    tooltip.innerHTML = `<strong>${escapeHtml(tooltipDateStr)}</strong>: ${formatNumber(count)} ${t("recapPlays")}`;
  });

  stage.addEventListener("mouseleave", () => {
    hoverLine.style.display = "none";
    hoverDot.style.display = "none";
    tooltip.style.display = "none";
  });

  let scrollContainer = null;
  let scrollInner = null;

  if (isScrollable) {
    scrollContainer = document.createElement("div");
    scrollContainer.className = "timeline-scrollbar-container";

    scrollInner = document.createElement("div");
    scrollInner.className = "timeline-scrollbar-inner";
    scrollContainer.appendChild(scrollInner);
    card.appendChild(scrollContainer);

    function adjustScrollTrack() {
      if (!scrollContainer || !scrollInner) return;
      const cWidth = scrollContainer.clientWidth || 1000;
      const ratio = totalBuckets / visibleBuckets;
      const minSlideMargin = Math.max(cWidth * 0.5, 600);
      const targetWidth = Math.min(Math.max(Math.round(cWidth * ratio), cWidth + minSlideMargin), 25000);
      scrollInner.style.width = `${targetWidth}px`;
    }

    adjustScrollTrack();

    let isTicking = false;
    scrollContainer.addEventListener("scroll", () => {
      if (!isTicking) {
        requestAnimationFrame(() => {
          const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
          if (maxScroll > 0 && maxViewPos > 0) {
            const progress = Math.max(0, Math.min(1, scrollContainer.scrollLeft / maxScroll));
            renderPortion(progress * maxViewPos);
            notifyTimeChange();
          }
          isTicking = false;
        });
        isTicking = true;
      }
    });

    // Mouse wheel / Touchpad horizontal swipe: shifts by ~15% of visible buckets
    stage.addEventListener("wheel", (e) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      const stepBuckets = Math.sign(delta) * Math.max(Math.round(visibleBuckets * 0.15), 1);
      const targetPos = Math.max(0, Math.min(maxViewPos, currentViewPos + stepBuckets));
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll > 0 && maxViewPos > 0) {
        scrollContainer.scrollLeft = (targetPos / maxViewPos) * maxScroll;
      }
      renderPortion(targetPos);
      notifyTimeChange();
      e.preventDefault();
    }, { passive: false });

    // Drag to pan on chart stage: 1 pixel drag = 1 pixel chart movement
    let isDragging = false;
    let dragStartX = 0;
    let dragStartPos = 0;

    stage.addEventListener("mousedown", (e) => {
      isDragging = true;
      dragStartX = e.clientX;
      dragStartPos = currentViewPos;
      stage.style.cursor = "grabbing";
    });

    window.addEventListener("mousemove", (e) => {
      if (!isDragging) return;
      const dx = e.clientX - dragStartX;
      const chartW = stage.clientWidth || 800;
      const denom = visibleBuckets > 1 ? (visibleBuckets - 1) : 1;
      const bucketsPerPixel = denom / chartW;
      const targetPos = Math.max(0, Math.min(maxViewPos, dragStartPos - dx * bucketsPerPixel));
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll > 0 && maxViewPos > 0) {
        scrollContainer.scrollLeft = (targetPos / maxViewPos) * maxScroll;
      }
      renderPortion(targetPos);
      notifyTimeChange();
    });

    window.addEventListener("mouseup", () => {
      if (isDragging) {
        isDragging = false;
        stage.style.cursor = "grab";
      }
    });

    requestAnimationFrame(() => {
      adjustScrollTrack();
      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (maxScroll > 0 && maxViewPos > 0) {
        scrollContainer.scrollLeft = (currentViewPos / maxViewPos) * maxScroll;
      }
      renderPortion(currentViewPos);
    });

    window.addEventListener("resize", () => {
      if (isScrollable && scrollContainer) {
        adjustScrollTrack();
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        if (maxScroll > 0 && maxViewPos > 0) {
          scrollContainer.scrollLeft = (currentViewPos / maxViewPos) * maxScroll;
        }
        renderPortion(currentViewPos);
      }
    });
  }

  // Initial render of portion
  renderPortion(currentViewPos);

  return card;
}

function createAutoscaledHourlyChart({ hourlyData, titleText, titleEmoji }) {
  const chart = document.createElement("div");
  chart.className = "chart-container";

  const header = document.createElement("div");
  header.className = "chart-header-row";

  const title = document.createElement("h3");
  title.className = "chart-title";
  title.innerHTML = `<span class="emoji">${titleEmoji || "🕐"}</span> ${titleText || t("recapHourlyActivity")}`;
  header.appendChild(title);

  chart.appendChild(header);

  const data = hourlyData || {};
  const counts = [];
  for (let h = 0; h < 24; h++) {
    counts.push(data[h] ? data[h].count : 0);
  }
  const maxCount = Math.max(...counts, 0);

  const chartRow = document.createElement("div");
  chartRow.className = "chart-with-axis-container";

  // Autoscaling Y-axis numbers on the left
  const yAxis = document.createElement("div");
  yAxis.className = "y-axis-labels";
  yAxis.innerHTML = `
    <span>${formatNumber(maxCount)}</span>
    <span>${formatNumber(Math.round(maxCount / 2))}</span>
    <span>0</span>
  `;
  chartRow.appendChild(yAxis);

  const stage = document.createElement("div");
  stage.className = "chart-stage";

  const barChart = document.createElement("div");
  barChart.className = "bar-chart";

  for (let h = 0; h < 24; h++) {
    const count = data[h] ? data[h].count : 0;
    const col = document.createElement("div");
    col.className = "bar-column";

    const bar = document.createElement("div");
    const heightPct = maxCount > 0 ? (count / maxCount) * 100 : 0;
    bar.className = "bar";
    bar.style.height = `${Math.max(heightPct, 1)}%`;

    const tooltip = document.createElement("div");
    tooltip.className = "bar-tooltip";
    tooltip.textContent = `${formatNumber(count)} ${t("recapPlays")}`;
    bar.appendChild(tooltip);

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = h.toString().padStart(2, "0");

    col.appendChild(bar);
    col.appendChild(label);
    barChart.appendChild(col);
  }

  stage.appendChild(barChart);
  chartRow.appendChild(stage);
  chart.appendChild(chartRow);
  return chart;
}

function createAutoscaledMonthlyChart({ monthlyData, selectedYear, onYearChange, titleText, titleEmoji }) {
  const chart = document.createElement("div");
  chart.className = "chart-container";

  const header = document.createElement("div");
  header.className = "chart-header-row";

  const title = document.createElement("h3");
  title.className = "chart-title";
  title.innerHTML = `<span class="emoji">${titleEmoji || "📅"}</span> ${titleText || t("recapMonthlyActivity")}`;
  header.appendChild(title);

  const controls = document.createElement("div");
  controls.className = "chart-controls-group";

  const select = document.createElement("select");
  select.className = "stats-select";

  const allOpt = document.createElement("option");
  allOpt.value = "all";
  allOpt.textContent = t("recapAllYears");
  if (selectedYear === "all") allOpt.selected = true;
  select.appendChild(allOpt);

  const yearKeys = Object.keys(state.processedData.years).sort((a, b) => b - a);
  yearKeys.forEach((y) => {
    const opt = document.createElement("option");
    opt.value = y;
    opt.textContent = y;
    if (selectedYear === y) opt.selected = true;
    select.appendChild(opt);
  });

  select.addEventListener("change", () => {
    onYearChange(select.value);
  });

  controls.appendChild(select);
  header.appendChild(controls);
  chart.appendChild(header);

  const data = monthlyData || {};
  const monthNames = t("monthNames");
  const monthData = [];

  for (let m = 1; m <= 12; m++) {
    let count = 0;
    if (selectedYear === "all") {
      for (const [key, val] of Object.entries(data)) {
        const parts = key.split("-");
        if (parts.length === 2 && parseInt(parts[1], 10) === m) {
          count += (val.count || 0);
        }
      }
    } else {
      const key = selectedYear + "-" + m.toString().padStart(2, "0");
      count = data[key] ? data[key].count : 0;
    }
    monthData.push({
      monthNum: m,
      monthName: monthNames[m - 1],
      count,
    });
  }

  const counts = monthData.map((d) => d.count);
  const maxCount = Math.max(...counts, 0);

  const chartRow = document.createElement("div");
  chartRow.className = "chart-with-axis-container";

  // Autoscaling Y-axis numbers on the left
  const yAxis = document.createElement("div");
  yAxis.className = "y-axis-labels";
  yAxis.innerHTML = `
    <span>${formatNumber(maxCount)}</span>
    <span>${formatNumber(Math.round(maxCount / 2))}</span>
    <span>0</span>
  `;
  chartRow.appendChild(yAxis);

  const stage = document.createElement("div");
  stage.className = "chart-stage";

  const barChart = document.createElement("div");
  barChart.className = "bar-chart";

  monthData.forEach((d) => {
    const col = document.createElement("div");
    col.className = "bar-column";

    const bar = document.createElement("div");
    const heightPct = maxCount > 0 ? (d.count / maxCount) * 100 : 0;
    bar.className = "bar";
    bar.style.height = `${Math.max(heightPct, 1)}%`;

    const tooltip = document.createElement("div");
    tooltip.className = "bar-tooltip";
    tooltip.textContent = `${d.monthName}: ${formatNumber(d.count)} ${t("recapPlays")}`;
    bar.appendChild(tooltip);

    const label = document.createElement("div");
    label.className = "bar-label";
    label.textContent = d.monthName;

    col.appendChild(bar);
    col.appendChild(label);
    barChart.appendChild(col);
  });

  stage.appendChild(barChart);
  chartRow.appendChild(stage);
  chart.appendChild(chartRow);
  return chart;
}

function createRecordCard({ label, emoji, track, recordValue, recordDesc, dateInfo }) {
  const card = document.createElement("div");
  card.className = "record-card";

  const top = document.createElement("div");
  top.className = "record-card-top";

  const labelEl = document.createElement("div");
  labelEl.className = "record-card-label";
  labelEl.innerHTML = `<span>${emoji}</span> <span>${escapeHtml(label)}</span>`;
  top.appendChild(labelEl);

  if (track && track.trackUri) {
    const statsBtn = createSongStatsButton(track.trackUri);
    top.appendChild(statsBtn);
  }
  card.appendChild(top);

  const content = document.createElement("div");
  content.className = "record-card-content";

  const artDiv = document.createElement("div");
  artDiv.className = "record-artwork";
  if (track && track.trackUri) {
    artDiv.dataset.trackUri = track.trackUri;
    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient((track.trackName || "") + (track.artistName || ""));
    placeholder.textContent = getInitials(track.trackName, track.artistName);

    const img = document.createElement("img");
    img.style.display = "none";
    img.alt = "";
    img.loading = "lazy";

    artDiv.appendChild(placeholder);
    artDiv.appendChild(img);
  }
  content.appendChild(artDiv);

  const details = document.createElement("div");
  details.className = "record-details";

  const trackNameEl = document.createElement("div");
  trackNameEl.className = "record-track-name";
  if (track) {
    trackNameEl.textContent = track.trackName;
    trackNameEl.title = track.trackName;
  } else {
    trackNameEl.textContent = "—";
  }
  details.appendChild(trackNameEl);

  const artistNameEl = document.createElement("div");
  artistNameEl.className = "record-artist-name";
  if (track) {
    artistNameEl.textContent = track.artistName;
    artistNameEl.title = track.artistName;
  } else {
    artistNameEl.textContent = "—";
  }
  details.appendChild(artistNameEl);

  const statsRow = document.createElement("div");
  statsRow.className = "record-stats-row";
  statsRow.innerHTML = `
    <span class="record-stat-number">${formatNumber(recordValue || 0)}</span>
    <span class="record-stat-desc">${escapeHtml(recordDesc || "")}</span>
  `;
  details.appendChild(statsRow);
  content.appendChild(details);
  card.appendChild(content);

  if (dateInfo) {
    const footer = document.createElement("div");
    footer.className = "record-card-footer";
    footer.innerHTML = `<span class="record-date-badge">${escapeHtml(dateInfo)}</span>`;
    card.appendChild(footer);
  }

  return card;
}

function getTrackPersonalRecords(track) {
  const tsList = track.streamTimestamps || [];
  let peak1Day = 0;
  let l1 = 0;
  for (let r = 0; r < tsList.length; r++) {
    while (tsList[r] - tsList[l1] > 24 * 3600 * 1000) l1++;
    if (r - l1 + 1 > peak1Day) peak1Day = r - l1 + 1;
  }
  let peak7Days = 0;
  let l7 = 0;
  for (let r = 0; r < tsList.length; r++) {
    while (tsList[r] - tsList[l7] > 7 * 24 * 3600 * 1000) l7++;
    if (r - l7 + 1 > peak7Days) peak7Days = r - l7 + 1;
  }
  return {
    streak: track.maxStreak || 1,
    peak1Day: peak1Day,
    peak7Days: peak7Days,
  };
}

function renderAllSongsSection() {
  const section = document.createElement("div");
  section.className = "stats-section";

  // Section header
  const header = document.createElement("div");
  header.className = "stats-section-header";
  header.innerHTML = `
    <h2 class="stats-section-title">
      <span>🌐</span> ${t("statsAllSongs")}
    </h2>
    <span class="stats-section-badge">${t("statsGeneralOverview")}</span>
  `;
  section.appendChild(header);

  // Records Grid
  const records = state.processedData.records;
  const recordsGrid = document.createElement("div");
  recordsGrid.className = "records-grid";

  // 1. Most Streamed All-Time
  if (records.allTime) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecordAllTime"),
        emoji: "👑",
        track: records.allTime,
        recordValue: records.allTime.timesListened,
        recordDesc: t("statsPeakCount"),
        dateInfo: `${t("thFirstListened")}: ${formatDate(records.allTime.firstListened)}`,
      })
    );
  }

  // 2. Most Streamed Last Year
  if (records.lastYear && records.lastYear.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: `${t("statsRecordLastYear")} (${records.lastYear.year})`,
        emoji: "⭐",
        track: records.lastYear.track,
        recordValue: records.lastYear.track.timesListened,
        recordDesc: t("statsPeakCount"),
        dateInfo: `${records.lastYear.year}`,
      })
    );
  }

  // 3. Most in a Row (Streak)
  if (records.streak && records.streak.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecordStreak"),
        emoji: "🔥",
        track: records.streak.track,
        recordValue: records.streak.count,
        recordDesc: t("statsStreakCount"),
        dateInfo: formatRecordDateRange(records.streak.start, records.streak.end),
      })
    );
  }

  // 4. Peak in 1 Day (24h)
  if (records.peak1Day && records.peak1Day.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecord1Day"),
        emoji: "⚡",
        track: records.peak1Day.track,
        recordValue: records.peak1Day.count,
        recordDesc: t("statsPeakCount"),
        dateInfo: formatRecordDateRange(records.peak1Day.start, records.peak1Day.end),
      })
    );
  }

  // 5. Peak in 7 Days
  if (records.peak7Days && records.peak7Days.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecord7Days"),
        emoji: "📅",
        track: records.peak7Days.track,
        recordValue: records.peak7Days.count,
        recordDesc: t("statsPeakCount"),
        dateInfo: formatRecordDateRange(records.peak7Days.start, records.peak7Days.end),
      })
    );
  }

  // 6. Peak in 30 Days
  if (records.peak30Days && records.peak30Days.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecord30Days"),
        emoji: "🌕",
        track: records.peak30Days.track,
        recordValue: records.peak30Days.count,
        recordDesc: t("statsPeakCount"),
        dateInfo: formatRecordDateRange(records.peak30Days.start, records.peak30Days.end),
      })
    );
  }

  // 7. Peak in 365 Days
  if (records.peak365Days && records.peak365Days.track) {
    recordsGrid.appendChild(
      createRecordCard({
        label: t("statsRecord365Days"),
        emoji: "🪐",
        track: records.peak365Days.track,
        recordValue: records.peak365Days.count,
        recordDesc: t("statsPeakCount"),
        dateInfo: formatRecordDateRange(records.peak365Days.start, records.peak365Days.end),
      })
    );
  }

  section.appendChild(recordsGrid);

  // Streams Over Time Line Graph
  const lineChart = createLineChart({
    timestamps: state.processedData.allStreamTimestamps,
    currentScale: state.statsAllSongsScale,
    targetTimeMs: state.statsAllSongsTargetTime,
    onTimeChange: (newTarget) => {
      state.statsAllSongsTargetTime = newTarget;
    },
    onScaleChange: (newScale) => {
      state.statsAllSongsScale = newScale;
      renderStatsView();
    },
    titleText: t("statsStreamsOverTime"),
    titleEmoji: "📈",
  });
  section.appendChild(lineChart);

  // Two column row for Monthly Activity & Listening Hours
  const chartsRow = document.createElement("div");
  chartsRow.className = "recap-charts-row";

  // Monthly Activity
  chartsRow.appendChild(
    createAutoscaledMonthlyChart({
      monthlyData: state.processedData.monthly,
      selectedYear: state.statsAllSongsMonthlyYear,
      onYearChange: (newYear) => {
        state.statsAllSongsMonthlyYear = newYear;
        renderStatsView();
      },
      titleText: t("statsMonthlyActivity"),
      titleEmoji: "📅",
    })
  );

  // Listening Hours
  chartsRow.appendChild(
    createAutoscaledHourlyChart({
      hourlyData: state.processedData.hourly,
      titleText: t("statsListeningHours"),
      titleEmoji: "🕐",
    })
  );

  section.appendChild(chartsRow);
  return section;
}

function renderThisSongSection() {
  const section = document.createElement("div");
  section.id = "this-song-section";
  section.className = "stats-section";

  // Section header
  const header = document.createElement("div");
  header.className = "stats-section-header";
  header.innerHTML = `
    <h2 class="stats-section-title">
      <span>🎵</span> ${t("statsThisSong")}
    </h2>
  `;
  section.appendChild(header);

  // Song Search Bar
  const searchContainer = document.createElement("div");
  searchContainer.className = "song-search-container";

  const inputWrap = document.createElement("div");
  inputWrap.className = "song-search-input-wrap";

  const searchIcon = document.createElement("span");
  searchIcon.className = "song-search-icon";
  searchIcon.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
    </svg>
  `;
  inputWrap.appendChild(searchIcon);

  const searchInput = document.createElement("input");
  searchInput.type = "text";
  searchInput.className = "song-search-input";
  searchInput.placeholder = t("searchSongPlaceholder");
  searchInput.autocomplete = "off";

  const clearBtn = document.createElement("button");
  clearBtn.className = "song-search-clear hidden";
  clearBtn.innerHTML = `
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
    </svg>
  `;
  inputWrap.appendChild(searchInput);
  inputWrap.appendChild(clearBtn);
  searchContainer.appendChild(inputWrap);

  const dropdown = document.createElement("div");
  dropdown.className = "song-search-dropdown hidden";
  searchContainer.appendChild(dropdown);
  section.appendChild(searchContainer);

  const tracks = state.processedData.tracks;

  // Populate input if song already selected
  if (state.selectedStatsSongUri && state.processedData.trackMap[state.selectedStatsSongUri]) {
    const sel = state.processedData.trackMap[state.selectedStatsSongUri];
    searchInput.value = `${sel.trackName} — ${sel.artistName}`;
    clearBtn.classList.remove("hidden");
  }

  function doSearch(query) {
    const q = query.trim().toLowerCase();
    if (!q) {
      dropdown.classList.add("hidden");
      dropdown.innerHTML = "";
      clearBtn.classList.add("hidden");
      return;
    }
    clearBtn.classList.remove("hidden");

    const matches = tracks
      .filter((t) => (t.trackName && t.trackName.toLowerCase().includes(q)) || (t.artistName && t.artistName.toLowerCase().includes(q)))
      .slice(0, 8);

    if (matches.length === 0) {
      dropdown.innerHTML = `<div style="padding: 12px 16px; font-size: 0.8rem; color: var(--text-dim);">${t("searchNoResults")} "${escapeHtml(query)}"</div>`;
      dropdown.classList.remove("hidden");
      return;
    }

    dropdown.innerHTML = "";
    matches.forEach((item) => {
      const dropItem = document.createElement("div");
      dropItem.className = "song-search-dropdown-item";

      const art = document.createElement("div");
      art.className = "dropdown-item-artwork";
      art.dataset.trackUri = item.trackUri;

      const placeholder = document.createElement("div");
      placeholder.className = "artwork-placeholder";
      placeholder.style.background = generateGradient((item.trackName || "") + (item.artistName || ""));
      placeholder.textContent = getInitials(item.trackName, item.artistName);

      const img = document.createElement("img");
      img.style.display = "none";
      img.alt = "";
      img.loading = "lazy";

      art.appendChild(placeholder);
      art.appendChild(img);
      dropItem.appendChild(art);

      const info = document.createElement("div");
      info.className = "dropdown-item-info";
      info.innerHTML = `
        <span class="dropdown-item-title">${escapeHtml(item.trackName)}</span>
        <span class="dropdown-item-artist">${escapeHtml(item.artistName)}</span>
      `;
      dropItem.appendChild(info);

      const stat = document.createElement("div");
      stat.className = "dropdown-item-stat";
      stat.textContent = `${formatNumber(item.timesListened)} ${t("recapPlays")}`;
      dropItem.appendChild(stat);

      dropItem.addEventListener("click", () => {
        state.selectedStatsSongUri = item.trackUri;
        state.statsSongTargetTime = null;
        dropdown.classList.add("hidden");
        renderStatsView();
      });

      dropdown.appendChild(dropItem);
    });

    dropdown.classList.remove("hidden");
    setupArtworkObserver();
    dropdown.querySelectorAll(".dropdown-item-artwork[data-track-uri]").forEach(observeArtwork);
  }

  searchInput.addEventListener("input", (e) => {
    doSearch(e.target.value);
  });

  searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim()) {
      doSearch(searchInput.value);
    }
  });

  clearBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    searchInput.value = "";
    clearBtn.classList.add("hidden");
    dropdown.classList.add("hidden");
    state.selectedStatsSongUri = null;
    state.statsSongTargetTime = null;
    renderStatsView();
  });

  document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target)) {
      dropdown.classList.add("hidden");
    }
  });

  // Body of This Song section
  const contentWrapper = document.createElement("div");
  contentWrapper.id = "this-song-content";

  const selectedTrack = state.selectedStatsSongUri ? state.processedData.trackMap[state.selectedStatsSongUri] : null;

  if (!selectedTrack) {
    // Empty state
    const emptyState = document.createElement("div");
    emptyState.className = "stats-empty-state";
    emptyState.innerHTML = `
      <div class="stats-empty-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
        </svg>
      </div>
      <h3 class="stats-empty-title">${t("emptySearchTitle")}</h3>
      <p class="stats-empty-desc">${t("emptySearchDesc")}</p>
    `;
    contentWrapper.appendChild(emptyState);
  } else {
    // Song Hero Card
    const heroCard = document.createElement("div");
    heroCard.className = "song-hero-card";

    const heroMain = document.createElement("div");
    heroMain.className = "song-hero-main";

    const heroArt = document.createElement("div");
    heroArt.className = "song-hero-artwork";
    heroArt.dataset.trackUri = selectedTrack.trackUri;

    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient((selectedTrack.trackName || "") + (selectedTrack.artistName || ""));
    placeholder.textContent = getInitials(selectedTrack.trackName, selectedTrack.artistName);

    const img = document.createElement("img");
    img.style.display = "none";
    img.alt = "";
    img.loading = "lazy";

    heroArt.appendChild(placeholder);
    heroArt.appendChild(img);
    heroMain.appendChild(heroArt);

    const heroDetails = document.createElement("div");
    heroDetails.className = "song-hero-details";

    const titleEl = document.createElement("div");
    titleEl.className = "song-hero-title searchable-item";
    titleEl.textContent = selectedTrack.trackName;
    titleEl.addEventListener("click", () => {
      window.open(getSpotifyTrackUrl(selectedTrack), "_blank");
    });
    heroDetails.appendChild(titleEl);

    const metaEl = document.createElement("div");
    metaEl.className = "song-hero-meta";
    metaEl.innerHTML = `
      <span class="searchable-item">${escapeHtml(selectedTrack.artistName)}</span> · 
      <span class="searchable-item">${escapeHtml(selectedTrack.albumName || "—")}</span>
    `;
    metaEl.querySelectorAll(".searchable-item")[0].addEventListener("click", () => {
      window.open(getSpotifyArtistUrl(selectedTrack.artistName), "_blank");
    });
    metaEl.querySelectorAll(".searchable-item")[1].addEventListener("click", () => {
      if (selectedTrack.albumName) {
        window.open(getSpotifyAlbumUrl(selectedTrack.albumName, selectedTrack.artistName), "_blank");
      }
    });
    heroDetails.appendChild(metaEl);
    heroMain.appendChild(heroDetails);
    heroCard.appendChild(heroMain);

    // Personal records & metrics
    const personalRecords = getTrackPersonalRecords(selectedTrack);
    const allTimeRank = tracks.findIndex((t) => t.trackUri === selectedTrack.trackUri) + 1;

    const badgesGrid = document.createElement("div");
    badgesGrid.className = "song-badges-grid";
    badgesGrid.innerHTML = `
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgeTotalPlays")}</span>
        <span class="song-badge-value">${formatNumber(selectedTrack.timesListened)}</span>
        <span class="song-badge-sub">${t("recapPlays")}</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgeTotalTime")}</span>
        <span class="song-badge-value">${formatMinutes(selectedTrack.totalTimeMs)}</span>
        <span class="song-badge-sub">${t("minutes")}</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgeAllTimeRank")}</span>
        <span class="song-badge-value">#${allTimeRank}</span>
        <span class="song-badge-sub">/ ${formatNumber(tracks.length)}</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgeDuration")}</span>
        <span class="song-badge-value">${formatDuration(selectedTrack.estimatedDurationMs)}</span>
        <span class="song-badge-sub">min:sec</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgeFirstListened")}</span>
        <span class="song-badge-value" style="font-size: 0.95rem;">${formatDate(selectedTrack.firstListened)}</span>
        <span class="song-badge-sub">${t("thFirstListened")}</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgePersonalStreak")}</span>
        <span class="song-badge-value">${personalRecords.streak}</span>
        <span class="song-badge-sub">${t("statsStreakCount")}</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgePeak1Day")}</span>
        <span class="song-badge-value">${personalRecords.peak1Day}</span>
        <span class="song-badge-sub">${t("recapPlays")} / 24h</span>
      </div>
      <div class="song-badge-item">
        <span class="song-badge-label">${t("badgePeak7Days")}</span>
        <span class="song-badge-value">${personalRecords.peak7Days}</span>
        <span class="song-badge-sub">${t("recapPlays")} / 7d</span>
      </div>
    `;
    heroCard.appendChild(badgesGrid);
    contentWrapper.appendChild(heroCard);

    // Song Line Graph (Streams Over Time)
    const songLineChart = createLineChart({
      timestamps: selectedTrack.streamTimestamps,
      currentScale: state.statsSongScale,
      targetTimeMs: state.statsSongTargetTime,
      onTimeChange: (newTarget) => {
        state.statsSongTargetTime = newTarget;
      },
      onScaleChange: (newScale) => {
        state.statsSongScale = newScale;
        renderStatsView();
      },
      titleText: `${t("statsStreamsOverTime")}: ${selectedTrack.trackName}`,
      titleEmoji: "📈",
      isSongSpecific: true,
    });
    contentWrapper.appendChild(songLineChart);

    // Two column row for Monthly Activity & Listening Hours for this song
    const songChartsRow = document.createElement("div");
    songChartsRow.className = "recap-charts-row";

    // Song Monthly Activity
    songChartsRow.appendChild(
      createAutoscaledMonthlyChart({
        monthlyData: selectedTrack.monthlyMap,
        selectedYear: state.statsSongMonthlyYear,
        onYearChange: (newYear) => {
          state.statsSongMonthlyYear = newYear;
          renderStatsView();
        },
        titleText: t("statsMonthlyActivity"),
        titleEmoji: "📅",
      })
    );

    // Song Listening Hours
    songChartsRow.appendChild(
      createAutoscaledHourlyChart({
        hourlyData: selectedTrack.hourlyMap,
        titleText: t("statsListeningHours"),
        titleEmoji: "🕐",
      })
    );

    contentWrapper.appendChild(songChartsRow);
  }

  section.appendChild(contentWrapper);
  return section;
}

function renderStatsView() {
  $content.innerHTML = "";

  const container = document.createElement("div");
  container.className = "stats-wrapper fade-in";

  // Top Section: All Songs
  container.appendChild(renderAllSongsSection());

  // Bottom Section: This Song
  container.appendChild(renderThisSongSection());

  $content.appendChild(container);

  // Lazy load artworks
  setupArtworkObserver();
  container.querySelectorAll("[data-track-uri]").forEach(observeArtwork);
}

// ===== SEARCH FEATURE FUNCTIONS =====

function createBackToSearchBtn() {
  const wrapper = document.createElement("div");
  wrapper.className = "search-back-container";
  
  const btn = document.createElement("button");
  btn.className = "back-to-search-btn";
  btn.innerHTML = `
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
    <span>${t("backToSearch")} "${escapeHtml(state.searchQuery)}"</span>
  `;
  btn.addEventListener("click", () => {
    state.viewMode = "search";
    $viewTabs.querySelectorAll(".tab-btn").forEach((b) => {
      b.classList.toggle("active", b.dataset.view === "search");
    });
    renderCurrentView();
  });
  
  wrapper.appendChild(btn);
  return wrapper;
}

function navigateToSearch(query, category, uniqueKey) {
  if (state.viewMode !== "search") {
    state.previousViewMode = state.viewMode;
  }
  state.viewMode = "search";
  state.searchQuery = query;
  state.searchFilter = category;
  
  state.expandedSearchItems.clear();
  if (uniqueKey) {
    state.expandedSearchItems.add(uniqueKey);
  }
  
  $viewTabs.querySelectorAll(".tab-btn").forEach((b) => {
    b.classList.toggle("active", b.dataset.view === "search");
  });
  
  renderCurrentView();
}

function renderSearchView() {
  let searchWrapper = $content.querySelector(".search-wrapper");
  if (!searchWrapper) {
    $content.innerHTML = "";
    searchWrapper = document.createElement("div");
    searchWrapper.className = "search-wrapper fade-in";
    
    // Header row
    const header = document.createElement("div");
    header.className = "search-header-row";
    
    const title = document.createElement("h2");
    title.className = "search-main-title";
    title.textContent = t("tabSearch");
    header.appendChild(title);
    
    // Back button
    const backBtn = document.createElement("button");
    backBtn.id = "search-back-btn";
    backBtn.className = "search-back-btn hidden";
    backBtn.innerHTML = `
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
      <span></span>
    `;
    header.appendChild(backBtn);
    
    searchWrapper.appendChild(header);

    // Search input
    const barContainer = document.createElement("div");
    barContainer.className = "search-bar-container";
    barContainer.innerHTML = `
      <div class="search-input-wrapper">
        <span class="search-icon">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </span>
        <input type="text" id="search-input" autocomplete="off" placeholder="${t("searchPlaceholder")}">
        <button id="search-clear-btn" class="search-clear-btn hidden">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
      </div>
    `;
    searchWrapper.appendChild(barContainer);

    // Filter pills
    const pillsContainer = document.createElement("div");
    pillsContainer.className = "search-filter-pills";
    pillsContainer.innerHTML = `
      <button class="filter-pill active" data-filter="all">${t("searchPillAll")}</button>
      <button class="filter-pill" data-filter="songs">${t("searchPillSongs")}</button>
      <button class="filter-pill" data-filter="artists">${t("searchPillArtists")}</button>
    `;
    searchWrapper.appendChild(pillsContainer);

    // Results container
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "search-results";
    resultsContainer.className = "search-results-container";
    searchWrapper.appendChild(resultsContainer);

    $content.appendChild(searchWrapper);

    const input = document.getElementById("search-input");
    const clearBtn = document.getElementById("search-clear-btn");
    
    input.value = state.searchQuery;
    if (state.searchQuery) clearBtn.classList.remove("hidden");

    input.addEventListener("input", (e) => {
      state.searchQuery = e.target.value;
      if (state.searchQuery) {
        clearBtn.classList.remove("hidden");
      } else {
        clearBtn.classList.add("hidden");
      }
      updateSearchResults();
    });

    clearBtn.addEventListener("click", () => {
      input.value = "";
      state.searchQuery = "";
      clearBtn.classList.add("hidden");
      input.focus();
      updateSearchResults();
    });

    pillsContainer.addEventListener("click", (e) => {
      const pill = e.target.closest(".filter-pill");
      if (!pill) return;
      pillsContainer.querySelectorAll(".filter-pill").forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.searchFilter = pill.dataset.filter;
      updateSearchResults();
    });

    backBtn.addEventListener("click", () => {
      if (state.previousViewMode) {
        const view = state.previousViewMode;
        state.viewMode = view;
        state.previousViewMode = "";
        $viewTabs.querySelectorAll(".tab-btn").forEach((b) => {
          b.classList.toggle("active", b.dataset.view === view);
        });
        renderCurrentView();
      }
    });
  }

  // Sync UI states
  const input = document.getElementById("search-input");
  if (input && input.value !== state.searchQuery) {
    input.value = state.searchQuery;
    const clearBtn = document.getElementById("search-clear-btn");
    if (clearBtn) {
      if (state.searchQuery) clearBtn.classList.remove("hidden");
      else clearBtn.classList.add("hidden");
    }
  }

  const pillsContainer = searchWrapper.querySelector(".search-filter-pills");
  if (pillsContainer) {
    pillsContainer.querySelectorAll(".filter-pill").forEach(p => {
      p.classList.toggle("active", p.dataset.filter === state.searchFilter);
    });
  }

  const backBtn = document.getElementById("search-back-btn");
  if (state.previousViewMode) {
    backBtn.classList.remove("hidden");
    const tabName = state.previousViewMode === "total" ? t("tabTotal") :
                    state.previousViewMode === "byYear" ? t("tabByYear") :
                    state.previousViewMode === "recap" ? t("tabRecap") : "";
    backBtn.querySelector("span").textContent = `${t("backToTab")} ${tabName}`;
  } else {
    backBtn.classList.add("hidden");
  }

  updateSearchResults();
}

function updateSearchResults() {
  const container = document.getElementById("search-results");
  if (!container) return;

  const query = state.searchQuery.trim();
  if (!query) {
    container.innerHTML = `
      <div class="search-empty-state">
        <div class="search-empty-icon">🔍</div>
        <p>${state.language === 'it' ? 'Cerca canzoni o artisti per statistiche dettagliate' : 'Search for songs or artists for detailed stats'}</p>
      </div>
    `;
    return;
  }

  const { songs, artists } = performSearch(query, state.searchFilter);

  if (songs.length === 0 && artists.length === 0) {
    container.innerHTML = `
      <div class="search-empty-state">
        <p>${t("searchNoResults")} "<strong class="accent">${escapeHtml(query)}</strong>"</p>
      </div>
    `;
    return;
  }

  container.innerHTML = "";

  if (state.searchFilter === "all") {
    if (songs.length > 0) {
      renderCategorySection(container, "songs", songs.slice(0, 5), songs.length > 5);
    }
    if (artists.length > 0) {
      renderCategorySection(container, "artists", artists.slice(0, 5), artists.length > 5);
    }
  } else {
    const list = state.searchFilter === "songs" ? songs : artists;
    renderCategorySection(container, state.searchFilter, list, false);
  }

  setupArtworkObserver();
  container.querySelectorAll(".track-artwork[data-track-uri]").forEach(observeArtwork);
}

function performSearch(query, filter) {
  if (!query) return { songs: [], artists: [] };

  const q = query.toLowerCase().trim();
  const data = state.processedData;

  let songs = [];
  let artists = [];

  if (filter === "all" || filter === "songs") {
    songs = data.tracks.filter(
      (t) =>
        (t.trackName && t.trackName.toLowerCase().includes(q)) ||
        (t.artistName && t.artistName.toLowerCase().includes(q)) ||
        (t.albumName && t.albumName.toLowerCase().includes(q))
    );
  }

  if (filter === "all" || filter === "artists") {
    artists = data.artists.filter(
      (a) => a.name && a.name.toLowerCase().includes(q)
    );
  }

  return { songs, artists };
}

function renderCategorySection(parentContainer, category, items, showSeeAll) {
  const section = document.createElement("div");
  section.className = "search-category-section";

  const titleRow = document.createElement("div");
  titleRow.className = "search-category-title-row";
  
  const title = document.createElement("h3");
  title.className = "search-category-title";
  title.textContent = category === "songs" ? t("searchPillSongs") : t("searchPillArtists");
  titleRow.appendChild(title);

  if (showSeeAll) {
    const seeAllBtn = document.createElement("button");
    seeAllBtn.className = "see-all-btn";
    seeAllBtn.textContent = state.language === "it" ? "Vedi tutti" : "See all";
    seeAllBtn.addEventListener("click", () => {
      state.searchFilter = category;
      const pillsContainer = document.querySelector(".search-filter-pills");
      if (pillsContainer) {
        pillsContainer.querySelectorAll(".filter-pill").forEach(p => {
          p.classList.toggle("active", p.dataset.filter === category);
        });
      }
      updateSearchResults();
    });
    titleRow.appendChild(seeAllBtn);
  }
  section.appendChild(titleRow);

  const list = document.createElement("div");
  list.className = "search-items-list";

  items.forEach(item => {
    let key, titleText, subtitleText, trackUriForArtwork;
    if (category === "songs") {
      key = "song:" + item.trackUri;
      titleText = item.trackName;
      subtitleText = item.artistName;
      trackUriForArtwork = item.trackUri;
    } else if (category === "artists") {
      key = "artist:" + item.name;
      titleText = item.name;
      subtitleText = `${formatNumber(item.uniqueTracks)} ${state.language === "it" ? "brani unici" : "unique tracks"} · ${formatNumber(item.timesListened)} ${t("recapPlays")}`;
      trackUriForArtwork = item.topTrackUri;
    }

    const card = document.createElement("div");
    card.className = "search-item-card" + (state.expandedSearchItems.has(key) ? " expanded" : "");
    card.dataset.key = key;

    const cardHeader = document.createElement("div");
    cardHeader.className = "search-item-header";
    
    const artDiv = document.createElement("div");
    artDiv.className = "track-artwork";
    if (category === "artists") artDiv.classList.add("artist-art");
    
    if (trackUriForArtwork) {
      artDiv.dataset.trackUri = trackUriForArtwork;
    }
    const placeholder = document.createElement("div");
    placeholder.className = "artwork-placeholder";
    placeholder.style.background = generateGradient(titleText + (category === "songs" ? subtitleText : ""));
    placeholder.textContent = getInitials(titleText, category === "songs" ? subtitleText : "");
    artDiv.appendChild(placeholder);

    if (trackUriForArtwork) {
      const img = document.createElement("img");
      img.style.display = "none";
      img.alt = "";
      artDiv.appendChild(img);
    }
    cardHeader.appendChild(artDiv);

    const infoDiv = document.createElement("div");
    infoDiv.className = "search-item-info";
    
    const nameDiv = document.createElement("div");
    nameDiv.className = "search-item-name";
    const nameSpan = document.createElement("span");
    nameSpan.textContent = titleText;
    nameDiv.appendChild(nameSpan);
    
    const subDiv = document.createElement("div");
    subDiv.className = "search-item-sub";
    
    if (category === "songs") {
      nameDiv.classList.add("track-title-wrapper");
      nameDiv.appendChild(createSongStatsButton(item.trackUri));
      nameSpan.classList.add("searchable-item");
      nameSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(getSpotifyTrackUrl(item), "_blank");
      });
      subDiv.innerHTML = `<span class="searchable-item">${escapeHtml(item.artistName)}</span>`;
      subDiv.querySelector(".searchable-item").addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(getSpotifyArtistUrl(item.artistName), "_blank");
      });
    } else if (category === "artists") {
      nameSpan.classList.add("searchable-item");
      nameSpan.addEventListener("click", (e) => {
        e.stopPropagation();
        window.open(getSpotifyArtistUrl(item.name), "_blank");
      });
      subDiv.textContent = subtitleText;
    }
    
    infoDiv.appendChild(nameDiv);
    infoDiv.appendChild(subDiv);
    cardHeader.appendChild(infoDiv);

    const expandIndicator = document.createElement("div");
    expandIndicator.className = "search-item-expand-indicator";
    expandIndicator.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    `;
    cardHeader.appendChild(expandIndicator);

    card.appendChild(cardHeader);

    const cardContent = document.createElement("div");
    cardContent.className = "search-item-content";
    if (state.expandedSearchItems.has(key)) {
      cardContent.appendChild(renderItemDetails(category, item));
    }
    card.appendChild(cardContent);

    cardHeader.addEventListener("click", (e) => {
      if (e.target.closest(".clickable-year") || e.target.closest(".searchable-item")) return;
      
      const isExpanded = state.expandedSearchItems.has(key);
      if (isExpanded) {
        state.expandedSearchItems.delete(key);
        card.classList.remove("expanded");
        cardContent.style.maxHeight = cardContent.scrollHeight + "px";
        requestAnimationFrame(() => {
          cardContent.style.maxHeight = "0";
        });
        setTimeout(() => {
          cardContent.innerHTML = "";
        }, 300);
      } else {
        state.expandedSearchItems.add(key);
        card.classList.add("expanded");
        cardContent.innerHTML = "";
        cardContent.appendChild(renderItemDetails(category, item));
        
        cardContent.style.maxHeight = "0";
        requestAnimationFrame(() => {
          cardContent.style.maxHeight = cardContent.scrollHeight + "px";
          setTimeout(() => {
            cardContent.style.maxHeight = "none";
          }, 300);
        });

        setupArtworkObserver();
        cardContent.querySelectorAll(".track-artwork[data-track-uri]").forEach(observeArtwork);
      }
    });

    list.appendChild(card);
  });

  section.appendChild(list);
  parentContainer.appendChild(section);
}

function renderItemDetails(category, item) {
  const detailContainer = document.createElement("div");
  detailContainer.className = "search-item-detail-panel";

  if (category === "songs") {
    detailContainer.innerHTML = renderYearBreakdownHTML(item.timesListened, item.totalTimeMs, item.years);
    attachYearClickHandlers(detailContainer);
  } else if (category === "artists") {
    const statsHtml = `
      <div class="artist-detail-section">
        <h4 class="detail-subtitle">${state.language === "it" ? "Statistiche di ascolto" : "Listening Statistics"}</h4>
        ${renderYearBreakdownHTML(item.timesListened, item.totalTimeMs, item.years)}
      </div>
      <div class="artist-detail-section">
        <h4 class="detail-subtitle">${state.language === "it" ? "Brani più ascoltati" : "Top Listened Songs"}</h4>
        <div class="nested-songs-list"></div>
      </div>
    `;
    detailContainer.innerHTML = statsHtml;
    attachYearClickHandlers(detailContainer);

    const nestedList = detailContainer.querySelector(".nested-songs-list");
    const artistSongs = state.processedData.tracks
      .filter(t => t.artistName === item.name)
      .slice(0, 10);

    artistSongs.forEach((song, idx) => {
      nestedList.appendChild(createNestedSongRow(song, idx + 1));
    });
  }

  return detailContainer;
}

function renderYearBreakdownHTML(totalPlays, totalMs, yearsMap) {
  const yearsSorted = Object.entries(yearsMap || {}).sort((a, b) => b[0] - a[0]);

  return `
    <table class="detail-stats-table">
      <thead>
        <tr>
          <th>${state.language === "it" ? "Anno" : "Year"}</th>
          <th class="col-numeric">${state.language === "it" ? "Ascolti" : "Plays"}</th>
          <th class="col-numeric">${state.language === "it" ? "Minuti" : "Minutes"}</th>
        </tr>
      </thead>
      <tbody>
        <tr class="total-row">
          <td><strong>Total</strong></td>
          <td class="col-numeric"><strong>${formatNumber(totalPlays)}</strong></td>
          <td class="col-numeric"><strong>${formatMinutes(totalMs)}</strong></td>
        </tr>
        ${yearsSorted.map(([year, stats]) => `
          <tr>
            <td><a href="#" class="clickable-year" data-year="${year}">${year}</a></td>
            <td class="col-numeric">${formatNumber(stats.timesListened)}</td>
            <td class="col-numeric">${formatMinutes(stats.totalTimeMs)}</td>
          </tr>
        `).join("")}
      </tbody>
    </table>
  `;
}

function attachYearClickHandlers(container) {
  container.querySelectorAll(".clickable-year").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const year = e.target.dataset.year;
      state.viewMode = "byYear";
      state.expandedYears.add(year);
      
      $viewTabs.querySelectorAll(".tab-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.view === "byYear");
      });
      
      renderCurrentView();

      setTimeout(() => {
        const section = document.getElementById(`year-content-${year}`);
        if (section) {
          section.closest(".year-section").scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, 100);
    });
  });
}

function createNestedSongRow(song, index) {
  const row = document.createElement("div");
  row.className = "nested-song-row";
  const subKey = "subsong:" + song.trackUri;
  
  const isExpanded = state.expandedSearchItems.has(subKey);
  row.classList.toggle("expanded", isExpanded);

  const header = document.createElement("div");
  header.className = "nested-song-header";
  header.innerHTML = `
    <span class="nested-song-index">${index}</span>
    <div class="nested-song-title-group">
      <span class="nested-song-title searchable-item">${escapeHtml(song.trackName)}</span>
      <span class="nested-song-meta">${formatNumber(song.timesListened)} ${t("recapPlays")} · ${formatMinutes(song.totalTimeMs)} ${t("recapMin")}</span>
    </div>
    <span class="nested-song-expand-indicator">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
    </span>
  `;

  const titleSpan = header.querySelector(".nested-song-title");
  titleSpan.addEventListener("click", (e) => {
    e.stopPropagation();
    window.open(getSpotifyTrackUrl(song), "_blank");
  });

  const titleGroup = header.querySelector(".nested-song-title-group");
  titleGroup.classList.add("track-title-wrapper");
  titleGroup.appendChild(createSongStatsButton(song.trackUri));

  const details = document.createElement("div");
  details.className = "nested-song-details";
  if (isExpanded) {
    details.innerHTML = renderYearBreakdownHTML(song.timesListened, song.totalTimeMs, song.years);
    attachYearClickHandlers(details);
  }

  header.addEventListener("click", (e) => {
    e.stopPropagation();
    const active = state.expandedSearchItems.has(subKey);
    if (active) {
      state.expandedSearchItems.delete(subKey);
      row.classList.remove("expanded");
      details.style.maxHeight = details.scrollHeight + "px";
      requestAnimationFrame(() => {
        details.style.maxHeight = "0";
      });
      setTimeout(() => {
        details.innerHTML = "";
      }, 300);
    } else {
      state.expandedSearchItems.add(subKey);
      row.classList.add("expanded");
      details.innerHTML = renderYearBreakdownHTML(song.timesListened, song.totalTimeMs, song.years);
      attachYearClickHandlers(details);
      
      details.style.maxHeight = "0";
      requestAnimationFrame(() => {
        details.style.maxHeight = details.scrollHeight + "px";
        setTimeout(() => {
          details.style.maxHeight = "none";
        }, 300);
      });
    }
  });

  row.appendChild(header);
  row.appendChild(details);
  return row;
}

// ===== EVENT LISTENERS =====
function init() {
  // Language toggle (both upload and dashboard)
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      setLanguage(btn.dataset.lang);
    });
  });

  // Drag and drop
  $dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    $dropZone.classList.add("dragover");
  });

  $dropZone.addEventListener("dragleave", () => {
    $dropZone.classList.remove("dragover");
  });

  $dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    $dropZone.classList.remove("dragover");
    const file = e.dataTransfer.files[0];
    handleFile(file);
  });

  // File input
  $fileInput.addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (file) handleFile(file);
  });

  // Change history
  $changeHistoryBtn.addEventListener("click", () => {
    $dashboard.classList.add("hidden");
    $dashboard.classList.remove("fade-in");
    const guideScreen = document.getElementById("guide-screen");
    if (guideScreen) guideScreen.classList.add("hidden");
    $uploadScreen.classList.remove("hidden");
    state.processedData = null;
    state.artworkCache = {};
    state.expandedYears.clear();
    state.recapYear = "all";
    state.searchQuery = "";
    state.searchFilter = "all";
    state.previousViewMode = "";
    state.expandedSearchItems.clear();
    state.selectedStatsSongUri = null;
    state.statsAllSongsScale = "all";
    state.statsAllSongsTargetTime = null;
    state.statsAllSongsHourFrom = 0;
    state.statsAllSongsHourTo = 23;
    state.statsAllSongsMonthlyYear = "all";
    state.statsSongScale = "all";
    state.statsSongTargetTime = null;
    state.statsSongHourFrom = 0;
    state.statsSongHourTo = 23;
    state.statsSongMonthlyYear = "all";
    $content.innerHTML = "";
    $fileInput.value = "";
  });

  // Guide screen navigation
  const $guideScreen = document.getElementById("guide-screen");
  const $guideOpenBtn = document.getElementById("guide-open-btn");
  const $guideBackBtn = document.getElementById("guide-back-btn");
  const $guideCtaBackBtn = document.getElementById("guide-cta-back-btn");

  if ($guideOpenBtn && $guideScreen) {
    $guideOpenBtn.addEventListener("click", () => {
      $uploadScreen.classList.add("hidden");
      $guideScreen.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  function closeGuide() {
    if ($guideScreen) {
      $guideScreen.classList.add("hidden");
      $uploadScreen.classList.remove("hidden");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if ($guideBackBtn) $guideBackBtn.addEventListener("click", closeGuide);
  if ($guideCtaBackBtn) $guideCtaBackBtn.addEventListener("click", closeGuide);

  // View tabs
  $viewTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;
    const view = btn.dataset.view;
    if (view === state.viewMode) return;

    if (view !== "search" && state.viewMode === "search") {
      state.previousViewMode = "";
    }
    state.viewMode = view;
    $viewTabs.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderCurrentView();
  });
}

// ===== START =====
init();
