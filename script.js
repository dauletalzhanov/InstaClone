body = document.querySelector("body")

//////////////////More Buttons///////////////////////////

more = document.querySelector(".more")
moreContent = document.querySelector(".moreDropDownList")
darkMode = document.querySelector(".darkMode")
lightsOut = document.querySelector(".lightsOut")

moreBool = true

more.addEventListener("click", function(){
	moreContent.style.display = "none"

	if (moreBool){
		moreContent.style.display = "flex"
		moreBool = !moreBool
	} else {
		moreContent.style.display = "none"
		moreBool = !moreBool
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

		moreBool = !moreBool

	} else { // Light Mode
		darkMode.textContent = "Dark Mode"
		darkMode.style.backgroundColor = '#182747'
		darkMode.style.color = "whitesmoke"

		body.style.backgroundColor = "white"
		body.style.color = "black"

		moreBool = !moreBool
	}
})

lightsOut.addEventListener("click", function(){
	moreContent.style.display = "none"
	//location.href = "Lights Out/darkMode.html";#

	
})


//////////////////////////////////////////////////////////


///////////////////// sections ///////////////////////////

sections = document.querySelectorAll(".sections li")

for (let i=0; i<sections.length; i++){
	sections[i].addEventListener('click', function(){
		if (sections[i].style.backgroundColor == "lightgrey")
			sections[i].style.backgroundColor = "white"
		else 
			sections[i].style.backgroundColor = "lightgrey"
	
		for (let j=0; j<sections.length; j++){
			if (i != j){
				sections[j].style.backgroundColor = "white"
				sections[j].style.color = "black"
			}
		}
	})
}

///////////////////////////////////////////////////////////