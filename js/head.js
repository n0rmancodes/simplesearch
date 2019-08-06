getBackground()

function getBackground() {
	var backs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg"];
	var curBack = backs[Math.floor(Math.random() * backs.length)];
	document.write("<link rel='stylesheet' href='css/darkb.css' type='text/css'>");
	document.write('<style> body {background-image: url("'+ curBack + '")} </style>');
	if (curBack === "img/1.jpg") {var credit = "Background Image by: StockSnap from Pixabay"};
	if (curBack === "img/2.jpg") {var credit = "Background Image by: Micha Sager from Pixabay"};
	if (curBack === "img/3.jpg") {var credit = "Background Image by: David Mark from Pixabay"};
	if (curBack === "img/4.jpg") {var credit = "Background Image by: Bessi from Pixabay"};
	if (curBack === "img/5.jpg") {var credit = "Background Image by: Manfred Richter from Pixabay"};
	if (curBack === "img/6.jpg") {var credit = "Background Image by: GLady from Pixabay"};
	if (curBack === "img/7.jpg") {var credit = "Background Image by: GLady from Pixabay"};
	if (curBack === "img/8.jpg") {var credit = "Background Image by: O18 from Pixabay"};
	if (curBack === "img/9.jpg") {var credit = "Background Image by: jplenioS from Pixabay"};
	if (curBack === "img/10.jpg") {var credit = "Background Image by: pixel2013 from Pixabay"};
	if (curBack === "img/11.jpg") {var credit = "Background Image by: Devanath from Pixabay"};
	if (curBack === "img/12.jpg") {var credit = "Background Image by: sergei akulich from Pixabay"}
	if (curBack === "img/13.jpg") {var credit = "Background Image by: Walkerssk from Pixabay"}
	if (localStorage.getItem('ss_s3') === "y") {alert(credit)}
}