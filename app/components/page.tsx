import type { Metadata } from "next";
import { PnpmCommand } from "@/components/pnpm-command";

export const metadata: Metadata = {
  title: "Components | Minimal Docs Site",
  description: "Learn about the available components",
};

const themeProviderCode = `"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}`;

const appLayoutCode = `import { ThemeProvider } from "@/components/theme-provider"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}`;

const headerCode = `"use client";

import * as React from "react";
import Link from "next/link";
import { ModeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Link href="/" className="font-semibold">
              Home
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}`;

const themeToggleCode = `"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
`;

export default function ComponentsPage() {
  return (
    <main className="max-w-3xl mx-auto">
      <section>
        <h1 className="text-3xl font-bold mb-6">Components with Dark Mode</h1>
        <p className="mb-4">Run the following command in your terminal:</p>
        <PnpmCommand command="pnpm dlx shadcn-ui@latest add button" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Theme Provider Setup</h2>
        <p className="mb-4">First, install the themes package:</p>
        <PnpmCommand command="pnpm add next-themes" />

        <p className="mb-4">
          Create a new file called{" "}
          <code className="text-green-500">theme-provider.tsx</code> in your
          components folder and paste this code:
        </p>
        <PnpmCommand command={themeProviderCode} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">App Layout</h2>
        <p className="mb-4">Add this snippet into the main layout.tsx file</p>
        <PnpmCommand command={appLayoutCode} />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Theme Toggle</h2>
        <p className="mb-4">
          Create a new file called{" "}
          <span className="text-green-500">theme-toggle.tsx</span>
        </p>
        <small className="text-sm text-gray-500">
          This component is using the dropdown menu component from shadcn/ui
        </small>
        <PnpmCommand command={themeToggleCode} />
        <PnpmCommand command="pnpm dlx shadcn-ui@latest add dropdown-menu" />
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Header</h2>
        <p className="mb-4">
          Create a new file called{" "}
          <span className="text-green-500">header.tsx</span>
        </p>
        <PnpmCommand command={headerCode} />
      </section>
    </main>
  );
}
