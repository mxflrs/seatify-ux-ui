function escapeRegExp(string: string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

type HighlightPhrase =
    | string
    | { phrase: string; className: string };

export function highlightText(
    text: string,
    phrase: HighlightPhrase | HighlightPhrase[],
    className?: string
) {
    if (Array.isArray(phrase)) {
        return (phrase as HighlightPhrase[]).reduce((acc: string, p) => {
            if (typeof p === 'string') {
                return acc.replace(
                    new RegExp(`(${escapeRegExp(p)})`, 'gi'),
                    `<span class="${className ?? ''}">$1</span>`
                );
            } else {
                return acc.replace(
                    new RegExp(`(${escapeRegExp(p.phrase)})`, 'gi'),
                    `<span class="${p.className ?? ''}">$1</span>`
                );
            }
        }, text);
    } else if (typeof phrase === 'string') {
        const regex = new RegExp(`(${escapeRegExp(phrase)})`, 'gi');
        return text.replace(regex, `<span class="${className ?? ''}">$1</span>`);
    } else {
        const regex = new RegExp(`(${escapeRegExp(phrase.phrase)})`, 'gi');
        return text.replace(regex, `<span class="${phrase.className ?? ''}">$1</span>`);
    }
}