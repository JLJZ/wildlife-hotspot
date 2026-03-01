'use client';

import { Species } from '@/data/species';

interface DetailPanelProps {
  species: Species | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function DetailPanel({ species, isOpen, onClose }: DetailPanelProps) {
  if (!species) return null;

  const formatYear = (year: number) => {
    return year > 0 ? year.toString() : Math.abs(year) + ' BCE';
  };

  return (
    <aside className={`detail-panel ${isOpen ? 'open' : ''}`}>
      <div className="detail-header">
        <button className="detail-close" onClick={onClose}>×</button>
        <h2 className="species-name">{species.icon} {species.name}</h2>
        <p className="scientific-name">{species.scientific}</p>
        <span className={`status-badge ${species.status.toLowerCase()}`}>
          {species.status}
        </span>
      </div>
      <div className="detail-image">
        {species.icon}
      </div>
      <div className="detail-content">
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-label">Population</div>
            <div className="stat-value">{species.population}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Habitat</div>
            <div className="stat-value">{species.habitat}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Region</div>
            <div className="stat-value">{species.region}</div>
          </div>
          <div className="stat-card">
            <div className="stat-label">Year Listed</div>
            <div className="stat-value">{formatYear(species.year)}</div>
          </div>
        </div>
        <div className="detail-section">
          <h4>Description</h4>
          <p>{species.description}</p>
        </div>
        <div className="detail-section">
          <h4>Known Hotspots</h4>
          <div className="hotspots-list">
            {species.locations.map((location, idx) => (
              <div key={idx} className="hotspot-item">
                <span className="hotspot-icon">📍</span>
                <span>{location.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}
