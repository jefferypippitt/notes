import type { Metadata } from "next";
import { PnpmCommand } from "@/components/pnpm-command";

export const metadata: Metadata = {
  title: "Getting Started | Minimal Docs Site",
  description: "Learn how to get started with our documentation",
};

export default function GettingStarted() {
  return (
    <main className="max-w-3xl mx-auto">
      <section>
        <h1 className="text-2xl font-bold mb-4">
          Getting Started from Terminal
        </h1>
        <p className="mb-4">
          Open the command prompt and run the following command:
        </p>
        <p className="mb-4">
          If you want to install a different project name, you can replace
          <span className="text-green-500"> next-15</span> with the name you
          want.
        </p>
        <PnpmCommand command="pnpm create next-app@latest next-15" />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Getting Started from IDE</h2>
        <p className="mb-4">
          create a new folder with the name of the project you want to create.
          Open the folder in your IDE and run the following command:
        </p>
        <PnpmCommand command="pnpm create next-app@latest ." />
        <p className="mb-4 text-sm text-muted-foreground">
          The period is used to create the project in the current directory.
        </p>
      </section>
      <section>
        <h2 className="text-xl font-semibold mt-8 mb-4">Configuration</h2>
        <p className="mb-4">
          After installing, you need to set up shadcn/ui into your project
        </p>
        <PnpmCommand command="pnpm dlx shadcn-ui@latest init -d" />
        <PnpmCommand command="pnpm dlx shadcn-ui@latest add button" />
        <h1 className="text-xl font-semibold mb-4">Thats it!</h1>
        <p className="mb-4">
          You can now start adding more components to your project.
        </p>
      </section>
    </main>
  );
}
