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

#### Describe: totalOrder()

- Test: "It will add a number to the the object based on selection from the user."

- Code:   if(order1.size === "small") {
    this.total += 3.00;
  }

- Expected Output: this.total = 3;
---
- Test: "It will add a number to the object based on selection from the user."

- Code: if(order1.topping[i] === "cheese") {
      this.total += 1.00;
    }

- Expected Output: this.total = 1;
---
---
#### Describe: emptyArray()

- Test: It will return the object's total to zero to allow the user to input a new order.

- Code: this.total = 0;

- Expected Output: this.total = 0;
---
---

## Known Bugs

* No known bugs.

## License

MIT License

Copyright (c) 02-26-22 Greg Khmara  

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