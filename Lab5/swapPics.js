const $ = (selector) => document.querySelector(selector);


const swapPics = () => {

	//if picture src is "image1.png", 
	//		then set to "image2.png"
	//		else set to "image1.png"
	if ($("#picture").getAttribute("src") == "image1.png") {
		$("#picture").setAttribute("src", "image2.png");
		$("#heading").firstChild.nodeValue = "Image 2";   // also change heading
	}
	else {
		$("#picture").setAttribute("src", "image1.png");
		$("#heading").firstChild.nodeValue = "Image 1";		// also change heading
	}
}

document.addEventListener("DOMContentLoaded", () => {
	$("#swap").addEventListener("click", swapPics);
});