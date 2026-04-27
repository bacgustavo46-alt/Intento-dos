let uno=document.getElementById("uno")
let dos=document.getElementById("dos")
let suma=document.getElementById("suma")
let contador=document.getElementById("contador")

suma.addEventListener("click",hola)
function hola () {
 let r1=Number(uno.value)
  let r2=Number(dos.value)
  let res=r1+r2
  contador.textContent=res




}