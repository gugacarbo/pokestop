function firstUpper(str: string): string {
  return str.replace(/^\w/, (c) => c.toUpperCase());
}

export { firstUpper };
