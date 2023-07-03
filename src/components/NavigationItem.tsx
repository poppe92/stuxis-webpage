"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export type NavigationItemProps = {
  link: string;
  text: string;
};

function NavigationItem({ link, text }: NavigationItemProps) {
  const linkStyle = "p-4 text-4xl sm:text-xl ";
  const activeStyle =
    linkStyle + "underline decoration-4 decoration-light-comfy-red font-bold";
  const nonActiveStyle =
    linkStyle +
    "hover:underline hover:decoration-3 hover:text-light-comfy-red ";

  const currentRoute = usePathname();

  return (
    <li className={currentRoute === link ? activeStyle : nonActiveStyle}>
      <Link href={link}>{text}</Link>
    </li>
  );
}

export default NavigationItem;
