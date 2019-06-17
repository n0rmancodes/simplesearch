var s = document.getElementById("search");
s.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
        search()
    } 
});
onloadall()
function onloadall() {
	s.focus();
	document.getElementById("se").value = localStorage.getItem('ss_engine');
}
function search() {
	var se = document.getElementById("se").value;
	var query = encodeURIComponent(document.getElementById("search").value);
	document.getElementById("ajaxloader").style.display = "block";
	if (se === "ddg") {var search = "https://www.duckduckgo.com/?q=" + query; localStorage.setItem('ss_engine', 'ddg')};
	if (se === "google") {var search = "https://www.google.com/search?q=" + query; localStorage.setItem('ss_engine', 'google');}
	if (se === "yahoo") {var search = "https://search.yahoo.com/search?p=" + query; localStorage.setItem('ss_engine', 'yahoo');}
	if (se === "dp") {var search = "https://results.dogpile.com/search/web?q=" + query; localStorage.setItem('ss_engine', 'dp');}
	if (se === "bing") {var search = "https://www.bing.com/search?q=" + query; localStorage.setItem('ss_engine', 'bing');}
	if (se === "") {alert("choose a search engine"); document.getElementById("ajaxloader").style.display = "none";}
	window.open(search, "_self");
}