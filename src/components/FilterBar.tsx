'use client';

interface FilterBarProps {
  filters: {
    EX: boolean;
    CR: boolean;
    EN: boolean;
    VU: boolean;
  };
  searchTerm: string;
  onFilterChange: (status: string, checked: boolean) => void;
  onSearchChange: (term: string) => void;
  onReset: () => void;
}

export default function FilterBar({ 
  filters, 
  searchTerm, 
  onFilterChange, 
  onSearchChange,
  onReset 
}: FilterBarProps) {
  return (
    <div className="filter-bar">
      <h3>Filters</h3>
      <div className="filter-group">
        <div className="filter-item ex">
          <input
            type="checkbox"
            id="filter-ex"
            checked={filters.EX}
            onChange={(e) => onFilterChange('EX', e.target.checked)}
          />
          <span className="status-dot ex"></span>
          <label htmlFor="filter-ex">Extinct (EX)</label>
        </div>
        <div className="filter-item cr">
          <input
            type="checkbox"
            id="filter-cr"
            checked={filters.CR}
            onChange={(e) => onFilterChange('CR', e.target.checked)}
          />
          <span className="status-dot cr"></span>
          <label htmlFor="filter-cr">Critically Endangered (CR)</label>
        </div>
        <div className="filter-item en">
          <input
            type="checkbox"
            id="filter-en"
            checked={filters.EN}
            onChange={(e) => onFilterChange('EN', e.target.checked)}
          />
          <span className="status-dot en"></span>
          <label htmlFor="filter-en">Endangered (EN)</label>
        </div>
        <div className="filter-item vu">
          <input
            type="checkbox"
            id="filter-vu"
            checked={filters.VU}
            onChange={(e) => onFilterChange('VU', e.target.checked)}
          />
          <span className="status-dot vu"></span>
          <label htmlFor="filter-vu">Vulnerable (VU)</label>
        </div>
      </div>
      <input
        type="text"
        className="search-input"
        placeholder="Search species..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <div className="filter-actions">
        <button className="btn-reset" onClick={onReset}>
          Reset All
        </button>
      </div>
    </div>
  );
}
