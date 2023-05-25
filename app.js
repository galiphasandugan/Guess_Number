const buton = document.querySelector(".btn");
const input = document.querySelector(".input");
const sonuc = document.querySelector(".sonuc");
const par = document.querySelector("p");
const audio =document.querySelector("audio")
const random = Math.floor(Math.random() *100) + 1
console.log(random);

let counter =7
buton.addEventListener("click", () => {
console.log(counter);
audio.play()

 if(counter>0 && input.value>0 && input.value <100){
  console.log(input.value);
  console.log(random);

  if (input.value < random) {
    sonuc.value = "sayıyı artır";
    input.value = ""
  }
  if (input.value > random) {
    sonuc.value = "sayıyı azalt";
    input.value = ""
  }
  if (input.value == random) {
    sonuc.value = "KAZANDIN";
  }
  counter--
 }else{
    par.innerHTML= `HAKKINIZ KALMADI`
    sonuc.value = "game over ";
    return input.value = input.value;
     
 }
  console.log(counter);
  par.innerHTML= `${counter} HAKKINIZ KALDI`
  input.focus();
});


input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    buton.click();
  }
});

window.addEventListener("load", (e) => {
  input.focus();
});
