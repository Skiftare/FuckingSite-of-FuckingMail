function button() {
    // window.open('about.html');

    let message = {
        'receiver' : document.querySelector(".receiver").value,
        'theme' : document.querySelector(".mail-theme").value,
        'text' : document.querySelector("textarea").value
    };

    console.log(message);
}

function addNewFile(name) {
    var ul = document.getElementById("list");
    var li = document.createElement("li");
    li.innerHTML = name;
    ul.appendChild(li);
}

fileUploader = document.getElementById('file-input');
list = document.getElementById('list');

fileUploader.onchange = function() {
    let files = event.target.files;
    list.style.display = 'block';
    
    del = document.getElementById('empty-list');
    del.style.display = 'none';
    for (let i = 0; i < files.length; i++) {
        console.log(files[i].name);
        addNewFile(files[i].name);
    }
}

theme = document.getElementById('theme')

theme.onclick = function () {
    console.log('Changed theme');
}