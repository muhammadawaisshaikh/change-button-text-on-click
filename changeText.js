function changeText(className) {
  if (document.querySelector(className).innerText == "See More") 
  {
      document.querySelector(className).innerText = "See Less";
  } else 
  {
      document.querySelector(className).innerText = "See More";
  }
}
