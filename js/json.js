function loadJsonFile (path, callback) {
	var xmlhttp = new XMLHttpRequest();
	var url = path;

	xmlhttp.onreadystatechange = function() {
	    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
	        var myArr = JSON.parse(xmlhttp.responseText);
	        
	        callback(myArr);
	    }
	}
	xmlhttp.open("GET", url, true);
	xmlhttp.send();
}
/*
loadJsonFile("a.json",function (arr) {
	var out = "";
	var i;
	for(i = 0; i < arr.length; i++) {
	    out += '<a href="' + arr[i].url + '">' +
	    arr[i].display + '</a><br>';
	}
	document.getElementById("id01").innerHTML = out;
});
*/