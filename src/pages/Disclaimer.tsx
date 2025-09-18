import SEO from "@/components/SEO";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <>
      <SEO 
        title="Disclaimer - BioCellRx" 
        description="Important legal and safety disclaimers for BioCellRx regenerative medicine services."
      />
      <div className="min-h-screen bg-background">
        <Navigation />
        
        <main className="pt-20">
          <div className="container mx-auto px-6 py-12">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold mb-8 text-foreground">Disclaimer</h1>
              
              {/* Liability Disclaimer */}
              <div className="bg-white rounded-xl p-8 border border-accent/20 shadow-lg mb-8">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Liability Disclaimer</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
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
              <div className="bg-white rounded-xl p-8 border border-accent/20 shadow-lg">
                <h2 className="text-2xl font-bold mb-6 text-foreground">Important Safety Information</h2>
                <div className="text-muted-foreground space-y-4 leading-relaxed">
                  <p className="font-semibold text-foreground">
                    Do not share your semaglutide pen with other people, even if the needle has been changed. You may give other people a serious infection or get a serious infection from them.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">What is the most important information I should know about semaglutide?</h3>
                  <p>Semaglutide may cause serious side effects, including:</p>
                  <p>
                    <strong>Possible thyroid tumors, including cancer.</strong> Tell your health care provider if you get a lump or swelling in your neck, hoarseness, trouble swallowing, or shortness of breath. These may be symptoms of thyroid cancer. In studies with rodents, semaglutide and medicines that work like semaglutide caused thyroid tumors, including thyroid cancer. It is not known if semaglutide will cause thyroid tumors or a type of thyroid cancer called medullary thyroid carcinoma (MTC) in people.
                  </p>
                  <p>
                    Do not use semaglutide if you or any of your family have ever had MTC, or if you have an endocrine system condition called Multiple Endocrine Neoplasia syndrome type 2 (MEN 2).
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Do not use semaglutide if:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>you or any of your family have ever had MTC or if you have MEN 2</li>
                    <li>you are allergic to semaglutide or any of the ingredients in semaglutide. See symptoms of serious allergic reaction in "What are the possible side effects of semaglutide?"</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">Before using semaglutide, tell your health care provider if you have any other medical conditions, including if you:</h4>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>have or have had problems with your pancreas</li>
                    <li>have a history of diabetic retinopathy</li>
                    <li>have severe problems with your stomach, such as slowed emptying of your stomach (gastroparesis) or problems with digesting food</li>
                    <li>are scheduled to have surgery or other procedures that use anesthesia or deep sleepiness (deep sedation)</li>
                    <li>are pregnant or breastfeeding or plan to become pregnant or breastfeed. It is not known if semaglutide will harm your unborn baby or pass into your breast milk. You should stop using semaglutide at least 2 months before you plan to become pregnant</li>
                  </ul>

                  <p className="mt-4">
                    Tell your health care provider about all the medicines you take, including prescription and over-the-counter medicines, vitamins, herbal supplements, and other medicines to treat diabetes, including insulin or sulfonylureas.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">What are the possible side effects of semaglutide?</h4>
                  <p>Semaglutide may cause serious side effects, including:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li><strong>inflammation of your pancreas (pancreatitis).</strong> Stop using semaglutide and call your health care provider right away if you have severe pain in your stomach area (abdomen) that will not go away, with or without vomiting. You may feel the pain from your abdomen to your back</li>
                    <li><strong>changes in vision.</strong> Tell your health care provider if you have changes in vision during treatment with semaglutide</li>
                    <li><strong>low blood sugar (hypoglycemia).</strong> Your risk for getting low blood sugar may be higher if you use semaglutide with another medicine that can cause low blood sugar, such as a sulfonylurea or insulin. Signs and symptoms of low blood sugar may include: dizziness or lightheadedness, blurred vision, anxiety, irritability or mood changes, sweating, slurred speech, hunger, confusion or drowsiness, shakiness, weakness, headache, fast heartbeat, and feeling jittery</li>
                    <li><strong>dehydration leading to kidney problems.</strong> Diarrhea, nausea, and vomiting may cause a loss of fluids (dehydration), which may cause kidney problems. It is important for you to drink fluids to help reduce your chance of dehydration. Tell your health care provider right away if you have nausea, vomiting, or diarrhea that does not go away</li>
                    <li><strong>severe stomach problems.</strong> Stomach problems, sometimes severe, have been reported in people who use semaglutide. Tell your health care provider if you have stomach problems that are severe or will not go away</li>
                    <li><strong>serious allergic reactions.</strong> Stop using semaglutide and get medical help right away if you have any symptoms of a serious allergic reaction, including swelling of your face, lips, tongue, or throat; problems breathing or swallowing; severe rash or itching; fainting or feeling dizzy; or very rapid heartbeat</li>
                    <li><strong>gallbladder problems.</strong> Gallbladder problems have happened in some people who take semaglutide. Tell your health care provider right away if you get symptoms which may include: pain in your upper stomach (abdomen), fever, yellowing of the skin or eyes (jaundice), or clay-colored stools</li>
                    <li><strong>food or liquid getting into the lungs during surgery or other procedures that use anesthesia or deep sleepiness (deep sedation).</strong> Semaglutide may increase the chance of food getting into your lungs during surgery or other procedures. Tell all your health care providers that you are taking semaglutide before you are scheduled to have surgery or other procedures</li>
                  </ul>

                  <p className="mt-4">
                    The most common side effects of semaglutide may include nausea, vomiting, diarrhea, stomach (abdominal) pain, and constipation.
                  </p>

                  <h4 className="text-lg font-semibold text-foreground mt-6 mb-3">What is semaglutide?</h4>
                  <p>Semaglutide injection 0.5 mg, 1 mg, or 2 mg is an injectable prescription medicine used:</p>
                  <ul className="list-disc pl-6 space-y-2 mt-3">
                    <li>along with diet and exercise to improve blood sugar (glucose) in adults with type 2 diabetes</li>
                    <li>to reduce the risk of major cardiovascular events such as heart attack, stroke, or death in adults with type 2 diabetes with known heart disease</li>
                    <li>to reduce the risk of kidney disease worsening, kidney failure (end-stage kidney disease), and death due to cardiovascular disease in adults with type 2 diabetes and chronic kidney disease</li>
                  </ul>

                  <p className="mt-4 font-semibold">
                    It is not known if semaglutide is safe and effective for use in children.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Disclaimer;