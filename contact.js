document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("contact-form");

  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      document.getElementById("status").innerText =
        "🐔 Message sent to the Chicken Council! They are reviewing it... Will take 3~5 Clucks.";

      form.reset();
    });
  }

});
