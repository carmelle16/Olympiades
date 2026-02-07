import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { getPublishedNews } from '@/api/supabaseClient';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Calendar, Search, ArrowRight } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const defaultNews = [
  {
    id: 1,
    title: "Ouverture des inscriptions pour l'édition 2026",
    excerpt: "Les inscriptions pour les Olympiades d'IA du Bénin 2026 sont officiellement ouvertes. Tous les élèves du secondaire peuvent postuler.",
    content: "Les inscriptions pour les Olympiades d'Intelligence Artificielle du Bénin 2026 sont officiellement ouvertes...",
    image_url: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=500&fit=crop",
    category: "annonce",
    created_at: "2026-01-15"
  },
  {
    id: 2,
    title: "Partenariat stratégique avec l'Université d'Abomey-Calavi",
    excerpt: "Un nouveau partenariat pour renforcer la formation des candidats aux Olympiades d'IA.",
    content: "L'OIAB et l'Université d'Abomey-Calavi ont signé un partenariat stratégique...",
    image_url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop",
    category: "partenariat",
    created_at: "2026-01-10"
  },
  {
    id: 3,
    title: "Retour sur l'IOAI 2025 en Chine",
    excerpt: "La délégation béninoise revient avec des résultats encourageants de la 2ème édition de l'IOAI.",
    content: "La délégation béninoise a participé avec succès à l'IOAI 2025...",
    image_url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop",
    category: "resultats",
    created_at: "2025-08-20"
  },
  {
    id: 4,
    title: "Lancement du programme de mentorat",
    excerpt: "Un nouveau programme de mentorat pour accompagner les candidats tout au long de leur préparation.",
    content: "Nous lançons un programme de mentorat innovant...",
    image_url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop",
    category: "annonce",
    created_at: "2025-09-05"
  },
  {
    id: 5,
    title: "Webinaire : Introduction au Machine Learning",
    excerpt: "Participez à notre webinaire gratuit sur les bases du Machine Learning.",
    content: "Rejoignez-nous pour un webinaire interactif...",
    image_url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop",
    category: "evenement",
    created_at: "2025-10-15"
  },
  {
    id: 6,
    title: "Résultats de la présélection 2025",
    excerpt: "Découvrez les candidats présélectionnés pour la formation intensive.",
    content: "Après évaluation des candidatures...",
    image_url: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=500&fit=crop",
    category: "resultats",
    created_at: "2025-04-20"
  }
];

const categories = [
  { value: 'all', label: 'Toutes' },
  { value: 'annonce', label: 'Annonces' },
  { value: 'resultats', label: 'Résultats' },
  { value: 'evenement', label: 'Événements' },
  { value: 'partenariat', label: 'Partenariats' },
];

const categoryColors = {
  annonce: "bg-cyan-100 text-cyan-700",
  resultats: "bg-green-100 text-green-700",
  evenement: "bg-purple-100 text-purple-700",
  partenariat: "bg-yellow-100 text-yellow-700",
};

export default function Actualites() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedNews, setSelectedNews] = useState(null);

  const { data: news = [] } = useQuery({
    queryKey: ['news'],
    queryFn: getPublishedNews,
    initialData: [],
  });

  const displayNews = news.length > 0 ? news : defaultNews;

  const filteredNews = displayNews.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         item.excerpt?.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  if (selectedNews) {
    return (
      <div className="pt-20">
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <Button 
              variant="ghost" 
              onClick={() => setSelectedNews(null)}
              className="mb-8"
            >
              ← Retour aux actualités
            </Button>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[selectedNews.category] || 'bg-slate-100 text-slate-700'}`}>
                  {selectedNews.category}
                </span>
                <span className="text-sm text-slate-500 flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(selectedNews.created_at), 'dd MMMM yyyy', { locale: fr })}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
                {selectedNews.title}
              </h1>

              <div className="rounded-2xl overflow-hidden mb-8">
                <img 
                  src={selectedNews.image_url || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=400&fit=crop"}
                  alt={selectedNews.title}
                  className="w-full h-auto"
                />
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-slate-600 leading-relaxed">
                  {selectedNews.content || selectedNews.excerpt}
                </p>
              </div>
            </motion.div>
          </div>
        </article>
      </div>
    );
  }

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
              Actualités
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Dernières nouvelles
            </h1>
            <p className="text-lg text-blue-100/80 leading-relaxed">
              Restez informé des dernières actualités des Olympiades d'IA du Bénin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-20 z-30 backdrop-blur-md bg-white/95">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-80">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <Input
                type="text"
                placeholder="Rechercher..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? 'bg-[#1E3A5F] text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News grid */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6">
          {filteredNews.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-slate-500 text-lg">Aucune actualité trouvée.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredNews.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-slate-100 cursor-pointer"
                  onClick={() => setSelectedNews(item)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={item.image_url || "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[item.category] || 'bg-slate-100 text-slate-700'}`}>
                        {item.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-slate-500 mb-3">
                      <Calendar className="w-4 h-4" />
                      <span>
                        {format(new Date(item.created_at), 'dd MMMM yyyy', { locale: fr })}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2 line-clamp-2 group-hover:text-cyan-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <span className="inline-flex items-center text-cyan-600 text-sm font-medium group-hover:gap-2 transition-all">
                      Lire la suite
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}