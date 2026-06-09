// @ts-nocheck
import { useState } from "react";
import { jwtDecode } from "jwt-decode";

async function fakeLogin(email, password) {
  await new Promise((resolve) => setTimeout(resolve, 300));

  const FAKE_JWT =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9" +
      ".eyJzdWIiOiIxIiwiZW1haWwiOiJ1c2VyQDRsdHJvcGh5LmZyIiwibmFtZSI6IkplYW4gRHVwb250IiwiZXhwIjo0MDcwOTA4ODAwfQ" +
      ".s5Hh8mC0bQ0bq3kFh6xq2rJ8nQ9V2dQy0pXk1m4Z9aA";

  return FAKE_JWT;
}

function readUserFromStorage() {
  const token = localStorage.getItem("auth_token");
  if (!token) return null;

  try {
    const user = jwtDecode(token);
    const isExpired = user.exp * 1000 <= Date.now();
    if (isExpired) {
      localStorage.removeItem("auth_token");
      return null;
    }
    return user;
  } catch {
    localStorage.removeItem("auth_token");
    return null;
  }
}

export function useAuth() {
  const [user, setUser] = useState(() => readUserFromStorage());

  async function login(email, password) {
    const token = await fakeLogin(email, password);

    localStorage.setItem("auth_token", token);
    setUser(jwtDecode(token));
  }

  function logout() {
    localStorage.removeItem("auth_token");
    setUser(null);
  }

  return {
    user,
    isAuthenticated: user !== null,
    login,
    logout,
  } as any;
}
