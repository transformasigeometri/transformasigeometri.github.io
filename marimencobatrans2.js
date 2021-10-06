let input1 = document.getElementById ("c1");
let btn1 = document.getElementById ("jc1");
let aksi1 = document.getElementById ("jbc1");

btn1.addEventListener("click",function(){
    if(input1.value == "-2,4"){
        aksi1.innerHTML = "Jawaban benar \\[{A}'(4+(-6), 2+2)={A}'(-2,4)\\]"
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
      if(input2.value == "-2,6"){
          aksi2.innerHTML = "Jawaban benar \\[{B}'(9+(-6), 2+2)={B}'(-2,6)\\]"
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
        if(input3.value == "3,4"){
            aksi3.innerHTML = "Jawaban benar \\[{C}'(7+(-6), 4+2)={C}'(3,4)\\]"
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
          if(input4.value == "1,6"){
              aksi4.innerHTML = "Jawaban benar \\[{D}'(4+(-6), 4+2)={D}'(1,6)\\]"
          }
          else{
              aksi4.innerHTML = "Jawaban kurang tepat, jangan lupa tanda koma(,) untuk memisahkan titiknya"
          }
          MathJax.typeset();
        })
        input4.addEventListener("keyup",function(){
          input4.value = input4.value.split(' ').join('');
        })
  