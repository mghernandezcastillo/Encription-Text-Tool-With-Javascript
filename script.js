// querySelector all elements
const encrypt_button = document.querySelector("#encrypt_button"); // Encrypt button
const decrypt_button = document.querySelector("#decrypt_button"); // Decrypt button
const copied_message = document.querySelector("#copied_message"); // p tag with the copied message
const output_text = document.querySelector("#output_text"); // get output text
const input_text = document.querySelector("#input_text"); // get input text
const copy_button = document.querySelector("#copy_button"); // get copy button
const clear_button = document.querySelector("#clear_button"); // Clear button

// Encript and Decript functions

const encrypt = (text) => {
  // Encrypt function
  let encrypt = "";
  text.split("").forEach((e) => {
    switch (e) {
      case "e":
        encrypt += "enter";
        break;
      case "i":
        encrypt += "imes";
        break;
      case "a":
        encrypt += "ai";
        break;
      case "o":
        encrypt += "ober";
        break;
      case "u":
        encrypt += "ufat";
        break;
      default:
        encrypt += e;
    }
  });
  return encrypt;
};

const decrypt = (text) => {
  // Decrypt function
  let decrypt = text;

  if (text.includes("enter")) {
    decrypt = decrypt.replace(/enter/g, "e");
  }
  if (text.includes("imes")) {
    decrypt = decrypt.replace(/imes/g, "i");
  }
  if (text.includes("ai")) {
    decrypt = decrypt.replace(/ai/g, "a");
  }
  if (text.includes("ober")) {
    decrypt = decrypt.replace(/ober/g, "o");
  }
  if (text.includes("ufat")) {
    decrypt = decrypt.replace(/ufat/g, "u");
  }

  return decrypt;
};

// Other functions


const copyToClipboard = (text) => {
  // Copy to clipboard function
  var dummy = document.createElement("textarea"); // Create a <textarea> element
  document.body.appendChild(dummy); // Append the <textarea> element to the document
  dummy.value = text; // Set its value to the string that you want copied
  dummy.select(); // Select the <textarea> content
  document.execCommand("copy"); // Copy - only works as a result of a user action (e.g. click events)
};

const showCopiedMessage = () => {
  // Show copied message
  copied_message.style.display = "block";
  setTimeout(() => {
    copied_message.style.display = "none";
  }, 2000);
};

const showCopyAndClearButtons = () => {
    // Show copy and clear buttons
    copy_button.style.display = "block";
    clear_button.style.display = "block";
};

const hideCopyAndClearButtons = () => {
    // Hide copy and clear buttons
    copy_button.style.display = "none"; 
    clear_button.style.display = "none";
};

const changeOutuptTextColor = (color) => {
  // Change output text color
  output_text.style.color = color;
};

const clearInputAndOutput = () => {
  // Clear input and output
  input_text.value = "";
  output_text.innerHTML = "Encrypted Text Here";
  hideCopyAndClearButtons();
};

// Event Listeners

encrypt_button.addEventListener("click", () => {
  // Encrypt addEventListener click
  let text = input_text.value;
  let encrypted_text = encrypt(text);
  output_text.innerHTML = encrypted_text;
  changeOutuptTextColor("#000000"); // black
  showCopyAndClearButtons();
});

decrypt_button.addEventListener("click", () => {
  // Decrypt addEventListener click
  let text = input_text.value;
  let decrypted_text = decrypt(text);
  output_text.innerHTML = decrypted_text;
  changeOutuptTextColor("#000000"); // black
    showCopyAndClearButtons();
});

copy_button.addEventListener("click", function () {
  // copy button addEventListener click
  copyToClipboard(output_text.innerText); // copy text from p tag to clipboard
  showCopiedMessage(); // show emergent message
});

clear_button.addEventListener("click", () => {
  // clear button addEventListener click
  clearInputAndOutput(); // clear input and output
  changeOutuptTextColor("#969696"); // black
});
