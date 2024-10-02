
---

# Vite Application with TypeScript, Bun, and Functional Programming

This project is a **Vite** application built with **TypeScript** and utilizes the **Bun** runtime for fast and efficient development. The code follows the **Functional Programming** paradigm, promoting immutability, pure functions, and declarative code structures.

## Installation

Before you start, ensure you have **Bun** installed on your machine. You can install Bun by running:

```bash
curl https://bun.sh/install | bash
```

Once Bun is installed, clone this repository and install the dependencies:

```bash
# Clone the repository
git clone https://github.com/Caelr/functional-programming-with-javascript.git

# Navigate to the project directory
cd functional-programming-with-javascript

# Install dependencies using Bun
bun install
```

## Getting Started

To start the development server, run:

```bash
bun run dev
```

This will start the Vite development server, and you can view your application at `http://localhost:5173`.

## Project Structure

The project is structured as follow:

```
├── src
│   ├── utils          # Pure utility functions
│   ├── vite-env.d.ts  # TypeScript types
│   └── main.ts        # Main application component
├── index.html         # Main HTML file
└── tsconfig.json      # TypeScript configuration
```

## Scripts

Here are the key scripts available in this project:

- `bun run dev`: Starts the development server.
- `bun run build`: Builds the application for production.
- `bun run preview`: Previews the production build locally.
