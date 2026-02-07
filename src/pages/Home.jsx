import React from 'react';
import { supabase } from '@/api/supabaseClient';
import { useQuery } from '@tanstack/react-query';

import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import EditionHighlight from '@/components/home/EditionHighlight';
import NewsSection from '@/components/home/NewsSection';
import CTASection from '@/components/home/CTASection';

export default function Home() {
  const { data: news = [] } = useQuery({
    queryKey: ['news'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('news')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
    initialData: [],
  });

  return (
    <div>
      <HeroSection />
      <AboutSection />
      <EditionHighlight />
      <NewsSection news={news} />
      {/* PartnersSection supprimée */}
      <CTASection />
    </div>
  );
}