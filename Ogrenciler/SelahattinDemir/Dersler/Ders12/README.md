[Turn Back](../../)

<h1 align="center">Ders12 - SASS</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## Contents:
 - [Categories](#categories)
      - [SASS](#sass)
      - [System Requirements for Sass](#system-requirements-for-sass)
      - [Sass Variables](#sass-variables)
      - [Sass Nested Rules](#sass-nested-rules)
      - [Example Website](#example-website)



## SASS

### What is Sass?

- Sass stands for Syntactically Awesome Stylesheet
- Sass is an extension to CSS
- Sass is a CSS pre-processor
- Sass is completely compatible with all versions of CSS
- Sass reduces repetition of CSS and therefore saves time
- Sass was designed by Hampton Catlin and developed by Natalie Weizenbaum in 2006
- Sass is free to download and use

### Why Use Sass?

&#10147; Stylesheets are getting larger, more complex, and harder to maintain. This is where a CSS pre-processor can help.
&#10147; Sass lets you use features that do not exist in CSS, like variables, nested rules, mixins, imports, inheritance, built-in functions, and other stuff.

#### Example

Let's say we have a website with three main colors:

    #a2b9bc

    #b2ad7f

    #878f99

So, how many times do you need to type those HEX values? A LOT of times. And what about variations of the same colors?
Instead of typing the above values a lot of times, you can use Sass and write this:

    /* define variables for the primary colors */
    $primary_1: #a2b9bc;
    $primary_2: #b2ad7f;
    $primary_3: #878f99;

    /* use the variables */
    .main-header {
      background-color: $primary_1;
    }

    .menu-left {
      background-color: $primary_2;
    }

    .menu-right {
      background-color: $primary_3;
    }

So, when using Sass, and the primary color changes, you only need to change it in one place.

### How Does Sass Work?

&#10148; A browser does not understand Sass code. Therefore, you will need a Sass pre-processor to convert Sass code into standard CSS.
&#10148; This process is called transpiling. So, you need to give a transpiler (some kind of program) some Sass code and then get some CSS code back.

<b>Note</b>&#10071; Transpiling is a term for taking a source code written in one language and transform/translate it into another language

### Sass File Type

&#10148; Sass files has the ".scss" file extension.

### Sass Comments

&#10148; Sass supports standard CSS comments /_ comment _/, and in addition it supports inline comments // comment:

#### Example

    /* define primary colors */
    $primary_1: #a2b9bc;
    $primary_2: #b2ad7f;

    /* use the variables */
    .main-header {
      background-color: $primary_1; // here you can put an inline comment
    }

## System Requirements for Sass

- <strong>Operating system</strong> - Sass is platform independent
- <strong>Browser support</strong> - Sass works in Edge/IE (from IE 8), Firefox, Chrome, Safari, Opera
- <strong>Programming language</strong> - Sass is based on Ruby

### Official Sass Web Site

&#10149; Read more about Sass at the official Sass web site: https://sass-lang.com/

### Install Sass

&#10149; There are several ways to install Sass in your system. There are many applications that will get you up and running with Sass in a few minutes for Mac, Windows, and Linux. Some of these are free, but some are paid apps.
&#10149; You can read more about them here: sass-lang.com/install

## Sass Variables

&#10150; Variables are a way to store information that you can re-use later.

&#10150; With Sass, you can store information in variables, like:

- strings
- numbers
- colors
- booleans
- lists
- nulls
  <b>Note</b>&#10071; Sass uses the $ symbol, followed by a name, to declare variables:

&#10150; The following example declares 4 variables named myFont, myColor, myFontSize, and myWidth. After the variables are declared, you can use the variables wherever you want:

#### Example

    SCSS Syntax:

      $myFont: Helvetica, sans-serif;
      $myColor: red;
      $myFontSize: 18px;
      $myWidth: 680px;

      body {
        font-family: $myFont;
        font-size: $myFontSize;
        color: $myColor;
      }

      #container {
        width: $myWidth;
      }

&#10150; So, when the Sass file is transpiled, it takes the variables (myFont, myColor, etc.) and outputs normal CSS with the variable values placed in the CSS, like this:

    CSS Output:

      body {
        font-family: Helvetica, sans-serif;
        font-size: 18px;
        color: red;
      }

      #container {
        width: 680px;
      }

### Sass Variable Scope

&#10151; Sass variables are only available at the level of nesting where they are defined.
&#10151; Look at the following example:

#### Example

    SCSS Syntax:

      $myColor: red;

      h1 {
        $myColor: green;
        color: $myColor;
      }

      p {
        color: $myColor;
      }

&#10151; Will the color of the text inside a `<p>` tag be red or green? It will be red!
&#10151; The other definition, $myColor: green; is inside the `<h1>` rule, and will only be available there!
&#10151; So, the CSS output will be:

    CSS Output:

      h1 {
        color: green;
      }

      p {
        color: red;
      }

### Using Sass !global

&#10152; The default behavior for variable scope can be overridden by using the `!global` switch.
&#10152; `!global` indicates that a variable is global, which means that it is accessible on all levels.
&#10152; Look at the following example (same as above; but with `!global` added):

#### Example

    SCSS Syntax:

      $myColor: red;

      h1 {
        $myColor: green !global;
        color: $myColor;
      }

      p {
        color: $myColor;
      }

&#10152; Now the color of the text inside a `<p>` tag will be green!
&#10152; So, the CSS output will be:

    CSS Output:

      h1 {
        color: green;
      }

      p {
        color: green;
      }

<b>Note</b>&#10071; Global variables should be defined outside any rules. It could be wise to define all global variables in its own file, named "\_globals.scss", and include the file with the <u>@include</u> keyword.

## Sass Nested Rules

&#10153; Sass lets you nest CSS selectors in the same way as HTML.
&#10153; Look at an example of some Sass code for a site's navigation:

#### Example

    SCSS Syntax:

      nav {
        ul {
          margin: 0;
          padding: 0;
          list-style: none;
        }
        li {
          display: inline-block;
        }
        a {
          display: block;
          padding: 6px 12px;
          text-decoration: none;
        }
      }

&#10153; Notice that in Sass, the ul, li, and a selectors are nested inside the nav selector.
&#10153; While in CSS, the rules are defined one by one (not nested):

    CSS Syntax:

      nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      nav li {
        display: inline-block;
      }
      nav a {
        display: block;
        padding: 6px 12px;
        text-decoration: none;
      }

&#10153; Because you can nest properties in Sass, it is cleaner and easier to read than standard CSS.

### Sass Nested Properties

&#10154; Many CSS properties have the same prefix, like font-family, font-size and font-weight or text-align, text-transform and text-overflow.
&#10154; With Sass you can write them as nested properties:

#### Example

    SCSS Syntax:

      font: {
        family: Helvetica, sans-serif;
        size: 18px;
        weight: bold;
      }

      text: {
        align: center;
        transform: lowercase;
        overflow: hidden;
      }

&#10154; The Sass transpiler will convert the above to normal CSS:

    CSS Output:

      font-family: Helvetica, sans-serif;
      font-size: 18px;
      font-weight: bold;

      text-align: center;
      text-transform: lowercase;
      text-overflow: hidden;

## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders12/photos/media.jpg)