export function insertBreakAfter(text: string, word: string, className?: string) {
  const spacer = className
    ? `<span class="${className}" style="display:block"></span>`
    : '<br />';
  return text.replace(
    new RegExp(`(${word})`),
    `$1${spacer}`
  );
}