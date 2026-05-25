export function Navbar() {
  return (
    <nav className="bw-nav">
      <div className="bw-nav-inner">
        <span className="bw-brand">Dr. Valarrmathi Srinivasan</span>
        <div className="bw-toggle">
          <a href="/5-day-program" className="active">5-Day Program</a>
          <a href="/99-paid">₹99/month</a>
        </div>
      </div>
    </nav>
  );
}
