<h1 align="center">Ders02 Notu</h1>



<h3 align="center">Languages and Tools:</h3>
<p align="center"><a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> </p>

# Introduction to HTML

## Contents:
 - [Categories](#categories)
      - [Table Tags](#table-tags)
      - [Iframe (The Inline Frame) Tag](#iframe-the-inline-frame-tag)
      - [Video Tag](#video-tag)
      - [Audio Tag](#audio-tag)
      - [Example Website](#example-website)

## Table Tags

`<table>` tags allows us to create a table. It presents a two-dimensional table of rows and columns. <br>
`<thead>` tag: Header related tags are written inside this tag.<br>
The `<tr>` tag represents rows in the table. <br>
`<th>` (table header cell): This tag is used to specify the header cells of the table. It is usually displayed in a bold and centered manner.
It is written inside the `<thead>` tag.<br>
`<tbody>` tag: Description lines are written inside this tag.<br>
`<td>` table data cell): This tag is used to specify the data cells in the table. It is usually displayed thin and left aligned.
It is written inside the `<tbody>` tag.<br>

    <table >
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Selahattin</td>
          <td>Demir</td>
        </tr>
      </tbody>
    </table>

Output of the code:

<table >
  <thead>
    <tr>
      <th>Name</th>
      <th>Surname</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Selahattin</td>
      <td>Demir</td>
   </tr>
  </tbody>
</table>

<h4><strong>Note&#10071;</strong></h4>
    <p>&#10147; The use of `thead ` and `tbody` tags is not mandatory, but recommended for SEO.</p>
    <p>&#10147; Before `table` tags, `iframe` tags were used.</p>
 
## Iframe (The Inline Frame) Tag

`<iframe>` is an HTML tag that helps us to call and display a different web page inside a web page. <br>
&#10147; The link of the content you want to add to the src attribute is given.<br>
&#10147; The width and height attributes set the size of the content.

    <iframe  src="https://getbootstrap.com"  width="280px"  height="157px"  title="React">
    </iframe>

## Video Tag

`<video>` tag: Used to show video on a web page.<br>
&#10147; The link of the video you want to add to the src attribute is given.<br>
&#10147; Width and height attributes set the size of the video.<br>
&#10147; With the controls attribute, video controls such as play, pause, and volume are added.

    <video  width="280"  height="157"  controls>
    <source  src="./Assets/and-i-love-her-audio.mp4"  type="video/mp4">
    </video>
    
## Audio Tag

`<audio>` tag: Used to add audio to the web page. It supports many different audio formats eg MP3, OGG etc.<br>
&#10147; The link of the audio you want to add to the src attribute is given.<br>
&#10147; Width and height attributes set the size of the audio.<br>
&#10147; With the controls attribute, audio controls such as play, pause, and volume are added.

    <audio  controls>
    <source  src="./Assets/And I Love Her.mp3"  type="audio/ogg">
    </audio>

## Example Website

![alt text](https://github.com/Selahaddin64/TurkcellFrontend2023/blob/add_gif/Ogrenciler/SelahattinDemir/Dersler/Ders02/assets/Ders02.gif)


