const stages = [
  {
    s: "Week 1–2",
    h: "The mornings feel lighter.",
    p: "Sleep improves. The body starts loosening. You notice you're not as heavy getting out of bed.",
  },
  {
    s: "Month 1–2",
    h: "The body stops being so tight.",
    p: "Muscles start to feel less rigid. The stiffness that's been with you for years begins to ease. You start feeling flexible and loose.",
  },
  {
    s: "Month 3–6",
    h: "Safety becomes the default state.",
    p: "You start and end your day from a place of calm. Small things stop triggering big reactions.",
  },
  {
    s: "Month 6–12",
    h: "A new baseline.",
    p: "Decisions get clearer. Sleep deepens. Gut calms down. BP stabilises. The body starts working with you, not against you.",
  },
];

export function ConsistentPractice() {
  return (
    <section className="bw-consistent">
      <div className="bw-wrap">
        <div className="bw-eyebrow">
          What Consistent Breathwork Practice Can Do
        </div>

        <h2>What consistent breathwork practice can do.</h2>

        <div className="bw-cgrid">
          {stages.map((x) => (
            <div className="bw-ccard" key={x.s}>
              <div className="stage">{x.s}</div>
              <h3>{x.h}</h3>
              <p>{x.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}