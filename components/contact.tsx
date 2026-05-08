"use client";

import type React from "react";
import type { CSSProperties } from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Send } from "lucide-react";
import { useInView } from "@/lib/hooks/use-in-view";
import { submitWeb3Form, Web3FormsError } from "@/lib/web3forms";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();
    const trimmedMessage = formData.message.trim();

    if (!trimmedName || !trimmedEmail || !trimmedMessage) {
      setSubmitError("Please fill in your name, email, and a short message.");
      return;
    }

    setSubmitError(null);
    setIsSubmitting(true);

    try {
      await submitWeb3Form({
        form: e.currentTarget,
        subject: `New inquiry from ${trimmedName}`,
        fields: {
          name: trimmedName,
          email: trimmedEmail,
          message: trimmedMessage,
        },
      });

      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitError(
        error instanceof Web3FormsError
          ? error.message
          : "Couldn't send the message. Check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden py-16 md:py-24">
      <div ref={ref} data-inview={inView} className="container">
        <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-16 lg:gap-24">
          {/* Type column: headline anchored by a thin vertical Cobalt mark.
              Single Shape Rule from DESIGN.md — the mark + negative space
              IS the composition, no filler copy needed. */}
          <div className="reveal relative" style={{ "--reveal-delay": 0 } as CSSProperties}>
            <div
              aria-hidden="true"
              className="absolute left-0 top-1.5 hidden h-14 w-0.5 bg-primary md:block lg:h-20"
            />
            <h2 className="h2 md:pl-6">Tell me what you&apos;re building.</h2>
          </div>

          <div className="reveal" style={{ "--reveal-delay": 200 } as CSSProperties}>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                    maxLength={120}
                    required
                    aria-invalid={Boolean(submitError) && !formData.name.trim()}
                    className="transition-colors duration-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    autoComplete="email"
                    inputMode="email"
                    maxLength={254}
                    required
                    aria-invalid={Boolean(submitError) && !formData.email.trim()}
                    className="transition-colors duration-200 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="A sentence or two on what you're building."
                    rows={5}
                    maxLength={4000}
                    required
                    aria-invalid={Boolean(submitError) && !formData.message.trim()}
                    className="transition-colors duration-200 focus:border-primary"
                  />
                  <p className="text-xs text-muted-foreground" aria-live="polite">
                    {formData.message.length} / 4000
                  </p>
                </div>

                {submitError ? (
                  <p className="text-sm text-destructive" role="alert">
                    {submitError}
                  </p>
                ) : null}

                <Button
                  type="submit"
                  className="group w-full"
                  disabled={isSubmitting}
                  aria-busy={isSubmitting}
                >
                  <span className="flex items-center">
                    {isSubmitting ? (
                      "Sending…"
                    ) : (
                      <>
                        Send message
                        <Send className="ml-2 h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            ) : (
              <div className="enter relative" role="status" aria-live="polite">
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-1.5 hidden h-14 w-0.5 bg-primary md:block"
                />
                <h3 className="font-heading text-2xl font-semibold tracking-tight md:pl-6">
                  Got it. Reply incoming.
                </h3>
                <p className="mt-3 max-w-prose text-base text-muted-foreground md:pl-6">
                  I read every inquiry myself. Expect a reply within a couple of business days.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="animated-underline mt-6 text-sm font-medium md:ml-6"
                >
                  <span className="relative z-10">Send another message</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
