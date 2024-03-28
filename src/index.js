function displayPoem(response) {
  new Typewriter("#generatedPoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instraction");
  let apiKye = "7e6535efo0b6a8aba82ctdabc0ba3974";
  let prompt = `User instructions: Generate a poem about ${instructionInput}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a sophisticated 4 line poem in the HTML. Please enter a new line for each line by using <br>. Make sure to follow the user instructions. Example: 'Line 1<br>Line 2<br>Line 3<br>Line 4'";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKye}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
