const name = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");
const submitForm = document.getElementById("submit");

function validateName(name) {
	// Initializam regName ca si Regular Expression pentru validarea formatului Nume + Prenume, adica sa aiba 2 cuvinte
	let regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	// functia test() este folosita pentru a testa Regular Expression declarata inainte
	if (!regName.test(name.value)) {
		name.setCustomValidity("Te rog introdu un nume si prenume valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		name.reportValidity();
		name.focus();
		return false;
    } else {
        return true;
    }
}

function validateEmail(email) {
	// Initializam regEmail ca si Regular Expression pentru validarea formatului de email
	let regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// functia test() este folosita pentru a testa Regular Expression declarata inainte
    if (!regEmail.test(email.value)) {
		email.setCustomValidity("Te rog introdu un email valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		email.reportValidity();
        email.focus();
        return false;
    } else {
        return true;
    }
}

function validateSubject(subject) {
    if (subject.value === null || subject.value === "") {
		subject.setCustomValidity("Te rog introdu un subiect valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		subject.reportValidity();
        subject.focus();
        return false;
    } else {
        return true;
    }
}

function validateMessage(message) {
    if (message.value === null || message.value === "") {
		message.setCustomValidity("Te rog introdu un mesaj valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		message.reportValidity();
        message.focus();
        return false;
    } else {
        return true;
    }
}

submitForm.addEventListener("click", (event) => {
	event.preventDefault(); // suspenda submit-ul formularului
	
	let validName = validateName(name);
	if (validName === false) {return;}; // daca e invalid se opreste aici
	
	let validEmail = validateEmail(email);
	if (validEmail === false) {return;}; // daca e invalid se opreste aici
	
	let validSubject = validateSubject(subject);
	if (validSubject === false) {return;}; // daca e invalid se opreste aici
	
	let validMessage = validateMessage(message);
	if (validMessage === false) {return;}; // daca e invalid se opreste aici
	
	// Toate campurile sunt validate, trimite formularul
	alert("Numele are 2 cuvinte, emailul arata bine, subiectul si mesajul contin date, totul pare valid! Unde sa trimit formularul?");
	
	//event.submit();
});