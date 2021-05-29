window.onload = function() {
    var bsDiv = document.getElementById('box-shadow-div');

    var x, y;

    window.addEventListener('mouseover', function(e) {
        x = e.clientX;
        y = e.clientY;

        if(typeof x !== 'undefined') {
            bsDiv.style.left = x - bsDiv.clientWidth/2 + 'px';
            bsDiv.style.top = y - bsDiv.clientHeight/2 + 'px';
        }
    }, false);
}