// Write your code in this file!

function scuberGreetingForFeet(feet) {
  if(feet <= 400) {
    "This one is on me!"
  } else if (feet > 2000) {
    "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    "No can do."
  }
}
gives ual to 400 feet ‣
AssertionError: expected undefined to equal 'This one is on me!'
    at Context.<anonymous> (test/indexTest.js:6:45)
charges 30 dollars for a distance over 2000 feet ‣
AssertionErrored to equal 'I will gladly take your thirty bucks.'
    at Context.<anonymous> (test/indexTest.js:10:46)
does not allow rides over 2500 feet ‣
AssertionError: expected undefined to equal 'No can do.'