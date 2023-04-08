const navbar = () => {
	if (window.scrollY === 0) document.querySelector(".navbar").classList.add("active");
	else document.querySelector(".navbar").classList.remove("active");
};

window.addEventListener("load", navbar);
window.addEventListener("scroll", navbar);
