# Palindromes score

Given a word composed of lowercase English letters, find the maximum possible score by building exactly 2 palindromic sub-sequences. The score obtained is the product of the length of these 2 sub-sequences. What tests would you write to verify your program? <br/><br/>
for e.g. If the word is<br/><br/>
abcdefAnnaRacecarMom<br/><br/>
the palindromes are Anna (4), Racecar (7), and Mom (3). The maximum product is <br/>
is Anna - 4 , RaceCar - 7 = 4*7 = 28 <br/><br/>

Q. How would the program need to change if it needs to analyze a sentence instead of a word and producea similar result? e.g 'King, are you glad you are king'?

A. We need to update two function in file index.js. <br>
 1. getPalindromeScore - Remove line no 4 and remove special character from string using str.replace(/[^a-zA-Z ]/g, "").
 2. validatePalindrome - Use split function on space in existing program on line no 14 - { const arrValues = string.split(' '); }, And on line no we need to add word count.