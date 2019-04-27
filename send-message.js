/**
 * Handles the sending of messages to the message apis
 */

// Form Controls
const titleTextBox = document.getElementById("title");
const emailTextBox = document.getElementById("email");
const messageTextArea = document.getElementById("message");
const sendButton = document.getElementById("send");
// End Form Controls

// Constants
const ENDPOINT = "http://contacts-webdev-project-contacts.1d35.starter-us-east-1.openshiftapps.com/message";
// End Constants

sendButton.addEventListener("click", (e) => {
  // Since the button was in a form, it will try to send the contents as form-data
  e.preventDefault();

  const message = {
    title: titleTextBox.value,
    email: emailTextBox.value,
    message: messageTextArea.value,
  };

  fetch(ENDPOINT, {
    method: "POST",
    body: JSON.stringify(message),
  }).then(res => res.json())
  .then((val) => {
    if(val.error) { alert("Message not sent, please try again later"); }
    else { alert("Message sent"); }
  });
});
