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

document.getElementById("btnMember").onclick = function () {
    var member = document.getElementById("member");
    var txtMember = member.options[member.selectedIndex].text;
    document.getElementById("kqBai2").innerHTML = "Chào " + txtMember;
}

/**
 * Bài 3: Số chẵn / số lẻ
 */

document.getElementById("btnChanLe").onclick = function () {
    var odds = 0;
    var even = 0;

    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);
    var num3 = Number(document.getElementById("num3").value);

    if (num1 % 2 == 0) {
        even += 1;
    } else {
        odds += 1;
    }

    if (num2 % 2 == 0) {
        even += 1;
    } else {
        odds += 1;
    }

    if (num3 % 2 == 0) {
        even += 1;
    } else {
        odds += 1;
    }

    document.getElementById("kqBai3").innerHTML = "Số chẵn: " + even + " / Số lẻ: " + odds;
}

/**
 * Bài 4: Tam giác
 */

document.getElementById("btnTamGiac").onclick = function () {
    var x = Number(document.getElementById("x").value);
    var y = Number(document.getElementById("y").value);
    var z = Number(document.getElementById("z").value);

    var kq = "";

    if (x < y + z && y < x + z && z < y + x) {
        if (x == y && y == z) {
            kq = "Đây là tam giác đều";
        } else if (x * x + y * y == z * z || x * x + z * z == y * y || y * y + z * z == x * x) {
            kq = "Đây là tam giác vuông";
        } else if (x == y || y == z || x == z) {
            kq = "Đây là tam giác cân";
        } else {
            kq = "Đây là tam giác thường";
        }
    } else {
        kq = "Đây không phải là tam giác";
    }

    document.getElementById("kqBai4").innerHTML = kq;
}