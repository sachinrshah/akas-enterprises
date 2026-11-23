
const services = [
  {
    icon: "🏭",
    title: "Industrial Manpower",
    description:
      "Manpower outsourcing solutions for factories, manufacturing units, industrial plants and production facilities.",
  },
  {
    icon: "🏢",
    title: "Office Staff",
    description:
      "Staffing support for offices, administrative operations and commercial establishments.",
  },
  {
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
      <nav className="sticky top-0 z-50 bg-[#101c2d] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <a href="#home" className="text-xl font-black">
            AKAS <span className="text-amber-400">ENTERPRISES</span>
          </a>

          <div className="hidden gap-7 text-sm md:flex">
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </div>

          <a href="#contact" className="rounded-full bg-amber-400 px-5 py-3 font-bold text-slate-950">
            Get in Touch
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="bg-[#101c2d] text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-amber-400">
              Manpower Outsourcing | Gujarat
            </p>

            <h1 className="mt-6 text-5xl font-black leading-tight md:text-7xl">
              The Right People.
              <span className="block text-amber-400">
                The Right Workforce.
              </span>
            </h1>

            <p className="mt-7 text-lg leading-8 text-slate-300">
              AKAS ENTERPRISES provides manpower outsourcing
              solutions for industrial, office and housekeeping
              requirements. We help businesses find workforce
              support suited to their needs.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a href="#contact" className="rounded-full bg-amber-400 px-8 py-4 font-bold text-slate-950">
                Request a Quote →
              </a>

              <a href="#services" className="rounded-full border border-white/40 px-8 py-4">
                Our Services
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85"
            alt="Industrial workforce"
            className="h-[420px] w-full rounded-3xl object-cover shadow-2xl"
          />

        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-[#f7f6f2] px-6 py-24">
        <div className="mx-auto max-w-4xl text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
            About Akas Enterprises
          </p>

          <h2 className="mt-5 text-4xl font-black text-[#101c2d] md:text-5xl">
            Workforce Solutions for Growing Businesses
          </h2>

          <p className="mt-7 text-lg leading-9 text-slate-600">
            AKAS ENTERPRISES is a manpower outsourcing service
            provider based in Gujarat, India. We aim to support
            industrial and commercial businesses with their
            workforce requirements.
          </p>

          <p className="mt-5 text-lg leading-9 text-slate-600">
            Our services include industrial manpower, office
            staff and housekeeping personnel. We focus on
            understanding client requirements and building
            professional business relationships.
          </p>

        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
              What We Offer
            </p>

            <h2 className="mt-5 text-4xl font-black text-[#101c2d]">
              Our Services
            </h2>

            <p className="mt-4 text-slate-500">
              Professional workforce support for your business.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-9 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="text-5xl">{service.icon}</div>

                <p className="mt-8 text-sm font-bold text-amber-700">
                  SERVICE 0{index + 1}
                </p>

                <h3 className="mt-3 text-2xl font-black text-[#101c2d]">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-slate-600">
                  {service.description}
                </p>

                <a href="#contact" className="mt-8 inline-block font-bold text-amber-700">
                  Enquire Now →
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#101c2d] px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2">

          <div>
            <p className="font-bold uppercase tracking-[0.25em] text-amber-400">
              Why Choose Us
            </p>

            <h2 className="mt-5 text-4xl font-black md:text-5xl">
              Your Workforce Requirements Matter.
            </h2>

            <p className="mt-6 leading-8 text-slate-300">
              We focus on understanding your business needs
              and working towards suitable manpower solutions.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Business-focused staffing solutions",
              "Multiple manpower service categories",
              "Support across Gujarat",
              "Professional client-focused approach",
            ].map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-5">
                <span className="mr-3 text-amber-400">✓</span>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="bg-[#f7f6f2] px-6 py-24">
        <div className="mx-auto max-w-3xl">

          <div className="text-center">
            <p className="font-bold uppercase tracking-[0.25em] text-amber-700">
              Contact Us
            </p>

            <h2 className="mt-5 text-4xl font-black text-[#101c2d]">
              Let's Discuss Your Manpower Needs
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Contact AKAS ENTERPRISES to discuss your
              industrial, office or housekeeping requirements.
            </p>
          </div>

          <form
            action="https://formsubmit.co/YOUR_EMAIL_ADDRESS"
            method="POST"
            className="mt-10 space-y-5 rounded-3xl bg-white p-8 shadow-sm"
          >
            <input type="hidden" name="_subject" value="New Akas Enterprises Enquiry" />

            <div>
              <label htmlFor="name" className="mb-2 block font-semibold">
                Your Name *
              </label>
              <input
                id="name"
                name="name"
                required
                placeholder="Enter your name"
                className="w-full rounded-xl border border-slate-200 p-4"
              />
            </div>

            <div>
              <label htmlFor="company" className="mb-2 block font-semibold">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                placeholder="Enter company name"
                className="w-full rounded-xl border border-slate-200 p-4"
              />
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-semibold">
                Phone Number *
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                required
                placeholder="Enter phone number"
                className="w-full rounded-xl border border-slate-200 p-4"
              />
            </div>

            <div>
              <label htmlFor="service" className="mb-2 block font-semibold">
                Service Required *
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="w-full rounded-xl border border-slate-200 bg-white p-4"
              >
                <option value="" disabled>Select a service</option>
                <option>Industrial Manpower</option>
                <option>Office Staff</option>
                <option>Housekeeping Staff</option>
                <option>Multiple Services</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block font-semibold">
                Your Requirements
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Tell us what you need..."
                className="w-full rounded-xl border border-slate-200 p-4"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-[#101c2d] p-4 font-bold text-white hover:bg-amber-600"
            >
              Send Enquiry →
            </button>

            <p className="text-xs text-slate-500">
              Replace YOUR_EMAIL_ADDRESS with your business email
              and verify it with FormSubmit before accepting enquiries.
            </p>
          </form>

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
            <p>Industrial Manpower | Office Staff | Housekeeping</p>
            <p className="mt-5">
              © 2026 AKAS ENTERPRISES. All rights reserved.
            </p>
          </div>

        </div>
      </footer>

    </main>
  );
}
