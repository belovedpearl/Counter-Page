
let saveEl = document.getElementById("saveBf");
let countNo = document.getElementById("count-no");
console.log(countNo)
let count = 0;


function increment() {
    count += 1;
    console.log(count);
    countNo.textContent = count;
}
function save() {
   var saveEdit = count + " - "
   saveEl.textContent += saveEdit;
    console.log(count);
    countNo.textContent = 0;
    count = 0;
}
console.log("Let's count!");