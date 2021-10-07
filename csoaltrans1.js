let cst1 = document.querySelectorAll('.cst1');
let ikon = document.querySelectorAll('.ikon');

console.log(cst1)

for (let i=0; i<cst1.length; i++){

    //function agar saat di enter tidak dijalankan
    cst1[i].addEventListener('keypress', function(e){
        if (e.keyCode == 13) {
            e.preventDefault();
            return false;
        }
    });

    cst1[i].addEventListener('keyup', function() {
        
        if (cst1[i].value.length == 0){
        if(cst1[i].className.indexOf('boxhijau') == -1){
            cst1[i].className = cst1[i].className.replace('boxmerah',"");
        }
        if (cst1[i].className.indexOf('boxmerah') == -1){
            cst1[i].className = cst1[i].className.replace('boxhijau',"");
        }
        }

        if (i==0){
            if(cst1[0].value.length==1){
            
                if(cst1[0].value==2){
                //box warna
                if (cst1[0].className.indexOf('boxhijau') == -1) {
                    if (cst1[i].className.indexOf('boxmerah') == -1) {
                        cst1[0].className += 'boxhijau';
                    } else {
                        cst1[0].className = cst1[0].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst1[0].className.indexOf('boxmerah') == -1){
                if (cst1[0].className.indexOf('boxhijau') == -1){
                    cst1[0].className += 'boxmerah';
                } else {
                    cst1[0].className = cst1[0].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==1){
            if(cst1[1].value.length==2){
            
                if(cst1[1].value==-4){
                //box warna
                if (cst1[1].className.indexOf('boxhijau') == -1) {
                    if (cst1[1].className.indexOf('boxmerah') == -1) {
                        cst1[1].className += 'boxhijau';
                    } else {
                        cst1[1].className = cst1[1].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst1[1].className.indexOf('boxmerah') == -1){
                if (cst1[1].className.indexOf('boxhijau') == -1){
                    cst1[1].className += 'boxmerah';
                } else {
                    cst1[1].className = cst1[1].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
        if (i==2){
            if(cst1[2].value.length==3){
            
                if(cst1[2].value=="5,0"){
                //box warna
                if (cst1[2].className.indexOf('boxhijau') == -1) {
                    if (cst1[2].className.indexOf('boxmerah') == -1) {
                        cst1[2].className += 'boxhijau';
                    } else {
                        cst1[2].className = cst1[2].className.replace('boxmerah','boxhijau');
                        }
                    }
                }else {
            if (cst1[2].className.indexOf('boxmerah') == -1){
                if (cst1[2].className.indexOf('boxhijau') == -1){
                    cst1[2].className += 'boxmerah';
                } else {
                    cst1[2].className = cst1[2].className.replace('boxhijau','boxmerah');
                    }
                }
            }
        }
        }
    cst1[i].addEventListener("keyup",function(){
        cst1[i].value = cst1[i].value.split(' ').join('');
    })

    if (i==3){
        if(cst1[3].value.length==1){
        
            if(cst1[3].value==2){
            //box warna
            if (cst1[3].className.indexOf('boxhijau') == -1) {
                if (cst1[3].className.indexOf('boxmerah') == -1) {
                    cst1[3].className += 'boxhijau';
                } else {
                    cst1[3].className = cst1[3].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[3].className.indexOf('boxmerah') == -1){
            if (cst1[3].className.indexOf('boxhijau') == -1){
                cst1[3].className += 'boxmerah';
            } else {
                cst1[3].className = cst1[3].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==4){
        if(cst1[4].value.length==2){
        
            if(cst1[4].value==-4){
            //box warna
            if (cst1[4].className.indexOf('boxhijau') == -1) {
                if (cst1[4].className.indexOf('boxmerah') == -1) {
                    cst1[4].className += 'boxhijau';
                } else {
                    cst1[4].className = cst1[4].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[4].className.indexOf('boxmerah') == -1){
            if (cst1[4].className.indexOf('boxhijau') == -1){
                cst1[4].className += 'boxmerah';
            } else {
                cst1[4].className = cst1[4].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==5){
        if(cst1[5].value.length==5){
        
            if(cst1[5].value=="-1,-9"){
            //box warna
            if (cst1[5].className.indexOf('boxhijau') == -1) {
                if (cst1[5].className.indexOf('boxmerah') == -1) {
                    cst1[5].className += 'boxhijau';
                } else {
                    cst1[5].className = cst1[5].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[5].className.indexOf('boxmerah') == -1){
            if (cst1[5].className.indexOf('boxhijau') == -1){
                cst1[5].className += 'boxmerah';
            } else {
                cst1[5].className = cst1[5].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==6){
        if(cst1[6].value.length==1){
        
            if(cst1[6].value=="a"){
            //box warna
            if (cst1[6].className.indexOf('boxhijau') == -1) {
                if (cst1[6].className.indexOf('boxmerah') == -1) {
                    cst1[6].className += 'boxhijau';
                } else {
                    cst1[6].className = cst1[6].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[6].className.indexOf('boxmerah') == -1){
            if (cst1[6].className.indexOf('boxhijau') == -1){
                cst1[6].className += 'boxmerah';
            } else {
                cst1[6].className = cst1[6].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==7){
        if(cst1[7].value.length==1){
        
            if(cst1[7].value=="b"){
            //box warna
            if (cst1[7].className.indexOf('boxhijau') == -1) {
                if (cst1[7].className.indexOf('boxmerah') == -1) {
                    cst1[7].className += 'boxhijau';
                } else {
                    cst1[7].className = cst1[7].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[7].className.indexOf('boxmerah') == -1){
            if (cst1[7].className.indexOf('boxhijau') == -1){
                cst1[7].className += 'boxmerah';
            } else {
                cst1[7].className = cst1[7].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==8){
        if(cst1[8].value.length==5){
        
            if(cst1[8].value=="-2,-3"){
            //box warna
            if (cst1[8].className.indexOf('boxhijau') == -1) {
                if (cst1[8].className.indexOf('boxmerah') == -1) {
                    cst1[8].className += 'boxhijau';
                } else {
                    cst1[8].className = cst1[8].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[8].className.indexOf('boxmerah') == -1){
            if (cst1[8].className.indexOf('boxhijau') == -1){
                cst1[8].className += 'boxmerah';
            } else {
                cst1[8].className = cst1[8].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==9){
        if(cst1[9].value.length==1){
        
            if(cst1[9].value=="a"){
            //box warna
            if (cst1[9].className.indexOf('boxhijau') == -1) {
                if (cst1[9].className.indexOf('boxmerah') == -1) {
                    cst1[9].className += 'boxhijau';
                } else {
                    cst1[9].className = cst1[9].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[9].className.indexOf('boxmerah') == -1){
            if (cst1[9].className.indexOf('boxhijau') == -1){
                cst1[9].className += 'boxmerah';
            } else {
                cst1[9].className = cst1[9].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==10){
        if(cst1[10].value.length==1){
        
            if(cst1[10].value=="a"){
            //box warna
            if (cst1[10].className.indexOf('boxhijau') == -1) {
                if (cst1[10].className.indexOf('boxmerah') == -1) {
                    cst1[10].className += 'boxhijau';
                } else {
                    cst1[10].className = cst1[10].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[10].className.indexOf('boxmerah') == -1){
            if (cst1[10].className.indexOf('boxhijau') == -1){
                cst1[10].className += 'boxmerah';
            } else {
                cst1[10].className = cst1[10].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==11){
        if(cst1[11].value.length==1){
        
            if(cst1[11].value==2){
            //box warna
            if (cst1[11].className.indexOf('boxhijau') == -1) {
                if (cst1[11].className.indexOf('boxmerah') == -1) {
                    cst1[11].className += 'boxhijau';
                } else {
                    cst1[11].className = cst1[11].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[11].className.indexOf('boxmerah') == -1){
            if (cst1[11].className.indexOf('boxhijau') == -1){
                cst1[11].className += 'boxmerah';
            } else {
                cst1[11].className = cst1[11].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==12){
        if(cst1[12].value.length==1){
        
            if(cst1[12].value=="b"){
            //box warna
            if (cst1[12].className.indexOf('boxhijau') == -1) {
                if (cst1[12].className.indexOf('boxmerah') == -1) {
                    cst1[12].className += 'boxhijau';
                } else {
                    cst1[12].className = cst1[12].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[12].className.indexOf('boxmerah') == -1){
            if (cst1[12].className.indexOf('boxhijau') == -1){
                cst1[12].className += 'boxmerah';
            } else {
                cst1[12].className = cst1[12].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==13){
        if(cst1[13].value.length==1){
        
            if(cst1[13].value=="b"){
            //box warna
            if (cst1[13].className.indexOf('boxhijau') == -1) {
                if (cst1[13].className.indexOf('boxmerah') == -1) {
                    cst1[13].className += 'boxhijau';
                } else {
                    cst1[13].className = cst1[13].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[13].className.indexOf('boxmerah') == -1){
            if (cst1[13].className.indexOf('boxhijau') == -1){
                cst1[13].className += 'boxmerah';
            } else {
                cst1[13].className = cst1[13].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==14){
        if(cst1[14].value.length==2){
        
            if(cst1[14].value==-1){
            //box warna
            if (cst1[14].className.indexOf('boxhijau') == -1) {
                if (cst1[14].className.indexOf('boxmerah') == -1) {
                    cst1[14].className += 'boxhijau';
                } else {
                    cst1[14].className = cst1[14].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[14].className.indexOf('boxmerah') == -1){
            if (cst1[14].className.indexOf('boxhijau') == -1){
                cst1[14].className += 'boxmerah';
            } else {
                cst1[14].className = cst1[14].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==15){
        if(cst1[15].value.length==1){
        
            if(cst1[15].value==1){
            //box warna
            if (cst1[15].className.indexOf('boxhijau') == -1) {
                if (cst1[15].className.indexOf('boxmerah') == -1) {
                    cst1[15].className += 'boxhijau';
                } else {
                    cst1[15].className = cst1[15].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[15].className.indexOf('boxmerah') == -1){
            if (cst1[15].className.indexOf('boxhijau') == -1){
                cst1[15].className += 'boxmerah';
            } else {
                cst1[15].className = cst1[15].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==16){
        if(cst1[16].value.length==1){
        
            if(cst1[16].value==2){
            //box warna
            if (cst1[16].className.indexOf('boxhijau') == -1) {
                if (cst1[16].className.indexOf('boxmerah') == -1) {
                    cst1[16].className += 'boxhijau';
                } else {
                    cst1[16].className = cst1[16].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[16].className.indexOf('boxmerah') == -1){
            if (cst1[16].className.indexOf('boxhijau') == -1){
                cst1[16].className += 'boxmerah';
            } else {
                cst1[16].className = cst1[16].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==17){
        if(cst1[17].value.length==1){
        
            if(cst1[17].value==2){
            //box warna
            if (cst1[17].className.indexOf('boxhijau') == -1) {
                if (cst1[17].className.indexOf('boxmerah') == -1) {
                    cst1[17].className += 'boxhijau';
                } else {
                    cst1[17].className = cst1[17].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[17].className.indexOf('boxmerah') == -1){
            if (cst1[17].className.indexOf('boxhijau') == -1){
                cst1[17].className += 'boxmerah';
            } else {
                cst1[17].className = cst1[17].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==18){
        if(cst1[18].value.length==4){
        
            if(cst1[18].value=="x'-2"){
            //box warna
            if (cst1[18].className.indexOf('boxhijau') == -1) {
                if (cst1[18].className.indexOf('boxmerah') == -1) {
                    cst1[18].className += 'boxhijau';
                } else {
                    cst1[18].className = cst1[18].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[18].className.indexOf('boxmerah') == -1){
            if (cst1[18].className.indexOf('boxhijau') == -1){
                cst1[18].className += 'boxmerah';
            } else {
                cst1[18].className = cst1[18].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==19){
        if(cst1[19].value.length==1){
        
            if(cst1[19].value==1){
            //box warna
            if (cst1[19].className.indexOf('boxhijau') == -1) {
                if (cst1[19].className.indexOf('boxmerah') == -1) {
                    cst1[19].className += 'boxhijau';
                } else {
                    cst1[19].className = cst1[19].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[19].className.indexOf('boxmerah') == -1){
            if (cst1[19].className.indexOf('boxhijau') == -1){
                cst1[19].className += 'boxmerah';
            } else {
                cst1[19].className = cst1[19].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==20){
        if(cst1[20].value.length==1){
        
            if(cst1[20].value==1){
            //box warna
            if (cst1[20].className.indexOf('boxhijau') == -1) {
                if (cst1[20].className.indexOf('boxmerah') == -1) {
                    cst1[20].className += 'boxhijau';
                } else {
                    cst1[20].className = cst1[20].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[20].className.indexOf('boxmerah') == -1){
            if (cst1[20].className.indexOf('boxhijau') == -1){
                cst1[20].className += 'boxmerah';
            } else {
                cst1[20].className = cst1[20].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==21){
        if(cst1[21].value.length==4){
        
            if(cst1[21].value=="y'-1"){
            //box warna
            if (cst1[21].className.indexOf('boxhijau') == -1) {
                if (cst1[21].className.indexOf('boxmerah') == -1) {
                    cst1[21].className += 'boxhijau';
                } else {
                    cst1[21].className = cst1[21].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[21].className.indexOf('boxmerah') == -1){
            if (cst1[21].className.indexOf('boxhijau') == -1){
                cst1[21].className += 'boxmerah';
            } else {
                cst1[21].className = cst1[21].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==22){
        if(cst1[22].value.length==4){
        
            if(cst1[22].value=="y'-1"){
            //box warna
            if (cst1[22].className.indexOf('boxhijau') == -1) {
                if (cst1[22].className.indexOf('boxmerah') == -1) {
                    cst1[22].className += 'boxhijau';
                } else {
                    cst1[22].className = cst1[22].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[22].className.indexOf('boxmerah') == -1){
            if (cst1[22].className.indexOf('boxhijau') == -1){
                cst1[22].className += 'boxmerah';
            } else {
                cst1[22].className = cst1[22].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==23){
        if(cst1[23].value.length==4){
        
            if(cst1[23].value=="x'-2"){
            //box warna
            if (cst1[23].className.indexOf('boxhijau') == -1) {
                if (cst1[23].className.indexOf('boxmerah') == -1) {
                    cst1[23].className += 'boxhijau';
                } else {
                    cst1[23].className = cst1[23].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[23].className.indexOf('boxmerah') == -1){
            if (cst1[23].className.indexOf('boxhijau') == -1){
                cst1[23].className += 'boxmerah';
            } else {
                cst1[23].className = cst1[23].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==24){
        if(cst1[24].value.length==4){
        
            if(cst1[24].value=="y'-1"){
            //box warna
            if (cst1[24].className.indexOf('boxhijau') == -1) {
                if (cst1[24].className.indexOf('boxmerah') == -1) {
                    cst1[24].className += 'boxhijau';
                } else {
                    cst1[24].className = cst1[24].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[24].className.indexOf('boxmerah') == -1){
            if (cst1[24].className.indexOf('boxhijau') == -1){
                cst1[24].className += 'boxmerah';
            } else {
                cst1[24].className = cst1[24].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==25){
        if(cst1[25].value.length==3){
        
            if(cst1[25].value=="3x'"){
            //box warna
            if (cst1[25].className.indexOf('boxhijau') == -1) {
                if (cst1[25].className.indexOf('boxmerah') == -1) {
                    cst1[25].className += 'boxhijau';
                } else {
                    cst1[25].className = cst1[25].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[25].className.indexOf('boxmerah') == -1){
            if (cst1[25].className.indexOf('boxhijau') == -1){
                cst1[25].className += 'boxmerah';
            } else {
                cst1[25].className = cst1[25].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==26){
        if(cst1[26].value.length==1){
        
            if(cst1[26].value==6){
            //box warna
            if (cst1[26].className.indexOf('boxhijau') == -1) {
                if (cst1[26].className.indexOf('boxmerah') == -1) {
                    cst1[26].className += 'boxhijau';
                } else {
                    cst1[26].className = cst1[26].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[26].className.indexOf('boxmerah') == -1){
            if (cst1[26].className.indexOf('boxhijau') == -1){
                cst1[26].className += 'boxmerah';
            } else {
                cst1[26].className = cst1[26].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==27){
        if(cst1[27].value.length==2){
        
            if(cst1[27].value=="y'"){
            //box warna
            if (cst1[27].className.indexOf('boxhijau') == -1) {
                if (cst1[27].className.indexOf('boxmerah') == -1) {
                    cst1[27].className += 'boxhijau';
                } else {
                    cst1[27].className = cst1[27].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[27].className.indexOf('boxmerah') == -1){
            if (cst1[27].className.indexOf('boxhijau') == -1){
                cst1[27].className += 'boxmerah';
            } else {
                cst1[27].className = cst1[27].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==28){
        if(cst1[28].value.length==3){
        
            if(cst1[28].value=="3x'"){
            //box warna
            if (cst1[28].className.indexOf('boxhijau') == -1) {
                if (cst1[28].className.indexOf('boxmerah') == -1) {
                    cst1[28].className += 'boxhijau';
                } else {
                    cst1[28].className = cst1[28].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[28].className.indexOf('boxmerah') == -1){
            if (cst1[28].className.indexOf('boxhijau') == -1){
                cst1[28].className += 'boxmerah';
            } else {
                cst1[28].className = cst1[28].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==29){
        if(cst1[29].value.length==1){
        
            if(cst1[29].value==6){
            //box warna
            if (cst1[29].className.indexOf('boxhijau') == -1) {
                if (cst1[29].className.indexOf('boxmerah') == -1) {
                    cst1[29].className += 'boxhijau';
                } else {
                    cst1[29].className = cst1[29].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[29].className.indexOf('boxmerah') == -1){
            if (cst1[29].className.indexOf('boxhijau') == -1){
                cst1[29].className += 'boxmerah';
            } else {
                cst1[29].className = cst1[29].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==30){
        if(cst1[30].value.length==1){
        
            if(cst1[30].value==1){
            //box warna
            if (cst1[30].className.indexOf('boxhijau') == -1) {
                if (cst1[30].className.indexOf('boxmerah') == -1) {
                    cst1[30].className += 'boxhijau';
                } else {
                    cst1[30].className = cst1[30].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[30].className.indexOf('boxmerah') == -1){
            if (cst1[30].className.indexOf('boxhijau') == -1){
                cst1[30].className += 'boxmerah';
            } else {
                cst1[30].className = cst1[30].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==31){
        if(cst1[31].value.length==2){
        
            if(cst1[31].value=="y'"){
            //box warna
            if (cst1[31].className.indexOf('boxhijau') == -1) {
                if (cst1[31].className.indexOf('boxmerah') == -1) {
                    cst1[31].className += 'boxhijau';
                } else {
                    cst1[31].className = cst1[31].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[31].className.indexOf('boxmerah') == -1){
            if (cst1[31].className.indexOf('boxhijau') == -1){
                cst1[31].className += 'boxmerah';
            } else {
                cst1[31].className = cst1[31].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==32){
        if(cst1[32].value.length==3){
        
            if(cst1[32].value=="3x'"){
            //box warna
            if (cst1[32].className.indexOf('boxhijau') == -1) {
                if (cst1[32].className.indexOf('boxmerah') == -1) {
                    cst1[32].className += 'boxhijau';
                } else {
                    cst1[32].className = cst1[32].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[32].className.indexOf('boxmerah') == -1){
            if (cst1[32].className.indexOf('boxhijau') == -1){
                cst1[32].className += 'boxmerah';
            } else {
                cst1[32].className = cst1[32].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    if (i==33){
        if(cst1[33].value.length==2){
        
            if(cst1[33].value=="3x"){
            //box warna
            if (cst1[33].className.indexOf('boxhijau') == -1) {
                if (cst1[33].className.indexOf('boxmerah') == -1) {
                    cst1[33].className += 'boxhijau';
                } else {
                    cst1[33].className = cst1[33].className.replace('boxmerah','boxhijau');
                    }
                }
            }else {
        if (cst1[33].className.indexOf('boxmerah') == -1){
            if (cst1[33].className.indexOf('boxhijau') == -1){
                cst1[33].className += 'boxmerah';
            } else {
                cst1[33].className = cst1[33].className.replace('boxhijau','boxmerah');
                }
            }
        }
    }
    }
    });

}