# K4Hub

> Content feed for K4Connect users
>
> - view community news
> - store personal notes

**Table of Contents**

- [K4Hub](#k4hub)
  - [Technology Stack](#technology-stack)
  - [Installation](#installation)
  - [Plans for Production](#plans-for-production)
  - [Though Process](#though-process)

## Technology Stack

1. React
2. SCSS
3. React Query
4. Testing Library
5. Jest

## Installation

1. Download the repository
2. Install dependencies `npm install`
3. Open two terminals to run `App` and `Server`
   - Terminal 1 - Run JSON-Server `npm run dev-server`
   - Terminal 2 - Run App `npm start`
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser
5. Server end-point [http://localhost:3004](http://localhost:3004)

## Plans for Production

1. Use Redux for state management and extract logic from components
2. Set up server and database
3. Add authentication
4. Plan all features for app
5. Set a design/structure
6. Use React Router or NextJS
7. Use TypeScript
8. Create user stories
9. Complete unit, integration, functional, and E2E tests for all completed features and components

## Though Process

> Questions and assumptions that came up while working on project

1. Should I use styling framework or pure CSS?

- Pure CSS to showcase skills and smaller bundle size.

2. One page or multiple pages?

- One page(KSS), and create logic for navigating between `news` and `notes` in component.

3. Types of testing.

- Requirements mention unit testing. But Testing Library would be a great implementation for functional testing, specially for the user demographic.

4. How can I make app performant when fetching server?

- Use `useQuery` to cache data.

5. Should I use Redux?

- Too much boilerplate, and no project design or structure given. It might be better treat this as prototype and handle the logic within the components. Logic can later be extracted to reduce coupling.
