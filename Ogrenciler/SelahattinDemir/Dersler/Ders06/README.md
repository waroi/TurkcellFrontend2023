[Turn Back](../../)
<h1 align="center">Ders06 - CSS Flexbox</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS

## Contents:
 - [Categories](#categories)
      - [CSS Flex Items](#css-flex-items)
      - [The order Property](#the-order-property)
      - [The flex-grow Property](#the-flex-grow-property)
      - [The flex-shrink Property](#the-flex-shrink-property)
      - [The flex-basis Property](#the-flex-basis-property)
      - [The flex Property](#the-flex-property)
      - [The align-self Property](#the-align-self-property)
      - [CSS Flex Responsive](#css-flex-responsive)


## CSS Flex Items

### Child Elements (Items)
&#10147; The direct child elements of a flex container automatically becomes flexible (flex) items.

The flex item properties are:

- order
- flex-grow
- flex-shrink
- flex-basis
- flex
- align-self

## The order Property

&#10148; The `order` property specifies the order of the flex items.
&#10148; The `order` value must be a number, default value is 0.

##### Example
        The "order" property can change the order of the flex items:

                <div class="flex-container">
                <div style="order: 3">1</div>
                <div style="order: 2">2</div>
                <div style="order: 4">3</div>
                <div style="order: 1">4</div>
                </div>

#### Result:
![alt text](./photos/flex.jpg)


## The flex-grow Property

&#10149; The `flex-grow` property specifies how much a flex item will grow relative to the rest of the flex items.
&#10071;&#10071;&#10071; The value must be a number, default value is 0.

#### Example
        Make the third flex item grow eight times faster than the other flex items:

                <div class="flex-container">
                <div style="flex-grow: 1">1</div>
                <div style="flex-grow: 1">2</div>
                <div style="flex-grow: 8">3</div>
                </div>

#### Result:
![alt text](./photos/flex1.jpg)


## The flex-shrink Property

&#10150; The `flex-shrink` property specifies how much a flex item will shrink relative to the rest of the flex items.
&#10071;&#10071;&#10071; The value must be a number, default value is 1.

#### Example
        Do not let the third flex item shrink as much as the other flex items:

                <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div style="flex-shrink: 0">3</div>
                <div>4</div>
                <div>5</div>
                <div>6</div>
                <div>7</div>
                <div>8</div>
                <div>9</div>
                <div>10</div>
                </div>

#### Result:
![alt text](./photos/flex2.jpg)


## The flex-basis Property

&#10151; The `flex-basis` property specifies the initial length of a flex item.

#### Example
        Set the initial length of the third flex item to 200 pixels:

                <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div style="flex-basis: 200px">3</div>
                <div>4</div>
                </div>

#### Result:
![alt text](./photos/flex3.jpg)


## The flex Property

&#10152; The `flex` property is a shorthand property for the `flex-grow`, `flex-shrink`, and `flex-basis` properties.

#### Example
        Make the third flex item not growable (0), not shrinkable (0), and with an initial length of 200 pixels:

                <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div style="flex: 0 0 200px">3</div>
                <div>4</div>
                </div>

#### Result:
![alt text](./photos/flex3.jpg)


## The align-self Property

&#10163; The `align-self` property specifies the alignment for the selected item inside the flexible container.

&#10071;&#10071;&#10071; The `align-self` property overrides the default alignment set by the container's `align-items` property.

#### Example
        Align the third flex item in the middle of the container:

                <div class="flex-container">
                <div>1</div>
                <div>2</div>
                <div style="align-self: center">3</div>
                <div>4</div>
                </div>

#### Result:
![alt text](./photos/flex4.jpg)


## CSS Flex Responsive

&#10164; For example, if you want to create a two-column layout for most screen sizes, and a one-column layout for small screen sizes (such as phones and tablets), you can change the `flex-direction` from `row` to `column` at a specific breakpoint

#### Example
        .flex-container {
        display: flex;
        flex-direction: row;
        }

        /* Responsive layout - makes a one column layout instead of a two-column layout */
        @media (max-width: 800px) {
        .flex-container {
            flex-direction: column;
        }
        }

#### width > 800px to Result:  
![alt text](./photos/flex6.jpg)
#### width < 800px to Result:
![alt text](./photos/flex5.jpg)

&#10071;&#10071;&#10071; Another way is to change the percentage of the `flex` property of the flex items to create different layouts for different screen sizes. Note that we also have to include `flex-wrap: wrap;` on the flex container for this example to work:

        .flex-container {
        display: flex;
        flex-wrap: wrap;
        }

        .flex-item-left {
        flex: 50%;
        }

        .flex-item-right {
        flex: 50%;
        }

        /* Responsive layout - makes a one column layout instead of a two-column layout */
        @media (max-width: 800px) {
        .flex-item-right, .flex-item-left {
            flex: 100%;
        }
        }

