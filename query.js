// obtain a reference to the first section with the class of article_header and change its
//  text with the textContent property to "Welcome to the {insert your name here} blog"

const articleHeader = document.querySelector(".article__header");

    articleHeader.textContent = "Welcome to blog Castle";

// obtain a reference to all article__header elements and change their classList property
//  value to article__header important.

const allArticleHeaders = document.querySelectorAll(".article__header"); 

    for(i=0; i<allArticleHeaders.length; i++) {
        allArticleHeaders[i].classList.add("important");

    }
    
// Obtain a reference the element with a class of dashed and remove it.

const removeDashed = document.querySelector(".dashed");
    removeDashed.classList.remove("dashed");

    // Obtain a reference the element with a class of article_footer and add  the class
    //  of goldenrod to it.

const addGoldenrod = document.querySelector(".article__footer");
     addGoldenrod.classList.add("goldenrod");
