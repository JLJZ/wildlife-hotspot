# Wildlife Hotspot Viewer - Specification

## 1. Project Overview

- **Project Name**: Wildlife Hotspot Viewer
- **Project Type**: Single-page interactive web application
- **Core Functionality**: An interactive world map that displays hotspots where endangered and extinct animals can be found, with detailed information about each species
- **Target Users**: Wildlife enthusiasts, educators, researchers, and anyone interested in animal conservation

---

## 2. UI/UX Specification

### Layout Structure

**Header (Fixed)**
- Height: 70px
- Contains: Logo/title, tagline
- Sticky at top

**Main Content Area**
- Full viewport height minus header
- Left: Interactive map (75% width on desktop)
- Right: Species detail panel (25% width on desktop, collapsible on mobile)
- Mobile: Map full width, detail panel as overlay modal

**Footer**
- Height: 50px
- Contains: Data source attribution, credits

### Responsive Breakpoints
- Desktop: > 1024px (side-by-side layout)
- Tablet: 768px - 1024px (side-by-side with narrower panel)
- Mobile: < 768px (stacked layout with overlay panel)

### Visual Design

**Color Palette**
- Background: `#0d1117` (deep space black)
- Surface: `#161b22` (dark charcoal)
- Surface Elevated: `#21262d` (lighter charcoal)
- Primary Accent: `#58a6ff` (electric blue)
- Endangered: `#f85149` (coral red)
- Extinct: `#8b949e` (muted gray)
- Critically Endangered: `#f0883e` (amber orange)
- Text Primary: `#f0f6fc` (bright white)
- Text Secondary: `#8b949e` (silver gray)
- Border: `#30363d` (subtle gray)
- Success/Vulnerable: `#3fb950` (green)

**Typography**
- Primary Font: `"Outfit", sans-serif` (Google Fonts)
- Monospace (for stats): `"JetBrains Mono", monospace`
- Title: 28px, weight 700
- Heading: 20px, weight 600
- Body: 15px, weight 400
- Caption: 13px, weight 400

**Spacing System**
- Base unit: 8px
- XS: 4px, SM: 8px, MD: 16px, LG: 24px, XL: 32px

**Visual Effects**
- Cards: `box-shadow: 0 4px 24px rgba(0, 0, 0, 0.4)`
- Hover transitions: 200ms ease-out
- Map markers: Pulsing animation for endangered species
- Panel slide-in: 300ms cubic-bezier(0.4, 0, 0.2, 1)

### Components

**Map Component**
- Leaflet.js with dark theme tiles (CartoDB Dark Matter)
- Custom markers:
  - Circle markers with color-coded fill based on conservation status
  - Size varies by population (small: <100, medium: 100-1000, large: >1000)
- Marker clustering for dense areas
- Hover: Show tooltip with species name and status

**Species Detail Panel**
- Header with species name and status badge
- Large species image/icon area
- Statistics grid:
  - Population count
  - Habitat type
  - Location region
  - Year discovered/classified
- Description text
- "Known Hotspots" section with mini-map markers
- Close button (X)

**Filter Bar**
- Conservation status filters (checkboxes):
  - Extinct (EX)
  - Critically Endangered (CR)
  - Endangered (EN)
  - Vulnerable (VU)
- Search input for species name
- "Show All" / "Reset" button

**Legend**
- Floating legend in bottom-left of map
- Shows color coding for conservation status
- Collapsible on mobile

---

## 3. Functionality Specification

### Core Features

1. **Interactive World Map**
   - Pan and zoom functionality
   - Dark-themed map tiles
   - Clickable markers showing species locations
   - Marker clustering for overlapping points

2. **Species Data Display**
   - Pre-loaded dataset of 20+ endangered/extinct species
   - Each species includes:
     - Common name
     - Scientific name
     - Conservation status (EX, CR, EN, VU)
     - Population estimate
     - Habitat type
     - Geographic region
     - Description
     - Multiple location coordinates

3. **Filtering System**
   - Filter by conservation status
   - Search by species name
   - Filters apply in real-time

4. **Detail Panel**
   - Click marker to open detail panel
   - Shows comprehensive species information
   - Displays all known locations for selected species

5. **Legend & Status Indicators**
   - Visual legend for status colors
   - Status badges with appropriate colors

### User Interactions
- Hover on marker: Show tooltip with species name
- Click marker: Open detail panel with full information
- Click filter checkbox: Update map markers
- Type in search: Filter species in real-time
- Click "Reset": Clear all filters
- Click panel close or outside: Close detail panel
- Pan/zoom map: Standard Leaflet controls

### Data Handling
- Static JSON dataset embedded in JavaScript
- No backend required
- Data includes real endangered species from IUCN categories

### Edge Cases
- No results found: Show "No species match your filters" message
- Single result: Still shows in detail panel
- Mobile: Panel becomes full-screen overlay

---

## 4. Acceptance Criteria

### Visual Checkpoints
- [ ] Dark theme applied consistently across all elements
- [ ] Map displays with CartoDB Dark Matter tiles
- [ ] Markers are color-coded by conservation status
- [ ] Status badges use correct colors (red for endangered, gray for extinct, orange for critically endangered)
- [ ] Detail panel slides in smoothly from right
- [ ] Typography uses Outfit font family
- [ ] Responsive layout works on mobile viewport

### Functional Checkpoints
- [ ] All 20+ species display on map as markers
- [ ] Clicking a marker opens the detail panel
- [ ] Filter checkboxes hide/show markers appropriately
- [ ] Search filters species by name
- [ ] Reset button clears all filters
- [ ] Legend displays and is accurate
- [ ] Map is pannable and zoomable

### Data Accuracy
- [ ] At least 5 extinct species included
- [ ] At least 5 critically endangered species included
- [ ] At least 5 endangered species included
- [ ] At least 5 vulnerable species included
- [ ] Each species has accurate IUCN-style status
