      var s = document.getElementById("search");
      var b = document.getElementById("body");
      s.addEventListener("keydown", function (e) {
        if (e.keyCode == 13) {
          search()
        } 
      });
	 b.addEventListener("keydown", function (e) {
      if (e.keyCode == 115) {
          document.getElementById("pageinfo").style.display = "block"
        } 
      });
      var w = document.getElementById("weather")
      window.onload(onloadall())
      function onloadall() {
        s.focus();
		genwel();
        gendate();
		settingscheck();
		document.getElementById("se").value = localStorage.getItem('ss_engine');
      }
      function search() {
        var se = document.getElementById("se").value;
        var query = encodeURIComponent(document.getElementById("search").value);
		document.getElementById("ajaxloader").style.display = "block";
		document.getElementById("weather").style.display = "none";
		document.getElementById("pageinfo").style.display = "none";
		document.getElementById("more").style.display = "none";
        if (se === "ddg") {var search = "https://www.duckduckgo.com/?q=" + query; localStorage.setItem('ss_engine', 'ddg');}
        if (se === "google") {var search = "https://www.google.com/search?q=" + query; localStorage.setItem('ss_engine', 'google');}
        if (se === "yahoo") {var search = "https://search.yahoo.com/search?p=" + query; localStorage.setItem('ss_engine', 'yahoo');}
        if (se === "dp") {var search = "https://results.dogpile.com/search/web?q=" + query; localStorage.setItem('ss_engine', 'dp');}
        if (se === "bing") {var search = "https://www.bing.com/search?q=" + query; localStorage.setItem('ss_engine', 'bing');}
	    if (se === "amzn") {var search = "https://www.amazon.com/s?k=" + query; localStorage.setItem('ss_engine', 'amzn');}
	    if (se === "ebay") {var search = "https://www.ebay.com/sch/i.html?_nkw=" + query; localStorage.setItem('ss_engine', 'ebay');}
	    if (se === "") {alert("choose a search engine"); document.getElementById("ajaxloader").style.display = "none";}
        window.open(search, "_self");
      }
      function ifl() {
	    document.getElementById("ajaxloader").style.display = "block";
	    document.getElementById("weather").style.display = "none";
		document.getElementById("pageinfo").style.display = "none";
		var query = encodeURIComponent(document.getElementById("search").value);
		var url = "http://www.google.com/search?q=" + query + "&btnI";
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
        minute = minute < 10 ? '0'+minute : minute;
        hour = hour < 10 ? '0'+hour : hour;
	    day = day < 10 ? '0'+day : day;
        m = m < 10 ? '0'+m : m;
        var curdat = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + "!"
        document.getElementById("datetime").innerHTML = curdat;
      }
      function genforecast() {
        navigator.geolocation.getCurrentPosition(function(location) {
          var x = document.getElementById("weather")
          var latitude = location.coords.latitude
          var longitude = location.coords.longitude
          var embed = '<iframe id="forecast_embed" frameborder="0" height="245" width="650" src="//forecast.io/embed/#lat=' + latitude + '&lon=' + longitude + '&name=Your Location"></iframe><center>'
          x.innerHTML = embed;
        });
      }
	  function more() {
		document.getElementById("more").style.display = 'block';
		document.getElementById("weather").style.display = 'none';
		document.getElementById("pageinfo").style.display = 'none';
	  }
	  function reset_settings() {
		alert("are you sure? click OK to continue, if otherwise refresh the page.");
		localStorage.setItem('ss_engine', '')
		alert("reset completely. the page will now refresh")
		window.open(window.location.href, "_self")
	  }
	  function settingscheck() {
		if (localStorage.getItem('ss_s1') === "n") {document.getElementById("datetime").style.display = 'none'; document.getElementById('setting1').value = 'n';}
		if (localStorage.getItem('ss_s1') === "y") {document.getElementById("datetime").style.display = 'block'; document.getElementById('setting1').value = 'y';}	
		if (localStorage.getItem('ss_s2') === "n") {document.getElementById("welcome").style.display = 'none'; document.getElementById('setting2').value = 'n';}
		if (localStorage.getItem('ss_s2') === "y") {document.getElementById("welcome").style.display = 'block'; document.getElementById('setting2').value = 'y';}	
	  }
	  function savesettings() {
		if (document.getElementById('setting1').value === "n") {localStorage.setItem("ss_s1", "n")}
		if (document.getElementById('setting1').value === "y") {localStorage.setItem("ss_s1", "y")}
		if (document.getElementById('setting2').value === "n") {localStorage.setItem("ss_s2", "n")}
		if (document.getElementById('setting2').value === "y") {localStorage.setItem("ss_s2", "y")}
		document.getElementById('settings').style.display = 'none';
		settingscheck()
	  }