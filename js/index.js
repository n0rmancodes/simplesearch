var s = document.getElementById("search");
var b = document.getElementById("body");
var w = document.getElementById("weather");

s.addEventListener("keydown", function (e) {
    if (e.keyCode == 13) {
		search();
	} 
	if (e.keyCode == 115) {
		linkMode();
	}
});

b.addEventListener("keydown", function (e) {
	if (e.keyCode == 119) {
		getBackground();
	}
});

setInterval(function() {
	genDate()
}, 100);

onloadall()

function onloadall() {
	s.focus();
	genWel();
	genDate();
	settingsCheck();
	if (!localStorage.getItem("ss_cookie")) {disclaimer(); localStorage.setItem("ss_cookie", "obtained")}
	document.getElementById("se").value = localStorage.getItem('ss_engine');
	if (localStorage.getItem("ss_s5") === "y") {genforecast();}
	dispSuggested();
	getBackground();
	document.getElementById("loader").style.display = "none";
	document.getElementById("tippyTopSpacer").style.display = "none";
}

function search() {
	if (document.getElementById("search").placeholder === "type in a link") {goToLink(); pause;}
	var se = document.getElementById("se").value;
	var query = encodeURIComponent(document.getElementById("search").value);
	document.getElementById("search").disabled = true;
	document.getElementById("se").disabled = true;
	document.getElementById("ajaxloader").style.display = "block";
	document.getElementById("weather").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("suggestedSites").style.display = "none";
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
	if (localStorage.getItem('ss_s4') === "y") {localStorage.setItem("ss_prevSearch", document.getElementById("search").value);}
	window.open(search, "_self");		
}

function ifl() {
	document.getElementById("search").disabled = true;
	document.getElementById("se").disabled = true;
	document.getElementById("ajaxloader").style.display = "block";
	document.getElementById("weather").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("more").style.display = "none";
	document.getElementById("suggestedSites").style.display = "none";
	var query = encodeURIComponent(document.getElementById("search").value);
	var url = "http://www.google.com/search?q=" + query + "&btnI";
	if (localStorage.getItem('ss_s4') === "y") {localStorage.setItem("ss_prevSearch", document.getElementById("search").value)}
	window.open(url, "_self");	
}

function genWel() {
	var wel = ["what's up?", "i hope your day is well.", "smile!", "start seaching.", "relax.", "enjoy what you have.", "always stay humble and kind!", "yes, we're open.", "never change for someone who doesn't matter.", "be yourself!"];
	var weltxt = wel[Math.floor(Math.random() * wel.length)];
	document.getElementById("welcome").innerHTML = weltxt;
}

function genDate() {
	var d = new Date();
	var m = d.getMonth() + 1;
	var day = d.getDate();
	var year = d.getFullYear();		
	var hour = d.getHours();
	var minute = d.getMinutes();
	var seconds = d.getSeconds();
	if (hour < 12) {var ampm = "am"}
	if (hour === 12) {var ampm = "pm"}
	if (hour > 12) {var ampm = "pm"}
	if (localStorage.getItem('ss_s8') === "y") {
		if (hour === 0) {var hour = 12}
		if (hour === 13) {var hour = 1}
		if (hour === 14) {var hour = 2}
		if (hour === 15) {var hour = 3}
		if (hour === 16) {var hour = 4}
		if (hour === 17) {var hour = 5}
		if (hour === 18) {var hour = 6}
		if (hour === 19) {var hour = 7}
		if (hour === 20) {var hour = 8}
		if (hour === 21) {var hour = 9}
		if (hour === 22) {var hour = 10}
		if (hour === 23) {var hour = 11}
	}
	minute = minute < 10 ? '0'+minute : minute;
	hour = hour < 10 ? '0'+hour : hour;
	seconds = seconds < 10 ? '0'+seconds : seconds;
	day = day < 10 ? '0'+day : day;
	m = m < 10 ? '0'+m : m;
	if (0 > hour > 4) {var timeOfDay = "night"}
	if (4 > hour > 12) {var timeOfDay = "morning"}
	if (12 > hour > 17) {var timeOfDay = "day"}
	if (17 > hour > 21) {var timeOfDay = "evening"}
	if (21 > hour > 23) {var timeOfDay = "night"}
	var curDatSec = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + ":" + seconds + ampm + "!"
	var curDat = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + ampm + "!"
	if (localStorage.getItem("ss_s6") === "y") {document.getElementById("datetime").innerHTML = curDatSec;} 
	if (localStorage.getItem("ss_s6") === "n") {document.getElementById("datetime").innerHTML = curDat;} 
	if (!localStorage.getItem("ss_s6")) {document.getElementById("datetime").innerHTML = curDat;}
}

function genforecast() {
	document.getElementById("weather").innerHTML = "<div id='loading_txt'><div id='ajaxloader_dark'></div><p style='color:black;'>please allow location settings in order for this widget to work.<br><br>please wait...</p></div>"
	document.getElementById("weather").style.display = "block"
	document.getElementById("settings").style.display = "none";
	document.getElementById("suggestedSites").style.display = "none";
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
	document.getElementById("weather").style.display = "none";
	document.getElementById("settings").style.display = "none";
	document.getElementById("suggestedSites").style.display = "none";
}

function removeCookies() {
	localStorage.removeItem('ss_engine');
	localStorage.removeItem('ss_s1');
	localStorage.removeItem('ss_s2');
	localStorage.removeItem("ss_s3");
	localStorage.removeItem("ss_s4");
	localStorage.removeItem("ss_s5");
	localStorage.removeItem("ss_s6");
	localStorage.removeItem("ss_prevSearch");
	alert("reset completely. the page will now refresh");
	window.open(window.location.href, "_self");
}

function settingsCheck() {
	if (localStorage.getItem('ss_s1') === "n") {document.getElementById("datetime").style.display = 'none'; document.getElementById('setting1').value = 'n';}
	if (localStorage.getItem('ss_s1') === "y") {document.getElementById("datetime").style.display = 'block'; document.getElementById('setting1').value = 'y';}	
	if (!localStorage.getItem('ss_s1')) {defaultSettings();}
	if (localStorage.getItem('ss_s2') === "n") {document.getElementById("welcome").style.display = 'none'; document.getElementById('setting2').value = 'n';}
	if (localStorage.getItem('ss_s2') === "y") {document.getElementById("welcome").style.display = 'block'; document.getElementById('setting2').value = 'y';}
	if (!localStorage.getItem('ss_s2')) {defaultSettings();}
	if (localStorage.getItem('ss_s4') === "n") {document.getElementById('setting4').value = "n";}
	if (localStorage.getItem('ss_s4') === "y") {document.getElementById('setting4').value = "y"; startRefill();}
	if (!localStorage.getItem('ss_s4')) {defaultSettings();}
	if (localStorage.getItem('ss_s5') === "n") {document.getElementById('setting5').value = "n";}
	if (localStorage.getItem('ss_s5') === "y") {document.getElementById('setting5').value = "y";}
	if (!localStorage.getItem('ss_s5')) {defaultSettings();}
	if (localStorage.getItem('ss_s6') === "n") {document.getElementById('setting6').value = "n";}
	if (localStorage.getItem('ss_s6') === "y") {document.getElementById('setting6').value = "y";}
	if (!localStorage.getItem('ss_s6')) {defaultSettings();}
	if (localStorage.getItem('ss_s7') === "n") {document.getElementById('setting7').value = "n";}
	if (localStorage.getItem('ss_s7') === "y") {document.getElementById('setting7').value = "y";}
	if (!localStorage.getItem('ss_s7')) {defaultSettings();}
	if (localStorage.getItem('ss_s8') === "n") {document.getElementById('setting8').value = "n";}
	if (localStorage.getItem('ss_s8') === "y") {document.getElementById('setting8').value = "y";}
	if (!localStorage.getItem('ss_s8')) {defaultSettings();}
}

function defaultSettings() {
	document.getElementById("setting1").value = 'y';
	document.getElementById("setting2").value = 'y';
	document.getElementById("setting4").value = 'n';
	document.getElementById("setting5").value = 'n';
	document.getElementById("setting6").value = 'n';
	document.getElementById("setting7").value = 'n';
	document.getElementById("setting8").value = 'y';
	saveSettings();
}

function saveSettings() {
	if (document.getElementById('setting1').value === "n") {localStorage.setItem("ss_s1", "n")};
	if (document.getElementById('setting1').value === "y") {localStorage.setItem("ss_s1", "y")};
	if (document.getElementById('setting2').value === "n") {localStorage.setItem("ss_s2", "n")};
	if (document.getElementById('setting2').value === "y") {localStorage.setItem("ss_s2", "y")};
	if (document.getElementById('setting4').value === "n") {localStorage.setItem("ss_s4", "n")};
	if (document.getElementById('setting4').value === "y") {localStorage.setItem("ss_s4", "y")};
	if (document.getElementById('setting5').value === "n") {localStorage.setItem("ss_s5", "n")};
	if (document.getElementById('setting5').value === "y") {localStorage.setItem("ss_s5", "y")};
	if (document.getElementById('setting6').value === "n") {localStorage.setItem("ss_s6", "n")};
	if (document.getElementById('setting6').value === "y") {localStorage.setItem("ss_s6", "y")};
	if (document.getElementById('setting7').value === "n") {localStorage.setItem("ss_s7", "n")};
	if (document.getElementById('setting7').value === "y") {localStorage.setItem("ss_s7", "y")};
	if (document.getElementById('setting8').value === "n") {localStorage.setItem("ss_s8", "n")};
	if (document.getElementById('setting8').value === "y") {localStorage.setItem("ss_s8", "y")};
	document.getElementById('settings').style.display = 'none';
	settingsCheck();
}

function disclaimer() {
	alert("This website uses cookies to save your settings. This website does not use any of your personal infomation, nor sells any information to advertisers. The search engine you choose to use, however, may sell your searches to advertisers. Along with the services we use, like DarkSky for weather information, and Google for the " + '"I' + "'m Feeling Lucky" + '"' + " button. We thank you for reading this and have a good day."); 
}

function startRefill() {
	if (!localStorage.getItem("ss_prevSearch")) {}
	if (localStorage.getItem("ss_prevSearch")) {document.getElementById("alerts").innerHTML = 'the last thing you searched was: "<span id="prevSearchTxt"></span>". if it ' + "didn't work," + ' you can <a onclick="refill()" href="#">refill it</a> or <a onclick="destroyRefill()" href="#">destroy it</a>.'; document.getElementById("prevSearchTxt").innerHTML = localStorage.getItem("ss_prevSearch"); document.getElementById("alertsDiv").style.display = "block";}
}

function refill() {
	document.getElementById("search").value = localStorage.getItem("ss_prevSearch");
	document.getElementById("alertsDiv").style.display = "none";
}

function destroyRefill() {
	document.getElementById("alerts").innerHTML = "destroying...";
	localStorage.removeItem("ss_prevSearch")
	document.getElementById("alerts").innerHTML = "destroyed!"
	setTimeout(function () {
        document.getElementById("alertsDiv").style.display = "none";
    }, 3000);
}

function mainMenu() {
	document.getElementById('displaySettings').style.display = 'none';
	document.getElementById('miscSettings').style.display = 'none';
	document.getElementById('startupSettings').style.display='none'
	document.getElementById('mainSettings').style.display = 'block';
}

function dispSuggested() {
	if (!localStorage.getItem("ss_s7") | localStorage.getItem("ss_s7") === "n") {}
	if (localStorage.getItem("ss_s7") === "y") {document.getElementById("suggestedSites").style.display = "block";}
}

function getBackground() {
	var backs = ["img/1.jpg", "img/2.jpg", "img/3.jpg", "img/4.jpg", "img/5.jpg", "img/6.jpg", "img/7.jpg", "img/8.jpg", "img/9.jpg", "img/10.jpg", "img/11.jpg", "img/12.jpg", "img/13.jpg", "img/14.jpg", "img/15.jpg", "img/16.jpg", "img/17.jpg", "img/18.jpg", "img/19.jpg", "img/20.jpg", "img/20.jpg"];
	var curBack = backs[Math.floor(Math.random() * backs.length)];
	document.getElementById("backgroundId").innerHTML =('body {background-image: url("'+ curBack + '")}');
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
	if (curBack === "img/12.jpg") {var credit = "sergei akulich from Pixabay"}
	if (curBack === "img/13.jpg") {var credit = "Walkerssk from Pixabay"}
	if (curBack === "img/14.jpg") {var credit = "Dani Géza from Pixabay"}
	if (curBack === "img/15.jpg") {var credit = "David Mark from Pixabay"}
	if (curBack === "img/16.jpg") {var credit = "Free-Photos from Pixabay"}
	if (curBack === "img/17.jpg") {var credit = "Dan Fador from Pixabay"}
	if (curBack === "img/18.jpg") {var credit = "Noel Bauza from Pixabay"}
	if (curBack === "img/19.jpg") {var credit = "Walkerssk from Pixabay"}
	if (curBack === "img/20.jpg") {var credit = "StockSnap from Pixabay"}
	if (curBack === "img/21.jpg") {var credit = "James Wheeler from Pixabay"}
	document.getElementById("pC").innerHTML = credit;
}

function linkMode() {
	if (document.getElementById("search").placeholder === "search now") {toggleLMon();} else {toggleLMoff();}
}

function toggleLMoff() {
	document.getElementById("search").placeholder = "search now";
	document.getElementById("alerts").innerHTML = "Link mode has been turned off."
	document.getElementById("alertsDiv").style.display = "block";
	setTimeout(function () {
        document.getElementById("alertsDiv").style.display = "none";
    }, 3000);
}

function goToLink() {
	var destination = document.getElementById("search").value;
	if (destination.startsWith("http") === false) {
		if (destination.startsWith("https") === false) {
			destination = "https://" + destination
		}
	}
	window.open(destination, "_self")
}

function toggleLMon() {
	document.getElementById("search").placeholder = "type in a link"
	document.getElementById("alerts").innerHTML = "Link mode has been turned on."
	document.getElementById("alertsDiv").style.display = "block";
	setTimeout(function () {
        document.getElementById("alertsDiv").style.display = "none";
    }, 3000);
}