/* title */
var message=new Array();message[0]="russ rizzo";message[1]="decent name";message[2]="he's not a buffalo";message[3]="he's from buffalo";message[4]="but this isn't buffalo";message[5]="this is russrizzo.net";message[6]="thanks for being here";message[7]="bliss and luck";message[8]="- russ";var reps=2;var speed=100;var p=message.length;var T="";var C=0;var mC=0;var s=0;var sT=null;if(reps<1)reps=1;function doTheThing(){T=message[mC];A();}
function A(){s++;if(s>8){s=1;}
if(s==1){document.title=''+T+'';}
if(s==2){document.title=''+T+'';}
if(C<(8*reps)){sT=setTimeout("A()",speed);C++;}
else{C=0;s=0;mC++;if(mC>p-1)mC=0;sT=null;doTheThing();}}
doTheThing();

/* franny's link magic */

"use strict";

        $("#franny a span").hide();
        $('#franny a').mousemove(function(e) { 
            $(this).find("span").stop(1, 1).fadeIn();
            $("#franny a span").offset({
                top: e.pageY - ($("#franny a span").outerHeight()/2),
                left: e.pageX - ($("#franny a span").outerWidth()/2)
            });
        }).mouseleave(function() {
            $("#franny a span").fadeOut();
        });


document.addEventListener('touchstart', function addtouchclass(e){ // first time user touches the screen
    document.documentElement.classList.add('is-touch') // add "can-touch" class to document root using classList API
    document.removeEventListener('touchstart', addtouchclass, false) // de-register touchstart event
}, false)