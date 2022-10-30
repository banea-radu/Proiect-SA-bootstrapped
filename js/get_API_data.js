// Aducem date dintr-un basket creat special pentru proiect pe https://getpantry.cloud
const urlLink = 'https://getpantry.cloud/apiv1/pantry/9497404d-5cc0-493e-b389-3bf16725b9d2/basket/tenisdemasasibiu';
const scrollingText = document.querySelector(".scrolling-text");

fetch(urlLink)
	.then((response) => {
		if (!response.ok) {
			throw new Error(`HTTP error: ${response.status}`);
		}
		return response.json();
	})
	.then((data) => {
		for (const item of data.program) {
			scrollingText.innerHTML  = scrollingText.innerHTML 
				+ item.Ziua
				+ " "
				+ item.Ora
				+ " "
				+ item.Categoria
				+ "; "
		}
	})
	.catch((err) => console.error(`Fetch problem: ${err.message}`));
