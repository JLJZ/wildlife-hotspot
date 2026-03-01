'use client';

export default function Legend() {
  return (
    <div className="legend">
      <h4>Conservation Status</h4>
      <div className="legend-item">
        <span className="legend-dot" style={{ background: '#8b949e' }}></span>
        <span>Extinct</span>
      </div>
      <div className="legend-item">
        <span className="legend-dot" style={{ background: '#f0883e' }}></span>
        <span>Critically Endangered</span>
      </div>
      <div className="legend-item">
        <span className="legend-dot" style={{ background: '#f85149' }}></span>
        <span>Endangered</span>
      </div>
      <div className="legend-item">
        <span className="legend-dot" style={{ background: '#3fb950' }}></span>
        <span>Vulnerable</span>
      </div>
    </div>
  );
}
