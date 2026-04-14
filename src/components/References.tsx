import { Star, Quote, Building2 } from "lucide-react";

const testimonials = [
  {
    text: "S firmou pana Mužíka jsme nadmíru spokojeni. Už od začátku bylo jeho jednání velice profesionální a zároveň byl maximálně ochotný vyjít všem našim požadavkům vstříc. Na jeho slovo se dalo spolehnout a vždy dodržel termíny, ať už prvotního zaměření, výroby skříně nebo finální realizace včetně celkové ceny.",
    author: "Tomáš Pavlíček",
    location: "Praha",
  },
  {
    text: "S realizací jsme velice spokojeni. Komunikace s dodavatelem byla bez problémů. Pánové pracovali rychle a efektivně a výsledek stojí za to. Skříně i botník jsou kvalitní, plně vyhovují našim potřebám a vypadají moc hezky. Plánujeme si nechat od dodavatele vyrobit i další nábytek.",
    author: "Lea Zámečníková",
    location: "Praha",
  },
  {
    text: "Perfektní práce, když budu potřebovat něco dalšího, vím na kterou firmu se obrátit.",
    author: "Michaela Bařinková",
    location: "Praha",
  },
];

const corporateClients = [
  "MAKRO Cash & Carry ČR",
  "Ford Charouz",
  "UniControls a.s.",
  "Metrostav, a.s.",
  "RE/MAX Czech Republic",
  "Coty ČR",
  "RESERVED - LPP Retail",
  "Česká pojišťovna ZDRAVÍ",
  "Český hydrometeorologický ústav",
  "Úřad pro civilní letectví",
  "Akademie věd ČR",
  "ČVUT Praha",
  "Schlumberger",
  "Českobrodská nemocnice",
];

const References = () => {
  return (
    <section id="reference" className="py-24 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground text-center mb-4">
          Reference
        </h2>
        <p className="text-muted-foreground text-center mb-16 max-w-2xl mx-auto font-body">
          Co o nás říkají naši zákazníci
        </p>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-card rounded-lg p-8 shadow-sm border border-border relative animate-fade-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-muted-foreground font-body text-sm leading-relaxed mb-6">
                "{t.text}"
              </p>
              <div className="border-t border-border pt-4">
                <p className="font-display font-semibold text-foreground">{t.author}</p>
                <p className="text-muted-foreground text-sm font-body">{t.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Corporate clients */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            <Building2 className="w-5 h-5 text-primary" />
            <h3 className="font-display text-xl font-semibold text-foreground">
              Významní firemní odběratelé
            </h3>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {corporateClients.map((client) => (
              <span
                key={client}
                className="bg-card border border-border text-muted-foreground font-body text-sm px-4 py-2 rounded-sm"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default References;
