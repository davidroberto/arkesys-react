// Faux backend d'authentification.
// Simule un "POST /login" qui renvoie un JWT, et gère le stockage du token côté front.

const STORAGE_KEY = "auth_token";

// JWT statique "renvoyé par le backend".
// Format réel : header.payload.signature (base64url).
// Payload décodable : { sub, email, name, exp } — exp en 2099 pour ne jamais expirer en démo.
// (signature factice : on ne la vérifie pas côté front, c'est le rôle du backend.)
const FAKE_JWT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
  ".eyJzdWIiOiIxIiwiZW1haWwiOiJ1c2VyQDRsdHJvcGh5LmZyIiwibmFtZSI6IkplYW4gRHVwb250IiwiZXhwIjo0MDcwOTA4ODAwfQ" +
  ".s5Hh8mC0bQ0bq3kFh6xq2rJ8nQ9V2dQy0pXk1m4Z9aA";

/**
 * Simule l'appel réseau de connexion.
 * Dans un vrai projet, ce serait un `fetch('/api/login', { method: 'POST', body: ... })`.
 * Ici on ignore les identifiants et on renvoie toujours le même JWT après une fausse latence.
 */
export async function fakeLogin(_email: string, _password: string): Promise<string> {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return FAKE_JWT;
}

export function storeToken(token: string): void {
  localStorage.setItem(STORAGE_KEY, token);
}

export function getToken(): string | null {
  return localStorage.getItem(STORAGE_KEY);
}

export function clearToken(): void {
  localStorage.removeItem(STORAGE_KEY);
}
