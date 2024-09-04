// // src/stores/authStore.ts
// import { create } from 'zustand';
// import axios from 'axios';

// const API_URL = 'http://localhost:8080/api';

// interface User {
//   id: string;
//   username: string;
//   email: string;
// }

// interface AuthState {
//   user: User | null;
//   isAuthenticated: boolean;
//   login: (username: string, password: string) => Promise<void>;
//   register: (username: string, email: string, password: string) => Promise<void>;
//   logout: () => Promise<void>;
//   checkAuthStatus: () => Promise<void>;
// }

// const useAuthStore = create<AuthState>((set) => ({
//   user: null,
//   isAuthenticated: false,

//   login: async (username, password) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/login`, { username, password });
//       const { user, token } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       set({ user, isAuthenticated: true });
//     } catch (error) {
//       console.error('Login failed:', error);
//       throw error;
//     }
//   },

//   register: async (username, email, password) => {
//     try {
//       const response = await axios.post(`${API_URL}/auth/register`, { username, email, password });
//       const { user, token } = response.data;
//       localStorage.setItem('token', token);
//       axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//       set({ user, isAuthenticated: true });
//     } catch (error) {
//       console.error('Registration failed:', error);
//       throw error;
//     }
//   },

//   logout: async () => {
//     try {
//       await axios.post(`${API_URL}/auth/logout`);
//       localStorage.removeItem('token');
//       delete axios.defaults.headers.common['Authorization'];
//       set({ user: null, isAuthenticated: false });
//     } catch (error) {
//       console.error('Logout failed:', error);
//     }
//   },

//   checkAuthStatus: async () => {
//     const token = localStorage.getItem('token');
//     if (token) {
//       try {
//         axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
//         const response = await axios.get(`${API_URL}/auth/me`);
//         set({ user: response.data, isAuthenticated: true });
//       } catch (error) {
//         console.error('Auth check failed:', error);
//         localStorage.removeItem('token');
//         delete axios.defaults.headers.common['Authorization'];
//         set({ user: null, isAuthenticated: false });
//       }
//     }
//   },
// }));

// export default useAuthStore;










import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface User {
  id: string
  username: string
  email: string
}

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (username: string, password: string) => Promise<void>
  register: (username: string, email: string, password: string) => Promise<void>
  logout: () => void
  checkAuthStatus: () => void
}

const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      login: async (username, password) => {
        // Mock login process
        if (username === 'testuser' && password === 'password') {
          const user = { id: '1', username, email: 'testuser@example.com' }
          set({ user, isAuthenticated: true })
        } else {
          throw new Error('Invalid credentials')
        }
      },

      register: async (username, email, password) => {
        // Mock registration process
        const user = { id: Date.now().toString(), username, email }
        set({ user, isAuthenticated: true })
      },

      logout: () => {
        set({ user: null, isAuthenticated: false })
      },

      checkAuthStatus: () => {
        // The persist middleware will automatically hydrate the store,
        // so we don't need to do anything here for our mock setup
      },
    }),
    {
      name: 'auth-storage', // name of the item in the storage (must be unique)
      storage: typeof window !== 'undefined' ? window.localStorage : undefined,
    }
  )
)

export default useAuthStore