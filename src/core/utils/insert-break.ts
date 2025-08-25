export function insertBreakAfter(text: string, word: string) {
  return text.replace(
    new RegExp(`(${word})`),
    '$1<br />'
  );
}