if (inCart.length == 0)
{
  document.getElementById("empty-cart").style.display = "block";
  document.getElementById("filled-cart").style.display = "none";
}
else
{
  document.getElementById("empty-cart").style.display = "none";
  document.getElementById("filled-cart").style.display = "block";
}

// Display items in cart
const displayItems = () => {
let itemsHtml = ``;

  for (i=0; i < inCart.length; i++)
  {
    let quantityChoice = ``;
    for (j=1; j <=10; j++)
    {
      if (j == itemsQuantity[i])
      { 
        quantityChoice += `<option selected>${j}</option>`
      }
      else 
      {
      quantityChoice += `<option>${j}</option>`
      }
    };

    itemsHtml +=
    `<tr>
    <td class="cart-product-img">
        <img src=${itemsPhoto[i]}>
    </td>
    <td class="cart-product">
        <div class="cart-product-description">${itemsDescription[i]}</div>
        <div class="cart-product-club">${itemsClub[i]}</div>
        </br></br>
        <div class="remove-item"><span>usuń</span></div>
    </td>
    <td class="unit-price">
        <span>${itemsPrice[i]}</span>
        <span>zł</span>
    </td>
    <td class="quantity">
        <select id="quantity-selector-${i}">`
            + quantityChoice +
        `</select>
    </td>
    <td class="unit-price-total">
        <span>${(singleItemTotalPrice[i]).toFixed(2)}</span>
        <span>zł</span>
    </td>
  </tr>`
  };
  

const itemsTable = document.querySelector('.table-body');
itemsTable.innerHTML = itemsHtml;

const displaySummaryPrice = document.querySelector('#display-summary-price');
displaySummaryPrice.innerHTML = summaryPrice.toFixed(2);

const displayVatCost = document.querySelector('#vat-cost');
const vatValue = 1.23;
displayVatCost.innerHTML = Math.round((summaryPrice - summaryPrice/vatValue)*100)/100;

const displaydeliveryCost = document.querySelector('#delivery-cost');
const deliveryCost = 15;
displaydeliveryCost.innerHTML = deliveryCost.toFixed(2);

const displayTotalToPay = document.querySelector('#total-to-pay');
displayTotalToPay.innerHTML = (summaryPrice + deliveryCost).toFixed(2);

};

const displayItemsInCart = displayItems();

// Quantity change
const changeQuantityButtons = document.querySelectorAll('.quantity > select');

changeQuantityButtons.forEach((changeQuantityButton, index) => {

  changeQuantityButton.addEventListener('change', () =>{
    itemsQuantity[index] = changeQuantityButton.value;
    window.localStorage.setItem('itemsInCartQuantity', JSON.stringify(itemsQuantity));
    location.reload();
  });
});

// Remove items from cart
const removeButtons = document.querySelectorAll('.remove-item');

removeButtons.forEach((removeButton, i) => {

  removeButton.addEventListener('click', () => {
    
    inCart.splice(i, 1);
    itemsPhoto.splice(i, 1);
    itemsDescription.splice(i, 1);
    itemsClub.splice(i, 1);
    itemsPrice.splice(i, 1);
    itemsQuantity.splice(i, 1);
    singleItemTotalPrice.splice(i, 1);

    window.localStorage.setItem('itemsInCart', JSON.stringify(inCart));
    window.localStorage.setItem('itemsInCartPhoto', JSON.stringify(itemsPhoto));
    window.localStorage.setItem('itemsInCartDescription', JSON.stringify(itemsDescription));
    window.localStorage.setItem('itemsInCartClub', JSON.stringify(itemsClub));
    window.localStorage.setItem('itemsInCartPrice', JSON.stringify(itemsPrice));
    window.localStorage.setItem('itemsInCartQuantity', JSON.stringify(itemsQuantity));
    window.localStorage.setItem('singleItemTotalPrice', JSON.stringify(singleItemTotalPrice));

   location.reload();
  });
});

// Total to pay calculation

