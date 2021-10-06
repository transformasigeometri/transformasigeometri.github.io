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
let input1a = document.getElementById ("c1a");
let btn1 = document.getElementById ("jp1");
let aksi1 = document.getElementById ("ket1");

btn1.addEventListener("click",function(){
    if(input1.value == "2" && input1a.value=="1"){
        aksi1.innerHTML = `<img src="cek.png" >`
    }
    else{
        aksi1.innerHTML  = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  input1.addEventListener("keyup",function(){
    input1.value = input1.value.split(' ').join('');
  })
  input1a.addEventListener("keyup",function(){
    input1a.value = input1a.value.split(' ').join('');
  })

  let input2 = document.getElementById ("c2");
  let input2a = document.getElementById ("c2a");
  let btn2 = document.getElementById ("jp2");
  let aksi2 = document.getElementById ("ket2");
  
  btn2.addEventListener("click",function(){
      if(input2.value == "5" && input2a.value=="-7"){
          aksi2.innerHTML = `<img src="cek.png" >`
      }
      else{
          aksi2.innerHTML  = `<img src="salah.png" >`
      }
      MathJax.typeset();
    })
    input2.addEventListener("keyup",function(){
      input2.value = input2.value.split(' ').join('');
    })
    input2a.addEventListener("keyup",function(){
      input2a.value = input2a.value.split(' ').join('');
    })

    let input3 = document.getElementById ("c3");
    let input3a = document.getElementById ("c3a");
    let btn3 = document.getElementById ("jp3");
    let aksi3 = document.getElementById ("ket3");
    
    btn3.addEventListener("click",function(){
        if(input3.value == "-5" && input3a.value=="7"){
            aksi3.innerHTML = `<img src="cek.png" >`
        }
        else{
            aksi3.innerHTML  = `<img src="salah.png" >`
        }
        MathJax.typeset();
      })
      input3.addEventListener("keyup",function(){
        input3.value = input3.value.split(' ').join('');
      })
      input3a.addEventListener("keyup",function(){
        input3a.value = input3a.value.split(' ').join('');
      })

      let input4 = document.getElementById ("c4");
      let input4a = document.getElementById ("c4a");
      let btn4 = document.getElementById ("jp4");
      let aksi4 = document.getElementById ("ket4");
      
      btn4.addEventListener("click",function(){
          if(input4.value == "3" && input4a.value=="5"){
              aksi4.innerHTML = `<img src="cek.png" >`
          }
          else{
              aksi4.innerHTML  = `<img src="salah.png" >`
          }
          MathJax.typeset();
        })
        input4.addEventListener("keyup",function(){
          input4.value = input4.value.split(' ').join('');
        })
        input4a.addEventListener("keyup",function(){
          input4a.value = input4a.value.split(' ').join('');
        })

        let input5 = document.getElementById ("c5");
        let btn5 = document.getElementById ("jp5");
        let aksi5 = document.getElementById ("ket5");
        
        btn5.addEventListener("click",function(){
            if(input5.value == "3"){
                aksi5.innerHTML = `<img src="cek.png" >`
            }
            else{
                aksi5.innerHTML  = `<img src="salah.png" >`
            }
            MathJax.typeset();
          })
          input5.addEventListener("keyup",function(){
            input5.value = input5.value.split(' ').join('');
          })
          
        