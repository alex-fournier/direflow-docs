import { createGlobalStyle } from 'styled-components';

const customPrismTheme = createGlobalStyle`
  code[class*="language-"],
  pre[class*="language-"] {
    color: #ffffff;
    font-family: "Fira Mono", Menlo, Monaco, "Lucida Console","Courier New", Courier, monospace;
    font-size: 16px;
    line-height: 1.375;
    direction: ltr;
    text-align: left;
    word-spacing: normal;

    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;

    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none; 
    white-space: pre; 
    white-space: pre-wrap; 
    word-break: break-all;
    word-wrap: break-word; 
    background: #322931; 
    color: #b9b5b8;
  }

  /* Code blocks */
  pre[class*="language-"] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto; 
  }

  /* Inline code */
  :not(pre) > code[class*="language-"] {
    padding: .1em;
    border-radius: .3em;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #797379;
  }

  .token.punctuation {
    color: #b9b5b8;
  }

  .namespace {
    opacity: .7;
  }

  .token.null,
  .token.operator,
  .token.boolean,
  .token.number {
    color: #fd8b19;
  } 
  .token.property { 
    color: #fdcc59;
  }
  .token.tag { 
    color: #1290bf;
  } 
  .token.string {
    color: #149b93;
  } 
  .token.selector { 
    color: #c85e7c;
  }
  .token.attr-name { 
    color: #fd8b19;
  } 
  .token.entity,
  .token.url, 
  .language-css .token.string,
  .style .token.string {
    color: #149b93;
  }

  .token.attr-value,
  .token.keyword,
  .token.control,
  .token.directive,
  .token.unit {
    color: #8fc13e;
  } 

  .token.statement,
  .token.regex, 
  .token.atrule { 
    color: #149b93;
  }

  .token.placeholder,
  .token.variable {
    color: #1290bf;
  } 

  .token.important {
    color: #dd464c;
    font-weight: bold;
  } 

  .token.entity {
    cursor: help;
  } 

  pre > code.highlight {
    outline: .4em solid red;
    outline-offset: .4em;
  } 
`;

export default customPrismTheme;
