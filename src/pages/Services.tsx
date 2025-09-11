import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import VideoPlayer from "@/components/VideoPlayer";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  Phone,
  ArrowRight,
  Users,
  Stethoscope,
  Brain,
  Heart,
  Bone,
  Palette,
  Baby,
  UserCheck
} from "lucide-react";
import labHeroBg from "@/assets/lab-hero-bg.jpg";
import mscExosomalLysate from "@/assets/msc-exosomal-lysate.png";
import cbscCryo from "@/assets/cbsc-cryo.png";
import hucFreshMsc from "/lovable-uploads/22ff32be-43e5-4063-ab26-3f4a1dbdc853.png";

const Services = () => {
  const personalizedServices = [
    {
      title: "Individualized Health Assessments",
      description: "Comprehensive evaluations to understand your unique health profile and identify areas for improvement"
    },
    {
      title: "Innovative Treatment Protocols", 
      description: "Access to the latest and most effective treatments in regenerative medicine and holistic wellness"
    },
    {
      title: "Expert Practitioner Referrals",
      description: "Connections to a network of highly skilled and reputable specialists in your vicinity"
    },
    {
      title: "Ongoing Health Guidance",
      description: "Continuous support and education to keep you on track with your health goals"
    }
  ];

  const bioTherapies = [
    {
      title: "MSC Exosomal Lysate",
      badge: "Premium",
      description: "A cell signaling vesicle transport with Tetraspanin protein. Increases extracellular matrix composition of skin tissue and integrity with 86% average expression of cell surface protein marker. Activates intracellular communication, helps recruit angiogenic immune cells, aids in immune regulation, and promotes myoblast fusion for tissue regeneration.",
      details: "5ml vials • Cytokines transport • 30-100nm size",
      image: "/lovable-uploads/f51f3f85-b0dd-4995-85c2-5c41f0080e4e.png"
    },
    {
      title: "CBSC cryo",
      badge: "Clinical Grade",
      description: "Developed biological therapeutic derived from umbilical cord blood having stem cells for body transplant. The lower cell count makes the CBSC product line perfect for smaller, localized treatments. Contains 1mL/1cc of cellular and protein therapeutic.",
      details: "Silver (8M) • Gold (15M) • Platinum (30M nucleated cells)",
      image: "/lovable-uploads/ac57993d-bdef-4edf-a603-8a8c226e58a3.png"
    },
    {
      title: "hUC Fresh MSC Stem Cells",
      badge: "Fresh",
      description: "Clinical grade mesenchymal stem cells, non-frozen fresh grade. The first team to isolate umbilical cord MSCs in 2006. Pharmaceutical grade cGMP lab with the highest standard in the industry. Fresh stem cells activity >90% & purity >95%.",
      details: "40ml • Multiple FDA approved INDs • Pharmaceutical grade cGMP",
      image: hucFreshMsc
    },
    {
      title: "UC MSC 30 Million",
      badge: "Advanced",
      description: "DMSO free, cryopreserved stem cells measured by the presence of relevant cell surface markers. These stem cells are able to differentiate into bone cells including osteoblasts (osteogenic), adipose (adipogenic), and cartilage (chondrogenic) lineages.",
      details: "30 Million cells • DMSO free • Cryopreserved",
      image: "/lovable-uploads/8362a3bb-d455-415a-a85d-5576bcf8a37d.png"
    },
    {
      title: "BioCBDrx 6000mg",
      badge: "Medical Grade",
      description: "Certified• Tested• Highest potency available • Full spectrum• Organic• Vegan• nonGMO • MEDICAL grade Phytocannabinoids with therapeutic terpenes for pain relief and anti-inflammatory benefits.",
      details: "6000mg CBD, Beta-Caryophyllene, Humulene, Linalool terpenes",
      image: "/lovable-uploads/eaca80fb-dc37-43e5-b4cf-18bd12a0b5ea.png",
      price: "$125.00",
      paymentLink: "https://pay.biocellrx.com/"
    },
    {
      title: "Semaglutide GLP-1 10mg",
      badge: "GLP-1 Therapy",
      description: "Semaglutide is a glucagon-like peptide-1 (GLP-1) receptor agonist with the same effects of the natural GLP-1 hormone in the body. Approved for the treatment of diabetes and obesity, it improves blood insulin levels and regulates appetite.",
      details: "10mg 1 month supply, four 2.5mg/week injections",
      image: "/lovable-uploads/4b4a2781-d57e-45fc-aca9-7b3808f1ff22.png",
      price: "$425.00",
      paymentLink: "https://pay.biocellrx.com/"
    }
  ];

  const specialists = [
    { name: "Aesthetics", icon: Palette },
    { name: "Orthopedic Surgeons", icon: Bone },
    { name: "Pain Specialists", icon: Heart },
    { name: "Plastic Surgery", icon: UserCheck },
    { name: "Dental", icon: Users },
    { name: "Internal Medicine", icon: Stethoscope },
    { name: "General Medicine", icon: Brain },
    { name: "Pediatrics", icon: Baby }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-32 text-white overflow-hidden"
        style={{
          backgroundImage: `url(${labHeroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Products &
              <span className="block bg-gradient-to-r from-accent to-accent-foreground bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive regenerative medicine services and cutting-edge products designed to support your body's natural healing processes
            </p>
            <div className="flex justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-black font-semibold">
                <Phone className="w-5 h-5 mr-2" />
                Call (858) 519-7305
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Wellness Support */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Wellness Support
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Our team will support you in building a healthier you with the latest innovative treatments
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  Our team will support you in building a healthier you with the latest most innovative treatments
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  No matter what your health needs are, having a team support you will keep you on the path to meeting them
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We work together to connect you with the services you need with the right expert practitioner or specialist in your vicinity
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  When you choose us, you join a community of qualified practitioners
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-accent mb-4" />
                <p className="text-muted-foreground leading-relaxed">
                  We work not just with you but with other members of our community to build a network of people working together
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See Our Process in Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Watch how our innovative treatments and therapies work to support your health journey
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}} className="rounded-xl overflow-hidden">
                <iframe 
                  src="https://player.vimeo.com/video/1117663041?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{position:"absolute", top:0, left:0, width:"100%", height:"100%"}} 
                  title="BIOCELLRX"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Referrals and Access to Bio Therapies */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Referrals and Access to Bio Therapies
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Partnered with the best and most reputable laboratories and clinics that prioritize safety and quality first with regulatory approved research products
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent mr-3" />
                  Premium Laboratory Partnerships
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We are teamed with only the best and most reputable laboratories and clinics that puts safety and quality first with regulatory approved research products.
                </p>
              </CardContent>
            </Card>
            <Card className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-foreground flex items-center">
                  <CheckCircle className="w-6 h-6 text-accent mr-3" />
                  Comprehensive Specialist Network
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  We provide referrals for local Aesthetics, Orthopedic surgeons, Pain specialists, Plastic surgery, Dental, Internal, general medicine and Pediatrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advanced Bio-Therapies */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Advanced Bio-Therapies & Regenerative Products
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Your gateway to the most advanced bio-therapies and regenerative products available, partnered with leading laboratories prioritizing safety and quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {bioTherapies.map((therapy, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white">
                <CardHeader className="text-center">
                  <div className="mb-4">
                    <img 
                      src={therapy.image} 
                      alt={therapy.title}
                      className="w-40 h-40 mx-auto object-cover rounded-lg"
                    />
                  </div>
                  <div className="mb-2">
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {therapy.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {therapy.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                  <p className="text-muted-foreground leading-relaxed">
                    {therapy.description}
                  </p>
                  <p className="text-sm font-medium text-accent">
                    {therapy.details}
                  </p>
                  {therapy.price && (
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-accent">{therapy.price}</span>
                    </div>
                  )}
                  {therapy.paymentLink && (
                    <a href={therapy.paymentLink} target="_blank" rel="noopener noreferrer">
                      <Button variant="medical" className="w-full">
                        Purchase Now
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Medical Care Network */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Specialized Medical Care Network
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Access to a comprehensive network of local specialists ensuring complete care for all your health needs
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {specialists.map((specialist, index) => (
              <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white text-center">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-accent to-accent-foreground rounded-full mb-4">
                    <specialist.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground">
                    {specialist.name}
                  </h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
<img 
                src={healingPotentialImage} 
                alt="Natural healing potential and regenerative medicine breakthrough"
                className="w-full max-w-4xl mx-auto rounded-2xl shadow-lg"
              />
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent/10 to-accent/5">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Ready to Transform Your Health?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Take a proactive step towards a healthier, more fulfilling life with BioCellRx's innovative solutions
            </p>
            <div className="flex justify-center">
              <Link to="/contact">
                <Button size="lg" variant="medical">
                  Book Your Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;