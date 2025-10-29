/**
 * Currency utility functions
 */

import { formatCurrency, formatNumber } from "./format";

/**
 * Format amount as currency
 */
export function formatMoney(amount: number, currency: string = "USD"): string {
  return formatCurrency(amount, currency);
}

/**
 * Calculate percentage of amount raised
 */
export function calculateProgress(raised: number, needed: number): number {
  if (needed === 0) return 0;
  return Math.min((raised / needed) * 100, 100);
}

/**
 * Format large numbers (e.g., 1000 -> 1K)
 */
export function formatCompactNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return formatNumber(num);
}

