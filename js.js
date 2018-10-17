// зої ховер
$(".zoep").hover(
    function () {

       $(".ZOEPT").addClass('inp');
    },
    function () {
       $(".ZOEPT").removeClass('inp');
    }
);
$(".zoeq").hover(
    function () {
       $(".ZOEQT").addClass('inp');
    },
    function () {
       $(".ZOEQT").removeClass('inp');
    }
);
$(".zoee").hover(
    function () {
       $(".ZOEET").addClass('inp');
    },
    function () {
       $(".ZOEET").removeClass('inp');
    }
);
$(".zoew").hover(
    function () {
       $(".ZOEWT").addClass('inp');
    },
    function () {
       $(".ZOEWT").removeClass('inp');
    }
);
$(".zoer").hover(
    function () {
       $(".ZOERT").addClass('inp');
    },
    function () {
       $(".ZOERT").removeClass('inp');
    }
);
// зої ховер
// орн ховер
$(".ornp").hover(
    function () {

       $(".ORNPT").addClass('inp');
    },
    function () {
       $(".ORNPT").removeClass('inp');
    }
);
$(".ornq").hover(
    function () {
       $(".ORNQT").addClass('inp');
    },
    function () {
       $(".ORNQT").removeClass('inp');
    }
);
$(".orne").hover(
    function () {
       $(".ORNET").addClass('inp');
    },
    function () {
       $(".ORNET").removeClass('inp');
    }
);
$(".ornw").hover(
    function () {
       $(".ORNWT").addClass('inp');
    },
    function () {
       $(".ORNWT").removeClass('inp');
    }
);
$(".ornr").hover(
    function () {
       $(".ORNRT").addClass('inp');
    },
    function () {
       $(".ORNRT").removeClass('inp');
    }
);
// орн ховер

function onClickp(){

        $(".forzoe1").addClass('inp');
        $(".forzoe2").addClass('inp');
        $(".zoeICON").addClass('inp');

        $(".zoeICANP").addClass('inp');
        $(".ZOEPTF").addClass('inp');

        $(".abyl").addClass('inp');
        $(".ebut1").addClass('inp');
}
function onClickq(){

        $(".forzoe1").addClass('inp');
        $(".forzoe2").addClass('inp');
        $(".zoeICON").addClass('inp');

        $(".zoeICANQ").addClass('inp');
        $(".ZOEQTF").addClass('inp');

        $(".abyl").addClass('inp');
        $(".ebut1").addClass('inp');
}
// zoe
function onClickpOrn(){
        $(".fororn1").addClass('inp');
        $(".fororn2").addClass('inp');
        $(".ornICON").addClass('inp');

        $(".ornICANP").addClass('inp');
        $(".ORNPTF").addClass('inp');

        $(".abylorn").addClass('inp');
        $(".ebut1Orn").addClass('inp');
}
function onClickqOrn(){
        $(".fororn1").addClass('inp');
        $(".fororn2").addClass('inp');
        $(".ornICON").addClass('inp');

        $(".ornICANQ").addClass('inp');
        $(".ORNQTF").addClass('inp');

        $(".abylorn").addClass('inp');
        $(".ebut1Orn").addClass('inp');
}
function exitpZ(){
        $(".forzoe1").removeClass('inp');
        $(".forzoe2").removeClass('inp');
        $(".zoeICON").removeClass('inp');

        $(".zoeICANP").removeClass('inp');
        $(".zoeICANQ").removeClass('inp');
        $(".ZOEPTF").removeClass('inp');
        $(".ZOEQTF").removeClass('inp');

        $(".abyl").removeClass('inp');
        $(".ebut1").removeClass('inp');
}
// zoe
function exitpO(){
        $(".fororn1").removeClass('inp');
        $(".fororn2").removeClass('inp');
        $(".ornICON").removeClass('inp');

        $(".ornICANP").removeClass('inp');
        $(".ornICANQ").removeClass('inp');
        $(".ORNPTF").removeClass('inp');
        $(".ORNQTF").removeClass('inp');

        $(".abylorn").removeClass('inp');
        $(".ebut1Orn").removeClass('inp');
}

var iz = true;
function tophzBT(){
    
    if(iz){
    $(".historyZOE").addClass('inp');
    $(".tophelpZOEBT").addClass('inp');
    iz = false; 
    }else{
    $(".historyZOE").removeClass('inp');
    $(".tophelpZOEBT").removeClass('inp');
 
    iz=true;
    }
   
}



var io = true;
function tophoBT(){
    
    if(io){
    $(".historyORN").addClass('inp');
    $(".tophelpORNBT").addClass('inp');
    io = false; 
    }else{
    $(".historyORN").removeClass('inp');
    $(".tophelpORNBT").removeClass('inp');
 
    io=true;
    }
   
}


function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
    thissound.volume = 0.15;
    t=1;
    
}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    
    // thissound.currentTime = 0;
    
    
}
// zoe
var soundz_i = false;
function soundz(){
    if(!soundz_i){
    $(".soundz").addClass('inp');
    PlaySound('zoesound');
    $(".sOn").addClass('inp');
    $(".sOff").addClass('inp');
    soundz_i=true;
    }else{
    $(".soundz").removeClass('inp'); 
    soundz_i=false;
    StopSound('zoesound');
    $(".sOn").removeClass('inp');
    $(".sOff").removeClass('inp');
    }
}
// zoe


var soundo_i = false;
function soundo(){
    if(!soundo_i){
    $(".soundo").addClass('inp');
    PlaySound('ornsound');
    $(".sOnOrn").addClass('inp');
    $(".sOffOrn").addClass('inp');
    soundo_i=true;
    }else{
    $(".soundo").removeClass('inp'); 
    soundo_i=false;
    StopSound('ornsound');
    $(".sOnOrn").removeClass('inp');
    $(".sOffOrn").removeClass('inp');
    }
}
