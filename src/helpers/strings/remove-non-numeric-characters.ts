function removeNonNumericCharacters(text: string): string {
  if (text === '.') {
    return '';
  }

  return text.replaceAll(/[^\d.]/g, '');
}

export default removeNonNumericCharacters;
