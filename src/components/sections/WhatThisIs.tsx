import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

const left = [
  {
    t: "Diaphragmatic Breathing",
    d: "The first signal to the body that it is safe. Before the day has even begun.",
  },
  {
    t: "4-7-8 Breathwork",
    d: "Directly activates the vagus nerve - the one nerve that controls your gut, your sleep, your heart rate, and your ability to feel calm.",
  },
  {
    t: "Nadi Shodhana",
    d: "Clears what stress has already started building since you woke up.",
  },
];

const right = [
  {
    t: "Fitness Expert-Led Movement",
    d: "A guided 30-minute workout targeting the specific stress zones in the body.",
  },
  {
    t: "Stress Zone Targeting",
    d: "The body holds stress in muscles, not just breath. These sessions move it out physically, zone by zone.",
  },
  {
    t: "Breathwork Integration",
    d: "30 minutes of breathwork after the workout. Movement loosens what's stored. Breath lets it go.",
  },
];

export function WhatThisIs() {
  return (
    <section className="bw-whatis">
      <div className="bw-wrap">
        <div className="bw-eyebrow">What This Is</div>

        <h2>A community-led daily breathwork practice. Live. Mon–Fri.</h2>

        <p className="lead">
          By now, you know what your breath can do. This is the practice that
          sets a new baseline for your body.
        </p>

        <p className="lead">
          Every weekday, a community member trained by Dr. Valarrmathi leads the
          session live - with the group, together.
        </p>

        <div className="bw-sched-grid">
          <div className="bw-sched-col">
            <span className="bw-day-pill">Mon / Tue / Thu</span>

            <h3 className="bw-serif">Breathwork</h3>

            <div className="bw-sched-time">6:45 – 7:15 AM · 30 Minutes</div>

            {left.map((m, i) => (
              <div className="bw-modality" key={m.t}>
                <div className="ico">{i + 1}</div>
                <div>
                  <h4>{m.t}</h4>
                  <p>{m.d}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bw-sched-col">
            <span className="bw-day-pill">Wed / Fri</span>

            <h3 className="bw-serif">Workout + Breathwork</h3>

            <div className="bw-sched-time">6:15 – 7:15 AM · 60 Minutes</div>

            {right.map((m, i) => (
              <div className="bw-modality" key={m.t}>
                <div className="ico">{i + 1}</div>
                <div>
                  <h4>{m.t}</h4>
                  <p>{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bw-whatis-cta">
         <button
  className="bw-cta"
  type="button"
  onClick={() => {
    window.location.href = "https://pages.razorpay.com/breathwork-bcr";
  }}
>
  Join the Daily Practice <span className="arrow">→</span>
</button>
        </div>

        <div className="bw-whatis-tags">
          <span>
            {/* <FaMapMarkerAlt className="bw-tag-icon" /> */}
            Live Online
          </span>

          <span>
            {/* <FaUsers className="bw-tag-icon" /> */}
            Community-led
          </span>
        </div>
      </div>
    </section>
  );
}