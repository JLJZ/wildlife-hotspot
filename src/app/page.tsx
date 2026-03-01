'use client';

import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import FilterBar from '@/components/FilterBar';
import Legend from '@/components/Legend';
import DetailPanel from '@/components/DetailPanel';
import { speciesData, Species } from '@/data/species';

// Dynamically import Map with SSR disabled (since Leaflet needs window)
const Map = dynamic(() => import('@/components/Map'), { 
  ssr: false,
  loading: () => <div style={{ width: '100%', height: '100%', background: '#0d1117', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#8b949e' }}>Loading map...</div>
});

export default function Home() {
  const [filters, setFilters] = useState({
    EX: true,
    CR: true,
    EN: true,
    VU: true
  });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState<Species | null>(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  // Filter species based on current filters and search
  const filteredSpecies = useMemo(() => {
    return speciesData.filter(species => {
      const matchesStatus = filters[species.status];
      const matchesSearch = searchTerm === '' || 
        species.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        species.scientific.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesStatus && matchesSearch;
    });
  }, [filters, searchTerm]);

  const handleFilterChange = (status: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      [status]: checked
    }));
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const handleReset = () => {
    setFilters({ EX: true, CR: true, EN: true, VU: true });
    setSearchTerm('');
  };

  const handleSpeciesSelect = (species: Species) => {
    setSelectedSpecies(species);
    setIsPanelOpen(true);
  };

  const handleClosePanel = () => {
    setIsPanelOpen(false);
  };

  return (
    <main className="main-container">
      <div className="map-container">
        <Map 
          species={filteredSpecies} 
          onSpeciesSelect={handleSpeciesSelect}
        />
        
        <FilterBar 
          filters={filters}
          searchTerm={searchTerm}
          onFilterChange={handleFilterChange}
          onSearchChange={handleSearchChange}
          onReset={handleReset}
        />

        <Legend />

        {filteredSpecies.length === 0 && (
          <div className="no-results">
            <h3>No species found</h3>
            <p>Try adjusting your filters or search term</p>
          </div>
        )}
      </div>

      <DetailPanel 
        species={selectedSpecies}
        isOpen={isPanelOpen}
        onClose={handleClosePanel}
      />
    </main>
  );
}
