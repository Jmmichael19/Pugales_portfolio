// Initialize EmailJS with your user ID
(function () {
  emailjs.init("i0WNgLT26ZK9FKiF7");
})();

// Function to send email using EmailJS
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Send the email using the form data

    emailjs.sendForm("service_gh0qdjn", "template_sby4pid", this).then(
      function () {
        alert("Message Sent Successfully!");
      },
      function (error) {
        alert("Failed to send the message: " + JSON.stringify(error));
      }
    );
  });
