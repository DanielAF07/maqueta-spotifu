$(function() {

    $(".list__playlists").mousewheel(function(event, delta) {
    console.log(event.deltaX, event.deltaY, event.deltaFactor);
       this.scrollLeft -= (delta * 2);
       event.preventDefault();
    });
 
 });

 console.log("object");