var i = 0;
  if (i == 0) {
    i = 0;
    var progres = document.getElementById('progress');
    var progresN = document.getElementById('secondaryN');
    var width = 0;
    var id = setInterval(frame, 50);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        progres.value = width;
        progresN.innerHTML = width + "%";
      }
    
    }}
setInterval(function(){
window.location = "home.html" ;
}, 5100);