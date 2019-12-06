window.onload = () => {
    let switchStyleAction = document.getElementById("alternate");

    link1 = "css/styles.css"
    link2 = "../stylesheets/alternate.css"

    flag = true;
    switchStyleAction.onclick = () => {
        console.log("this");
        if (flag) {
            alternateStyle(link2);
            flag = false;
        } else {
            alternateStyle(link1);
            flag = true;
        }
    }
}
function alternateStyle(newCss) {
    var cssLink = document.getElementsByTagName("link")[0];
    cssLink.setAttribute("href", newCss);
}