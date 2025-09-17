import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Shield,
  Zap
} from "lucide-react";
import VideoPlayer from "@/components/VideoPlayer";
import videoThumbnail from "@/assets/video-thumbnail.jpg";
import whyChooseImage from "@/assets/biocellrx-logo-new.png";
import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

const Features = () => {
  const videoRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [showUnmuteButton, setShowUnmuteButton] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVideoVisible) {
          setIsVideoVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => observer.disconnect();
  }, [isVideoVisible]);

  // Handle autoplay with sound fallback
  useEffect(() => {
    const handleAutoplay = async () => {
      if (isVideoVisible && videoElementRef.current) {
        const video = videoElementRef.current;
        
        // Add a small delay to ensure video is loaded
        setTimeout(async () => {
          try {
            // Try to play with sound first
            video.muted = false;
            video.currentTime = 0; // Reset to beginning
            await video.play();
            setIsMuted(false);
            setShowUnmuteButton(false);
          } catch (error) {
            try {
              // Fallback to muted autoplay
              video.muted = true;
              video.currentTime = 0; // Reset to beginning
              await video.play();
              setIsMuted(true);
              setShowUnmuteButton(true);
            } catch (mutedError) {
              console.log('Autoplay failed even with muted video:', mutedError);
            }
          }
        }, 100);
      }
    };

    if (isVideoVisible) {
      handleAutoplay();
    }
  }, [isVideoVisible]);

  const toggleMute = () => {
    if (videoElementRef.current) {
      const video = videoElementRef.current;
      video.muted = !video.muted;
      setIsMuted(video.muted);
      setShowUnmuteButton(video.muted);
    }
  };

  const features = [
    {
      icon: Users,
      title: "Expert Medical Professionals",
      description: "Our team of experienced medical professionals provides personalized assessments and custom recovery plans tailored to your unique health needs.",
      badge: "Personalized Care"
    },
    {
      icon: Shield,
      title: "Scientifically-Backed Solutions",
      description: "We provide only the safest and most effective regenerative products, grounded in extensive research and clinical studies with regulatory compliance.",
      badge: "FDA Compliant"
    },
    {
      icon: Zap,
      title: "Industry-Leading Innovation",
      description: "Access to the most clinically advanced cellular products including MSC Exosomal Lysate, CBSC cryo, and fresh MSC stem cells.",
      badge: "Advanced Technology"
    }
  ];

  return (
    <section id="about" className="py-20 bg-medical-light">
      <div className="container mx-auto px-6">
        {/* Video Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              See Our Process in Action
            </h3>
          </div>

          <div className="max-w-4xl mx-auto" ref={videoRef}>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-accent/20">
              <div style={{padding:"56.25% 0 0 0", position:"relative"}} className="rounded-xl overflow-hidden video-container">
                {isVideoVisible ? (
                  <>
                    <video 
                      ref={videoElementRef}
                      src="/uploads/biocell how.mp4"
                      loop
                      controls
                      playsInline
                      preload="metadata"
                      webkit-playsinline="true"
                      style={{position:"absolute", top:0, left:0, width:"100%", height:"100%", objectFit: "cover"}} 
                      className="video-fill rounded-xl"
                    >
                      Your browser does not support the video tag.
                    </video>
                    {showUnmuteButton && (
                      <button
                        onClick={toggleMute}
                        className="absolute top-4 right-4 z-10 bg-black/70 hover:bg-black/90 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm"
                        aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    )}
                  </>
                ) : (
                  <div 
                    className="absolute inset-0 bg-gray-100 flex items-center justify-center video-fill"
                    style={{backgroundImage: `url(${videoThumbnail})`, backgroundSize: 'cover', backgroundPosition: 'center'}}
                  >
                    <div className="w-16 h-16 bg-white/80 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[12px] border-l-black border-y-[8px] border-y-transparent ml-1"></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Grid with Enhanced Animations */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group relative bg-white border-accent/20 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/20 rounded-lg transition-all duration-300"></div>
              
              <CardContent className="relative p-8 text-center">
                {/* Icon with Hover Animation */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-primary group-hover:scale-125 transition-transform duration-300" />
                  </div>
                  
                  {/* Ripple Effect */}
                  <div className="absolute inset-0 w-16 h-16 mx-auto rounded-full border-2 border-primary/30 opacity-0 group-hover:opacity-100 group-hover:scale-150 transition-all duration-700"></div>
                </div>
                
                {/* Badge with Animation */}
                <Badge 
                  variant="secondary" 
                  className="mb-4 group-hover:scale-105 transition-transform duration-300 bg-primary/10 text-primary border-primary/20"
                >
                  {feature.badge}
                </Badge>
                
                {/* Title with Stagger Animation */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                  {feature.title}
                </h3>
                
                {/* Description with Fade Effect */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>
                
                {/* Decorative Elements */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-4 left-4 w-1 h-1 bg-accent/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Why Choose BioCellRx Section with All Animations */}
        <div className="relative">
          {/* All Background Animations */}
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            {/* Floating Circles */}
            <div className="absolute top-20 left-10 w-32 h-32 border-2 border-primary/20 rounded-full animate-spin"></div>
            <div className="absolute top-40 right-20 w-24 h-24 border border-accent/30 rounded-full animate-pulse"></div>
            <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-primary/10 rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 right-1/3 w-20 h-20 border-2 border-accent/20 rounded-full animate-spin"></div>
            
            {/* Animated Lines */}
            <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
            <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"></div>
            
            {/* Geometric Shapes */}
            <div className="absolute top-1/3 right-10 w-12 h-12 border border-primary/25 rotate-45 animate-spin"></div>
            <div className="absolute bottom-1/2 left-20 w-8 h-8 bg-accent/20 rotate-12 animate-pulse"></div>

            {/* Moving Stem Cells */}
            <div className="absolute top-10 left-8 w-6 h-6 bg-primary/20 rounded-full animate-bounce" 
                 style={{ animationDelay: '0s', animationDuration: '3s' }}>
              <div className="absolute inset-1 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-2 h-2 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute top-20 right-12 w-8 h-8 bg-accent/20 rounded-full animate-[float_4s_ease-in-out_infinite]" 
                 style={{ animationDelay: '1s' }}>
              <div className="absolute inset-1 bg-accent/30 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-accent/50 rounded-full"></div>
              <div className="absolute bottom-1.5 right-1.5 w-1.5 h-1.5 bg-accent/40 rounded-full"></div>
            </div>
            
            <div className="absolute top-40 left-16 w-5 h-5 bg-primary/25 rounded-full animate-[drift_5s_linear_infinite]" 
                 style={{ animationDelay: '2s' }}>
              <div className="absolute inset-0.5 bg-primary/35 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/60 rounded-full"></div>
            </div>
            
            <div className="absolute top-60 right-20 w-7 h-7 bg-accent/15 rounded-full animate-[float_3.5s_ease-in-out_infinite]" 
                 style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-1 bg-accent/25 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-2 h-2 bg-accent/45 rounded-full"></div>
              <div className="absolute bottom-1 right-1 w-1 h-1 bg-accent/35 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-32 left-12 w-6 h-6 bg-primary/18 rounded-full animate-[drift_4.5s_linear_infinite]" 
                 style={{ animationDelay: '1.5s' }}>
              <div className="absolute inset-1 bg-primary/28 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute bottom-16 right-16 w-4 h-4 bg-accent/22 rounded-full animate-[float_3s_ease-in-out_infinite]" 
                 style={{ animationDelay: '2.5s' }}>
              <div className="absolute inset-0.5 bg-accent/32 rounded-full"></div>
              <div className="absolute top-0.5 left-0.5 w-1 h-1 bg-accent/55 rounded-full"></div>
            </div>

            <div className="absolute top-1/3 left-1/4 w-5 h-5 bg-primary/20 rounded-full animate-[drift_3.8s_linear_infinite]" 
                 style={{ animationDelay: '1.2s' }}>
              <div className="absolute inset-0.5 bg-primary/30 rounded-full"></div>
              <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-primary/50 rounded-full"></div>
            </div>
            
            <div className="absolute top-1/2 right-1/4 w-6 h-6 bg-accent/18 rounded-full animate-[float_4.2s_ease-in-out_infinite]" 
                 style={{ animationDelay: '0.8s' }}>
              <div className="absolute inset-1 bg-accent/28 rounded-full"></div>
              <div className="absolute top-1.5 left-1.5 w-1.5 h-1.5 bg-accent/45 rounded-full"></div>
            </div>
          </div>

          {/* Why Choose BioCellRx Image */}
          <div className="max-w-6xl mx-auto relative group">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <img 
              src={whyChooseImage} 
              alt="BioCellRx Logo - Premium cellular therapeutic solutions"
              className="relative w-full h-auto rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] z-10"
            />
            
            {/* Liability Disclaimer */}
            <div className="mt-12 bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
              <h4 className="text-xl font-bold mb-4 text-foreground">Liability Disclaimer</h4>
              <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                <p>
                  THE INFORMATION, SOFTWARE, PRODUCTS, AND SERVICES INCLUDED IN OR AVAILABLE THROUGH THE SITE MAY INCLUDE INACCURACIES OR TYPOGRAPHICAL ERRORS. CHANGES ARE PERIODICALLY ADDED TO THE INFORMATION HEREIN. BIOCELLRX®️, INC., AND/OR ITS SUPPLIERS MAY MAKE IMPROVEMENTS AND/OR CHANGES IN THE SITE AT ANY TIME.
                </p>
                <p>
                  BIOCELLRX®️ AND/OR ITS SUPPLIERS MAKE NO REPRESENTATIONS ABOUT THE SUITABILITY, RELIABILITY, AVAILABILITY, TIMELINESS, AND ACCURACY OF THE INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS CONTAINED ON THE SITE FOR ANY PURPOSE. TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, ALL SUCH INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS ARE PROVIDED "AS IS" WITHOUT WARRANTY OR CONDITION OF ANY KIND. BIOCELLRX®️ AND/OR ITS SUPPLIERS HEREBY DISCLAIM ALL WARRANTIES AND CONDITIONS WITH REGARD TO THIS INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS, INCLUDING ALL IMPLIED WARRANTIES OR CONDITIONS OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT.
                </p>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL BIOCELLRX®️ AND/OR ITS SUPPLIERS BE LIABLE FOR ANY DIRECT, INDIRECT, PUNITIVE, INCIDENTAL, SPECIAL, CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER INCLUDING, WITHOUT LIMITATION, DAMAGES FOR LOSS OF USE, DATA OR PROFITS, ARISING OUT OF OR IN ANY WAY CONNECTED WITH THE USE OR PERFORMANCE OF THE SITE, WITH THE DELAY OR INABILITY TO USE THE SITE OR RELATED SERVICES, THE PROVISION OF OR FAILURE TO PROVIDE SERVICES, OR FOR ANY INFORMATION, SOFTWARE, PRODUCTS, SERVICES AND RELATED GRAPHICS OBTAINED THROUGH THE SITE, OR OTHERWISE ARISING OUT OF THE USE OF THE SITE, WHETHER BASED ON CONTRACT, TORT, NEGLIGENCE, STRICT LIABILITY OR OTHERWISE, EVEN IF BIOCELLRX®️ OR ANY OF ITS SUPPLIERS HAS BEEN ADVISED OF THE POSSIBILITY OF DAMAGES. BECAUSE SOME STATES/JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF LIABILITY FOR CONSEQUENTIAL OR INCIDENTAL DAMAGES, THE ABOVE LIMITATION MAY NOT APPLY TO YOU. IF YOU ARE DISSATISFIED WITH ANY PORTION OF THE SITE, OR WITH ANY OF THESE TERMS OF USE, YOUR SOLE AND EXCLUSIVE REMEDY IS TO DISCONTINUE USING THE SITE.
                </p>
              </div>
            </div>

            {/* Semaglutide Disclaimer */}
            <div className="mt-8 bg-white/50 backdrop-blur-sm rounded-xl p-8 border border-accent/20">
              <h4 className="text-xl font-bold mb-4 text-foreground">Important Safety Information</h4>
              <div className="text-sm text-muted-foreground space-y-3 leading-relaxed">
                <p className="font-semibold">Do not share your semaglutide pen with other people, even if the needle has been changed. You may give other people a serious infection or get a serious infection from them.</p>
                
                <h5 className="font-semibold text-foreground">What is the most important information I should know about semaglutide?</h5>
                <p>Semaglutide may cause serious side effects, including:</p>
                <p><strong>Possible thyroid tumors, including cancer.</strong> Tell your health care provider if you get a lump or swelling in your neck, hoarseness, trouble swallowing, or shortness of breath. These may be symptoms of thyroid cancer. In studies with rodents, semaglutide and medicines that work like semaglutide caused thyroid tumors, including thyroid cancer. It is not known if semaglutide will cause thyroid tumors or a type of thyroid cancer called medullary thyroid carcinoma (MTC) in people.</p>
                <p>Do not use semaglutide if you or any of your family have ever had MTC, or if you have an endocrine system condition called Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).</p>
                
                <h5 className="font-semibold text-foreground">Do not use semaglutide if:</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>you or any of your family have ever had MTC or if you have MEN 2</li>
                  <li>you are allergic to semaglutide or any of the ingredients in semaglutide. See symptoms of serious allergic reaction in "What are the possible side effects of semaglutide?"</li>
                </ul>
                
                <h5 className="font-semibold text-foreground">Before using semaglutide, tell your health care provider if you have any other medical conditions, including if you:</h5>
                <ul className="list-disc pl-6 space-y-1">
                  <li>have or have had problems with your pancreas</li>
                  <li>have a history of diabetic retinopathy</li>
                  <li>have severe problems with your stomach, such as slowed emptying of your stomach (gastroparesis) or problems with digesting food</li>
                  <li>are scheduled to have surgery or other procedures that use anesthesia or deep sleepiness (deep sedation)</li>
                  <li>are pregnant or breastfeeding or plan to become pregnant or breastfeed. It is not known if semaglutide will harm your unborn baby or pass into your breast milk. You should stop using semaglutide at least 2 months before you plan to become pregnant</li>
                </ul>
                
                <p>Tell your health care provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins, herbal supplements, and other medicines to treat diabetes, including insulin or sulfonylureas.</p>
                
                <h5 className="font-semibold text-foreground">What are the possible side effects of semaglutide?</h5>
                <p>Semaglutide may cause serious side effects, including:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>inflammation of your pancreas (pancreatitis).</strong> Stop using semaglutide and call your health care provider right away if you have severe pain in your stomach area (abdomen) that will not go away, with or without vomiting. You may feel the pain from your abdomen to your back</li>
                  <li><strong>changes in vision.</strong> Tell your health care provider if you have changes in vision during treatment with semaglutide</li>
                  <li><strong>low blood sugar (hypoglycemia).</strong> Your risk for getting low blood sugar may be higher if you use semaglutide with another medicine that can cause low blood sugar, such as a sulfonylurea or insulin. Signs and symptoms of low blood sugar may include: dizziness or lightheadedness, blurred vision, anxiety, irritability or mood changes, sweating, slurred speech, hunger, confusion or drowsiness, shakiness, weakness, headache, fast heartbeat, and feeling jittery</li>
                  <li><strong>dehydration leading to kidney problems.</strong> Diarrhea, nausea, and vomiting may cause a loss of fluids (dehydration), which may cause kidney problems. It is important for you to drink fluids to help reduce your chance of dehydration. Tell your health care provider right away if you have nausea, vomiting, or diarrhea that does not go away</li>
                  <li><strong>severe stomach problems.</strong> Stomach problems, sometimes severe, have been reported in people who use semaglutide. Tell your health care provider if you have stomach problems that are severe or will not go away</li>
                  <li><strong>serious allergic reactions.</strong> Stop using semaglutide and get medical help right away if you have any symptoms of a serious allergic reaction, including swelling of your face, lips, tongue, or throat; problems breathing or swallowing; severe rash or itching; fainting or feeling dizzy; or very rapid heartbeat</li>
                  <li><strong>gallbladder problems.</strong> Gallbladder problems have happened in some people who take semaglutide. Tell your health care provider right away if you get symptoms which may include: pain in your upper stomach (abdomen), fever, yellowing of the skin or eyes (jaundice), or clay-colored stools</li>
                  <li><strong>food or liquid getting into the lungs during surgery or other procedures that use anesthesia or deep sleepiness (deep sedation).</strong> Semaglutide may increase the chance of food getting into your lungs during surgery or other procedures. Tell all your health care providers that you are taking semaglutide before you are scheduled to have surgery or other procedures</li>
                </ul>
                
                <p>The most common side effects of semaglutide may include nausea, vomiting, diarrhea, stomach (abdominal) pain, and constipation.</p>
                
                <h5 className="font-semibold text-foreground">What is semaglutide?</h5>
                <p>Semaglutide injection 0.5 mg, 1 mg, or 2 mg is an injectable prescription medicine used:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>along with diet and exercise to improve blood sugar (glucose) in adults with type 2 diabetes</li>
                  <li>to reduce the risk of major cardiovascular events such as heart attack, stroke, or death in adults with type 2 diabetes with known heart disease</li>
                  <li>to reduce the risk of kidney disease worsening, kidney failure (end-stage kidney disease), and death due to cardiovascular disease in adults with type 2 diabetes and chronic kidney disease</li>
                </ul>
                
                <p>It is not known if semaglutide is safe and effective for use in children.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;