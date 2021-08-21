const firstMemory = document.getElementById('first-memory');
const secondMemory = document.getElementById('second-memory');

const memoryCost = document.getElementById('memoryCost');


const firstStorage = document.getElementById('first-storage');
const secondStorage = document.getElementById('second-storage');
const thirdStorage = document.getElementById('third-storage');

const extraMemoryCost = document.getElementById('extra-memoryCost');


const firstDelivery = document.getElementById('first-delivery');
const secondDelivery = document.getElementById('second-delivery');

const deliveryCharge = document.getElementById('delivery-charge');

const totalPrice = document.getElementById('total-price');

const totalAmount = document.getElementById('total-amount');

//update Total Price
function updateTotal() {
    const memoryCostTotal = Number(memoryCost.innerText);
    const extraMemoryCostTotal = Number(extraMemoryCost.innerText);
    const deliveryChargeTotal = Number(deliveryCharge.innerText);

    const grandTotal = 1299 + memoryCostTotal + extraMemoryCostTotal + deliveryChargeTotal;
    totalPrice.innerText = grandTotal;
    totalAmount.innerText = grandTotal;

}

firstMemory.addEventListener('click', function () {
    memoryCost.innerText = '0';
    updateTotal();
});
secondMemory.addEventListener('click', function () {
    memoryCost.innerText = '180';
    updateTotal();
});



firstStorage.addEventListener('click', function () {
    extraMemoryCost.innerText = '0';
    updateTotal();
});
secondStorage.addEventListener('click', function () {
    extraMemoryCost.innerText = '100';
    updateTotal();
});
thirdStorage.addEventListener('click', function () {
    extraMemoryCost.innerText = '180';
    updateTotal();
});


firstDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '0';
    updateTotal();
});
secondDelivery.addEventListener('click', function () {
    deliveryCharge.innerText = '20';
    updateTotal();
});

// Discount promocode 

document.getElementById('coupon').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input');
    const totalIn = parseInt(totalAmount.innerText);
    if (promoInput.value == 'stevekaku') {
        totalAmount.innerText = totalIn - (totalIn * .2)
    }
    promoInput.value = '';
});