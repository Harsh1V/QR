// QR Code Generator
const generateBtn = document.getElementById('generate-btn');
const input = document.getElementById('text-input');
const qrCodeDiv = document.getElementById('qrcode');

generateBtn.addEventListener('click', () => {
  const text = input.value.trim();
  qrCodeDiv.innerHTML = '';

  if (text === '') {
    alert('Please enter text.');
    return;
  }

  new QRCode(qrCodeDiv, {
    text: text,
    width: 200,
    height: 200,
  });
});

// QR Code Reader
const resultElement = document.getElementById('result');

function onScanSuccess(decodedText, decodedResult) {
  html5QrcodeScanner.clear().then(() => {
    resultElement.textContent = `QR Code content: ${decodedText}`;
  });
}

const html5QrcodeScanner = new Html5QrcodeScanner("reader", {
  fps: 10,
  qrbox: 250
});

html5QrcodeScanner.render(onScanSuccess);
