export function summarizeContract(content: string) {
  return `Summary: ${content.substring(0, 140).trim()}...`;
}
