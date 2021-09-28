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
    if (product_club_name[i].innerHTML.trim() == choosen_club.trim()) product_club_name[i].parentElement.style.display = "block";
    else product_club_name[i].parentElement.style.display = "none";
  }
}