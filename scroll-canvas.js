function scrollWin() {
    window.scrollBy(0, 1200);
  }
function topFunction() {
    document.body.scrollTop = 80;
    document.documentElement.scrollTop = 800;
  }
//SS
document.querySelector('button').addEventListener('click', function() {
html2canvas(document.querySelector('.specific'), {
    onrendered: function(canvas) {
        // document.body.appendChild(canvas);
      return Canvas2Image.saveAsPNG(canvas);
    }
});
});