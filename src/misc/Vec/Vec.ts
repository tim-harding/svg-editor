export interface T {
  x: number
  y: number
}

export const NSEW = [make(0, 1), make(0, -1), make(1, 0), make(-1, 0)]

export function make(x: number, y: number): T {
  return { x, y }
}

export function add(a: T, b: T): T {
  return make(a.x + b.x, a.y + b.y)
}

export function sub(a: T, b: T): T {
  return make(a.x - b.x, a.y - b.y)
}

export function neg(t: T): T {
  return make(-t.x, -t.y)
}

export function swap(t: T): T {
  return make(t.y, t.x)
}

export function less(a: T, b: T): boolean {
  return a.x < b.x && a.y < b.y
}

export function eq(a: T, b: T): boolean {
  return a.x === b.x && a.y === b.y
}

export function clone({ x, y }: T): T {
  return make(x, y)
}

export function area({ x, y }: T): number {
  return x * y
}
