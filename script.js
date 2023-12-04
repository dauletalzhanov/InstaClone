body = document.querySelector("body")


more = document.querySelector(".more")
moreContent = document.querySelector(".moreDropDownList")
darkMode = document.querySelector(".darkMode")
lightsOut = document.querySelector(".lightsOut")

more.addEventListener("click", function(){
	moreContent.style.display = "none"

	if (moreContent.style.display === 'none'){
		moreContent.style.display = "flex"
	} else {
		moreContent.style.display = "none"
	}
})


darkMode.addEventListener("click", function(){
	moreContent.style.display = "none"
})

lightsOut.addEventListener("click", function(){
	moreContent.style.display = "none"
})