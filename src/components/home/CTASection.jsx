import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-br from-[#1E3A5F] via-[#2D5A87] to-[#3D7AB3] rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden"
        >
          {/* Background decoration */}
          <div className="absolute inset-0">
            <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-60 h-60 bg-blue-400/20 rounded-full blur-3xl" />
          </div>

          <div className="relative text-center max-w-3xl mx-auto">
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex p-3 bg-white/10 rounded-xl mb-6"
            >
              <Sparkles className="w-8 h-8 text-yellow-400" />
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Prêt à relever le défi ?
            </h2>
            <p className="text-lg text-blue-100/90 mb-10 max-w-2xl mx-auto">
              Rejoignez des centaines d'élèves talentueux à travers le Bénin et 
              tentez votre chance de représenter notre pays aux Olympiades Internationales d'IA.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Inscription')}>
                <Button 
                  size="lg" 
                  className="bg-white text-[#1E3A5F] hover:bg-blue-50 px-10 py-6 text-lg rounded-xl shadow-lg w-full sm:w-auto"
                >
                  Commencer l'inscription
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 px-10 py-6 text-lg rounded-xl w-full sm:w-auto"
                >
                  Nous contacter
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}