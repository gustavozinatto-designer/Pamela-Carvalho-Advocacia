/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Hero from './components/Hero';
import TrustSection from './components/TrustSection';
import AboutSection from './components/AboutSection';
import AreasSection from './components/AreasSection';
import MethodologySection from './components/MethodologySection';
import SocialProofSection from './components/SocialProofSection';
import ProcessSection from './components/ProcessSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import FinalCTASection from './components/FinalCTASection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-deep-navy overflow-x-hidden">
      <Hero />
      <TrustSection />
      <AboutSection />
      <AreasSection />
      <MethodologySection />
      <SocialProofSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
}
