"use strict";
{
    const countWordOccurrences = (sentence, word) => {
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
    const sentence = "TypeScript is great. I love TypeScript!";
    const word = "typescript";
    const result = countWordOccurrences(sentence, word);
    console.log(result);
}
