function color(clr) {
    var x = document.getElementById("header");
    var click = document.getElementById('black');
    if (x.style.background == clr) {


        x.style.cssText = "mix-blend-mode:normal; background:transparent";
        click.style.background = 'black';
    } else {
        click.style.background = 'white';
        x.style.cssText = "mix-blend-mode:multiply";
        x.style.background = clr;

    }
}


// <------------------- Audio Toggle ------------------------------------>

var myAudio = document.getElementById("myAudio");
var pp = document.querySelector(".pp");

function togglePlay() {
    if (myAudio.paused) {
        myAudio.play();
        pp.classList.add("pause");
    } else {
        myAudio.pause();
        pp.classList.remove("pause");
    }

};


// return myAudio.paused ? myAudio.play() : myAudio.pause();


//  function blend() {
//     var x = document.getElementById("header");
// if(x.style.background != 'black')
//     {
//         x.style.cssText = "mix-blend-mode:multiply; background:black";
//         document.getElementById("black").style.background = 'transparent';
//     }
//      else{
//          x.style.cssText = "mix-blend-mode:normal; background:transparent";
//              document.getElementById("black").style.background = 'black';
//      }
// }
//  document.querySelector('video').playbackRate = 1.5;