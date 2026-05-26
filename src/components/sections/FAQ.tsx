import { useState } from "react";

const faqs = [
  {
    q: "What if I miss a day?",
    a: "That's fine. You come back the next morning and continue. One skipped day doesn't undo the practice. Consistency over time is what matters - not perfection.",
  },
  {
    q: "I already know the techniques from Breath Chakra Reset. Why do I need this?",
    a: "Knowing and doing every morning are different things. The Breath Chakra Reset gave you the understanding. This gives you the structure that makes it stick.",
  },
  {
    q: "Is Dr. Valarrmathi present in every session?",
    a: "This is a community-led session. Dr. Valar has designed the structure - the community holds the practice together every morning.",
  },
  {
    q: "How is this different from just doing breathwork on my own?",
    a: "Doing it alone, it's easy to shorten, skip, or stop. The community and the fixed time remove that choice, and hold you accountable.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. There are no refunds on the current month - but you can cancel anytime and you won't be charged for the next one. No questions asked.",
  },
  {
    q: "Can I get the recordings?",
    a: "There are no recordings - and that's intentional. A recording can be watched later. Later becomes never. The live session at 6:30 AM is what creates the accountability. The group is there. The time is fixed. This is what makes the practice actually happen.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bw-faq">
      <div className="bw-wrap">
        <div className="bw-eyebrow">FAQ</div>

        <h2>Questions, answered.</h2>

        <div className="bw-faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;

            return (
              <div className={`bw-faq-item ${isOpen ? "open" : ""}`} key={f.q}>
                <button
                  className="bw-faq-q"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  type="button"
                >
                  <span>{f.q}</span>
                  <span className="chev">+</span>
                </button>

                {isOpen && <div className="bw-faq-a">{f.a}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}