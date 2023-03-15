[Turn Back](../../../../)
<h1 align="center">Ders03 - CSS Box</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## CSS Box Model

In CSS, the term "box model" is used when talking about design and layout.

The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content. The image below illustrates the box model:

![alt text](https://www.washington.edu/accesscomputing/webd2/student/unit3/images/boxmodel.gif)

#### Explanation of the different parts:
- <b>Content: </b> The content of the box, where text and images appear
- <b>Padding: </b> Clears an area around the content. The padding is transparent
- <b>Border: </b> A border that goes around the padding and content
- <b>Margin: </b> Clears an area outside the border. The margin is transparent

&#10147; The box model allows us to add a border around elements, and to define space between elements. 

### Example

    div {
      width: 300px;
      border: 15px solid green;
      padding: 50px;
      margin: 20px;
    }

## Width and Height of an Element

### Important&#10071;
When you set the width and height properties of an element with CSS, you just set the width and height of the <b>content area</b>. To calculate the full size of an element, you must also add padding, borders and margins.

### Example

    div {
      width: 320px;
      padding: 10px;
      border: 5px solid gray;
      margin: 0;
    }

#### Here is the calculation:

320px (width)
+20px (left + right padding)
+10px (left + right border)
+0px (left + right margin)
<strong>= 350px
</strong>

&#10147;The total width of an element should be calculated like this:
Total element width = width + left padding + right padding + left border + right border + left margin + right margin
&#10147;The total height of an element should be calculated like this:
Total element height = height + top padding + bottom padding + top border + bottom border + top margin + bottom margin


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/main/Ogrenciler/SelahattinDemir/Dersler/Ders03/css/Box/photos/box.jpg)

