export const CONSENT_STORAGE_KEY = "novellah-cookie-consent";
export const CONSENT_CHANGE_EVENT = "novellah-consent-change";

export type ConsentValue = "accepted" | "rejected";

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  const value = window.localStorage.getItem(CONSENT_STORAGE_KEY);
  return value === "accepted" || value === "rejected" ? value : null;
}

export function setStoredConsent(value: ConsentValue) {
  window.localStorage.setItem(CONSENT_STORAGE_KEY, value);
  // Notify any mounted listeners (e.g. HubspotLoader) in the same tab —
  // the native `storage` event only fires in *other* tabs, not this one.
  window.dispatchEvent(new CustomEvent(CONSENT_CHANGE_EVENT, { detail: value }));
}