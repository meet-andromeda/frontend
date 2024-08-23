function decapitalizeFirstLetter(word: string | undefined): string {
  if (!word) {
    return '';
  }
  return word.charAt(0).toLowerCase() + word.substring(1);
}

export default decapitalizeFirstLetter;
