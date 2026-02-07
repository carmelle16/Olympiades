import React from 'react';
import { motion } from 'framer-motion';
import { getEditions } from '@/api/supabaseClient';
import { useQuery } from '@tanstack/react-query';
import { Trophy, Medal, Users, MapPin, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const defaultEditions = [
  {
    id: 1,
    year: 2025,
    location: "Pékin, Chine",
    participants_count: 4,
    gold_medals: 0,
    silver_medals: 1,
    bronze_medals: 2,
    honorable_mentions: 1,
    highlights: "Première participation officielle du Bénin avec d'excellents résultats pour une première.",
    image_url: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=800&h=500&fit=crop"
  },
  {
    id: 2,
    year: 2024,
    location: "Sofia, Bulgarie",
    participants_count: 4,
    gold_medals: 0,
    silver_medals: 0,
    bronze_medals: 1,
    honorable_mentions: 2,
    highlights: "Édition inaugurale de l'IOAI - le Bénin fait partie des pays pionniers.",
    image_url: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?w=800&h=500&fit=crop"
  }
];

export default function Editions() {
  const { data: editions = [] } = useQuery({
    queryKey: ['editions'],
    queryFn: getEditions,
    initialData: [],
  });

  const displayEditions = editions.length > 0 ? editions : defaultEditions;

  const getTotalMedals = (edition) => {
    return (edition.gold_medals || 0) + (edition.silver_medals || 0) + (edition.bronze_medals || 0);
  };

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-br from-[#0A1628] via-[#1E3A5F] to-[#2D5A87] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
              Notre parcours
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Bilan des éditions passées
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Découvrez les performances du Bénin aux différentes éditions 
              de l'Olympiade Internationale d'Intelligence Artificielle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats overview */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-yellow-100 rounded-xl mb-4">
                <Trophy className="w-8 h-8 text-yellow-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">2</p>
              <p className="text-slate-600">Éditions</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-cyan-100 rounded-xl mb-4">
                <Medal className="w-8 h-8 text-cyan-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">4</p>
              <p className="text-slate-600">Médailles</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-green-100 rounded-xl mb-4">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">8</p>
              <p className="text-slate-600">Participants</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex p-3 bg-purple-100 rounded-xl mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <p className="text-3xl font-bold text-slate-900">2</p>
              <p className="text-slate-600">Pays visités</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Editions list */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="space-y-12">
            {displayEditions.map((edition, index) => (
              <motion.div
                key={edition.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative h-64 lg:h-auto">
                    <img 
                      src={edition.image_url || "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&h=500&fit=crop"}
                      alt={`IOAI ${edition.year}`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent lg:hidden" />
                    <div className="absolute top-6 left-6 lg:hidden">
                      <span className="text-4xl font-bold text-white">{edition.year}</span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12">
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-4xl font-bold text-slate-900 hidden lg:block">{edition.year}</span>
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-5 h-5 text-cyan-500" />
                        <span>{edition.location}</span>
                      </div>
                    </div>

                    <p className="text-slate-600 mb-8 leading-relaxed">
                      {edition.highlights}
                    </p>

                    {/* Medals */}
                    <div className="flex flex-wrap gap-4 mb-8">
                      {edition.gold_medals > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-yellow-50 rounded-full">
                          <div className="w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-yellow-900">🥇</span>
                          </div>
                          <span className="font-semibold text-yellow-800">{edition.gold_medals} Or</span>
                        </div>
                      )}
                      {edition.silver_medals > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full">
                          <div className="w-6 h-6 bg-slate-400 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-white">🥈</span>
                          </div>
                          <span className="font-semibold text-slate-700">{edition.silver_medals} Argent</span>
                        </div>
                      )}
                      {edition.bronze_medals > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-orange-50 rounded-full">
                          <div className="w-6 h-6 bg-orange-400 rounded-full flex items-center justify-center">
                            <span className="text-xs font-bold text-orange-900">🥉</span>
                          </div>
                          <span className="font-semibold text-orange-800">{edition.bronze_medals} Bronze</span>
                        </div>
                      )}
                      {edition.honorable_mentions > 0 && (
                        <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                          <span className="font-semibold text-blue-700">{edition.honorable_mentions} Mention(s)</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-slate-500">
                      <Users className="w-4 h-4" />
                      <span>{edition.participants_count} candidats béninois</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA for 2026 */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <span className="inline-block px-4 py-2 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium mb-6">
              Édition 2026
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Participez à la prochaine édition !
            </h2>
            <p className="text-lg text-blue-100/80 mb-8">
              Abu Dhabi, Émirats Arabes Unis - Août 2026
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Edition2026')}>
                <Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-blue-50 rounded-xl w-full sm:w-auto">
                  En savoir plus
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Inscription')}>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 rounded-xl w-full sm:w-auto">
                  S'inscrire
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}