# Linting and Formatting Guide

This project uses ESLint, Prettier, and Tailwind Prettier for code quality and consistent formatting.

## Available Commands

- `pnpm lint`: Run ESLint to check for code quality issues
- `pnpm lint:fix`: Run ESLint and automatically fix issues where possible
- `pnpm format`: Run Prettier to format all files
- `pnpm format:check`: Check if files are formatted correctly without making changes

## Configuration Files

- `.eslintrc.json`: ESLint configuration
- `.prettierrc`: Prettier configuration
- `.prettierignore`: Files to be ignored by Prettier

## VS Code Integration

This project includes VS Code settings that will:

1. Format your code on save using Prettier
2. Run ESLint fixes on save
3. Use Prettier as the default formatter for JavaScript and TypeScript files

Make sure you have the following VS Code extensions installed:

- ESLint
- Prettier - Code formatter

## Tailwind CSS Formatting

The project uses `prettier-plugin-tailwindcss` to automatically sort Tailwind CSS classes in a consistent order. This happens automatically when you run the format command or when VS Code formats on save.

## Troubleshooting

If you encounter any issues with linting or formatting:

1. Make sure all dependencies are installed: `pnpm install`
2. Try restarting VS Code
3. Check if there are any conflicts between ESLint and Prettier rules 