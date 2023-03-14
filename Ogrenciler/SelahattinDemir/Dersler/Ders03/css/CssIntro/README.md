[Turn Back](../../../../)
<h1 align="center">Ders03 - CSS Intro</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## Contents:
 - [Categories](#categories)
      - [How To Add CSS](#how-to-add-css)
      - [External CSS](#external-css)
      - [Internal CSS](#internal-css)
      - [Inline CSS](#inline-css)
      - [Cascading Order](#cascading-order)


## How To Add CSS

### Three Ways to Insert CSS

- External CSS
- Internal CSS
- Inline CSS

## External CSS

With an external style sheet, you can change the look of an entire website by changing just one file!

Each HTML page must include a reference to the external style sheet file inside the `<link>` element, inside the head section.

### Example

    <!DOCTYPE html>
    <html>
      <head>
        <link rel="stylesheet" href="mystyle.css">
      </head>
      <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

      </body>
    </html>


### Note&#10071;
&#10147; An external style sheet can be written in any text editor, and must be saved with a .css extension.
&#10147; The external .css file should not contain any HTML tags.

#### Here is how the "style.css" file looks:

    body {
      background-color: lightblue;
    }

    h1 {
      color: navy;
      margin-left: 20px;
    }

## Internal CSS

An internal style sheet may be used if one single HTML page has a unique style.

The internal style is defined inside the `<style>` element, inside the head section.

### Example

    <!DOCTYPE html>
    <html>
      <head>
        <style>
        body {
          background-color: linen;
        }

        h1 {
          color: maroon;
          margin-left: 40px;
        }
        </style>
      </head>
      <body>

        <h1>This is a heading</h1>
        <p>This is a paragraph.</p>

      </body>
    </html>

## Inline CSS

An inline style may be used to apply a unique style for a single element.

To use inline styles, add the style attribute to the relevant element. The style attribute can contain any CSS property.

### Example

    <!DOCTYPE html>
    <html>
      <body>

        <h1 style="color:blue;text-align:center;">This is a heading</h1>
        <p style="color:red;">This is a paragraph.</p>

      </body>
    </html>

&#10067;<strong>Tip: </strong> An inline style loses many of the advantages of a style sheet (by mixing content with presentation). Use this method sparingly.

## Cascading Order

What style will be used when there is more than one style specified for an HTML element&#10067;
All the styles in a page will "cascade" into a new "virtual" style sheet by the following rules, where number one has the highest priority:

1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

- So, an inline style has the highest priority, and will override external and internal styles and browser defaults.


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/main/Ogrenciler/SelahattinDemir/Dersler/Ders03/css/CssIntro/photos/cssintro.jpg)

