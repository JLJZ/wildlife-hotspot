# Wildlife Map Enhancement Prompt

When working on the Wildlife Hotspot Viewer project:

## Development Guidelines

1. **Always check the species dataset** in `src/data/species.ts` for accurate conservation status and location data
2. **Use Leaflet.js best practices** for marker clustering and map interactions
3. **Maintain the dark theme** consistency across all components
4. **Preserve the IUCN status color coding** (EX, CR, EN, VU)
5. **Ensure mobile responsiveness** for the map and detail panel
6. **Test filtering functionality** works with the current dataset structure
7. **Use TypeScript interfaces** for type safety with species data

## Key Files to Reference

- `src/data/species.ts` - Data structure and types
- `src/components/Map.tsx` - Map implementation patterns
- `src/app/page.tsx` - State management patterns
- `SPEC.md` - Design requirements and specifications

## Common Tasks

### Adding New Species
- Update `speciesData` array in `src/data/species.ts`
- Ensure proper IUCN status coding
- Add accurate location coordinates
- Include all required fields (name, scientific, status, population, habitat, region, year, icon, description, locations)

### Map Customization
- Modify marker styles in `src/components/Map.tsx`
- Update clustering options for performance
- Adjust map tile layers for better visual consistency
- Ensure markers are color-coded by conservation status

### Filter Enhancements
- Update filter logic in `src/app/page.tsx`
- Add new filter types if needed
- Ensure search functionality works with new data
- Maintain performance with larger datasets

### UI/UX Improvements
- Follow dark theme color scheme
- Use Outfit font consistently
- Maintain responsive design patterns
- Ensure accessibility standards are met

## Performance Considerations
- Use `useMemo` for expensive calculations
- Implement virtualization for long lists
- Optimize map marker rendering
- Consider lazy loading for large datasets

## Testing Checklist
- [ ] Filter functionality works correctly
- [ ] Map interactions are smooth
- [ ] Detail panel displays correctly
- [ ] Mobile responsiveness is maintained
- [ ] TypeScript compilation passes
- [ ] No console errors in browser