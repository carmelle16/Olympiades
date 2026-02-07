import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Brain, ChevronDown, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Button } from "@/components/ui/button";

const navigation = [
  { name: 'Accueil', page: 'Home' },
  { name: 'À propos', page: 'About' },
  { 
    name: 'Éditions', 
    page: 'Editions',
    submenu: [
      { name: 'Toutes les éditions', page: 'Editions' },
      { name: 'Édition 2026', page: 'Edition2026' },
    ]
  },
  { name: 'Actualités', page: 'Actualites' },
  { name: 'Contact', page: 'Contact' },
];

export default function Layout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenSubmenu(null);
  }, [location]);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl('Home')} className="flex items-center gap-3">
              <div className={`p-2 rounded-xl ${isScrolled ? 'bg-[#1E3A5F]' : 'bg-white/10 backdrop-blur-sm'}`}>
                <Brain className={`w-8 h-8 ${isScrolled ? 'text-white' : 'text-cyan-400'}`} />
              </div>
              <div>
                <span className={`font-bold text-lg ${isScrolled ? 'text-[#1E3A5F]' : 'text-white'}`}>
                  OIAB
                </span>
                <p className={`text-xs ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>
                  Olympiades IA Bénin
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.submenu ? (
                    <button
                      className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isScrolled 
                          ? 'text-slate-700 hover:bg-slate-100' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                  ) : (
                    <Link
                      to={createPageUrl(item.page)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isScrolled 
                          ? 'text-slate-700 hover:bg-slate-100' 
                          : 'text-white/90 hover:bg-white/10'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                  
                  {/* Submenu */}
                  {item.submenu && (
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white rounded-xl shadow-xl border border-slate-100 py-2 min-w-[200px]">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            to={createPageUrl(subItem.page)}
                            className="block px-4 py-2 text-sm text-slate-700 hover:bg-slate-50 hover:text-cyan-600"
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to={createPageUrl('Inscription')}>
                <Button 
                  className={`rounded-xl px-6 ${
                    isScrolled 
                      ? 'bg-[#1E3A5F] hover:bg-[#2D5A87] text-white' 
                      : 'bg-white text-[#1E3A5F] hover:bg-blue-50'
                  }`}
                >
                  S'inscrire
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`lg:hidden p-2 rounded-lg ${
                isScrolled ? 'text-slate-700' : 'text-white'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t border-slate-100"
            >
              <nav className="container mx-auto px-4 py-4">
                {navigation.map((item) => (
                  <div key={item.name}>
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setOpenSubmenu(openSubmenu === item.name ? null : item.name)}
                          className="flex items-center justify-between w-full px-4 py-3 text-slate-700 font-medium"
                        >
                          {item.name}
                          <ChevronDown className={`w-4 h-4 transition-transform ${openSubmenu === item.name ? 'rotate-180' : ''}`} />
                        </button>
                        <AnimatePresence>
                          {openSubmenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              className="pl-4"
                            >
                              {item.submenu.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={createPageUrl(subItem.page)}
                                  className="block px-4 py-2 text-slate-600 hover:text-cyan-600"
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={createPageUrl(item.page)}
                        className="block px-4 py-3 text-slate-700 font-medium hover:text-cyan-600"
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
                <div className="pt-4 px-4">
                  <Link to={createPageUrl('Inscription')}>
                    <Button className="w-full bg-[#1E3A5F] hover:bg-[#2D5A87] text-white rounded-xl">
                      S'inscrire
                    </Button>
                  </Link>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main>
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A1628] text-white">
        <div className="container mx-auto px-4 sm:px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link to={createPageUrl('Home')} className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-cyan-500/20 rounded-xl">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <div>
                  <span className="font-bold text-lg text-white">OIAB</span>
                  <p className="text-xs text-slate-400">Olympiades IA Bénin</p>
                </div>
              </Link>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Les Olympiades d'Intelligence Artificielle du Bénin sélectionnent 
                et forment les meilleurs talents pour représenter notre pays 
                aux compétitions internationales.
              </p>
              <div className="flex gap-3">
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Liens rapides</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('Home')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Accueil
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('About')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    À propos
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Edition2026')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Édition 2026
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Actualites')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Actualités
                  </Link>
                </li>
              </ul>
            </div>

            {/* Participation */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Participer</h3>
              <ul className="space-y-3">
                <li>
                  <Link to={createPageUrl('Inscription')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    S'inscrire
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('About')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Critères d'éligibilité
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('About')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    Processus de sélection
                  </Link>
                </li>
                <li>
                  <Link to={createPageUrl('Contact')} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="font-semibold text-lg mb-6">Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                  <span className="text-slate-400 text-sm">
                    Cotonou, Bénin
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="mailto:contact@oiab.bj" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    contact@oiab.bj
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <a href="tel:+22900000000" className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">
                    +229 00 00 00 00
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-slate-500 text-sm">
                © 2026 Olympiades d'Intelligence Artificielle du Bénin. Tous droits réservés.
              </p>
              <div className="flex gap-6">
                <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">
                  Politique de confidentialité
                </a>
                <a href="#" className="text-slate-500 hover:text-slate-400 text-sm">
                  Mentions légales
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}