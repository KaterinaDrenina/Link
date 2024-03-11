const urlInput = document.getElementById('urlInput');
const goButton = document.getElementById('goButton');

function checkUrl() {
    let url = urlInput.value.trim();

    if(url === '') {
        console.log('https://www.google.com');
        return;
    }

    if(url.match(/^http:\/\//)) {
        url = url.replace("http://", "https://");
    } 

    console.log(url);
}

goButton.addEventListener('click', checkUrl);