var p1 = document.querySelectorAll('#cen_right_top > h3');
var p2 = document.querySelectorAll('#cen_right_top > div');
p1.forEach((item, index) => {
    item.onclick = function () {
        for (var i = 0; i < p1.length; i++) {
            p1[i].className = "";
            p2[i].style.display = "none";
        }
        p1[index].className = "active";
        p2[index].style.display = "block";
    }
});