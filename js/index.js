var p1 = document.querySelectorAll('#cen_right_top > h3');
var p2 = document.querySelectorAll('#cen_right_top > div');
for (var i = 0; i < p1.length; i++) {
    p1[i].dataset.index = i;
    p1[i].onclick = function () {
        for (let j = 0; j < p2.length; j++) {
            p1[j].className = ''
            p2[j].style.display = 'none'
        };
        p1[this.dataset.index].className='active';
        p2[this.dataset.index].style.display = 'block'
    }
}