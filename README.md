# SpotiWrapped 🎵

[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-1DB954?logo=github&logoColor=white)](https://solvedegiggi.github.io/spotiwrapped/)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Privacy](https://img.shields.io/badge/Privacy-100%25%20Client--Side-1DB954)](#-privacy--security)
[![Zero Backend](https://img.shields.io/badge/Backend-None%20(Static)-blue)](#-tech-stack)
[![Localization](https://img.shields.io/badge/Languages-EN%20%7C%20IT-purple)](#-features)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> 🌐 **Try it Live Online:** [https://solvedegiggi.github.io/spotiwrapped/](https://solvedegiggi.github.io/spotiwrapped/)

An interactive, client-side web application to explore, analyze, and visualize your lifetime Spotify streaming history. Don't wait for December — explore your personal listening statistics, lifetime records, top artists, and favorite tracks anytime!

---

## 📑 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [How to Get Your Spotify Data](#-how-to-get-your-spotify-data)
- [Getting Started](#-getting-started)
- [Supported File Formats](#-supported-file-formats)
- [Views & Analytics](#-views--analytics)
- [Tech Stack](#-tech-stack)
- [Privacy & Security](#-privacy--security)
- [Disclaimer](#-disclaimer)
- [License](#-license)

---

## 🎧 Overview

**SpotiWrapped** parses your Spotify streaming export files directly in your web browser. With zero server uploads and zero tracking, your listening data remains entirely private while giving you rich insights, interactive charts, and lifetime records that go far beyond standard annual recaps.

---

## ✨ Key Features

- **🔒 100% Client-Side & Private**: All file parsing, data aggregation, and chart calculations happen exclusively in your browser. Nothing is ever sent to any external server.
- **📦 Direct ZIP or JSON Upload**: Drag & drop your downloaded Spotify `.zip` file directly — **no manual unzipping required** (powered by JSZip). Also supports individual JSON streaming files.
- **🏆 All-Time & Annual Leaderboards**: Detailed rankings for Top Tracks, Top Artists, and Top Albums across your entire lifetime or segmented by year.
- **📈 Records & Personal Insights**:
  - **Peak Listening Days**: Record 24-hour, 7-day, 30-day, and 365-day peak stream counts.
  - **Personal Streaks**: Your longest consecutive listen streak for any single track.
  - **Most Streamed**: All-time vs. recent year champion tracks.
- **📊 Interactive Timeline & Graphs**:
  - Multi-scale zoom (from 1 Day to 12 Years / All Time).
  - 24-Hour listening time distribution (hourly filter).
  - Monthly activity trends.
- **🔍 Deep Search & Track Profiles**: Live search across songs and artists. Click any track to see its personal timeline, play history, first listened date, estimated duration, and rank over time.
- **🎨 Dynamic Album Art**: Automatically fetches album covers via Spotify oEmbed, with fallback generative gradient artwork.
- **🌐 Bilingual UI**: Instant toggle between **English** and **Italian**.

---

## 📥 How to Get Your Spotify Data

Follow these steps to download your lifetime streaming history from Spotify:

1. **Visit Privacy Settings**:
   Log into your account and open the [Spotify Privacy Settings](https://www.spotify.com/account/privacy/).
2. **Request Extended Streaming History**:
   - Scroll down to the **"Download your data"** section.
   - Check the box for **Extended streaming history** *(Important: Do not select only "Account data", as it only covers the past year. Extended history contains your complete lifetime data!)*.
   - Click **Request data**.
3. **Confirm the Request**:
   Spotify will send a confirmation link to your registered email address. Open it and click **Confirm**.
4. **Wait for Preparation**:
   Spotify compiles your full history. This usually takes between **2 to 5 days** (up to 30 days depending on account age).
5. **Download & Drop**:
   Once you receive the download email from Spotify, save the `.zip` file and drop it straight into **SpotiWrapped**!

---

## 🚀 Getting Started

Because SpotiWrapped is built with vanilla web technologies, there are no build steps, compilers, or heavy dependencies required.

### Option 1: Live Web App (No Installation Needed)
Launch SpotiWrapped instantly in your browser via GitHub Pages:  
👉 **[https://solvedegiggi.github.io/spotiwrapped/](https://solvedegiggi.github.io/spotiwrapped/)**

### Option 2: Run Locally (Direct File Opening)
1. Clone or download this repository:
   ```bash
   git clone https://github.com/Solvedegiggi/spotiwrapped.git
   ```
2. Double-click `index.html` or open it in any modern browser (Chrome, Firefox, Safari, Edge, etc.).

### Option 3: Local HTTP Server (Recommended for Development)
Running through a local web server ensures optimal performance and asset resolution:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (npx)
npx serve

# Or use the VS Code "Live Server" extension
```

Then navigate to `http://localhost:8000` in your web browser.

---

## 📂 Supported File Formats

SpotiWrapped accepts both **direct `.zip` archives** and individual **`.json` files** from Spotify data exports. **You can drop the entire unmodified `.zip` file directly into the browser — no extraction or unzipping required!**

| Format | File / Archive Pattern | Key Attributes |
| :--- | :--- | :--- |
| **Direct ZIP Archive** *(Easiest)* | `*.zip` (e.g. `my_spotify_data.zip`) | Drag & drop the whole ZIP file downloaded from Spotify. SpotiWrapped automatically detects, decompresses, and aggregates all streaming history files inside. |
| **Extended Streaming History** *(Recommended)* | `endsong_*.json`, `Streaming_History_Audio_*.json` | Full lifetime timestamps (`ts`), milliseconds played (`ms_played`), track name, artist, album, and Spotify track URIs. |
| **Basic Account History** | `StreamingHistory*.json` | Up to 1 year of timestamps (`endTime`), `msPlayed`, track name, and artist. |

> [!TIP]
> **Drop the entire `.zip` file!**  
> You don't need to extract or unzip the files first. Simply drag and drop the whole `.zip` archive you received from Spotify directly onto the upload zone. Client-side JSZip reads and merges all history files in memory instantly.

---

## 📊 Views & Analytics

| View | Description |
| :--- | :--- |
| **Total** | Global leaderboard ranking your most listened tracks, artists, and albums of all time. Includes sortable columns, duration, first listen dates, and total playtime. |
| **By Year** | Year-by-year accordion breakdown. Select any specific year to view top tracks and artist statistics for that timeframe. |
| **Recap** | Spotify-Wrapped-style summary cards featuring total minutes streamed, unique tracks, top 5 artists and tracks, monthly activity chart, and listening hours. |
| **Stats** | Comprehensive analytical dashboard with timeline charts, flexible time scales (1 day to 12 years), hourly filters, and account milestones. Also includes a dedicated song search deep-dive. |
| **Search** | Instant search filter to find any song or artist in your catalog, view total play counts, and open tracks directly on Spotify. |

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid, CSS custom properties, responsive design)
- **Scripting**: Vanilla JavaScript (ES6+), zero frontend frameworks
- **ZIP Extraction**: [JSZip](https://stuk.github.io/jszip/) (via CDN) for fast client-side archive decompression
- **Metadata & Artwork**: Spotify oEmbed API for real-time album artwork resolution

---

## 🔒 Privacy & Security

- **Zero Data Collection**: No cookies, analytics, or user tracking.
- **In-Memory Processing**: Your streaming history is parsed in browser memory and is never written to external storage or transmitted across the network.
- **Open Source**: The code is 100% transparent and inspectable.

---

## ⚖️ Disclaimer

SpotiWrapped is an independent, open-source project and is not affiliated with, maintained, authorized, sponsored, or endorsed by Spotify AB. Spotify is a registered trademark of Spotify AB.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).
