import { Link, NavLink } from "react-router";

import { MenuIcon, X } from "lucide-react";

import DarkModeToggle from "./DarkModeToggle";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";

import { Button } from "./ui/button";
import { LogoLink } from "./LogoLink";

export default function MobileNav() {
  return (
    <div className="mobile w-[100%] flex justify-between">
      <LogoLink />
      <div className="p-4">
        <Drawer direction="right">
          <DrawerTrigger>
            <MenuIcon className="z-10" />
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerClose className="flex justify-end">
                <X />
              </DrawerClose>
              <ul className="">
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                        Lessons
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="text-left">
                          <li>
                            <NavLink
                              to="/lessons/guitar"
                              className="cursor-pointer hover:text-slate-400"
                            >
                              <DrawerClose className="pb-2 cursor-pointer">
                                Guitar
                              </DrawerClose>
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/lessons/bass"
                              className="cursor-pointer hover:text-slate-400"
                            >
                              <DrawerClose className="pb-2 cursor-pointer">
                                Bass
                              </DrawerClose>
                            </NavLink>
                          </li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                        <NavLink to="/free-stuff">
                          <DrawerClose className="pb-2 cursor-pointer">
                            Free Stuff
                          </DrawerClose>
                        </NavLink>
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                </li>
                <li>
                  <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="cursor-pointer hover:text-slate-400">
                        <NavLink to="/contact">
                          <DrawerClose className="pb-2 cursor-pointer">
                            Contact
                          </DrawerClose>
                        </NavLink>
                      </AccordionTrigger>
                    </AccordionItem>
                  </Accordion>
                </li>
              </ul>
            </DrawerHeader>

            <div className="p-4">
              <DarkModeToggle />
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </div>
  );
}
