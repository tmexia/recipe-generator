function writeRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: null,
  });
}

function generateRecipe(event) {
  event.preventDefault();
  let ingredientInput = document.querySelector("#ingredient-input");
  let apiKey = "2affcb912c0bbco36ateff4a191143bb";
  let prompt = `Please write a recipe that is suitable to be made by children with or without help from an adult.
  The list of ingredients should include the ${ingredientInput.value}. Give the ingredient list first and the instructions after.
  Please limit the answer to the recipe itself. Please give the answer in basic html paragraphs.
  Sign the recipe with "SheCodes AI", aligned to the right. Be polite. Thank you.`;
  let context = "You are an expert in food and recipes for children.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("waiting");
  recipeElement.innerHTML = `Cooking your recipe!`;

  axios.get(apiUrl).then(writeRecipe);
}

let recipeForm = document.querySelector("#recipe-generator-form");
recipeForm.addEventListener("submit", generateRecipe);
