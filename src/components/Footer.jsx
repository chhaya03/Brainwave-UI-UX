import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem] flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col">
        <p className="caption text-[#757185] lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-[#15131D] rounded-full transition-colors hover:bg-[#252134]"
            >
              <img src={item.iconUrl} width={16} height={16} alt={item.title} />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
