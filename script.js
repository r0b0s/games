//console.log("connected")

let loading_animation = document.getElementById('loading_animation');

$(window).on('load', function () {
    $('#loading_animation').hide();
})
 

/**********FETCH API************/

// API for QUOTE
let quote = document.getElementById('quote');
let author = document.getElementById('author');
async function displayquote() {
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json();
    if (response.ok) {
        // Update DOM elements
        quote.innerHTML = `${data.content}`
        author.innerHTML = `~${data.author} `
    }
    else {
        fetch("https://type.fit/api/quotes")
            .then(res => res.json())// to convert into json format
            .then(data => {
                let quote_num = Math.floor(Math.random() * data.length);
                quote.innerHTML = `"${data[quote_num].text}"`
                author.innerHTML = `~${data[quote_num].author} `
            })
    }
}


const photos = document.querySelectorAll('.photo');

function toggleActive(e)
{
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}

function toggleOpen(e)
{
    this.classList.toggle('open');
}
                
photos.forEach(photo => photo.addEventListener('click',toggleOpen));
photos.forEach(photo => photo.addEventListener('transitionend', toggleActive));


/**
 * Back to top button
 */

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}