import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-proint.png";

const links = [
  { label: "Služby", href: "#sluzby" },
  { label: "Proč my", href: "#proc-my" },
  { label: "Reference", href: "#reference" },
  { label: "Kontakt", href: "#kontakt" },
];

const contacts = [
  { name: "Ondřej", phone: "+420728935142", label: "728 935 142" },
  { name: "Stanislav", phone: "+420602203739", label: "602 203 739" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2.5">
          <img src={logo} alt="Pro-Int logo" width={28} height={28} />
          <span className="font-display text-xl font-bold text-primary-foreground tracking-tight">Pro-Int</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-primary-foreground/70 hover:text-primary-foreground font-body text-sm tracking-wide transition-colors"
            >
              {l.label}
            </a>
          ))}
          <div className="flex flex-col items-end text-right">
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:${contact.phone}`}
                className="font-body text-sm font-semibold text-primary-foreground hover:text-primary transition-colors"
              >
                {contact.name}: {contact.label}
              </a>
            ))}
          </div>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary-foreground"
          aria-label="Menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-foreground/95 backdrop-blur-md px-6 pb-6 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block text-primary-foreground/80 font-body text-lg py-2"
            >
              {l.label}
            </a>
          ))}
          <div className="space-y-3 pt-2">
            {contacts.map((contact) => (
              <a
                key={contact.phone}
                href={`tel:${contact.phone}`}
                className="block bg-primary text-primary-foreground px-5 py-3 rounded-sm font-body text-center font-semibold"
              >
                {contact.name}: {contact.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
