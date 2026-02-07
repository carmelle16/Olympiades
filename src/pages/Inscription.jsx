import React from 'react';
import { motion } from 'framer-motion';
import { 
  ArrowRight, CheckCircle, Calendar, FileText, Brain, 
  Trophy, Clock, AlertCircle
} from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const steps = [
  {
    number: 1,
    title: "Créez votre compte",
    description: "Inscrivez-vous avec votre email et créez votre profil candidat.",
    icon: FileText
  },
  {
    number: 2,
    title: "Complétez votre profil",
    description: "Renseignez vos informations personnelles et scolaires.",
    icon: CheckCircle
  },
  {
    number: 3,
    title: "Téléchargez vos documents",
    description: "Ajoutez vos bulletins scolaires et pièces justificatives.",
    icon: FileText
  },
  {
    number: 4,
    title: "Passez le QCM",
    description: "Participez au test de présélection en ligne.",
    icon: Brain
  }
];

const requirements = [
  "Être de nationalité béninoise",
  "Avoir moins de 20 ans au 1er juillet 2026",
  "Être inscrit dans un établissement secondaire",
  "Avoir de bons résultats en mathématiques et sciences",
  "Disposer d'une adresse email valide"
];

export default function Inscription() {
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
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 text-green-300 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Inscriptions ouvertes
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Inscription aux Olympiades d'IA 2026
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed mb-8">
              Rejoignez le programme et tentez votre chance de représenter 
              le Bénin à l'Olympiade Internationale d'Intelligence Artificielle.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
                <Calendar className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">Date limite : Mars 2026</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">~15 min pour s'inscrire</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process steps */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-4 block">
              Comment ça marche
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Processus d'inscription
            </h2>
            <p className="text-lg text-slate-600">
              Suivez ces étapes simples pour compléter votre inscription.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center text-white font-bold">
                    {step.number}
                  </div>
                  <step.icon className="w-5 h-5 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute -right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300 z-10" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-4 block">
                Avant de commencer
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                Conditions d'éligibilité
              </h2>
              <p className="text-lg text-slate-600 mb-8">
                Assurez-vous de remplir les conditions suivantes avant de vous inscrire :
              </p>

              <ul className="space-y-4">
                {requirements.map((req, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700">{req}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
            >
              <div className="flex items-center gap-3 p-4 bg-amber-50 rounded-xl mb-6">
                <AlertCircle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                <p className="text-sm text-amber-800">
                  <strong>Important :</strong> Préparez vos bulletins scolaires des 3 derniers trimestres en format PDF.
                </p>
              </div>

              <h3 className="text-xl font-semibold text-slate-900 mb-4">Documents requis</h3>
              
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-slate-700">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  <span>Bulletins scolaires (3 derniers trimestres)</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  <span>Photo d'identité récente</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  <span>Copie de l'acte de naissance ou CIP</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700">
                  <FileText className="w-5 h-5 text-cyan-600" />
                  <span>Contact du parent/tuteur (si mineur)</span>
                </li>
              </ul>

              <div className="text-center">
                <p className="text-slate-500 text-sm mb-4">
                  L'espace candidat sera bientôt disponible.
                </p>
                <Button 
                  size="lg" 
                  className="w-full bg-[#1E3A5F] hover:bg-[#2D5A87] text-white rounded-xl"
                  disabled
                >
                  Créer mon compte candidat
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <p className="text-xs text-slate-400 mt-3">
                  Ouverture prochaine - Restez informé via nos actualités
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline reminder */}
      <section className="py-24 bg-gradient-to-br from-[#1E3A5F] to-[#2D5A87]">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Prêt à relever le défi ?
            </h2>
            <p className="text-lg text-blue-100/80 mb-8">
              L'aventure commence ici. Rejoignez des centaines d'élèves talentueux 
              et tentez de représenter le Bénin à Abu Dhabi en août 2026.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('About')}>
                <Button 
                  size="lg" 
                  className="bg-white text-[#1E3A5F] hover:bg-blue-50 rounded-xl w-full sm:w-auto"
                >
                  En savoir plus sur le programme
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 rounded-xl w-full sm:w-auto"
                >
                  Poser une question
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

