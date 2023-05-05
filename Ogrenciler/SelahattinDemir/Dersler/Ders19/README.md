[Turn Back](../../)

<h1 align="center">Ders19 - JavaScript String Methods</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript String Methods](#javascript-string-methods)
  - [JavaScript String Padding](#javascript-string-padding)
  - [JavaScript Template Literals](#javascript-template-literals)
  - [Example Website](#example-website)

## JavaScript String Methods

<table>
  <tbody><tr>
    <th>Name</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref/jsref_charat.asp">charAt()</a></td>
    <td>Returns the character at a specified index (position)</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_charcodeat.asp">charCodeAt()</a></td>
    <td>Returns the Unicode of the character at a specified index</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_concat_string.asp">concat()</a></td>
    <td>Returns two or more joined strings</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_constructor_string.asp">constructor</a></td>
    <td>Returns the string's constructor function</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_endswith.asp">endsWith()</a></td>
    <td>Returns if a string ends with a specified value</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_fromcharcode.asp">fromCharCode()</a></td>
    <td>Returns Unicode values as characters</td>
  </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref_includes.asp">includes()</a></td>
    <td>Returns if a string contains a specified value</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_indexof.asp">indexOf()</a></td>
    <td>Returns the index (position) of the first occurrence of a value in a string</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_lastindexof.asp">lastIndexOf()</a></td>
    <td>Returns the index (position) of the last occurrence of a value in a string</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_length_string.asp">length</a></td>
    <td>Returns the length of a string</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_localecompare.asp">localeCompare()</a></td>
    <td>Compares two strings in the current locale</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_match.asp">match()</a></td>
    <td>Searches a string for a value, or a regular expression, and returns the matches</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_prototype_string.asp">prototype</a></td>
    <td>Allows you to add properties and methods to an object</td>
  </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref_repeat.asp">repeat()</a></td>
    <td>Returns a new string with a number of copies of a string</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_replace.asp">replace()</a></td>
    <td>Searches a string for a value, or a regular expression, and returns a string where the values are replaced</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_search.asp">search()</a></td>
    <td>Searches a string for a value, or regular expression, and returns the index (position) of the match</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_slice_string.asp">slice()</a></td>
    <td>Extracts a part of a string and returns a new string</td>
  </tr>
    <tr>
    <td><a href="https://www.w3schools.com/jsref_split.asp">split()</a></td>
    <td>Splits a string into an array of substrings</td>
    </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_startswith.asp">startsWith()</a></td>
    <td>Checks whether a string begins with specified characters</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_substr.asp">substr()</a></td>
    <td>Extracts a number of characters from a string, from a start index (position)</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_substring.asp">substring()</a></td>
    <td>Extracts characters from a string, between two specified indices (positions)</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_tolocalelowercase.asp">toLocaleLowerCase()</a></td>
    <td>Returns a string converted to lowercase letters, using the host's locale</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_tolocaleuppercase.asp">toLocaleUpperCase()</a></td>
    <td>Returns a string converted to uppercase letters, using the host's locale</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_tolowercase.asp">toLowerCase()</a></td>
    <td>Returns a string converted to lowercase letters</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_tostring_string.asp">toString()</a></td>
    <td>Returns a string or a string object as a string</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_touppercase.asp">toUpperCase()</a></td>
    <td>Returns a string converted to uppercase letters</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_trim_string.asp">trim()</a></td>
    <td>Returns a string with removed whitespaces</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_string_trim_end.asp">trimEnd()</a></td>
    <td>Returns a string with removed whitespaces from the end</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_string_trim_start.asp">trimStart()</a></td>
    <td>Returns a string with removed whitespaces from the start</td>
  </tr>
  <tr>
    <td><a href="https://www.w3schools.com/jsref_valueof_string.asp">valueOf()</a></td>
    <td>Returns the primitive value of a string or a string object</td>
  </tr>
</tbody></table>

### JavaScript String Length

&#10147; The `length` property returns the length of a string (number of characters).

#### Example

    let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let sln = txt.length;

#### Result:

    26

### Extracting String Parts

&#10147; There are 3 methods for extracting a part of a string:

- `slice(start, end)`
- `substring(start, end)`
- `substr(start, length)`

#### The slice() Method

&#10147; `slice()` extracts a part of a string and returns the extracted part in a new string.

&#10147; The method takes 2 parameters: the start position, and the end position (end not included).

#### Example

    Slices out a portion of a string from position 7 to position 12 (13-1):

      let str = "Apple, Banana, Kiwi";
      let res = str.slice(7, 13);

#### Result:

    Banana

<b>Note</b>&#10071; JavaScript counts positions from zero.

- First position is 0.
- Second position is 1.

#### The substring() Method

&#10148; `substring()` is similar to `slice()`.

&#10148; The difference is that start and end values less than 0 are treated as 0 in `substring()`.

#### Example

    Slices out a portion of a string from position 7 to position 13:

      let str = "Apple, Banana, Kiwi";
      let res = str.substring(7, 13);

#### Result:

    Banana

#### The substr() Method

&#10148; `substr()` is similar to `slice()`.

&#10148; The difference is that the second parameter specifies the <b>length</b> of the extracted part.

#### Example

    Extracts characters from a string, beginning at a specified start position, and through the specified number of character:

      let str = "Apple, Banana, Kiwi";
      let res = str.substr(7, 6);

#### Result:

    Banana

### Replacing String Content

&#10149; The `replace()` method replaces a specified value with another value in a string.

#### Example

    Replaces "Microsoft" with "W3Schools" in the paragraph below:

      let str = "Please visit Microsoft!";
      let n = str.replace("Microsoft", "W3Schools");

#### Result:

    Please visit W3Schools!

&#10149; The `replace()` method does not change the string it is called on. It returns a new string.

&#10149; By default, the `replace()` method replaces only the first match.

&#10149; By default, the `replace()` method is case sensitive. Writing `MICROSOFT` (with upper-case) will not work.

&#10149; To replace case insensitive, use a regular expression with an /i flag (insensitive):

#### Example

    let text = "Please visit Microsoft!";
    let newText = text.replace(/MICROSOFT/i, "W3Schools");

#### Result:

    Please visit Microsoft!

<b>Note</b>&#10071; Regular expressions are written without quotes.

&#10149; To replace all matches, use a regular expression with a /g flag (global match):

#### Example

    let text = "Please visit Microsoft and Microsoft!";
    let newText = text.replace(/Microsoft/g, "W3Schools");

#### Result:

    Please visit W3Schools and W3Schools!

### JavaScript String ReplaceAll()

&#10150; In 2021, JavaScript introduced the string method `replaceAll()`:

&#10150; The `replaceAll()` method returns a new string with all matches of a pattern replaced by a replacement.

&#10150; The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

&#10150; This method does not change the String object it is called on. It simply returns a new string.

&#10150; If the parameter is a regular expression, the global flag (g) must be set set, otherwise a TypeError is thrown.

#### Example

    let text = "I love cats. Cats are very easy to love. Cats are very popular";
    text = text.replaceAll(/Cats/g,"Dogs");
    text = text.replaceAll(/cats/g,"dogs");

#### Result:

    I love dogs. Dogs are very easy to love. Dogs are very popular

<b>Note</b>&#10071; `replaceAll()`  is an ES2021 feature.
`replaceAll()` is not supported in IE or Edge 15 and earlier versions.

### Converting to Upper and Lower Case

&#10151; A string is converted to upper case with `toUpperCase()`:

#### Example

    Converts a string to uppercase letters:

      let text1 = "Hello World!";       // String
      let text2 = text1.toUpperCase();  // text2 is text1 converted to upper

#### Result:

    HELLO WORLD!

&#10151; A string is converted to lower case with `toLowerCase()`:

#### Example

    Converts a string to lowercase letters:

      let text1 = "Hello World!";       // String
      let text2 = text1.toLowerCase();  // text2 is text1 converted to lower

#### Result:

    hello world!

### The concat() Method

&#10152; `concat()` joins two or more strings:

#### Example

    let text1 = "Hello";
    let text2 = "World";
    let text3 = text1.concat(" ", text2);

#### Result:

    Hello World

<b>Note</b>&#10071; The `concat()` method can be used instead of the plus operator. These two lines do the same:

    let text = "Hello" + " " + "World!";
    let text = "Hello".concat(" ", "World!");

<b>Note</b>&#10071; All string methods return a new string. They don't modify the original string.

### String.trim()

&#10153; The `trim()` method removes whitespace from both sides of a string:

#### Example

    Removes whitespace from both sides of a string:

      let str = "       Hello World!        ";
      alert(str.trim());

#### Result:

    Hello World!

### JavaScript String trimStart()

&#10154; ECMAScript 2019 added the String method `trimStart()` to JavaScript.

&#10154; The `trimStart()` method works like `trim()`, but removes whitespace only from the start of a string.

#### Example

    let text1 = "     Hello World!     ";
    let text2 = text1.trimStart();

    "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

#### Result:

    Length text1 = 23
    Length text2 = 18

### JavaScript String trimEnd()

&#10154; ECMAScript 2019 added the String method `trimEnd()` to JavaScript.

&#10154; The `trimEnd()` method works like `trim()`, but removes whitespace only from the end of a string.

#### Example

    let text1 = "     Hello World!     ";
    let text2 = text1.trimEnd();

    "Length text1 = " + text1.length + "<br>Length text2 = " + text2.length;

#### Result:

    Length text1 = 23
    Length text2 = 18

## JavaScript String Padding

&#10155; ECMAScript 2017 added two String methods: `padStart()` and `padEnd()`.
These methods add whitespace to the beginning and end of a string.

### JavaScript String padStart()

&#10155; The `padStart()` method pads a string with another string, until the resulting string reaches the given length.

&#10155; The padding is applied from the start of the current string.

#### Example

    let str = "5";
    str = str.padStart(4,0);

#### Result:

    0005

<b>Note</b>&#10071; The padStart() method is a string method.
To pad a number, convert the number to a string first.

#### Example

    let numb = 5;
    let text = numb.toString();
    let padded = text.padStart(4,"0");

#### Result:

    0005

### JavaScript String padEnd()

&#10155; The `padEnd()` method pads a string with another string, until the resulting string reaches the given length.

&#10155; The padding is applied from the end of the current string.

#### Example

    let str = "5";
    str = str.padEnd(4,0);

#### Result:

    5000

<b>Note</b>&#10071; The padEnd() method is a string method.
To pad a number, convert the number to a string first.

#### Example

    let numb = 5;
    let text = numb.toString();
    let padded = text.padEnd(4,"0");

#### Result:

    5000

### Extracting String Characters

&#10156; There are 3 methods for extracting string characters:

- `charAt(position)`
- `charCodeAt(position)`
- Property access [ ]

### The charAt() Method

&#10156; The `charAt()` method returns the character at a specified index (position) in a string:

#### Example

    let str = "HELLO WORLD";
    str.charAt(0);            // returns H

### The charCodeAt() Method

&#10156; The `charCodeAt()` method returns the unicode of the character at a specified index in a string:

&#10156; The method returns a UTF-16 code (an integer between 0 and 65535).

#### Example

    let str = "HELLO WORLD";
    str.charCodeAt(0);         // returns 72

### Property Access

&#10156; ECMAScript 5 (2009) allows property access [ ] on strings:

#### Example

    let str = "HELLO WORLD";
    str[0];                   // returns H

<b>Note</b>&#10071; Property access might be a little <b>unpredictable</b>:
- It makes strings look like arrays (but they are not)
- If no character is found, [ ] returns undefined, while charAt() returns an empty string.
- It is read only. str[0] = "A" gives no error (but does not work!)

#### Example
    let text = "HELLO WORLD";
    text[0] = "A";    // Gives no error, but does not work

### Converting a String to an Array

&#10157; If you want to work with a string as an array, you can convert it to an array.

### The `split()` Method

&#10157; A string can be converted to an array with the `split()` method:

#### Example

    let txt = "a,b,c,d,e";   // String
    txt.split(",");          // Split on commas
    txt.split(" ");          // Split on spaces
    txt.split("|");          // Split on pipe

#### Result:

    a,b,c,d,e
    a,b,c,d,e
    a,b,c,d,e

&#10157; If the separator is omitted, the returned array will contain the whole string in index [0].

&#10157; If the separator is "", the returned array will be an array of single characters:

## JavaScript Template Literals

Synonyms:

- Template Literals
- Template Strings
- String Templates
- Back-Tics Syntax

&#10158; Template literals are string literals allowing embedded expressions. You can use multi-line strings and string interpolation features with them.

&#10158; Template literals are enclosed by the backtick (` `) (grave accent) character instead of double or single quotes.

&#10158; Template literals can contain placeholders. These are indicated by the dollar sign and curly braces (${expression}). The expressions in the placeholders and the text between the backticks (` `) get passed to a function.

&#10158; The default function just concatenates the parts into a single string. If there is an expression preceding the template literal (tag here), this is called a "tagged template". In that case, the tag expression (usually a function) gets called with the processed template literal, which you can then manipulate before outputting.

#### Example

    let name = "John";
    let msg = `Welcome ${name}!`;
    alert(msg);

#### Result:

    Welcome John!

### Multi-line Strings

&#10158; Template literals can contain multiple lines:

#### Example

    let text = `Hello World! 
    I am Selahattin Demir.`;

#### Result:

    Hello World!
    I am Selahattin Demir.

### Expression Interpolation

&#10158; Template literals provide an easy way to interpolate variables and expressions into strings.

&#10158; The method is called string interpolation.

&#10158; The syntax is:

    ${...}

### Variable Substitutions

&#10158; Template literals allow variables in strings:

#### Example

    let firstName = "John";
    let lastName = "Doe";
    let text = `Welcome ${firstName}, ${lastName}!`;
    alert(text);

#### Result:

    Welcome John, Doe!

<b>Note</b>&#10071; Automatic replacing of variables with real values is called <b>string interpolation</b>.

### Expression Substitutions

&#10158; Template literals allow expressions in strings:

#### Example

    let price = 10;
    let VAT = 0.25;
    let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;

#### Result:

    Total: 12.50

### Tagged Templates

&#10159; Tagged templates are template literals with a function tag on the front.

&#10159; The tag function gets the template string as first argument, followed by the processed substitution values.

&#10159; The tag function can then perform whatever operations on these arguments you wish, and return the manipulated string.

#### Example

    let person = 'Mike';
    let age = 28;

    function myTag(strings, personExp, ageExp) {
    let str0 = strings[0]; // "That "
    let str1 = strings[1]; // " is a "

    // There is technically a string after
    // the final expression (in our example),
    // but it is empty (""), so disregard.
    // var str2 = strings[2];

    let ageStr;
    if (ageExp > 99){
        ageStr = 'centenarian';
    } else {
        ageStr = 'youngster';
    }

    return str0 + personExp + str1 + ageStr;
    }

    let output = myTag`That ${ person } is a ${ age }`;

    alert(output);

#### Result:

    That Mike is a youngster


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders19/photos/media.jpg)
