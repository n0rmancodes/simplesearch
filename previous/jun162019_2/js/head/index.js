getBackground()
function getBackground() {
	var backs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg"];
	var curBack = backs[Math.floor(Math.random() * backs.length)];
	document.write("<link rel='stylesheet' href='css/darkb.css' type='text/css'>");
	document.write('<style> body {background-image: url("'+ curBack + '")} </style>');
	if (curBack === "img/1.jpg") {var credit = "StockSnap from Pixabay"};
	if (curBack === "img/2.jpg") {var credit = "Micha Sager from Pixabay"};
	if (curBack === "img/3.jpg") {var credit = "David Mark from Pixabay"};
	if (curBack === "img/4.jpg") {var credit = "Bessi from Pixabay"};
	if (curBack === "img/5.jpg") {var credit = "Manfred Richter from Pixabay"};
	if (curBack === "img/6.jpg") {var credit = "GLady from Pixabay"};
	if (curBack === "img/7.jpg") {var credit = "GLady from Pixabay"};
	if (curBack === "img/8.jpg") {var credit = "O18 from Pixabay"};
	if (curBack === "img/9.jpg") {var credit = "jplenioS from Pixabay"};
	if (curBack === "img/10.jpg") {var credit = "pixel2013 from Pixabay"};
	if (curBack === "img/11.jpg") {var credit = "Devanath from Pixabay"};
	if (localStorage.getItem('ss_s3') === "y") {alert(credit)}
}