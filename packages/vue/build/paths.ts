import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const dir = dirname(fileURLToPath(import.meta.url))

export const pathRoot = resolve(dir, '..')
export const pathSvg = resolve(pathRoot, '../svg')
export const pathSrc = resolve(pathRoot, 'src')
export const pathOutput = resolve(pathRoot, 'dist')
