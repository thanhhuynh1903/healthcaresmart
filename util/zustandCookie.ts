import { create } from "zustand";

interface CookieStore {
  cookies: Record<string, string | null>;
  setCookie: (name: string, value: string, days: number) => void;
  getCookie: (name: string) => string | null;
  deleteCookie: (name: string) => void;
}

const useCookieStore = create<CookieStore>((set) => ({
  cookies: {},

  setCookie: (name, value, days) => {
    let expires = "";
    if (days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = `; expires=${date.toUTCString()}`;
    }
    document.cookie = `${name}=${value || ""}${expires}; path=/`;

    set((state) => ({
      cookies: { ...state.cookies, [name]: value },
    }));
  },

  getCookie: (name) => {
    const nameEQ = `${name}=`;
    const cookiesArray = document.cookie.split(";");
    for (let i = 0; i < cookiesArray.length; i++) {
      let cookie = cookiesArray[i].trim();
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  },

  deleteCookie: (name) => {
    document.cookie = `${name}=; Max-Age=-99999999; path=/`;

    set((state) => {
      const updatedCookies = { ...state.cookies };
      delete updatedCookies[name];
      return { cookies: updatedCookies };
    });
  },
}));

export default useCookieStore;
