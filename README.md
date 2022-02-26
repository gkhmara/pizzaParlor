# Pizza Parlor

#### Greg Khmara

#### This website allows a user to select a pizza with toppings and receive a total.

## Technologies Used

* HTML
* CSS
* Bootstrap
* JavaScript
* jQuery

## Description

This site allows a user to select from different sizes of pizza and toppings and receive a total based on their selections. They can also add or remove toppings or change pizza size to receive a different total.

## Setup/Installation Requirements

* Clone the repo from Gitup
* Open index.html in browser

## Tests:

#### Describe: createArray()

- Test: "It will return an array of numbers using the user's input as a stopping point."

- Code: num = "10"; createArray();

- Expected Output: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
---
- Test: "It will convert i to string and check to see if i is equal to string "3". If true it will push string "Wont' you be my neighbor?" to userArray.
- Code:
if (i.toString().includes("3")) {
        userArray.push("Won't you be my neighbor?");
- Expected Output: [0, 1, 2, "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10]
---
- Test: "It will convert i to string and check to see if i is equal to string "2". If true it will push string "Beep!" to userArray.
- Code:
if (i.toString().includes("2")) {
        userArray.push("Beep");
- Expected Output: [0, 1, "Beep!", 3, 4, 5, 6, 7, 8, 9, 10]
---
- Test: "It will convert i to string and check to see if i is equal to string "1". If true it will push string "Boop!" to userArray.
- Code:
if (i.toString().includes("1")) {
        userArray.push("Boop");
- Expected Output: [0, Boop, 2, 3, 4, 5, 6, 7, 8, 9, 10]
---
---

## Known Bugs

* No known bugs.

## License

MIT License

Copyright (c) 02-13-22 Greg Khmara  

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.