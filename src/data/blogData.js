// Données centralisées pour le blog
export const blogCategories = [
  {
    key: "all",
    label: "Tous les articles",
    icon: "ri-article-line",
    color: "primaryColor",
    description: "Tous mes articles et tutoriels",
  },
  {
    key: "developpement",
    label: "Développement Web",
    icon: "ri-code-box-line",
    color: "blue-500",
    description: "React, JavaScript, Frontend",
  },
  {
    key: "reseaux",
    label: "Réseaux & Infra",
    icon: "ri-router-line",
    color: "green-500",
    description: "Cisco, Windows Server, Infrastructure",
  },
  {
    key: "tutorials",
    label: "Tutoriels",
    icon: "ri-book-open-line",
    color: "yellow-500",
    description: "Guides pas-à-pas détaillés",
  },
  {
    key: "veille",
    label: "Veille Techno",
    icon: "ri-eye-line",
    color: "purple-500",
    description: "Tendances et actualités tech",
  },
];

export const blogArticles = [
  {
    id: 1,
    title: "Configuration VLAN avec Packet Tracer",
    slug: "configuration-vlan-packet-tracer",
    category: "reseaux",
    excerpt:
      "Tutoriel complet pour configurer des VLANs dans un environnement d'entreprise avec Cisco Packet Tracer",
    content: `
# Configuration VLAN avec Packet Tracer

## Introduction

Les VLANs (Virtual Local Area Networks) permettent de segmenter un réseau physique en plusieurs réseaux logiques. Cette technique améliore la sécurité, les performances et facilite la gestion du réseau.

## Prérequis

- Cisco Packet Tracer installé
- Connaissances de base en réseaux
- Notions de commandes Cisco IOS

## Matériel nécessaire

- 1 Switch Cisco 2960
- 4 PC
- Câbles Ethernet

## Schéma de la topologie

\`\`\`
PC1 (VLAN 10) ---- 
                   |
PC2 (VLAN 20) ---- Switch ---- PC3 (VLAN 10)
                   |
PC4 (VLAN 20) ----
\`\`\`

## Configuration des VLANs

### Accès au mode de configuration

\`\`\`cisco
Switch> enable
Switch# configure terminal
\`\`\`

### Création des VLANs

\`\`\`cisco
Switch(config)# vlan 10
Switch(config-vlan)# name ADMIN
Switch(config-vlan)# exit

Switch(config)# vlan 20
Switch(config-vlan)# name USERS
Switch(config-vlan)# exit
\`\`\`

### Attribution des ports aux VLANs

\`\`\`cisco
! Attribution PC1 et PC3 au VLAN 10
Switch(config)# interface fastEthernet 0/1
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# exit

Switch(config)# interface fastEthernet 0/3
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 10
Switch(config-if)# exit

! Attribution PC2 et PC4 au VLAN 20
Switch(config)# interface fastEthernet 0/2
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
Switch(config-if)# exit

Switch(config)# interface fastEthernet 0/4
Switch(config-if)# switchport mode access
Switch(config-if)# switchport access vlan 20
Switch(config-if)# exit
\`\`\`

## Configuration des adresses IP

### VLAN 10 (ADMIN) - Réseau 192.168.10.0/24
- PC1 : 192.168.10.1/24
- PC3 : 192.168.10.3/24

### VLAN 20 (USERS) - Réseau 192.168.20.0/24
- PC2 : 192.168.20.2/24
- PC4 : 192.168.20.4/24

## Tests de connectivité

### Test intra-VLAN
Les PC du même VLAN doivent pouvoir communiquer :
- PC1 ↔ PC3 ✅
- PC2 ↔ PC4 ✅

### Test inter-VLAN
Les PC de VLANs différents ne doivent PAS pouvoir communiquer :
- PC1 ↔ PC2 ❌
- PC1 ↔ PC4 ❌

## Commandes de vérification

### Afficher les VLANs configurés
\`\`\`cisco
Switch# show vlan brief
\`\`\`

### Afficher la configuration des interfaces
\`\`\`cisco
Switch# show interface status
\`\`\`

## Conclusion

La segmentation par VLANs est une technique fondamentale en administration réseau. Elle permet d'améliorer la sécurité et les performances.
    `,
    date: "2024-01-15",
    readTime: "8 min",
    level: "Intermédiaire",
    tags: ["Packet Tracer", "VLAN", "Cisco", "Réseaux"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 1250,
    type: "article",
    featured: true,
  },
  {
    id: 2,
    title: "React Hooks personnalisés - Guide pratique",
    slug: "react-hooks-personnalises-guide",
    category: "developpement",
    excerpt:
      "Créer ses propres hooks React pour optimiser la réutilisabilité du code et améliorer l'architecture de vos applications",
    content: `
# React Hooks personnalisés - Guide pratique

## Introduction

Les hooks personnalisés permettent d'extraire la logique des composants React dans des fonctions réutilisables.

## Qu'est-ce qu'un hook personnalisé ?

Un hook personnalisé est une fonction JavaScript dont le nom commence par "use" et qui peut appeler d'autres hooks.

## Exemple : useLocalStorage

\`\`\`javascript
import { useState, useEffect } from 'react';

function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
\`\`\`

## Utilisation

\`\`\`javascript
function App() {
  const [name, setName] = useLocalStorage('name', '');
  
  return (
    <input 
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Votre nom"
    />
  );
}
\`\`\`

## Bonnes pratiques

- Commencez toujours par "use"
- Respectez les règles des hooks
- Testez vos hooks personnalisés
- Documentez leur utilisation
    `,
    date: "2024-01-10",
    readTime: "12 min",
    level: "Avancé",
    tags: ["React", "JavaScript", "Hooks", "Frontend"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 980,
    type: "tutorial",
    featured: true,
  },
  {
    id: 3,
    title: "Installation Active Directory sur Windows Server 2022",
    slug: "installation-active-directory-windows-server",
    category: "reseaux",
    excerpt:
      "Guide complet pour déployer et configurer un contrôleur de domaine Active Directory sur Windows Server 2022",
    content: `
# Installation Active Directory sur Windows Server 2022

## Prérequis

- Windows Server 2022 installé
- Adresse IP statique configurée
- Nom d'ordinateur défini
- Droits administrateur

## Installation du rôle AD DS

### Via le Gestionnaire de serveur

1. Ouvrir le Gestionnaire de serveur
2. Cliquer sur "Ajouter des rôles et fonctionnalités"
3. Sélectionner "Services de domaine Active Directory"
4. Suivre l'assistant d'installation

### Via PowerShell

\`\`\`powershell
Install-WindowsFeature -Name AD-Domain-Services -IncludeManagementTools
\`\`\`

## Promotion en contrôleur de domaine

### Configuration d'une nouvelle forêt

\`\`\`powershell
Install-ADDSForest -DomainName "monentreprise.local" -SafeModeAdministratorPassword (ConvertTo-SecureString "MotDePasseSecurise123!" -AsPlainText -Force)
\`\`\`

## Vérification de l'installation

### Services Active Directory

\`\`\`powershell
Get-Service ADWS,KDC,NETLOGON,DNS
\`\`\`

### Structure du domaine

\`\`\`powershell
Get-ADDomain
Get-ADForest
\`\`\`

## Configuration post-installation

- Créer des unités d'organisation (OU)
- Configurer les stratégies de groupe
- Créer des utilisateurs et groupes
- Configurer DNS et DHCP

## Bonnes pratiques

- Sauvegardes régulières
- Monitoring des services
- Stratégies de sécurité renforcées
- Documentation complète
    `,
    date: "2024-01-05",
    readTime: "15 min",
    level: "Intermédiaire",
    tags: ["Windows Server", "Active Directory", "Administration", "PowerShell"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 1580,
    type: "video",
    featured: false,
  },
  {
    id: 4,
    title: "Optimisation des performances React en 2024",
    slug: "optimisation-performances-react-2024",
    category: "developpement",
    excerpt:
      "Techniques avancées et meilleures pratiques pour améliorer les performances de vos applications React modernes",
    content: `
# Optimisation des performances React en 2024

## Techniques fondamentales

### React.memo pour éviter les re-rendus

\`\`\`javascript
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* Composant coûteux */}</div>;
});
\`\`\`

### useMemo pour les calculs coûteux

\`\`\`javascript
const MemoizedValue = useMemo(() => {
  return expensiveCalculation(data);
}, [data]);
\`\`\`

### useCallback pour les fonctions

\`\`\`javascript
const memoizedCallback = useCallback(() => {
  doSomething(a, b);
}, [a, b]);
\`\`\`

## Techniques avancées 2024

### React Server Components
### Concurrent Features
### Suspense et Streaming

## Outils de profiling

- React DevTools Profiler
- Lighthouse
- Web Vitals

## Métriques importantes

- First Contentful Paint (FCP)
- Largest Contentful Paint (LCP)
- Time to Interactive (TTI)
    `,
    date: "2023-12-28",
    readTime: "10 min",
    level: "Avancé",
    tags: ["React", "Performance", "Optimisation", "2024"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 2100,
    type: "article",
    featured: true,
  },
  {
    id: 5,
    title: "Routage dynamique avec OSPF",
    slug: "routage-dynamique-ospf",
    category: "reseaux",
    excerpt:
      "Configuration du protocole OSPF pour un routage automatique et efficace dans les réseaux d'entreprise",
    content: `
# Routage dynamique avec OSPF

## Introduction à OSPF

OSPF (Open Shortest Path First) est un protocole de routage dynamique à état de liens.

## Configuration de base

### Activation d'OSPF

\`\`\`cisco
Router(config)# router ospf 1
Router(config-router)# network 192.168.1.0 0.0.0.255 area 0
\`\`\`

### Configuration des interfaces

\`\`\`cisco
Router(config)# interface GigabitEthernet0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown
\`\`\`

## Vérification

\`\`\`cisco
Router# show ip ospf neighbor
Router# show ip route ospf
\`\`\`

## Optimisations

- Configuration des priorités
- Ajustement des timers
- Authentification OSPF
    `,
    date: "2023-12-20",
    readTime: "6 min",
    level: "Avancé",
    tags: ["OSPF", "Routage", "Cisco", "Protocoles"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 750,
    type: "tutorial",
    featured: false,
  },
  {
    id: 6,
    title: "Tendances JavaScript 2024 : État de l'art",
    slug: "tendances-javascript-2024",
    category: "veille",
    excerpt:
      "Les dernières tendances et frameworks JavaScript à surveiller cette année : ce qui change et ce qui reste",
    content: `
# Tendances JavaScript 2024 : État de l'art

## Frameworks émergents

### Bun : Le nouveau runtime
- Performance exceptionnelle
- Compatibilité Node.js
- Bundler intégré

### Astro : Static Site Generation
- Islands Architecture
- Performance optimale
- Multi-framework

## Nouvelles fonctionnalités ES2024

### Pattern Matching (Proposition)
\`\`\`javascript
match (value) {
  when Number => "C'est un nombre"
  when String => "C'est une chaîne"
  when _ => "Autre chose"
}
\`\`\`

### Records et Tuples
\`\`\`javascript
const record = #{ name: "John", age: 30 };
const tuple = #[1, 2, 3];
\`\`\`

## Outils et méthodologies

### Vite vs Webpack
### TypeScript 5.0+
### Edge Computing

## Prédictions pour 2024

- Adoption massive de TypeScript
- Essor du edge computing
- Performance au centre des préoccupations
    `,
    date: "2023-12-15",
    readTime: "5 min",
    level: "Débutant",
    tags: ["JavaScript", "Tendances", "2024", "Frameworks"],
    author: "Mohamed Zeinoudini Abdoul-kader",
    views: 3200,
    type: "article",
    featured: false,
  },
];

// Fonction utilitaire pour obtenir un article par ID
export const getArticleById = (id) => {
  return blogArticles.find((article) => article.id === parseInt(id));
};

// Fonction utilitaire pour obtenir les articles par catégorie
export const getArticlesByCategory = (category) => {
  if (category === "all") return blogArticles;
  return blogArticles.filter((article) => article.category === category);
};

// Fonction utilitaire pour obtenir les articles mis en avant
export const getFeaturedArticles = () => {
  return blogArticles.filter((article) => article.featured);
};

// Fonction utilitaire pour obtenir les derniers articles
export const getLatestArticles = (limit = 3) => {
  return blogArticles.sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, limit);
};

export default { blogCategories, blogArticles };
