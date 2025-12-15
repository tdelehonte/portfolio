document.addEventListener('DOMContentLoaded', function() {
const contactSection = document.querySelector('section');

const form = document.createElement('form');
form.id = 'contactForm';
form.innerHTML = `
<label for='name'>Nom :</label><br>
<input type='text' id='name' name='name' required><br><br>
<label for='email'>Email :</label><br>
<input type='email' id='email' name='email' required><br><br>
<label for='message'>Message :</label><br>
<textarea id='message' name='message' rows='5' required></textarea><br><br>
<button type='submit'>Envoyer</button>
`;


contactSection.appendChild(form);


form.addEventListener('submit', function(e) {
e.preventDefault();
alert('Merci, votre message a été envoyé !');
form.reset();
});
});
