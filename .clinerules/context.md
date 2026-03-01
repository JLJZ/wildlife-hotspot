# Wildlife Hotspot Viewer Context

## Project Overview
- **Type**: Single-page interactive web application
- **Purpose**: Visualize endangered and extinct animal hotspots on a world map
- **Tech Stack**: Next.js 16.1.6, TypeScript, React, Leaflet.js, CSS-in-JS

## Key Components
- **Map.tsx**: Leaflet.js integration with marker clustering
- **FilterBar.tsx**: Conservation status filtering and search
- **DetailPanel.tsx**: Species information display
- **species.ts**: Comprehensive dataset (40 species, IUCN categories)

## Important Files
- `src/app/page.tsx` - Main application logic
- `src/data/species.ts` - Species data with locations
- `src/components/Map.tsx` - Map implementation
- `package.json` - Dependencies (leaflet, next, react)

## Development Commands
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run lint` - Run TypeScript/ESLint

## Data Structure
Species interface includes: id, name, scientific, status (EX/CR/EN/VU), population, habitat, region, locations[], description

## Styling
- Dark theme: #0d1117 background, #161b22 surfaces
- Status colors: EX=#8b949e, CR=#f0883e, EN=#f85149, VU=#3fb950
- Font: Outfit (Google Fonts)

## Performance Considerations
- Map markers use clustering for performance with 40+ species
- Species data is static JSON loaded at build time
- Filter operations use useMemo for performance
- Map component uses dynamic import with SSR disabled
- Consider virtualization for long lists in detail panels

## IUCN Conservation Status Codes
- **EX**: Extinct (Gray - #8b949e)
- **CR**: Critically Endangered (Orange - #f0883e)
- **EN**: Endangered (Red - #f85149)
- **VU**: Vulnerable (Green - #3fb950)

## Development Best Practices
1. Always check the species dataset in `src/data/species.ts` for accurate conservation status and location data
2. Use Leaflet.js best practices for marker clustering and map interactions
3. Maintain the dark theme consistency across all components
4. Preserve the IUCN status color coding (EX, CR, EN, VU)
5. Ensure mobile responsiveness for the map and detail panel
6. Test filtering functionality works with the current dataset structure
7. Use TypeScript interfaces for type safety with species data

## Key Files to Reference
- `src/data/species.ts` - Data structure and types
- `src/components/Map.tsx` - Map implementation patterns
- `src/app/page.tsx` - State management patterns
- `SPEC.md` - Design requirements and specifications