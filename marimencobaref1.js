var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let input1 = document.getElementById ("c1");
let btn1 = document.getElementById ("jc1");
let aksi1 = document.getElementById ("jbc1");

btn1.addEventListener("click",function(){
    if(input1.value == "3,-2"){
        aksi1.innerHTML = "Jawaban benar"
     }
    else{
        aksi1.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
     }
    MathJax.typeset();
  })
  input1.addEventListener("keyup",function(){
  input1.value = input1.value.split(' ').join('');
  })

let input2 = document.getElementById ("c2");
let btn2 = document.getElementById ("jc2");
let aksi2 = document.getElementById ("jbc2");
  
btn2.addEventListener("click",function(){
    if(input2.value == "5,-4"){
        aksi2.innerHTML = "Jawaban benar"
     }
    else{
        aksi2.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
     }
      MathJax.typeset();
    })
    input2.addEventListener("keyup",function(){
    input2.value = input2.value.split(' ').join('');
    })

let input3 = document.getElementById ("c3");
let btn3 = document.getElementById ("jc3");
let aksi3 = document.getElementById ("jbc3");
    
  btn3.addEventListener("click",function(){
      if(input3.value == "7,-2"){
          aksi3.innerHTML = "Jawaban benar"
       }
      else{
          aksi3.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
       }
        MathJax.typeset();
       })
      input3.addEventListener("keyup",function(){
      input3.value = input3.value.split(' ').join('');
      })

let input4 = document.getElementById ("c4");
let btn4 = document.getElementById ("jc4");
let aksi4 = document.getElementById ("jbc4");
      
    btn4.addEventListener("click",function(){
        if(input4.value == "-3,2"){
            aksi4.innerHTML = "Jawaban benar"
          }
        else{
            aksi4.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
          MathJax.typeset();
          })
        input4.addEventListener("keyup",function(){
        input4.value = input4.value.split(' ').join('');
        })

let input5 = document.getElementById ("c5");
let btn5 = document.getElementById ("jc5");
let aksi5 = document.getElementById ("jbc5");
        
    btn5.addEventListener("click",function(){
       if(input5.value == "-5,4"){
            aksi5.innerHTML = "Jawaban benar"
            }
       else{
            aksi5.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
            }
            MathJax.typeset();
          })
          input5.addEventListener("keyup",function(){
          input5.value = input5.value.split(' ').join('');
          })
        
let input6 = document.getElementById ("c6");
let btn6 = document.getElementById ("jc6");
let aksi6 = document.getElementById ("jbc6");
          
    btn6.addEventListener("click",function(){
        if(input6.value == "-7,2"){
              aksi6.innerHTML = "Jawaban benar"
              }
        else{
              aksi6.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
              }
              MathJax.typeset();
            })
           input6.addEventListener("keyup",function(){
           input6.value = input6.value.split(' ').join('');
            })
        
let input7 = document.getElementById ("c7");
let btn7 = document.getElementById ("jc7");
let aksi7 = document.getElementById ("jbc7");
            
    btn7.addEventListener("click",function(){
        if(input7.value == "-3,-2"){
             aksi7.innerHTML = "Jawaban benar"
              }
        else{
             aksi7.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
                }
                MathJax.typeset();
              })
         input7.addEventListener("keyup",function(){
         input7.value = input7.value.split(' ').join('');
              })

let input8 = document.getElementById ("c8");
let btn8 = document.getElementById ("jc8");
let aksi8 = document.getElementById ("jbc8");
              
    btn8.addEventListener("click",function(){
        if(input8.value == "-5,-4"){
              aksi8.innerHTML = "Jawaban benar"
           }
        else{
              aksi8.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
           }
             MathJax.typeset();
            })
            input8.addEventListener("keyup",function(){
            input8.value = input8.value.split(' ').join('');
              })
              
let input9 = document.getElementById ("c9");
let btn9 = document.getElementById ("jc9");
let aksi9 = document.getElementById ("jbc9");
                
    btn9.addEventListener("click",function(){
        if(input9.value == "-7,-2"){
              aksi9.innerHTML = "Jawaban benar"
             }
        else{
              aksi9.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
            }
            MathJax.typeset();
            })
            input9.addEventListener("keyup",function(){
            input9.value = input9.value.split(' ').join('');
                  })