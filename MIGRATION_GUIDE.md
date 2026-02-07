# 🚀 Guide de Migration Supabase pour Olympiades

## ✅ Checklist de Migration

### 1. Configuration Supabase (5 minutes)

#### a. Créer un projet Supabase
- [ ] Aller sur https://supabase.com
- [ ] Se connecter / créer un compte
- [ ] Créer un nouveau projet "olympiades"
- [ ] Noter le mot de passe de la base de données

#### b. Récupérer les clés API
- [ ] Aller dans Settings → API
- [ ] Copier **Project URL** 
- [ ] Copier **anon public key**

#### c. Créer les tables
- [ ] Aller dans SQL Editor
- [ ] Créer une nouvelle requête
- [ ] Copier-coller le contenu de `supabase_migration.sql`
- [ ] Exécuter la requête (bouton RUN)
- [ ] Vérifier que les 3 tables sont créées (Table Editor)

---

### 2. Installation des dépendances (2 minutes)

```bash
# Installer Supabase
npm install @supabase/supabase-js

# Désinstaller Base44
npm uninstall @base44/sdk @base44/vite-plugin
```

---

### 3. Configuration du projet (3 minutes)

#### a. Créer le fichier `.env`
Créez `.env` à la racine du projet :

```env
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

⚠️ **Remplacez par vos vraies valeurs !**

#### b. Ajouter `.env` au `.gitignore`
Assurez-vous que `.env` est dans votre `.gitignore` :

```
.env
.env.local
```

---

### 4. Mise à jour des fichiers (5 minutes)

#### a. Remplacer `vite.config.js`
Remplacez tout le contenu par celui du fichier `vite.config.js` fourni

#### b. Créer le client Supabase
Copiez `supabaseClient.js` dans `src/api/supabaseClient.js`

#### c. Supprimer les anciens fichiers
```bash
rm src/api/base44Client.js
rm src/lib/app-params.js
```

---

### 5. Mettre à jour vos composants (variable)

#### Avant (avec Base44) :
```javascript
import { base44 } from '@/api/base44Client';

const fetchNews = async () => {
  const response = await base44.entities.News.list();
  setNews(response.data);
};
```

#### Après (avec Supabase) :
```javascript
import { getPublishedNews } from '@/api/supabaseClient';

const fetchNews = async () => {
  const data = await getPublishedNews();
  setNews(data);
};
```

---

### 6. Exemples d'utilisation

#### Récupérer les actualités
```javascript
import { supabase, getPublishedNews } from '@/api/supabaseClient';

// Méthode 1 : Avec helper
const news = await getPublishedNews();

// Méthode 2 : Requête personnalisée
const { data, error } = await supabase
  .from('news')
  .select('*')
  .eq('category', 'annonce')
  .order('created_at', { ascending: false })
  .limit(5);
```

#### Récupérer les éditions
```javascript
import { getEditions, getCurrentEdition } from '@/api/supabaseClient';

// Toutes les éditions
const editions = await getEditions();

// Édition courante
const current = await getCurrentEdition();
```

#### Récupérer les partenaires
```javascript
import { getPartners, getPartnersByTier } from '@/api/supabaseClient';

// Tous les partenaires
const partners = await getPartners();

// Partenaires Gold uniquement
const goldPartners = await getPartnersByTier('gold');
```

---

### 7. Fichiers à mettre à jour dans votre projet

Cherchez tous les fichiers qui importent `base44Client` :

```bash
grep -r "from '@/api/base44Client'" src/
grep -r "from '@/integrations" src/
```

Pour chaque fichier trouvé :
1. Remplacer l'import de `base44Client` par `supabaseClient`
2. Adapter les requêtes (voir exemples ci-dessus)

---

## 🎯 Fichiers principaux à vérifier

- `src/pages/Home.jsx` - Page d'accueil avec actualités
- `src/components/home/NewsSection.jsx` - Section actualités
- Tout fichier qui affiche des éditions ou partenaires

---

## 🆘 En cas de problème

### Erreur : "Invalid API key"
→ Vérifiez que vos clés dans `.env` sont correctes
→ Redémarrez le serveur : `npm run dev`

### Erreur : "relation does not exist"
→ Les tables n'ont pas été créées dans Supabase
→ Retournez dans SQL Editor et exécutez `supabase_migration.sql`

### Erreur : "Row Level Security policy violation"
→ Les policies RLS ne sont pas activées
→ Le script SQL les active automatiquement

---

## 📚 Documentation Supabase

- Guide JavaScript : https://supabase.com/docs/reference/javascript/introduction
- Guide React : https://supabase.com/docs/guides/getting-started/quickstarts/reactjs

---

## ✨ Prochaines étapes (optionnel)

Une fois la migration terminée, vous pouvez ajouter :
- 🔐 Authentification (login admin)
- 📤 Upload d'images (Supabase Storage)
- ⚡ Temps réel (actualités en direct)
- 🔍 Recherche full-text

Dites-moi si vous voulez que je vous aide avec ces fonctionnalités !