'use client';

import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';
import { Species, statusColors } from '@/data/species';

interface MapProps {
  species: Species[];
  onSpeciesSelect: (species: Species) => void;
}

export default function Map({ species, onSpeciesSelect }: MapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);
  const markerClusterRef = useRef<L.MarkerClusterGroup | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    // Initialize map
    const map = L.map(mapRef.current, {
      center: [20, 0],
      zoom: 2,
      minZoom: 2,
      maxZoom: 10,
      zoomControl: true,
      worldCopyJump: true,
      maxBounds: L.latLngBounds(L.latLng(-90, -Infinity), L.latLng(90, Infinity)),
      maxBoundsViscosity: 1.0,
      scrollWheelZoom: 'center'
    });

    // Add dark theme tiles
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 20
    }).addTo(map);

    // Add marker cluster group
    const markerCluster = L.markerClusterGroup({
      maxClusterRadius: 50,
      spiderfyOnMaxZoom: true,
      showCoverageOnHover: false,
      iconCreateFunction: function(cluster) {
        const count = cluster.getChildCount();
        let size = 'small';
        if (count > 20) size = 'large';
        else if (count > 10) size = 'medium';
        
        return L.divIcon({
          html: `<div><span>${count}</span></div>`,
          className: `marker-cluster marker-cluster-${size}`,
          iconSize: L.point(40, 40)
        });
      }
    });

    map.addLayer(markerCluster);

    mapInstanceRef.current = map;
    markerClusterRef.current = markerCluster;

    return () => {
      map.remove();
      mapInstanceRef.current = null;
      markerClusterRef.current = null;
    };
  }, []);

  // Update markers when species data changes
  useEffect(() => {
    if (!markerClusterRef.current) return;

    const markerCluster = markerClusterRef.current;
    markerCluster.clearLayers();

    species.forEach(speciesItem => {
      speciesItem.locations.forEach((location) => {
        const isCritical = speciesItem.status === 'CR';
        const size = speciesItem.population.includes('~') && 
          (speciesItem.population.includes('<') || parseInt(speciesItem.population.match(/\d+/)?.[0] || '0') < 100) ? 8 : 
          parseInt(speciesItem.population.match(/\d+/)?.[0] || '1000') > 1000 ? 14 : 10;

        // Create tooltip content once to reuse
        const tooltipContent = `
          <div style="background: #161b22; padding: 8px 12px; border-radius: 6px; border: 1px solid #30363d; min-width: 120px;">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <img src="${speciesItem.image}" alt="${speciesItem.name}" style="width: 24px; height: 24px; border-radius: 4px; object-fit: cover; border: 1px solid #30363d;" onerror="this.style.display='none'; this.parentNode.querySelector('.fallback-icon').style.display='block';">
              <span class="fallback-icon" style="display: none; width: 24px; height: 24px; background: #30363d; border-radius: 4px; display: flex; align-items: center; justify-content: center; font-size: 12px; color: #8b949e;">${speciesItem.name.charAt(0)}</span>
            </div>
            <strong style="color: #f0f6fc; font-family: Outfit, sans-serif; font-size: 12px; display: block; margin-bottom: 4px;">${speciesItem.name}</strong>
            <span style="color: ${statusColors[speciesItem.status]}; font-size: 11px; font-family: Outfit, sans-serif;">${speciesItem.statusFull}</span>
          </div>
        `;

        // Create markers for the main location and wrapped copies
        const createMarker = (lat: number, lng: number, locationName?: string) => {
          const marker = L.circleMarker([lat, lng], {
            radius: size,
            fillColor: statusColors[speciesItem.status],
            color: '#ffffff',
            weight: 2,
            opacity: 1,
            fillOpacity: 0.8,
            className: isCritical ? 'critical-marker' : ''
          });

          // Build tooltip content with location name if available
          let tooltipHtml = tooltipContent;
          if (locationName) {
            tooltipHtml = tooltipContent.replace('</div>', `<br><span style="color: #8b949e; font-size: 10px; font-family: Outfit, sans-serif;">${locationName}</span></div>`);
          }

          marker.bindTooltip(tooltipHtml, {
            className: 'custom-tooltip',
            direction: 'top',
            offset: [0, -10]
          });

          marker.on('click', () => {
            onSpeciesSelect(speciesItem);
          });

          return marker;
        };

        // Add main marker with location name
        const mainMarker = createMarker(location.lat, location.lng, location.name);
        markerCluster.addLayer(mainMarker);

        // Add wrapped markers for world copy jumping
        // Create markers at +360° and -360° longitude
        const wrappedMarker1 = createMarker(location.lat, location.lng + 360, location.name);
        const wrappedMarker2 = createMarker(location.lat, location.lng - 360, location.name);
        
        markerCluster.addLayer(wrappedMarker1);
        markerCluster.addLayer(wrappedMarker2);
      });
    });
  }, [species, onSpeciesSelect]);

  return (
    <div 
      ref={mapRef} 
      id="map"
      style={{ width: '100%', height: '100%' }}
    />
  );
}
