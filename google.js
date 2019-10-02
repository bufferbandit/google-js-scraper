var urls = Array.prototype.slice.call(document.getElementsByTagName("a"))
for(const url of urls) {
        if(!url.href.includes("google")  &&
           !url.href.includes("blogger") &&
           !url.href.includes("youtube")
        ){
                setTimeout (console.log.bind (console, url.href))
        }
}
