function telacheia(){
    var el = document.getElementById('fala');
    var al = document.getElementById('canvas');
    if(fullscreen() == undefined) {
        if(el.requestFullscreen) {
            el.requestFullscreen();
        } else if(el.mozRequestFullScreen) {
            el.mozRequestFullScreen();
        } else if(el.webkitRequestFullscreen) {
            el.webkitRequestFullscreen();
        } else if(el.msRequestFullscreen) {
            el.msRequestFullscreen();
        }
    }
    else {
        if(document.exitFullscreen) {
            document.exitFullscreen();
        } else if(document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
        } else if(document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }           
}

function cancelaFullscreen(){
    var el = document.getElementById('fala');
    var al = document.getElementById('canvas');
    if(fullscreen() == undefined){
        el.style.width=768 + "px";
        el.style.height=448 + "px";
        al.style.width=768 + "px";
        al.style.height=448 + "px";
    }
    else{
        var valorW = screen.width;
        var valorH = screen.width/768 * 448;
        while(valorH > screen.height){
            valorW -= valorW * 0.1;
            valorH -= valorH * 0.1;
        }
        el.style.width =  valorW + "px";
        el.style.height =  valorH + "px";
        al.style.width =  valorW + "px";
        al.style.height =  valorH + "px";
    }
}