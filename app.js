document.getElementById("contactForm").addEventListener("submit", async function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();
  
    const responseMessage = document.getElementById("responseMessage");
  
    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, subject, message }),
      });
  
      const data = await response.text();
  
      if (response.ok) {
        responseMessage.textContent = "✅ Message sent successfully!";
        responseMessage.style.color = "green";
        document.getElementById("contactForm").reset();
      } else {
        responseMessage.textContent = "❌ Failed to send message.";
        responseMessage.style.color = "red";
      }
  
      console.log("Server response:", data);
    } catch (error) {
      console.error("Error:", error);
      responseMessage.textContent = "❌ Error sending message.";
      responseMessage.style.color = "red";
    }
  });
  