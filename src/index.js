function displayPoem(response) {
  console.log("poem generated");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "d9accof3b38dc4420097tf7819c5b0b6";
  let context =
    "You are a gothic poem expert and love to write short poems. Your mission is to generate a four line poem in basic HTML. Start each line with a new one. Remove back ticks and only include the poem and signature. Make to follow the user instructions. Sign the poem at the bottom with: ~ Sophie's Coding";
  let prompt = `User instructions: Generate a gothic poem about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayPoem);
}
//Display the generated poem

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
