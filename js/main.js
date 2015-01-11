var config =
{
    "sites":
    [
        { "url": "https://twitter.com/", 		                                    "image": "images/twitter_logo.png" },
        { "url": "https://pirateproxy.sx",                                          "image": "images/tpb_logo.png"  },
        { "url": "https://boards.4chan.org/b/",                           	        "image": "images/4chan_logo.png" },
        { "url": "http://ecampus.ipl.be",                                           "image": "images/logo_ecampus.png"  },
    ],
    "search":
    {
        "url"  : "https://duckduckgo.com",
        "name" : "DuckDuckGo",
        "query": "q"
    }
}, d = document;

d.addEventListener("DOMContentLoaded", function()
{
    d.removeEventListener("DOMContentLoaded", arguments.callee, false);

    for (var i = 0, MAX = config.sites.length; i < MAX; ++i)
    {
		var image = new Image();
		image.src = config.sites[i].image;
		image.height = 100;
        var p = i / 12,
			site = d.createElement("a");
        site.href = config.sites[i].url;
        site.appendChild(image);

        if (i % 12 === 0)
        {
            var page = d.createElement("div");
            page.id = "page" + p;

            d.querySelector("#sites").appendChild(page);
            // d.querySelector("#navigation ul").appendChild((d.createElement("li")));

            if (p === 0)
            {
                // d.querySelector("#navigation ul li").classList.add("selected");
                d.querySelector("#sites > div").classList.add("selected");
            }
        }

        d.querySelector("#page" + Math.floor(p)).appendChild(site);
    }

    var form = d.querySelector("#search form"),
        text = form.querySelector("input");
    form.action      = config.search.url;
    text.name        = config.search.query;
    text.placeholder = config.search.name;
    text.focus();
});
