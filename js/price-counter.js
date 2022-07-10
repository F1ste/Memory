
function countFunc(count) {
    let price = count.querySelector('.price-num').innerHTML;
    let priceValue = parseFloat(price, 10);
    let btnPlus = count.querySelector('.add');
    let btnMinus = count.querySelector('.subtract');
    let field = count.querySelector('.amount');
    let fieldValue = parseFloat(field.value, 10);
    let radio = count.querySelector('.switch-btn');

    radio.addEventListener("click",function(){
        if (radio.classList.contains('switch-on')) {
            
            count.querySelector('.price-num').innerHTML = priceValue * fieldValue;
        }
        else{
            count.querySelector('.price-num').innerHTML = priceValue * 6 * fieldValue;
        }
    });
    field.addEventListener("keyup", function(){
        fieldValue = field.value;
        if (radio.classList.contains('switch-on')) {
            count.querySelector('.price-num').innerHTML = priceValue * 6 * fieldValue;
        }
        else{
            count.querySelector('.price-num').innerHTML = priceValue * fieldValue;
        }
    });
    btnMinus.addEventListener('click', function () {
        if (fieldValue > 1) {
            fieldValue--;
            field.value = fieldValue;
        } else {
            return 1;
        }
        if (radio.classList.contains('switch-on')) {
            count.querySelector('.price-num').innerHTML = priceValue * 6 * fieldValue;
        }
        else{
            count.querySelector('.price-num').innerHTML = priceValue * fieldValue;
        }
    });
    btnPlus.addEventListener('click', function () {
        fieldValue++;
        field.value = fieldValue;
        if (radio.classList.contains('switch-on')) {
            count.querySelector('.price-num').innerHTML = priceValue * 6 * fieldValue;
        }
        else{
            count.querySelector('.price-num').innerHTML = priceValue * fieldValue;
        }
    });


    
}
let counts = document.querySelectorAll('.counter-tumbler');
counts.forEach(countFunc);

