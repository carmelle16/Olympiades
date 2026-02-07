import React from 'react';
import { motion } from 'framer-motion';
import { Target, Users, Trophy, Lightbulb } from 'lucide-react';

const objectives = [
  {
    icon: Target,
    title: "Excellence",
    description: "Positionner le Bénin comme acteur majeur des compétitions internationales d'IA",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Users,
    title: "Accessibilité",
    description: "Démocratiser l'accès aux opportunités de formation en IA pour tous les élèves béninois",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Trophy,
    title: "Talent",
    description: "Créer un vivier de talents identifiés et accompagnés sur le long terme",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Former la prochaine génération de leaders dans le domaine de l'intelligence artificielle",
    color: "from-purple-500 to-pink-500"
  }
];

export default function AboutSection() {
  return (
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
            À propos du programme
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
            Les Olympiades d'IA du Bénin
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            Les Olympiades d'Intelligence Artificielle du Bénin constituent le programme national 
            de sélection et de formation des meilleurs talents du pays dans le domaine de l'IA, 
            en vue de leur participation aux compétitions internationales.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {objectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="relative bg-slate-50 rounded-2xl p-8 h-full border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100 transition-all duration-500">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${item.color} mb-6`}>
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}