import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  }

  return (
    <div className="container py-5">
      <div className="col-md-7 mx-auto">
        <h1 className="text-center mb-4">Contact Us 📩</h1>

        {submitted && (
          <div className="alert alert-success">
            Your message was submitted successfully!
          </div>
        )}

        <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>
          <label className="form-label">Your Name</label>
          <input className="form-control mb-3" required />

          <label className="form-label">Email Address</label>
          <input
            type="email"
            className="form-control mb-3"
            required
          />

          <label className="form-label">Message</label>
          <textarea
            className="form-control mb-3"
            rows="5"
            required
          />

          <button className="btn btn-warning">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}