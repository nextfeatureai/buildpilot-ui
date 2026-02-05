 import { Link } from "react-router-dom";
 import { ArrowLeft } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 const Terms = () => {
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
         <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
         <p className="text-muted-foreground mb-12">Last updated: February 5, 2025</p>
 
         <div className="prose prose-neutral dark:prose-invert max-w-none space-y-8">
           <section>
             <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
             <p className="text-muted-foreground leading-relaxed">
               By accessing or using the NextFeature.AI platform and services provided by Nextfeature AI, LLC ("Company," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, you may not access or use our services.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">2. Description of Service</h2>
             <p className="text-muted-foreground leading-relaxed">
               NextFeature.AI is an AI-powered product intelligence platform that helps product teams analyze customer feedback, usage data, and market signals to prioritize features and make data-driven roadmap decisions. The service is provided on a subscription basis as Software-as-a-Service (SaaS).
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">To use our services, you must:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li>Be at least 18 years old or have legal authority to enter into contracts</li>
               <li>Provide accurate and complete registration information</li>
               <li>Maintain the security of your account credentials</li>
               <li>Promptly notify us of any unauthorized access to your account</li>
             </ul>
             <p className="text-muted-foreground leading-relaxed mt-4">
               You are responsible for all activities that occur under your account.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">4. Subscription and Payment</h2>
             <h3 className="text-xl font-medium mb-3">4.1 Subscription Plans</h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
               We offer various subscription plans with different features and pricing. Plan details are available on our pricing page.
             </p>
             
             <h3 className="text-xl font-medium mb-3">4.2 Payment Terms</h3>
             <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
               <li>Subscription fees are billed in advance on a monthly or annual basis</li>
               <li>All fees are non-refundable except as required by law or as specified in these Terms</li>
               <li>We may change pricing with 30 days' notice before your next billing cycle</li>
               <li>Failure to pay may result in suspension or termination of your account</li>
             </ul>
 
             <h3 className="text-xl font-medium mb-3">4.3 Free Trials</h3>
             <p className="text-muted-foreground leading-relaxed">
               If you sign up for a free trial, you will be automatically charged at the end of the trial period unless you cancel before the trial ends.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">5. License and Usage Rights</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">
               Subject to these Terms, we grant you a limited, non-exclusive, non-transferable license to access and use our services for your internal business purposes during your subscription period.
             </p>
             <p className="text-muted-foreground leading-relaxed">You may not:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2 mt-2">
               <li>Sublicense, sell, or redistribute the service to third parties</li>
               <li>Modify, adapt, or create derivative works based on our service</li>
               <li>Reverse engineer, decompile, or disassemble any part of our service</li>
               <li>Use the service to build a competing product</li>
               <li>Access the service through automated means (bots, scrapers) without permission</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">6. Your Data</h2>
             <h3 className="text-xl font-medium mb-3">6.1 Ownership</h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
               You retain all ownership rights to the data you upload to our platform ("Customer Data"). We do not claim ownership of your Customer Data.
             </p>
 
             <h3 className="text-xl font-medium mb-3">6.2 License to Use</h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
               You grant us a limited license to process, analyze, and display your Customer Data solely to provide the services to you. We may use anonymized, aggregated data to improve our services and AI models.
             </p>
 
             <h3 className="text-xl font-medium mb-3">6.3 Data Responsibility</h3>
             <p className="text-muted-foreground leading-relaxed">
               You are responsible for ensuring you have the right to share any data you upload and that such sharing complies with applicable laws and your own privacy policies.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">7. Acceptable Use</h2>
             <p className="text-muted-foreground leading-relaxed mb-4">You agree not to use our services to:</p>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li>Violate any applicable laws or regulations</li>
               <li>Infringe on the intellectual property rights of others</li>
               <li>Transmit malware, viruses, or other harmful code</li>
               <li>Attempt to gain unauthorized access to our systems</li>
               <li>Interfere with or disrupt the integrity of our services</li>
               <li>Upload content that is illegal, harmful, or offensive</li>
               <li>Engage in fraudulent or deceptive practices</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">8. Intellectual Property</h2>
             <p className="text-muted-foreground leading-relaxed">
               All intellectual property rights in the service, including software, algorithms, designs, trademarks, and documentation, are owned by Nextfeature AI, LLC or our licensors. These Terms do not grant you any rights to use our trademarks or branding without prior written consent.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">9. Service Availability</h2>
             <p className="text-muted-foreground leading-relaxed">
               We strive to maintain high availability but do not guarantee uninterrupted access to our services. We may suspend or modify the service for maintenance, updates, or other operational reasons. We will provide reasonable notice when possible.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">10. Disclaimer of Warranties</h2>
             <p className="text-muted-foreground leading-relaxed">
               THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE, SECURE, OR UNINTERRUPTED.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">11. Limitation of Liability</h2>
             <p className="text-muted-foreground leading-relaxed">
               TO THE MAXIMUM EXTENT PERMITTED BY LAW, NEXTFEATURE AI, LLC SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, DATA, OR USE, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES. OUR TOTAL LIABILITY SHALL NOT EXCEED THE AMOUNT PAID BY YOU TO US IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">12. Indemnification</h2>
             <p className="text-muted-foreground leading-relaxed">
               You agree to indemnify, defend, and hold harmless Nextfeature AI, LLC and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of your use of the services, violation of these Terms, or infringement of any third-party rights.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">13. Termination</h2>
             <h3 className="text-xl font-medium mb-3">13.1 Termination by You</h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
               You may cancel your subscription at any time through your account settings. Cancellation will take effect at the end of your current billing period.
             </p>
 
             <h3 className="text-xl font-medium mb-3">13.2 Termination by Us</h3>
             <p className="text-muted-foreground leading-relaxed mb-4">
               We may suspend or terminate your access to the services immediately if you violate these Terms, fail to pay fees, or for any other reason at our discretion with reasonable notice.
             </p>
 
             <h3 className="text-xl font-medium mb-3">13.3 Effect of Termination</h3>
             <p className="text-muted-foreground leading-relaxed">
               Upon termination, your right to use the services will cease immediately. You may export your Customer Data before termination. We will delete your data within 30 days after termination unless retention is required by law.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">14. Dispute Resolution</h2>
             <p className="text-muted-foreground leading-relaxed">
               Any disputes arising out of or relating to these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association. The arbitration shall take place in [Your State], and the arbitrator's decision shall be final and binding. You waive any right to participate in a class action lawsuit or class-wide arbitration.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">15. Governing Law</h2>
             <p className="text-muted-foreground leading-relaxed">
               These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">16. Changes to Terms</h2>
             <p className="text-muted-foreground leading-relaxed">
               We reserve the right to modify these Terms at any time. We will notify you of material changes by posting the updated Terms on our website and updating the "Last updated" date. Your continued use of the services after changes constitutes acceptance of the modified Terms.
             </p>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">17. General Provisions</h2>
             <ul className="list-disc list-inside text-muted-foreground space-y-2">
               <li><strong>Entire Agreement:</strong> These Terms constitute the entire agreement between you and us regarding the services.</li>
               <li><strong>Severability:</strong> If any provision is found unenforceable, the remaining provisions will remain in effect.</li>
               <li><strong>Waiver:</strong> Failure to enforce any right does not waive that right.</li>
               <li><strong>Assignment:</strong> You may not assign these Terms without our consent. We may assign our rights and obligations freely.</li>
             </ul>
           </section>
 
           <section>
             <h2 className="text-2xl font-semibold mb-4">18. Contact Us</h2>
             <p className="text-muted-foreground leading-relaxed">
               If you have questions about these Terms, please contact us at:
             </p>
             <div className="mt-4 p-4 rounded-lg bg-muted/50 border border-border">
               <p className="font-medium">Nextfeature AI, LLC</p>
               <p className="text-muted-foreground">Email: legal@nextfeature.ai</p>
             </div>
           </section>
         </div>
       </main>
     </div>
   );
 };
 
 export default Terms;