# Design Guidelines: Next Generation Hub (NGH.in)

## Design Approach
**Reference-Based Approach**: Drawing from successful conversion-focused agency sites like Webflow, Wix, and Indian digital agencies. This is a marketing/sales funnel website requiring high visual impact, trust-building elements, and clear conversion paths optimized for Indian SMB audiences.

## Core Design Principles
1. **Conversion-First**: Every section drives toward lead capture (WhatsApp/email)
2. **Trust & Localization**: Indian market signals (GST, Hindi microcopy, local pricing)
3. **Mobile-First Clarity**: Indian users are predominantly mobile - optimize for thumb-friendly CTAs
4. **WhatsApp-Centric**: Primary contact method throughout the experience

## Typography System
- **Primary Font**: Poppins (Google Fonts)
- **Hierarchy**:
  - H1: text-5xl md:text-6xl font-bold (Hero headlines)
  - H2: text-3xl md:text-4xl font-semibold (Section headers)
  - H3: text-2xl font-semibold (Card titles, subsections)
  - Body: text-base md:text-lg (Paragraphs)
  - Small: text-sm (Hindi microcopy, disclaimers)
  - CTA Buttons: text-lg font-semibold

## Layout & Spacing System
**Spacing Units**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24
- Section padding: py-16 md:py-24
- Container max-width: max-w-7xl mx-auto px-6
- Card spacing: gap-8
- Component margins: mb-12 md:mb-16

## Component Library

### Navigation
- Sticky header (sticky top-0 z-50) with glass-morphism effect (backdrop-blur-lg bg-white/90)
- Logo left, navigation center, dual CTAs right (WhatsApp + Get Quote)
- Mobile: Hamburger menu with full-screen overlay
- WhatsApp icon in header with phone number (visible on desktop)

### Hero Section
- **Layout**: Full-width container with centered content, 80vh minimum height
- **Structure**: Headline + value proposition + bilingual trust line + dual CTA buttons
- **Background**: Large hero image (Indian business context - modern office/team) with gradient overlay (from dark to transparent)
- **CTAs**: Two buttons side-by-side - "Get Free Website Audit" (primary) + "WhatsApp Now" (secondary with WhatsApp icon)
- **Trust Elements**: Below CTAs - small badges (5+ years, 100+ clients, GST registered)

### Lead Magnet Modal
- Center-screen modal (max-w-lg) with backdrop blur
- Two-column layout on desktop: Left - benefits list, Right - form
- Form fields: Name, Email, WhatsApp Number, Current Website (optional)
- Submit button: Full-width, prominent
- Close icon top-right

### Social Proof Section
- **Client Logos**: 6-8 logos in grid (grid-cols-3 md:grid-cols-4 lg:grid-cols-6)
- **Testimonials**: 3-column card grid, each with quote, client photo (circular), name, business type
- **Trust Badges**: Row of badges (GST, years in business, projects completed) with icons

### Services Cards
- 4-column grid on desktop (grid-cols-1 md:grid-cols-2 lg:grid-cols-4)
- Each card: Icon (colored accent), title, 2-3 bullet points, "Learn More" link
- Hover effect: Subtle lift (shadow-lg transform scale-105)
- Background: White cards on light gray section background

### Pricing Tables
- 3-column comparison (grid-cols-1 md:grid-cols-3)
- Middle card highlighted (border-2 border-primary, scale-105 on desktop)
- Structure: Package name, price (large INR symbol), "Best for" tag, features list, CTA button
- Features: Checkmarks for included, X for excluded

### Tripwire Offer Card
- Prominent card with accent border (border-l-4 border-accent)
- Limited-time urgency indicator ("Special Offer - This Week Only")
- Price: Large with strikethrough original price
- Dual CTAs: "Buy Now ₹999" + "Learn More"

### Portfolio Showcase
- 3-column grid of project cards
- Each card: Project image, client name, service type, key results (3 metrics with icons)
- Overlay on hover showing full description + "View Case Study" button

### Contact/Quote Form
- Single-column form with clear field labels
- Field groups: Personal Info, Business Details, Service Selection (dropdown), Budget (radio buttons), Message
- City field with autocomplete suggestions (major Indian cities)
- Submit button: Full-width at bottom with loading state
- Right sidebar (on desktop): Contact info, office hours, WhatsApp QR code

### Floating WhatsApp Button
- Fixed bottom-right (fixed bottom-6 right-6)
- Green circular button (bg-green-500) with WhatsApp icon
- Pulsing animation to draw attention
- On click: Opens WhatsApp with prefilled message

### Footer
- Three-column layout: Company info + Quick Links + Services
- Bottom bar: GST number, Privacy Policy, Terms, Social icons
- Background: Dark (#0b1320) with light text

## Animations
- **AOS Library**: data-aos="fade-up" for section reveals with 200ms delays
- **Button Hovers**: Scale and shadow transitions (transition-all duration-300)
- **Card Hovers**: Subtle lift effect
- **Form Focus**: Border color change with smooth transition
- **NO carousel animations** - static, clear content display

## Images
**Hero Section**: Large background image showing Indian business context (modern workspace, diverse team collaborating, or local business owner with laptop). Apply dark gradient overlay (from-gray-900/80 to-transparent) for text readability.

**Service Icons**: Use Font Awesome icons via CDN - globe (website), chart-line (marketing), palette (branding), whatsapp (WhatsApp automation)

**Portfolio**: 3 project screenshots or business context images (e.g., restaurant website on phone, salon landing page, clinic booking system)

**Testimonial Photos**: Circular client photos (use placeholder service like UI Faces initially)

**Trust Section**: Small icon illustrations for badges (shield for GST, calendar for years, users for clients)

## Accessibility
- All form inputs with proper labels and aria-labels
- Focus indicators on all interactive elements (ring-2 ring-primary)
- Alt text for all images describing business context
- Color contrast ratio minimum 4.5:1 for body text
- Touch targets minimum 44x44px for mobile CTAs

## Conversion Optimization Elements
- Sticky header ensures CTAs always accessible
- Dual CTA strategy throughout (primary + secondary action)
- Hindi trust lines build cultural connection
- INR pricing with GST transparency builds credibility
- WhatsApp-first contact matches Indian user behavior
- Social proof early and throughout the journey
- Clear value propositions with benefit-focused copy
- Tripwire offer creates low-barrier entry point
- Multi-step forms with progress indicators reduce abandonment