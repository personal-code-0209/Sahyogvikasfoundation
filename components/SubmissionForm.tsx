"use client";

import { FormEvent, useState } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

type FormKind = "contact" | "donation";

export default function SubmissionForm({ kind }: { kind: FormKind }) {
  const isDonation = kind === "donation";
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const response = await fetch(`/api/${kind === "contact" ? "contact" : "donations"}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = (await response.json()) as { error?: string };
      if (!response.ok) {
        setError(result.error ?? "We could not send that just now. Please try again.");
        setStatus("error");
        return;
      }
      form.reset();
      setStatus("success");
    } catch {
      setError("We could not connect. Please check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="form-success" role="status">
        <CheckCircle2 size={31} />
        <h3>{isDonation ? "Your pledge is with us." : "Your message is on its way."}</h3>
        <p>
          {isDonation
            ? "Thank you for showing up for community-led change. Our team will be in touch about the next steps."
            : "Thank you for reaching out. Someone from our team will get back to you as soon as we can."}
        </p>
        {isDonation && <p className="payment-note">This form records a pledge only; no payment has been taken.</p>}
      </div>
    );
  }

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      {isDonation && (
        <div className="form-field">
          <label htmlFor="amount">Contribution amount <span>(INR)</span></label>
          <div className="amount-options">
            {[500, 1000, 2500].map((amount) => (
              <label className="amount-option" key={amount}>
                <input defaultChecked={amount === 1000} id={amount === 500 ? "amount" : undefined} name="amount" type="radio" value={amount} />
                <span>₹{amount.toLocaleString("en-IN")}</span>
              </label>
            ))}
            <label className="amount-option custom-amount">
              <input name="amount" type="radio" value="5000" />
              <span>₹5,000</span>
            </label>
          </div>
        </div>
      )}
      {isDonation && (
        <div className="form-field">
          <label htmlFor="frequency">How often?</label>
          <select defaultValue="once" id="frequency" name="frequency">
            <option value="once">One-time contribution</option>
            <option value="monthly">Monthly contribution</option>
          </select>
        </div>
      )}
      <div className="form-row">
        <div className="form-field">
          <label htmlFor={`${kind}-name`}>Your name</label>
          <input autoComplete="name" id={`${kind}-name`} maxLength={100} name="name" placeholder="Full name" required />
        </div>
        <div className="form-field">
          <label htmlFor={`${kind}-email`}>Email address</label>
          <input autoComplete="email" id={`${kind}-email`} maxLength={254} name="email" placeholder="you@example.com" required type="email" />
        </div>
      </div>
      <div className="form-field">
        <label htmlFor={`${kind}-phone`}>Phone number <span>(optional)</span></label>
        <input autoComplete="tel" id={`${kind}-phone`} maxLength={30} name="phone" placeholder="+91" type="tel" />
      </div>
      {!isDonation && (
        <div className="form-field">
          <label htmlFor="subject">What would you like to talk about?</label>
          <select defaultValue="" id="subject" name="subject" required>
            <option disabled value="">Choose a topic</option>
            <option>Volunteering</option>
            <option>Partnerships</option>
            <option>Programs and community support</option>
            <option>Media and general enquiries</option>
            <option>Other</option>
          </select>
        </div>
      )}
      <div className="form-field">
        <label htmlFor={`${kind}-message`}>{isDonation ? "A note for our team" : "Your message"} <span>{isDonation ? "(optional)" : ""}</span></label>
        <textarea
          id={`${kind}-message`}
          maxLength={isDonation ? 1000 : 5000}
          minLength={isDonation ? undefined : 10}
          name="message"
          placeholder={isDonation ? "Tell us what inspires your support..." : "Tell us a little about how we can help..."}
          required={!isDonation}
          rows={4}
        />
      </div>
      {error && <p className="form-error" role="alert">{error}</p>}
      <button className="button button-dark form-submit" disabled={status === "sending"} type="submit">
        {status === "sending" ? (
          <>Sending <LoaderCircle className="spin" size={16} /></>
        ) : (
          <>{isDonation ? "Send my pledge" : "Send your message"} <ArrowRight size={16} /></>
        )}
      </button>
      <p className="form-privacy">Your details are only used to respond to this enquiry.</p>
      {status === "error" && <span className="sr-only" aria-live="polite">{error}</span>}
    </form>
  );
}
