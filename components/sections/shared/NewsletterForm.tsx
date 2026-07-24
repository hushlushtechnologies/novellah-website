"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NewsletterFormProps {
  emailLabel: string;
  emailPlaceholder: string;
  ctaSubscribe: string;
  disclaimer: string;
}

export function NewsletterForm({
  emailLabel,
  emailPlaceholder,
  ctaSubscribe,
  disclaimer,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // No backend yet — this is where a real subscribe API call goes later.
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="newsletter-email" className="font-body text-sm text-foreground">
        {emailLabel}
      </label>
      <div className="mt-2 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <input
            id="newsletter-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={emailPlaceholder}
            className="w-full rounded-full border border-border bg-white py-3 ps-4 pe-10 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
          />
          <Mail size={16} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
        </div>
        <Button type="submit" icon={<ArrowRight size={16} />}  variant="solid">
          {ctaSubscribe}
        </Button>
      </div>
      {submitted && (
        <p className="mt-2 font-body text-xs text-primary">Thanks — you're subscribed!</p>
      )}
      <p className="mt-3 font-body text-xs text-muted-foreground">{disclaimer}</p>
    </form>
  );
}