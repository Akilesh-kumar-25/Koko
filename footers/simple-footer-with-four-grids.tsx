import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Facebook, Instagram, Twitter, MapPin } from "lucide-react";

export function SimpleFooterWithFourGrids() {
  const menu = [
    {
      title: "Burgers",
      href: "/menu/burgers",
    },
    {
      title: "Crispy Chicken", 
      href: "/menu/chicken",
    },
    {
      title: "Sides",
      href: "/menu/sides",
    },
    {
      title: "Order Online",
      href: "/order",
    },
  ];

  const locations = [
    {
      title: "Find Us",
      href: "/locations",
    },
    {
      title: "Opening Hours",
      href: "/hours",
    },
    {
      title: "Contact Info",
      href: "/contact",
    },
  ];

  const growth = [
    {
      title: "Franchise Opportunities",
      href: "/franchise",
    },
    {
      title: "Investor Relations",
      href: "/investors",
    },
    {
      title: "Press Kit",
      href: "/press",
    },
    {
      title: "Careers",
      href: "/careers",
    },
  ];

  const socials = [
    {
      title: "Facebook",
      href: "#",
      icon: Facebook,
    },
    {
      title: "Instagram",
      href: "#",
      icon: Instagram,
    },
    {
      title: "Twitter",
      href: "#",
      icon: Twitter,
    },
  ];

  return (
    <div className="border-t border-neutral-100 dark:border-white/[0.1] px-8 py-20 bg-white dark:bg-neutral-950 w-
     relative overflow-hidden">
      <div className="max-w-7xl mx-auto text-sm text-neutral-500 flex sm:flex-row flex-col justify-between items-start md:px-8">
        <div>
          <div className="mr-0 md:mr-4 md:flex mb-4">
            <Logo />
          </div>
          <div className="mt-2 ml-2 max-w-xs">
            <p className="text-sm font-medium text-neutral-600 mb-2">Established 2024</p>
            <p className="text-xs text-neutral-500 leading-relaxed">
              Serving quality fast food with fresh ingredients and bold flavors. From juicy burgers to crispy chicken, we deliver taste that satisfies.
            </p>
          </div>
          <div className="mt-4 ml-2">
            &copy; copyright Koko 2024. All rights reserved.
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 items-start mt-10 sm:mt-0 md:mt-0">
          <div className="flex justify-center space-y-4 flex-col w-full">
            <p className="text-neutral-600 dark:text-neutral-300 font-bold">
              Menu
            </p>
            <ul className="text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {menu.map((item, idx) => (
                <li key={"menu" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#FF6B35]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-600 dark:text-neutral-300 font-bold">
              Locations
            </p>
            <ul className="text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {locations.map((location, idx) => (
                <li key={"location" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#FF6B35]"
                    href={location.href}
                  >
                    {location.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-600 dark:text-neutral-300 font-bold">
              Growth
            </p>
            <ul className="text-neutral-600 dark:text-neutral-300 list-none space-y-4">
              {growth.map((item, idx) => (
                <li key={"growth" + idx} className="list-none">
                  <Link
                    className="transition-colors hover:text-[#FF6B35]"
                    href={item.href}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center space-y-4 flex-col">
            <p className="text-neutral-600 dark:text-neutral-300 font-bold">
              Connect
            </p>
            <div className="space-y-4">
              {socials.map((social, idx) => {
                const IconComponent = social.icon;
                return (
                  <Link
                    key={"social" + idx}
                    href={social.href}
                    className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300 transition-colors hover:text-[#FF6B35]"
                  >
                    <IconComponent size={16} />
                    <span>{social.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <p className="text-center mt-20 text-5xl md:text-9xl lg:text-[12rem] xl:text-[13rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 dark:from-neutral-950 to-neutral-200 dark:to-neutral-800 inset-x-0">
        Koko
      </p>
    </div>
  );
}

const Logo = () => {
  return (
    <Link
      href="/"
      className="font-normal flex space-x-2 items-center text-sm mr-4 text-black px-2 py-1 relative z-20"
    >
      <div className="w-8 h-8 bg-[#FF6B35] rounded-full flex items-center justify-center">
        <span className="text-white font-bold text-lg">K</span>
      </div>
      <span className="font-medium text-black dark:text-white">Koko</span>
    </Link>
  );
};