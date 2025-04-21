// app.js
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    const formData = {
      name: name,
      email: email,
      message: message
    };
  
    fetch('http://localhost:8080/api/contact', {  // Change to your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      alert('Message sent successfully!');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  });
  