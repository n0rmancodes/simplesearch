window.onload(getSize())
function getSize() {
	var w = window.innerWidth;
	var h = window.innerHeight;
    if (w < 1532) {document.getElementById("title").style = "font-size:70px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:40%; background-color:black; height: 15%;"}
	if (w < 1135) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:45%; background-color:black; height: 15%;"}
	if (w < 1013) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:50%; background-color:black; height: 15%;"}
	if (w < 909) {document.getElementById("title").style = "font-size:65px"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:55%; background-color:black; height: 15%;"}
	if (w < 881) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:60%; background-color:black; height: 15%;"}
	if (w < 743) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:65%; background-color:black; height: 15%;"}
	if (w < 677) {document.getElementById("title").style = "font-size:55px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:70%; background-color:black; height: 15%;"}
	if (w < 645) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:85%; background-color:black; height: 15%;"}
	if (w < 530) {document.getElementById("title").style = "font-size:60px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 368) {document.getElementById("title").style = "font-size:52px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
	if (w < 320) {document.getElementById("title").style = "font-size:48px;"; document.getElementById("welcome").style = "font-size:20px;"; document.getElementById("header").style = "width:99%; background-color:black; height: 15%;"; document.getElementById("ifl-btn").style.display = "none";}
}