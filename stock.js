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
