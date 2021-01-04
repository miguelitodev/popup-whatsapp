// TELAS
let containerChat = document.querySelector(".chat-container");
let contentChat = document.querySelector(".content-chat");
let initialChat = document.querySelector(".stage-chat-initial");
let planosChat = document.querySelector(".stage-chat-planos");
let planoDesenvolvimentoChat = document.querySelector(
	".stage-chat-plano-desenvolvimento"
);
let planoMarketingChat = document.querySelector(".stage-chat-plano-marketing");
let confirmPlanosChat = document.querySelector(".stage-chat-confirm-planos");

// BOTÕES
let buttonOutrosChat = document.querySelector(".button-chat-outros");
let buttonPlanosChat = document.querySelector(".button-chat-planos");
let buttonPlanosDesenvolvimentoChat = document.querySelector(
	".button-chat-plano-desenvolvimento"
);
let buttonPlanosMarketingChat = document.querySelector(
	".button-chat-plano-marketing"
);
let buttonConfirmOutrosChat = document.querySelector(
	".button-enviar-confirm-outros"
);
let sendInfoOutros = document.querySelector(".button-send-info-outros");
let buttonVoltarChatOutros = document.querySelector(
	".button-voltar-chat-outros"
);
let buttonVoltarConfirmOutrosChat = document.querySelector(
	".button-voltar-chat-confirm-outros"
);
let buttonVoltarChatPlanos = document.querySelector(
	".button-voltar-chat-planos"
);
let buttonVoltarChatPlanoDesenvolvimento = document.querySelector(
	".button-voltar-chat-plano-desenvolvimento"
);
let buttonVoltarChatPlanoMarketing = document.querySelector(
	".button-voltar-chat-plano-marketing"
);

// BOTAO ABRIR MODAL
containerChat.addEventListener("click", () => {
	containerChat.style.display = "none";
	contentChat.style.display = "block";
});

// PLANOS
buttonPlanosChat.addEventListener("click", () => {
	initialChat.style.display = "none";
	planosChat.style.display = "flex";
});
buttonVoltarChatPlanos.addEventListener("click", () => {
	planosChat.style.display = "none";
	initialChat.style.display = "flex";
});

// PLANOS - DESENVOLVIMENTO
buttonPlanosDesenvolvimentoChat.addEventListener("click", () => {
	planosChat.style.display = "none";
	planoDesenvolvimentoChat.style.display = "flex";
});
buttonVoltarChatPlanoDesenvolvimento.addEventListener("click", () => {
	planoDesenvolvimentoChat.style.display = "none";
	planosChat.style.display = "flex";
});

// PLANOS - MARKETING
buttonPlanosMarketingChat.addEventListener("click", () => {
	planosChat.style.display = "none";
	planoMarketingChat.style.display = "flex";
});
buttonVoltarChatPlanoMarketing.addEventListener("click", () => {
	planoDesenvolvimentoChat.style.display = "none";
	planosChat.style.display = "flex";
});

// OUTROS
let confirmOutrosChat = document.querySelector(".stage-chat-confirm-outros");
let outrosChat = document.querySelector(".stage-chat-outros");

let nomeOutros;
let mensagemOutros;

buttonOutrosChat.addEventListener("click", () => {
	initialChat.style.display = "none";
	outrosChat.style.display = "flex";
});
buttonVoltarChatOutros.addEventListener("click", () => {
	outrosChat.style.display = "none";
	initialChat.style.display = "flex";
});
buttonConfirmOutrosChat.addEventListener("click", () => {
	outrosChat.style.display = "none";
	confirmOutrosChat.style.display = "flex";
	nomeOutros = document.querySelector(".nomeOutros").value;
	mensagemOutros = document.querySelector(".mensagemOutros").value;
	let link = `https://api.whatsapp.com/send?phone=5511977976049&text=Olá eu me chamo ${nomeOutros} e eu tenho uma dúvida mais específica, segue mais informações sobre: ${mensagemOutros}`;
	console.log(nomeOutros, mensagemOutros, link);
	sendInfoOutros.setAttribute("href", link);
});
buttonVoltarConfirmOutrosChat.addEventListener("click", () => {
	confirmOutrosChat.style.display = "none";
	outrosChat.style.display = "flex";
});
