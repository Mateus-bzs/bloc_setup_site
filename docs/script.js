const CONFIG = {
  pageUrl: window.location.href,
  instagramUsername: "blocsetup",
  whatsappPhone: "5587991852503",
  whatsappMessage: "Olá! Vi seu contato pelo chaveiro NFC da BLOC Printing Setup.",
};

// Funções de links
function makeInstagramLink(username) {
  return `https://www.instagram.com/${encodeURIComponent(username)}/`;
}

function makeWhatsAppLink(phone, message) {
  const text = encodeURIComponent(message || "");
  return `https://wa.me/${phone}${text ? `?text=${text}` : ""}`;
}

// Aplicar links nos botões
document.getElementById("btnIg").href = makeInstagramLink(CONFIG.instagramUsername);
document.getElementById("igLabel").textContent = "@" + CONFIG.instagramUsername;
document.getElementById("btnWa").href = makeWhatsAppLink(CONFIG.whatsappPhone, CONFIG.whatsappMessage);

// Copiar link
document.getElementById("btnCopy").addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(CONFIG.pageUrl);
    const old = document.getElementById("btnCopy").textContent;
    document.getElementById("btnCopy").textContent = "Copiado ✅";
    setTimeout(() => (document.getElementById("btnCopy").textContent = old), 1500);
  } catch (e) {
    alert("Não foi possível copiar automaticamente. Copie manualmente.");
  }
});

// Gerar QR Code com o link da página
const qrContainer = document.getElementById("qrcode");
if (qrContainer) {
  new QRCode(qrContainer, {
    text: CONFIG.pageUrl,
    width: 128,
    height: 128,
    colorDark: "#ffffff",
    colorLight: "#000000",
    correctLevel: QRCode.CorrectLevel.H,
  });
}
