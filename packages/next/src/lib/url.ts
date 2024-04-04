export function isFullStringUrl(url: string) {
  return /https?:\/\//.test(url)
}
