import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prettier Setup | Next.js Notes",
  description: "Prettier setup for your Next.js project",
};

import { PnpmCommand } from "@/components/pnpm-command";

const prettierConfig = `{
  "arrowParens": "avoid",
  "singleQuote": true,
  "jsxSingleQuote": true,
  "tabWidth": 2,
  "trailingComma": "none",
  "semi": false,
  "proseWrap": "always",
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}`;

export default function Prettier() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Prettier Setup</h1>
      <p className="text-md mb-4">
        This section will guide you through the process of configuring prettier
        for your project. This is all user preference.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Install Prettier</h2>
      <p className="mb-4">run this in terminal</p>
      <PnpmCommand command="pnpm add -D prettier prettier-plugin-tailwindcss" />
      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Create a .prettierrc file
      </h2>
      <p className="mb-4">
        create a new file called{" "}
        <span className="text-green-500">.prettierrc</span> in the root of the
        project
      </p>
      <PnpmCommand command={prettierConfig} />
    </main>
  );
}
