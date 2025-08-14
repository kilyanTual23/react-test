// ===============================
// Apple-like Audiovisuel Landing — SINGLE FILE (Premium Styling)
// Notes:
// - Style revu: spacing généreux, hiérarchie typo, glass, ombres soft, dégradés subtils
// - Animations élégantes (fade/slide), hover 1.02 max, respects prefers-reduced-motion
// - Un seul import React (évite les collisions). Placeholders conservés.
// ===============================

import React, { useEffect, useState, useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  Menu, X,
  Clapperboard, Camera, Sparkles,
  Mic2, Film, Presentation,
  MessageSquare, ClipboardCheck, Video as VideoIcon,
  Mail, Phone, MapPin, Instagram, Youtube, Linkedin, Music4
} from "lucide-react";

// ================= Variables (placeholders) =================
export const STUDIO_NAME = "Studio Casting";
export const TAGLINE = "Le premium au service de votre réussité";
export const CTA_PRIMARY = "Demander un devis";
export const LOCATION = "Paris, France";
export const CONTACT_EMAIL = "hello@studiocasting.com";
export const HERO_VIDEO_URL = ""; // "chemin/vers/reel.mp4 (optionnel)"
export const PHONE = "+33 6 37 74 84 00";
export const SOCIALS = { instagram: "#", youtube: "#", linkedin: "#", tiktok: "#" };
// ===========================================================

// ----------------------- Utils -----------------------------
const cx = (...classes) => classes.filter(Boolean).join(" ");

function Button({ children, as: Tag = "a", href = "#", onClick, variant = "primary", className = "", ariaLabel, ...rest }) {
  const base = "inline-flex items-center justify-center rounded-2xl px-6 py-3 text-sm md:text-[15px] font-medium focus:outline-none focus:ring-2 focus:ring-slate-900/20 transition will-change-transform";
  const styles = {
    primary: "bg-slate-900 text-white shadow-sm hover:shadow-md active:scale-[.99]",
    glass: "border border-slate-200/80 bg-white/60 backdrop-blur text-slate-900 shadow-sm hover:shadow-md active:scale-[.99]",
    ghost: "text-slate-900/90 hover:text-slate-900"
  };
  return (
    <Tag
      href={Tag === "a" ? href : undefined}
      onClick={onClick}
      aria-label={ariaLabel}
      className={cx(base, styles[variant], className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function Card({ className = "", children, as: Tag = "div", ...rest }) {
  return (
    <Tag
      className={cx(
        // glass + depth + smooth border
        "rounded-2xl border border-slate-200/70 bg-white/70 backdrop-blur shadow-sm hover:shadow-md transition will-change-transform",
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}

function FadeIn({ children, delay = 0, y = 14 }) {
  const prefersReduced = useReducedMotion();
  const variants = prefersReduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { opacity: 0, y }, show: { opacity: 1, y: 0 } };
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      transition={{ duration: 0.55, ease: "easeOut", delay }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

function SectionTitle({ title, subtitle, align = "center", id }) {
  return (
    <header id={id} className={cx("mb-12 md:mb-16", align === "center" ? "text-center" : "text-left")}> 
      <h2 className="text-[28px] md:text-[36px] font-semibold tracking-tight text-slate-900">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-slate-600/90 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
      )}
    </header>
  );
}

// ------------------------- SEO -----------------------------
function Seo({ title, description, url, image }) {
  useEffect(() => {
    if (title) document.title = title;
    const ensure = (name, attr = "name") => {
      let el = document.querySelector(`meta[${attr}='${name}']`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      return el;
    };
    if (description) ensure("description").setAttribute("content", description);
    if (title) ensure("og:title", "property").setAttribute("content", title);
    if (description) ensure("og:description", "property").setAttribute("content", description);
    ensure("og:type", "property").setAttribute("content", "website");
    if (url) ensure("og:url", "property").setAttribute("content", url);
    if (image) ensure("og:image", "property").setAttribute("content", image);
  }, [title, description, url, image]);
  return null;
}

// ------------------------ Header ---------------------------
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="px-3 py-2 text-[15px] text-slate-700 hover:text-slate-900 focus:ring-2 focus:ring-slate-900/15 rounded-lg"
    >
      {children}
    </a>
  );

  return (
    <header
      className={cx(
        "sticky top-0 z-50 transition",
        scrolled ? "bg-white/70 backdrop-blur border-b border-slate-200/70" : "bg-white/30 backdrop-blur"
      )}
      aria-label="En-tête de navigation"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#" className="text-base md:text-lg font-semibold tracking-tight text-slate-900" aria-label="Accueil">
          {STUDIO_NAME}
        </a>
        <nav className="hidden md:flex items-center gap-2" aria-label="Navigation principale">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#pricing">Offres</NavLink>
          <NavLink href="#work">Réalisations</NavLink>
          <NavLink href="#about">À propos</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </nav>
        <div className="hidden md:block">
          <Button href="#contact" ariaLabel={CTA_PRIMARY} variant="glass">{CTA_PRIMARY}</Button>
        </div>
        <button
          className="md:hidden p-2 rounded-xl border border-slate-200 bg-white/70"
          aria-label="Ouvrir le menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-white/90 backdrop-blur border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-2">
            {[
              ["#services", "Services"],
              ["#pricing", "Offres"],
              ["#work", "Réalisations"],
              ["#about", "À propos"],
              ["#contact", "Contact"],
            ].map(([href, label]) => (
              <a key={href} href={href} className="py-2 text-slate-800" onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
            <Button href="#contact" className="mt-2" variant="primary">{CTA_PRIMARY}</Button>
          </div>
        </div>
      )}
    </header>
  );
}

// -------------------------- Hero ---------------------------
function Hero() {
  const prefersReduced = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = prefersReduced ? 0 : useTransform(scrollYProgress, [0, 1], [0, 18]);

  return (
    <section ref={ref} className="relative pt-20 md:pt-28 pb-16 md:pb-24" aria-label="Section d'introduction">
      {/* Subtle radial gradient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(1200px_600px_at_50%_0%,rgba(15,23,42,0.05),transparent_60%)]" />

      <div className="text-center">
        <motion.div style={{ y }}>
          <div className="inline-flex items-center gap-2 text-xs md:text-[13px] text-slate-600 border border-slate-200/80 bg-white/70 backdrop-blur rounded-full px-3 py-1.5 mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
            Disponible sous 48h pour un brief — {LOCATION}
          </div>
          <h1 className="text-[40px] md:text-[56px] leading-[1.05] font-semibold tracking-tight text-slate-900">
            Image. Son. Impact.
          </h1>
          <p className="mt-4 text-[17px] md:text-[19px] text-slate-600">{TAGLINE}</p>
          <p className="mt-4 text-slate-600/90 max-w-3xl mx-auto leading-relaxed">
            Production cinématographique, narration claire et efficacité sociale. Nous créons des contenus qui performent sur vos canaux.
          </p>
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button href="#contact" ariaLabel={CTA_PRIMARY} variant="primary">{CTA_PRIMARY}</Button>
            <Button href="#work" variant="glass" ariaLabel="Voir nos réalisations">Voir nos réalisations</Button>
          </div>
        </motion.div>

        <div className="mt-12 md:mt-16">
          {HERO_VIDEO_URL ? (
            <motion.video
              key="hero-video"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="w-full rounded-3xl border border-slate-200 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.25)]"
              src={HERO_VIDEO_URL}
              poster="https://placehold.co/1200x675/png"
              controls
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <motion.img
              key="hero-img"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              src="https://placehold.co/1200x675/png"
              alt="Aperçu de nos réalisations"
              loading="lazy"
              className="w-full rounded-3xl border border-slate-200 shadow-[0_10px_30px_-10px_rgba(2,6,23,0.25)]"
            />
          )}
        </div>

        <p className="mt-8 text-xs text-slate-500 font-medium tracking-wide">— Disponible en {LOCATION} & partout en Europe —</p>
      </div>
    </section>
  );
}

// ------------------------ Services -------------------------
const SERVICES = [
  { icon: Clapperboard, title: "Spot Publicitaire", points: ["Concept & script", "Tournage multi-cam", "Optimisé TV & social"] },
  { icon: Film, title: "Aftermovie", points: ["Immersion événementielle", "Montage rythmé", "Versions courtes"] },
  { icon: Sparkles, title: "Brand Content", points: ["Séries sociales", "UGC premium", "Calendrier éditorial"] },
  { icon: Presentation, title: "Motion Design", points: ["Identité animée", "Explainers clairs", "Sous-titres / templates"] },
  { icon: Camera, title: "Captation Événementielle", points: ["Équipe agile", "Son & lumière", "Live/Replay"] },
  { icon: Mic2, title: "Interviews", points: ["Préparation & cadre", "Prise de son studio", "Sous-titrage"] },
];

function Services() {
  return (
    <section id="services" className="py-16 md:py-24" aria-label="Nos services">
      <SectionTitle title="Services" subtitle="Des formats pensés pour l'impact et la qualité." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
        {SERVICES.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <Card className="p-6 hover:-translate-y-0.5">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <s.icon aria-hidden className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-slate-900">{s.title}</h3>
                  <ul className="mt-3 space-y-1.5 text-sm text-slate-700 list-disc ml-5">
                    {s.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ------------------------- Pricing -------------------------
const TIERS = [
  {
    name: "Essentiel",
    price: "À partir de 1 500€",
    features: ["Pré-production légère", "1 jour de tournage", "Montage + musique libre", "Livrable 1x 60-90s"],
    recommended: false,
  },
  {
    name: "Pro",
    price: "À partir de 3 900€",
    features: ["Pré-prod complète", "2 jours tournage + DOP", "Motion léger & étalonnage", "Livrables sociaux (9:16 / 1:1)"],
    recommended: true,
  },
  {
    name: "Ultimate",
    price: "Sur devis",
    features: ["Concept campagne", "Équipe élargie", "3D/Motion avancé", "Pack multi-films & photos"],
    recommended: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24" aria-label="Nos offres">
      <SectionTitle title="Offres" subtitle="Une base claire, un devis sur mesure selon votre besoin." />
      <div className="grid md:grid-cols-3 gap-6 md:gap-7">
        {TIERS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.07}>
            <Card className={"p-7 relative " + (t.recommended ? "ring-1 ring-slate-900/10" : "") }>
              {t.recommended && (
                <div className="absolute -top-3 left-7 bg-slate-900 text-white text-xs px-2.5 py-1 rounded-full shadow-sm">
                  Recommandé
                </div>
              )}
              <h3 className="text-xl font-semibold text-slate-900">{t.name}</h3>
              <p className="mt-2 text-slate-700">{t.price}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-700">
                {t.features.map((f) => (
                  <li key={f} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-slate-500">Devis sur mesure.</p>
              <Button href="#contact" className="mt-6 w-full" ariaLabel={CTA_PRIMARY} variant="primary">{CTA_PRIMARY}</Button>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// ------------------------ Showcase -------------------------
const WORKS = Array.from({ length: 6 }).map((_, i) => ({
  title: `Projet ${i + 1}`,
  category: i % 2 ? "Brand Content" : "Aftermovie",
  duration: i % 2 ? "45s" : "1m20",
  thumb: "https://placehold.co/800x500/png",
}));

function Showcase() {
  return (
    <section id="work" className="py-16 md:py-24" aria-label="Réalisations">
      <SectionTitle title="Réalisations" subtitle="Une sélection de projets récents." />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:gap-7">
        {WORKS.map((w, i) => (
          <FadeIn key={w.title} delay={i * 0.06}>
            <Card className="group overflow-hidden">
              <div className="relative">
                <img src={w.thumb} alt={w.title} loading="lazy" className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/0 opacity-0 group-hover:opacity-100 transition" />
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 group-hover:opacity-100 transition">
                  <div className="text-sm/5 text-white/80">{w.category} • {w.duration}</div>
                  <div className="font-medium">{w.title}</div>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <Button href="#work" variant="glass">Voir plus</Button>
      </div>
    </section>
  );
}

// -------------------------- About --------------------------
function About() {
  return (
    <section id="about" className="py-16 md:py-24" aria-label="À propos">
      <SectionTitle title="À propos" subtitle="Expertise, exigence, simplicité de collaboration." />
      <div className="grid md:grid-cols-5 gap-8 items-start">
        <FadeIn>
          <Card className="md:col-span-2 p-4">
            <img src="https://placehold.co/600x700/png" alt="Portrait du prestataire" loading="lazy" className="w-full rounded-2xl" />
          </Card>
        </FadeIn>
        <FadeIn delay={0.07}>
          <div className="md:col-span-3">
            <h3 className="text-xl md:text-2xl font-semibold text-slate-900">Nom Prénom — Réalisateur / Producteur</h3>
            <p className="mt-3 text-slate-700 leading-relaxed">
              J’accompagne marques et institutions dans la création de contenus exigeants, du brief à la diffusion. Un process clair, des images soignées, un rendu qui sert vos objectifs.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-2 text-sm text-slate-700">
              {[
                "Réalisation", "Direction photo (DOP)", "Montage", "Color grading", "Motion design", "Prise de son"
              ].map((s) => (
                <li key={s} className="flex gap-2"><span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-900" aria-hidden />{s}</li>
              ))}
            </ul>
            <div className="mt-7 grid grid-cols-3 sm:grid-cols-6 gap-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <img key={i} src="https://placehold.co/200x80/png" alt={`Logo client ${i+1}`} loading="lazy" className="w-full opacity-70 hover:opacity-100 transition rounded" />
              ))}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

// ----------------------- Testimonials ----------------------
const TESTIMONIALS = [
  { name: "Camille D.", role: "CM, retail", quote: "Exécution impeccable, process fluide, résultats au-dessus de nos attentes." },
  { name: "Nicolas R.", role: "Dir. marketing", quote: "Une patte visuelle premium et des formats qui performent en social." },
  { name: "Sarah L.", role: "Fondatrice", quote: "Pédagogie, exigence, respect des délais : parfait de A à Z." },
];

function Testimonials() {
  return (
    <section className="py-16 md:py-24" aria-label="Témoignages">
      <SectionTitle title="Ils nous font confiance" subtitle="Des collaborations qui durent." />
      <div className="grid md:grid-cols-3 gap-6 md:gap-7">
        {TESTIMONIALS.map((t, i) => (
          <FadeIn key={t.name} delay={i * 0.06}>
            <Card className="p-7">
              <div className="flex items-center gap-4">
                <img src="https://placehold.co/64x64/png" alt="Avatar client" loading="lazy" className="h-12 w-12 rounded-full" />
                <div>
                  <div className="font-medium text-slate-900">{t.name}</div>
                  <div className="text-xs text-slate-500">{t.role}</div>
                </div>
              </div>
              <p className="mt-3 text-slate-700 leading-relaxed">“{t.quote}”</p>
            </Card>
          </FadeIn>
        ))}
      </div>
      <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        {[
          ["+120", "projets livrés"],
          ["95%", "satisfaction"],
          ["48h", "pour un brief"],
          ["< 10 j", "délai moyen"]
        ].map(([k, v]) => (
          <div key={k} className="rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur p-5 shadow-sm">
            <div className="text-2xl font-semibold text-slate-900">{k}</div>
            <div className="text-xs text-slate-600 mt-1">{v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

// -------------------------- Process ------------------------
const STEPS = [
  { icon: MessageSquare, title: "Brief", text: "Objectifs, audience, style. On clarifie et on conseille." },
  { icon: ClipboardCheck, title: "Pré-prod", text: "Repérages, planning, script, cadrage budgétaire." },
  { icon: VideoIcon, title: "Tournage", text: "Équipe agile, matériel ciné, direction précise." },
  { icon: Sparkles, title: "Post-prod", text: "Montage, motion, color, mixage — livrables réseaux." },
];

function Process() {
  return (
    <section className="py-16 md:py-24" aria-label="Méthodologie">
      <SectionTitle title="Process" subtitle="Un déroulé clair, sans frictions." />
      <div className="grid md:grid-cols-4 gap-6 md:gap-7">
        {STEPS.map((s, i) => (
          <FadeIn key={s.title} delay={i * 0.06}>
            <Card className="p-7 h-full">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-2xl bg-slate-900 text-white flex items-center justify-center shadow-sm">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <div className="font-medium text-slate-900">{s.title}</div>
                  <p className="text-sm text-slate-700 mt-1 leading-relaxed">{s.text}</p>
                </div>
              </div>
            </Card>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

// -------------------------- Contact ------------------------
function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name) e.name = "Nom requis";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Email invalide";
    if (form.message.length < 10) e.message = "Message trop court";
    if (!form.consent) e.consent = "Consentement requis";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const submit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    alert("Merci ! Votre message a bien été envoyé.");
    setForm({ name: "", email: "", message: "", consent: false });
  };

  const SocialIcon = ({ type }) => {
    const map = { instagram: Instagram, youtube: Youtube, linkedin: Linkedin, tiktok: Music4 };
    const Ico = map[type];
    return <Ico className="h-5 w-5" aria-hidden />;
  };

  return (
    <section id="contact" className="py-16 md:py-24" aria-label="Contact">
      <SectionTitle title="Contact" subtitle="Parlons de votre projet, sans engagement." />
      <div className="grid md:grid-cols-2 gap-7">
        <Card className="p-7">
          <form onSubmit={submit} noValidate>
            <div className="grid gap-5">
              <div>
                <label className="text-sm text-slate-700" htmlFor="name">Nom</label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="mt-1 w-full rounded-2xl border border-slate-200/80 px-3 py-2.5 focus:ring-2 focus:ring-slate-900/20"
                  aria-invalid={!!errors.name}
                />
                {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name}</p>}
              </div>
              <div>
                <label className="text-sm text-slate-700" htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="mt-1 w-full rounded-2xl border border-slate-200/80 px-3 py-2.5 focus:ring-2 focus:ring-slate-900/20"
                  aria-invalid={!!errors.email}
                />
                {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email}</p>}
              </div>
              <div>
                <label className="text-sm text-slate-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-1 w-full rounded-2xl border border-slate-200/80 px-3 py-2.5 focus:ring-2 focus:ring-slate-900/20"
                  aria-invalid={!!errors.message}
                />
                {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
              </div>
              <label className="inline-flex items-start gap-2 text-sm text-slate-700">
                <input
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm({ ...form, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-slate-300"
                />
                <span>
                  J’accepte que mes données soient utilisées pour être recontacté(e).
                </span>
              </label>
              {errors.consent && <p className="text-xs text-red-600 -mt-2">{errors.consent}</p>}
              <Button as="button" type="submit" variant="primary" className="mt-1 w-full md:w-auto" ariaLabel={CTA_PRIMARY}>
                {CTA_PRIMARY}
              </Button>
            </div>
          </form>
        </Card>
        <div className="grid gap-5 content-start">
          <Card className="p-6">
            <div className="flex items-center gap-3 text-slate-700"><MapPin className="h-4 w-4" /> {LOCATION}</div>
            <a href={`tel:${PHONE.replace(/\s/g,'')}`} className="mt-2 flex items-center gap-3 text-slate-700"><Phone className="h-4 w-4" /> {PHONE}</a>
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 flex items-center gap-3 text-slate-700"><Mail className="h-4 w-4" /> {CONTACT_EMAIL}</a>
          </Card>
          <Card className="p-6">
            <div className="text-sm text-slate-600 mb-2">Réseaux</div>
            <div className="flex items-center gap-3">
              {Object.entries(SOCIALS).map(([k, v]) => (
                <a key={k} href={v} aria-label={k} className="p-2 rounded-xl border border-slate-200/80 bg-white/70 backdrop-blur hover:shadow-sm">
                  <SocialIcon type={k} />
                </a>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}

// -------------------------- Footer -------------------------
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-slate-200/70 bg-white/70 backdrop-blur">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-10 text-sm text-slate-600">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="font-medium text-slate-900">{STUDIO_NAME}</div>
          <nav className="flex items-center gap-4">
            <a href="#services" className="hover:text-slate-900">Services</a>
            <a href="#pricing" className="hover:text-slate-900">Offres</a>
            <a href="#work" className="hover:text-slate-900">Réalisations</a>
            <a href="#about" className="hover:text-slate-900">À propos</a>
            <a href="#contact" className="hover:text-slate-900">Contact</a>
            <a href="#" className="hover:text-slate-900">Mentions légales</a>
          </nav>
        </div>
        <div className="mt-4">© {year} {STUDIO_NAME}. Tous droits réservés.</div>
      </div>
    </footer>
  );
}

// --------------------------- App ---------------------------
export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-slate-50 text-slate-900 scroll-smooth antialiased">
      <Seo
        title={`${STUDIO_NAME} — Production Audiovisuelle Premium`}
        description="Studio audiovisuel premium : spots publicitaires, brand content, aftermovies, motion design. Qualité ciné, narration claire, performance sociale."
        url="https://example.com"
        image="https://placehold.co/1200x630/png"
      />

      <Header />
      <main className="max-w-7xl mx-auto px-6 md:px-8">
        <Hero />
        <Services />
        <Pricing />
        <Showcase />
        <About />
        <Testimonials />
        <Process />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
