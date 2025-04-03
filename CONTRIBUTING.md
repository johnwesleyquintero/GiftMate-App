# Contributing to GiftMate

## Development Setup

1. Clone repository
2. Install dependencies: `npm ci`
3. Configure environment variables
4. Start dev server: `npm run dev`

## Code Standards

- TypeScript strict mode
- Functional components with hooks
- Atomic design pattern
- 80% test coverage

## Pull Request Process

1. Create feature branch from `main`
2. Include tests for new functionality
3. Update documentation following our [guidelines](#documentation-practices)
4. Verify linting passes: `npm run lint`
5. Open PR with template checklist
6. Include documentation review checklist:
   - [ ] All components/hooks documented
   - [ ] Type definitions explained
   - [ ] Error handling examples provided

## Testing Guidelines

```tsx
// Example test for GiftCard component
test('renders gift details correctly', () => {
  render(<GiftCard gift={mockGift} />);
  expect(screen.getByText('Birthday Gift')).toBeVisible();
});
```

## Documentation Practices

### Contribution Guidelines

1. Follow our [documentation style guide](/docs/best-practices.md#documentation-standards)
2. Use the template for new documentation:

```markdown
## Feature Name

### Purpose

<!-- Describe functionality -->

### Implementation Details

<!-- Code examples -->

### Related Components

<!-- List affected components -->
```

3. Verify all code examples work with current project version
4. Include before/after examples for API changes

### Documentation PR Checklist

- [ ] Table of contents updated
- [ ] Cross-references validated
- [ ] Version bump in footer
- [ ] Changelog entry added

## Community Guidelines

- Follow GitHub discussion protocols
- Use conventional commits
- Respect code review processes

---

_See [README.md](./README.md) for additional technical documentation_
