export default function ThankYou() {
  const hostname = window.location.hostname;

  const whatsappLink = hostname.includes("bcr")
    ? "PASTE_BCR_WHATSAPP_LINK_HERE"
    : "PASTE_BCL_WHATSAPP_LINK_HERE";

  return (
    <section className="thankyou-page">
      <div className="thankyou-card">
        <h1>Registration Confirmed!</h1>

        <p>You have successfully joined the Daily Breathwork Practice.</p>

        <p>
          Join the WhatsApp group for session updates and access details:
        </p>

        <a
          className="thankyou-btn"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          Join WhatsApp Group →
        </a>

        <p className="thankyou-note">
          Access details will be shared before the session through WhatsApp.
        </p>

        <p className="thankyou-team">- Team Dr. Valarrmathi</p>
      </div>
    </section>
  );
}