import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ Variables d\'environnement Supabase manquantes !');
  console.error('Assurez-vous que VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY sont définis dans votre fichier .env');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper functions pour faciliter l'utilisation

/**
 * Récupérer toutes les actualités publiées
 */
export const getPublishedNews = async () => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

/**
 * Récupérer une actualité par ID
 */
export const getNewsById = async (id) => {
  const { data, error } = await supabase
    .from('news')
    .select('*')
    .eq('id', id)
    .single();
  
  if (error) throw error;
  return data;
};

/**
 * Récupérer toutes les éditions
 */
export const getEditions = async () => {
  const { data, error } = await supabase
    .from('editions')
    .select('*')
    .order('year', { ascending: false });
  
  if (error) throw error;
  return data;
};

/**
 * Récupérer l'édition courante
 */
export const getCurrentEdition = async () => {
  const { data, error } = await supabase
    .from('editions')
    .select('*')
    .eq('is_current', true)
    .single();
  
  if (error) throw error;
  return data;
};

/**
 * Récupérer tous les partenaires
 */
export const getPartners = async () => {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .order('tier', { ascending: true });
  
  if (error) throw error;
  return data;
};

/**
 * Récupérer les partenaires par tier
 */
export const getPartnersByTier = async (tier) => {
  const { data, error } = await supabase
    .from('partners')
    .select('*')
    .eq('tier', tier);
  
  if (error) throw error;
  return data;
};