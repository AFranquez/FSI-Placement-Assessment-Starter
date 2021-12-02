let addGB = document.getElementById('add-gb');
let minusGB = document.getElementById('minus-gb');

let quantityGB= 0

addGB.addEventListener('click', function () {
    quantityGB +=1;
    document.getElementById('qty-gb').textContent = quantityGB;
})

minusGB.addEventListener('click', function () {
    if (quantityGB >0) {
        quantityGB -=1;
    }
    document.getElementById('qty-gb').textContent = quantityGB;
})

let addCC = document.getElementById('add-cc');
let minusCC = document.getElementById('minus-cc');

let quantityCC= 0

addCC.addEventListener('click', function () {
    quantityCC +=1;
    document.getElementById('qty-cc').textContent = quantityCC;
})

minusCC.addEventListener('click', function () {
    if (quantityCC >0) {
        quantityCC -=1;
    }
    document.getElementById('qty-cc').textContent = quantityCC;
})

let addSugar = document.getElementById('add-sugar');
let minusSugar= document.getElementById('minus-sugar');

let quantitySugar= 0

addSugar.addEventListener('click', function () {
    quantitySugar +=1;
    document.getElementById('qty-sugar').textContent = quantitySugar;
})

minusSugar.addEventListener('click', function () {
    if (quantitySugar >0) {
        quantitySugar -=1;
    }
    document.getElementById('qty-sugar').textContent = quantitySugar;
})


