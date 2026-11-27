import { CURRENCY, LOCALE } from "./constants";

function assertPaise(value) {
  if (!Number.isInteger(value)) {
    throw new Error(`Expected integer paise, received: ${value}`);
  }
}

/** "₹1,234.50" or 1234.5 -> 123450 paise */
export function rupeesToPaise(value) {
  const n =
    typeof value === "string" ? Number(value.replace(/[₹,\s]/g, "")) : value;
  if (!Number.isFinite(n)) throw new Error("Invalid amount");
  return Math.round(n * 100);
}

/** 123450 -> 1234.5 (for display math only, never store this) */
export function paiseToRupees(paise) {
  assertPaise(paise);
  return paise / 100;
}

/** 123450 -> "₹1,234.50" ; compact: 12345000 -> "₹1.2L" */
export function formatINR(paise, { compact = false } = {}) {
  assertPaise(paise);
  return new Intl.NumberFormat(LOCALE, {
    style: "currency",
    currency: CURRENCY,
    ...(compact
      ? { notation: "compact", maximumFractionDigits: 1 }
      : { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
  }).format(paise / 100);
}

export function addPaise(...values) {
  return sumPaise(values);
}

export function sumPaise(values) {
  return values.reduce((total, v) => {
    assertPaise(v);
    return total + v;
  }, 0);
}