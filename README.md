# GiftMate - Relationship Companion App

## Installation & Setup
```bash
git clone https://github.com/your-org/giftmate-app.git
cd giftmate-app
npm install

# Configure environment variables
cp .env.example .env
```

## Tech Stack
| Technology | Purpose |
|------------|---------|
| React Native | Cross-platform UI framework |
| Expo | Development platform |
| Supabase | Backend services (Auth/DB) |
| NativeWind | Tailwind CSS for React Native |
| React Navigation | Routing & navigation |

## Documentation
### Components
```tsx
/**
 * ErrorBoundary component
 * @param {ReactNode} children - Child components to wrap
 * @param {string} fallback - Fallback UI when errors occur
 */
export function ErrorBoundary({ children, fallback }) {
  // Component implementation
}
```

### API Usage
```tsx
// Example API call using useApi hook
const { data, error } = useApi('/users/current', {
  headers: { Authorization: `Bearer ${token}` }
});
```

## Authentication Flow
1. User initiates OAuth flow
2. Expo WebBrowser handles redirect
3. Supabase returns session token
4. Token stored in secure storage

## Supabase Integration
```ts
// Example realtime subscription
const channel = supabase
  .channel('gift-updates')
  .on('postgres_changes', {
    event: 'INSERT',
    schema: 'public',
    table: 'gifts'
  }, payload => {
    updateGiftList(payload.new);
  })
  .subscribe();
```

## Troubleshooting
| Error | Solution |
|-------|----------|
| Expo SDK Compatibility | Check `expo doctor` output |
| Supabase Connection | Verify environment variables |
| NativeWind Styling | Restart Metro bundler |

## Best Practices
- Use typed hooks with `useApi` for all network requests
- Follow Atomic Design pattern for components
- Implement error boundaries at route level
- Use Supabase RLS for database security

## Contributing
### Code Review Process
1. Create feature branch from `main`
2. Submit PR with detailed description
3. Address linting errors
4. Pass all CI checks
5. Maintain 80% test coverage

### Performance Checklist
- [ ] Memoize expensive computations
- [ ] Use FlatList for long lists
- [ ] Optimize image assets
- [ ] Monitor re-renders

### Building for Production
```bash
# iOS build
npm run ios

# Android build
npm run android
```

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
ISC © [Your Name]

---
*Repository created by Bolt to GitHub extension*
