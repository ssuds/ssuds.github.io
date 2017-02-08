$(function(){
  $('.grid').masonry({
    // options
    itemSelector : '.grid-item',
    stamp : '.stamp',
    columnWidth : 370,
    gutter: 5, 
    fitWidth: true
  });
  $('.grid').imagesLoaded().progress( function() {
  $('.grid').masonry('layout');
});
});

