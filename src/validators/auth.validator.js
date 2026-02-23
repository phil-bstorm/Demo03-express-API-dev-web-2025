// Importation de la bibliothèque Zod pour la définition de schémas de validation
import z from "zod";

// Définition du schéma de validation pour l'inscription (register)
export const registerValidator = z.object({
  // Vérifie que c'est une chaîne de caractères au format email valide
  email: z.email(),
  // Vérifie que le mot de passe est une chaîne d'au moins 8 caractères et max 64
  password: z.string().min(8).max(64),
  // Vérifie que la date fournie est une chaîne au format ISO 8601 (ex: 2024-05-20)
  birthDate: z.iso.date(),
});

// Définition du schéma de validation pour la connexion (login)
export const loginValidator = z.object({
  // Validation stricte de l'email
  email: z.email(),
  // Validation du mot de passe (mêmes contraintes que pour l'inscription)
  password: z.string().min(8).max(64),
});
