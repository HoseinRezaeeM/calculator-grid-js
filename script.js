// Function to append a character to the result display
function appendToResult(character) {
  var resultElement = document.getElementById('result');
  resultElement.innerText += character;
}

// Function to delete the last character from the result display
function deleteLastCharacter() {
  var resultElement = document.getElementById('result');
  var currentResult = resultElement.innerText;
  resultElement.innerText = currentResult.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  var resultElement = document.getElementById('result');
  var currentResult = resultElement.innerText;

  try {
    var result = eval(currentResult);
    resultElement.innerText = result;
  } catch (error) {
    resultElement.innerText = 'Error';
  }
}