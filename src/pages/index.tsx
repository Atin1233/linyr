import { Meta } from '../layout/Meta';
import { CTAFooter } from '../sections/CTAFooter';
import { HeroSection } from '../sections/HeroSection';
import { PortfolioSection } from '../sections/PortfolioSection';
import { ProofSection } from '../sections/ProofSection';
import { ServicesSection } from '../sections/ServicesSection';
import { AppConfig } from '../utils/AppConfig';

const Index = () => (
  <>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <main className="relative">
      <HeroSection />
      <ProofSection />
      <ServicesSection />
      <PortfolioSection />
      <CTAFooter />
    </main>
  </>
);

export default Index;
