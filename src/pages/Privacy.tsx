 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Privacy = () => {
   return (
     <div className="min-h-screen bg-background">
       {/* Header */}
       <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
         <div className="container mx-auto px-6 py-4">
           <Button variant="ghost" size="sm" asChild>
             <Link to="/" className="flex items-center gap-2">
               <ArrowLeft className="h-4 w-4" />
               Back to Home
             </Link>
           </Button>
         </div>
       </header>
 
       {/* Content */}
       <main className="container mx-auto px-6 py-16 max-w-4xl">
         <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
         <p className="text-muted-foreground mb-12">Last updated: February 5, 2025</p>
 
         <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
           <section>
             <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
             <p className="text-muted-foreground leading-relaxed">
               Nextfeature AI, LLC ("Company," "we," "us," or "our") respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our NextFeature.AI platform and services.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
             <h3 className="text-xl font-medium mb-3">2.1 Information You Provide</h3>
             <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
               <li>Account information (name, email address, company name)</li>
               <li>Payment and billing information</li>
               <li>Customer feedback data you upload to our platform</li>
               <li>Communications with our support team</li>
               <li>Survey responses and feedback about our services</li>
             </ul>
             
             <h3 className="text-xl font-medium mb-3">2.2 Automatically Collected Information</h3>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li>Device information (browser type, operating system)</li>
               <li>Log data (IP address, access times, pages viewed)</li>
               <li>Usage data (features used, interactions with the platform)</li>
               <li>Cookies and similar tracking technologies</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">We use the information we collect to:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li>Provide, maintain, and improve our services</li>
               <li>Process transactions and send related information</li>
               <li>Send technical notices, updates, and support messages</li>
               <li>Respond to your comments, questions, and requests</li>
               <li>Analyze usage patterns to improve user experience</li>
               <li>Detect, prevent, and address technical issues and fraud</li>
               <li>Train and improve our AI models (using anonymized, aggregated data only)</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">We do not sell your personal data. We may share your information with:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li><strong>Service Providers:</strong> Third parties that perform services on our behalf (hosting, analytics, payment processing)</li>
               <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
               <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
               <li><strong>With Your Consent:</strong> When you have given us permission to share</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
             <p className="text-muted-foreground leading-relaxed">
               We implement appropriate technical and organizational security measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction. These measures include encryption in transit and at rest, regular security assessments, and access controls. However, no method of transmission over the Internet is 100% secure.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
             <p className="text-muted-foreground leading-relaxed">
               We retain your personal data only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy legal, accounting, or reporting requirements. When you delete your account, we will delete or anonymize your personal data within 30 days, except where retention is required by law.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">7. Your Rights</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">Depending on your location, you may have the following rights:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li><strong>Access:</strong> Request a copy of your personal data</li>
               <li><strong>Correction:</strong> Request correction of inaccurate data</li>
               <li><strong>Deletion:</strong> Request deletion of your personal data</li>
               <li><strong>Portability:</strong> Request transfer of your data to another service</li>
               <li><strong>Opt-out:</strong> Opt out of marketing communications</li>
               <li><strong>Withdraw Consent:</strong> Withdraw consent where processing is based on consent</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">8. Cookies and Tracking</h2>
             <p className="text-muted-foreground leading-relaxed">
               We use cookies and similar tracking technologies to collect and store information about your interactions with our platform. You can control cookies through your browser settings. Essential cookies are required for the platform to function properly and cannot be disabled.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
             <p className="text-muted-foreground leading-relaxed">
               Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your data in accordance with applicable data protection laws, including Standard Contractual Clauses where required.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
             <p className="text-muted-foreground leading-relaxed">
               Our services are not intended for individuals under the age of 16. We do not knowingly collect personal data from children. If we learn that we have collected personal data from a child, we will take steps to delete that information promptly.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">11. Changes to This Policy</h2>
             <p className="text-muted-foreground leading-relaxed">
               We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new Privacy Policy on this page and updating the "Last updated" date. Your continued use of the platform after changes constitutes acceptance of the updated policy.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
             <p className="text-muted-foreground leading-relaxed">
               If you have questions about this Privacy Policy or our privacy practices, please contact us at:
             </p>
             <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
               <p className="font-medium">Nextfeature AI, LLC</p>
               <p className="text-muted-foreground">Email: privacy@nextfeature.ai</p>
             </div>
           </section>
         </div>
       </main>
     </div>
   );
 };
 
 export default Privacy;