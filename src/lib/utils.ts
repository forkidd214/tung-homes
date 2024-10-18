import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function transformText(
  children: React.ReactNode,
  fn: (x: string) => string,
) {
  return typeof children === 'string' ? fn(children) : children
}

export function toPascalCase(input: string): string {
  const exceptions = [
    'the',
    'a',
    'an',
    'for',
    'to',
    'at',
    'on',
    'of',
    'in',
    'and',
    'or',
  ]

  return input.replace(/(\w)(\w*)/g, (_, firstChar, remainingChars) => {
    const word = firstChar + remainingChars
    if (exceptions.includes(word.toLowerCase())) {
      return word.toLowerCase() // Keep the exception word lowercase
    }
    return firstChar.toUpperCase() + remainingChars.toLowerCase()
  })
}

export function toSentenceCase(input: string): string {
  return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()
}
