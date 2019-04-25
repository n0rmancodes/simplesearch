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
      }
      function search() {
        var se = document.getElementById("se").value;
        var query = encodeURIComponent(document.getElementById("search").value);
		document.getElementById("ajaxloader").style.display = "block"
		document.getElementById("weather").style.display = "none"
		document.getElementById("pageinfo").style.display = "none"
        if (se === "ddg") {var search = "https://www.duckduckgo.com/?q=" + query}
        if (se === "google") {var search = "https://www.google.com/search?q=" + query}
        if (se === "yahoo") {var search = "https://search.yahoo.com/search?p=" + query}
        if (se === "dp") {var search = "https://results.dogpile.com/search/web?q=" + query}
        if (se === "bing") {var search = "https://www.bing.com/search?q=" + query}
        window.open(search, "_self");
      }
	  function ifl() {
		document.getElementById("ajaxloader").style.display = "block"
		document.getElementById("weather").style.display = "none"
		document.getElementById("pageinfo").style.display = "none"
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
        var curdat = "today's date is " + m + "/" + day + "/" + year + " and it is " + hour + ":" + minute + "! i hope you're having a good day!"
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