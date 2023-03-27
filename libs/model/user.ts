export interface User {
  name: string;
  isLoggedIn: boolean;
  role?: 'user' | 'admin';
}
