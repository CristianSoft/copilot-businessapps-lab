export function compareContracts(first: string, second: string) {
  const diff = first === second ? "identical" : "different";
  return { status: diff, firstLength: first.length, secondLength: second.length };
}
