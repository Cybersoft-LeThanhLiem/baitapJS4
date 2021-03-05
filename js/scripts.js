/**
 * Bài 1: Sắp xếp 3 số theo thứ tự tăng dần
 */

document.getElementById("btnSort").onclick = function () {
    var a = Number(document.getElementById("a").value);
    var b = Number(document.getElementById("b").value);
    var c = Number(document.getElementById("c").value);

    var min;
    var mid;
    var max;

    if (a <= b && a <= c) {

        if (b <= c) {
            min = a; mid = b; max = c;
        } else {
            min = a; mid = c; max = b;
        }

    } else if (b <= a && b <= c) {

        if (a <= c) {
            min = b; mid = a; max = c;
        } else {
            min = b; mid = c; max = a;
        }

    } else {

        if (a <= b) {
            min = c; mid = a; max = b;
        } else {
            min = c; mid = b; max = a;
        }
    }

    document.getElementById("kqBai1").innerHTML = min + " " + mid + " " + max;
}

/**
 * Bài 2: Chào hỏi
 */

