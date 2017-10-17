function fin(event){
	var x = event.currentTarget.parentNode.childNodes[1];
	var text = x.innerHTML;
	x.innerHTML = "<s>"+text+"</s>";
}


for (var i= 0; i< document.querySelectorAll("#tasks button").length; i++) {
  document.querySelectorAll("#tasks button")[i].addEventListener("click",fin);  
}