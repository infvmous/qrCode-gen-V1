

let form = document.getElementById ('generate-form')
let qr = document.getElementById('qrcode')




const onGenerateSubmit = (e) => {
    e.preventDefault();
    clearUi ()
    
    let url = document.getElementById('url-input').value;
    let size = document.getElementById('size-select').value;


    if (url === '') {
        alert('Please enter a URL');
    } else {
        showSpinner ()
        setTimeout(() => {
        generateQRCode(url, size);     
          }, 1000)
    }
 
}


const generateQRCode = (url, size) => {
    const qrcode = new QRCode('qrcode', {
      text: url,
      width: size,
      height: size,
    });
  };
  

function showSpinner (){
  let spinner = document.getElementById('spinner');
  spinner.style.display = 'block';

  setTimeout(() => {
    spinner.style.display = 'none'
    setTimeout(() => {
      // Get save url
      const saveUrl = qr.querySelector('img').src;
      // Create save button
      createSaveBtn(saveUrl);
      
    }, 50);
  }, 1000)
  
};


const createSaveBtn = (saveUrl) => {
  
  const link = document.createElement('a');
  link.innerHTML = `
  <button id="btn">Download PNG 
  <i class="fa-solid fa-download"></i>
  </button>
  `
  link.id = 'save-link';
  link.href = saveUrl;
  link.download = 'qrcode';
  document.getElementById('generated').appendChild(link);
  if (saveLink)
  saveLink.remove();
};


const clearUi = () => {
  qr.innerHTML = '';
  const saveLink = document.getElementById('btn');
  if (saveLink)
  saveLink.remove();
}

form.addEventListener('submit', onGenerateSubmit);