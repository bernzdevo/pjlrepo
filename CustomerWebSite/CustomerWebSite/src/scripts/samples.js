var fileInput = document.getElementById('fileInput');
var fileDisplayArea = document.getElementById('content');
var btnRead = document.getElementById('btnRead');

btnRead.addEventListener("click", function (e) {
    var file = fileInput.files[0];

    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {

        var img = new Image();
        img.src = reader.result;

        fileDisplayArea.appendChild(img);
    }


});

var fileDrag = document.getElementById('filedrag');

fileDrag.addEventListener("dragover", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("drag over");
    console.log(e);
});
fileDrag.addEventListener("dragleave", function (e) {
    e.stopPropagation();
    e.preventDefault();
    console.log("drag leave");
    console.log(e);
});
fileDrag.addEventListener("drop", function (e) {
    e.stopPropagation();
    e.preventDefault();
    var file = e.dataTransfer.files;
    var reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onload = function (e) {
        var img = new Image();
        img.src = reader.result;

        fileDrag.appendChild(img);
    }
});



