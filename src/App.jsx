import React from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@viviendobizkaia.com";
const CONTACT_PHONE = "688 908 926";

function Icon({ name, className = "h-6 w-6" }) {
  const commonProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const icons = {
    arrow: (
      <svg {...commonProps}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    building: (
      <svg {...commonProps}>
        <path d="M4 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
        <path d="M16 10h2a2 2 0 0 1 2 2v9" />
        <path d="M8 9h4" />
        <path d="M8 13h4" />
        <path d="M8 17h4" />
        <path d="M3 21h18" />
      </svg>
    ),
    shield: (
      <svg {...commonProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    helmet: (
      <svg {...commonProps}>
        <path d="M3 18h18" />
        <path d="M5 18v-5a7 7 0 0 1 14 0v5" />
        <path d="M9 18v-7" />
        <path d="M15 18v-7" />
      </svg>
    ),
    phone: (
      <svg {...commonProps}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    mail: (
      <svg {...commonProps}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    map: (
      <svg {...commonProps}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    check: (
      <svg {...commonProps}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    hammer: (
      <svg {...commonProps}>
        <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
        <path d="m17.64 15 3.12-3.12a2.5 2.5 0 0 0 0-3.54l-5.1-5.1a2.5 2.5 0 0 0-3.54 0L9 6.36" />
        <path d="m14 7 3 3" />
      </svg>
    )
  };

  return icons[name] || icons.check;
}

function Button({ children, href = "#contacto", variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-3.5 text-sm font-bold transition md:text-base";
  const styles =
    variant === "dark"
      ? "bg-neutral-950 text-white hover:bg-neutral-800"
      : variant === "outline"
      ? "border border-lime-700/30 bg-white text-lime-700 hover:bg-lime-50"
      : "bg-lime-600 text-white shadow-sm hover:bg-lime-700";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

const services = [
  {
    icon: "building",
    image: "/images/fachada-ventilada.jpg",
    title: "Fachada ventilada",
    text: "Sistemas de fachada ventilada para obra nueva, rehabilitación y mejora de edificios."
  },
  {
    icon: "shield",
    image: "/images/sate.jpg",
    title: "SATE",
    text: "Aislamiento térmico exterior para mejorar confort, eficiencia energética e imagen."
  },
  {
    icon: "hammer",
    image: "/images/revestimientos.jpg",
    title: "Revestimientos",
    text: "Acabados exteriores, morteros, aplacados y soluciones adaptadas a cada obra."
  },
  {
    icon: "helmet",
    image: "/images/obra.jpg",
    title: "Ejecución en obra",
    text: "Organización de equipos, seguridad, medios auxiliares y control de plazos."
  }
];

const steps = [
  {
    number: "01",
    title: "Estudio",
    text: "Revisamos ubicación, accesos, mediciones, sistema constructivo y necesidades reales."
  },
  {
    number: "02",
    title: "Propuesta",
    text: "Definimos alcance, partidas, materiales, planificación y condiciones de ejecución."
  },
  {
    number: "03",
    title: "Ejecución",
    text: "Trabajamos con orden, seguimiento, seguridad y comunicación durante toda la obra."
  }
];

const strengths = [
  "Experiencia real en obra",
  "Trato directo y cercano",
  "Planificación clara",
  "Compromiso con el resultado"
];

function runSanityChecks() {
  console.assert(services.length === 4, "Debe haber 4 servicios principales");
  console.assert(steps.length === 3, "Debe haber 3 pasos de trabajo");
  console.assert(CONTACT_EMAIL.includes("@"), "El email debe ser válido");
}

runSanityChecks();

export default function ViviendoBizkaiaHome() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#inicio" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-200 bg-lime-50 text-lime-700">
              <Icon name="building" className="h-6 w-6" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Viviendo Bizkaia</p>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">Fachadas · SATE · Revestimientos</p>
            </div>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a href="#servicios" className="hover:text-lime-700">Servicios</a>
            <a href="#metodo" className="hover:text-lime-700">Método</a>
            <a href="#empresa" className="hover:text-lime-700">Empresa</a>
            <a href="#contacto" className="hover:text-lime-700">Contacto</a>
          </nav>

          <Button href="#contacto" className="hidden md:inline-flex">
            Pedir presupuesto
          </Button>
        </div>
      </header>

      <main id="inicio">
        <section className="bg-gradient-to-br from-white via-slate-50 to-lime-50">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-4xl text-center"
            >
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-2 text-sm font-medium text-lime-700 shadow-sm">
                <Icon name="shield" className="h-4 w-4" />
                Especialistas en envolvente exterior en Bizkaia
              </div>

              <h1 className="text-4xl font-black leading-tight tracking-tight md:text-6xl">
                Rehabilitación de fachadas, SATE y revestimientos en Bizkaia.
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-neutral-600">
                Ejecutamos trabajos exteriores con planificación, seguridad y compromiso real con el resultado final.
              </p>

              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Button href="#contacto">
                  Solicitar presupuesto <Icon name="arrow" className="ml-2 h-5 w-5" />
                </Button>
                <Button href="tel:+34688908926" variant="outline">
                  Llamar al 688 908 926
                </Button>
              </div>
            </motion.div>

            <div className="mt-12 overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-xl">
              <img
                src="/images/fachada-hero.jpg"
                alt="Fachada rehabilitada"
                className="h-[320px] w-full object-cover md:h-[480px]"
                onError={(event) => {
                  event.currentTarget.style.display = "none";
                }}
              />
            </div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="mb-10 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Servicios</p>
            <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
              Soluciones claras para fachadas y envolventes exteriores.
            </h2>
            <p className="mt-4 text-lg leading-8 text-neutral-600">
              Trabajamos para comunidades, constructoras, promotores y direcciones de obra que necesitan una ejecución seria y ordenada.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <article key={service.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <div className="p-6">
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{service.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="metodo" className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">
            <div className="mb-10 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Método</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Orden desde el primer día.
              </h2>
              <p className="mt-4 text-lg leading-8 text-neutral-600">
                Antes de ejecutar, analizamos. Durante la obra, controlamos. Al terminar, buscamos un resultado limpio y profesional.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((step) => (
                <div key={step.number} className="rounded-3xl border border-neutral-200 bg-slate-50 p-7">
                  <p className="text-4xl font-black text-lime-700">{step.number}</p>
                  <h3 className="mt-5 text-2xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="empresa" className="mx-auto max-w-7xl px-6 py-16 md:py-20">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Empresa</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">
                Una empresa pensada para responder en obra.
              </h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Vendemos realidad: analizamos la obra, organizamos los trabajos y damos respuesta práctica a los problemas que aparecen durante la ejecución.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {strengths.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                  <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-lime-700" />
                  <p className="font-semibold text-neutral-800">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-20 md:pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-lime-200 bg-lime-50 shadow-sm">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.85fr] md:p-12">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-700">Contacto</p>
                <h2 className="mt-4 text-3xl font-black tracking-tight md:text-5xl">
                  ¿Tienes una obra o necesitas precio?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
                  Envíanos ubicación, metros aproximados, sistema deseado, planos, fotos o mediciones. Te responderemos con una valoración inicial.
                </p>
                <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                  <Button href="tel:+34688908926" variant="dark">
                    Llamar ahora <Icon name="phone" className="ml-2 h-5 w-5" />
                  </Button>
                  <Button href={`mailto:${CONTACT_EMAIL}`} variant="outline">
                    Enviar email <Icon name="mail" className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm">
                <h3 className="text-2xl font-bold">Viviendo Bizkaia</h3>
                <div className="mt-6 space-y-5 text-neutral-700">
                  <div className="flex gap-3">
                    <Icon name="map" className="h-5 w-5 text-lime-700" />
                    <span>Bizkaia · País Vasco</span>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="phone" className="h-5 w-5 text-lime-700" />
                    <span>{CONTACT_PHONE}</span>
                  </div>
                  <div className="flex gap-3">
                    <Icon name="mail" className="h-5 w-5 text-lime-700" />
                    <span>{CONTACT_EMAIL}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-neutral-200 bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-neutral-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 Viviendo Bizkaia. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-lime-700">Aviso legal</a>
            <a href="#" className="hover:text-lime-700">Privacidad</a>
            <a href="#" className="hover:text-lime-700">Cookies</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
