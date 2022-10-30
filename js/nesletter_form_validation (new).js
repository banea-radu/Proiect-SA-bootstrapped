const nameNewsletter = document.getElementById("name-newsletter");
const emailNewsletter = document.getElementById("email-newsletter");
const submitFormNewsletter = document.getElementById("submit-newsletter");
const urlNewsletter = 'https://getpantry.cloud/apiv1/pantry/9497404d-5cc0-493e-b389-3bf16725b9d2/basket/newsletter';
var alreadySubscribed;
var checkIfAlreadySubscribedError;

console.log(1, alreadySubscribed);

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

function checkIfAlreadySubscribed() {
	alreadySubscribed = false;
	checkIfAlreadySubscribedError = false;
	
	fetch(urlNewsletter)
		.then((response) => {
			if (!response.ok) {
				throw new Error(`HTTP error: ${response.status}`);
				checkIfAlreadySubscribedError = true; // daca avem eroare, punem un semnal pentru a nu continua functia de abonare
			}
			return response.json();
		})
		.then((data) => {
			let items = Object.keys(data);
			for (const item of items) {
				if (item === emailNewsletter.value) {
					console.log(typeof item, typeof emailNewsletter.value);
					alreadySubscribed = true; // daca este abonat deja emailul, punem un semnal pentru a nu continua functia de abonare
				}
				console.log(3, alreadySubscribed);
				if (alreadySubscribed) {
					alert("Acest email a fost deja folosit pentru abonarea la newsletter!");
				} else {
					fetch(urlNewsletter, {
						method: 'PUT', // POST rescrie tot basket-ul
						headers: {
							'Content-Type': 'application/json'
						},
						body: JSON.stringify( 
							{
								[emailNewsletter.value] : { 
									'Nume': nameNewsletter.value, 
									'Email': emailNewsletter.value,
									'Data': Date()
							}
						}),
						redirect: 'follow'
					})
		.then(result => alert("Te-ai abonat cu succes, multumim!"))
		.catch(error => {
			console.log('error', error);
			alert("A intervenit o eroare de conexiune! Te rugam mai incearca o data!");
		})
			}
			}
		})
		.catch((err) => {
			console.error(`Fetch problem: ${err.message}`)
			checkIfAlreadySubscribedError = true; // daca avem eroare, punem un semnal pentru a nu continua functia de abonare
			alert("A intervenit o eroare de conexiune! Te rugam mai incearca o data!");
		});
		
		return checkIfAlreadySubscribedError;
}

async function postNewsletter() {
		
			
		
	

}

submitFormNewsletter.addEventListener("click", (event) => {
	event.preventDefault(); // suspenda submit-ul formularului

	let validNewsletterName = validateNewsletterName(nameNewsletter);
	if (validNewsletterName === false) {return;}; // daca e invalid se opreste aici
	
	let validNewsletterEmail = validateNewsletterEmail(emailNewsletter);
	if (validNewsletterEmail === false) {return;}; // daca e invalid se opreste aici

console.log(2, alreadySubscribed);		
	// Toate campurile sunt validate
	postNewsletter();
});
