'use client'

import { Button } from '@/components/ui/button'
import { useToast } from '@/hooks/use-toast'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { CopyIcon, CheckIcon } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

interface PnpmCommandProps {
  command: string
  showCopy?: boolean
}

export function PnpmCommand({ command, showCopy = true }: PnpmCommandProps) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = useState(false)
  const [contentHeight, setContentHeight] = useState<number>(0)
  const codeRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (codeRef.current) {
      const height = codeRef.current.scrollHeight
      setContentHeight(Math.min(height + 32, 200)) // 32px for padding
    }
  }, [command])

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(command)
    setHasCopied(true)
    toast({
      description: 'copied to clipboard',
      duration: 2000
    })

    setTimeout(() => {
      setHasCopied(false)
    }, 2000)
  }

  return (
    <div className='group relative mb-4'>
      <ScrollArea
        className='w-full rounded-md border'
        style={{ height: `${contentHeight}px` }}
      >
        <div className='h-full min-w-full'>
          <pre className='h-full p-4'>
            <code ref={codeRef} className='block whitespace-pre text-sm'>
              {command}
            </code>
          </pre>
        </div>
        <ScrollBar orientation='horizontal' className='select-none' />
        <ScrollBar orientation='vertical' className='select-none' />
      </ScrollArea>
      {showCopy && (
        <Button
          variant='ghost'
          size='icon'
          className='absolute right-2 top-2 opacity-0 transition-opacity group-hover:opacity-100'
          onClick={copyToClipboard}
        >
          {hasCopied ? (
            <CheckIcon className='h-4 w-4 text-green-500' />
          ) : (
            <CopyIcon className='h-4 w-4' />
          )}
        </Button>
      )}
    </div>
  )
}
