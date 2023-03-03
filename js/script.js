//Example JavaScript code
const interestsSelect = document.querySelector("#interests");

//Add an event listener to the interests select element
interestsSelect.addEventListener("change", (event) => {
  const selectedValue = event.target.value;
  let message = "";

  //Based on the selected value, generate a message to display to the user
  switch (selectedValue) {
    case "vegetarian":
      message = "Good choice! Our vegetarian recipes are packed with flavor.";
      break;
    case "gluten-free":
      message = "We've got plenty of gluten-free recipes that don't skimp on taste!";
      break;
    case "low-carb":
      message = "Eating low-carb doesn't mean sacrificing flavor. Try our recipes!";
      break;
    case "dessert":
      message = "Satisfy your sweet tooth with our delicious dessert recipes.";
      break;
    default:
      message = "Please select an option.";
  }

  //Display the message to the user
  alert(message);
});
