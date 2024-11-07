{
    const countWordOccurrences = (sentence: string, word: string): number => {
        const lowerCaseSentence = sentence.toLowerCase();
        const lowerCaseWord = word.toLowerCase();
      
        const words = lowerCaseSentence.split(' ');
        let count = 0;
      
        for (const w of words) {
          if (w === lowerCaseWord) {
            count++;
          }
        }
      
        return count;
      };
      
      const sentence = "TypeScript is great typescript is fun but typescript is hard I love TypeScript!";
      const word = "typescript";
      const result = countWordOccurrences(sentence, word);
      console.log(result);
}