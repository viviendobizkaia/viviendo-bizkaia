import React from "react";
import { motion } from "framer-motion";

const CONTACT_EMAIL = "info@viviendobizkaia.com";
const CONTACT_PHONE = "688 908 926";

function Icon({ name, className = "h-6 w-6" }) {
  const props = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    arrow: (
      <svg {...props}>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </svg>
    ),
    building: (
      <svg {...props}>
        <path d="M4 21V7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v14" />
        <path d="M16 10h2a2 2 0 0 1 2 2v9" />
        <path d="M8 9h4" />
        <path d="M8 13h4" />
        <path d="M8 17h4" />
        <path d="M3 21h18" />
      </svg>
    ),
    shield: (
      <svg {...props}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    hammer: (
      <svg {...props}>
        <path d="m15 12-8.5 8.5a2.12 2.12 0 0 1-3-3L12 9" />
        <path d="m17.64 15 3.12-3.12a2.5 2.5 0 0 0 0-3.54l-5.1-5.1a2.5 2.5 0 0 0-3.54 0L9 6.36" />
        <path d="m14 7 3 3" />
      </svg>
    ),
    helmet: (
      <svg {...props}>
        <path d="M3 18h18" />
        <path d="M5 18v-5a7 7 0 0 1 14 0v5" />
        <path d="M9 18v-7" />
        <path d="M15 18v-7" />
      </svg>
    ),
    phone: (
      <svg {...props}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8 9.72a16 16 0 0 0 6.28 6.28l1.28-1.28a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92Z" />
      </svg>
    ),
    mail: (
      <svg {...props}>
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
    map: (
      <svg {...props}>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    check: (
      <svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="m9 12 2 2 4-5" />
      </svg>
    ),
    clock: (
      <svg {...props}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    users: (
      <svg {...props}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    ruler: (
      <svg {...props}>
        <path d="M4 19 19 4" />
        <path d="m7 16 2 2" />
        <path d="m10 13 2 2" />
        <path d="m13 10 2 2" />
        <path d="m16 7 2 2" />
      </svg>
    ),
  };

  return icons[name] || icons.check;
}

function Button({ children, href = "#contacto", variant = "primary", className = "" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-7 py-4 text-base font-bold transition";
  const styles =
    variant === "dark"
      ? "bg-neutral-950 text-white hover:bg-neutral-800"
      : variant === "outline"
      ? "border border-lime-600/40 bg-white text-lime-700 hover:bg-lime-50"
      : "bg-lime-600 text-white shadow-sm hover:bg-lime-700";

  return (
    <a href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}

const services = [
  {
    icon: "building",
    image: "/images/fachada-ventilada.jpg",
    title: "Fachada ventilada",
    text: "Instalación de sistemas de fachada ventilada para obra nueva, rehabilitación y mejora energética de edificios.",
  },
  {
    icon: "shield",
    image: "/images/sate.jpg",
    title: "SATE",
    text: "Aislamiento térmico exterior para mejorar el confort, reducir consumo energético y renovar la imagen del inmueble.",
  },
  {
    icon: "hammer",
    image: "/images/revestimientos.jpg",
    title: "Revestimientos y acabados",
    text: "Trabajos de revestimiento exterior, morteros, aplacados y soluciones adaptadas a cada edificio.",
  },
  {
    icon: "helmet",
    image: "/images/obra.jpg",
    title: "Ejecución en obra",
    text: "Equipos preparados para trabajar con orden, seguridad, planificación y cumplimiento de plazos.",
  },
];

const reasons = [
  "Experiencia real en obra",
  "Trabajos para constructoras, comunidades y promotores",
  "Control de plazos, mediciones y calidad",
  "Equipo técnico y operativo cercano",
  "Soluciones adaptadas al presupuesto",
  "Compromiso con la seguridad laboral",
];

const steps = [
  {
    number: "01",
    title: "Estudiamos la obra",
    text: "Revisamos planos, mediciones, sistema constructivo, accesos, medios auxiliares y necesidades reales.",
  },
  {
    number: "02",
    title: "Preparamos propuesta",
    text: "Definimos alcance, partidas, materiales, condiciones de ejecución y planificación aproximada.",
  },
  {
    number: "03",
    title: "Ejecutamos con control",
    text: "Organizamos equipo, seguridad, suministro, avances de obra y comunicación con cliente o dirección facultativa.",
  },
];

function runSanityChecks() {
  console.assert(services.length === 4, "Debe haber 4 servicios principales");
  console.assert(steps.length === 3, "Debe haber 3 pasos de método de trabajo");
  console.assert(CONTACT_EMAIL.includes("@"), "El email debe ser válido");
}

runSanityChecks();

export default function ViviendoBizkaiaHome() {
  return (
    <div className="min-h-screen bg-slate-50 text-neutral-950">
      <header className="sticky top-0 z-50 border-b border-neutral-200 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-lime-200 bg-lime-50 text-lime-700">
              <Icon name="building" />
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">Viviendo Bizkaia</p>
              <p className="text-xs uppercase tracking-[0.22em] text-neutral-500">
                Fachadas · SATE · Revestimientos
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-8 text-sm font-medium text-neutral-600 md:flex">
            <a href="#servicios" className="hover:text-lime-700">Servicios</a>
            <a href="#metodo" className="hover:text-lime-700">Método</a>
            <a href="#empresa" className="hover:text-lime-700">Empresa</a>
            <a href="#contacto" className="hover:text-lime-700">Contacto</a>
          </nav>

          <Button href="#contacto" className="hidden px-5 py-3 md:inline-flex">
            Pedir presupuesto
          </Button>
        </div>
      </header>

      <main>
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-slate-50 to-lime-50">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(101,163,13,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(15,23,42,0.08),transparent_28%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-[1.05fr_0.95fr] md:py-28">
            <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-lime-200 bg-white px-4 py-2 text-sm font-medium text-lime-700 shadow-sm">
                <Icon name="shield" className="h-4 w-4" />
                Especialistas en envolvente exterior en Bizkaia
              </div>

              <h1 className="max-w-4xl text-5xl font-black leading-tight tracking-tight md:text-7xl">
                Fachadas bien ejecutadas, obras mejor controladas.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600 md:text-xl">
                En Viviendo Bizkaia ejecutamos fachadas ventiladas, SATE y revestimientos exteriores con planificación, seguridad y compromiso real con el resultado final.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <Button href="#contacto">
                  Solicitar presupuesto <Icon name="arrow" className="ml-2 h-5 w-5" />
                </Button>
                <Button href="#servicios" variant="outline">
                  Ver servicios
                </Button>
              </div>

              <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black">500 m²</p>
                  <p className="mt-1 text-xs text-neutral-500">Obras tipo fachada</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black">3 áreas</p>
                  <p className="mt-1 text-xs text-neutral-500">Fachada, SATE y revestimiento</p>
                </div>
                <div className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                  <p className="text-2xl font-black">Bizkaia</p>
                  <p className="mt-1 text-xs text-neutral-500">Ámbito principal</p>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.7, delay: 0.1 }} className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-lime-200/60 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-neutral-200 bg-white shadow-2xl">
                <div className="relative h-72 md:h-[440px]">
                  <img
                    src="/images/fachada-hero.jpg"
                    alt="Fachada terminada"
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/35 via-transparent to-transparent" />
                  <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-5 py-4 shadow-lg backdrop-blur">
                    <p className="text-sm font-bold uppercase tracking-[0.18em] text-lime-700">Obra terminada</p>
                    <p className="mt-1 text-lg font-black">Fachadas, SATE y revestimientos</p>
                  </div>
                </div>
                <div className="border-t border-neutral-200 bg-white p-6">
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.22em] text-lime-700">Control de obra</p>
                      <h2 className="mt-2 text-2xl font-bold">Medición, planificación y ejecución</h2>
                    </div>
                    <Icon name="ruler" className="h-8 w-8 text-lime-700" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section id="servicios" className="mx-auto max-w-7xl px-6 py-20">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Servicios</p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Soluciones para fachadas y envolventes exteriores
            </h2>
            <p className="mt-5 text-lg leading-8 text-neutral-600">
              Trabajamos con constructoras, comunidades, promotores y direcciones de obra que necesitan una ejecución clara, ordenada y profesional.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Card key={service.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                <div className="h-44 bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                </div>
                <div className="p-6">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-100 text-lime-700">
                    <Icon name={service.icon} />
                  </div>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                  <p className="mt-3 leading-7 text-neutral-600">{service.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="metodo" className="border-y border-neutral-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20">
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Método de trabajo</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight">Menos improvisación. Más control.</h2>
                <p className="mt-5 text-lg leading-8 text-neutral-600">
                  Cada obra necesita claridad desde el principio: alcance, medios, plazos, materiales, seguridad y comunicación.
                </p>
              </div>

              <div className="grid gap-5">
                {steps.map((step) => (
                  <div key={step.number} className="rounded-3xl border border-neutral-200 bg-slate-50 p-6">
                    <div className="flex flex-col gap-4 md:flex-row md:items-start">
                      <p className="text-4xl font-black text-lime-700">{step.number}</p>
                      <div>
                        <h3 className="text-2xl font-bold">{step.title}</h3>
                        <p className="mt-2 leading-7 text-neutral-600">{step.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="empresa" className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Por qué Viviendo Bizkaia</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Una empresa pensada para responder en obra.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Vendemos realidad: analizamos la obra, organizamos los trabajos y damos respuesta práctica a los problemas reales que aparecen durante la ejecución.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {reasons.map((reason) => (
                  <div key={reason} className="flex items-start gap-3">
                    <Icon name="check" className="mt-1 h-5 w-5 shrink-0 text-lime-700" />
                    <span className="text-neutral-700">{reason}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <Card className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <Icon name="clock" className="h-9 w-9 text-lime-700" />
                <h3 className="mt-5 text-2xl font-bold">Plazos claros</h3>
                <p className="mt-3 leading-7 text-neutral-600">Planificación realista para evitar paradas, retrasos y costes ocultos.</p>
              </Card>
              <Card className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm">
                <Icon name="users" className="h-9 w-9 text-lime-700" />
                <h3 className="mt-5 text-2xl font-bold">Equipo cercano</h3>
                <p className="mt-3 leading-7 text-neutral-600">Comunicación directa con responsables técnicos y de obra.</p>
              </Card>
              <Card className="rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm sm:col-span-2">
                <Icon name="helmet" className="h-9 w-9 text-lime-700" />
                <h3 className="mt-5 text-2xl font-bold">Seguridad y documentación</h3>
                <p className="mt-3 leading-7 text-neutral-600">Coordinación preventiva, documentación de acceso a obra y cumplimiento de requisitos de construcción.</p>
              </Card>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 pb-20">
          <div className="rounded-[2rem] border border-neutral-200 bg-white p-8 shadow-sm md:p-10">
            <div className="mb-8 max-w-3xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-lime-700">Trabajos</p>
              <h2 className="mt-4 text-4xl font-black tracking-tight">Rehabilitación, aislamiento y acabado exterior.</h2>
              <p className="mt-5 text-lg leading-8 text-neutral-600">
                Una imagen sencilla, limpia y profesional para explicar lo que hacemos: mejorar edificios por fuera, con orden, técnica y buena ejecución.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-3">
              {services.slice(0, 3).map((item) => (
                <div key={item.title} className="overflow-hidden rounded-3xl border border-neutral-200 bg-slate-50">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-56 w-full object-cover"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="mt-2 text-neutral-600">Acabado exterior limpio, técnico y profesional.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contacto" className="mx-auto max-w-7xl px-6 pb-24">
          <div className="overflow-hidden rounded-[2rem] border border-lime-200 bg-lime-50 shadow-sm">
            <div className="grid gap-8 p-8 md:grid-cols-[1fr_0.8fr] md:p-12">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-lime-700">Contacto</p>
                <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                  ¿Tienes una obra o necesitas precio?
                </h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-neutral-700">
                  Envíanos la información disponible: ubicación, metros aproximados, sistema deseado, planos, fotos o mediciones. Te responderemos con una valoración inicial.
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
                <div className="mt-8 rounded-2xl border border-neutral-200 bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-neutral-600">
                    Datos de contacto preparados para solicitar presupuesto o enviar documentación de obra.
                  </p>
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
