const change = document.getElementById('change');
const colred = document.getElementById('colred');
const colgreen = document.getElementById('colgreen');
const colblue = document.getElementById('colblue');
const body = document.body;

change.addEventListener('click', changeBG);

function changeBG() {
	const col1 = getRandomRGB();
	const col2 = getRandomRGB();
	const col3 = getRandomRGB();
	const colorString = `rgb(${col1}, ${col2}, ${col3})`;
	body.style.background = colorString;
	colred.innerText= col1;
	colgreen.innerText = col2;
	colblue.innerText = col3;
}

function getRandomRGB() {
	return Math.floor(Math.random() * 256);
}
