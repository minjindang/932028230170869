///A-Team
var Apoint = 0;

$(document).ready(function(){
    $('#APB').click(function(){
            $("#A-point").fadeOut('fast',function(){
                Apoint = Apoint + 2 ;
                        if(Apoint > 300 ){
                             Apoint=0;
                           }
                    $('#A-point').text(Apoint);  
                                $("#A-point").fadeIn('slow');
                });
    })
            $('#LAPB').click(function(){
            $("#A-point").fadeOut('fast',function(){
        Apoint = Apoint + 3 ;
        if(Apoint - 1 < 0 ){
            Apoint=0;
            }
        $('#A-point').text(Apoint); 
        $("#A-point").fadeIn('slow');
            });
        })
    })

///B-Team    
var Bpoint = 0;

$(document).ready(function(){
    $('#BPB').click(function(){
        $("#B-point").fadeOut('fast',function(){
        Bpoint = Bpoint + 2 ;
            if(Bpoint  > 300 ){
                Bpoint =0;
                           }
        $('#B-point').text(Bpoint);
        $("#B-point").fadeIn('slow');
    })
    })
            $('#LBPB').click(function(){
            $("#B-point").fadeOut('fast',function(){
        Bpoint = Bpoint + 3 ;
        if(Bpoint - 1 < 0 ){
            Bpoint=0;
            }
        $('#B-point').text(Bpoint);
        $("#B-point").fadeIn('slow');
            });
        })
    })
///Round
var rdup = 1;
$(document).ready(function(){
    $('#XRD').click(function(){
            $("#rdnum").fadeOut('fast',function(){
        rdup = rdup + 1 ;
        if(rdup>4){
            rdup = 1 ;
            $('#rd').text("OT")
        }
        $('#rdnum').text(rdup);
        $("#rdnum").fadeIn('slow');
           
    });
        })
    })
$(document).ready(function(){
    $('#LRD').click(function(){
            $("#rdnum").fadeOut('fast',function(){
        rdup = rdup - 1 ;
        if(rdup - 1 < 0 ){
            rdup=1;           
                $('#rd').text("RD");
            }
        $('#rdnum').text(rdup);
        $("#rdnum").fadeIn('slow');
            });
        })

    })
///Time-out
$(document).ready(function(){
    sdf=0
    $('#AT').click(function(){
        $('#out-A'+ sdf).css("background","black");
        sdf++
            })
            })    
$(document).ready(function(){
    fds=0
    $('#BT').click(function(){
        $('#out-B'+ fds).css("background","black");
        fds++
            })
            })
///Quarter
var start = true ;
var Min=0;          
var Sec=30;
var CT,S,M;

function SW(){
  if (start==true){
      count( ) } }
function count( ){
  start = false;
  M=document.getElementById("Q1");
  M.innerHTML=Min;
  S=document.getElementById("Q2");
  S.innerHTML=Sec; 
  Sec--;
  delate=window.setInterval(CT,1000);
}
function CT(){ 
  S.innerHTML=Sec;
  M.innerHTML=Min;
  if (Sec==0){
      if(Min>0){
          Min = Min - 1;
          Sec = 59 ;
          }
      else{
              clearInterval(delate);
              Min=11;
              Sec=59;
              start = true ;
          }
  }
  Sec--;
}
function stop() 
{ 
window.clearInterval(delate);
start=true;
}  
///Shot-clock
var sstart = true ;         
var SSec=24;
var SCT,SS

function SSW(){
  if (sstart==true){
      scount( ) } }
function scount( ){
  sstart = false;
  SS=document.getElementById("Shot-clock");
  SS.innerHTML=SSec; 
  SSec--;
  Sdelate=window.setInterval(SCT,1000);
}
function SCT(){ 
  SS.innerHTML=SSec;
  if (SSec==0){
              clearInterval(Sdelate);
               SSec=25;
              sstart=true;
          }
  SSec--;
}
function Sstop() 
{ 
window.clearInterval(Sdelate);
sstart=true;
} 