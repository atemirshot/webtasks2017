
let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Aktau"],"Russia":["Moscow","Saint-Petersburg","Kazan"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

let country = document.querySelector("#countries");

let city = document.querySelector("#cities");

for (var i = 0; i < countries.length; i++) {
    var s = document.createElement('option');
    s.append(countries[i]);
    country.append(s);
}
var KZ=0;
var RU=0;
var EN=0;
var FR=0;
var add=0;
function cities(){
	if(KZ!==0|| RU!==0|| EN!==0||FR!==0){
		for (var index = city.length-1; index > 0; index--) {
            city[index]=null;
        }
        KZ=0; RU=0; EN=0; FR=0;
        

	}
	else if(country.value =="Kazakhstan"&& KZ==0){
		for (var i = 0; i <cities_by_country.Kazakhstan.length ; i++) {
			var c = document.createElement('option');
			c.append(cities_by_country.Kazakhstan[i]);
			city.append(c);
			KZ=1;
		}

	}
	else if(country.value ==="Russia"&& RU==0){
		for (var i = 0; i <cities_by_country.Russia.length ; i++) {
			var c = document.createElement('option');
			c.append(cities_by_country.Russia[i]);
			city.append(c);
			RU=1;
		}
	}
	else if(country.value ==="England"&& EN==0){
		for (var i = 0; i <cities_by_country.England.length ; i++) {
			var c = document.createElement('option');
			c.append(cities_by_country.England[i]);
			city.append(c);
			EN=1;
		}
	}
	else if(country.value ==="France"&& FR==0){
		for (var i = 0; i <cities_by_country.France.length ; i++) {
			var c = document.createElement('option');
			c.append(cities_by_country.France[i]);
			city.append(c);
			FR=1;
		}
	}
	
}
document.querySelector('select').addEventListener('click',cities);