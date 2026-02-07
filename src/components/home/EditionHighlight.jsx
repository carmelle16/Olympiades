import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, MapPin, Users, Award, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function EditionHighlight() {
  return (
    <section className="py-24 bg-gradient-to-br from-[#1E3A5F] via-[#2D5A87] to-[#00A878] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#00A878]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        {/* En-tête de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-5 py-2 bg-[#00A878]/20 text-[#00E8B4] rounded-full text-sm font-semibold mb-4 border border-[#00A878]/30">
            Prochaine édition
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            IOAI 2026
          </h2>
          <p className="text-xl text-blue-100/80 max-w-2xl mx-auto">
            La 3ème édition de l'Olympiade Internationale d'Intelligence Artificielle
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Colonne gauche - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
                alt="Abu Dhabi UAE"
                className="w-full h-auto aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1E3A5F]/90 via-[#1E3A5F]/50 to-transparent" />
              
              {/* Badge Abu Dhabi */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="text-4xl">🇦🇪</div>
                  <div>
                    <p className="text-white font-bold text-xl">Abu Dhabi</p>
                    <p className="text-blue-200 text-sm">Émirats Arabes Unis</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Carte flottante - Stats */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white rounded-2xl p-6 shadow-2xl border border-slate-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <Globe className="w-6 h-6 text-[#00A878]" />
                <p className="text-3xl font-bold text-[#1E3A5F]">50+</p>
              </div>
              <p className="text-sm text-slate-600 font-medium">Pays participants</p>
            </motion.div>

            {/* Badge Bénin */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 via-yellow-500 to-red-500 rounded-2xl p-6 shadow-2xl"
            >
              <div className="text-4xl mb-2">🇧🇯</div>
              <p className="text-white font-bold text-lg">Bénin</p>
            </motion.div>
          </motion.div>

          {/* Colonne droite - Contenu */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 leading-tight">
              Représentez le Bénin sur la scène mondiale de l'IA
            </h3>
            <p className="text-lg text-blue-100/90 mb-8 leading-relaxed">
              L'hôte principal de l'IOAI 2026 sera l'Université Mohamed bin Zayed d'Intelligence 
              Artificielle (MBZUAI), une institution de niveau supérieur dédiée à l'avancement de 
              l'intelligence artificielle, située à Abu Dhabi.
            </p>

            {/* Informations clés */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Calendar className="w-5 h-5 text-[#00E8B4]" />
                  <p className="text-sm text-blue-200 font-medium">Dates</p>
                </div>
                <p className="text-white font-bold text-lg">2-8 Août 2026</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Users className="w-5 h-5 text-[#00E8B4]" />
                  <p className="text-sm text-blue-200 font-medium">Délégation</p>
                </div>
                <p className="text-white font-bold text-lg">4 candidats</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-5 h-5 text-[#00E8B4]" />
                  <p className="text-sm text-blue-200 font-medium">Organisateur</p>
                </div>
                <p className="text-white font-bold text-lg">MBZUAI</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <MapPin className="w-5 h-5 text-[#00E8B4]" />
                  <p className="text-sm text-blue-200 font-medium">Ville hôte</p>
                </div>
                <p className="text-white font-bold text-lg">Abu Dhabi</p>
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <Link to={createPageUrl('Inscription')}>
                <Button
                  size="lg"
                  className="bg-white text-[#1E3A5F] hover:bg-blue-50 px-8 py-6 text-lg rounded-xl shadow-lg font-semibold transition-all duration-300"
                >
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Edition2026')}>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/10 px-8 py-6 text-lg rounded-xl backdrop-blur-sm font-semibold"
                >
                  En savoir plus
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}