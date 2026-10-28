const btn = document.getElementById("countBtn");
const num = document.getElementById("countNum");
let count = 0;

btn.onclick = function () {
    count = count + 1;
    if (count >= 10) {
        count = 0;
    }
    num.textContent = count;
}
