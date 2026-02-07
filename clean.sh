#!/bin/bash

# Script de nettoyage des fichiers Base44
# Exécutez ce script dans le dossier racine de votre projet

echo "🧹 Nettoyage des fichiers Base44..."

# Supprimer les fichiers Base44
echo "📂 Suppression des fichiers Base44..."
rm -f src/api/base44Client.js
rm -f src/lib/app-params.js

echo "✅ Fichiers Base44 supprimés"

# Chercher les imports Base44 restants
echo ""
echo "🔍 Recherche des imports Base44 restants..."
echo ""

grep -r "from '@/api/base44Client'" src/ 2>/dev/null || echo "✅ Aucun import base44Client trouvé"
grep -r "from '@/lib/app-params'" src/ 2>/dev/null || echo "✅ Aucun import app-params trouvé"
grep -r "@base44" src/ 2>/dev/null || echo "✅ Aucune référence @base44 trouvée"

echo ""
echo "✨ Nettoyage terminé !"
echo ""
echo "📋 Prochaines étapes :"
echo "1. Remplacez src/lib/AuthContext.jsx par le nouveau fichier"
echo "2. Vérifiez qu'il n'y a plus d'erreurs dans les fichiers listés ci-dessus"
echo "3. Redémarrez le serveur : npm run dev"