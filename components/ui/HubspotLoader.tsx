"use client";

import { useEffect, useState } from "react";
import Script from "next/script";
import { CONSENT_CHANGE_EVENT, getStoredConsent } from "@/lib/consent";

export function HubspotLoader() {
  const [consentGranted, setConsentGranted] = useState(false);

  useEffect(() => {
    setConsentGranted(getStoredConsent() === "accepted");

    function handleChange(e: Event) {
      const detail = (e as CustomEvent<string>).detail;
      setConsentGranted(detail === "accepted");
    }

    window.addEventListener(CONSENT_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, handleChange);
  }, []);

  if (!consentGranted) return null;

  return (
    <Script
      id="hubspot-script"
      src={`https://js-na2.hs-scripts.com/${process.env.NEXT_PUBLIC_HUBSPOT_PORTAL_ID}.js`}
      strategy="afterInteractive"
    />
  );
}