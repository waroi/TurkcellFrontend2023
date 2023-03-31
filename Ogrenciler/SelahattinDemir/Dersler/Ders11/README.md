[Turn Back](../../)

<h1 align="center">Ders11 - z-index Property</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## The z-index Property

&#10147; The `z-index` property specifies the stack order of an element.

&#10147; When elements are positioned, they can overlap other elements.
&#10147; The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others).

&#10147; An element can have a positive or negative stack order:

### Example
    img {
      position: absolute;
      left: 0px;
      top: 0px;
      z-index: -1;
    }

### Result:
![alt text](./photos/z-index.jpg)

<b>Note</b>&#10071; `z-index` only works on <u>positioned elements</u>(position: absolute, position: relative, position: fixed, or position: sticky) and <u>flex items</u> (elements that are direct children of display: flex elements).

### Example
    Here we see that an element with greater stack order is always above an element with a lower stack order:

        <html>
        <head>
        <style>
        .container {
          position: relative;
        }

        .black-box {
          position: relative;
          z-index: 1;
          border: 2px solid black;
          height: 100px;
          margin: 30px;
        }

        .gray-box {
          position: absolute;
          z-index: 3;
          background: lightgray;
          height: 60px;
          width: 70%;
          left: 50px;
          top: 50px;
        }

        .green-box {
          position: absolute;
          z-index: 2;
          background: lightgreen;
          width: 35%;
          left: 270px;
          top: -15px;
          height: 100px;
        }
        </style>
        </head>
        <body>

        <div class="container">
          <div class="black-box">Black box</div>
          <div class="gray-box">Gray box</div>
          <div class="green-box">Green box</div>
        </div>

        </body>
        </html>

### Result:
![alt text](./photos/z-index2.jpg)


## Without z-index

&#10148; If two positioned elements overlap each other without a z-index specified, the element defined last in the HTML code will be shown on top.

### Example
    Same example as above, but here with no z-index specified:

        <html>
        <head>
        <style>
        .container {
          position: relative;
        }

        .black-box {
          position: relative;
          border: 2px solid black;
          height: 100px;
          margin: 30px;
        }

        .gray-box {
          position: absolute;
          background: lightgray;
          height: 60px;
          width: 70%;
          left: 50px;
          top: 50px;
        }

        .green-box {
          position: absolute;
          background: lightgreen;
          width: 35%;
          left: 270px;
          top: -15px;
          height: 100px;
        }
        </style>
        </head>
        <body>

        <div class="container">
          <div class="black-box">Black box</div>
          <div class="gray-box">Gray box</div>
          <div class="green-box">Green box</div>
        </div>

        </body>
        </html>

### Result:
![alt text](./photos/z-index3.jpg)
