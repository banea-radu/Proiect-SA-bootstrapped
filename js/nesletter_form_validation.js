const nameNewsletter = document.getElementById("name-newsletter");
const emailNewsletter = document.getElementById("email-newsletter");
const submitFormNewsletter = document.getElementById("submit-newsletter");

function validateNewsletterName(nameNewsletter) {
	// Initializam regName ca si Regular Expression pentru validarea formatului Nume + Prenume, adica sa aiba 2 cuvinte
	let regNewsletterName = /^[a-zA-Z]+ [a-zA-Z]+$/;
	// functia test() este folosita pentru a testa Regular Expression declarata inainte
    if (!regNewsletterName.test(nameNewsletter.value)) {
		nameNewsletter.setCustomValidity("Te rog introdu un nume si prenume valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		nameNewsletter.reportValidity();
		nameNewsletter.focus();
        return false;
    } else {
        return true;
    }
}

function validateNewsletterEmail(emailNewsletter) {
	// Initializam regEmail ca si Regular Expression pentru validarea formatului de email
	let regNewsletterEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	// functia test() este folosita pentru a testa Regular Expression declarata inainte
    if (!regNewsletterEmail.test(emailNewsletter.value)) {
		emailNewsletter.setCustomValidity("Te rog introdu un email valid!");
		// Dupa eroare trebuie apelata metoda reportValidity() pe acelasi element sau nu o sa se intample nimic
		emailNewsletter.reportValidity();
        emailNewsletter.focus();
        return false;
    } else {
        return true;
    }
}

submitFormNewsletter.addEventListener("click", (event) => {
	event.preventDefault(); // suspenda submit-ul formularului
	
	let validNewsletterName = validateNewsletterName(nameNewsletter);
	if (validNewsletterName === false) {return;}; // daca e invalid se opreste aici
	
	let validNewsletterEmail = validateNewsletterEmail(emailNewsletter);
	if (validNewsletterEmail === false) {return;}; // daca e invalid se opreste aici
		
	// Toate campurile sunt validate, trimite formularul
	alert("Numele are 2 cuvinte, emailul arata bine, totul pare valid! Unde sa trimit formularul?");
});
