

jwplayer("vplayer").setup({
		
			width: '100%',
			preload: "none",
			primary: "html5",
			stretching: "exactfit",
			aspectratio: "16:9",
			cast: {}
		});
		var jw_retry_count = 0;
		jwplayer().onError(function() {
			if (jw_retry_count < 6) {
				setTimeout(function() {
					jw_retry(jwplayer("vplayer").getPlaylistItem()["file"]);
				}, 2000);
			}
		});


	
