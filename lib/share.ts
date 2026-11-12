export interface ShareOptions {
  title: string;
  text: string;
  url: string;
}

export interface ShareResult {
  method: 'native' | 'clipboard' | 'whatsapp' | 'failed';
  success: boolean;
}

/**
 * Checks if the Web Share API is available in the current browser context.
 */
export function canUseNativeShare(): boolean {
  return typeof navigator !== 'undefined' && Boolean(navigator.share);
}

/**
 * Generates a WhatsApp share URL with pre-filled message text and URL.
 */
export function buildWhatsAppShareUrl(text: string, url: string): string {
  const fullText = `${text}\n${url}`.trim();
  return `https://wa.me/?text=${encodeURIComponent(fullText)}`;
}

/**
 * Shares content natively or falls back to clipboard copying or WhatsApp sharing.
 */
export async function shareContent(options: ShareOptions): Promise<ShareResult> {
  const { title, text, url } = options;

  // 1. Native Web Share API (Mobile Safari, Chrome on Android, etc.)
  if (canUseNativeShare()) {
    try {
      await navigator.share({ title, text, url });
      return { method: 'native', success: true };
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        // User cancelled share modal
        return { method: 'native', success: false };
      }
    }
  }

  // 2. Clipboard API fallback
  if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(url);
      return { method: 'clipboard', success: true };
    } catch {
      // Clipboard write failed
    }
  }

  // 3. WhatsApp web fallback
  if (typeof window !== 'undefined') {
    const waUrl = buildWhatsAppShareUrl(text, url);
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    return { method: 'whatsapp', success: true };
  }

  return { method: 'failed', success: false };
}
