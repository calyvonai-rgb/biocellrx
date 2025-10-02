import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Features from "@/components/Features";
import Products from "@/components/Products";
const RegenerativeSolutions = lazy(() => import("@/components/RegenerativeSolutions"));
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
        <Features />
        <Products />
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-accent">Loading...</div></div>}>
          <RegenerativeSolutions />
          <ResourcesPreview />
          <Testimonials />
          <CTA />
        </Suspense>
        <Footer />
      </div>
    </>
  );
};

export default Index;
