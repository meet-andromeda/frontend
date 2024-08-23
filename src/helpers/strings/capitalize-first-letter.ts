function capitalizeFirstLetter(word: string | undefined): string {
  if (!word) {
    return '';
  }
  return word.charAt(0).toUpperCase() + word.substring(1);
}

export default capitalizeFirstLetter;
