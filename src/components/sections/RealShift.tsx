const before = [
  "Waking up tired even after 8 hours of sleep",
  "Stomach tight, bloated, reacting to everything",
  "Body tight and braced all day",
  "Mind racing - the same thoughts, looping",
  "Grief, anger, old patterns sitting heavy in the body",
  "Living in survival mode without realising it",
];

const after = [
  "Waking up and actually feeling rested",
  "Gut settling - less reactive, more at ease",
  "Body that knows how to loosen and relax",
  "A mind that can actually be still, and calm",
  "Emotions that move through - instead of staying stuck",
  "A nervous system that knows it is safe",
];

export function RealShift() {
  return (
    <section className="bw-shift">
      <div className="bw-wrap">
        <div className="bw-eyebrow">The Real Shift</div>

        <h2>What changes when the practice becomes daily.</h2>

        <div className="bw-shift-grid">
          <div className="bw-shift-col before">
            <div className="bw-shift-head">Before</div>

            <ul className="bw-shift-list">
              {before.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>

          <div className="bw-shift-col after">
            <div className="bw-shift-head">After</div>

            <ul className="bw-shift-list">
              {after.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}