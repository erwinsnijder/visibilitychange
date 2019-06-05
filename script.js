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