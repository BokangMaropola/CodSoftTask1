function openimageviewer(imagetoview){
    let imagewidth = imagetoview.naturalWidth;
    let imageheight = imagetoview.naturalHeight;
    if (imagewidth >= imageheight){
        document.getElementById("activeimage").style.minWidth = "90%";
    }else{
        document.getElementById('activeimage').style.minHeight = "90%";
    }
    let opener = document.getElementById('imageviewer');
    opener.style.display = "block";
    document.getElementById('activeimage').src = imagetoview;
}

function closeviewer(){
    document.getElementById('imageviewer').style.display = "none";
    document.getElementById('activeimage').src = "";
}