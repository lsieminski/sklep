var club_filter = new Array;
var category_filter = new Array;


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

  for (i=0; i<product_club_name.length; i++)
  {
    club_filter[i] = false;
    if (product_club_name[i].innerHTML.trim() == choosen_club.trim()) 
    {
      product_club_name[i].parentElement.style.display = "block";
      club_filter[i] = true;
      console.log("Filtr klubów", i, club_filter);
    }
    else 
    {
      product_club_name[i].parentElement.style.display = "none";
      console.log("Filtr klubów", i, club_filter);
    }
  }
}

function category_choice(nr)
{
  var choosen_category = document.getElementById('category-'+(nr));
  var category_name = document.getElementsByClassName("product");
 
  //category_filter = false;

  for (i=0; i<category_name.length; i++)
  {
    if (club_filter[i] == true)
    {
      if (category_name[i].className == "product "+choosen_category.className) 
      {
        category_name[i].style.display = "block";
        category_filter[i] = true;
        console.log("Filtr kategorii", i, category_filter);
      }
      else 
      {
        category_name[i].style.display = "none";
        category_filter[i] = false;
        console.log("Filtr kategorii", i, category_filter);
      }
    }

  }

/*

  for (i=0; i<category_name.length; i++)
  {
    if (category_name[i].style.display == "block")
      {
      if (category_name[i].className == "product "+choosen_category.className) 
      {
        category_name[i].style.display = "block";
        category_filter = true;
      }
      else category_name[i].style.display = "none";
    }
  }
  */
}