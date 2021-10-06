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
let tombolcek1=document.getElementById("jp1")
let jwbnbenar1=document.getElementById("tanyat1")
let keterangan=document.getElementById("ket")
tombolcek1.addEventListener("click",function(){
    if (jwbnbenar1.checked == true){
       keterangan.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek2=document.getElementById("jp2")
let jwbnbenar2=document.getElementById("tanyat6")
let keterangan2=document.getElementById("ket2")
tombolcek2.addEventListener("click",function(){
    if (jwbnbenar2.checked == true){
       keterangan2.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan2.innerHTML=`<img src="salah.png" >`
    }
})
let tombolcek3=document.getElementById("jp3")
let jwbnbenar3=document.getElementById("tanyat8")
let keterangan3=document.getElementById("ket3")
tombolcek3.addEventListener("click",function(){
    if (jwbnbenar3.checked == true){
       keterangan3.innerHTML=`<img src="cek.png" >`
    }
    else {
        keterangan3.innerHTML=`<img src="salah.png" >`
    }
})

let input4 = document.getElementById ("c4");
let input4a = document.getElementById ("c4a");
let btn4 = document.getElementById ("jp4");
let aksi4 = document.getElementById ("ket4");

btn4.addEventListener("click",function(){
    if(input4.value == "-3" && input4a.value=="-5"){
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
let input5a = document.getElementById ("c5a");
let btn5 = document.getElementById("jp5");
let aksi5 = document.getElementById("ket5");

btn5.addEventListener("click",function(){
    if(input5.value == "9" && input4a.value=="-2"){
        aksi5.innerHTML = `<img src="cek.png" >`
    }
    else{
        aksi5.innerHTML = `<img src="salah.png" >`
    }
    MathJax.typeset();
  })
  input5.addEventListener("keyup",function(){
    input5.value = input5.value.split(' ').join('');
  })
  input5a.addEventListener("keyup",function(){
    input5a.value = input5a.value.split(' ').join('');
  })

  let tombolcek6=document.getElementById("jp6")
  let jwbnbenar6=document.getElementById("tanyat11")
  let keterangan6=document.getElementById("ket6")
  tombolcek6.addEventListener("click",function(){
      if (jwbnbenar6.checked == true){
         keterangan6.innerHTML=`<img src="cek.png" >`
      }
      else {
          keterangan6.innerHTML=`<img src="salah.png" >`
      }
  })