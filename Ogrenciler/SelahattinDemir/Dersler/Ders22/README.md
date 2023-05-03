[Turn Back](../../)

<h1 align="center">Ders22 - JavaScript DOM</h1>

<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> </p>

# JavaScript Introduction

## Contents:

- [Categories](#categories)
  - [JavaScript HTML DOM](#javascript-html-dom)
  - [Finding HTML Elements](#finding-html-elements)
  - [Changing HTML Elements](#changing-html-elements)
  - [Adding and Deleting Elements](#adding-and-deleting-elements)
  - [Adding Events Handlers](#adding-events-handlers)
  - [Finding HTML Objects](#finding-html-objects)
  - [Example Website](#example-website)

## JavaScript HTML DOM

&#10147; With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

### The HTML DOM (Document Object Model)

&#10147; The <b>HTML DOM</b> (Document Object Model) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The HTML DOM tree structure is represented by the browsers as a tree structure. The HTML DOM is constructed as a tree of <b>Objects</b>:

<div align="center">
 <img src="https://www.w3schools.com/js/pic_htmltree.gif" alt="" />
 </div>

&#10147; With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can change all the HTML elements in the page
- JavaScript can change all the HTML attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can remove existing HTML elements and attributes
- JavaScript can add new HTML elements and attributes
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

### What is the DOM?

&#10147; The DOM is a W3C (World Wide Web Consortium) standard.

&#10147; The DOM defines a standard for accessing documents:

* "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document."

&#10147; The W3C DOM standard is separated into 3 different parts:

- Core DOM - standard model for all document types
- XML DOM - standard model for XML documents
- HTML DOM - standard model for HTML documents

### What is the HTML DOM?

&#10147; The HTML DOM is a standard <b>object</b> model and <b>programming interface</b> for HTML. It defines:

- The HTML elements as <b>objects</b>
- The <b>properties</b> of all HTML elements
- The <b>methods</b> to access all HTML elements
- The <b>events</b> for all HTML elements

&#10147; In other words: <b>The HTML DOM is a standard for how to get, change, add, or delete HTML elements</b>.

### HTML DOM Methods

&#10148; The HTML DOM can be accessed with JavaScript (and with other programming languages).

&#10148; In the DOM, all HTML elements are defined as <b>objects</b>.

&#10148; The programming interface is the properties and methods of each object.

&#10148; A <b>property</b> is a value that you can get or set (like changing the content of an HTML element).

&#10148; A <b>method</b> is an action you can do (like add or deleting an HTML element).

### Example

&#10148; The following example changes the content (the `innerHTML`) of the `<p>` element with `id="demo"`:

    <html>
    <body>

    <p id="demo"></p>

    <script>
    document.getElementById("demo").innerHTML = "Hello World!";
    </script>

    </body>
    </html>

&#10148; In the example above, `getElementById` is a method, while `innerHTML` is a property.

### The getElementById Method

&#10148; The most common way to access an HTML element is to use the `id` of the element.

&#10148; In the example above the method `document.getElementById("demo")` returns the element that has the ID attribute with the value of `demo`.

### The innerHTML Property

&#10148; The easiest way to get the content of an element is by using the `innerHTML` property.

&#10148; The `innerHTML` property is useful for getting or replacing the content of HTML elements.

<b>Note</b>&#10071; The `innerHTML` property can be used to get or change any HTML element, including `<html>` and `<body>`.

## Finding HTML Elements

<table>
<tbody><tr>
<th style="width:50%">Method</th>
<th>Description</th>
</tr>
<tr>
  <td>document.getElementById(<em>id</em>)</td>
  <td>Find an element by element id</td>
</tr>
<tr>
  <td>document.getElementsByTagName(<em>name</em>)</td>
  <td>Find elements by tag name</td>
</tr>
<tr>
  <td>document.getElementsByClassName(<em>name</em>)</td>
  <td>Find elements by class name</td>
</tr>
</tbody></table>

## Changing HTML Elements

<table>
<tbody><tr>
<th style="width:50%">Property</th>
<th>Description</th>
</tr>
<tr>
  <td>element.innerHTML =  <em>new html content</em></td>
  <td>Change the inner HTML of an element</td>
</tr>
<tr>
  <td>element.attribute =  <em>new value</em></td>
  <td>Change the attribute value of an HTML element</td>
</tr>
<tr>
  <td>element.style.property =  <em>new style</em></td>
  <td>Change the style of an HTML element</td>
</tr>
<tr>
<th style="width:50%">Method</th>
<th>Description</th>
</tr>
<tr>
  <td><em>element</em>.setAttribute<em>(attribute, value)</em></td>
  <td>Change the attribute value of an HTML element</td>
</tr>
</tbody></table>

## Adding and Deleting Elements

<table>
<tbody><tr>
<th style="width:50%">Method</th>
<th>Description</th>
</tr>
<tr>
  <td>document.createElement(<em>element</em>)</td>
  <td>Create an HTML element</td>
</tr>
<tr>
  <td>document.removeChild(<em>element</em>)</td>
  <td>Remove an HTML element</td>
</tr>
<tr>
  <td>document.appendChild(<em>element</em>)</td>
  <td>Add an HTML element</td>
</tr>
<tr>
  <td>document.replaceChild(<em>new, old</em>)</td>
  <td>Replace an HTML element</td>
</tr>
<tr>
  <td>document.write(<em>text</em>)</td>
  <td>Write into the HTML output stream</td>
</tr>
</tbody></table>

## Adding Events Handlers

<table>
<tbody><tr>
<th style="width:50%">Event</th>
<th>Description</th>
</tr>
<tr>
  <td>onchange</td>
  <td>An HTML element has been changed</td>
</tr>
<tr>
  <td>onclick</td>
  <td>The user clicks an HTML element</td>
</tr>
<tr>
  <td>onmouseover</td>
  <td>The user moves the mouse over an HTML element</td>
</tr>
<tr>
  <td>onmouseout</td>
  <td>The user moves the mouse away from an HTML element</td>
</tr>
<tr>
  <td>onkeydown</td>
  <td>The user pushes a keyboard key</td>
</tr>
<tr>
  <td>onload</td>
  <td>The browser has finished loading the page</td>
</tr>
</tbody></table>

## Finding HTML Objects

&#10149; With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

<table>
<tbody><tr>
<th>Property</th>
<th>Description</th>
<th>DOM</th>
</tr>
<tr>
  <td>document.anchors</td>
  <td>Returns all &lt;a&gt; elements that have a name attribute</td>
  <td>1</td>
</tr>
<tr>
  <td>document.applets</td>
  <td><span>Deprecated</span></td>
  <td>1</td>
</tr>
<tr>
  <td>document.baseURI</td>
  <td>Returns the absolute base URI of the document</td>
  <td>3</td>
</tr>
<tr>
  <td>document.body</td>
  <td>Returns the &lt;body&gt; element </td>
  <td>1</td>
</tr>
<tr>
  <td>document.cookie</td>
  <td>Returns the document's cookie</td>
  <td>1</td>
</tr>
<tr>
  <td>document.doctype</td>
  <td>Returns the document's doctype</td>
  <td>3</td>
</tr>
<tr>
  <td>document.documentElement</td>
  <td>Returns the &lt;html&gt; element </td>
  <td>3</td>
</tr>
<tr>
  <td>document.documentMode</td>
  <td>Returns the mode used by the browser</td>
  <td>3</td>
</tr>
<tr>
  <td>document.documentURI</td>
  <td>Returns the URI of the document </td>
  <td>3</td>
</tr>
<tr>
  <td>document.domain</td>
  <td>Returns the domain name of the document server </td>
  <td>1</td>
</tr>
<tr>
  <td>document.domConfig</td>
  <td><span>Obsolete.</span></td>
  <td>3</td>
</tr>
<tr>
  <td>document.embeds</td>
  <td>Returns all &lt;embed&gt; elements</td>
  <td>3</td>
</tr>
<tr>
  <td>document.forms</td>
  <td>Returns all &lt;form&gt; elements </td>
  <td>1</td>
</tr>
<tr>
  <td>document.head</td>
  <td>Returns the &lt;head&gt; element</td>
  <td>3</td>
</tr>
<tr>
  <td>document.images</td>
  <td>Returns all &lt;img&gt; elements </td>
  <td>1</td>
</tr>
<tr>
  <td>document.implementation</td>
  <td>Returns the DOM implementation</td>
  <td>3</td>
</tr>
<tr>
  <td>document.inputEncoding</td>
  <td>Returns the document's encoding (character set)</td>
  <td>3</td>
</tr>
<tr>
  <td>document.lastModified</td>
  <td>Returns the date and time the document was updated</td>
  <td>3</td>
</tr>
<tr>
  <td>document.links</td>
  <td>Returns all &lt;area&gt; and &lt;a&gt; elements that have a href attribute</td>
  <td>1</td>
</tr>
<tr>
  <td>document.readyState</td>
  <td>Returns the (loading) status of the document</td>
  <td>3</td>
</tr>
<tr>
  <td>document.referrer</td>
  <td>Returns the URI of the referrer (the linking document)</td>
  <td>1</td>
</tr>
<tr>
  <td>document.scripts</td>
  <td>Returns all &lt;script&gt; elements</td>
  <td>3</td>
</tr>
<tr>
  <td>document.strictErrorChecking</td>
  <td>Returns if error checking is enforced</td>
  <td>3</td>
</tr>
<tr>
  <td>document.title</td>
  <td>Returns the &lt;title&gt; element </td>
  <td>1</td>
</tr>
<tr>
  <td>document.URL</td>
  <td>Returns the complete URL of the document </td>
  <td>1</td>
</tr>
</tbody></table>


## Example Website

![alt text](https://github.com/waroi/TurkcellFrontend2023/blob/develop/Ogrenciler/SelahattinDemir/Dersler/Ders22/photos/media.gif)
