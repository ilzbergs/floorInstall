/** Resolve public files under both a domain root and GitHub project Pages. */
export function publicAsset(path: string): string {
  if (!path.startsWith('/') || path.startsWith('//')) return path
  return `${import.meta.env.BASE_URL}${path.slice(1)}`
}
