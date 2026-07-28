"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function SubscribeInline({ placeholder, ctaLabel }: { placeholder: string; ctaLabel: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2 flex gap-2">
      <div className="relative flex-1">
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={placeholder}
          className="w-full rounded-full border border-border bg-white py-2.5 ps-4 pe-9 font-body text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
        />
        <Mail size={14} className="absolute end-4 top-1/2 -translate-y-1/2 text-secondary" />
      </div>
      <Button type="submit" icon={<ArrowRight size={14} />} className="shrink-0" aria-label="Subscribe">
  <span className="sr-only">Subscribe</span>
</Button>
      {submitted && <span className="sr-only">Subscribed</span>}
    </form>
  );
}