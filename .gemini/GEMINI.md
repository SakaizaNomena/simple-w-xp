# Instructions pour GEMINI

## Objectif du Projet

Créer un portfolio web avec une interface nostalgique Windows XP complète et interactive. Le site doit simuler un véritable environnement Windows XP avec démarrage, bureau, icônes cliquables et fenêtres modales.

---

## Stack Technique Requise

- **Framework** : React avec TypeScript
- **Styling** : Tailwind CSS (utiliser uniquement les classes core)
- **Effets 3D** : CSS 3D Transforms pour les animations de fenêtres
- **Icônes** : Lucide React
- **Build Tool** : Vite

---

## Flux d'Expérience Utilisateur

### 1. Écran de Démarrage Windows XP
Au chargement de la page :
- **Logo Windows XP** avec le drapeau animé
- **Barre de progression** authentique Windows XP (animation fluide)
- **Texte "Windows XP"** et "Chargement..."
- **Fond noir** caractéristique
- Durée : 3-5 secondes

### 2. Bureau Windows XP
Après le chargement, afficher un bureau XP complet :

#### Éléments du Bureau
- **Fond d'écran Bliss** (bleu avec collines vertes) ou fond XP classique
- **Icônes sur le bureau** (alignées à gauche) :
  - 📄 **À Propos** (icône document/notepad)
  - 💼 **Compétences** (icône dossier jaune)
  - 🏢 **Expériences** (icône dossier jaune)
  - 🎓 **Formations** (icône dossier jaune)
  - 🗑️ **Corbeille** (optionnel, pour l'authenticité)
  - 💻 **Poste de travail** (optionnel)

#### Barre des Tâches (en bas)
- **Bouton Démarrer** (vert avec logo Windows)
- **Zone de lancement rapide** (petites icônes)
- **Zone des fenêtres ouvertes** (affiche les fenêtres actives)
- **Horloge système** (heure réelle)
- **Zone de notification** (icônes système)

### 3. Modal "À Propos" - Ouverture Automatique
**AU DÉMARRAGE DU BUREAU** : La fenêtre "À Propos" s'ouvre automatiquement avec une animation 3D spectaculaire.

#### Contenu de la Modal "À Propos"
```
╔════════════════════════════════════╗
║ À Propos - Sahaza Nomena      ▭ ▢ ✕║
╠════════════════════════════════════╣
║                                    ║
║   SAHAZA NOMENA                    ║
║   (text-3xl ou text-4xl)           ║
║                                    ║
║   📞 +261336228113                 ║
║   📧 [email extrait du CV]         ║
║   📍 Madagascar                    ║
║                                    ║
║   ───────────────────────────      ║
║                                    ║
║   Développeur passionné et         ║
║   autodidacte, je m'adapte         ║
║   rapidement aux nouvelles         ║
║   technologies. J'utilise des      ║
║   outils d'IA comme Claude pour    ║
║   optimiser la productivité et     ║
║   accélérer l'innovation.          ║
║                                    ║
║             [Fermer]               ║
╚════════════════════════════════════╝
```

#### Style de la Modal
- **Barre de titre** : Bleu Windows XP (#0058C6)
- **Boutons** : Minimiser, Maximiser/Restaurer, Fermer (fonctionnels)
- **Bordure** : Gris XP classique avec relief 3D
- **Fond** : Blanc ou gris clair (#ECE9D8)
- **Police** : Tahoma, Verdana (style Windows)

---

## Fenêtres Interactives pour Chaque Section

### Comportement des Icônes
Quand l'utilisateur **double-clique** sur une icône du bureau :
- Animation 3D d'ouverture de fenêtre (zoom + fade)
- La fenêtre s'ouvre au centre ou légèrement décalée
- La fenêtre apparaît dans la barre des tâches
- Son au clic (optionnel, son Windows XP)

### Types de Fenêtres

#### Option 1 : Style Explorateur Windows (RECOMMANDÉ)
Afficher le contenu comme dans un explorateur de fichiers :
- **Barre latérale gauche** : Navigation/arborescence
- **Zone principale** : Contenu (liste ou grille)
- **Barre d'adresse** : Chemin du dossier
- **Barre d'outils** : Boutons Précédent/Suivant/Actualiser

#### Option 2 : Style Document Word/Notepad
Afficher le contenu comme un document :
- **Barre de menu** : Fichier, Édition, Affichage...
- **Barre d'outils** : Icônes de formatage
- **Zone de contenu** : Texte formaté et scrollable

**Conseil** : Utilise un mélange selon la section
- **Compétences** : Explorateur avec icônes de fichiers
- **Expériences** : Document style CV/Word
- **Formations** : Document style certificat/diplôme

---

## Contenu des Fenêtres par Section

### Fenêtre "Compétences"

#### Affichage en Explorateur de Fichiers
Structure en dossiers :
```
📁 Compétences
  ├── 📁 Langages de programmation
  │   ├── 📄 TypeScript
  │   ├── 📄 PHP
  │   ├── 📄 Python
  │   ├── 📄 HTML/CSS
  │   ├── 📄 JavaScript
  │   └── 📄 SQL
  ├── 📁 Frameworks & Librairies
  │   ├── 📄 React
  │   ├── 📄 React Native
  │   ├── 📄 Symfony
  │   ├── 📄 FastAPI
  │   ├── 📄 Tailwind CSS
  │   ├── 📄 Vue.js
  │   ├── 📄 Next.js
  │   └── ...
  ├── 📁 Bases de données
  ├── 📁 Outils & Technologies
  ├── 📁 DevOps
  └── 📁 Conception
```

**Présentation visuelle** :
- **Vue en liste** OU **Vue en grandes icônes** (toggle)
- Icônes de fichiers/dossiers Windows XP authentiques
- Double-clic sur dossier = ouvre sous-dossier
- Hover effect sur les items
- Barre de défilement XP si nécessaire

#### Alternative : Vue Grille Moderne dans Fenêtre
- Cards avec badges colorés
- Icônes modernes (Lucide React)
- Grille responsive dans la fenêtre
- Effet hover élégant

---

### Fenêtre "Expériences"

#### Affichage Style Document/Timeline

**Format CV structuré** :
```
═══════════════════════════════════
EXPÉRIENCES PROFESSIONNELLES
═══════════════════════════════════

┌─────────────────────────────────┐
│ Développeur Front-end           │
│ Bifora (Full remote)            │
│ 📅 Décembre 2024 - Présent      │
├─────────────────────────────────┤
│ Développement front-end sur le  │
│ projet Izolearn.                │
│                                 │
│ 🛠️ Technologies :               │
│ Next.js • Tailwind CSS •        │
│ Zustand • React Query •         │
│ TypeScript                      │
└─────────────────────────────────┘

[Même structure pour les 3 autres expériences]
```

**Présentation visuelle** :
- Timeline verticale avec ligne décorative à gauche
- Cards avec ombre légère et bordure
- Icônes d'entreprise (building, briefcase)
- Tags/badges pour les technologies
- Couleurs alternées pour différencier
- Scrollable dans la fenêtre

---

### Fenêtre "Formations"

#### Affichage Style Certificat/Document

```
╔═════════════════════════════════╗
║       FORMATIONS                ║
╚═════════════════════════════════╝

┌─────────────────────────────────┐
│ 🎓 Master                       │
│ Génie logiciel et Base de      │
│ Données                         │
├─────────────────────────────────┤
│ 🏛️ Centre National de télé-     │
│    enseignement de Madagascar   │
│ 📅 2019                         │
├─────────────────────────────────┤
│ Détails :                       │
│ • Développement de logiciels    │
│ • Gestion de bases de données   │
│ • Administration serveurs       │
│   (Linux, Windows)              │
│ • Projets web et infrastructure │
└─────────────────────────────────┘

[Même structure pour la Licence]
```

**Présentation visuelle** :
- Cards élégantes avec effet diplôme
- Icônes académiques (graduation cap, book)
- Layout propre et aéré
- Fond légèrement coloré pour chaque card

---

## Animations et Effets 3D des Fenêtres

### Animations d'Ouverture
- **Zoom + Fade In** : La fenêtre apparaît du centre avec un zoom
- **Slide from bottom** : Monte depuis la barre des tâches
- **3D Flip** : Effet de carte qui se retourne
- **Elastic bounce** : Rebond léger à l'arrivée

### Animations de Fermeture
- **Minimize** : La fenêtre se réduit vers la barre des tâches avec animation fluide
- **Close** : Fade out + zoom out vers le centre
- **3D Collapse** : Repli en 3D

### Animations de Maximiser/Restaurer
- **Expand** : Extension fluide vers plein écran
- **Restore** : Retour à la taille normale avec animation

### Interactions
- **Drag & Drop** : Les fenêtres peuvent être déplacées (saisie par la barre de titre)
- **Resize** : Optionnel, redimensionnement par les bords
- **Focus** : La fenêtre cliquée passe au premier plan (z-index)
- **Hover effects** : Sur les boutons de la barre de titre

---

## Détails Stylistiques Windows XP

### Palette de Couleurs Authentique
- **Bleu barre de titre active** : #0058C6
- **Bleu barre de titre inactive** : #7A96DF
- **Vert bouton Démarrer** : #2F9E4F
- **Gris interface** : #D4D0C8, #ECE9D8
- **Fond bureau** : #5A90CD (Bliss) ou image dégradé bleu/vert
- **Blanc fenêtres** : #FFFFFF
- **Bordures** : #0054E3, #DFDFDF

### Typographie Windows XP
- **Système** : Tahoma (8pt pour l'interface)
- **Titres fenêtres** : Tahoma Bold
- **Bureau** : Tahoma 8pt (icônes)
- **Contenu** : Verdana, Arial (lisibilité)
- **Nom (CV)** : text-3xl ou text-4xl minimum

### Effets Visuels XP
- **Relief 3D** : Bordures avec highlights/shadows
- **Ombres portées** : Légères sous les fenêtres
- **Dégradés** : Sur les barres de titre (bleu dégradé)
- **Hover** : Changement de couleur sur survol
- **Active state** : Bordure bleue sur focus

---

## Icônes du Bureau - Spécifications

### Design des Icônes
- **Style** : Windows XP authentique (32x32px ou 48x48px)
- **Ombre** : Légère ombre noire sous les icônes
- **Label** : Texte blanc avec bordure noire pour contraste
- **Espacement** : Grid alignée, environ 100px entre chaque icône

### Comportements
- **Simple clic** : Sélection (surbrillance bleue)
- **Double-clic** : Ouverture de la fenêtre correspondante
- **Hover** : Légère mise en évidence
- **Drag** : Optionnel, déplacement sur le bureau

### Icônes Spécifiques
- **À Propos** : 📝 Icône Bloc-notes/Notepad ou document texte
- **Compétences** : 📁 Dossier jaune XP avec symbole code
- **Expériences** : 📁 Dossier jaune XP avec symbole briefcase
- **Formations** : 📁 Dossier jaune XP avec symbole graduation cap
- **Corbeille** : 🗑️ Corbeille XP (vide)
- **Poste de travail** : 💻 Icône ordinateur XP

---

## Barre des Tâches - Fonctionnalités

### Bouton Démarrer
- **Clic** : Ouvre le menu Démarrer (optionnel pour ce projet)
- **Style** : Bouton vert avec logo Windows
- **Hover** : Légère surbrillance

### Zone des Fenêtres Ouvertes
- Affiche un bouton pour chaque fenêtre ouverte
- Clic sur le bouton : Focus sur la fenêtre ou minimize/restore
- Style : Bouton gris avec relief, actif = enfoncé
- Texte : Nom de la fenêtre tronqué si trop long

### Zone de Notification
- **Horloge** : HH:MM en temps réel
- **Icônes système** : Volume, réseau (statiques, pour l'authenticité)
- **Tooltip** : Au survol de l'horloge, afficher la date

---

## Responsive Design

### Desktop (>1024px)
- Expérience complète Windows XP
- Toutes les animations 3D activées
- Drag & drop fonctionnel
- Multiple fenêtres ouvertes simultanément

### Tablet (768px - 1024px)
- Bureau XP adapté, icônes plus grandes
- Fenêtres maximisées par défaut
- Animations simplifiées
- Touch-friendly interactions

### Mobile (<768px)
- **Option 1** : Affichage direct du contenu sans simulation XP
- **Option 2** : Version mobile XP simplifiée (une fenêtre à la fois)
- Navigation par menu hamburger ou tabs
- Pas de drag & drop, tout en touch/tap

---

## Performance et Optimisation

### Chargement
- Barre de progression réaliste (pas de faux délai inutile)
- Lazy loading des composants lourds
- Préchargement des images du thème XP

### Animations
- GPU-accelerated (transform, opacity)
- RequestAnimationFrame pour les animations complexes
- Réduire les animations si performance faible détectée

### État de l'Application
- **React State** pour :
  - Fenêtres ouvertes/fermées/minimisées
  - Positions des fenêtres
  - Fenêtre au premier plan (focus)
  - État du chargement initial
- **NE PAS utiliser** localStorage ou sessionStorage

---

## Instructions de Génération pour GEMINI

Gemini, je te demande de :

### Phase 1 : Configuration
1. ✅ Vérifier le projet existant (structure Vite + React + TypeScript)
2. ✅ Configurer Tailwind CSS avec les couleurs XP personnalisées
3. ✅ Installer les dépendances nécessaires (lucide-react)

### Phase 2 : Composants de Base
4. ✅ Créer le composant **LoadingScreen** (écran de démarrage XP)
5. ✅ Créer le composant **Desktop** (bureau avec fond Bliss)
6. ✅ Créer le composant **Taskbar** (barre des tâches complète)
7. ✅ Créer le composant **DesktopIcon** (icônes cliquables)

### Phase 3 : Système de Fenêtres
8. ✅ Créer le composant **Window** générique avec :
   - Barre de titre (draggable)
   - Boutons Minimiser/Maximiser/Fermer (fonctionnels)
   - Animations 3D d'ouverture/fermeture
   - Gestion du z-index (focus)
9. ✅ Implémenter le **WindowManager** (state des fenêtres)

### Phase 4 : Contenus des Fenêtres
10. ✅ Créer **AboutModal** (À Propos - s'ouvre au démarrage)
11. ✅ Créer **SkillsWindow** (Compétences - style explorateur ou grille)
12. ✅ Créer **ExperiencesWindow** (Expériences - timeline/CV)
13. ✅ Créer **EducationWindow** (Formations - style certificat)

### Phase 5 : Polish et Interactions
14. ✅ Ajouter toutes les **animations 3D spectaculaires**
15. ✅ Implémenter le **drag & drop** des fenêtres
16. ✅ Ajouter les **effets hover** et interactions
17. ✅ Rendre le tout **responsive** (desktop/tablet/mobile)
18. ✅ Optimiser les **performances**

### Phase 6 : Design Final
19. ✅ Appliquer la **palette XP authentique**
20. ✅ Utiliser les **typographies Windows**
21. ✅ Ajouter les **icônes et visuels XP**
22. ✅ Peaufiner tous les **micro-détails** (ombres, bordures, reliefs)

---

## Livrables Attendus

### Fichiers Principaux
```
src/
├── components/
│   ├── LoadingScreen.tsx      # Écran de démarrage XP
│   ├── Desktop.tsx            # Bureau avec fond Bliss
│   ├── Taskbar.tsx            # Barre des tâches
│   ├── DesktopIcon.tsx        # Icône bureau
│   ├── Window.tsx             # Fenêtre générique
│   ├── WindowManager.tsx      # Gestion des fenêtres
│   ├── AboutModal.tsx         # Modal À Propos
│   ├── SkillsWindow.tsx       # Fenêtre Compétences
│   ├── ExperiencesWindow.tsx  # Fenêtre Expériences
│   └── EducationWindow.tsx    # Fenêtre Formations
├── hooks/
│   └── useWindowManager.ts    # Hook pour gérer les fenêtres
├── types/
│   └── window.types.ts        # Types TypeScript
├── App.tsx
├── index.css
└── main.tsx
```

### Qualité du Code
- ✅ **TypeScript strict** : Pas de `any`, types explicites
- ✅ **Composants réutilisables** : DRY principle
- ✅ **Commentaires clairs** : Expliquer les parties complexes
- ✅ **Code propre** : Nommage cohérent, indentation correcte
- ✅ **Performance** : Optimisations React (memo, useMemo, useCallback si nécessaire)

---

## Points d'Attention Critiques

### ⚠️ IMPORTANT
- **NE PAS utiliser** localStorage ou sessionStorage
- **Utiliser uniquement** React state (useState, useReducer, useContext)
- **Classes Tailwind** : Seulement les classes core (pas de classes custom compilées)
- **Animations** : Privilégier CSS transforms et opacity (GPU-accelerated)

### 🎯 Objectifs Visuels
- **Authenticité XP** : Respecter les proportions, couleurs, typographies
- **Effet "WOW"** : Les animations 3D doivent impressionner
- **Fluidité** : 60fps minimum pour toutes les animations
- **Polish** : Attention aux micro-détails (ombres, bordures, espacements)

### 🚀 Expérience Utilisateur
- **Intuitif** : L'utilisateur doit comprendre immédiatement comment interagir
- **Réactif** : Feedback visuel instantané sur toutes les actions
- **Professionnel** : Malgré le style nostalgique, rester élégant et pro
- **Complet** : Toutes les fonctionnalités doivent être implémentées

---

## Commandes de Démarrage

Après la génération complète :

```bash
# Installation des dépendances
npm install

# Lancement du serveur de développement
npm run dev

# Build de production
npm run build
```

---

## Résultat Attendu Final

Un portfolio web qui :
- ✨ **Impressionne** visuellement dès le premier regard
- 🎮 **Engage** l'utilisateur avec des interactions ludiques
- 💼 **Présente professionnellement** les compétences et expériences
- 🏆 **Se démarque** complètement des portfolios classiques
- ⚡ **Performe** parfaitement sur tous les appareils
- 🎨 **Respecte** l'esthétique Windows XP avec modernité

**Le visiteur doit dire "WOW" en découvrant le portfolio !**

---

**Note finale** : Privilégie la créativité, l'originalité et l'attention aux détails. Chaque élément doit contribuer à une expérience mémorable. Le portfolio doit être à la fois nostalgique et moderne, ludique et professionnel.