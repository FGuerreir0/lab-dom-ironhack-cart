// ITERATION 1

function updateSubtotal(product) {

    const $price = product.querySelector('.price span');
    const price = Number($price.innerText);

    const $quantity = product.querySelector('.quantity input');
    const quantity = $quantity.valueAsNumber;

    const total = price * quantity;
    console.log(total);

    const $subTotal = product.querySelector('.subtotal span');
    $subTotal.innerText = total;
    return total;
}


function calculateAll() {
    // ITERATION 2

    const multiProduct = document.getElementsByClassName('product');

    let total = 0;

    for (let i = 0; i < multiProduct.length; i++) {
        total = total + updateSubtotal(multiProduct[i]);
    }

    // ITERATION 3    
    const $total = document.querySelector("#total-value span");
    $total.innerText = total;
}

// ITERATION 4

function removeProduct(event) {
    const target = event.currentTarget;
    //alert('The target in remove is:', target);

    //parentElement or parentNode
    let tr = target.parentElement.parentElement;
    let td = tr.parentNode;
    //console.log(tr);
    td.removeChild(tr);

    //Reset the Total
    calculateAll();
}

// ITERATION 5

function createProduct() {
    // console.log('Teste');

    const $createSeccion = document.querySelectorAll('.create-product input');
    console.dir($createSeccion);

    const nameItem = $createSeccion[0].value;
    const priceInput = $createSeccion[1].valueAsNumber;

    console.log(nameItem);
    console.log(priceInput);

}


window.addEventListener('load', () => {
    const calculatePricesBtn = document.getElementById('calculate');
    calculatePricesBtn.addEventListener('click', calculateAll);
    //Remove a row
    const $allRemoveButtons = document.querySelectorAll('.btn-remove');

    for (let i = 0; i < $allRemoveButtons.length; i++) {
        $allRemoveButtons[i].addEventListener('click', removeProduct);
    }

    //Adding 

    const createButton = document.getElementById('create');
    createButton.addEventListener('click', createProduct);
});