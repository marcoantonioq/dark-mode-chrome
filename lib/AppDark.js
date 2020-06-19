// if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { }
// Append css on Head
var styles = `
:root {
    --background-color: #1e1e1e;
    --primary-color: #157efb;
    --font-color: #a0a0a0;
    --font-a: #807600;
    --subtle-primary-color: #151513;
    --block-background-color: #323232;
    --menu-item-color: #dedede;
    --menu-item-hover-color: #157efb;
    --menu-item-alert-bg: #151513;
    --menu-item-alert-shadow: #151513;
    --alert-border-color: #000;
    --tertiary-color: #727680;
}

@media screen and (prefers-color-scheme: dark) {
    /* Defaults */
    // * {
    //     color: #70757a;
    // }


    /* 
    * Contents 
    */
    body,
    p,
    article,
    div.description,
    .table-responsive,
    .table,
    .s,
    .columns,
    #content {
        background: var(--background-color) !important;
        color: var(--font-color) !important;
    }


    /* 
    * Text 
    */
    span,
    span.str,
    .hljs,
    [id*=content-text],
    [class*=scope],
    .pun,
    .pln {
        color: var(--font-color) !importantl;
    }

    /* Titles */
    h1,h2,h3,h4,
    [id*=title],
    [class*=title] {
        color: var(--font-color) !important;
    }


    /* Headers */
    header,
    pre,
    code,
    nav,
    [class*=head],
    [id*=head],
    .header,
    .breadcrumb,
    #top_nav,
    #hdtbSum,
    .table-striped>tbody>tr:nth-of-type(odd) {
        background-color: var(--block-background-color) !important;
    }

    /* Links */
    a,
    cite {
        color: var(--font-a) !important;
        font-weight: 500;
    }
    /* whatsapp */
    .YD4Yw {
        background-color: #0000003d;
    }
}
`;
// now = new Date();
// hour = now.getHours();
// if (hour < 4 || hour >= 13) {
// document.addEventListener("DOMContentLoaded", function (event) {
//     var styleSheet = document.createElement("style")
//     styleSheet.type = "text/css"
//     styleSheet.innerText = styles
//     document.head.appendChild(styleSheet)
// });
// }

// Carregar arquivo css
// console.log("DarkMode");
// console.log(loadStrings("style.css"));