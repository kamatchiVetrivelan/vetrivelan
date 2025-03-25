"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Navbar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const pathname = usePathname();

  const toggleNavbar = () => {
    setOpenNavbar((openNavbar) => !openNavbar);
  };

  const closeNavbar = () => {
    setOpenNavbar(false);
  };

  const navLinks = [
    { href: "/tourpackages", label: "Tour Packages" },
    { href: "/services", label: "Services" },
    { href: "/tariff", label: "Tariff" },
    { href: "/about", label: "About" },
  ];

  return (
    <header className="fixed text-white top-0 left-0 right-0 h-24 flex items-center bg-black z-50 w-full shadow-sm">
      <div className="mx-auto lg:max-w-7xl w-full px-8 md:px-12 lg:px-12 h-full">
        <nav className="flex justify-between items-center h-full">
          {/* Logo on the left */}
          <div>
            {" "}
            <div className="">
              <Logo />
            </div>
          </div>

          {/* Desktop navigation - everything on the right */}
          <div className="hidden lg:flex lg:items-center lg:justify-end lg:flex-1">
            <ul className="flex items-center space-x-8 mr-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "transition ease-linear hover:text-primary text-base font-medium",
                      pathname === link.href && "text-primary font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#">
              <Button
                className="text-white bg-primary hover:opacity-90"
                aria-label="Contact us"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile navigation */}
          <div
            className={cn(
              "flex flex-col space-y-10 inset-0 fixed top-0 h-[100dvh] bg-black dark:bg-gray-950 lg:hidden py-20 px-4 md:px-8 2xl:px-16",
              "transition-all ease-linear duration-300",
              openNavbar
                ? "visible opacity-100 translate-y-0"
                : "-translate-y-9 opacity-0 invisible"
            )}
          >
            <ul className="flex flex-col gap-y-5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={closeNavbar}
                    className={cn(
                      "transition ease-linear hover:text-primary",
                      pathname === link.href && "text-primary font-semibold"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="#" onClick={closeNavbar}>
              <Button
                className="text-white bg-primary hover:opacity-90"
                aria-label="Contact us"
              >
                Contact Us
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center justify-end lg:hidden">
            <button
              onClick={toggleNavbar}
              className="p-3 rounded-full outline-none w-12 aspect-square flex flex-col relative justify-center items-center"
            >
              <span className="sr-only">toggle navbar</span>
              <span
                className={cn(
                  "w-6 h-0.5 rounded-full bg-white transition-transform duration-300 ease-linear",
                  openNavbar ? "translate-y-1.5 rotate-[40deg]" : ""
                )}
              />
              <span
                className={cn(
                  "w-6 origin-center mt-1 h-0.5 rounded-full bg-white transition-all duration-300 ease-linear",
                  openNavbar ? "scale-x-0 opacity-0" : ""
                )}
              />
              <span
                className={cn(
                  "w-6 mt-1 h-0.5 rounded-full bg-white transition-all duration-300 ease-linear",
                  openNavbar ? "-translate-y-1.5 -rotate-[40deg]" : ""
                )}
              />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
