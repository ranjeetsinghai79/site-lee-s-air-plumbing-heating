import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "Lees",
    tagline: "Expert Plumbing. Fast. Reliable. Done Right.",
    phone: "(916) 588-3181",
    phoneHref: "tel:+19165883181",
    email: "info@leesplumbing.com",
    address: "123 Main St",
    city: "Sacramento",
    serviceAreas: ["Sacramento, CA", "Fresno, CA", "Clovis, CA", "Dallas, TX", "Folsom, CA", "Las Vegas, NV", "Loomis, CA", "Madera, CA", "Peoria, AZ", "Visalia, CA"],
    license: "CA C36, TX M-XXXXX, NV XXXXX",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ocean",
    niche: "plumbing",
  },

  services: [
    { icon: "droplets", title: "Residential Plumbing", desc: "Comprehensive plumbing solutions for your home, from leaky faucets to full system overhauls.", urgent: false },
    { icon: "wrench", title: "Drain Cleaning", desc: "Professional drain cleaning to clear clogs and restore proper flow in your pipes.", urgent: true },
    { icon: "thermometer", title: "Water Heater Services", desc: "Installation, repair, and maintenance for traditional and tankless water heaters.", urgent: false },
    { icon: "truck", title: "Sewer Line Repair", desc: "Expert diagnosis and repair for sewer line issues, including trenchless options.", urgent: true },
    { icon: "home", title: "Whole-Home Filtration", desc: "Improve your water quality with our advanced whole-home water filtration systems.", urgent: false },
    { icon: "zap", title: "Gas Line Services", desc: "Safe and reliable installation and repair of gas lines for appliances and heating.", urgent: false }
  ],

  testimonials: [
    { name: "Sarah J.", location: "Sacramento, CA", stars: 5, text: "Lees Plumbing saved the day! Our water heater burst on a Saturday morning. Their technician arrived within an hour, was incredibly professional, and had a new tankless unit installed by the afternoon. The upfront pricing was a huge relief, and the quality of work was outstanding. Highly recommend their emergency service!" },
    { name: "Mark T.", location: "Fresno, CA", stars: 5, text: "We had a persistent slow drain in our kitchen for weeks. Lees Plumbing came out, diagnosed the issue quickly, and performed a thorough drain cleaning. The plumber was friendly, explained everything clearly, and left the area spotless. Our sink drains perfectly now. Excellent service!" },
    { name: "Emily R.", location: "Folsom, CA", stars: 5, text: "I needed a new garbage disposal installed, and Lees Plumbing made it so easy. I booked online, and they were able to come out the very next day. The technician was efficient, knowledgeable, and even gave me tips on how to maintain it. Fantastic experience from start to finish." }
  ],

  trustBadges: [
    "NATE Certified", "GAF Master Elite", "Licensed & Insured", "Same-Day Service", "5-Star Rated", "24/7 Emergency"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1500, label: "Jobs Done", suffix: "+", decimals: 0 },
    { value: 18, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Response", desc: "We prioritize your plumbing emergencies with rapid dispatch and quick solutions." },
    { icon: "dollar-sign", title: "Upfront Pricing", desc: "No surprises. You'll know the cost before any work begins, ensuring transparency." },
    { icon: "award", title: "Certified Pros", desc: "Our technicians are highly trained, certified, and continuously educated on the latest techniques." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "We stand behind our work. If you're not happy, we'll make it right." },
    { icon: "phone", title: "AI Reception 24/7", desc: "Our intelligent system is always ready to assist you, day or night, for scheduling or emergencies." },
    { icon: "truck", title: "Fully Equipped", desc: "Our service vehicles are stocked with all the necessary tools and parts for efficient on-site repairs." }
  ],

  formServiceOptions: ["Residential Plumbing", "Drain Cleaning", "Water Heater Services", "Sewer Line Repair", "Whole-Home Filtration", "Gas Line Services"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!