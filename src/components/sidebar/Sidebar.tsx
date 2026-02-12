import { NavLink } from "react-router-dom";
import {
  Home,
  BookOpen,
  Sword,
  BookMarked,
  Palette,
  Compass,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const sections = [
  {
    title: null,
    items: [{ label: "Início", to: "/", icon: Home }],
  },
  {
    title: "Projetos",
    items: [{ label: "Traduções (VNs)", to: "/traducoes", icon: BookOpen }],
  },
  {
    title: "Banco de Dados",
    items: [
      { label: "Servos", to: "/servos", icon: Sword },
      { label: "Glossário de Lore", to: "/glossario", icon: BookMarked },
      { label: "Artbooks e Materiais", to: "/materiais", icon: Palette },
    ],
  },
  {
    title: "Comunidade",
    items: [{ label: "Recursos e Guias", to: "/recursos", icon: Compass }],
  },
];

export function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  /* ===================== DESKTOP ===================== */
  const DesktopSidebar = (
    <aside
      className={cn(
        "hidden md:flex h-screen flex-col border-r transition-all duration-300",
        "bg-[#1f1a17] border-[#4a4038]",
        collapsed ? "w-[88px]" : "w-72"
      )}
    >
      {/* Header */}
      <div className="px-4 py-6 flex items-center gap-3">
        <a 
          href="https://www.youtube.com/@FateCafé" 
          target="_blank" 
          rel="noopener noreferrer"
          className="transition-transform hover:scale-110 active:scale-95"
        >
          <img
            src={logo}
            alt="Fate Café"
            className={cn(
              "rounded-full transition-all",
              collapsed ? "h-10 w-10 mx-auto" : "h-12 w-12"
            )}
          />
        </a>

        {!collapsed && (
          <div>
            <h1 className="text-lg font-bold text-[#f5efe6]">
              Fate Café
            </h1>
            <p className="text-xs text-[#b8a99a]">Type-Moon BR</p>
          </div>
        )}
      </div>

      <div className="mx-4 mb-4 border-b border-[#4a4038]" />

      {/* Navigation */}
      <nav className="flex-1 space-y-6 px-3 overflow-y-auto">
        {sections.map((section, i) => (
          <div key={i}>
            {section.title && !collapsed && (
              <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-[#b8a99a]">
                {section.title}
              </h3>
            )}

            <div className="space-y-1">
              {section.items.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-3 transition",
                      isActive
                        ? "bg-[#3a312a] text-[#f5efe6]"
                        : "text-[#cbbba7] hover:bg-[#2a231f]",
                      collapsed && "justify-center"
                    )
                  }
                >
                  <item.icon className="h-5 w-5 shrink-0" />
                  {!collapsed && (
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  )}
                </NavLink>
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* Footer / Collapse button */}
      <div className="border-t border-[#4a4038] p-3">
        <button
          onClick={() => setCollapsed(!collapsed)}
          className={cn(
            "flex w-full items-center justify-center gap-2 rounded-md px-3 py-2",
            "text-[#d6b48c] hover:bg-[#2a231f] transition"
          )}
        >
          {collapsed ? (
            <ChevronRight size={18} />
          ) : (
            <>
              <ChevronLeft size={18} />
              <span className="text-sm">Recolher</span>
            </>
          )}
        </button>
      </div>
    </aside>
  );

  /* ===================== MOBILE ===================== */
  const MobileSidebar = (
    <>
      {/* Hamburger */}
      <button
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 rounded-md bg-[#1f1a17] p-2 text-[#d6b48c] md:hidden"
      >
        <Menu size={22} />
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
        />
      )}

      {/* Drawer */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-72 transform transition-transform duration-300 md:hidden",
          "bg-[#1f1a17] border-r border-[#4a4038]",
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex items-center justify-between px-4 py-6">
          <div className="flex items-center gap-3">
            <a 
              href="https://www.youtube.com/@FateCafé" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <img
                src={logo}
                alt="Fate Café"
                className="h-12 w-12 rounded-full"
              />
            </a>
            <div>
              <h1 className="text-lg font-bold text-[#f5efe6]">
                Fate Café
              </h1>
              <p className="text-xs text-[#b8a99a]">Type-Moon BR</p>
            </div>
          </div>

          <button onClick={() => setMobileOpen(false)}>
            <X className="text-[#d6b48c]" size={22} />
          </button>
        </div>

        <nav className="space-y-6 px-3">
          {sections.map((section, i) => (
            <div key={i}>
              {section.title && (
                <h3 className="mb-2 px-3 text-xs font-semibold uppercase text-[#b8a99a]">
                  {section.title}
                </h3>
              )}

              <div className="space-y-1">
                {section.items.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    onClick={() => setMobileOpen(false)}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center gap-3 rounded-lg px-3 py-3 transition",
                        isActive
                          ? "bg-[#3a312a] text-[#f5efe6]"
                          : "text-[#cbbba7] hover:bg-[#2a231f]"
                      )
                    }
                  >
                    <item.icon className="h-5 w-5" />
                    <span className="text-sm font-medium">
                      {item.label}
                    </span>
                  </NavLink>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );

  return (
    <>
      {DesktopSidebar}
      {MobileSidebar}
    </>
  );
}