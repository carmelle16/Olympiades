import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Users, Trophy, BookOpen, 
  CheckCircle, ArrowRight, Clock, Brain, Zap 
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const timeline = [
  {
    step: 1,
    title: "Inscription en ligne",
    description: "Créez votre compte et complétez votre profil avec vos informations personnelles et scolaires.",
    icon: BookOpen,
    duration: "Janvier - Février"
  },
  {
    step: 2,
    title: "QCM de présélection",
    description: "Passez un test de logique et de raisonnement chronométré pour évaluer vos aptitudes.",
    icon: Brain,
    duration: "Mars"
  },
  {
    step: 3,
    title: "Formation intensive",
    description: "Les candidats présélectionnés suivent une formation approfondie en IA et machine learning.",
    icon: Zap,
    duration: "Avril - Mai"
  },
  {
    step: 4,
    title: "Sélection finale",
    description: "Une évaluation pratique pour sélectionner les 4 candidats qui représenteront le Bénin.",
    icon: Trophy,
    duration: "Juin"
  }
];

const eligibility = [
  "Être de nationalité béninoise",
  "Avoir moins de 20 ans au 1er juillet de l'année de la compétition",
  "Être inscrit dans un établissement secondaire au Bénin",
  "Avoir un niveau satisfaisant en mathématiques et sciences",
  "Maîtriser le français et/ou l'anglais"
];

export default function About() {
  return (
    <div className="pt-20">
      {/* Hero section */}
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
              À propos du programme
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Les Olympiades d'Intelligence Artificielle du Bénin
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Un programme national d'excellence pour identifier, former et accompagner 
              les meilleurs talents béninois dans le domaine de l'intelligence artificielle.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-4 block">
                Notre mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Préparer la jeunesse béninoise aux défis de l'IA
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                L'Olympiade d'Intelligence Artificielle du Bénin (OIAB) est le programme 
                officiel de sélection et de préparation des candidats béninois pour 
                l'Olympiade Internationale d'Intelligence Artificielle (IOAI).
              </p>
              <p className="text-slate-600 leading-relaxed mb-8">
                Organisée par le Ministère du Numérique en partenariat avec les universités 
                et le secteur privé, l'OIAB vise à démocratiser l'accès aux compétences en IA 
                et à positionner le Bénin comme un acteur majeur de l'innovation technologique en Afrique.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-cyan-100 rounded-lg">
                    <Target className="w-5 h-5 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Excellence</h3>
                    <p className="text-sm text-slate-600">Viser les plus hauts standards internationaux</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <Users className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Inclusion</h3>
                    <p className="text-sm text-slate-600">Accessible à tous les élèves du pays</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop"
                  alt="Étudiants en formation"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 shadow-xl">
                <p className="text-4xl font-bold text-white">500+</p>
                <p className="text-cyan-100">Candidats formés</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-4 block">
              Processus de sélection
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Comment participer ?
            </h2>
            <p className="text-lg text-slate-600">
              Le parcours de sélection se déroule en plusieurs étapes pour identifier 
              les candidats les plus prometteurs.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex gap-6 pb-12 last:pb-0"
              >
                {/* Timeline line */}
                {index < timeline.length - 1 && (
                  <div className="absolute left-6 top-14 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-blue-500" />
                )}
                
                {/* Step indicator */}
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">
                      Étape {item.step}
                    </span>
                    <span className="text-xs text-slate-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {item.duration}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Eligibility section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=600&fit=crop"
                  alt="Étudiants"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-4 block">
                Critères d'éligibilité
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Qui peut participer ?
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Les Olympiades sont ouvertes à tous les élèves du secondaire 
                répondant aux critères suivants :
              </p>

              <ul className="space-y-4 mb-8">
                {eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>

              <Link to={createPageUrl('Inscription')}>
                <Button size="lg" className="bg-[#1E3A5F] hover:bg-[#2D5A87] text-white rounded-xl">
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Des questions ?
            </h2>
            <p className="text-lg text-blue-100/80 mb-8">
              Notre équipe est disponible pour répondre à toutes vos questions 
              concernant le programme et le processus de sélection.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button size="lg" className="bg-white text-[#1E3A5F] hover:bg-blue-50 rounded-xl">
                Nous contacter
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}