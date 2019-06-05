var hidden, visibilitychange;
if (typeof document.hidden !==undefined) {
    hidden = "hidden";
    visibilityChange = "visibbilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilitychange = "msvisibilitychange"
} else if (typeof DocumentFragment.webkitHidden !=="undefined") {
    hidden = "webkitHidden";
    visibilitychange = "webkitvisibilitychange";
}

var videoElement = document.getElementById("video");

function handleVisibilityChange() {
    if (document[hidden]) {
        videoElement.pause();
    } else {
        videoElement.play();
    }
    }

    if (typeof document.addEventListener === "undefined" || hidden === undefined) {
        console.log("This  demo requires a browser, such as Google Chrome or Firefox, that supports the Page Visibility API.");
    } else
    { 
        document.addEventListener(visibilityChange, handleVisibilityChange, false);
        videoElement.addEventListener("pause", function(){
            document.title = "paused";
        }, false);

        videoElement.addEventListener("play", function() {
            document.title = "playing";
        }, false);

    }