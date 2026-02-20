"use client";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-inner">
        {/* Contact Card */}
        <div className="contact-left">
          <p className="contact-tag">Get in touch</p>
          <h2 className="contact-title">
            Let&apos;s talk <em>Masalas</em>
          </h2>
          <p className="contact-desc">
            Have a question, a bulk order enquiry, or just want to say hello?
            We&apos;d love to hear from you.
          </p>

          <div className="contact-items">
            <div className="contact-item">
              <div className="contact-logo">📍</div>
              <div>
                <div className="contact-item-label">Address</div>
                <div className="contact-item-value">
                  Vishrantwadi, Pune 411015
                </div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-logo">✉️</div>
              <div>
                <div className="contact-item-label">Email</div>
                <div className="contact-item-value">tushtimasale@gmail.com</div>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-logo">📞</div>
              <div>
                <div className="contact-item-label">Phone</div>
                <div className="contact-item-value">9511778049</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-right">
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">YOUR NAME</label>
              <input
                className="form-input"
                type="text"
                placeholder="e.g. John Doe"
              ></input>
            </div>
            <div className="form-group">
              <label className="form-label">EMAIL ADDRESS</label>
              <input
                className="form-input"
                type="text"
                placeholder="johndoe@gmail.com"
              ></input>
            </div>
            <div className="form-group">
              <label className="form-label">MESSAGE</label>
              <input
                className="form-input"
                type="text"
                placeholder="Tell us what's on your mind..."
              ></input>
            </div>
            <button className="form-submit">Send Message →</button>
          </form>
        </div>
      </div>
    </section>
  );
}
