# Express API

Petit application pour la démo sur les APIs utilisant Express

## Plan de développement

1. Installation des dépendances (voir package.json)
2. Creation de la structure: crée les différents dossiers (controllers, database, entities, services...)
3. Mise en place d'une partie de la DB
4. Relations DB (src/database/index.js)
5. Creer la base de donnée (`CREATE DATABASE`)
6. Mise en place de base de la web API (`src/index.js`)
7. Route d'enregistrement (+ validation de formulaire)
8. Gérer les erreurs (middleware d'erreur et erreurs custom)
9. Route de login (+ génération token)
10. Middleware d'authentification (vérification du token + vérification des rôles)
11. Routes protégées (ex: route création de concert accessible uniquement aux admins)
12. Creation des différents CRUD (ex: Création de concert, récupération de la liste des concerts, etc.)
13. Test de l'API (Postman ou Insomnia)

## Structure du projet

### Logique backend (`src/`)

- `controllers/`: Contient la logique de traitement. Il reçoit les requêtes, appelle les services nécessaires et renvoie la réponse (souvent en rendant un résultat json, des DTOs).
- `dtos`: Contient les Data Transfer Objects (DTOs) qui définissent la structure des données échangées entre le client et le serveur (par exemple, les données de sortie pour une route de récupération d'informations).
- `database/`:
  - `entities/`: Définit la structure des données (schémas pour une base de données comme SQL ou NoSQL).
  - `config.js`: Configuration de l'instance de la base de données (connexion, paramètres, etc.).
  - `index.js`: Import de la configuration, des entités et des relations, et export de l'instance de la base de données pour une utilisation dans d'autres parties de l'application.
- `validators/`: Contient les fonctions de validation pour les données entrantes (par exemple, validation des formulaires, validation des données avant de les enregistrer en base de données, etc.).
- `middlewares/`: Contient les middlewares personnalisés pour gérer des fonctionnalités transversales (par exemple, l'authentification, la gestion des erreurs, etc.).
  - `auth.middleware.js`: Middleware pour vérifier l'authentification des utilisateurs (vérification du token, vérification des rôles, etc.).
  - `error.middleware`: Middleware pour gérer les erreurs de manière centralisée (capture des erreurs, formatage de la réponse d'erreur, etc.).
  - `validation.middleware.js`: Middleware pour appliquer un validateur sur une route spécifique (par exemple, validation des données entrantes avant de les traiter).
- `routers/`: Contient les définitions des routes de l'application. Chaque route est associée à un contrôleur qui gère la logique de traitement pour cette route.
  - `index.js` qui se trouve dans le dossier "routers": Point d'entrée pour les routes, où toutes les routes sont regroupées et exportées pour être utilisées dans `src/index.js`.
- `services/`: Contient la logique métier de l'application. Les services sont appelés par les contrôleurs pour effectuer des opérations spécifiques (par exemple, interagir avec la base de données, effectuer des calculs, envoyer des mails etc.).
- `utils/`: Contient des fonctions utilitaires ou des classes qui peuvent être utilisées dans différentes parties de l'application (par exemple, des helpers pour la gestion des tokens, etc.).
- `index.js`: Point d'entrée de l'application. Il configure le serveur Express, les middlewares globaux, les routes et démarre le serveur.

### Fichiers de configuration

- `.env`: Contient les variables d'environnement pour la configuration de l'application (par exemple, les informations de connexion à la base de données, les clés API, etc.). ⚠️ Ne jamais committer ce fichier dans un dépôt public. Pensez au `.gitignore` pour éviter de le faire.
- `package.json`: Contient les métadonnées du projet, les dépendances, les scripts de démarrage, etc.
