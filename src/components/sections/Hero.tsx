import { useEffect } from "react";
import { FaMapMarkerAlt, FaUsers } from "react-icons/fa";

export function Hero() {
  useEffect(() => {
    const playerScriptId = "wistia-player-script";
    const embedScriptId = "wistia-embed-vlf0kydp6g";

    if (!document.getElementById(playerScriptId)) {
      const script = document.createElement("script");
      script.id = playerScriptId;
      script.src = "https://fast.wistia.com/player.js";
      script.async = true;
      document.body.appendChild(script);
    }

    if (!document.getElementById(embedScriptId)) {
      const script = document.createElement("script");
      script.id = embedScriptId;
      script.src = "https://fast.wistia.com/embed/vlf0kydp6g.js";
      script.async = true;
      script.type = "module";
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="bw-hero">
      <div className="bw-hero-overlay" />

      <div className="bw-hero-inner">
        <div className="bw-hero-content">
          <div className="bw-badge">
            <span className="dot">●</span>
            <span>Daily Breathwork Membership | Dr. Valarrmathi Srinivasan</span>
          </div>

          <h1>
            Something shifted during the
            <br />
            Breath Chakra Reset.
            <br />
            It&apos;s time to make this
            <br />
            permanent.
          </h1>

          <p className="bw-hero-sub">
            Your body felt a release. Your mind went quiet. And this is what
            healing feels like.
          </p>

          <div className="bw-video-box bw-wistia-box">
            <wistia-player
              media-id="vlf0kydp6g"
              aspect="1.7777777777777777"
            ></wistia-player>
          </div>

          <p className="bw-stress-line">
            Stress accumulates daily. Without a daily practice, the body goes
            back to what it knows.
          </p>

          <p className="bw-community-line">
            Dr. Valarrmathi&apos;s community-led daily breathwork
          </p>

          <button
            className="bw-cta"
            type="button"
            onClick={() => {
              window.location.href = "https://pages.razorpay.com/breathwork-bcr";
            }}
          >
            Join the Daily Practice <span className="arrow">→</span>
          </button>

          <div className="bw-hero-schedule">
            <span>Mon, Tue, Thu · Breathwork · 6:45 – 7:15 AM</span>
            <span>Wed, Fri · Workout + Breathwork · 6:15 – 7:15 AM</span>
          </div>

          <div className="bw-hero-tags">
            <span>
              <FaMapMarkerAlt className="bw-tag-icon" />
              Live Online
            </span>

            <span>
              <FaUsers className="bw-tag-icon" />
              Community-led
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}