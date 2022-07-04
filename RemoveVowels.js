function removeVowels(doc) {
 let vow = "aeiouy";
 let result = "";
 for (let letter of doc) {
    let lowerKaseLetter = letter.toLowerCase();
    if (!vow.includes(lowerKaseLetter)) {
        result += lowerKaseLetter;
    }
 }
 return result;
}
removeVowels("qnokjJSLAADOUpsuidfnmw");
