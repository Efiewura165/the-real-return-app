# Home components

## Purpose
This folder contains the homepage section architecture for The Real Return.

## Responsibilities
Each section component is intentionally small and focused on presentation. Content is supplied through typed props from the content layer.

## Extension guidance
- Add new section content under content/homepage.
- Define its types in types/homepage.ts.
- Create a new section component folder under components/home.
- Compose the section in app/(marketing)/page.tsx.
- Add the section name to config/homepage.ts for ordering.

## Common pitfalls
- Avoid placing business logic in page.tsx.
- Avoid hardcoding copy inside the component files.
- Prefer composition over large monolithic section files.
