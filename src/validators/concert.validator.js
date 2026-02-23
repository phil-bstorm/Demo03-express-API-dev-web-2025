import z from "zod";

/**
 * Validateur pour la CRÉATION d'un concert.
 * Ici, on est strict : les données doivent être présentes et valides.
 */
export const createConcertValidator = z.object({
  // Nom du concert : entre 2 et 255 caractères
  name: z.string().min(2).max(255),
  // Date et heure au format ISO 8601 (ex: 2024-05-20T20:00:00Z)
  date: z.iso.date(),
  // Booléen : définit si le concert est public (par défaut : non)
  visible: z.boolean().default(false),
  // Prix : doit être un nombre positif ou nul
  price: z.number().min(0),
});

/**
 * Validateur pour la RÉCUPÉRATION (Query strings) de tous les concerts.
 * On utilise .catch() et .coerce pour gérer la souplesse des filtres de recherche.
 */
export const getAllConcertQueryValidator = z.object({
  // Filtre par nom : optionnel, renvoie null si la donnée est invalide
  name: z.string().optional().catch(null),
  // Filtre prix min : transforme la string de l'URL en nombre (coerce)
  fromPrice: z.coerce.number().optional().catch(null),
  // Filtre prix max
  toPrice: z.coerce.number().optional().catch(null),
  // Filtre date : format YYYY-MM-DD
  fromDate: z.iso.date().optional().catch(null),
  // Tri par nom : accepte uniquement "asc" ou "desc"
  orderByName: z.enum(["asc", "desc"]).optional().catch(null),
  // Tri par date : si invalide ou absent, trie par "asc" par défaut
  orderByDate: z.enum(["asc", "desc"]).optional().catch("asc"),
  // Tri par prix
  orderByPrice: z.enum(["asc", "desc"]).optional().catch(null),
  // Pagination (début) : force en nombre, minimum 0, défaut 0
  offset: z.coerce.number().min(0).default(0).catch(0),
  // Pagination (taille) : entre 1 et 100 max, défaut 20
  limit: z.coerce.number().min(1).max(100).default(20).catch(20),
});
