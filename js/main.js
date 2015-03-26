var config =
{
    "sites":
    [
        { "url": "https://twitter.com/", 		                                    "image": "images/twitter_logo.png" },
        { "url": "https://pirateproxy.sx",                                          "image": "images/tpb_logo.png"  },
        { "url": "https://boards.4chan.org/b/",                           	        "image": "images/4chan_logo.png" },
        { "url": "http://ecampus.ipl.be",                                           "image": "images/logo_ecampus.png"  },
    ],
}, d = document;
d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
		var image = new Image();
		image.src = config.sites[i].image;
		image.height = 50;
        var p = i / 12,
			site = d.createElement("a");
        site.href = config.sites[i].url;
        site.appendChild(image);

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);

            if (p === 0)
            {
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }
});
	var isCtrl = false;
	document.onkeyup=function(e) {
		for (var i = 0, MAX = config.sites.length; i < MAX; ++i){
			if(e.which == 49+i){
				isCtrl=false;
				document.location.href=config.sites[i].url;
			}
		}
	}
