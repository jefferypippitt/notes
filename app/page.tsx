import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Next.js Notes',
  description: 'pnpm docs for creating nextjs Projects'
}

export default function Home() {
  return (
    <main className='mx-auto max-w-3xl'>
      <section>
        <h1 className='mb-6 text-3xl font-bold'>Next.js Notes</h1>
        <p className='mb-4'>
          pnpm step by step guide for a fullstack application
        </p>
      </section>
      <section>
        <h2 className='mb-4 mt-8 text-2xl font-semibold'>Features</h2>
        <ul className='mb-4 list-inside list-disc space-y-1'>
          <li>Guide for Terminal or IDE</li>
          <li>Built with Next.js App Router</li>
          <li>Dark mode support</li>
        </ul>
      </section>
      <section>
        <h2 className='mb-4 mt-8 text-2xl font-semibold'>Getting Started</h2>
        <p className='mb-4'>
          To get started with building a fullstack application with Next.js,
          Here&apos;s a quick overview of the available sections:
        </p>
        <ul className='mb-4 list-inside list-disc space-y-1'>
          <li>
            <strong>Getting Started</strong>: Learn how to install and set up
            shadcn/ui
          </li>
          <li>
            <strong>Components</strong>: install components from shadcn/ui
          </li>
          <li>
            <strong>Prettier config</strong>: Learn how to configure prettier
            for your project
          </li>
        </ul>
      </section>
    </main>
  )
}
