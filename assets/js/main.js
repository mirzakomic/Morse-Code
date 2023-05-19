let morseAlphabet = [
    { letter: "1", morseCode: ".----" },
    { letter: "2", morseCode: "..---" },
    { letter: "3", morseCode: "...--" },
    { letter: "4", morseCode: "....-" },
    { letter: "5", morseCode: "....." },
    { letter: "6", morseCode: "-...." },
    { letter: "7", morseCode: "--..." },
    { letter: "8", morseCode: "---.." },
    { letter: "9", morseCode: "----." },
    { letter: "0", morseCode: "-----" },
    { letter: " ", morseCode: "    " },
    { letter: "A", morseCode: ".-" },
    { letter: "B", morseCode: "-..." },
    { letter: "C", morseCode: "-.-." },
    { letter: "D", morseCode: "-.." },
    { letter: "E", morseCode: "." },
    { letter: "F", morseCode: "..-." },
    { letter: "G", morseCode: "--." },
    { letter: "H", morseCode: "...." },
    { letter: "I", morseCode: ".." },
    { letter: "J", morseCode: ".---" },
    { letter: "K", morseCode: "-.-" },
    { letter: "L", morseCode: ".-.." },
    { letter: "M", morseCode: "--" },
    { letter: "N", morseCode: "-." },
    { letter: "O", morseCode: "---" },
    { letter: "P", morseCode: ".--." },
    { letter: "Q", morseCode: "--.-" },
    { letter: "R", morseCode: ".-." },
    { letter: "S", morseCode: "..." },
    { letter: "T", morseCode: "-" },
    { letter: "U", morseCode: "..-" },
    { letter: "V", morseCode: "...-" },
    { letter: "W", morseCode: ".--" },
    { letter: "X", morseCode: "-..-" },
    { letter: "Y", morseCode: "-.--" },
    { letter: "Z", morseCode: "--.." }
  ];
  
  let encryptBtn = document.querySelector("#tomorsecode");
  let output = document.querySelector("#output");
  var modal = document.querySelector("#myModal");
  let okBtn = document.querySelector("#ok");
  let infoBtn = document.querySelector("#showlist");
  let infoModal = document.querySelector("#infoModal");
  let btnTwo = document.querySelector("#close");

  let outputText = "";


encryptBtn.addEventListener("click", () => {
          // input value und dann noch uppercase, um die Werte später vergleichen zu können
          let inputText = document.querySelector("#input").value.toUpperCase();

    // zusätzliche, leere Variable, um den umgewandelten Text zu speichern
    // let outputText = "";
  
    // i kleiner als inputText (input field), i inkrementieren
    for (let i = 0; i < inputText.length; i++) {
        // letter dem index i von inputtext gleichsetzen (also jeder Buchstabe)
      let letter = inputText[i];
      // jetzt wird der MorseLetter deklariert, such jetzt den parameter in dem objekt und sagt, dass für jedes item.letter der wert von letter gilt
      let morseLetter = morseAlphabet.find(item => item.letter === letter);
  
      if (morseLetter) {
        outputText += morseLetter.morseCode + "";
      }
      if (inputText == "SOS") {
        modal.style.opacity = "100";
        modal.style.visibility = "visible";
        modal.style.zIndex = "999";
        if (modal.style.visibility === "visible") {
            okBtn.addEventListener("click", function() {
              modal.style.opacity = "0";
              modal.style.visibility = "hidden";
              modal.style.zIndex = "0";
            });
          }
        outputText += morseLetter.morseCode + "";
      }
    }
  output.innerHTML = outputText;
});

infoBtn.addEventListener("click", function() {
    infoModal.style.visibility = "visible";
    infoModal.style.zIndex = "999";
    infoModal.style.opacity = "100";
    infoModal.innerHTML += outputText;
  
    btnTwo.addEventListener("click", function() {
      infoModal.style.visibility = "hidden";
      infoModal.style.zIndex = "0";
      infoModal.style.opacity = "0";
      infoModal.innerHTML = ""; // Clear the infoModal content
      console.log("btnTwo clicked");
    });
  });
