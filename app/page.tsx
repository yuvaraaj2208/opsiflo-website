import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Services from '@/components/Services';
import HowItWorks from '@/components/HowItWorks';
import SocialProof from '@/components/SocialProof';
import ComparisonTable from '@/components/ComparisonTable';
import Blog from '@/components/Blog';
import FAQ from '@/components/FAQ';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import Pricing from '@/components/Pricing';

// Add <Pricing /> after <Products /> in the JSX

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Products />
      <Services />
      <HowItWorks />
      <SocialProof />
      <ComparisonTable />
      <Blog />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
