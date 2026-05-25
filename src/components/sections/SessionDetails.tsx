const rows: [string, string][] = [
  ["Days", "Monday to Friday"],
  ["Mon, Tue, Thu", "Breathwork · 6:45–7:15 AM"],
  ["Wed, Fri", "Workout + Breathwork · 6:15–7:15 AM"],
  ["Format", "On Zoom - Live Only"],
  ["Recordings", "Live only. No recordings."],
  ["Sessions per month", "20 live sessions"],
  ["Led by", "Dr Valarrmathi’s Community"],
];

export function SessionDetails() {
  return (
    <section className="bw-session">
      <div className="bw-wrap">
        <div className="bw-eyebrow">
          Daily Breathwork Practise Session Details
        </div>

        <h2>Everything you need to know before joining.</h2>

        <div className="bw-session-table">
          {rows.map(([l, v]) => (
            <div className="bw-session-row" key={l}>
              <div className="lbl">{l}</div>
              <div className="val">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}