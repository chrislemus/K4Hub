export default function NavPanel({ activeNav, navigate }) {
  const navItems = ['news', 'notes'];
  const renderedNavItems = navItems.map((item) => (
    <button
      className={`nav-item ${activeNav === item && 'is-active'}`}
      onClick={() => navigate(item)}
    >
      {item}
    </button>
  ));
  return (
    <nav className="nav-panel">
      <div className="nav-panel-header">
        <h6>K4Hub</h6>
      </div>
      {renderedNavItems}
    </nav>
  );
}
