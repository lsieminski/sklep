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