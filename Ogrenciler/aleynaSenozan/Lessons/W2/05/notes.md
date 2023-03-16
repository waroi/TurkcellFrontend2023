<h1 align="center">Week 02 Lesson 05</h1>

|Key Codes|Description|
|---|---|
|Pseudo Class|CSS selector for special states: <ul style="list-style-type:none;"><li>0 - hover</li><li>1 - visited</li><li>2 - last-child</li><li>3 - nth-child</li></ul>|
|Pseudo Element|CSS style for specific parts: <ul style="list-style-type:none;"><li>0 - first-line</li><li>1 - first-letter</li><li>2 - after</li><li>3 - before</li></ul>|
|@media only screen and (max-width: __px)|CSS media query for responsiveness|



<h2 align="center"><br>CSS flex Property</h2>

:exclamation::exclamation:[A Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

## display
This defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.


    .container {
      display: flex;
    }

## flex-direction
This establishes the main-axis, thus defining the direction flex items are placed in the flex container. Flexbox is (aside from optional wrapping) a single-direction layout concept. Think of flex items as primarily laying out either in horizontal rows or vertical columns.


    .container {
      flex-direction: row | row-reverse | column | column-reverse;
    }

## flex-wrap
By default, flex items will all try to fit onto one line. You can change that and allow the items to wrap as needed with this property.


    .container {
      flex-wrap: nowrap | wrap | wrap-reverse;
    }

## justify-content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.


    .container {
      justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }

## justify-content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.


    .container {
      justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }


## justify-content
This defines the alignment along the main axis. It helps distribute extra free space leftover when either all the flex items on a line are inflexible, or are flexible but have reached their maximum size. It also exerts some control over the alignment of items when they overflow the line.


    .container {
      justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly;
    }



## align-items
This defines the default behavior for how flex items are laid out along the cross axis on the current line. Think of it as the justify-content version for the cross-axis.


    .container {
      align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end;
    }




