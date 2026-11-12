# Changelog
All notable changes to SAMBALEAF are documented in this file.

## [2.1.0] - 2026-11-12 — Diagnostics, Telemetry, and Kitchen Intelligence Suite
### Added
- **Health & Diagnostic Route (`/api/health`)**: Process uptime, Node.js memory footprint, and sub-service heartbeat checks.
- **Karur Delivery Zones Engine (`lib/deliveryZones.ts`)**: Modular delivery coverage checks and free threshold calculations.
- **Nutritional & Calorie Intelligence (`lib/nutrition.ts`)**: Seeraga Samba grain macros, low-GI analysis, and meal portion calorie calculator.
- **Traditional Handi Reheating Guide (`lib/reheatingGuide.ts`)**: Authentic tawa dum, bamboo steam bath, and microwave revival instructions.
- **Privacy-Conscious Telemetry (`lib/analytics.ts`)**: PII-scrubbed client event logging and conversion tracking.
- **Web Share & Clipboard Utility (`lib/share.ts`)**: Native mobile sharing with WhatsApp and clipboard fallbacks.
- **Resilient Client Storage (`lib/storage.ts`)**: SSR-safe localStorage wrapper with TTL expiration and memory fallback.
- **REST API Specifications (`docs/API_DOCUMENTATION.md`)**: Comprehensive request/response schema documentation.
- **Expanded Test Coverage**: Automated test suites for delivery zones, nutrition calculations, privacy analytics, and storage fallbacks (28 passing tests).
- **XML Dynamic Sitemap Update**: Added dedicated entries for `/catering`, `/halal`, `/heritage`, `/sustainability`, and `/track`.

## [2.0.0] - 2026-11-05 — The Complete Production Heritage Suite
### Added
- **Automated Test Runner**: In-house universal test harness covering formatters, menu data, validation, and coupons.
- **Real-Time Order Tracking Route (`/track`)**: Step-by-step handi timeline and driver contact simulation.
- **Seeraga Samba Heritage Story (`/heritage`)**: Agricultural history, soil terroir, and Basmati comparison.
- **Green Kitchen & Eco-Packaging (`/sustainability`)**: Banana leaf polyphenols and Karur clay handi return loop.
- **100% Halal Sourcing Audit (`/halal`)**: Hand-slaughtered Zabiha protocols and alcohol-free kitchen guarantee.
- **Wedding & Corporate Catering Portal (`/catering`)**: Live guest estimator and custom package builder.
- **Customer Feedback & Social Proof Engine**: Verified Karur testimonials, star ratings, and satisfaction metrics.
- **Live Kitchen Hearth & Dum Monitor**: Real-time batch indicators, remaining yield, and Ustad tasting notes.
- **Custom Handi Feast Box Configurator**: Combo builder with starters, desserts, and instant cart integration.
- **Feast & Bulk Portion Calculator**: Precise raw rice kg, raitha litres, and leaf count planner.
- **Banana Leaf Dining Ritual Interactive Guide**: Sacred 5-step Tamil traditional dining etiquette.
- **Native Terroir & Spice Provenance Explorer**: Transparent sourcing of Ramnad Mundu chillies, Kangeyam ghee, etc.
- **Web Audio Ambience Player**: Procedural culinary dining soundscape synthesizer.
- **Royal Dum Club VIP Pass**: Tiered rewards (Bronze, Silver, Gold Ustad), points calculator, and digital pass.
- **Digital Feast Gift Cards**: Denomination vouchers with WhatsApp celebration sharing.
- **Karur Neighborhood Pickup Hub Directory**: Opening hours, contact lines, and Google Maps directions.
- **Allergen & Safety Matrix**: Complete dietary disclosures and cross-contamination guidelines.
- **Keyboard-Navigable Menu Search**: `/` shortcut with instant query and category filtering.
- **Promo Code Engine**: Validation for `SAMBAFIRST` (15% off) and `KARURFEAST` (₹100 off).
- **Schema.org Structured Data**: Complete JSON-LD `Restaurant` rich snippets for Google search.
- **Multi-Currency Converter**: Support for NRI patrons gifting from UAE (AED), USA (USD), Singapore (SGD), UK (GBP).
- **Accessibility Controls (a11y)**: Font scaler (A, A+, A++), high contrast mode, and WCAG 2.1 compliance.
- **Kitchen Order Ticket (KOT) Generator**: Printable 80mm thermal receipt format.
- **Web Vitals Telemetry Logger**: FCP, LCP, and CLS performance observer.
- **PWA Offline Connectivity Banner**: Real-time online/offline detector with phone hotline.
- **App Router REST API Endpoints**: `/api/menu`, `/api/status`, `/api/orders`, `/api/reviews`.

## [1.1.0] - 2026-10-07
- Added interactive Dum Handi Web Audio API simulation
- Added 4 signature dish showcases
- Added Step-by-Step WhatsApp Order Builder
- Added Client Kitchen CMS Drawer
