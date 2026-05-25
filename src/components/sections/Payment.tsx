const features = [
  "Live sessions Mon–Fri every morning",
  "Community-led, Dr. Valarrmathi's structure",
  "20 live sessions per month",
  "Cancel anytime, no questions asked",
];

export function Payment() {
  return (
    <section className="bw-pay">
      <div className="bw-wrap">
        <div className="bw-pay-head">
          <div className="bw-eyebrow">Daily Breathwork Membership</div>
          <h2>It's time to make this permanent.</h2>
          <p className="bw-pay-sub">Continue what you started. Join the daily practice.</p>
        </div>
        <div className="bw-pay-card">
          <div className="bw-pay-label">Monthly Membership</div>
          <div className="bw-pay-price bw-serif">₹1999<span className="per">/month</span></div>
          {/* <div className="bw-pay-note">Exclusive rate for 5-day program graduates</div> */}
          <ul className="bw-pay-list">
            {features.map((f) => (
              <li key={f}><span className="chk">✓</span><span>{f}</span></li>
            ))}
          </ul>
          <button className="bw-cta bw-cta-full"  onClick={() => {
    window.location.href = "https://pages.razorpay.com/breathwork-bcr";
  }}>Join the Daily Practice - ₹1999/month <span className="arrow">→</span></button>
          <p className="bw-pay-fine">Cancel anytime. No refunds on current month.</p>
        </div>
      </div>
    </section>
  );
}
