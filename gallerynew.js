filterSelection("all") // Execute the function and show all columnbs
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("columnb");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    _RemoveClass1(x[i], "show");
    if (x[i].className.indexOf(c) > -1) _AddClass1(x[i], "show");
  }
}

// Show filtered elements
function _AddClass1(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function _RemoveClass1(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnnewContainer = document.getElementById("myButtonContainernew");
var btnnews = btnnewContainer.getElementsByClassName("btnnew");
for (var i = 0; i < btnnews.length; i++) {
  btnnews[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}