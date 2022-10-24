const $ = (selector) => document.querySelector(selector);

const swapPicture = () => {
    console.log($("#picText").firstChild.nodeValue);

    if ($("#image").getAttribute("src") == "image1.png") {
        $("#image").setAttribute("src", "image2.png");
        $("#picText").firstChild.nodeValue = "Picture 2";
    }
    else {
        ($("#image").setAttribute("src", "image1.png"));
        ($("#picText").firstChild.nodeValue = "Picture 1")
    }
}


document.addEventListener("DOMContentLoaded", () => {
    $("#swap").addEventListener("click", swapPicture);
});