
import { useMemo, useState } from "react";

const AMENITIZ = `
o-miracolo-napoli/it maritza-house/it les-buis-de-fontjuliane/fr living-palazzi-storici/it vv2/en
mizzica-rooms/it les-logis-du-canal/fr riad-casa-dolce/fr el-patron-casa-de-huespedes/es
apartamentos-la-machacona/es totonno-s-rooms/it hotel-chez-jacqueline/fr
o-g-s-organizzazione-gestione-servizi-srl/it oriflamme-travertin/fr au-bois-dormant/fr
hotel-arenas-rios/es rentalaya/es palacio-mambrilla/es feel-sintra/pt maison-tizi/it
la-palma-rentals/es agapestay/pt roma-imperial-suites/it aloha-calpe/es le-chateau-des-saveurs/fr
villa-la-conchiglia/it 7-dreams-mala-y-la-casa-de-la-alameda/es costabella-guest-house/it
lescapade-lemans/fr marisalinapontieri-gmail-com/it country-domos/it les-3-marches/fr
vatican-nice-holiday-luxury-rooms/it relais-palazzo-cacace/it les-oiseaux-de-passage-2/fr
maison-riviera/it estudios-sanchis/es finca-el-arroyo-1/es luanhouse/en
il-giardinetto-di-elelu-bed-coffee/it hotel-balcon-de-los-montes/es a-casa-di-imma/it
finca-villanueva/es la-villa-cassinne/fr bellduomo-suite-messina/it le-bon-sejour/fr
les-jardins-de-baracane-avignon/fr art-lodge-kafe/fr riad-arkane/fr maisonduhautsalat/fr
gate-10/it gare-godillot/fr casacallista/fr la-joya/fr domaine-de-chalus-chabrol/fr
b-b-le-biciclette/it mae-maria-house-guest-house/pt residence-marina-di-bravone/fr
mallorcarooms-paguera/es apartamentos-playa-sol/es villa-1/it rustikalpuente/es
ca-rosetta-venezia/it corte-baruzzo-relais/it le-palmier/fr fabrica-de-atardeceres/es happydko/fr
neapolis-tecnotourist/it le-moulin-de-lassalle/fr le-mas-de-rigoulac/fr
hotel-rural-cor-de-prades-1/es le-petit-havre-de-joy/fr domaine-alga/fr palazzo-garibaldi/it
royal-house-fiumicino/it misani-apartments/it hotel-can-carbo-de-les-olives/es
refugios-do-alvao/pt auberge-du-pont-de-l-alpe/fr casa-rural-finca-el-olivar/es ovh/es
hostal-pension-sant-ramon/es chalets-cocody/fr hotel-et-restaurant-la-route-d-argent/fr
casa-rural-a-boucina/es rusctlea/it villa-principezinho/pt kaz-kafe/fr
hotel-ristorante-domu-incantada/it hotel-restaurante-casa-manolo/es granges-de-nathalie/fr
quinta-de-anterronde/pt pignasecca-domus/it agriturismo-villa-mocenigo/- hotel-villa-bandama-golf/es
h-skyline/es darija-ritter/it villas-del-mar-vina-y-cabrera/es i-tre-scalini/it
therma-pilgrim-hostel/es hotel-la-ventana-ibiza/es lugar-a-maneira/pt lake-orta-holiday-rental/it
harmonia-partenopea-b-b/it les-cabanes-du-nideck/fr gira-e-firria-rooms/it l-eperon-mouchete/fr
hotel-des-deux-rocs/fr villa-bianca-2/fr a-lubre/es sa-bassa-crua-agroturismo/es
herdade-da-cova-da-onca/pt loft-in-villa/it
`.trim().split(/\s+/);

const CUSTOM = [
  ["https://www.lechaletdescimes.fr/fr", "fr"],
  ["https://www.hotel-lion-sur-mer.fr/", "fr"],
  ["http://www.charcodelpaloapartments.com/", "other"],
  ["https://apartamentoslivingsur.com/", "es"],
  ["https://lesgrangesdejuvardeil.com", "fr"],
  ["https://alojamientosbahiadesantona.com/", "es"],
  ["http://www.hostalcostaibiza.com/", "es"],
];

const titleCase = (value) =>
  value
    .split("-")
    .filter(Boolean)
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

const getSiteName = (host) => {
  const name = host
    .replace(/^www\./, "")
    .replace(/\.[^.]+$/, "");

  return titleCase(name);
};

const SITES = [
  ...AMENITIZ.map((entry) => {
    const [slug, lang] = entry.split("/");
    const host = `${slug}.amenitiz.io`;

    return {
      name: titleCase(slug),
      host,
      url:
        lang === "-"
          ? `https://${host}`
          : `https://${host}/${lang}`,
      lang: lang === "-" ? "other" : lang,
      country:
        lang === "it"
          ? "italy"
          : lang === "fr"
            ? "france"
            : lang === "es"
              ? "spain"
              : lang === "pt"
                ? "portugal"
                : lang === "en"
                  ? "english"
                  : "other",
    };
  }),

  ...CUSTOM.map(([url, lang]) => {
    const host = new URL(url).hostname.replace(/^www\./, "");

    return {
      name: getSiteName(host),
      host,
      url,
      lang,
      country:
        lang === "fr"
          ? "france"
          : lang === "es"
            ? "spain"
            : "other",
    };
  }),
];

const LANGS = {
  all: "All",
  it: "Italiano",
  fr: "Français",
  es: "Español",
  pt: "Português",
  en: "English",
  other: "Other",
};

const PAGE = 24;

const PLACEHOLDERS = {
  italy: "/placeholder1.webp",
  france: "/placeholder2.webp",
  spain: "/placeholder3.webp",
  portugal: "/placeholder4.webp",
  english: "/placeholder5.webp",
  other: "/placeholder6.webp",
};

function SiteCard({ site }) {
  const [imageFailed, setImageFailed] = useState(false);

  const image = PLACEHOLDERS[site.country] || PLACEHOLDERS.other;

  return (
    <a
      href={site.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#12303A]"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-white ring-1 ring-[#12303A]/10">
        {!imageFailed ? (
          <img
            src={image}
            alt={`Website design showcase: ${site.name}`}
            loading="lazy"
            onError={() => setImageFailed(true)}
            className="h-full w-full object-cover object-top"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#EAF0EE] px-4 text-center font-display text-2xl font-semibold text-[#12303A]/60">
            {site.name}
          </div>
        )}

        <span className="absolute left-2 top-2 rounded-sm bg-[#12303A] px-2 py-1 text-xs font-medium text-white">
          {site.lang === "other" ? "OTHER" : site.lang.toUpperCase()}
        </span>
      </div>

      <div className="mt-3">
        <h3 className="truncate font-display text-lg font-semibold leading-snug text-[#12303A] group-hover:underline decoration-gray-800 decoration-2 underline-offset-4">
          {site.name}
        </h3>

        <p className="truncate text-sm text-[#12303A]/60">
          {site.host}
        </p>
      </div>
    </a>
  );
}

export default function ShowcaseSection() {
  const [query, setQuery] = useState("");
  const [lang, setLang] = useState("all");
  const [visible, setVisible] = useState(PAGE);

  const counts = useMemo(() => {
    const result = { all: SITES.length };

    SITES.forEach((site) => {
      result[site.lang] = (result[site.lang] || 0) + 1;
    });

    return result;
  }, []);

  const results = useMemo(() => {
    const search = query.trim().toLowerCase();

    return SITES.filter((site) => {
      const matchesLang = lang === "all" || site.lang === lang;
      const matchesSearch =
        !search ||
        `${site.name} ${site.host}`.toLowerCase().includes(search);

      return matchesLang && matchesSearch;
    });
  }, [query, lang]);

  const updateFilter = (callback, value) => {
    callback(value);
    setVisible(PAGE);
  };

  return (

    <section className="overflow-hidden px-5 pt-16 pb-0 font-body text-[#12303A] sm:px-8 sm:pb-0 lg:pt-24 px lg:pb-0">

      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="font-display text-5xl font-bold leading-[1.02] tracking-tight sm:text-7xl">
            Website Design
            <br />
            Showcase.
          </h2>

          <p className="max-w-md text-base leading-relaxed text-[#12303A]/70">
            A collection of websites I have contributed to through
            design. Each website belongs to its respective owner.
          </p>
        </div>

        <div className="mt-6 border-l-2 border-gray-800 pl-4 text-sm leading-relaxed text-[#12303A]/70">
          <strong className="text-[#12303A]">Disclaimer:</strong>{" "}
          My contribution is limited to website design. I do not own
          the websites, businesses, content, or trademarks displayed
          here. All rights belong to their respective owners.
        </div>

        <div className="mt-10 flex flex-col gap-4 border-y border-[#12303A]/15 py-4 md:flex-row md:items-center md:justify-between">
          <div
            role="group"
            aria-label="Filter by language"
            className="flex flex-wrap gap-2"
          >
            {Object.entries(LANGS).map(([key, label]) =>
              counts[key] ? (
                <button
                  key={key}
                  type="button"
                  aria-pressed={lang === key}
                  onClick={() => updateFilter(setLang, key)}
                  className={`rounded-full px-3.5 py-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12303A] ${lang === key
                      ? "bg-[#12303A] text-white"
                      : "text-[#12303A] ring-1 ring-inset ring-[#12303A]/25 hover:bg-[#12303A]/5"
                    }`}
                >
                  {label}{" "}
                  <span className="opacity-60">{counts[key]}</span>
                </button>
              ) : null
            )}
          </div>

          <label className="block md:w-72">
            <span className="sr-only">Search websites</span>
            <input
              type="search"
              value={query}
              onChange={(event) =>
                updateFilter(setQuery, event.target.value)
              }
              placeholder="Search by name or domain"
              className="w-full rounded-md bg-white/70 px-3.5 py-2 text-sm placeholder:text-[#12303A]/45 ring-1 ring-inset ring-[#12303A]/20 focus:outline-none focus:ring-2 focus:ring-[#12303A]"
            />
          </label>
        </div>

        {results.length > 0 ? (
          <>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {results.slice(0, visible).map((site) => (
                <SiteCard key={site.url} site={site} />
              ))}
            </div>

            <div className="mt-12 flex flex-col items-center gap-3">
              <p className="text-sm text-[#12303A]/60">
                Showing {Math.min(visible, results.length)} of{" "}
                {results.length} websites
              </p>

              {visible < results.length && (
                <button
                  type="button"
                  onClick={() => setVisible((value) => value + PAGE)}
                  className="rounded-md bg-[#12303A] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#1b4452] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#12303A]"
                >
                  Show More
                </button>
              )}
            </div>
          </>
        ) : (
          <div className="mt-16 text-center">
            <p className="font-display text-2xl font-semibold">
              No websites found.
            </p>

            <button
              type="button"
              onClick={() => {
                setQuery("");
                setLang("all");
                setVisible(PAGE);
              }}
              className="mt-3 text-sm font-medium underline underline-offset-4"
            >
              Clear search and filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
