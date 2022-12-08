btn = document.querySelector(".btn")

btn.onclick = function () {
    window.open('rickroll.html');
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