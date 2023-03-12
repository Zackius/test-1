
function findLongestWordWithMoreVowel(){
    let textValue = document.getElementById("wording").value
    let longestWord = '';
    let maxLength = 0;
    let maxVowelCount = 0;
    
    const regex = /[a-zA-Z]+/g; // match English letters
    
    textValue.match(regex).forEach(word => {
      const regWord = word.toLowerCase(); // convert to lowercase
      const length = regWord.length;
      const vowelCount = (regWord.match(/[aeiou]/g) || []).length; // count vowels
     
      if (length > maxLength || (length === maxLength && vowelCount > maxVowelCount)) {
        longestWord = word;
        maxLength = length;
        maxVowelCount = vowelCount;
      }
    });
    document.getElementById('results').innerHTML =  longestWord;
    
  }
  