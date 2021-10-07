var club_filter = new Array;
var club_filter_indicator = false;
var category_filter = new Array;
var category_filter_indicator = false;

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
          console.log("Filtr klubów", i, club_filter);
        }
        else 
        {
          club_filter[i] = false;
          console.log("Filtr klubów", i, club_filter);
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

  for (i=0; i<category_name.length; i++)
    {
        if (category_name[i].className.substring(8) == choosen_category.className.substring(14)) 
        {
          category_filter[i] = true;
          console.log("Filtr klubów", i, category_filter);
        }
        else 
        {
          category_filter[i] = false;
          console.log("Filtr klubów", i, category_filter);
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

  for(i=0; i<document.getElementsByClassName("category-filter-clearing").length; i++)
  {
  document.getElementsByClassName("category-filter-clearing")[i].style.display = "none";
  }

  for(i=0; i<document.getElementsByClassName("category-item").length; i++)
  {
  document.getElementsByClassName("category-item")[i].style.color = "#001e3c";
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