[Turn Back](../../)

<h1 align="center">Ders13 - SASS</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## Contents:
 - [Categories](#categories)
      - [Sass @import and Partials](#sass-import-and-partials)
      - [Sass @mixin and @include](#sass-mixin-and-include)
      - [Sass @extend Directive](#sass-extend-directive)



## Sass @import and Partials

&#10147; Sass keeps the CSS code DRY (Don't Repeat Yourself). One way to write DRY code is to keep related code in separate files.

&#10147; You can create small files with CSS snippets to include in other Sass files. Examples of such files can be: reset file, variables, colors, fonts, font-sizes, etc. 

### Sass Importing Files

&#10147; Just like CSS, Sass also supports the `@import` directive.

&#10147; The `@import` directive allows you to include the content of one file in another.

&#10147; The CSS `@import` directive has a major drawback due to performance issues; it creates an extra HTTP request each time you call it. However, the Sass `@import` directive includes the file in the CSS; so no extra HTTP call is required at runtime!

<b>Note</b>&#10071; You do not need to specify a file extension, Sass automatically assumes that you mean a .sass or .scss file. You can also import CSS files. The `@import` directive imports the file and any variables or mixins defined in the imported file can then be used in the main file.

&#10147; You can import as many files as you need in the main file:

#### Example
    @import "variables";
    @import "colors";
    @import "reset";


&#10147; Let's look at an example: Let's assume we have a reset file called "reset.scss", that looks like this:

#### Example
    SCSS Syntax (reset.scss):

      html,
      body,
      ul,
      ol {
        margin: 0;
        padding: 0;
      }

and now we want to import the "reset.scss" file into another file called "standard.scss".

Here is how we do it: It is normal to add the `@import` directive at the top of a file; this way its content will have a global scope:

    SCSS Syntax (standard.scss):

      @import "reset";

      body {
        font-family: Helvetica, sans-serif;
        font-size: 18px;
        color: red;
      }

So, when the "standard.css" file is transpiled, the CSS will look like this:

    CSS output:

      html, body, ul, ol {
        margin: 0;
        padding: 0;
      }

      body {
        font-family: Helvetica, sans-serif;
        font-size: 18px;
        color: red;
      }

### Sass Partials

&#10148; By default, Sass transpiles all the .scss files directly. However, when you want to import a file, you do not need the file to be transpiled directly.

&#10148; Sass has a mechanism for this: If you start the filename with an underscore, Sass will not transpile it. Files named this way are called partials in Sass.

&#10148; So, a partial Sass file is named with a leading underscore:

The following example shows a partial Sass file named "_colors.scss". (This file will not be transpiled directly to "colors.css"):

#### Example
    "_colors.scss":

      $myPink: #EE82EE;
      $myBlue: #4169E1;
      $myGreen: #8FBC8F;

Now, if you import the partial file, omit the underscore. Sass understands that it should import the file "_colors.scss":

    @import "colors";

    body {
      font-family: Helvetica, sans-serif;
      font-size: 18px;
      color: $myBlue;
    }


## Sass @mixin and @include

&#10149; The `@mixin` directive lets you create CSS code that is to be reused throughout the website.

&#10149; The `@include` directive is created to let you use (include) the mixin.

### Defining a Mixin

&#10149; A mixin is defined with the `@mixin` directive.

&#10149; The following example creates a mixin named "important-text":

    SCSS Syntax:

      @mixin important-text {
        color: red;
        font-size: 25px;
        font-weight: bold;
        border: 1px solid blue;
      }

<b>Note</b>&#10071;  A tip on hyphens and underscore in Sass: Hyphens and underscores are considered to be the same. This means that @mixin important-text { } and @mixin important_text { } are considered as the same mixin!


### Using a Mixin

&#10149; The `@include directive is used to include a mixin.

&#10149; So, to include the important-text mixin created above:

    SCSS Syntax:

      .danger {
        @include important-text;
        background-color: green;
      }

The Sass transpiler will convert the above to normal CSS:

    CSS output:

      .danger {
        color: red;
        font-size: 25px;
        font-weight: bold;
        border: 1px solid blue;
        background-color: green;
      }

A mixin can also include other mixins:

    SCSS Syntax:

      @mixin special-text {
        @include important-text;
        @include link;
        @include special-border;
      }

### Passing Variables to a Mixin

&#10150; Mixins accept arguments. This way you can pass variables to a mixin.

&#10150; Here is how to define a mixin with arguments:

    SCSS Syntax:

      /* Define mixin with two arguments */
      @mixin bordered($color, $width) {
        border: $width solid $color;
      }

      .myArticle {
        @include bordered(blue, 1px);  // Call mixin with two values
      }

      .myNotes {
        @include bordered(red, 2px); // Call mixin with two values
      }

&#10150; Notice that the arguments are set as variables and then used as the values (color and width) of the border property.

&#10150; After compilation, the CSS will look like this:

    CSS Output:

      .myArticle {
        border: 1px solid blue;
      }

      .myNotes {
        border: 2px solid red;
      }

### Default Values for a Mixin

&#10151; It is also possible to define default values for mixin variables:

    SCSS Syntax:

      @mixin bordered($color: blue, $width: 1px) {
        border: $width solid $color;
      }

Then, you only need to specify the values that change when you include the mixin:

    SCSS Syntax:

      .myTips {
        @include bordered($color: orange);
      }


### Using a Mixin For Vendor Prefixes

&#10152; Another good use of a mixin is for vendor prefixes.

&#10152; Here is an example for transform:

    SCSS Syntax:

      @mixin transform($property) {
        -webkit-transform: $property;
        -ms-transform: $property;
        transform: $property;
      }

      .myBox {
        @include transform(rotate(20deg));
      }

After compilation, the CSS will look like this:

    CSS Output:

      .myBox {
        -webkit-transform: rotate(20deg);
        -ms-transform: rotate(20deg);
        transform: rotate(20deg);
      }


## Sass @extend Directive

&#10153; The `@extend` directive lets you share a set of CSS properties from one selector to another.

&#10153; The `@extend` directive is useful if you have almost identically styled elements that only differ in some small details.

&#10153; The following Sass example first creates a basic style for buttons (this style will be used for most buttons). Then, we create one style for a "Report" button and one style for a "Submit" button. Both "Report" and "Submit" button inherit all the CSS properties from the .button-basic class, through the `@extend` directive. In addition, they have their own colors defined:

    SCSS Syntax:

      .button-basic  {
        border: none;
        padding: 15px 30px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }

      .button-report  {
        @extend .button-basic;
        background-color: red;
      }

      .button-submit  {
        @extend .button-basic;
        background-color: green;
        color: white;
      }

After compilation, the CSS will look like this:

    CSS Output:

      .button-basic, .button-report, .button-submit {
        border: none;
        padding: 15px 30px;
        text-align: center;
        font-size: 16px;
        cursor: pointer;
      }

      .button-report  {
        background-color: red;
      }

      .button-submit  {
        background-color: green;
        color: white;
      }

&#10153; By using the `@extend` directive, you do not need to specify several classes for an element in your HTML code, like this: `<button class="button-basic button-report">Report this</button>`. You just need to specify .button-report to get both sets of styles.

&#10153; The `@extend` directive helps keep your Sass code very DRY.

