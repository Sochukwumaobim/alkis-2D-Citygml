# ALKIS to 2D CityGML Web Viewer

> A browser-based GIS viewer that parses and visualises **ALKIS** (German cadastral land parcel data) as **2D CityGML** — serving spatial data through a lightweight Node.js backend with an interactive HTML/CSS/JavaScript frontend.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CityGML](https://img.shields.io/badge/CityGML-2.0-green.svg)](https://www.ogc.org/standards/citygml)
[![ALKIS](https://img.shields.io/badge/ALKIS-NAS%2FGML-blue.svg)](https://www.adv-online.de/)
[![Node.js](https://img.shields.io/badge/Node.js-Express-brightgreen.svg)](https://nodejs.org/)
[![GIS Studio](https://img.shields.io/badge/Project-GIS%20Studio-orange.svg)](#)

---

## 🗺️ Overview

**alkis-2D-Citygml** is a GIS Studio project that demonstrates how to consume, process, and interactively display **ALKIS** land parcel data in a web browser using the **CityGML** geographic markup standard.

ALKIS (Amtliches Liegenschaftskatasterinformationssystem) is Germany's official cadastral information system, providing authoritative land use and parcel boundary data in NAS/GML format. This project bridges that authoritative dataset with a lightweight, browser-accessible 2D map viewer.

### What it does

- **Parses ALKIS/NAS GML files** — reads land parcel geometries and attributes from official German cadastral data exports
- **Renders a 2D CityGML map view** — displays building footprints, parcel boundaries, and land use zones in the browser
- **Serves spatial data via Node.js** — a simple Express server delivers GML/GeoJSON data to the frontend
- **Interactive HTML/CSS/JS viewer** — pan, zoom, and inspect parcel features directly in the browser

---

## ✨ Features

- 🏘️ **ALKIS NAS/GML parsing** — reads official German cadastral data exports
- 🗺️ **2D CityGML building footprint rendering** — `bldg:Building` ground surface visualisation (LoD0 / LoD1 footprint)
- 🖥️ **Browser-based viewer** — zero GIS desktop software required; runs in any modern browser
- ⚡ **Lightweight Node.js backend** — minimal Express server for serving spatial data and static assets
- 📐 **CRS-aware geometry** — coordinate handling for German reference systems (ETRS89 / UTM / EPSG:25832)
- 📄 **Full project report included** — detailed academic documentation of methodology and results

---

## 📁 Repository Structure

```
alkis-2D-Citygml/
├── index.html                    # Main web viewer (map UI, feature inspection)
├── style.css                     # Map viewer styling
├── server.js                     # Node.js/Express backend (data serving)
├── pakckage.json                 # Node.js dependencies (rename to package.json)
├── GIS_STUDIO_PROJECT-Report.pdf # Full technical report
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites

| Requirement | Version | Notes |
|-------------|---------|-------|
| [Node.js](https://nodejs.org/) | 18+ | Runtime for the Express server |
| npm | 9+ | Included with Node.js |
| A modern browser | Chrome / Firefox / Edge | For the map viewer |
| ALKIS NAS/GML data | — | Obtainable from your state surveying authority (e.g. LGL BW, BKG) |

### Installation & Running

1. **Clone the repository**
   ```bash
   git clone https://github.com/Sochukwumaobim/alkis-2D-Citygml.git
   cd alkis-2D-Citygml
   ```

2. **Install dependencies**
   ```bash
   # Note: rename the file if needed
   mv pakckage.json package.json
   npm install
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **Open the viewer**
   Navigate to [http://localhost:3000](http://localhost:3000) in your browser.

5. **Load your ALKIS data**
   Place your NAS/GML file in the project directory and update the data path in `server.js` to point to your file.

---

## 🏗️ Architecture

```
┌─────────────────────────┐        ┌────────────────────────┐
│   ALKIS NAS/GML File    │        │   Browser (Viewer)     │
│  (Cadastral parcel data)│        │                        │
└────────────┬────────────┘        │  ┌──────────────────┐  │
             │                     │  │   index.html     │  │
             ▼                     │  │   (Map Canvas)   │  │
┌────────────────────────┐  HTTP   │  └────────┬─────────┘  │
│   Node.js / Express    │◀────────│           │            │
│      server.js         │─────────▶  GML/     │            │
│  (parse + serve data)  │         │  GeoJSON  │            │
└────────────────────────┘         │           ▼            │
                                   │  ┌──────────────────┐  │
                                   │  │  2D Map Renderer │  │
                                   │  │  Parcel Viewer   │  │
                                   │  └──────────────────┘  │
                                   └────────────────────────┘
```

---

## 📊 Data Format

### Input: ALKIS NAS/GML
ALKIS data is distributed in **NAS format** (Normbasierte Austauschschnittstelle), a GML application schema defined by the AdV (Arbeitsgemeinschaft der Vermessungsverwaltungen der Länder). Key feature types used:

- `ax:Gebaeude` — building footprints
- `ax:Flurstueck` — land parcels / cadastral units
- `ax:TatsaechlicheNutzung` — actual land use zones

### Output: 2D CityGML Viewer
The viewer renders a **2D planimetric (LoD0)** representation of CityGML building features:
- Ground surface geometries from `bldg:Building` elements
- Parcel boundary polygons
- Attribute tooltips (parcel ID, area, land use class)

---

## 📖 Project Report

A full GIS Studio project report is included as [`GIS_STUDIO_PROJECT-Report.pdf`](./GIS_STUDIO_PROJECT-Report.pdf), covering:

- Background on ALKIS and CityGML standards
- Data acquisition and preprocessing methodology
- Web viewer implementation and technology choices
- Coordinate reference system handling
- Results and visualisation examples
- Discussion and future work

---

## 🌍 Use Cases

- **Urban planning** — visualise cadastral parcel boundaries alongside building footprints in the browser
- **Land administration** — inspect ALKIS attributes without GIS desktop software
- **Smart city prototyping** — integrate land parcel data into web-based city dashboards
- **GIS education** — learn how ALKIS NAS/GML maps to CityGML concepts
- **Research** — study 2D footprint extraction from authoritative German geodata
- **Digital twin groundwork** — lay the 2D cadastral foundation before adding 3D LoD2 models

---

## 🛠️ Technology Stack

| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express |
| Frontend | Vanilla HTML5 / CSS3 / JavaScript |
| Data format in | ALKIS NAS/GML (AdV standard) |
| Data format out | CityGML 2.0 (OGC standard) |
| Coordinate system | ETRS89 / UTM Zone 32N (EPSG:25832) |

---

## 📚 Related Resources & Standards

- [AdV ALKIS Standard](https://www.adv-online.de/Produkte/Liegenschaftskataster/ALKIS/) — official ALKIS documentation (German)
- [OGC CityGML 2.0 Standard](https://www.ogc.org/standards/citygml)
- [BKG Geodata Portal](https://gdz.bkg.bund.de/) — German federal geodata including ALKIS derivatives
- [3DCityDB](https://www.3dcitydb.org/) — open-source city database for CityGML storage
- [QGIS](https://qgis.org/) — open-source GIS desktop for working with NAS/GML data

---

## 🤝 Contributing

Pull requests and issue reports are welcome. If you've extended the viewer (e.g. added WMS background layers, improved GML parsing, or added LoD1 extrusion), feel free to contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/wms-background-layer`)
3. Commit your changes with descriptive messages
4. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](./LICENSE) file for details.

---

## 🏆 Acknowledgements

Developed as part of a **GIS Studio** academic project, exploring the intersection of German official cadastral data (ALKIS) and the OGC CityGML standard for 2D web-based spatial visualisation.

---

*Keywords: ALKIS CityGML viewer, ALKIS NAS GML web viewer, German cadastral data visualization, 2D CityGML browser, NAS GML parser JavaScript, land parcel viewer Node.js, German Liegenschaftskataster web map, CityGML LoD0 footprint, ETRS89 EPSG 25832 web viewer, GIS studio project, ALKIS to GML conversion*
