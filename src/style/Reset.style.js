import styled from "styled-components";

const ResetStyle = styled.div`
@charset "utf-8";
/* ==========================================================================
   1. CSS Reset Code
   ========================================================================== */

/* 1.1. Eric Meyers Reset
   http://meyerweb.com/eric/tools/css/reset/
   v2.0 | 20110126
   License: none (public domain)
   ========================================================================== */
html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p,
blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img,
ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center,
dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody,
tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure,
figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
  display: block;
}

/* Force scrollbar */
html { overflow-y: scroll; }

/* Align radios and text inputs with their label */

input[type='radio'] { vertical-align: text-bottom; }

/* Hand cursor on clickable input elements */
label,
input[type='button'],
input[type='submit'],
button {
  cursor: pointer;
}

strong {
  font-weight: bold;
  font-family: inherit;
  font-size: inherit;
}

em { font-style: italic; }

img {
  width: 100%;
  border: 0;
  vertical-align: middle;
}

sub,
sup {
  vertical-align: baseline;
  position: relative;
  font-size: 55%;
  line-height: 0;
}

sup { top: -.7em; }
sub { bottom: -.25em; }

/* 1.2. Clear Fix
   ========================== */

.cf:before,
.cf:after {
  display: table;
  content: " ";
}

.cf:after { clear: both; }
.cf { *zoom: 1; }

/*for all*/
body {
  box-sizing: border-box;
  font-family: sans-serif;
}

a { 
  display: inline-block;
  text-decoration: none; 
}

li {
  display: inline-block;
  list-style-type: none;
}

/*for wrapper*/
.wrapper {
  max-width: 1360px;
  width: 86%; 
  margin: 0 auto;
}
`;

export  default ResetStyle;