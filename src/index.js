function displayPoem(response) {
  let generatedPoem = document.querySelector("#generatedPoem");
  generatedPoem.innerHTML = "";
  new Typewriter("#generatedPoem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();
  let instructionInput = document.querySelector("#user-instruction").value;
  let apiKey = "7e6535efo0b6a8aba82ctdabc0ba3974";
  let prompt = `User instructions: Generate a poem about ${instructionInput}`;
  let context =
    "You are a romantic poem expert and love to write short poems. Your mission is to generate a 4-line poem. Please enter each line separately, using <br> to indicate line breaks. Example: 'Line 1<br>Line 2<br>Line 3<br>Line 4'.";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#generatedPoem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">  ⌛ Generating a poem about "${instructionInput}" for you...</div>`;

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
