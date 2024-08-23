interface RemoveWordsFromTextParams {
  text: string;
  words: string[];
}

/**
 * Remove all the selected words (case insensitive) from the respective text.
 * @param text  text string from which words will be excluded.
 * @param words list of words to be excluded.
 * @returns text excluding the provided words.
 */
function removeWordsFromText({
  text,
  words,
}: RemoveWordsFromTextParams): string {
  const regex = new RegExp(`(${words.join('|')})`, 'gi');
  return text.replace(regex, '').trim();
}

export default removeWordsFromText;
