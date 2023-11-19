// Do not change
$(document).ready(function () {
  
  document.getElementById('cat').addEventListener('click', () => {
    alert('meow!');
  });

  // When clicked, "More info" link should alert "Here's some info"
  // instead of going to a new webpage

  const $moreInfo = $('#more-info')

  $moreInfo.on('click', function(e) {
    e.preventDefault()
  })
  // When the bark button is clicked, should alert "Bow wow!"
  // Should *not* alert "meow"
  
  const $dog = $('#dog')

  $dog.on('click', function(e) {
    e.preventDefault()
    alert('Bow Wow!')
    e.stopPropagation()
  })

});



