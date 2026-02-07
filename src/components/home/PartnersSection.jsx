import React from 'react';
import { motion } from 'framer-motion';

const defaultPartners = [
  { name: "Ministère du Numérique", tier: "institutional" },
  { name: "Université d'Abomey-Calavi", tier: "institutional" },
  { name: "EPITECH Bénin", tier: "gold" },
  { name: "IOAI", tier: "diamond" },
  { name: "UNESCO", tier: "platinum" },
];

export default function PartnersSection({ partners = defaultPartners }) {
  const displayPartners = partners.length > 0 ? partners : defaultPartners;

  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-2 block">
            Nos partenaires
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
            Ils nous font confiance
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
        >
          {displayPartners.map((partner, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="flex items-center justify-center p-4 bg-slate-50 rounded-xl min-w-[150px] h-20 hover:bg-slate-100 transition-colors"
            >
              {partner.logo_url ? (
                <img 
                  src={partner.logo_url} 
                  alt={partner.name}
                  className="max-h-12 max-w-[120px] object-contain grayscale hover:grayscale-0 transition-all"
                />
              ) : (
                <span className="text-slate-700 font-medium text-center text-sm">
                  {partner.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}