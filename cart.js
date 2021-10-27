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
        <select>
            <option selected>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
        </select>
    </td>
    <td class="unit-price-total">
        <span>500</span>
        <span>zł</span>
    </td>
  </tr>`
  };

const itemsTable = document.querySelector('.table-body');
itemsTable.innerHTML = itemsHtml;
};

const displayItemsInCart = displayItems();

// Remove items from cart
const removeButtons = document.querySelectorAll('.remove-item');

removeButtons.forEach((removeButton, i) => {

  removeButton.addEventListener('click', () => {
    
    inCart.splice(i, 1);
    itemsPhoto.splice(i, 1);
    itemsDescription.splice(i, 1);
    itemsClub.splice(i, 1);
    itemsPrice.splice(i, 1);

    window.localStorage.setItem('itemsInCart', JSON.stringify(inCart));
    window.localStorage.setItem('itemsInCartPhoto', JSON.stringify(itemsPhoto));
    window.localStorage.setItem('itemsInCartDescription', JSON.stringify(itemsDescription));
    window.localStorage.setItem('itemsInCartClub', JSON.stringify(itemsClub));
    window.localStorage.setItem('itemsInCartPrice', JSON.stringify(itemsPrice));

    console.log(inCart);
    console.log(itemsPhoto);
    console.log(itemsDescription);
    console.log(itemsClub);
    console.log(itemsPrice);

   location.reload();
  });
});
