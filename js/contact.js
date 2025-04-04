document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que la página se recargue
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    const responseMessage = document.getElementById("formResponse");
  
    if (!name || !email || !message) {
      responseMessage.textContent = "Por favor, completa todos los campos.";
      responseMessage.style.color = "red";
      responseMessage.classList.remove("hidden");
      return;
    }
  
    // Simulación de envío de datos
    setTimeout(() => {
      responseMessage.textContent = "¡Mensaje enviado con éxito! Te responderemos pronto.";
      responseMessage.style.color = "green";
      responseMessage.classList.remove("hidden");
  
      // Limpiar formulario después de enviar
      document.getElementById("contactForm").reset();
    }, 1000);
  });
  