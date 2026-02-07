import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] overflow-hidden bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#00A878]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#00A878]/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00A878]/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 pt-32 pb-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Date et lieu badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-8"
          >
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <Calendar className="w-4 h-4 text-[#00A878]" />
              <span className="text-white/90 text-sm font-medium">Août 2026</span>
            </div>
            <div className="flex items-center gap-2 px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <MapPin className="w-4 h-4 text-[#00A878]" />
              <span className="text-white/90 text-sm font-medium">Abu Dhabi, Émirats Arabes Unis</span>
            </div>
          </motion.div>

          {/* Titre principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              Olympiades d'Intelligence Artificielle
            </h1>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-gradient-to-r from-green-400 to-yellow-400 rounded-full" />
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-yellow-400 to-red-500">
                du Bénin
              </h2>
              <div className="h-1 w-12 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full" />
            </div>
          </motion.div>

          {/* Sous-titre */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl sm:text-2xl text-blue-100/90 mb-10 max-w-3xl mx-auto leading-relaxed font-light"
          >
            Rejoignez la compétition nationale qui sélectionne les meilleurs talents 
            pour représenter le Bénin aux Olympiades Internationales d'IA
          </motion.p>

          {/* Boutons CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to={createPageUrl('Inscription')}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-[#00A878] to-[#00C896] hover:from-[#00C896] hover:to-[#00E8B4] text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-[#00A878]/30 hover:shadow-[#00A878]/50 transition-all duration-300 font-semibold"
              >
                S'inscrire maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to={createPageUrl('About')}>
              <Button
                size="lg"
                className="bg-white/90 text-[#1E3A5F] hover:bg-white px-10 py-7 text-lg rounded-xl font-semibold transition-all duration-300 shadow-lg"
              >
                En savoir plus
              </Button>
            </Link>
          </motion.div>

          {/* Stats rapides */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00E8B4] mb-2">3ème</div>
              <div className="text-sm text-blue-100/80 uppercase tracking-wide">Édition IOAI</div>
            </div>
            <div className="text-center border-x border-white/20">
              <div className="text-4xl font-bold text-[#00E8B4] mb-2">50+</div>
              <div className="text-sm text-blue-100/80 uppercase tracking-wide">Pays participants</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-[#00E8B4] mb-2">4</div>
              <div className="text-sm text-blue-100/80 uppercase tracking-wide">Places Bénin</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom wave - version améliorée */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}