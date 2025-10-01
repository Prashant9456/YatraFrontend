export interface User {
  token: string;
  email: string;
  id: string;
  name: string;
}

const USER_STORAGE_KEY = 'yatra_user';

export const authService = {
  setUser: (user: User) => {
    localStorage.setItem(USER_STORAGE_KEY, JSON.stringify(user));
    window.dispatchEvent(new Event('auth-change'));
  },

  getUser: (): User | null => {
    const stored = localStorage.getItem(USER_STORAGE_KEY);
    if (!stored) return null;
    try {
      return JSON.parse(stored) as User;
    } catch {
      return null;
    }
  },

  clearUser: () => {
    localStorage.removeItem(USER_STORAGE_KEY);
    window.dispatchEvent(new Event('auth-change'));
  },

  isAuthenticated: (): boolean => {
    return !!authService.getUser();
  }
};

