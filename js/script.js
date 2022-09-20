let canvas = document.getElementById('canvas');
let c = canvas.getContext('2d');
let filename = "twibbon";
let btnDownload = document.getElementById('download');
let reader = new FileReader();
let target = new Image();
let target2 = new Image();
let image = document.getElementById('image_input');

c.canvas.width = 1024;
c.canvas.height = 1024;
c.font = "3rem Ubuntu";
c.fillText("Pratinjau Twibbon akan terlihat disini...", 10, 50);

let download = function () {
    link = document.createElement('a');
    link.download = filename + '.png';
    link.href = document.getElementById('canvas').toDataURL()
    link.click();
}

let destroyInterval = () => {
    for (var i = 1; i < 99999; i++)
        window.clearInterval(i);
}

let load = () => {
    c.clearRect(0, 0, c.canvas.width, c.canvas.height);
    draw();
}

let draw = () => {
    //  made reponsive twibbon
    c.canvas.width = 1024;
    c.canvas.height = 1024;

    c.drawImage(target, 0, 0, c.canvas.width, c.canvas.height);
    c.drawImage(target2, 0, 0, c.canvas.width, c.canvas.height);
}

let enableButton = () => {
    let
}

let init = () => {
    run = setInterval(function () {
        load();
    }, 1000);
}

let setTwibbon = () => {
    target2.src = 'images/twibbon.png';
}

let imageReaderOnLoad = () => {
    reader.onload = (res) => {
        target.src = res.target.result.replace(/ +/g, "");
    }
}

let enableBtnDownload = () => {
    btnDownload.removeAttribute('disabled');
}

let generate = () => {
    
    if(image.files[0] === undefined) 
        alert('Gambar tidak boleh kosong!');
    else{
        destroyInterval();                               
        imageReaderOnLoad();
        setTwibbon();
        enableBtnDownload();
        reader.readAsDataURL(image.files[0]);
        init();
    }
}
