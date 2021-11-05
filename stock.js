var club_filter = new Array;
var club_filter_indicator = false;
var category_filter = new Array;
var category_filter_indicator = false;

function start()
{
  var hash = window.location.hash;

  if(hash.length == 2)
  {
    club_choice(hash.substring(1,2));
  }
  if(hash.length == 4)
  {
    club_choice(hash.substring(1,2));
    category_choice(hash.substring(3,4));
  }
  if(hash.length == 6)
  {
    club_choice(hash.substring(1,2));
    category_choice(hash.substring(3,4));
    expander(hash.substring(5,6));
  }

  /*
  var stateObj = { id: "100" };
  window.history.replaceState(stateObj, "Stock", "/stock.html");
  */
}


function expander(nr)
{
  var subcategories = document.getElementsByClassName("category-choice")[nr];
  var button = document.getElementsByClassName("expand-button")[nr];

  if(button.innerHTML == "+")
  {
    button.innerHTML = "-";
    subcategories.style.display = "block";
  }
  else
  {
    button.innerHTML = "+";
    subcategories.style.display = "none";
  }
}  

function club_choice(nr)
{
  var choosen_club = document.getElementById('club-'+(nr)).innerHTML;
  var product_club_name = document.getElementsByClassName("product-club-name");

  club_filter_indicator = true;

  for (i=0; i<product_club_name.length; i++)
    {
        if (product_club_name[i].innerHTML.trim() == choosen_club.trim()) 
        {
          club_filter[i] = true;
        }
        else 
        {
          club_filter[i] = false;
        }
    }

    if (category_filter_indicator == true)
    {
      for (i=0; i<product_club_name.length; i++)
      {
        if (club_filter[i] == true && category_filter[i] == true)
        {
          product_club_name[i].parentElement.style.display = "block";
        }
        else product_club_name[i].parentElement.style.display = "none";
      }
    }
    else
    {
      for (i=0; i<product_club_name.length; i++)
      {
        if (club_filter[i] == true) product_club_name[i].parentElement.style.display = "block";
        else product_club_name[i].parentElement.style.display = "none";
      }
    }

  for(i=0; i<document.getElementsByClassName("club-filter-clearing").length; i++)
  {
  document.getElementsByClassName("club-filter-clearing")[i].style.display = "none";
  }

  for(i=0; i<document.getElementsByClassName("club-item").length; i++)
  {
  document.getElementsByClassName("club-item")[i].style.color = "#001e3c";
  }

  document.getElementById('club-'+(nr)).previousElementSibling.style.display = "block";
  document.getElementById('club-'+(nr)).style.color = "#ff3333";
}

function category_choice(nr)
{
  var choosen_category = document.getElementById('category-'+(nr));
  var category_name = document.getElementsByClassName("product");
 
 
  category_filter_indicator = true;

  if (choosen_category.className == "category-title")
{
  var sibling = choosen_category.nextElementSibling;
  var subcategory = sibling.children;

    for (j=0; j<category_name.length; j++)
    {
      for (i=0; i<subcategory.length; i++)
      {
          if (category_name[j].className.substring(8) == subcategory[i].className.substring(14)) 
          {
            category_filter[j] = true;
            break;
          }
          else 
          {
            category_filter[j] = false;
          }
        }
      }

      if (club_filter_indicator == true)
      {
        for (j=0; j<category_name.length; j++)
        {
          if (club_filter[j] == true && category_filter[j] == true)
          {
            category_name[j].style.display = "block";
          }
          else category_name[j].style.display = "none";
        }
      }
      else
      {
        for (j=0; j<category_name.length; j++)
        {
          if (category_filter[j] == true) category_name[j].style.display = "block";
          else category_name[j].style.display = "none";
        }
      }
  }
  else
  {
  for (i=0; i<category_name.length; i++)
  {
      if (category_name[i].className.substring(8) == choosen_category.className.substring(14)) 
      {
        category_filter[i] = true;
      }
      else 
      {
        category_filter[i] = false;
      }
  }

  if (club_filter_indicator == true)
  {
    for (i=0; i<category_name.length; i++)
    {
      if (club_filter[i] == true && category_filter[i] == true)
      {
        category_name[i].style.display = "block";
      }
      else category_name[i].style.display = "none";
    }
  }
  else
  {
    for (i=0; i<category_name.length; i++)
    {
      if (category_filter[i] == true) category_name[i].style.display = "block";
      else category_name[i].style.display = "none";
    }
  }
}


  for(i=0; i<document.getElementsByClassName("category-filter-clearing").length; i++)
  {
  document.getElementsByClassName("category-filter-clearing")[i].style.display = "none";
  }

  for(i=0; i<document.getElementsByClassName("category-item").length; i++)
  {
  document.getElementsByClassName("category-item")[i].style.color = "#001e3c";
  }

  for(i=0; i<document.getElementsByClassName("category-title").length; i++)
  {
  document.getElementsByClassName("category-title")[i].style.color = "#001e3c";
  }


  document.getElementById('category-'+(nr)).previousElementSibling.style.display = "block";
  document.getElementById('category-'+(nr)).style.color = "#ff3333";

}


function clear_club_filters()
{
  club_filter_indicator = false;

  if (category_filter_indicator == true)
  {
    for(i=0; i<document.getElementsByClassName("product").length; i++)
    {
     if (category_filter[i] == true) document.getElementsByClassName("product")[i].style.display = "block";
    }
  }
  else
  for(i=0; i<document.getElementsByClassName("product").length; i++)
  {
  document.getElementsByClassName("product")[i].style.display = "block";
  }

  for(i=0; i<document.getElementsByClassName("club-filter-clearing").length; i++)
  {
  document.getElementsByClassName("club-filter-clearing")[i].style.display = "none";
  document.getElementsByClassName("club-filter-clearing")[i].nextElementSibling.style.color = "#001e3c";
  }
}

function clear_category_filters()
{
  category_filter_indicator = false;

  if (club_filter_indicator == true)
  {
    for(i=0; i<document.getElementsByClassName("product").length; i++)
    {
      if (club_filter[i] == true) document.getElementsByClassName("product")[i].style.display = "block";
    }
  }
  else
  for(i=0; i<document.getElementsByClassName("product").length; i++)
    {
    document.getElementsByClassName("product")[i].style.display = "block";
    }


  for(i=0; i<document.getElementsByClassName("category-filter-clearing").length; i++)
  {
  document.getElementsByClassName("category-filter-clearing")[i].style.display = "none";
  document.getElementsByClassName("category-filter-clearing")[i].nextElementSibling.style.color = "#001e3c";
  }
}

// Adding items to cart
const items = document.querySelectorAll('.add-button');

//window.localStorage.clear();

let inCart = JSON.parse(window.localStorage.getItem('itemsInCart'));
let itemsPhoto = JSON.parse(window.localStorage.getItem('itemsInCartPhoto'));
let itemsPrice = JSON.parse(window.localStorage.getItem('itemsInCartPrice'));
let itemsDescription = JSON.parse(window.localStorage.getItem('itemsInCartDescription'));
let itemsClub = JSON.parse(window.localStorage.getItem('itemsInCartClub'));
let itemsQuantity = JSON.parse(window.localStorage.getItem('itemsInCartQuantity'));

if (inCart == null) inCart = [];
if (itemsPhoto == null) itemsPhoto = [];
if (itemsPrice == null) itemsPrice = [];
if (itemsDescription == null) itemsDescription = [];
if (itemsClub == null) itemsClub = [];
if (itemsQuantity == null) itemsQuantity = [];

// let inCart = [];
// let itemsPhoto = [];
// let itemsDescription = [];
// let itemsClub = [];
// let itemsPrice = [];
// let itemsQuantity = [];


// Shows my arrays
console.log(inCart);
console.log(itemsPhoto);
console.log(itemsDescription);
console.log(itemsClub);
console.log(itemsPrice);
console.log(itemsQuantity);

// Show number of products in cart
const quantityInCart = document.querySelector("#cart > li:nth-child(2)");
if (inCart.length > 0) 
{
  quantityInCart.innerText = `Produkty: ${inCart.length}`;
}

// Add id to each product
items.forEach((item, i) => {
  item.id = `item-${i}`;

  item.addEventListener('click', () => {
    if (!inCart.includes(item.id))
    {
      // Add item id to array
       inCart.push(item.id);

      //  Add item img to array
       let img = document.querySelector(`div.product:nth-child(${i+1}) > div:nth-child(1) > img:nth-child(1)`);
       itemsPhoto.push(img.getAttribute('src'));

       //  Add item description to array
       let desc = document.querySelector(`div.product:nth-child(${i+1}) > div:nth-child(3)`);
       itemsDescription.push(desc.innerText);

        //  Add item club name to array
        let club = document.querySelector(`div.product:nth-child(${i+1}) > div:nth-child(2)`);
        itemsClub.push(club.innerText);

        //  Add item price to array
        let price = document.querySelector(`div.product:nth-child(${i+1}) > div:nth-child(4) > span:nth-child(1)`);
        itemsPrice.push(price.innerText);

        //  Add item quantity to array
        itemsQuantity.push(1);
    }



    // Add data to local storage
    window.localStorage.setItem('itemsInCart', JSON.stringify(inCart));
    window.localStorage.setItem('itemsInCartPhoto', JSON.stringify(itemsPhoto));
    window.localStorage.setItem('itemsInCartDescription', JSON.stringify(itemsDescription));
    window.localStorage.setItem('itemsInCartClub', JSON.stringify(itemsClub));
    window.localStorage.setItem('itemsInCartPrice', JSON.stringify(itemsPrice));
    window.localStorage.setItem('itemsInCartQuantity', JSON.stringify(itemsQuantity));
    
    // Shows my arrays
    console.log(inCart);
    console.log(itemsPhoto);
    console.log(itemsDescription);
    console.log(itemsClub);
    console.log(itemsPrice);
    console.log(itemsQuantity);


    
    // Show number of products in cart
    if (inCart.length > 0) 
    {
      quantityInCart.innerText = `Produkty: ${inCart.length}`;
    }
  });
});

