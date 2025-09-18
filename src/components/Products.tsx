import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Dna,
  Snowflake,
  Zap,
  Leaf,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import VitalityVideo from "@/components/VitalityVideo";
import mscExosomalLysate from "/uploads/f51f3f85-b0dd-4995-85c2-5c41f0080e4e.png";
import cbscCryo from "/uploads/ac57993d-bdef-4edf-a603-8a8c226e58a3.png";
import hucFreshMsc from "/uploads/22ff32be-43e5-4063-ab26-3f4a1dbdc853.png";
import ucMsc30Million from "/uploads/8362a3bb-d455-415a-a85d-5576bcf8a37d.png";
import semaglutide from "/uploads/4b4a2781-d57e-45fc-aca9-7b3808f1ff22.png";
import bioCbdrx from "/uploads/eaca80fb-dc37-43e5-b4cf-18bd12a0b5ea.png";
import wellnessResults from "@/assets/wellness-results-fullbody.jpg";

const Products = () => {
  const cellularProducts = [
    {
      icon: Dna,
      title: "MSC Exosomal Lysate",
      description: "Cytokines are a cell signaling vehicle transport. A Tetraspanin protein- potential suppressor of metastasis. 30-100nm in size, Increase the extracellular matrix composition of skin tissue and integrity. 86% average expression of cell surface protein",
      features: ["5ml", "Cell signaling vehicle", "30-100nm in size"],
      color: "from-blue-500 to-blue-600",
      image: mscExosomalLysate
    },
    {
      icon: Snowflake,
      title: "CBSC cryo",
      description: "CBSC® is a developed biological therapeutic derived from umbilical cord blood having stem cells for body transplant. The lower cell count makes the CB ® product line perfect for smaller, localized treatments. Each vial of CB ® contains 1mL/1cc of a cellular and protein that has demonstrated remarkable results in early research testing.",
      features: ["1ml", "Silver (8 Million nucleated cells)", "Gold (15 Million nucleated cells)", "Platinum (30 million nucleated cells)"],
      color: "from-cyan-500 to-cyan-600",
      image: cbscCryo
    },
    {
      icon: Snowflake,
      title: "hUC Fresh MSC Stem Cells",
      description: "Human Umbilical Cord Fresh Mesenchymal Stem Cells offering superior viability and therapeutic efficacy. Non-cryopreserved for maximum cellular integrity and regenerative potential.",
      features: ["Fresh MSCs", "Superior viability", "Non-cryopreserved", "Maximum potency"],
      color: "from-teal-500 to-teal-600",
      image: hucFreshMsc
    },
    {
      icon: Dna,
      title: "UC MSC 30 Million",
      description: "Umbilical Cord Mesenchymal Stem Cells with 30 million cells per vial. Provides potent regenerative potential for tissue repair and anti-inflammatory therapeutic applications.",
      features: ["30 million cells", "Umbilical cord derived", "High potency", "Regenerative therapy"],
      color: "from-orange-500 to-orange-600",
      image: ucMsc30Million
    },
    {
      icon: Zap,
      title: "Semaglutide GLP-1 10mg",
      description: "Advanced GLP-1 receptor agonist for metabolic health and weight management. Clinically proven to support healthy blood sugar levels and promote sustainable weight loss through appetite regulation.",
      features: ["10mg dosage", "GLP-1 receptor agonist", "Metabolic support", "Weight management"],
      color: "from-purple-500 to-purple-600",
      image: semaglutide
    },
    {
      icon: Leaf,
      title: "BioCBDrx 6000mg",
      description: "Certified• Tested• Highest potency available • Full spectrum• Organic• Vegan• nonGMO • MEDICAL grade Phytocannabinoids• Terpene for Pain • Flavonoids• MCT. Features therapeutic terpenes including Beta-Caryophyllene for anti-inflammatory and pain relief.",
      features: ["6000mg total CBD", "Full spectrum", "Medical grade", "Organic & Vegan"],
      color: "from-green-500 to-green-600",
      image: bioCbdrx
    }
  ];


  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Cellular Products Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Cutting-Edge Regenerative Products
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our scientifically-advanced cellular products designed to harness 
            your body's natural healing mechanisms
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {cellularProducts.map((product, index) => (
            <Card key={index} className="group hover:shadow-medical transition-all duration-300 border-0 bg-white product-golden-hover animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader className="text-center pb-4">
                <div className="mb-4">
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-32 h-32 mx-auto object-cover rounded-lg"
                  />
                </div>
                <CardTitle className="text-lg font-semibold text-foreground">
                  {product.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {product.description}
                </p>
                <div className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center text-sm">
                      <CheckCircle className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>


        {/* Wellness Results Section */}
        <div className="bg-gradient-to-r from-accent/5 to-accent/10 rounded-3xl p-8 md:p-12 mt-20">
          <div>
            {/* Two Column Header Section */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center mb-12">
              {/* Left Column - Text Content */}
              <div className="space-y-6 lg:col-span-2">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                  Experience Renewed Vitality
                </h3>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Our advanced regenerative therapies help patients regain mobility, reduce inflammation, 
                  and experience improved quality of life through the body's natural healing processes.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button variant="medical" size="lg" className="w-full sm:w-auto">
                      Start Your Journey
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Link to="/services">
                    <Button variant="outline" size="lg" className="w-full sm:w-auto border-accent text-accent hover:bg-accent hover:text-black">
                      Learn More
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Right Column - Video */}
              <div className="order-first lg:order-last lg:col-span-3">
                <VitalityVideo />
              </div>
            </div>
            
            {/* Two Column Card */}
            <Card className="mb-8 bg-white/80 backdrop-blur-sm border-accent/20 shadow-lg">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  {/* Left Column - Image */}
                  <div className="order-2 lg:order-1">
                    <img 
                      src={wellnessResults} 
                      alt="Person demonstrating improved wellness and mobility from regenerative therapy"
                      className="w-full max-w-md mx-auto lg:mx-0 rounded-2xl shadow-lg"
                    />
                  </div>
                  
                  {/* Right Column - Benefits List */}
                  <div className="order-1 lg:order-2 space-y-6">
                    <h5 className="text-xl font-semibold text-foreground mb-4">
                      Transform Your Health Journey
                    </h5>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                        <span className="text-foreground text-lg font-medium">Enhanced mobility and flexibility</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                        <span className="text-foreground text-lg font-medium">Reduced inflammation and pain</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                        <span className="text-foreground text-lg font-medium">Improved quality of life</span>
                      </div>
                      <div className="flex items-start">
                        <CheckCircle className="w-6 h-6 text-accent mr-4 flex-shrink-0 mt-1" />
                        <span className="text-foreground text-lg font-medium">Natural healing processes</span>
                      </div>
                    </div>
                    
                    {/* Learn More Button */}
                    <div className="pt-4">
                      <Link to="/contact">
                        <Button variant="medical" size="lg" className="w-full sm:w-auto">
                          Learn More
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Products;