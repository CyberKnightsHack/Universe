"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Briefcase, Users, Zap, Target, Network, Lightbulb, Award, Clock, Calendar, BookOpen, Mail, Phone, Sparkles, Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);

  return (
    <main className="min-h-screen" ref={containerRef}>
      {/* Hero Section - Enhanced with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background to-accent">
        <motion.div 
          className="absolute inset-0 w-full h-full bg-grid-white/[0.2] bg-grid"
          style={{
            y: useTransform(scrollYProgress, [0, 1], [0, 300]),
            opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.h1 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Join Our Unique
            <span className="text-primary block mt-2">Universe of Talent</span>
          </motion.h1>
          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We're not just building a network—we're crafting an entire universe filled with brilliant minds and endless opportunities.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg group"  onClick={() => window.location.href = 'https://forms.gle/4rCBfmwUQdoVssBV7'}>
              Sign Up Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Us Section - New */}
      <section className="py-24 bg-background relative overflow-hidden">
        <motion.div 
          className="container mx-auto px-4"
          style={{ opacity, scale }}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-center mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h2>
            <motion.p 
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We are a dedicated team of visionaries and professionals who have come together with a single goal: to create a universe where talent thrives. With deep industry insight and a relentless drive for innovation, we are planning and building a platform that redefines how opportunities are discovered.
            </motion.p>
            <motion.p 
              className="text-lg text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              At Talent Radar, our commitment is to ensure that every career opportunity reaches those who deserve it, forming a community that not only transforms careers but also fosters personal and professional growth.
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Vision Section - Enhanced with Scroll-Triggered Animations */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-12"
            >
              <Sparkles className="h-16 w-16 text-primary mx-auto mb-6 animate-pulse" />
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Vision</h2>
            </motion.div>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Imagine a universe where every career opportunity is within reach, where the brightest talents come together to share ideas, insights, and success stories. This is the vision behind Talent Radar—a realm where innovation meets collaboration, and each member plays a vital role in shaping the future of work.
            </motion.p>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              In this universe, boundaries are redefined, and every member is more than just a participant; you are an essential part of a movement that is revolutionizing the way opportunities are discovered and shared.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section - Enhanced with Interactive Cards */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            How It Works
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="h-12 w-12" />,
                title: "Proactive Monitoring",
                description: "Our team monitors designated company career pages daily to bring you the latest opportunities."
              },
              {
                icon: <Briefcase className="h-12 w-12" />,
                title: "Instant Sharing",
                description: "Receive real-time alerts as soon as new positions are posted at your favorite companies."
              },
              {
                icon: <Users className="h-12 w-12" />,
                title: "Community-Driven",
                description: "Join a collaborative network of professionals sharing insights and opportunities."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group hover:-translate-y-2">
                  <div className="text-primary mb-4 transform group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section - Enhanced with Interactive Cards */}
      <section className="py-24 bg-gradient-to-b from-background to-accent">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Member Benefits
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Direct Access",
                description: "Real-time updates on new job postings from top companies"
              },
              {
                icon: <Network className="h-8 w-8" />,
                title: "Networking",
                description: "Connect with professionals and industry experts"
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Industry Insights",
                description: "Stay informed with latest market trends"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Personal Branding",
                description: "Enhance your professional profile"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Flexibility",
                description: "Contribute at your own pace"
              },
              {
                icon: <Calendar className="h-8 w-8" />,
                title: "Exclusive Events",
                description: "Access webinars and workshops"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Resources",
                description: "Access career development resources"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Growth",
                description: "Earn recognition and advance your career"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer"
              >
                <Card className="p-6 h-full bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-all duration-300 hover:shadow-lg">
                  <div className="text-primary mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team Section - Enhanced with Animation */}
      <section className="py-24 bg-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl sm:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              Join Our Team
            </motion.h2>
            <motion.p 
              className="text-lg sm:text-xl text-muted-foreground mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Be part of our mission to connect talent with opportunity. Help us monitor career pages and share opportunities with the community.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
            >
             <Button
  size="lg"
  className="text-lg group"
  onClick={() => window.location.href = 'https://forms.gle/4rCBfmwUQdoVssBV7'}
>
  Apply Now
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</Button>

            </motion.div>
          </div>
        </div>
      </section>

     

      {/* Footer - New */}
      <footer className="bg-background border-t">
         {/* Contact Section - Enhanced with Interactive Elements */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">Contact Us</h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-12">
              We would love to hear from you—whether you have questions, ideas, or simply want to learn more about our unique universe. Connect with us and become part of a movement that's reshaping the future of talent.
            </p>
            <div className="flex justify-center">
              <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center"
              >
              <Mail className="h-6 w-6 text-primary" />
              <a href="mailto:syntellects@gmail.com" className="ml-2 text-lg hover:text-primary transition-colors">
                syntellects@gmail.com
              </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
          
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© {new Date().getFullYear()} Talent Radar. All rights reserved.</p>
          </div>
       
      </footer>
    </main>
  );
}
