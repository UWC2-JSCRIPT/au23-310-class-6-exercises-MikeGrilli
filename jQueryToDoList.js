$(document).ready(function() {
  /**
   * Toggles "done" class on <li> element
   */

  function toggleItem(e) {
    $(this).toggleClass("done");
  }

  $('li').on('click', toggleItem)

  /**
   * Delete element when delete link clicked
   */

  function deleteItem() {
    $(this).parent().fadeOut(500);
  }

  $('.delete').on('click', deleteItem)

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    e.preventDefault();

    const text = $('input').val();
    const $li = $('<li>')
    const $span = $('<span>').text(text)
    const $button = $('<a>').text('Delete').addClass('delete')
    
    $li.append($span)
    $('ul').append($li)
    $li.append($button)

    $('li').on('click', toggleItem)
    $('.delete').on('click', deleteItem)

  }

  // add listener for add

  $('.add').on('click', addListItem)

})

