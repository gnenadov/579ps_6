// Cross out a task on click:

var li = document.querySelectorAll("li");
for (var i of li) {
  i.addEventListener("click", function () {
    this.classList.toggle("finished");
  });
}

// var banner = document.getElementById("mydiv");
// banner.addEventListener("mouseover", function () {
//   changeColor();
// });

// function changeColor() {
//   if (
//     document.getElementById("mydiv").style.backgroundColor == "rgb(0, 139, 139)"
//   ) {
//     document.getElementById("mydiv").style.backgroundColor == "#000000";
//   } else {
//     document.getElementById("mydiv").style.backgroundColor = "rgb(0, 139, 139)";
//   }
// }

// Change the color of the banner on mouseover:

document.getElementById("mydiv").addEventListener("mouseover", function () {
  document.getElementById("mydiv").style.backgroundColor = "purple";
});

document.getElementById("mydiv").addEventListener("mouseout", function () {
  document.getElementById("mydiv").style.backgroundColor = "#008b8b";
});

// Add an item to the list on click:

document.getElementById("addButton").onclick = function () {
  var text = document.getElementById("myInput").value;
  var li = document.createElement("li");
  li.textContent = text;
  document.getElementById("todo").appendChild(li);
  document.getElementById("myInput").value = "";
};

// function addTask() {
//   var ul = document.getElementById("todo");
//   var input = document.getElementById("myInput");
//   var li = document.createElement("li");
//   li.setAttribute("id", input.value);
//   li.appendChild(document.createTextNode(input.value));
//   ul.appendChild(li);
// }

// var button = document.getElementsByClassName("addbtn");
// button.addEventListener("click", function () {
//   addTask();
// });
