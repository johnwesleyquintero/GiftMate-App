# useAuth Hook

## Purpose
Centralizes authentication logic with Supabase integration for multiple auth providers

## Methods
- `signUp(email, password)`: Email/password registration
- `signIn(email, password)`: Email/password login
- `signInWithOAuth(provider)`: Social login flow
- `signOut()`: Session termination
- `resetPassword(email)`: Password recovery

## Usage Example
```tsx
// app/auth/LoginScreen.tsx
const { signIn } = useAuth();

const handleLogin = async () => {
  try {
    await signIn(email, password);
    router.replace('/dashboard');
  } catch (error) {
    handleAuthError(error);
  }
};
```

## Social Auth Configuration
1. Enable providers in Supabase dashboard
2. Configure deep linking in app.json
3. Add redirect URL whitelist

## Security Features
- Session refresh polling
- Secure token storage
- Rate limiting protection
- Automatic session recovery

## Error Handling
| Code | Handling Strategy |
|------|-------------------|
| 401 | Force logout & clear storage |
| 429 | Show retry timer |
| 500 | Fallback to cached credentials |