# Authentication & Supabase Query Guide

## Installation

```bash
npm install @supabase/supabase-js react-native-async-storage
```

## Configuration

```typescript
// lib/supabase.ts
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_KEY!,
);

export default supabase;
```

## Usage Examples

### User Signup

```typescript
const { error } = await supabase.auth.signUp({
  email: 'user@example.com',
  password: 'securepassword123',
});

if (error) throw new Error(error.message);
```

### Protected Route

```typescript
import { useAuth } from '../providers/AuthProvider';

export default function ProtectedScreen() {
  const { session } = useAuth();

  if (!session) {
    return <Redirect href="/login" />;
  }

  return <MainContent />;
}
```

## Security Best Practices

1. Always store secrets in environment variables
2. Implement rate limiting on authentication endpoints
3. Use Row Level Security in Supabase

## Common Errors

| Error                                     | Solution                                        |
| ----------------------------------------- | ----------------------------------------------- |
| `AuthApiError: Invalid login credentials` | Verify user credentials match stored records    |
| `JWT expired`                             | Implement token refresh logic                   |
| `Network request failed`                  | Check Supabase URL/keys and internet connection |
