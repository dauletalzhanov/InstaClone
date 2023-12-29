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
})


//////////////////////////////////////////////////////////


///////////////////// sidebar clicking sections ///////////////////////////

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



/////////////////// redirecting home ///////////////////
homeButton = document.querySelector(".sections").firstElementChild
instaClone = document.querySelector("#logo")

homeButton.addEventListener('click', function(){
	if(window.location.pathname.includes("index.html")){
		window.location = "index.html"
	} else if(window.location.pathname.includes("profile.html")){
		window.location = "../index.html"
	} else {
		window.location = "../../index.html"
	}

})

instaClone.addEventListener('click', function(){
	if(window.location.pathname.includes("index.html")){
		window.location = "index.html"
	} else if(window.location.pathname.includes("profile.html")){
		window.location = "../index.html"
	} else {
		window.location = "../../index.html"
	}
})

function takeHome(){
	if(window.location.pathname.includes("index.html")){
		window.location = "index.html"
	} else if(window.location.pathname.includes("profile.html")){
		window.location = "../index.html"
	} else {
		window.location = "../../index.html"
	}
}

///////////////////// redirecting to a profile page //////////
profile = document.querySelector(".profile")

profile.addEventListener('click', function(){
	window.location="./John Doe/profile.html"
})


//////////////////  like button - buttons /////////////////

heartButton = document.querySelectorAll(".heart")
for(let i=0; i<heartButton.length; i++){
	heartButton[i].addEventListener('click', function(e){

		if (heartButton[i].src.includes('heart3.svg')){
			heartButton[i].src = "./images/vectors/heart2.svg"
			likes = heartButton[i].parentElement.parentElement.nextElementSibling.firstChild
			likes.textContent--
		} else {
			heartButton[i].src = "./images/vectors/heart3.svg"
			likes = heartButton[i].parentElement.parentElement.nextElementSibling.firstChild
			likes.textContent++
		}		

	})
}

///___________________bookmark button__________________///

bookmark = document.querySelectorAll(".bookmark")
for(let i=0; i<bookmark.length; i++){

	bookmark[i].addEventListener('click', function(e){
		
		//bookmark[i].src = "./images/vectors/bookmark2.svg"

		if (bookmark[i].src.includes('bookmark2.svg')){
			bookmark[i].src = "./images/vectors/bookmark.svg"
		} else {
			bookmark[i].src = "./images/vectors/bookmark2.svg"
		}
		
	})
}

////////////////////////////////////////////////////////////

//https://www.youtube.com/embed/tgbNymZ7vqY?autoplay=0&mute=1