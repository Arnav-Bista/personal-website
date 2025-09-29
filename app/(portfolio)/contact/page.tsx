"use client";

/* eslint-disable react/no-unescaped-entities */
import { useState, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import Card from "../../components/card";
import Button from "../../components/button";
import "./contact.css";

export default function Page() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS credentials not configured");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        publicKey
      );

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage("Failed to send message. Please try again or reach out via LinkedIn.");
      console.error("EmailJS error:", error);
    }
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <div className="min-h-[80vh] w-full py-10 mt-32">
      <div className="text-center mb-8">
        <h1>Let's Talk</h1>
        <p className="mt-4 opacity-80">
          Open to new opportunities and always happy to connect!
        </p>
      </div>

      <Card backdrop className="max-w-2xl">
        <div className="m-10 p-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="form-input"
                placeholder="What's this about?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="form-input"
                placeholder="Tell me more..."
              />
            </div>

            {status === "success" && (
              <div className="success-message">
                ✓ Message sent successfully! I'll get back to you soon.
              </div>
            )}

            {status === "error" && (
              <div className="error-message">
                ✗ {errorMessage}
              </div>
            )}

            <Button
              onClick={() => { }}
              variant="primary"
              className="w-full"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </Button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-300 text-center">
            <p className="mb-4 opacity-80">Or connect with me on:</p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button href="https://www.linkedin.com/in/arnav-bista/" variant="secondary" external>
                LinkedIn
              </Button>
              <Button href="https://github.com/Arnav-Bista" variant="outline" external>
                GitHub
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
