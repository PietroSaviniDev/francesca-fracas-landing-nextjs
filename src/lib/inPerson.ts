import { siteConfig } from "@/config/site";

/** "a Bruxelles" se la città è impostata, altrimenti "in Belgio". */
export const inPersonPlace = siteConfig.inPerson.city
  ? `a ${siteConfig.inPerson.city}`
  : `in ${siteConfig.inPerson.country}`;
