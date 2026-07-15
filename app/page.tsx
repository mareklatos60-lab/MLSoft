import Image from "next/image";
import Link from "next/link";

import { SiteNav } from "@/components/site-nav";

const VELLEO_URL = "https://velleo.app";

const WHY_MLSOFT_TILES = [
  {
    title: "⚡ Automation",
    text: "Reduce manual work and repetitive tasks.",
  },
  {
    title: "📈 Growth",
    text: "Help businesses attract and retain customers.",
  },
  {
    title: "🔒 Reliability",
    text: "Secure and scalable cloud solutions.",
  },
  {
    title: "🤖 Innovation",
    text: "Modern technologies including AI-powered features.",
  },
] as const;

const COMPANY_TILES = [
  {
    title: "MLSoft Ltd",
    text: "Registered in England and Wales. Company Number 17261972.",
  },
  {
    title: "Registered Address",
    text: "167-169 Great Portland Street 5th Floor Westminster W1W 5PF",
  },
] as const;

const COMPANY_EMAILS = [
  { label: "Contact@MLSoft.Ltd", href: "mailto:contact@mlsoft.ltd" },
  { label: "Contact@Velleo.app", href: "mailto:contact@velleo.app" },
] as const;

export default function HomePage() {
  return (
    <>
      <SiteNav />

      <section id="dashboard" className="hero-top" aria-label="Introduction">
        <div className="hero-top__overlay">
          <Link href="/" className="hero-top__logo" aria-label="MLSoft home">
            <Image
              src="/MLSoft_Logo.png"
              alt="MLSoft"
              width={640}
              height={256}
              priority
              className="hero-top__logo-img"
            />
          </Link>

          <div className="hero-top__copy">
            <h1 className="hero-top__title">Intelligent software for service businesses</h1>
            <p className="hero-top__lead">
              We design intelligent software for service businesses that transform bookings and
              operations, empowering owners to focus on what matters most - growth.
            </p>
          </div>
        </div>
      </section>

      <main className="main-below">
        <section id="products" className="section">
          <h2>Products</h2>
          <div className="product-panel product-panel--velleo">
            <div className="product-panel__velleo-layout">
              <div className="product-panel__velleo-content">
                <Image
                  src="/Velleo_logo_mid.jpg"
                  alt="Velleo"
                  width={314}
                  height={147}
                  className="product-panel__velleo-logo"
                />
                <p>
                  Velleo is a salon management system that combines appointment scheduling, an online
                  booking page, client management, and automated reminders in one place. It is
                  designed especially for beauty salons, barbers, and independent professionals who
                  want to organise bookings and client management.
                </p>
                <p>
                  Velleo enables to make appointments including several services. Both in the salon
                  and on your online booking page, clients can add multiple services to a single
                  visit. Duration and price add up automatically, and only staff who can perform the
                  full combination are offered.
                </p>
                <p>
                  Smart scheduling helps you fill the day efficiently and reduces awkward gaps that
                  block longer treatments later. Booking a short treatment in the middle of a free
                  window can make the next longer service impossible to schedule. Guiding staff and
                  clients toward better-placed times keeps more of your day bookable without extra
                  admin.
                </p>
                <div className="actions">
                  <a className="btn btn--primary" href={VELLEO_URL}>
                    velleo.app
                  </a>
                </div>
              </div>
              <div className="product-panel__velleo-media">
                <div className="product-panel__velleo-photo-wrap">
                  <Image
                    src="/Velleo_SpaTreatment.png"
                    alt="Velleo salon scheduling in a spa treatment setting"
                    fill
                    sizes="(max-width: 768px) 100vw, 14rem"
                    className="product-panel__velleo-photo"
                  />
                </div>
                <div className="product-panel__velleo-photo-wrap">
                  <Image
                    src="/Velleo_BookingApp.png"
                    alt="Client booking multiple salon services in the Velleo app"
                    fill
                    sizes="(max-width: 768px) 100vw, 14rem"
                    className="product-panel__velleo-photo"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="why-mlsoft" className="section">
          <h2>Why MLSoft</h2>
          <div className="why-grid">
            {WHY_MLSOFT_TILES.map((tile) => (
              <article key={tile.title} className="why-tile">
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="company-information" className="section">
          <h2>Company information</h2>
          <div className="why-grid why-grid--3">
            {COMPANY_TILES.map((tile) => (
              <article key={tile.title} className="why-tile">
                <h3>{tile.title}</h3>
                <p>{tile.text}</p>
              </article>
            ))}
            <article className="why-tile">
              <h3>Contact</h3>
              <p>
                <a href="tel:+447434101101">07 434 101 101</a>
              </p>
              <p className="why-tile__emails">
                {COMPANY_EMAILS.map((email) => (
                  <a key={email.href} href={email.href}>
                    {email.label}
                  </a>
                ))}
              </p>
            </article>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <span>© {new Date().getFullYear()} MLSoft Ltd</span>
          <a href={VELLEO_URL}>Velleo</a>
        </div>
      </footer>
    </>
  );
}
