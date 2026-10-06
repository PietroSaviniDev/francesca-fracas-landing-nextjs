import { Footer } from "@/components/layout/Footer/Footer";
import { Header } from "@/components/layout/Header/Header";
import { WhatsappFab } from "@/components/layout/WhatsappFab/WhatsappFab";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildStructuredData } from "@/lib/structuredData";
import { About } from "@/sections/About/About";
import { Faq } from "@/sections/Faq/Faq";
import { FinalCta } from "@/sections/FinalCta/FinalCta";
import { FreeConsultation } from "@/sections/FreeConsultation/FreeConsultation";
import { Hero } from "@/sections/Hero/Hero";
import { HowItWorks } from "@/sections/HowItWorks/HowItWorks";
import { OnlineBenefits } from "@/sections/OnlineBenefits/OnlineBenefits";
import { Problems } from "@/sections/Problems/Problems";
import { Services } from "@/sections/Services/Services";

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildStructuredData()} />
      <Header />

      <main>
        <Hero />
        <Problems />
        <About />
        <Services />
        <HowItWorks />
        <FreeConsultation />
        <OnlineBenefits />
        <Faq />
        <FinalCta />
      </main>

      <Footer />
      <WhatsappFab />
    </>
  );
}
