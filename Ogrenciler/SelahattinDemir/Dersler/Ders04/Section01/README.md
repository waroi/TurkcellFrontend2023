[Turn Back](../../../)
<h1 align="center">Ders04 - CSS Borders</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## Contents:
 - [Categories](#categories)
      - [CSS Borders](#css-borders)
      - [CSS Border Style](#css-border-style)
      - [CSS Border Width](#css-border-width)
      - [CSS Border Color](#css-border-color)
      - [CSS Border Sides](#css-border-sides)
      - [CSS Shorthand Border Property](#css-shorthand-border-property)
      - [CSS Rounded Borders](#css-rounded-borders)
      - [Example Website](#example-website)

## CSS Borders

The CSS border properties allow you to specify the style, width, and color of an element's border.

## CSS Border Style

The border-style property specifies what kind of border to display.
The following values are allowed:
<ul>
<li><code>dotted</code> - Defines a dotted border</li>
<li><code>dashed</code> - Defines a dashed border</li>
<li><code>solid</code> - Defines a solid border</li>
<li><code>double</code> - Defines a double border</li>
<li><code>groove</code> - Defines a 3D grooved border. The effect depends on the border-color value</li>
<li><code>ridge</code> - Defines a 3D ridged border. The effect depends on the border-color value</li>
<li><code>inset</code> - Defines a 3D inset border. The effect depends on the border-color value</li>
<li><code>outset</code> - Defines a 3D outset border. The effect depends on the border-color value</li>
<li><code>none</code> - Defines no border</li>
<li><code>hidden</code> - Defines a hidden border</li>
</ul>

![alt text](https://www.w3.org/community/webed/wiki/images/a/af/Cssed_borderstyles.png)

## CSS Border Width

The border-width property specifies the width of the four borders.

The width can be set as a specific size (in px, pt, cm, em, etc) or by using one of the three pre-defined values: thin, medium, or thick:

### Example

    p.one {
      border-style: solid;
      border-width: 5px;
    }

    p.two {
      border-style: solid;
      border-width: medium;
    }

    p.three {
      border-style: dotted;
      border-width: 2px;
    }

    p.four {
      border-style: dotted;
      border-width: thick;
    }

#### Result:

<h4 style="border:5px solid; padding:8px; margin-top:8px; margin-bottom:16px">5px border-width</h4>
<h4 style="border:medium solid;padding:8px;margin-top:8px;margin-bottom:16px">medium border-width</h4>
<h4 style="border:2px dotted;padding:8px;margin-top:8px;margin-bottom:16px">2px border-width</h4>
<h4 style="border:thick dotted;padding:8px;margin-top:8px;margin-bottom:8px">thick border-width</h4>

## CSS Border Color

The border-color property is used to set the color of the four borders.

The color can be set by:

- name - specify a color name, like "red"
- HEX - specify a HEX value, like "#ff0000"
- RGB - specify a RGB value, like "rgb(255,0,0)"
- HSL - specify a HSL value, like "hsl(0, 100%, 50%)"
- transparent

#### Note&#10071;
If border-color is not set, it inherits the color of the element.

### Example

    p.one {
      border-style: solid;
      border-color: red;
    }

    p.two {
      border-style: solid;
      border-color: green;
    }

    p.three {
      border-style: dotted;
      border-color: blue;
    }

#### Result:

<div style="border-style: solid;border-color: red;padding:8px;margin-top:8px;margin-bottom:16px">Red border</div>
<div style="border-style: solid;border-color: green;padding:8px;margin-top:8px;margin-bottom:16px">Green border</div>
<div style="border-style: dotted;border-color: blue;padding:8px;margin-top:8px;margin-bottom:8px">Blue border</div>

## CSS Border Sides

In CSS, there are also properties for specifying each of the borders (top, right, bottom, and left):

### Example

    p {
      border-top-style: dotted;
      border-right-style: solid;
      border-bottom-style: dotted;
      border-left-style: solid;
    }

#### Result:

<div style="border-style: dotted solid;padding:8px;margin:8px 0">Different Border Styles</div>

The example above gives the same result as this:

    p {
      border-style: dotted solid;
    }

So, here is how it works:

&#10147; If the border-style property has four values:

- <b>border-style: dotted solid double dashed;</b>
  * top border is dotted
  * right border is solid
  * bottom border is double
  * left border is dashed

&#10147; If the border-style property has three values:

- <b>border-style: dotted solid double;</b>
  * top border is dotted
  * right and left borders are solid
  * bottom border is double

&#10147; If the border-style property has two values:

- <b>border-style: dotted solid;</b>
  * top and bottom borders are dotted
  * right and left borders are solid

&#10147; If the border-style property has one value:

- <b>border-style: dotted;</b>
  * all four borders are dotted

## CSS Shorthand Border Property

To shorten the code, it is also possible to specify all the individual border properties in one property.

The border property is a shorthand property for the following individual border properties:

- border-width
- border-style (required)
- border-color

### Example

    p {
      border: 5px solid red;
    }

#### Result:

<p style="border:5px solid red;padding:2px">Some text</p>

#### Note&#10071;
You can also specify all the individual border properties for just one side:

### Left Border

    p {
      border-left: 6px solid red;
    }

#### Result:

<p style="border-left:6px solid red;padding:5px 5px;">Some text</p>

### Bottom Border

    p {
      border-bottom: 6px solid red;
    }

#### Result:

<p style="border-bottom:6px solid red;padding:5px 5px;">Some text</p>

## CSS Rounded Borders

The border-radius property is used to add rounded borders to an element:

### Example

    p.normal {
      border: 2px solid red;
      padding: 5px;
    }

    p.round1 {
      border: 2px solid red;
      border-radius: 5px;
      padding: 5px;
    }

    p.round2 {
      border: 2px solid red;
      border-radius: 8px;
      padding: 5px;
    }

    p.round3 {
      border: 2px solid red;
      border-radius: 12px;
      padding: 5px;
    }

#### Result:

<p style="border: 2px solid red;padding:5px;">Normal border</p>
<p style="border: 2px solid red;border-radius: 5px;padding:5px;">Round border</p>
<p style="border: 2px solid red;border-radius: 8px;padding:5px;">Rounder border</p>
<p style="border: 2px solid red;border-radius: 12px;padding:5px;">Roundest border</p>


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/main/Ogrenciler/SelahattinDemir/Dersler/Ders04/Section01/photos/section01.jpg)

