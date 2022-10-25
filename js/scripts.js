function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input");
  const userSelectionsArray = Array.from(userSelections);
  const newArray = [];

  const resultsHeading = document.createElement("h2");
  resultsHeading.append("These are your favorite things: ");
  document.body.append(resultsHeading);

  userSelectionsArray.forEach(function(element) {
    const list = document.createElement("li");
    list.append(element.value);
    const listString = list.innerText;
    newArray.push(listString);
    console.log(newArray);
    document.body.append(list);
  }); 

  const unorderedList = document.createElement("ul");
  unorderedList.setAttribute("id", "thingsList");
  document.body.appendChild(unorderedList);
  console.log(newArray);
  shortArray = [newArray[1], newArray[0], newArray[2]]; 
  console.log(shortArray);

  const liOne = document.createElement("li");
  const liTwo = document.createElement("li");
  const liThree = document.createElement("li");
  liOne.append(shortArray[0]);
  liTwo.append(shortArray[1]);
  liThree.append(shortArray[2]);
  document.body.appendChild(liOne);
  document.body.appendChild(liTwo);
  document.body.appendChild(liThree);

  document.getElementById("thingsList").append(liOne, liTwo, liThree);

}

window.addEventListener("load", function() {
  document.querySelector("form#survey").addEventListener("submit", handleForm);
});