function f(){
	var a=document.querySelector("#name").value;
	var b=document.querySelector("#surname").value;
	var c=document.querySelector("#faculty").value;
	var d = document.createElement("tr");
	var e = document.createElement("td");
	var f = document.createElement("td");
	var g = document.createElement("td");

	e.append(a);
	f.append(b);
	g.append(c);

	d.append(e);
	d.append(f);
	d.append(g);

	var table = document.querySelector('#students');

	table.append(d);
}

document.querySelector("#addStudent").addEventListener('click',f);

