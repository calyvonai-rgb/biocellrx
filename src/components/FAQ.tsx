import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { getHomePage } from "@/lib/sanity";

const defaultFaqs = [
  { question: "What makes BioCellRx's stem cell therapy different from other treatments?", answer: "BioCellRx utilizes the most advanced cellular products available, including MSC Exosomal Lysate, CBSC cryo, and fresh MSC stem cells. Our therapies are backed by over 20 years of research and development, ensuring the highest quality and effectiveness. We also provide personalized treatment plans tailored to each patient's unique needs." },
  { question: "Are BioCellRx's treatments safe and compliant?", answer: "Yes, all our treatments follow strict quality guidelines and regulatory compliance standards. Our products undergo rigorous testing and quality control measures. We work exclusively with licensed medical professionals and maintain the highest safety standards in the industry." },
  { question: "What conditions can be treated with BioCellRx's regenerative therapies?", answer: "Our regenerative therapies can help with a wide range of conditions including joint pain, arthritis, sports injuries, chronic inflammation, and various degenerative conditions. During your personalized consultation, our medical professionals will assess your specific condition and determine the best treatment approach." },
  { question: "How long does it take to see results from stem cell therapy?", answer: "Results can vary depending on the individual and the condition being treated. Some patients notice improvements within weeks, while others may see gradual improvements over several months. Our team will provide you with realistic expectations during your consultation and monitor your progress throughout the treatment." },
  { question: "What is included in the personalized consultation?", answer: "Your personalized consultation includes a comprehensive health assessment, review of your medical history, discussion of your treatment goals, and a customized treatment plan. Our medical professionals will explain the recommended therapies, expected outcomes, and answer all your questions." },
  { question: "Do you offer premium CBD products alongside stem cell therapy?", answer: "Yes, we offer premium CBD products including our Daily 200 CBD Tincture Oil. These products are crafted with all-natural ingredients, lab-tested for purity and potency, and can complement your regenerative therapy for enhanced wellness support." },
  { question: "How do I get started with BioCellRx?", answer: "Getting started is simple - book your consultation through our website or contact our team directly. We'll schedule your personalized assessment with one of our medical professionals who will guide you through the entire process and create a treatment plan tailored to your specific needs." }
];

const FAQ = () => {
  const [data, setData] = useState<any>(null);
  useEffect(() => { getHomePage().then(setData).catch(() => {}); }, []);

  const heading = data?.faqHeading ?? "Frequently Asked Questions";
  const subtext = data?.faqSubtext ?? "Get expert insights about BioCellRx's regenerative medicine solutions and premium CBD products";
  const faqs = data?.faqs?.length ? data.faqs : defaultFaqs;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">{heading}</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{subtext}</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 bg-white shadow-sm"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:text-accent transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;