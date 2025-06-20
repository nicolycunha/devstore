'use client'

import { useState } from 'react'

interface SizeButtonProps {
  size: string
  isSelected: boolean
  onSelect: (size: string) => void
}

export function SizeButton({ size, isSelected, onSelect }: SizeButtonProps) {
  const baseClasses =
    'flex h-9 w-14 items-center justify-center rounded-full border text-sm font-semibold transition-colors'
  const selectedClasses = 'border-white bg-zinc-700'
  const unselectedClasses = 'border-zinc-700 bg-zinc-800 hover:bg-zinc-600'

  return (
    <button
      type="button"
      onClick={() => onSelect(size)}
      className={`${baseClasses} ${
        isSelected ? selectedClasses : unselectedClasses
      }`}
    >
      {size}
    </button>
  )
}

export function SizeSelector() {
  const tamanhos = ['P', 'M', 'G', 'GG']
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  return (
    <div className="flex gap-2">
      {tamanhos.map(tamanho => (
        <SizeButton
          key={tamanho}
          size={tamanho}
          isSelected={selectedSize === tamanho}
          onSelect={setSelectedSize}
        />
      ))}
    </div>
  )
}
