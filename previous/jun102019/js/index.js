var s = document.getElementById("search");
var b = document.getElementById("body");
var w = document.getElementById("weather")
s.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
		search();
	} 
});

b.addEventListener("keydown", function (e) {
	if (e.keyCode == 115) {
		document.getElementById("pageinfo").style.display = "block";
	} 
});

setInterval(function() {
  gendate()
}, 100);

onloadall()

function onloadall() {
	s.focus();
	genwel();
	gendate();
	settingscheck();
	if (!localStorage.getItem("ss_cookie")) {disclaimer(); localStorage.setItem("ss_cookie", "obtained")}
	document.getElementById("se").value = localStorage.getItem('ss_engine');
	if (localStorage.getItem("ss_s5") === "y") {genforecast()}
}

function search() {
	var se = document.getElementById("se").value;
	var query = encodeURIComponent(document.getElementById("search").value);
	document.getElementById("ajaxloader").style.display = "block";
	document.getElementById("weather").style.display = "none";
	document.getElementById("pageinfo").style.display = "none";	
	document.getElementById("settings").style.display = "none";
	document.getElementById("more").style.display = "none";
	if (se === "ddg") {var search = "https://www.duckduckgo.com/?q=" + query; localStorage.setItem('ss_engine', 'ddg');}
	if (se === "google") {var search = "https://www.google.com/search?q=" + query; localStorage.setItem('ss_engine', 'google');}
	if (se === "yahoo") {var search = "https://search.yahoo.com/search?p=" + query; localStorage.setItem('ss_engine', 'yahoo');}
	if (se === "dp") {var search = "https://results.dogpile.com/search/web?q=" + query; localStorage.setItem('ss_engine', 'dp');}
	if (se === "bing") {var search = "https://www.bing.com/search?q=" + query; localStorage.setItem('ss_engine', 'bing');}
	if (se === "ask") {var search = "https://www.ask.com/web?q=" + query; localStorage.setItem('ss_engine', 'ask');}
	if (se === "yandex") {var search = "https://yandex.com/search/?text=" + query; localStorage.setItem('ss_engine', 'yandex');}
	if (se === "webcrawler") {var search = "http://www.webcrawler.com/serp?q=" + query; localStorage.setItem('ss_engine', 'webcrawler');}
	if (se === "amzn") {var search = "https://www.amazon.com/s?k=" + query;}
	if (se === "ebay") {var search = "https://www.ebay.com/sch/i.html?_nkw=" + query;}
	if (se === "") {alert("choose a search engine"); document.getElementById("ajaxloader").style.display = "none";}
	if (localStorage.getItem('ss_s4') === "y") {localStorage.setItem("ss_prevSearch", document.getElementById("search").value)}
	window.open(search, "_self");		
}

function ifl() {
	document.getElementById("ajaxloader").style.display = "block";
	document.getElementById("weather").style.display = "none";
	document.getElementById("pageinfo").style.display = "none";	
	document.getElementById("settings").style.display = "none";
	document.getElementById("more").style.display = "none";
	var query = encodeURIComponent(document.getElementById("search").value);
	var url = "http://www.google.com/search?q=" + query + "&btnI";
	if (localStorage.getItem('ss_s4') === "y") {localStorage.setItem("ss_prevSearch", document.getElementById("search").value)}
	window.open(url, "_self");	
}

function genwel() {
	var wel = ["what's up?", "i hope your day is well.", "smile!", "start seaching.", "relax.", "enjoy what you have.", "always stay humble and kind!", "yes, we're open.", 'fun fact: mcdonalds calls frequent buyers of their food "heavy users"', "love yourself.", "be positive.", "how's the weather out there?", "you can press F4 for a cool lil secret!", "the largest recorded snowflake was in montana. it was 15 inches wide"];
	var weltxt = wel[Math.floor(Math.random() * wel.length)];
	document.getElementById("welcome").innerHTML = weltxt;
}

function gendate() {
	var d = new Date();
	var m = d.getMonth() + 1;
	var day = d.getDate();
	var year = d.getFullYear();		
	var hour = d.getHours();
	var minute = d.getMinutes();
	var seconds = d.getSeconds();
	minute = minute < 10 ? '0'+minute : minute;
	hour = hour < 10 ? '0'+hour : hour;
	seconds = seconds < 10 ? '0'+seconds : seconds;
	day = day < 10 ? '0'+day : day;
	m = m < 10 ? '0'+m : m;
	if (hour < 12) {var ampm = "am"}
	if (hour === 12) {var ampm = "pm"}
	if (hour > 12) {var ampm = "pm"}
	var curDatSec = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + ":" + seconds + ampm + "!"
	var curDat = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + ampm + "!"
	if (localStorage.getItem("ss_s6") === "y") {document.getElementById("datetime").innerHTML = curDatSec;} 
	if (localStorage.getItem("ss_s6") === "n") {document.getElementById("datetime").innerHTML = curDat;} 
}

function genforecast() {
	document.getElementById("weather").innerHTML = "<div id='loading_txt'><div id='ajaxloader_dark'></div><p style='color:black;'>please allow location settings in order for this widget to work.<br><br>please wait...</p></div>"
	document.getElementById("weather").style.display = "block"
	document.getElementById("pageinfo").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("more").style.display = "none";
	navigator.geolocation.getCurrentPosition(function(location) {
		document.getElementById("weather").innerHTML = "<div id='ajaxloader_dark'></div><p style='color:black;'>loading site...</p>"
		var x = document.getElementById("weather")
		var latitude = location.coords.latitude
		var longitude = location.coords.longitude
		var embed = '<iframe id="forecast_embed" frameborder="0" height="245" width="650" src="https://forecast.io/embed/#lat=' + latitude + '&lon=' + longitude + '&name=Your Location"></iframe><center>'
		x.innerHTML = embed;
})};

function more() {
	document.getElementById("more").style.display = 'block';
	document.getElementById("weather").style.display = 'none';
	document.getElementById("pageinfo").style.display = 'none';
}

function reset_settings() {
	localStorage.removeItem('ss_engine');
	localStorage.removeItem('ss_s1');
	localStorage.removeItem('ss_s2');
	localStorage.removeItem("ss_s3");
	localStorage.removeItem("ss_s4");
	localStorage.removeItem("ss_prevSearch");
	alert("reset completely. the page will now refresh");
	window.open(window.location.href, "_self");
}

function settingscheck() {
	if (localStorage.getItem('ss_s1') === "n") {document.getElementById("datetime").style.display = 'none'; document.getElementById('setting1').value = 'n';}
	if (localStorage.getItem('ss_s1') === "y") {document.getElementById("datetime").style.display = 'block'; document.getElementById('setting1').value = 'y';}	
	if (localStorage.getItem('ss_s2') === "n") {document.getElementById("welcome").style.display = 'none'; document.getElementById('setting2').value = 'n';}
	if (localStorage.getItem('ss_s2') === "y") {document.getElementById("welcome").style.display = 'block'; document.getElementById('setting2').value = 'y';}
	if (localStorage.getItem('ss_s3') === "n") {document.getElementById('setting3').value = "n";}
	if (localStorage.getItem('ss_s3') === "y") {document.getElementById('setting3').value = "y";}
	if (localStorage.getItem('ss_s4') === "n") {document.getElementById('setting4').value = "n";}
	if (localStorage.getItem('ss_s4') === "y") {document.getElementById('setting4').value = "y"; startRefill();}
	if (localStorage.getItem('ss_s5') === "n") {document.getElementById('setting5').value = "n";}
	if (localStorage.getItem('ss_s5') === "y") {document.getElementById('setting5').value = "y";}
	if (localStorage.getItem('ss_s6') === "n") {document.getElementById('setting6').value = "n";}
	if (localStorage.getItem('ss_s6') === "y") {document.getElementById('setting6').value = "y";}
}

function savesettings() {
	if (document.getElementById('setting1').value === "n") {localStorage.setItem("ss_s1", "n")};
	if (document.getElementById('setting1').value === "y") {localStorage.setItem("ss_s1", "y")};
	if (document.getElementById('setting2').value === "n") {localStorage.setItem("ss_s2", "n")};
	if (document.getElementById('setting2').value === "y") {localStorage.setItem("ss_s2", "y")};
	if (document.getElementById('setting3').value === "n") {localStorage.setItem("ss_s3", "n")};
	if (document.getElementById('setting3').value === "y") {localStorage.setItem("ss_s3", "y")};
	if (document.getElementById('setting4').value === "n") {localStorage.setItem("ss_s4", "n")};
	if (document.getElementById('setting4').value === "y") {localStorage.setItem("ss_s4", "y")};
	if (document.getElementById('setting5').value === "n") {localStorage.setItem("ss_s5", "n")};
	if (document.getElementById('setting5').value === "y") {localStorage.setItem("ss_s5", "y")};
	if (document.getElementById('setting6').value === "n") {localStorage.setItem("ss_s6", "n")};
	if (document.getElementById('setting6').value === "y") {localStorage.setItem("ss_s6", "y")};
	document.getElementById('settings').style.display = 'none';
	settingscheck();
}

function disclaimer() {
	alert("This website uses cookies to save your settings. This website does not use any of your personal infomation, nor sells any information to advertisers. The search engine you choose to use, however, may sell your searches to advertisers. Along with the services we use, like DarkSky for weather information, and Google for the " + '"I' + "'m Feeling Lucky" + '"' + "button. We thank you for reading this and have a good day."); 
}

function startRefill() {
	if (!localStorage.getItem("ss_prevSearch")) {}
	if (localStorage.getItem("ss_prevSearch")) {document.getElementById("prevSearchTxt").innerHTML = localStorage.getItem("ss_prevSearch"); document.getElementById("prevSearchDiv").style.display = "block";}
}

function refill() {
	document.getElementById("search").value = localStorage.getItem("ss_prevSearch");
	document.getElementById("prevSearchDiv").style.display = "none";
}

function destroyRefill() {
	document.getElementById("pS").innerHTML = "destroying...";
	localStorage.removeItem("ss_prevSearch")
	document.getElementById("pS").innerHTML = "destroyed!"
	setTimeout(function () {
        document.getElementById("prevSearchDiv").style.display = "none";
    }, 3000);
}

function mainMenu() {
	document.getElementById('displaySettings').style.display = 'none';
	document.getElementById('miscSettings').style.display = 'none';
	document.getElementById('startupSettings').style.display='none'
	document.getElementById('mainSettings').style.display = 'block';
}