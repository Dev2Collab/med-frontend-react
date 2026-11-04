import  {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from 'react';
import * as authApi from '../api/auth';
import { jwtDecode as decode } from 'jwt-decode';

interface AuthContextData {
  fullName: string | null;
  email: string | null;
  role: string | null;
  token: string | null;
  isVerified: () => boolean;
  loading: boolean;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  updateToken: (newToken: string) => Promise<void>;
  signup: (data: any) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [fullName, setFullName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedToken = localStorage.getItem('auth_token');
      const storedEmail = localStorage.getItem('email');
      const storedRole = localStorage.getItem('role');
      const storedFullName = localStorage.getItem('full_name');

      if (storedToken && storedEmail) {
        setToken(storedToken);
        setEmail(storedEmail);
        setRole(storedRole);
        setFullName(storedFullName); 
      }
    } catch (error) {
      console.error('Error loading auth data', error);
    } finally {
      setLoading(false);
    }
  }, []);

  const persist = async (newToken: string, fullName: string, email: string, role: string) => {
    setToken(newToken);
    setEmail(email);
    setRole(role);
    setFullName(fullName);
    
    localStorage.setItem('auth_token', newToken);
    localStorage.setItem('email', email);
    localStorage.setItem('role', role);
    localStorage.setItem('full_name', fullName);
  };

  const updateToken = async (newToken: string) => {
    setToken(newToken);
    localStorage.setItem('auth_token', newToken);
  };

  const isVerified = (): boolean => {
    if (!token) return false;
    try {
      const decoded = decode<{ isActive: boolean }>(token);
      console.log(decoded);
      return decoded.isActive;
    } catch (error) {
      console.error('Invalid token', error);
      return false;
    }
  };

  const login = async (email: string, password: string) => {
    const res = await authApi.login(email, password) as any;
    const { token: t, fullName: fn, email: e, role: r } = res;
    await persist(t, fn, e, r);
  };

  const signup = async (data: any) => {
    const res = await authApi.signup(data);
    return res;
  };

  const signOut = async () => {
    setToken(null);
    setEmail(null);
    setFullName(null);
    setRole(null);
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    localStorage.removeItem('full_name');
  };

  return (
    <AuthContext.Provider
      value={{
        fullName,
        email,
        token,
        loading,
        isAuthenticated: !!token,
        login,
        signup,
        signOut,
        updateToken,
        isVerified,
        role,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);