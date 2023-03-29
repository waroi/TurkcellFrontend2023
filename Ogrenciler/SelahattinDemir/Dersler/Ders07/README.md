[Turn Back](../../)
<h1 align="center">Ders07 - Responsive Web Design</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> </p>

# Introduction to CSS


## Responsive Web Design

### What is Responsive Web Design?

&#10147; Responsive web design makes your web page look good on all devices.
&#10147; Responsive web design uses only HTML and CSS.
&#10147; Responsive web design is not a program or a JavaScript.

### Designing For The Best Experience For All Users

&#10148; Web pages can be viewed using many different devices: desktops, tablets, and phones. Your web page should look good, and be easy to use, regardless of the device.

&#10148; Web pages should not leave out information to fit smaller devices, but rather adapt its content to fit any device:

![alt text](https://www.w3schools.com/css/rwd_desktop.png) ![alt text](https://www.w3schools.com/css/rwd_tablet.png) ![alt text](https://www.w3schools.com/css/rwd_phone.png)

&#10149; It is called responsive web design when you use CSS and HTML to resize, hide, shrink, enlarge, or move the content to make it look good on any screen.


### What is The Viewport?

&#10150; The viewport is the user's visible area of a web page.

&#10150; The viewport varies with the device, and will be smaller on a mobile phone than on a computer screen.

### Setting The Viewport

&#10151; HTML5 introduced a method to let web designers take control over the viewport, through the `<meta>` tag.

&#10151; You should include the following `<meta>` viewport element in all your web pages:

        <meta name="viewport" content="width=device-width, initial-scale=

&#10151; This gives the browser instructions on how to control the page's dimensions and scaling.

&#10151; The `width=device-width` part sets the width of the page to follow the screen-width of the device (which will vary depending on the device).

&#10151; The `initial-scale=1.0` part sets the initial zoom level when the page is first loaded by the browser.

### Size Content to The Viewport

&#10152; Users are used to scroll websites vertically on both desktop and mobile devices - but not horizontally!

&#10152; So, if the user is forced to scroll horizontally, or zoom out, to see the whole web page it results in a poor user experience.

Some additional rules to follow:

1. <b>Do NOT use large fixed width elements</b> - For example, if an image is displayed at a width wider than the viewport it can cause the viewport to scroll horizontally. Remember to adjust this content to fit within the width of the viewport.

2. <b>Do NOT let the content rely on a particular viewport width to render well</b> - Since screen dimensions and width in CSS pixels vary widely between devices, content should not rely on a particular viewport width to render well.

3. <b>Use CSS media queries to apply different styling for small and large screens</b> - Setting large absolute CSS widths for page elements will cause the element to be too wide for the viewport on a smaller device. Instead, consider using relative width values, such as width: 100%. Also, be careful of using large absolute positioning values. It may cause the element to fall outside the viewport on small devices.
