let clickCount = 0;

const handleClick = () => {
	clickCount += 1;
	console.log(clickCount);

	if (clickCount == 3) {
		document.querySelectorAll(".development-feature").forEach((e) => {
			e.classList.toggle("hidden");
		});
		clickCount = 0;
	}
};

document.querySelector("#header-logo").addEventListener("click", handleClick);

// let agent = navigator.userAgent;
// document.querySelector("#user-agent").innerHTML = agent;
