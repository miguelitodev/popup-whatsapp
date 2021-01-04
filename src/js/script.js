// DIV DO POPUP
const popupWhatsapp = document.querySelector(".popup-whatsapp");
// DIV DO FORM CONTAINER
const containerFormWhatsapp = document.querySelector(
	".container-form-whatsapp"
);
// BOTÃO DE FECHAR FORM
const buttonCloseFormWhatsapp = document.querySelector(
	".button-close-form-whatsapp"
);
// BOTAO DE ENVIAR DADOS
const buttonSendData = document.querySelector(".button-send-data");

// ABRIR FORM AO CLICAR NO POPUP
popupWhatsapp.addEventListener("click", () => {
	popupWhatsapp.style.display = "none";
	containerFormWhatsapp.style.display = "flex";
});
// FECHAR O FORM E REESTILIZAR O POPUP
buttonCloseFormWhatsapp.addEventListener("click", () => {
	containerFormWhatsapp.style.display = "none";
	popupWhatsapp.style.display = "flex";
});
// ENVIAR DADOS DO FORM PARA O WHATSAPP
buttonSendData.addEventListener("click", () => {
	// CONTEÚDO DA MENSAGEM
	let nome = document.querySelector("#nomeUser").value;
	let reason = document.querySelector("#reasonUser").value;
	let commentary = document.querySelector("#commentaryUser").value;
	let link = `https://api.whatsapp.com/send?phone=5511912345678&text=Olá meu nome é ${nome}, venho pelo motivo ${reason}, segue meu comentário: ${commentary}`;
	// REESTILIZAR FORM E POPUP
	containerFormWhatsapp.style.display = "none";
	popupWhatsapp.style.display = "flex";
	// ABRE UMA NOVA PAGE
	return window.open(link);
});
