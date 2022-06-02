const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

function titleCased(){
const newTutorials = tutorials.map(sentences => {
  const lowerCaseArray = sentences/*.toLowerCase()*/.split(" ");
  const titleCasedWord = lowerCaseArray.map(word => word.charAt(0).toUpperCase() + word.slice(1))
      console.log(titleCasedWord)
      return titleCasedWord.join(' ')
}
)
return newTutorials
}

