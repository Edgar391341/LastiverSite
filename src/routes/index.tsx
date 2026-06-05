import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { translations, type Lang } from "@/lib/i18n";
import heroPhoto from "@/assets/photos/hero-photo2.png";
import p11 from "@/assets/photos/p11.jpg.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Լաստիվեր | Lastiver — Armenian Restaurant in Haghpat, Alaverdi" },
      { name: "description", content: "Authentic Armenian cuisine, riverside views and warm hospitality next to Haghpat Monastery, Lori." },
      { property: "og:title", content: "Լաստիվեր | Lastiver Restaurant" },
      { property: "og:description", content: "Authentic Armenian cuisine in Haghpat, Lori." },
      { property: "og:image", content: heroPhoto },
    ],
  }),
  component: Index,
});

const photos = [
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ac/1a/af/caption.jpg?w=1000&h=-1&s=1", className: "col-span-2 h-[340px] md:col-span-3 md:h-[520px]" },
  { src: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/0d/92/7a/caption.jpg?w=1000&h=-1&s=1", className: "h-[165px] md:col-span-2 md:h-[255px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/16443419/2a0000019a63be1d6c17689eb11842d7cc86/orig", className: "h-[165px] md:h-[255px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/14733519/2a00000198102fa2088dc4577fd5f220e634/orig", className: "h-[210px] md:col-span-2 md:h-[330px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/15294995/2a00000197ae405ed3d47136543090e1711c/orig", className: "h-[210px] md:h-[330px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/18109934/2a0000019c95dbd095a8280eebee20c0b6ef/orig", className: "col-span-2 h-[245px] md:col-span-3 md:h-[330px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/15251677/2a0000019a63be1e57353ecbc4b74873c2af/orig", className: "h-[190px] md:col-span-2 md:h-[300px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/16410529/2a0000019a63be1ef05a8370bdce80caebfe/orig", className: "h-[190px] md:h-[300px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/19902702/2a0000019c95db9ebbd42004d151f1dcf9e5/orig", className: "col-span-2 h-[260px] md:col-span-3 md:h-[360px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/16123546/2a0000019a63be121a09f3537fc14c6c7bba/orig", className: "h-[190px] md:h-[360px]" },
  { src: "https://avatars.mds.yandex.net/get-altay/16482798/2a0000019a63be2710cb55132b28a375024e/orig", className: "h-[190px] md:col-span-2 md:h-[360px]" },
];
const aboutImages = [
  "https://i5.photo.2gis.com/photo-gallery/7d0febd0-698a-4e9b-9921-126022d3b26a.jpg",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/31/ac/1a/af/caption.jpg?w=1000&h=-1&s=1",
  "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/33/0d/92/7a/caption.jpg?w=1000&h=-1&s=1",
];

const MAPS_URL = "https://yandex.com/maps/org/lastuer_restoran/62450414679/?ll=44.473559%2C40.957720&z=10";
const WHATSAPP_URL = "https://wa.me/37443003088";

function Index() {
  const [lang, setLang] = useState<Lang>("hy");
  const t = translations[lang];

  return (
    <div className="min-h-screen">
      {/* Nav */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/70 border-b border-border/60">
        <div className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between gap-4">
          <a href="#top" className="font-display text-xl md:text-2xl font-semibold text-primary">Լաստիվեր</a>
          <nav className="hidden md:flex items-center gap-7 text-sm text-foreground/80">
            <a href="#about" className="hover:text-primary transition">{t.nav.about}</a>
            <a href="#photos" className="hover:text-primary transition">{t.nav.photos}</a>
            <a href="#reviews" className="hover:text-primary transition">{t.nav.reviews}</a>
            <a href="#contact" className="hover:text-primary transition">{t.nav.contact}</a>
          </nav>
          <LangSwitch lang={lang} setLang={setLang} />
        </div>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <img src={heroPhoto} alt="Lastiver restaurant" className="absolute inset-0 h-full w-full scale-[1.03] object-cover blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />
        <div className="relative z-10 text-center px-5 max-w-4xl pt-20">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm text-amber-100/90 mb-6">{t.hero.eyebrow}</p>
          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white font-semibold text-balance drop-shadow-lg">
            {t.hero.title}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-amber-50/95 font-light max-w-2xl mx-auto text-balance">
            {t.hero.subtitle}
          </p>
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <a href={`tel:+37443003088`} className="px-7 py-3.5 rounded-full bg-accent text-accent-foreground font-medium hover:bg-accent/90 transition shadow-warm">
              {t.hero.cta}
            </a>
            <a href="#photos" className="px-7 py-3.5 rounded-full border border-white/70 text-white hover:bg-white/10 transition backdrop-blur-sm">
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-24 md:py-32 px-5">
        <div className="mx-auto max-w-6xl">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">{t.about.kicker}</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary text-balance">{t.about.title}</h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-balance">{t.about.lead}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {t.about.pillars.map((p, i) => (
              <article key={i} className="group rounded-2xl overflow-hidden bg-card shadow-warm border border-border/40">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={aboutImages[i]} alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-700" />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-2xl text-primary">{p.t}</h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Photos */}
      <section id="photos" className="py-24 md:py-32 px-5 bg-secondary/40">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">{t.photos.kicker}</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary">{t.photos.title}</h2>
          </div>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-6 md:gap-3">
            {photos.map((ph, i) => (
              <div key={i} className={`group relative overflow-hidden rounded-xl shadow-warm ${ph.className}`}>
                <img src={ph.src} alt={`Lastiver ${i + 1}`} className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 transition group-hover:opacity-45" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section id="reviews" className="py-24 md:py-32 px-5">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-xs text-accent mb-4">{t.reviews.kicker}</p>
            <h2 className="font-display text-4xl md:text-6xl text-primary">{t.reviews.title}</h2>
            <div className="mt-4 inline-flex items-center gap-2 text-accent">
              {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              <span className="ml-2 text-sm text-muted-foreground">5.0 · {t.reviews.source}</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {t.reviews.list.map((r, i) => (
              <blockquote key={i} className="rounded-2xl p-8 bg-card border border-border/50 shadow-warm">
                <div className="text-accent mb-3">★★★★★</div>
                <p className="text-foreground/85 leading-relaxed text-lg italic">"{r.text}"</p>
                <footer className="mt-5 pt-5 border-t border-border/50">
                  <div className="font-display text-lg text-primary">{r.name}</div>
                  <div className="text-sm text-muted-foreground">{r.place} • {r.date}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 md:py-32 px-5 bg-warm text-primary-foreground relative overflow-hidden">
        <img src={p11.url} alt="" className="absolute inset-0 w-full h-full object-cover opacity-15" />
        <div className="relative mx-auto max-w-4xl text-center">
          <p className="uppercase tracking-[0.3em] text-xs text-amber-100/90 mb-4">{t.contact.kicker}</p>
          <h2 className="font-display text-4xl md:text-6xl text-balance">{t.contact.title}</h2>

          <div className="mt-12 grid sm:grid-cols-3 gap-6 text-left">
            <InfoCard label="📍" value={t.contact.address} />
            <InfoCard label="🕰️" value={t.contact.hours} />
            <InfoCard label="📞" value={t.contact.phone} href="tel:+37443003088" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href={MAPS_URL} target="_blank" rel="noopener" className="px-7 py-3.5 rounded-full bg-amber-50 text-primary font-medium hover:bg-white transition">
              {t.contact.directions}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener" className="px-7 py-3.5 rounded-full border border-amber-50/80 text-amber-50 hover:bg-amber-50/10 transition">
              {t.contact.whatsapp}
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        {t.footer}
      </footer>
    </div>
  );
}

function InfoCard({ label, value, href }: { label: string; value: string; href?: string }) {
  const inner = (
    <div className="rounded-2xl p-6 bg-white/10 backdrop-blur-sm border border-white/20 h-full">
      <div className="text-2xl mb-2">{label}</div>
      <div className="text-amber-50/95 leading-relaxed">{value}</div>
    </div>
  );
  return href ? <a href={href} className="block hover:scale-[1.02] transition">{inner}</a> : inner;
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  const opts: { code: Lang; label: string }[] = [
    { code: "hy", label: "ՀՅ" },
    { code: "ru", label: "RU" },
    { code: "en", label: "EN" },
  ];
  return (
    <div className="flex items-center gap-1 rounded-full bg-secondary/70 p-1 border border-border">
      {opts.map((o) => (
        <button
          key={o.code}
          onClick={() => setLang(o.code)}
          className={`px-3 py-1.5 text-xs font-medium rounded-full transition ${
            lang === o.code ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-primary"
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  );
}
