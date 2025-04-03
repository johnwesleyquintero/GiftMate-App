# Getting Started Guide

## Environment Setup

1. **Node.js**: Install v18.x or higher
2. **Expo CLI**: `npm install -g expo-cli`
3. **iOS Requirements**:
   - Xcode 15+
   - CocoaPods
4. **Android Requirements**:
   - Android Studio 2022+
   - Android SDK 34

## Installation

```bash
git clone https://github.com/yourorg/giftmate-app.git
cd giftmate-app
expo install
```

## Configuration

1. Create `.env` file:

```env
SUPABASE_URL=your-project-url
SUPABASE_KEY=your-anon-key
```

2. Configure Supabase:

```bash
npm install @supabase/supabase-js
```

## Common Errors

- **Expo EMFILE Error**: `expo r -c` to clear cache
- **iOS Build Failures**: Run `pod install` in ios directory
- **Supabase Connection Issues**: Verify environment variables
