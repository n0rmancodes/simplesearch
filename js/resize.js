getSize()
adaptShit()

setInterval(function() {
	getSize()
	adaptShit()
}, 1000);

window.onresize = function(event) {
    var w = window.innerWidth;
	var h = window.innerHeight;
	if (w < 1920) {document.getElementById("title").style = "font-size:72px;"; document.getElementById("welcome").style = "font-size:24px;"; document.getElementById("header").style = "width:31%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
    if (w < 1532) {document.getElementById("title").style = "font-size:70px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:40%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 1138) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:45%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 1013) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:50%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 910) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:55%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 881) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:60%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 759) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:65%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 700) {document.getElementById("title").style = "font-size:55px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:70%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 650) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:85%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 536) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:90%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 401) {document.getElementById("title").style = "font-size:52px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 320) {document.getElementById("title").style = "font-size:48px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w > 1920) {document.getElementById("over1920").innerHTML = ("body { background-size: 100%, 100% }")} else {document.getElementById("over1920").innerHTML = ""}
};

function getSize() {
	var w = window.innerWidth;
	var h = window.innerHeight;
	if (w < 1920) {document.getElementById("title").style = "font-size:72px;"; document.getElementById("welcome").style = "font-size:24px;"; document.getElementById("header").style = "width:31%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
    if (w < 1532) {document.getElementById("title").style = "font-size:70px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:40%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 1138) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:45%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 1013) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:50%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 910) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:55%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 881) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:60%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 759) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:65%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 700) {document.getElementById("title").style = "font-size:55px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:70%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 650) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:85%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "";}
	if (w < 536) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 372) {document.getElementById("title").style = "font-size:52px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 320) {document.getElementById("title").style = "font-size:48px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
}

function adaptShit() {
	var w = window.innerWidth;
	if (w > 1920) {document.getElementById("over1920").innerHTML = ("body { background-size: 100%, 100% }")} else {document.getElementById("over1920").innerHTML = ""}
}
