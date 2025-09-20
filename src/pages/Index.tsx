import { lazy, Suspense } from "react";
import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import VitalityVideo from "@/components/VitalityVideo";

// Lazy load non-critical components
const Features = lazy(() => import("@/components/Features"));
const ResourcesPreview = lazy(() => import("@/components/ResourcesPreview"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const CTA = lazy(() => import("@/components/CTA"));

const Index = () => {
  return (
    <>
      <SEO />
      <div className="min-h-screen bg-background">
        <Navigation />
        <Hero />
        
        {/* Vitality Video Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
                Discover Your Vitality
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our regenerative therapies can transform your health journey
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <VitalityVideo />
            </div>
          </div>
        </section>

        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="animate-pulse text-accent">Loading...</div></div>}>
          <Features />
          
          {/* Wellness Results Section from Products */}
          <section className="py-20 bg-medical-light">
            <div className="container mx-auto px-6">
              <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12">
                  <div className="space-y-6 lg:col-span-2">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                      Experience Renewed Vitality
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      Discover the transformative power of regenerative medicine and see real results from patients who have experienced improved quality of life.
                    </p>
                  </div>
                  <div className="lg:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <span className="text-green-600 text-sm font-bold">✓</span>
                          </div>
                          <span className="font-semibold text-foreground">Reduced Inflammation</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Experience significant reduction in chronic inflammation and associated discomfort.</p>
                      </div>
                      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-accent/20">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                            <span className="text-blue-600 text-sm font-bold">✓</span>
                          </div>
                          <span className="font-semibold text-foreground">Enhanced Mobility</span>
                        </div>
                        <p className="text-sm text-muted-foreground">Improved joint function and increased range of motion for better daily activities.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white/80 backdrop-blur-sm border-accent/20 shadow-lg rounded-3xl p-8">
                  <div>
                    <img 
                      src="/src/assets/wellness-results-fullbody.jpg" 
                      alt="Person demonstrating improved wellness and mobility from regenerative therapy"
                      className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg"
                    />
                  </div>
                  <div className="space-y-6">
                    <h5 className="text-xl font-semibold text-foreground mb-4">
                      Transform Your Health Journey
                    </h5>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Improved Quality of Life</h6>
                          <p className="text-sm text-muted-foreground">Enhanced energy levels and overall well-being</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Natural Healing</h6>
                          <p className="text-sm text-muted-foreground">Harness your body's natural regenerative capabilities</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                          <span className="text-primary text-xs">✓</span>
                        </div>
                        <div>
                          <h6 className="font-medium text-foreground">Long-lasting Results</h6>
                          <p className="text-sm text-muted-foreground">Sustainable improvements that support ongoing health</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          
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
