import wardrobeImg from "@/assets/wardrobe.jpg";
import officeImg from "@/assets/office.jpg";
import bathroomImg from "@/assets/bathroom.jpg";

const services = [
  {
    title: "Kuchyně",
    description: "Kuchyňské linky a ostrůvky přesně podle vašich představ a rozměrů místnosti.",
    image: null,
  },
  {
    title: "Skříně & šatny",
    description: "Vestavěné skříně, šatní systémy a skříně s posuvnými dveřmi do každého prostoru.",
    image: wardrobeImg,
  },
  {
    title: "Kancelář",
    description: "Pracovní stoly, regály a kompletní vybavení kanceláří na míru.",
    image: officeImg,
  },
  {
    title: "Koupelny",
    description: "Koupelnový nábytek odolný vlhkosti, navržený přesně pro váš prostor.",
    image: bathroomImg,
  },
];

const Services = () => {
  return (
    <section id="sluzby" className="section-padding bg-card">
      <div className="max-w-6xl mx-auto">
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-3">Co vyrábíme</p>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">
          Nábytek pro celý domov
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div key={i} className="group">
              {service.image && (
                <div className="overflow-hidden rounded-sm mb-5">
                  <img
                    src={service.image}
                    alt={service.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              )}
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground font-body leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-border pt-10">
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl">
            Dále vyrábíme: nábytek do ložnice, dětského pokoje, schody, dveře a další truhlářské výrobky.
            <span className="text-foreground font-medium"> Náš architekt pro vás zdarma připraví návrh interiéru.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
