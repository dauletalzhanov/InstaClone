more = document.querySelector(".more")
moreContent = document.querySelector(".moreDropDownList")
darkMode = document.querySelector(".darkMode")
lightsOut = document.querySelector(".lightsOut")

more.addEventListener("click", function(){
	moreContent.style.display = "none"

	if (moreContent.style.display === 'none'){
		moreContent.style.display = "flex"
	} else if (moreContent.style.display === 'flex'){
		moreContent.style.display = "none"
	}
})


darkMode.addEventListener("click", function(){
	moreContent.style.display = "none"

	// Dark Mode
	if (darkMode.textContent == "Dark Mode") {
		darkMode.textContent = "Light Mode"
		darkMode.style.backgroundColor = 'white'
		darkMode.style.color = "black"

		body.style.backgroundColor = "#182747"
		body.style.color = "white"

	} else { // Light Mode
		darkMode.textContent = "Dark Mode"
		darkMode.style.backgroundColor = '#182747'
		darkMode.style.color = "whitesmoke"

		body.style.backgroundColor = "white"
		body.style.color = "black"
	}
})

lightsOut.addEventListener("click", function(){
	moreContent.style.display = "none"
})


export {more, moreContent, darkMode, lightsOut};