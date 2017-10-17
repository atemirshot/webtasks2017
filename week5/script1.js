function det() {
  let a1= parseInt(document.querySelector("#s11").value);
  let b1 =parseInt(document.querySelector("#s12").value);
  let c1 =parseInt(document.querySelector("#s13").value);
  let a2= parseInt(document.querySelector("#s21").value);
  let b2 =parseInt(document.querySelector("#s22").value);
  let c2 =parseInt(document.querySelector("#s23").value);
  let a3= parseInt(document.querySelector("#s31").value);
  let b3 =parseInt(document.querySelector("#s32").value);
  let c3 =parseInt(document.querySelector("#s33").value);
 
  const result = document.querySelector("#result");
  let deter = (a1*b2*c3)+(a3*b1*c2)+(a2*b3*c1)-(a3*b2*c1)-(a1*b3*c2)-(a2*b1*c3);
  result.innerHTML=deter;
}

const button = document.querySelector('#determinant');
button.addEventListener('click', function(){
	det();
});