let input1 = document.getElementById ("c1");
let btn1 = document.getElementById ("jc1");
let aksi1 = document.getElementById ("jbc1");
let cb1 = 0;

btn1.addEventListener("click",function(){
cb1++;
    if(input1.value == "5,6"){
        aksi1.innerHTML = "Jawaban benar \\[{A}'(2+3, 4+2)={A}'(5,6)\\]"
    }
    else{
      if (cb1 == 2){
        aksi1.innerHTML = "\\[A(x,y)\\xrightarrow{T[a,b]}{A}'((x+a),(y+b))={A}'({x}',{y}')\\]";
        aksi1.innerHTML +="<p>\\[A(2,4)\\xrightarrow{T[3,2]}{A}'((...+...),(...+...))={A}'(...,...)\\]</p>"
      } 
      else {
        aksi1.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
      }
    }
    MathJax.typeset();
  })
  input1.addEventListener("keyup",function(){
    input1.value = input1.value.split(' ').join('');
  })

let input2 = document.getElementById ("c2");
let btn2 = document.getElementById ("jc2");
let aksi2 = document.getElementById ("jbc2");
let cb2 = 0;

btn2.addEventListener("click",function(){
cb2++;
  if(input2.value == "0,7"){
      aksi2.innerHTML = "Jawaban benar \\[{B}'(-3+3, 5+2)={B}'(0,7)\\]"
      }
    else{
      if (cb2 == 2){
        aksi2.innerHTML = "\\[B(x,y)\\xrightarrow{T[a,b]}{B}'((x+a),(y+b))={B}'({x}',{y}')\\]";
        aksi2.innerHTML +="<p>\\[B(-3,5)\\xrightarrow{T[3,2]}{B}'((...+...),(...+...))={B}'(...,...)\\]</p>"
        } 
        else {
          aksi2.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
         }
        }
      MathJax.typeset();
    })
  input2.addEventListener("keyup",function(){
  input2.value = input2.value.split(' ').join('');
  })

let input3 = document.getElementById ("c3");
let btn3 = document.getElementById ("jc3");
let aksi3 = document.getElementById ("jbc3");
let cb3 = 0;

btn3.addEventListener("click",function(){
cb3++;
  if(input3.value == "-3,-2"){
      aksi3.innerHTML = "Jawaban benar \\[{C}'(-6+3, -4+2)={C}'(-3,-2)\\]"
      }
    else{
      if (cb3 == 2){
        aksi3.innerHTML = "\\[C(x,y)\\xrightarrow{T[a,b]}{C}'((x+a),(y+b))={C}'({x}',{y}')\\]";
        aksi3.innerHTML +="<p>\\[C(-6,-4)\\xrightarrow{T[3,2]}{C}'((...+...),(...+...))={C}'(...,...)\\]</p>"
        } 
        else {
          aksi3.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
        }
      }
        MathJax.typeset();
    })
    input3.addEventListener("keyup",function(){
    input3.value = input3.value.split(' ').join('');
    })

