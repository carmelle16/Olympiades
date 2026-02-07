import React from 'react';
import { motion } from 'framer-motion';
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const defaultNews = [
  {
    id: 1,
    title: "Ouverture des inscriptions pour l'édition 2026",
    excerpt: "Les inscriptions pour les Olympiades d'IA du Bénin 2026 sont officiellement ouvertes. Tous les élèves du secondaire peuvent postuler.",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
    created_at: "2026-01-15"
  },
  {
    id: 2,
    title: "Partenariat avec l'Université d'Abomey-Calavi",
    excerpt: "Un nouveau partenariat stratégique pour renforcer la formation des candidats aux Olympiades d'IA.",
    image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=600&h=400&fit=crop",
    created_at: "2026-01-10"
  },
  {
    id: 3,
    title: "Retour sur l'IOAI 2025 en Chine",
    excerpt: "La délégation béninoise revient avec des résultats encourageants de la 2ème édition de l'IOAI.",
    image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    created_at: "2025-08-20"
  }
];

export default function NewsSection({ news = defaultNews }) {
  const displayNews = news.length > 0 ? news : defaultNews;

  // Helper pour obtenir la date (gère created_at et created_date)
  const getNewsDate = (item) => {
    return item.created_at || item.created_date;
  };

  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12"
        >
          <div>
            <span className="text-sm font-semibold text-cyan-600 tracking-wider uppercase mb-2 block">
              Actualités
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
              Dernières nouvelles
            </h2>
          </div>
          <Link to={createPageUrl('Actualites')}>
            <Button variant="outline" className="group">
              Toutes les actualités
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayNews.slice(0, 3).map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image_url || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>
                    {format(new Date(getNewsDate(item)), 'dd MMMM yyyy', { locale: fr })}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm line-clamp-3">
                  {item.excerpt}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}