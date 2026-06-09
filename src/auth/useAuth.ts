import { useState } from "react";
import { jwtDecode } from "jwt-decode";
import { fakeLogin, storeToken, getToken, clearToken } from "./authService.ts";

// Forme du payload encodé dans le JWT.
export type AuthUser = {
  sub: string;
  email: string;
  name: string;
  exp: number; // timestamp d'expiration (secondes)
};

/**
 * Lit le token dans le localStorage, le décode, et vérifie son expiration.
 * Renvoie l'utilisateur si le token est valide, sinon null (et nettoie un token expiré).
 */
function readUserFromStorage(): AuthUser | null {
  const token = getToken();
  if (!token) return null;

  try {
    const user = jwtDecode<AuthUser>(token);
    const isExpired = user.exp * 1000 <= Date.now();
    if (isExpired) {
      clearToken();
      return null;
    }
    return user;
  } catch {
    // token illisible / mal formé → on le considère invalide
    clearToken();
    return null;
  }
}

/**
 * Hook d'authentification.
 * L'état est initialisé depuis le localStorage à chaque montage : il survit donc au rechargement.
 */
export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(() => readUserFromStorage());

  async function login(email: string, password: string): Promise<void> {
    const token = await fakeLogin(email, password); // "appel backend"
    storeToken(token); // stockage front
    setUser(jwtDecode<AuthUser>(token)); // décodage pour connaître l'utilisateur
  }

  function logout(): void {
    clearToken();
    setUser(null);
  }

  return {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  };
}
