
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "🏭",
    title: "Industrial Manpower",
    description:
      "Manpower outsourcing solutions for industrial units, factories, production facilities and manufacturing businesses.",
  },
  {
    number: "02",
    icon: "🏢",
    title: "Office Staff",
    description:
      "Professional staffing support for offices, administrative operations and everyday business requirements.",
  },
  {
    number: "03",
    icon: "✨",
    title: "Housekeeping Staff",
    description:
      "Housekeeping personnel to help maintain clean, organized and welcoming workplaces.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900">

      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 bg-[#101c2d] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <Link href="/" className="text-xl font-black tracking-wide">
            AKAS <span className="text-amber-400">ENTERPRISES</span>
          </Link>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#home" className="hover:text-amber-400">Home</a>
            <a href="#about" className="hover:text-amber-400">About Us</a>
            <a href="#services" className="hover:text-amber-400">Services</a>
            <a href="#contact" className="hover:text-amber-400">Contact</a>
          </div>

          <a
            href="#contact"
            className="rounded-full bg-amber-400 px-5 py-3 text-sm font-bold text-slate-950 hover:bg-amber-300"
          >
            Get in Touch
          </a>

        </div>
      </nav>

      {/* HERO SECTION */}
      <section
        id="home"
        className="overflow-hidden bg-[#101c2d] text-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2 md:py-32">

          <div>
            <p className="mb-6 font-bold uppercase tracking-[0.25em] text-amber-400">
              Manpower Outsourcing Services | Gujarat
            </p>

            <h1 className="text-5xl font-black leading-tight md:text-7xl">
              The Right People.
              <span className="block text-amber-400">
                Reliable Workforce.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-300">
              Your trusted partner for industrial manpower,
              office staffing and housekeeping services.
              We help businesses find workforce solutions
              for their operational requirements.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contact"
                className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950 transition hover:bg-amber-300"
              >
                Request a Consultation →
              </a>

              <a
                href="#services"
                className="rounded-full border border-white/30 px-8 py-4 font-semibold hover:bg-white/10"
              >
                Explore Services
              </a>

            </div>
          </div>

          <div>
            <img
              src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85"
              alt="Industrial workforce"
              className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
            />
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#f7f6f2] px-6 py-24">

        <div className="mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
            About Akas Enterprises
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#101c2d] md:text-5xl">
            Workforce Solutions Built Around Your Business
          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-600">
            Akas Enterprises is a manpower outsourcing service
            provider based in Gujarat, India. We aim to support
            companies and businesses with industrial manpower,
            office staff and housekeeping personnel.

            Our focus is on understanding client requirements
            and providing dependable workforce support.
          </p>

        </div>

      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="px-6 py-24">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-black text-[#101c2d]">
              Our Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-slate-500">
              Workforce support designed to meet the staffing
              requirements of businesses across Gujarat.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-3">

            {services.map((service) => (
              <div
                key={service.number}
                className="rounded-3xl border border-slate-200 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="text-5xl">
                  {service.icon}
                </div>

                <p className="mt-8 text-sm font-bold text-amber-700">
                  SERVICE {service.number}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#101c2d]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <a
                  href="#contact"
                  className="mt-8 inline-block font-bold text-amber-700 hover:text-amber-900"
                >
                  Enquire Now →
                </a>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#101c2d] px-6 py-24 text-white">

        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="font-bold uppercase tracking-[0.25em] text-amber-400">
              Why Akas Enterprises
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Your Workforce Requirements Matter.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              We focus on understanding your business needs
              and working towards suitable manpower solutions.
            </p>

          </div>

          <div className="grid gap-5">

            {[
              "Business-focused staffing solutions",
              "Multiple manpower service categories",
              "Support for businesses across Gujarat",
              "Commitment to professional service",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-white/10 bg-white/5 p-5"
              >
                <span className="mr-3 text-amber-400">✓</span>
                {item}
              </div>
            ))}

          </div>

        </div>

      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="bg-[#f7f6f2] px-6 py-24">

        <div className="mx-auto max-w-3xl text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
            Contact Us
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#101c2d] md:text-5xl">
            Let's Discuss Your Manpower Needs
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Looking for manpower outsourcing services in Gujarat?
            Contact Akas Enterprises to discuss your requirements.
          </p>

          <form
            action="mailto:info@akasenterprises.com"
            method="post"
            encType="text/plain"
            className="mt-10 space-y-5 rounded-3xl bg-white p-8 text-left shadow-sm"
          >

            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Your Name
              </label>

              <input
                id="name"
                name="Name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Phone Number
              </label>

              <input
                id="phone"
                name="Phone"
                type="tel"
                required
                placeholder="Enter your phone number"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block font-semibold">
                Service Required
              </label>

              <select
                id="service"
                name="Service"
                required
                className="w-full rounded-xl border border-slate-200 bg-white p-4"
              >
                <option value="">Select a service</option>
                <option>Industrial Manpower</option>
                <option>Office Staff</option>
                <option>Housekeeping Staff</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold">
                Your Requirements
              </label>

              <textarea
                id="message"
                name="Message"
                rows={4}
                placeholder="Tell us about your manpower requirements"
                className="w-full rounded-xl border border-slate-200 p-4 outline-none focus:border-amber-500"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#101c2d] p-4 font-bold text-white transition hover:bg-amber-600"
            >
              Send Enquiry →
            </button>

          </form>

          <p className="mt-5 text-sm text-slate-500">
            Email submission currently uses your device's email application.
            We'll configure a proper online enquiry system later.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-[#0b1422] px-6 py-12 text-white">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 md:flex-row">

          <div>

            <h3 className="text-2xl font-black">
              AKAS <span className="text-amber-400">ENTERPRISES</span>
            </h3>

            <p className="mt-3 text-sm text-slate-400">
              Manpower Outsourcing Services | Gujarat, India
            </p>

          </div>

          <div className="text-sm text-slate-400">

            <p>
              Industrial Manpower | Office Staff | Housekeeping
            </p>

            <p className="mt-4">
              © {new Date().getFullYear()} © 2026 Akas Enterprises.
All rights reserved.
            </p>

          </div>

        </div>

      </footer>

    </main>
  );
}
