export function HRVGraph() {
  const points = [
    { x: 60, y: 200, label: "Start", v: 28 },
    { x: 210, y: 165, label: "Week 2", v: 34 },
    { x: 360, y: 130, label: "Month 1", v: 40 },
    { x: 510, y: 90, label: "Month 3", v: 48 },
    { x: 660, y: 55, label: "Month 6", v: 56 },
  ];

  const path = points
    .map((p, i) => `${i === 0 ? "M" : "L"}${p.x},${p.y}`)
    .join(" ");

  const area = `${path} L660,250 L60,250 Z`;

  return (
    <section className="bw-hrv">
      <div className="bw-wrap">
        <div className="bw-eyebrow">What The Data Shows</div>

        <h2>
          The nervous system improves - measurably - with daily practice.
        </h2>

        <p className="bw-hrv-body">
          Heart Rate Variability (HRV) is the clearest measure of how safe your
          nervous system feels. Higher HRV means more resilience, better sleep,
          and less anxiety. Breathwork done daily moves this number consistently
          over time.
        </p>

        <div className="bw-hrv-chart">
          <svg
            viewBox="0 0 720 290"
            width="100%"
            role="img"
            aria-label="HRV improvement over 6 months"
          >
            {[20, 30, 40, 50, 60].map((v) => {
              const y = 250 - ((v - 20) / 40) * 200;

              return (
                <g key={v}>
                  <line
                    x1={50}
                    x2={680}
                    y1={y}
                    y2={y}
                    className="bw-hrv-grid-line"
                  />
                  <text x={20} y={y + 4} className="bw-hrv-axis-text">
                    {v}
                  </text>
                </g>
              );
            })}

            <path d={area} className="bw-hrv-area" />

            <path d={path} className="bw-hrv-line" />

            {points.map((p) => (
              <g key={p.label}>
                <circle cx={p.x} cy={p.y} r="6" className="bw-hrv-dot" />

                <text
                  x={p.x}
                  y={275}
                  textAnchor="middle"
                  className="bw-hrv-x-label"
                >
                  {p.label}
                </text>

                <text
                  x={p.x}
                  y={p.y - 14}
                  textAnchor="middle"
                  className="bw-hrv-value"
                >
                  {p.v}
                </text>
              </g>
            ))}

            <text x={20} y={20} className="bw-hrv-axis-label">
              HRV ms
            </text>
          </svg>

          <p className="bw-hrv-caption">
           Illustrative HRV trend based on reported improvements across daily breathwork practitioners.
          </p>
        </div>
      </div>
    </section>
  );
}