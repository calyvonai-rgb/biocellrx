import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

// Lazy load non-critical components
const Features = lazy(() => import("@/components/Features"));
const Products = lazy(() => import("@/components/Products"));
const ResourcesPreview = lazy(() => import("@/components/ResourcesPreview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const FAQ = lazy(() => import("@/components/FAQ"));
const CTA = lazy(() => import("@/components/CTA"));

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-accent">Loading...</div></div>}>
          <Features />
          <Products />
          <ResourcesPreview />
          <Testimonials />
          <FAQ />
          <CTA />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Index;
