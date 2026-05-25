import type { ReactNode } from "react";
import { Award, BadgeCheck, Zap, Brain, Sparkles, Users } from "lucide-react";

const coachCards = [
  {
    icon: <Zap size={24} />,
    text: "Certified in Nervous System Regulation",
  },
  {
    icon: <Brain size={24} />,
    text: "Expert in Body-Mind Connection",
  },
  {
    icon: <Sparkles size={24} />,
    text: "Specialist in Energy Medicine & Kriya Yoga",
  },
  {
    icon: <Users size={24} />,
    text: "Helped 10,000+ People Transform",
  },
];

export default function CoachSection() {
  return (
    <section className="bw-coach">
      <div className="bw-wrap">
        <div className="bw-coach-grid">
          <div className="bw-coach-left">
            <div className="bw-coach-photo-card">
              <img
                src="/valar.png"
                alt="Dr. Valarrmathi Srinivasan"
                className="bw-coach-photo"
              />
            </div>

            <div className="bw-coach-badges">
              <div className="bw-coach-badge">
                <Award size={20} />
                <span>Unicorn Coach Award</span>
              </div>

              <div className="bw-coach-badge">
                <BadgeCheck size={20} />
                <span>Certified Breath Coach</span>
              </div>
            </div>

            <div className="bw-coach-certificate">
              <img
                src="/Certificate.jpeg"
                alt="Certified Breath Coach Certificate"
                className="bw-coach-certificate-img"
              />
            </div>
          </div>

          <div className="bw-coach-content">
            <div className="bw-eyebrow">Meet Your Coach</div>

            <h2>
              Meet your <em>Coach</em>
            </h2>

            <h3>Dr. Valarrmathi Srinivasan</h3>

            <div className="bw-coach-pills">
              <span>Creator of the Breath Chakra Reset Method</span>
              <span>Certified Nervous System Regulation & Breath Coach</span>
            </div>

            <p className="bw-coach-lead">
              For 15+ years, Dr Valarrmathi has helped thousands transform their
              health, reset their energy, and reclaim their best selves - using
              a blend of science-backed breathwork and ancient wisdom.
            </p>

            <p className="bw-coach-subtitle">Her work combines:</p>

            <div className="bw-coach-method-box">
              <ul>
                <li>
                  <BadgeCheck size={20} />
                  <span>modern nervous system science</span>
                </li>

                <li>
                  <BadgeCheck size={20} />
                  <span>breath-based regulation techniques</span>
                </li>

                <li>
                  <BadgeCheck size={20} />
                  <span>ancient body-energy mapping, including chakras</span>
                </li>
              </ul>

              <p>
                to create practical, measurable change in how people feel -
                often in a single session.
              </p>
            </div>

            <div className="bw-coach-info-grid">
              {coachCards.map((card) => (
                <InfoCard key={card.text} icon={card.icon} text={card.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({ icon, text }: { icon: ReactNode; text: string }) {
  return (
    <div className="bw-coach-info-card">
      <div className="bw-coach-info-icon">{icon}</div>
      <p>{text}</p>
    </div>
  );
}