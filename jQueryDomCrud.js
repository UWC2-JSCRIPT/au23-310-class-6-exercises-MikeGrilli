// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
 
$(document).ready(function() {
    //create a tag
    
    const $a = $('<a>')
    $a.attr('id', 'cta')
    $a.attr('href', '#')
    $a.text('Buy Now!')

    //append a tag to body after last p
    const $lastP = $('p')
    $a.insertAfter($lastP);

    //access data-color atrr of the img
    const img = $('img')
    console.log(img[0].dataset.color)

    //highloght 3rd list item
    const $list = $('li')
    $list.eq(2).addClass('highlight')

    //remove last paragraph
    $lastP.remove()

    //on click remove  link and add text where the button was
    $a.on('click', (e) => {
        $a.remove()
        const $newP = $('<p>')   
        $newP.text('Added to cart')
        $('main').append($newP)
    })

})
