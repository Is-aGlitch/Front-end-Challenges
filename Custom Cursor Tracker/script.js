const tracker =  document.querySelector(".tracker img")
window.addEventListener("mousemove", (e) => {
    tracker.style.left = e.pageX + "px";
    tracker.style.top =  e.pageY + "px";
});