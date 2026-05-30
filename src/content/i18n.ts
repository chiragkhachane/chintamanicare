/**
 * CHINTAMANI HOSPITAL — trilingual content (English / मराठी / हिंदी).
 *
 * Pune is a Marathi-first city, so Marathi and Hindi are first-class, not
 * afterthoughts. Translations read naturally to a local patient (light,
 * real-world code-mixing for medical loanwords), not literal machine output.
 *
 * Factual / language-neutral data (phones, address geocodes, map links,
 * schedule, real Google reviews, web3forms key, images) lives in site.ts.
 *
 * Rules: no em dashes; medical credentials (MS, FICS, FACRSI, FAMS, BDS) stay
 * in Latin in every language because that is how they are recognised. Locality
 * uses the local lingo: Shivtej Nagar, Chikhali, Pimpri-Chinchwad (not
 * "Chinchwad East").
 */

export type Lang = "en" | "mr" | "hi";

export interface NavLink { label: string; href: string }
export interface Stat { value: number; suffix: string; decimals: number; label: string; note: string }
export interface DoctorCopy { id: string; name: string; role: string; credentials: string; experience: string; tagline: string; focusLabel: string; focus: string[]; bio: string }
export interface ServiceItem { icon: string; title: string; body: string }
export interface ServiceGroup { key: string; label: string; blurb: string; draft: boolean; items: ServiceItem[] }
export interface IconCard { icon: string; title: string; body: string }
export interface HoursRow { days: string; time: string }
export interface Intro { kicker: string; heading: string; sub: string }

export interface Copy {
  htmlLang: string;
  ogLocale: string;
  meta: { title: string; description: string };
  nav: NavLink[];
  common: {
    book: string; call: string; whatsapp: string; openNow: string; closed: string;
    opensToday: string; opensDay: string;
    today: string; directions: string; viewMap: string; langName: string;
    phoneAria: string; home: string; skip: string;
  };
  hero: { place: string; line1: string; line2: string; sub: string; rating: string; established: string; scrollCue: string };
  trust: string[];
  about: Intro & { body: string[]; quote: string; quoteBy: string };
  stats: Stat[];
  doctorsIntro: Intro;
  doctors: DoctorCopy[];
  meetCta: string;
  dpage: { about: string; services: string; book: string; reviews: string; backHome: string; specialist: string };
  servicesIntro: Intro;
  services: ServiceGroup[];
  journeyIntro: Intro;
  journey: IconCard[];
  whyIntro: Intro;
  why: IconCard[];
  testimonialsIntro: Intro;
  testimonialsCta: { rated: string; readMore: string; verified: string };
  appointment: {
    kicker: string; heading: string; sub: string;
    fields: { name: string; namePh: string; phone: string; phonePh: string; service: string; servicePh: string; message: string; messagePh: string; submit: string; sending: string };
    services: string[];
    success: { title: string; body: string };
    privacy: string; orCall: string; demoNote: string;
    fallback: { title: string; body: string; note: string };
  };
  contact: {
    kicker: string; heading: string; sub: string;
    addressLabel: string; landmarkLabel: string; hoursLabel: string; phoneLabel: string; emailLabel: string;
    address: string[]; landmark: string; hours: HoursRow[];
  };
  footer: { tagline: string; exploreHeading: string; reachHeading: string; links: NavLink[]; rights: string };
}

/* ============================== ENGLISH ============================== */
const en: Copy = {
  htmlLang: "en-IN",
  ogLocale: "en_IN",
  meta: {
    title: "Chintamani Hospital & Dental Clinic | Surgery & Dental in Chikhali, Pimpri-Chinchwad",
    description:
      "Chintamani Hospital in Shivtej Nagar, Chikhali (Pimpri-Chinchwad, Pune) offers expert general and laparoscopic surgery, GI endoscopy, and complete dental care led by Dr. Tushar Khachane and Dr. Babita Khachane.",
  },
  nav: [
    { label: "Home", href: "/" },
    { label: "Dr. Tushar", href: "/doctors/tushar/" },
    { label: "Dr. Babita", href: "/doctors/babita/" },
    { label: "Contact", href: "#contact" },
  ],
  common: {
    book: "Book appointment", call: "Call now", whatsapp: "WhatsApp",
    openNow: "Open now", closed: "Opening soon",
    opensToday: "Opens at {t}", opensDay: "Opens {d} at {t}", today: "Today",
    directions: "Get directions", viewMap: "View on map", langName: "English",
    phoneAria: "Call the hospital", home: "home", skip: "Skip to content",
  },
  hero: {
    place: "Shivtej Nagar, Chikhali",
    line1: "Surgical expertise.",
    line2: "Gentle dental care.",
    sub: "Senior surgical care and modern dental treatment, both led by the doctors you meet here, under one roof in Chikhali, Pune.",
    rating: "4.7 from patients across Pune",
    established: "Led by Dr. Tushar Khachane & Dr. Babita Khachane",
    scrollCue: "Scroll to explore",
  },
  trust: ["MS General Surgery", "Laparoscopic surgery", "GI endoscopy", "Hernia & piles care", "Professor, MIMER", "BDS Dental", "20+ years", "4.7 rated"],
  about: {
    kicker: "About the hospital",
    heading: "Serious medical care that still feels personal",
    sub: "",
    body: [
      "Chintamani Hospital was founded on a simple belief: serious medical care should also feel human. We pair modern surgical technology with the time to listen, examine carefully, and explain your options in plain language.",
      "From the first consultation to recovery at home, you are looked after by a small, senior team that treats every patient the way they would treat their own family.",
    ],
    quote: "We blend modern medical technology with a genuine dedication to patient welfare and healing.",
    quoteBy: "Dr. Tushar Khachane",
  },
  stats: [
    { value: 20, suffix: "+", decimals: 0, label: "Years in surgical practice", note: "" },
    { value: 4.7, suffix: "/5", decimals: 1, label: "Average patient rating", note: "Google & Justdial" },
    { value: 2, suffix: "", decimals: 0, label: "Specialties, one roof", note: "Surgery + Dental" },
    { value: 6, suffix: " days", decimals: 0, label: "Open every week", note: "" },
  ],
  doctorsIntro: {
    kicker: "Your doctors",
    heading: "Senior doctors, hands-on care",
    sub: "You are treated by the people whose names are on the door, never handed off between juniors.",
  },
  doctors: [
    {
      id: "tushar",
      name: "Dr. Tushar Khachane",
      role: "Consultant General & Laparoscopic Surgeon · GI Endoscopist",
      credentials: "MS (Surgery), FICS, FACRSI, FAMS, Dipl. S",
      experience: "20+ years",
      tagline: "Advanced general and laparoscopic surgery, explained clearly and done with care.",
      focusLabel: "Focus",
      focus: ["Laparoscopic (keyhole) surgery", "GI endoscopy", "Hernia, piles & fistula"],
      bio: "With more than 20 years in the operating theatre and two decades teaching surgery as a Professor at MIMER Medical College, Dr. Khachane specialises in minimal-access procedures: smaller incisions, less pain, and a faster return to everyday life.",
    },
    {
      id: "babita",
      name: "Dr. Babita Khachane",
      role: "Dental Surgeon · Implant Specialist",
      credentials: "BDS",
      experience: "15+ years",
      tagline: "Gentle, modern dentistry for the whole family, with special expertise in dental implants.",
      focusLabel: "Focus",
      focus: ["Dental implants", "General & cosmetic dentistry", "Crowns & braces"],
      bio: "With over 15 years in dentistry, Dr. Babita Khachane leads dental care at the clinic with a focus on gentle, modern treatment and genuine patient comfort, from routine check-ups and cleaning through to restorative and cosmetic work.",
    },
  ],
  meetCta: "View full profile",
  dpage: { about: "About {name}", services: "Services & procedures", book: "Book with {name}", reviews: "What patients say", backHome: "Back to home", specialist: "Senior specialist" },
  servicesIntro: {
    kicker: "What we treat",
    heading: "Two specialties, one trusted clinic",
    sub: "Surgical and dental care under one roof, so your family's health stays simple and coordinated.",
  },
  services: [
    {
      key: "surgical", label: "Surgical care", draft: false,
      blurb: "Senior-led general and minimal-access surgery, with diagnostics in house.",
      items: [
        { icon: "ph:scissors", title: "General surgery", body: "Appendix, gallbladder, hernia, and intestinal procedures, diagnosed and treated with care." },
        { icon: "ph:scan", title: "Laparoscopic surgery", body: "Minimal-access (keyhole) technique for abdominal and hernia procedures: smaller incisions, quicker recovery." },
        { icon: "ph:microscope", title: "GI endoscopy", body: "Diagnostic and therapeutic endoscopy of the digestive tract using modern equipment." },
        { icon: "ph:first-aid-kit", title: "Piles, fistula & fissure", body: "Modern, comfortable treatment for common colorectal conditions, with support through recovery." },
        { icon: "ph:dna", title: "Thyroid, breast & lumps", body: "Surgery for thyroid conditions, breast disease, and lumps, explained clearly at every step." },
        { icon: "ph:drop", title: "Varicose veins & hydrocele", body: "Treatment for varicose veins, hydrocele, and diabetic foot, matched to your case." },
      ],
    },
    {
      key: "dental", label: "Dental care", draft: true,
      blurb: "Calm, modern dentistry for the whole family, in the same trusted hands.",
      items: [
        { icon: "ph:tooth", title: "General dentistry", body: "Check-ups, cleaning, fillings, and preventive care in a relaxed, unhurried setting." },
        { icon: "ph:sparkle", title: "Cosmetic dentistry", body: "Whitening and smile improvements, planned around the result you actually want." },
        { icon: "ph:user-focus", title: "Implants & crowns", body: "Restoring missing or damaged teeth with durable, natural-looking results." },
        { icon: "ph:smiley", title: "Braces & aligners", body: "Modern straightening options for both children and adults." },
      ],
    },
  ],
  journeyIntro: {
    kicker: "Your visit",
    heading: "What to expect, step by step",
    sub: "From the first phone call to recovery at home, here is how we look after you.",
  },
  journey: [
    { icon: "ph:calendar-check", title: "Consultation", body: "Book by phone or WhatsApp. We listen first, examine carefully, and explain your options in plain language." },
    { icon: "ph:magnifying-glass", title: "Diagnosis", body: "Where needed, in-house endoscopy and imaging give a clear, quick picture so nothing is left to guesswork." },
    { icon: "ph:heartbeat", title: "Treatment", body: "Senior-led surgical or dental treatment using modern, minimal-access techniques wherever possible." },
    { icon: "ph:house-line", title: "Aftercare", body: "Clear recovery guidance and easy follow-up, so you heal with confidence at home." },
  ],
  whyIntro: {
    kicker: "Why families choose us",
    heading: "Care you can trust, close to home",
    sub: "",
  },
  why: [
    { icon: "ph:certificate", title: "Two decades in the theatre", body: "A senior surgeon who also teaches the next generation at MIMER Medical College." },
    { icon: "ph:scan", title: "Minimal-access first", body: "Laparoscopic and endoscopic methods that mean less pain and a faster recovery." },
    { icon: "ph:tooth", title: "Surgery & dental together", body: "Two care lines under one roof keep your healthcare simple and coordinated." },
    { icon: "ph:chats-circle", title: "Care that explains", body: "We make time to answer questions, so you always know what happens next and why." },
  ],
  testimonialsIntro: {
    kicker: "Patient experiences",
    heading: "Trusted by families across Pune",
    sub: "Real reviews from our patients on Google.",
  },
  testimonialsCta: { rated: "Rated 4.7 on Google", readMore: "Read all reviews on Google", verified: "Google review" },
  appointment: {
    kicker: "Book a visit",
    heading: "Book your appointment",
    sub: "Tell us a little about what you need and we will call you back to confirm a time. For anything urgent, please call the hospital directly.",
    fields: {
      name: "Your name", namePh: "Full name",
      phone: "Phone number", phonePh: "10-digit mobile number",
      service: "What do you need?", servicePh: "Select a service",
      message: "Message (optional)", messagePh: "Briefly describe your concern",
      submit: "Request a callback", sending: "Sending...",
    },
    services: ["General or laparoscopic surgery", "GI endoscopy", "Hernia / piles consult", "Dental care", "Not sure yet"],
    success: { title: "Thank you", body: "We have received your request and will call you back shortly to confirm your appointment." },
    privacy: "Your details are only used to contact you about your appointment.",
    orCall: "Fastest way to book",
    demoNote: "For now, please book directly by phone or WhatsApp. We will confirm your visit personally.",
    fallback: {
      title: "Book directly with the clinic",
      body: "For the most reliable booking, call or WhatsApp the hospital and the team will confirm your time directly.",
      note: "For urgent concerns, please call instead of waiting for a callback.",
    },
  },
  contact: {
    kicker: "Visit us",
    heading: "Find the hospital",
    sub: "We are on Spine Road in Shivtej Nagar, Chikhali, easy to reach from across Pimpri-Chinchwad.",
    addressLabel: "Address", landmarkLabel: "Landmark", hoursLabel: "OPD timings", phoneLabel: "Phone", emailLabel: "Email",
    address: ["Plot 619, Sector 18, Spine Road", "Vitthal Nagar, Shivtej Nagar, Chikhali", "Pimpri-Chinchwad, Pune 411019"],
    landmark: "Opposite Ghar Kul Yojana, Shivtej Nagar",
    hours: [
      { days: "Monday to Saturday", time: "9:00 AM - 1:30 PM, 5:00 PM - 8:30 PM" },
      { days: "Sunday", time: "By appointment" },
    ],
  },
  footer: {
    tagline: "Surgical and dental care for Chikhali and Pimpri-Chinchwad.",
    exploreHeading: "Explore", reachHeading: "Reach us",
    links: [
      { label: "Home", href: "/" },
      { label: "Dr. Tushar Khachane", href: "/doctors/tushar/" },
      { label: "Dr. Babita Khachane", href: "/doctors/babita/" },
      { label: "Book appointment", href: "#appointment" },
    ],
    rights: "© 2026 Chintamani Hospital & Dental Clinic. All rights reserved.",
  },
};

/* ============================== मराठी (MARATHI) ============================== */
const mr: Copy = {
  htmlLang: "mr-IN",
  ogLocale: "mr_IN",
  meta: {
    title: "चिंतामणी हॉस्पिटल आणि डेंटल क्लिनिक | चिखली, पिंपरी-चिंचवड येथे शस्त्रक्रिया व दंत उपचार",
    description:
      "चिखली, पिंपरी-चिंचवड (पुणे) येथील शिवतेजनगरमधील चिंतामणी हॉस्पिटलमध्ये डॉ. तुषार खाचणे व डॉ. बबिता खाचणे यांच्या मार्गदर्शनाखाली सामान्य व लॅपरोस्कोपिक शस्त्रक्रिया, GI एंडोस्कोपी आणि संपूर्ण दंत उपचार.",
  },
  nav: [
    { label: "मुख्यपृष्ठ", href: "/" },
    { label: "डॉ. तुषार", href: "/doctors/tushar/" },
    { label: "डॉ. बबिता", href: "/doctors/babita/" },
    { label: "संपर्क", href: "#contact" },
  ],
  common: {
    book: "अपॉइंटमेंट बुक करा", call: "आता फोन करा", whatsapp: "व्हॉट्सॲप",
    openNow: "आता सुरू आहे", closed: "लवकरच सुरू होईल",
    opensToday: "आज {t} वाजता सुरू", opensDay: "{d} {t} वाजता सुरू", today: "आज",
    directions: "मार्ग मिळवा", viewMap: "नकाशावर पाहा", langName: "मराठी",
    phoneAria: "हॉस्पिटलला फोन करा", home: "मुख्यपृष्ठ", skip: "मजकुराकडे जा",
  },
  hero: {
    place: "शिवतेजनगर, चिखली",
    line1: "अचूक शस्त्रक्रिया.",
    line2: "सौम्य दंत उपचार.",
    sub: "वरिष्ठ शस्त्रक्रिया सेवा आणि आधुनिक दंत उपचार, तुम्ही भेटता त्या डॉक्टरांच्या मार्गदर्शनाखाली, चिखली, पुणे येथे एकाच छताखाली.",
    rating: "पुण्यातील रुग्णांकडून 4.7",
    established: "डॉ. तुषार खाचणे व डॉ. बबिता खाचणे यांच्या मार्गदर्शनाखाली",
    scrollCue: "अधिक पाहण्यासाठी स्क्रोल करा",
  },
  trust: ["MS जनरल सर्जरी", "लॅपरोस्कोपिक शस्त्रक्रिया", "GI एंडोस्कोपी", "हर्निया व मूळव्याध", "प्राध्यापक, MIMER", "BDS दंत", "20+ वर्षे", "4.7 रेटिंग"],
  about: {
    kicker: "हॉस्पिटलबद्दल",
    heading: "गंभीर वैद्यकीय उपचार, तरीही आपुलकीचा स्पर्श",
    sub: "",
    body: [
      "चिंतामणी हॉस्पिटलची स्थापना एका साध्या विश्वासावर झाली: गंभीर वैद्यकीय उपचारांमध्येही माणुसकीचा ओलावा असायला हवा. आम्ही आधुनिक शस्त्रक्रिया तंत्रज्ञानासोबत रुग्णाचे ऐकून घेण्याचा, काळजीपूर्वक तपासणी करण्याचा आणि सोप्या भाषेत पर्याय समजावून सांगण्याचा वेळ देतो.",
      "पहिल्या तपासणीपासून ते घरी बरे होईपर्यंत, एक अनुभवी आणि छोटी टीम प्रत्येक रुग्णाची काळजी अगदी आपल्या कुटुंबातील सदस्याप्रमाणे घेते.",
    ],
    quote: "आम्ही आधुनिक वैद्यकीय तंत्रज्ञानाची जोड रुग्णाच्या कल्याणासाठीच्या प्रामाणिक समर्पणाशी घालतो.",
    quoteBy: "डॉ. तुषार खाचणे",
  },
  stats: [
    { value: 20, suffix: "+", decimals: 0, label: "वर्षांचा शस्त्रक्रिया अनुभव", note: "" },
    { value: 4.7, suffix: "/5", decimals: 1, label: "सरासरी रुग्ण रेटिंग", note: "Google व Justdial" },
    { value: 2, suffix: "", decimals: 0, label: "वैद्यकीय विभाग, एकाच ठिकाणी", note: "शस्त्रक्रिया + दंत" },
    { value: 6, suffix: " दिवस", decimals: 0, label: "आठवड्यातून सुरू", note: "" },
  ],
  doctorsIntro: {
    kicker: "तुमचे डॉक्टर",
    heading: "अनुभवी डॉक्टर, स्वतः लक्ष देणारे",
    sub: "ज्यांचे नाव दारावर आहे तेच डॉक्टर तुमच्यावर उपचार करतात; तुम्हाला इकडेतिकडे पाठवले जात नाही.",
  },
  doctors: [
    {
      id: "tushar",
      name: "डॉ. तुषार खाचणे",
      role: "कन्सल्टंट जनरल व लॅपरोस्कोपिक सर्जन · GI एंडोस्कोपिस्ट",
      credentials: "MS (Surgery), FICS, FACRSI, FAMS, Dipl. S",
      experience: "20+ वर्षांचा अनुभव",
      tagline: "आधुनिक जनरल व लॅपरोस्कोपिक शस्त्रक्रिया, स्पष्ट समजावून आणि काळजीपूर्वक.",
      focusLabel: "विशेष कौशल्य",
      focus: ["दुर्बिणीद्वारे (लॅपरोस्कोपिक) शस्त्रक्रिया", "GI एंडोस्कोपी", "हर्निया, मूळव्याध व फिस्तुला"],
      bio: "ऑपरेशन थिएटरमधील वीस वर्षांहून अधिक अनुभव आणि MIMER मेडिकल कॉलेजमध्ये सर्जरीचे प्राध्यापक म्हणून दोन दशकांचा अनुभव असलेले डॉ. खाचणे कमी छेद देणाऱ्या (मिनिमल-ॲक्सेस) शस्त्रक्रियांमध्ये तज्ज्ञ आहेत: लहान छेद, कमी वेदना आणि लवकर पूर्ववत होणे.",
    },
    {
      id: "babita",
      name: "डॉ. बबिता खाचणे",
      role: "दंत शल्यचिकित्सक · इम्प्लांट तज्ज्ञ",
      credentials: "BDS",
      experience: "15+ वर्षांचा अनुभव",
      tagline: "संपूर्ण कुटुंबासाठी सौम्य, आधुनिक दंत उपचार, विशेषतः दंत इम्प्लांटमध्ये तज्ज्ञ.",
      focusLabel: "विशेष कौशल्य",
      focus: ["दंत इम्प्लांट", "सामान्य व सौंदर्यवर्धक दंत उपचार", "क्राउन व ब्रेसेस"],
      bio: "दंतचिकित्सेतील पंधरा वर्षांहून अधिक अनुभव असलेल्या डॉ. बबिता खाचणे क्लिनिकमध्ये दंत उपचारांची जबाबदारी सांभाळतात. नियमित तपासणी आणि स्वच्छतेपासून ते पुनर्रचनात्मक व सौंदर्यवर्धक उपचारांपर्यंत, त्या सौम्य, आधुनिक आणि रुग्णाला आराम वाटेल अशा पद्धतीने उपचार करतात.",
    },
  ],
  meetCta: "संपूर्ण माहिती पाहा",
  dpage: { about: "{name} यांच्याबद्दल", services: "सेवा व उपचार", book: "{name} यांच्याकडे अपॉइंटमेंट", reviews: "रुग्ण काय म्हणतात", backHome: "मुख्यपृष्ठावर परत", specialist: "अनुभवी तज्ज्ञ" },
  servicesIntro: {
    kicker: "आमच्या सेवा",
    heading: "दोन वैद्यकीय विभाग, एकच विश्वासू क्लिनिक",
    sub: "शस्त्रक्रिया व दंत उपचार एकाच ठिकाणी, जेणेकरून तुमच्या कुटुंबाचे आरोग्य सोपे व सुसूत्र राहील.",
  },
  services: [
    {
      key: "surgical", label: "शस्त्रक्रिया सेवा", draft: false,
      blurb: "अनुभवी डॉक्टरांच्या मार्गदर्शनाखाली सामान्य व कमी छेदाच्या शस्त्रक्रिया, सोबत हॉस्पिटलमध्येच तपासण्या.",
      items: [
        { icon: "ph:scissors", title: "सामान्य शस्त्रक्रिया", body: "अपेंडिक्स, पित्ताशय, हर्निया व आतड्यांच्या शस्त्रक्रिया, काळजीपूर्वक निदान व उपचारांसह." },
        { icon: "ph:scan", title: "लॅपरोस्कोपिक शस्त्रक्रिया", body: "पोट व हर्नियाच्या शस्त्रक्रियांसाठी कमी छेदाचे (दुर्बिणीद्वारे) तंत्र: लहान जखमा, लवकर बरे होणे." },
        { icon: "ph:microscope", title: "GI एंडोस्कोपी", body: "आधुनिक उपकरणांनी पचनसंस्थेची निदानात्मक व उपचारात्मक एंडोस्कोपी." },
        { icon: "ph:first-aid-kit", title: "मूळव्याध, भगंदर व फिशर", body: "या सामान्य आजारांवर आधुनिक, त्रासरहित उपचार आणि बरे होईपर्यंत पूर्ण आधार." },
        { icon: "ph:dna", title: "थायरॉइड, स्तन व गाठी", body: "थायरॉइड, स्तनांचे आजार व शरीरातील गाठींवर शस्त्रक्रिया, प्रत्येक टप्पा स्पष्ट समजावून." },
        { icon: "ph:drop", title: "व्हेरिकोस व्हेन्स व हायड्रोसिल", body: "व्हेरिकोस व्हेन्स, हायड्रोसिल व डायबेटिक फूटवर तुमच्या स्थितीनुसार उपचार." },
      ],
    },
    {
      key: "dental", label: "दंत उपचार", draft: true,
      blurb: "संपूर्ण कुटुंबासाठी शांत, आधुनिक दंत उपचार, त्याच विश्वासू हातांनी.",
      items: [
        { icon: "ph:tooth", title: "सामान्य दंत उपचार", body: "तपासणी, स्वच्छता, फिलिंग व प्रतिबंधात्मक काळजी, आरामदायी वातावरणात." },
        { icon: "ph:sparkle", title: "सौंदर्यवर्धक दंत उपचार", body: "दात पांढरे करणे व हास्य सुधारणा, तुम्हाला हवा तसा परिणाम लक्षात घेऊन." },
        { icon: "ph:user-focus", title: "इम्प्लांट व क्राउन", body: "तुटलेले किंवा गहाळ दात टिकाऊ व नैसर्गिक दिसणाऱ्या पद्धतीने पुनर्स्थापित करणे." },
        { icon: "ph:smiley", title: "ब्रेसेस व अलायनर्स", body: "लहान मुलांसाठी व प्रौढांसाठी दात सरळ करण्याचे आधुनिक पर्याय." },
      ],
    },
  ],
  journeyIntro: {
    kicker: "तुमची भेट",
    heading: "पायरीपायरीने काय अपेक्षित आहे",
    sub: "पहिल्या फोनपासून ते घरी बरे होईपर्यंत, आम्ही तुमची काळजी कशी घेतो ते पाहा.",
  },
  journey: [
    { icon: "ph:calendar-check", title: "सल्लामसलत", body: "फोन किंवा व्हॉट्सॲपवर अपॉइंटमेंट घ्या. आम्ही आधी ऐकतो, काळजीपूर्वक तपासणी करतो आणि सोप्या भाषेत पर्याय समजावून सांगतो." },
    { icon: "ph:magnifying-glass", title: "निदान", body: "गरज असल्यास, हॉस्पिटलमधीलच एंडोस्कोपी व इमेजिंगमुळे स्पष्ट व जलद चित्र मिळते, त्यामुळे काहीही अंदाजावर सोडले जात नाही." },
    { icon: "ph:heartbeat", title: "उपचार", body: "शक्य तिथे आधुनिक, कमी छेदाच्या तंत्रांचा वापर करून अनुभवी डॉक्टरांकडून शस्त्रक्रिया किंवा दंत उपचार." },
    { icon: "ph:house-line", title: "उपचारानंतरची काळजी", body: "स्पष्ट मार्गदर्शन व सुलभ फॉलो-अप, जेणेकरून तुम्ही घरी आत्मविश्वासाने बरे व्हाल." },
  ],
  whyIntro: {
    kicker: "कुटुंबे आम्हाला का निवडतात",
    heading: "घराजवळ, विश्वास ठेवता येईल अशी काळजी",
    sub: "",
  },
  why: [
    { icon: "ph:certificate", title: "दोन दशकांचा शस्त्रक्रिया अनुभव", body: "अनुभवी सर्जन, जे MIMER मेडिकल कॉलेजमध्ये पुढच्या पिढीला शिकवतातही." },
    { icon: "ph:scan", title: "प्रथम कमी छेदाचे तंत्र", body: "लॅपरोस्कोपिक व एंडोस्कोपिक पद्धती, म्हणजे कमी वेदना आणि लवकर बरे होणे." },
    { icon: "ph:tooth", title: "शस्त्रक्रिया व दंत, एकत्र", body: "एकाच छताखाली दोन्ही सेवा, त्यामुळे तुमचे आरोग्य व्यवस्थापन सोपे राहते." },
    { icon: "ph:chats-circle", title: "समजावून सांगणारी काळजी", body: "आम्ही प्रश्नांची उत्तरे देण्यासाठी वेळ देतो, त्यामुळे पुढे काय होणार व का, हे तुम्हाला नेहमी कळते." },
  ],
  testimonialsIntro: {
    kicker: "रुग्णांचे अनुभव",
    heading: "पुण्यातील कुटुंबांचा विश्वास",
    sub: "आमच्या रुग्णांचे Google वरील खरे रिव्ह्यू.",
  },
  testimonialsCta: { rated: "Google वर 4.7 रेटिंग", readMore: "Google वर सर्व रिव्ह्यू वाचा", verified: "Google रिव्ह्यू" },
  appointment: {
    kicker: "भेटीसाठी नोंदणी",
    heading: "तुमची अपॉइंटमेंट बुक करा",
    sub: "तुम्हाला काय हवे आहे ते थोडक्यात सांगा, आम्ही वेळ निश्चित करण्यासाठी तुम्हाला परत फोन करू. तातडीच्या गोष्टींसाठी कृपया थेट हॉस्पिटलला फोन करा.",
    fields: {
      name: "तुमचे नाव", namePh: "पूर्ण नाव",
      phone: "फोन नंबर", phonePh: "10 अंकी मोबाइल नंबर",
      service: "तुम्हाला काय हवे आहे?", servicePh: "सेवा निवडा",
      message: "संदेश (पर्यायी)", messagePh: "तुमची अडचण थोडक्यात लिहा",
      submit: "परत फोनची विनंती करा", sending: "पाठवत आहे...",
    },
    services: ["सामान्य किंवा लॅपरोस्कोपिक शस्त्रक्रिया", "GI एंडोस्कोपी", "हर्निया / मूळव्याध सल्ला", "दंत उपचार", "अजून निश्चित नाही"],
    success: { title: "धन्यवाद", body: "तुमची विनंती आम्हाला मिळाली आहे. अपॉइंटमेंट निश्चित करण्यासाठी आम्ही लवकरच तुम्हाला परत फोन करू." },
    privacy: "तुमची माहिती फक्त अपॉइंटमेंटसंदर्भात संपर्क साधण्यासाठी वापरली जाते.",
    orCall: "सर्वात सोपा मार्ग",
    demoNote: "आत्तासाठी कृपया थेट फोन किंवा व्हॉट्सॲपवर अपॉइंटमेंट घ्या. आम्ही तुमची वेळ स्वतः निश्चित करू.",
    fallback: {
      title: "थेट हॉस्पिटलशी बोलून वेळ ठरवा",
      body: "विश्वासार्ह बुकिंगसाठी कृपया हॉस्पिटलला फोन करा किंवा व्हॉट्सॲप करा. आमची टीम तुमची वेळ थेट निश्चित करेल.",
      note: "तातडीच्या समस्यांसाठी परत फोनची वाट न पाहता थेट कॉल करा.",
    },
  },
  contact: {
    kicker: "आम्हाला भेट द्या",
    heading: "हॉस्पिटल कुठे आहे",
    sub: "आम्ही चिखलीतील शिवतेजनगर येथे स्पाइन रोडवर आहोत, संपूर्ण पिंपरी-चिंचवडमधून सहज पोहोचता येते.",
    addressLabel: "पत्ता", landmarkLabel: "खूण", hoursLabel: "OPD वेळा", phoneLabel: "फोन", emailLabel: "ईमेल",
    address: ["प्लॉट 619, सेक्टर 18, स्पाइन रोड", "विठ्ठल नगर, शिवतेजनगर, चिखली", "पिंपरी-चिंचवड, पुणे 411019"],
    landmark: "घरकुल योजनेसमोर, शिवतेजनगर",
    hours: [
      { days: "सोमवार ते शनिवार", time: "सकाळी 9:00 - दुपारी 1:30, संध्याकाळी 5:00 - रात्री 8:30" },
      { days: "रविवार", time: "अपॉइंटमेंटनुसार" },
    ],
  },
  footer: {
    tagline: "चिखली व पिंपरी-चिंचवडसाठी शस्त्रक्रिया व दंत उपचार.",
    exploreHeading: "साइट", reachHeading: "संपर्क",
    links: [
      { label: "मुख्यपृष्ठ", href: "/" },
      { label: "डॉ. तुषार खाचणे", href: "/doctors/tushar/" },
      { label: "डॉ. बबिता खाचणे", href: "/doctors/babita/" },
      { label: "अपॉइंटमेंट बुक करा", href: "#appointment" },
    ],
    rights: "© 2026 चिंतामणी हॉस्पिटल आणि डेंटल क्लिनिक. सर्व हक्क राखीव.",
  },
};

/* ============================== हिंदी (HINDI) ============================== */
const hi: Copy = {
  htmlLang: "hi-IN",
  ogLocale: "hi_IN",
  meta: {
    title: "चिंतामणी हॉस्पिटल एंड डेंटल क्लिनिक | चिखली, पिंपरी-चिंचवड में सर्जरी व डेंटल",
    description:
      "चिखली, पिंपरी-चिंचवड (पुणे) के शिवतेजनगर स्थित चिंतामणी हॉस्पिटल में डॉ. तुषार खाचणे व डॉ. बबिता खाचणे के मार्गदर्शन में सामान्य व लैप्रोस्कोपिक सर्जरी, GI एंडोस्कोपी और संपूर्ण डेंटल देखभाल.",
  },
  nav: [
    { label: "मुखपृष्ठ", href: "/" },
    { label: "डॉ. तुषार", href: "/doctors/tushar/" },
    { label: "डॉ. बबिता", href: "/doctors/babita/" },
    { label: "संपर्क", href: "#contact" },
  ],
  common: {
    book: "अपॉइंटमेंट बुक करें", call: "अभी कॉल करें", whatsapp: "व्हाट्सऐप",
    openNow: "अभी खुला है", closed: "जल्द ही खुलेगा",
    opensToday: "आज {t} बजे खुलेगा", opensDay: "{d} {t} बजे खुलेगा", today: "आज",
    directions: "रास्ता पाएँ", viewMap: "मानचित्र पर देखें", langName: "हिंदी",
    phoneAria: "हॉस्पिटल को कॉल करें", home: "मुखपृष्ठ", skip: "सामग्री पर जाएँ",
  },
  hero: {
    place: "शिवतेजनगर, चिखली",
    line1: "कुशल सर्जरी.",
    line2: "सौम्य दंत उपचार.",
    sub: "वरिष्ठ सर्जिकल देखभाल और आधुनिक डेंटल उपचार, दोनों उन्हीं डॉक्टरों के नेतृत्व में जिनसे आप यहाँ मिलते हैं, चिखली, पुणे में एक ही छत के नीचे.",
    rating: "पुणे भर के मरीज़ों से 4.7",
    established: "डॉ. तुषार खाचणे व डॉ. बबिता खाचणे के मार्गदर्शन में",
    scrollCue: "और देखने के लिए स्क्रॉल करें",
  },
  trust: ["MS जनरल सर्जरी", "लैप्रोस्कोपिक सर्जरी", "GI एंडोस्कोपी", "हर्निया व बवासीर", "प्रोफ़ेसर, MIMER", "BDS डेंटल", "20+ वर्ष", "4.7 रेटिंग"],
  about: {
    kicker: "हॉस्पिटल के बारे में",
    heading: "गंभीर चिकित्सा देखभाल, फिर भी अपनापन",
    sub: "",
    body: [
      "चिंतामणी हॉस्पिटल की स्थापना एक सरल विश्वास पर हुई: गंभीर चिकित्सा देखभाल में भी इंसानियत होनी चाहिए. हम आधुनिक सर्जिकल तकनीक के साथ-साथ मरीज़ की बात सुनने, ध्यान से जाँच करने और सरल भाषा में विकल्प समझाने के लिए समय देते हैं.",
      "पहली जाँच से लेकर घर पर ठीक होने तक, एक अनुभवी और छोटी टीम हर मरीज़ की देखभाल अपने परिवार के सदस्य की तरह करती है.",
    ],
    quote: "हम आधुनिक चिकित्सा तकनीक को मरीज़ के कल्याण के प्रति सच्चे समर्पण के साथ जोड़ते हैं.",
    quoteBy: "डॉ. तुषार खाचणे",
  },
  stats: [
    { value: 20, suffix: "+", decimals: 0, label: "वर्षों का सर्जिकल अनुभव", note: "" },
    { value: 4.7, suffix: "/5", decimals: 1, label: "औसत मरीज़ रेटिंग", note: "Google व Justdial" },
    { value: 2, suffix: "", decimals: 0, label: "विशेषज्ञताएँ, एक ही छत", note: "सर्जरी + डेंटल" },
    { value: 6, suffix: " दिन", decimals: 0, label: "हफ़्ते में खुला", note: "" },
  ],
  doctorsIntro: {
    kicker: "आपके डॉक्टर",
    heading: "अनुभवी डॉक्टर, स्वयं देखभाल",
    sub: "जिनका नाम दरवाज़े पर है वही डॉक्टर आपका इलाज करते हैं; आपको इधर-उधर नहीं भेजा जाता.",
  },
  doctors: [
    {
      id: "tushar",
      name: "डॉ. तुषार खाचणे",
      role: "कन्सल्टंट जनरल व लैप्रोस्कोपिक सर्जन · GI एंडोस्कोपिस्ट",
      credentials: "MS (Surgery), FICS, FACRSI, FAMS, Dipl. S",
      experience: "20+ वर्षों का अनुभव",
      tagline: "आधुनिक जनरल व लैप्रोस्कोपिक सर्जरी, साफ़ समझाकर और देखभाल के साथ.",
      focusLabel: "विशेषज्ञता",
      focus: ["लैप्रोस्कोपिक (दूरबीन) सर्जरी", "GI एंडोस्कोपी", "हर्निया, बवासीर व फिस्तुला"],
      bio: "ऑपरेशन थिएटर में बीस वर्षों से अधिक का अनुभव और MIMER मेडिकल कॉलेज में सर्जरी के प्रोफ़ेसर के रूप में दो दशकों का अनुभव रखने वाले डॉ. खाचणे कम चीरे वाली (मिनिमल-एक्सेस) सर्जरी में विशेषज्ञ हैं: छोटे चीरे, कम दर्द और जल्दी स्वस्थ होना.",
    },
    {
      id: "babita",
      name: "डॉ. बबिता खाचणे",
      role: "डेंटल सर्जन · इम्प्लांट विशेषज्ञ",
      credentials: "BDS",
      experience: "15+ वर्षों का अनुभव",
      tagline: "पूरे परिवार के लिए कोमल, आधुनिक दंत चिकित्सा, खासकर दंत इम्प्लांट में विशेषज्ञता.",
      focusLabel: "विशेषज्ञता",
      focus: ["दंत इम्प्लांट", "सामान्य व कॉस्मेटिक दंत चिकित्सा", "क्राउन व ब्रेसेस"],
      bio: "दंत चिकित्सा में पंद्रह वर्षों से अधिक के अनुभव के साथ, डॉ. बबिता खाचणे क्लिनिक में दंत चिकित्सा की ज़िम्मेदारी संभालती हैं. नियमित जाँच और सफ़ाई से लेकर पुनर्निर्माण और कॉस्मेटिक उपचार तक, वे कोमल, आधुनिक और मरीज़ को सहज महसूस कराने वाले तरीक़े से उपचार करती हैं.",
    },
  ],
  meetCta: "पूरी जानकारी देखें",
  dpage: { about: "{name} के बारे में", services: "सेवाएँ व उपचार", book: "{name} के साथ अपॉइंटमेंट", reviews: "मरीज़ क्या कहते हैं", backHome: "मुखपृष्ठ पर वापस", specialist: "अनुभवी विशेषज्ञ" },
  servicesIntro: {
    kicker: "हमारी सेवाएँ",
    heading: "दो विशेषज्ञताएँ, एक भरोसेमंद क्लिनिक",
    sub: "सर्जिकल व डेंटल देखभाल एक ही छत के नीचे, ताकि आपके परिवार का स्वास्थ्य सरल व सुव्यवस्थित रहे.",
  },
  services: [
    {
      key: "surgical", label: "सर्जिकल देखभाल", draft: false,
      blurb: "अनुभवी डॉक्टरों के मार्गदर्शन में सामान्य व कम चीरे वाली सर्जरी, साथ ही हॉस्पिटल में ही जाँच.",
      items: [
        { icon: "ph:scissors", title: "सामान्य सर्जरी", body: "अपेंडिक्स, पित्ताशय, हर्निया व आँतों की सर्जरी, सावधानीपूर्वक निदान व उपचार के साथ." },
        { icon: "ph:scan", title: "लैप्रोस्कोपिक सर्जरी", body: "पेट व हर्निया की सर्जरी के लिए कम चीरे वाली (दूरबीन) तकनीक: छोटे घाव, जल्दी रिकवरी." },
        { icon: "ph:microscope", title: "GI एंडोस्कोपी", body: "आधुनिक उपकरणों से पाचन तंत्र की निदानात्मक व उपचारात्मक एंडोस्कोपी." },
        { icon: "ph:first-aid-kit", title: "बवासीर, भगंदर व फिशर", body: "इन सामान्य रोगों का आधुनिक, आरामदायक उपचार और ठीक होने तक पूरा सहयोग." },
        { icon: "ph:dna", title: "थायरॉइड, स्तन व गाँठें", body: "थायरॉइड, स्तन रोग व शरीर की गाँठों की सर्जरी, हर चरण साफ़ समझाते हुए." },
        { icon: "ph:drop", title: "वैरिकोस वेन्स व हाइड्रोसील", body: "वैरिकोस वेन्स, हाइड्रोसील व डायबेटिक फुट का आपकी स्थिति के अनुसार उपचार." },
      ],
    },
    {
      key: "dental", label: "डेंटल देखभाल", draft: true,
      blurb: "पूरे परिवार के लिए शांत, आधुनिक डेंटल देखभाल, उन्हीं भरोसेमंद हाथों में.",
      items: [
        { icon: "ph:tooth", title: "सामान्य दंत चिकित्सा", body: "जाँच, सफ़ाई, फिलिंग व रोकथाम संबंधी देखभाल, आरामदायक माहौल में." },
        { icon: "ph:sparkle", title: "कॉस्मेटिक दंत चिकित्सा", body: "दाँत सफ़ेद करना व मुस्कान सुधार, आपके मनचाहे परिणाम को ध्यान में रखते हुए." },
        { icon: "ph:user-focus", title: "इम्प्लांट व क्राउन", body: "टूटे या गायब दाँतों को टिकाऊ व प्राकृतिक दिखने वाले तरीक़े से बहाल करना." },
        { icon: "ph:smiley", title: "ब्रेसेस व अलायनर्स", body: "बच्चों व बड़ों के लिए दाँत सीधे करने के आधुनिक विकल्प." },
      ],
    },
  ],
  journeyIntro: {
    kicker: "आपकी मुलाक़ात",
    heading: "हर चरण में क्या उम्मीद करें",
    sub: "पहले फ़ोन से लेकर घर पर रिकवरी तक, हम आपकी देखभाल कैसे करते हैं.",
  },
  journey: [
    { icon: "ph:calendar-check", title: "परामर्श", body: "फ़ोन या व्हाट्सऐप पर अपॉइंटमेंट लें. हम पहले सुनते हैं, ध्यान से जाँच करते हैं और सरल भाषा में विकल्प समझाते हैं." },
    { icon: "ph:magnifying-glass", title: "निदान", body: "ज़रूरत होने पर, हॉस्पिटल में ही एंडोस्कोपी व इमेजिंग से स्पष्ट व तेज़ तस्वीर मिलती है, ताकि कुछ भी अनुमान पर न छूटे." },
    { icon: "ph:heartbeat", title: "उपचार", body: "जहाँ संभव हो आधुनिक, कम चीरे वाली तकनीकों से अनुभवी डॉक्टरों द्वारा सर्जिकल या डेंटल उपचार." },
    { icon: "ph:house-line", title: "उपचार के बाद देखभाल", body: "स्पष्ट मार्गदर्शन व आसान फ़ॉलो-अप, ताकि आप घर पर आत्मविश्वास के साथ स्वस्थ हों." },
  ],
  whyIntro: {
    kicker: "परिवार हमें क्यों चुनते हैं",
    heading: "घर के पास, भरोसे लायक़ देखभाल",
    sub: "",
  },
  why: [
    { icon: "ph:certificate", title: "दो दशकों का सर्जिकल अनुभव", body: "एक अनुभवी सर्जन, जो MIMER मेडिकल कॉलेज में अगली पीढ़ी को पढ़ाते भी हैं." },
    { icon: "ph:scan", title: "पहले कम चीरे वाली तकनीक", body: "लैप्रोस्कोपिक व एंडोस्कोपिक तरीक़े, यानी कम दर्द और जल्दी रिकवरी." },
    { icon: "ph:tooth", title: "सर्जरी व डेंटल, एक साथ", body: "एक ही छत के नीचे दोनों सेवाएँ, जिससे आपका स्वास्थ्य प्रबंधन सरल रहता है." },
    { icon: "ph:chats-circle", title: "समझाने वाली देखभाल", body: "हम सवालों के जवाब देने के लिए समय देते हैं, ताकि आगे क्या होगा और क्यों, यह आपको हमेशा पता हो." },
  ],
  testimonialsIntro: {
    kicker: "मरीज़ों के अनुभव",
    heading: "पुणे भर के परिवारों का भरोसा",
    sub: "हमारे मरीज़ों के Google पर असली रिव्यू.",
  },
  testimonialsCta: { rated: "Google पर 4.7 रेटिंग", readMore: "Google पर सभी रिव्यू पढ़ें", verified: "Google रिव्यू" },
  appointment: {
    kicker: "मुलाक़ात बुक करें",
    heading: "अपनी अपॉइंटमेंट बुक करें",
    sub: "हमें संक्षेप में बताएँ कि आपको क्या चाहिए, हम समय तय करने के लिए आपको वापस कॉल करेंगे. किसी भी आपात स्थिति के लिए कृपया सीधे हॉस्पिटल को कॉल करें.",
    fields: {
      name: "आपका नाम", namePh: "पूरा नाम",
      phone: "फ़ोन नंबर", phonePh: "10 अंकों का मोबाइल नंबर",
      service: "आपको क्या चाहिए?", servicePh: "सेवा चुनें",
      message: "संदेश (वैकल्पिक)", messagePh: "अपनी समस्या संक्षेप में लिखें",
      submit: "कॉलबैक का अनुरोध करें", sending: "भेजा जा रहा है...",
    },
    services: ["सामान्य या लैप्रोस्कोपिक सर्जरी", "GI एंडोस्कोपी", "हर्निया / बवासीर परामर्श", "डेंटल देखभाल", "अभी तय नहीं"],
    success: { title: "धन्यवाद", body: "हमें आपका अनुरोध मिल गया है. अपॉइंटमेंट की पुष्टि के लिए हम जल्द ही आपको वापस कॉल करेंगे." },
    privacy: "आपकी जानकारी केवल अपॉइंटमेंट के संबंध में संपर्क के लिए उपयोग की जाती है.",
    orCall: "सबसे आसान तरीका",
    demoNote: "फिलहाल कृपया सीधे फोन या व्हॉट्सऐप से बुक करें. हम आपकी मुलाक़ात व्यक्तिगत रूप से कन्फर्म करेंगे.",
    fallback: {
      title: "सीधे क्लिनिक से समय तय करें",
      body: "सबसे भरोसेमंद बुकिंग के लिए अस्पताल को कॉल करें या व्हॉट्सऐप करें. हमारी टीम आपका समय सीधे कन्फर्म करेगी.",
      note: "अगर मामला ज़रूरी है, तो कॉलबैक का इंतज़ार करने के बजाय सीधे फोन करें.",
    },
  },
  contact: {
    kicker: "हमसे मिलें",
    heading: "हॉस्पिटल कहाँ है",
    sub: "हम चिखली के शिवतेजनगर में स्पाइन रोड पर हैं, पूरे पिंपरी-चिंचवड से आसानी से पहुँचा जा सकता है.",
    addressLabel: "पता", landmarkLabel: "पहचान", hoursLabel: "OPD समय", phoneLabel: "फ़ोन", emailLabel: "ईमेल",
    address: ["प्लॉट 619, सेक्टर 18, स्पाइन रोड", "विठ्ठल नगर, शिवतेजनगर, चिखली", "पिंपरी-चिंचवड, पुणे 411019"],
    landmark: "घरकुल योजना के सामने, शिवतेजनगर",
    hours: [
      { days: "सोमवार से शनिवार", time: "सुबह 9:00 - दोपहर 1:30, शाम 5:00 - रात 8:30" },
      { days: "रविवार", time: "अपॉइंटमेंट के अनुसार" },
    ],
  },
  footer: {
    tagline: "चिखली व पिंपरी-चिंचवड के लिए सर्जिकल व डेंटल देखभाल.",
    exploreHeading: "साइट", reachHeading: "संपर्क",
    links: [
      { label: "मुखपृष्ठ", href: "/" },
      { label: "डॉ. तुषार खाचणे", href: "/doctors/tushar/" },
      { label: "डॉ. बबिता खाचणे", href: "/doctors/babita/" },
      { label: "अपॉइंटमेंट बुक करें", href: "#appointment" },
    ],
    rights: "© 2026 चिंतामणी हॉस्पिटल एंड डेंटल क्लिनिक. सर्वाधिकार सुरक्षित.",
  },
};

export const copy: Record<Lang, Copy> = { en, mr, hi };

/** Language switcher entries (native names). */
export const LANGS: { code: Lang; native: string; path: string }[] = [
  { code: "en", native: "EN", path: "/" },
  { code: "mr", native: "मराठी", path: "/mr/" },
  { code: "hi", native: "हिंदी", path: "/hi/" },
];

export function t(lang: Lang): Copy {
  return copy[lang] ?? en;
}

/**
 * Prefix a locale-agnostic absolute path (e.g. "/", "/doctors/tushar/") with
 * the locale. Anchor links ("#contact") pass through unchanged. English is the
 * default locale and lives at the root.
 */
export function localePath(lang: Lang, path: string): string {
  if (path.startsWith("#") || path.startsWith("http") || path.startsWith("tel:") || path.startsWith("mailto:")) return path;
  if (lang === "en") return path;
  return path === "/" ? `/${lang}/` : `/${lang}${path}`;
}
