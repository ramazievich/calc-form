'use strict';
/**
 * @function [funcStena] Функция подсчета площади стены для одной формы
 * @param {allForms} allForms переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стены
 * @param {number} visota - поле ввода высоты стены
 * @param {number} result - результат подсчета
 */
let allForms = document.querySelectorAll(".walls-form");
console.log(allForms);

function funcStena() {
	allForms = document.querySelectorAll(".walls-form");
	for (let i = 0, max = allForms.length; i < max; i++) {
		let form = allForms[i];
		let dlina = Number(form.querySelector(".wf_length").value);
		dlina = parseFloat(dlina);
		let visota = Number(form.querySelector(".wf_height").value);
		visota = parseFloat(visota);
		let result = (dlina * visota);
		form.querySelector(".wf_result-wall").value = result.toFixed(2);


	}
}

/**
 * @function [funcWindow] Функция подсчета площади оконного проема для одной формы
 * @param {allFormsWindow} allFormsWindow переменная для формы подсчета площади оконнх проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} visota - поле ввода высоты оконного проема
 * @param {number} result - результат подсчета
 */

let allFormsWindow = document.querySelectorAll(".windows-form");
console.log(allFormsWindow);

function funcWindow() {
	allFormsWindow = document.querySelectorAll(".windows-form");
	for (let i = 0, max = allFormsWindow.length; i < max; i++) {
		let form = allFormsWindow[i];
		let shirina = Number(form.querySelector(".window_length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".window_height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".window_result-window").value = result.toFixed(2);
	}
}

/**
 * @function [funcTreugFrontonWindow] Функция подсчета площади оконного проема для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonWindow} allFormsTreugFrontonWindow переменная для формы подсчета площади оконных проемов в треугольных фронтонах
 * @param {number} shirina - поле ввода ширины оконного проема в треугольных фронтонах
 * @param {number} visota - поле ввода высоты оконного проема в треугольных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsTreugFrontonWindow = document.querySelectorAll(".tf-window-form");
console.log(allFormsTreugFrontonWindow);

function funcTreugFrontonWindow() {
	allFormsTreugFrontonWindow = document.querySelectorAll(".tf-window-form");
	for (let i = 0, max = allFormsTreugFrontonWindow.length; i < max; i++) {
		let form = allFormsTreugFrontonWindow[i];
		console.log(form.querySelector(".tf-window-num"));
		let okno = Number(form.querySelector(".tf-window-num").value);
		okno = parseFloat(okno);
		let shirina = Number(form.querySelector(".tf-window-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".tf-window-height").value);
		visota = parseFloat(visota);
		let result = (shirina + visota) * okno;
		form.querySelector(".tf-window-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcLomFrontonWindow] Функция подсчета площади оконного проема для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonWindow} allFormsLomFrontonWindow переменная для формы подсчета площади оконных проемов в ломаных фронтонах
 * @param {number} okno - поле ввода количества оконных проемов в ломаных фронтонах
 * @param {number} shirina - поле ввода ширины оконного проема в ломаных фронтонах
 * @param {number} visota - поле ввода высоты оконного проема в ломаных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsLomFrontonWindow = document.querySelectorAll(".lf-window-form");
console.log(allFormsLomFrontonWindow);

function funcLomFrontonWindow() {
	allFormsLomFrontonWindow = document.querySelectorAll(".lf-window-form");
	for (let i = 0, max = allFormsLomFrontonWindow.length; i < max; i++) {
		let form = allFormsLomFrontonWindow[i];
		console.log(form.querySelector(".lf-window-num"));
		let okno = Number(form.querySelector(".lf-window-num").value);
		okno = parseFloat(okno);
		let shirina = Number(form.querySelector(".lf-window-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".lf-window-height").value);
		visota = parseFloat(visota);
		let result = (shirina + visota) * okno;
		form.querySelector(".lf-window-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcTreugFrontonDoor] Функция подсчета площади дверного проема для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonDoor} allFormsTreugFrontonDoor переменная для формы подсчета площади дверных проемов в треугольных фронтонах
 * @param {number} dver - поле ввода количества оконных проемов в треугольных фронтонах
 * @param {number} shirina - поле ввода ширины оконного проема в треугольных фронтонах
 * @param {number} visota - поле ввода высоты оконного проема в треугольных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsTreugFrontonDoor = document.querySelectorAll(".tf-door-form");
console.log(allFormsTreugFrontonDoor);

function funcTreugFrontonDoor() {
	allFormsTreugFrontonDoor = document.querySelectorAll(".tf-door-form");
	for (let i = 0, max = allFormsTreugFrontonDoor.length; i < max; i++) {
		let form = allFormsTreugFrontonDoor[i];
		console.log(form.querySelector(".tf-door-num"));
		let dver = Number(form.querySelector(".tf-door-num").value);
		dver = parseFloat(dver);
		let shirina = Number(form.querySelector(".tf-door-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".tf-door-height").value);
		visota = parseFloat(visota);
		let result = (shirina + visota) * dver;
		form.querySelector(".tf-door-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcTreugFrontonFrontsves] Функция подсчета площади фронтонного свеса для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonFrontsves} allFormsTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса в треугольных фронтонах
 * @param {number} shirina - поле ввода ширины фронтонного свеса в треугольных фронтонах
 * @param {number} visota - поле ввода высоты фронтонного свеса в треугольных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsTreugFrontonFrontsves = document.querySelectorAll(".tf-frontsves-form");
console.log(allFormsTreugFrontonFrontsves);

function funcTreugFrontonFrontsves() {
	allFormsTreugFrontonFrontsves = document.querySelectorAll(".tf-frontsves-form");
	for (let i = 0, max = allFormsTreugFrontonFrontsves.length; i < max; i++) {
		let form = allFormsTreugFrontonFrontsves[i];
		let shirina = Number(form.querySelector(".tf-frontsves-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".tf-frontsves-height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".tf-frontsves-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcLomFrontonFrontsves] Функция подсчета площади фронтонного свеса для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonFrontsves} allFormsLomFrontonFrontsves переменная для формы подсчета площади фронтонного свеса в ломаных фронтонах
 * @param {number} shirina - поле ввода ширины фронтонного свеса в ломаных фронтонах
 * @param {number} visota - поле ввода высоты фронтонного свеса в ломаных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsLomFrontonFrontsves = document.querySelectorAll(".lf-frontsves-form");
console.log(allFormsLomFrontonFrontsves);

function funcLomFrontonFrontsves() {
	allFormsLomFrontonFrontsves = document.querySelectorAll(".lf-frontsves-form");
	for (let i = 0, max = allFormsLomFrontonFrontsves.length; i < max; i++) {
		let form = allFormsLomFrontonFrontsves[i];
		let shirina = Number(form.querySelector(".lf-frontsves-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".lf-frontsves-height").value);
		visota = parseFloat(visota);
		let visota2 = Number(form.querySelector(".lf-frontsves-height2").value);
		visota2 = parseFloat(visota2);
		let result = shirina * (visota + visota2);
		form.querySelector(".lf-frontsves-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcTreugFrontonKarnizsves] Функция подсчета площади карнизного свеса для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonKarnizsves} allFormsTreugFrontonKarnizsves переменная для формы подсчета площади карнизного свеса в треугольных фронтонах
 * @param {number} shirina - поле ввода ширины карнизного свеса в треугольных фронтонах
 * @param {number} visota - поле ввода высоты карнизного свеса в треугольных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsTreugFrontonKarnizsves = document.querySelectorAll(".tf-karnizsves-form");
console.log(allFormsTreugFrontonKarnizsves);

function funcTreugFrontonKarnizsves() {
	allFormsTreugFrontonKarnizsves = document.querySelectorAll(".tf-karnizsves-form");
	for (let i = 0, max = allFormsTreugFrontonKarnizsves.length; i < max; i++) {
		let form = allFormsTreugFrontonKarnizsves[i];
		let shirina = Number(form.querySelector(".tf-karnizsves-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".tf-karnizsves-height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".tf-karnizsves-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcLomFrontonKarnizsves] Функция подсчета площади карнизного свеса для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonKarnizsves} allFormsLomFrontonKarnizsves переменная для формы подсчета площади карнизного свеса в ломаных фронтонах
 * @param {number} shirina - поле ввода ширины карнизного свеса в ломаных фронтонах
 * @param {number} visota - поле ввода высоты карнизного свеса в ломаных фронтонах
 * @param {number} result - результат подсчета
 */

let allFormsLomFrontonKarnizsves = document.querySelectorAll(".lf-karnizsves-form");
console.log(allFormsLomFrontonKarnizsves);

function funcLomFrontonKarnizsves() {
	allFormsLomFrontonKarnizsves = document.querySelectorAll(".lf-karnizsves-form");
	for (let i = 0, max = allFormsLomFrontonKarnizsves.length; i < max; i++) {
		let form = allFormsLomFrontonKarnizsves[i];
		let shirina = Number(form.querySelector(".lf-karnizsves-length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".lf-karnizsves-height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".lf-karnizsves-result").value = result.toFixed(2);
	}
}

/**
 * @function [funcDoor] функция подсчета площади дверного проема для одной формы
 * @param {allFormsDoor} allFormsDoor переменная для формы подсчета площади дверных проемов
 * @param {number} shirina - поле ввода ширины дверного проема
 * @param {number} visota - поле ввода высоты дверного проема
 * @param {number} result - результат подсчета
 */

let allFormsDoor = document.querySelectorAll(".doors-form");
console.log(allFormsDoor);

function funcDoor() {
	allFormsDoor = document.querySelectorAll(".doors-form");
	for (let i = 0, max = allFormsDoor.length; i < max; i++) {
		let form = allFormsDoor[i];
		let shirina = Number(form.querySelector(".door_length").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".door_height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".door_result-door").value = result.toFixed(2);
	}
}

/**
 * @function [funcTreugFronton] Функция подсчета площади треугольного фронтона для одной формы
 * @param {allFormsTreugFront} allFormsTreugFront переменная для формы подсчета площади треугольного фронтона
 * @param {number} shirina - поле ввода ширины треугольного фронтона
 * @param {number} visota - поле ввода высоты треугольного фронтона
 * @param {number} result - результат подсчета
 */
let allFormsTreugFronton = document.querySelectorAll(".tf-form");
console.log(allFormsTreugFronton);

function funcTreugFronton() {
	allFormsTreugFronton = document.querySelectorAll(".tf-form");
	for (let i = 0, max = allFormsTreugFronton.length; i < max; i++) {
		let form = allFormsTreugFronton[i];
		let shirina = Number(form.querySelector(".tf-width").value);
		shirina = parseFloat(shirina);
		let visota = Number(form.querySelector(".tf-height").value);
		visota = parseFloat(visota);
		let result = (shirina * visota);
		form.querySelector(".tf-area").value = result.toFixed(2);
	}
}


/**
 * @function [funcTreugFronton]Функция подсчета площади треугольного фронтона для одной формы
 * @param {allFormsTreugFront} allFormsTreugFront переменная для формы подсчета площади треугольного фронтона
 * @param {number} shirina - поле ввода ширины треугольного фронтона
 * @param {number} visota - поле ввода высоты треугольного фронтона
 * @param {number} result - результат подсчета
 */
let allFormsLomFronton = document.querySelectorAll(".lf-form");
console.log(allFormsLomFronton);

function funcLomFronton() {
	allFormsLomFronton = document.querySelectorAll(".lf-form");
	for (let i = 0, max = allFormsLomFronton.length; i < max; i++) {
		let form = allFormsLomFronton[i];
		let shirina = Number(form.querySelector(".lf-width").value); //B
		shirina = parseFloat(shirina);
		let shirina2 = Number(form.querySelector(".lf-width2").value); //C
		shirina2 = parseFloat(shirina2);
		let visota = Number(form.querySelector(".lf-height").value); //H
		visota = parseFloat(visota);
		let visota2 = Number(form.querySelector(".lf-height2").value); //D
		visota2 = parseFloat(visota2);
		// let s1 = (shirina - shirina2) / visota;
		// let s2 = 0.5 * shirina2 * visota2;
		// let s3 = shirina2 * visota;
		// let result = (s1 + s2 + s3);
		let result = ((shirina2 + shirina) / 2 * visota) + (shirina2 * visota2) / 2;
		form.querySelector(".lf-area").value = result.toFixed(2);
	}
}


/**
 * @function [funcCornerVnesh] функция подсчета высоты внешнего угла для одной формы
 * @param {allFormsCornerVnesh} allFormsCornerVnesh переменная для формы подсчета высоты внешнего угла
 * @param {number} visota - поле ввода высоты внешнего угла
 * @param {number} result - результат подсчета
 */

let allFormsCornerVnesh = document.querySelectorAll(".ugol-vnesh-form");
console.log(allFormsCornerVnesh);

function funcCornerVnesh() {
	allFormsCornerVnesh = document.querySelectorAll(".ugol-vnesh-form");
	for (let i = 0, max = allFormsCornerVnesh.length; i < max; i++) {
		let form = allFormsCornerVnesh[i];
		let visota = Number(form.querySelector(".ugol_height").value);
		visota = parseFloat(visota);
		let result = visota;
		form.querySelector(".ugol_sum-width").value = result.toFixed(2);
	}
}

/**
 * @function [funcCornerInner] функция подсчета высоты внутреннего угла для одной формы
 * @param {allFormsCornerInner} allFormsCornerInner переменная для формы подсчета высоты внутреннего угла
 * @param {number} ugolInner - поле ввода количества внутренних углов
 * @param {number} visota - поле ввода высоты внутреннего угла
 * @param {number} result - результат подсчета
 */

let allFormsCornerInner = document.querySelectorAll(".ugol-inner-form");
console.log(allFormsCornerInner);

function funcCornerInner() {
	allFormsCornerInner = document.querySelectorAll(".ugol-inner-form");
	for (let i = 0, max = allFormsCornerInner.length; i < max; i++) {
		let form = allFormsCornerInner[i];
		let visota = Number(form.querySelector(".ugol-inner_height").value);
		visota = parseFloat(visota);
		let result = visota;
		form.querySelector(".ugol-inner_sum-width").value = result.toFixed(2);
	}
}

/**
 * @function [sumAreas] функция для сумирования всех площадей стен со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreas() {
	let areas = document.getElementsByClassName("wf_result-wall");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("wf_area-all2").value = sum;
}

/**
 * @function [sumAreasWindow] функция для сумирования всех площадей оконных проемов со всех форм
 * @param {number} areasWindows - переменная поля с площадью оконных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumWindows - сумма всех площадей после сложения
 */
function sumAreasWindow() {
	let areasWindows = document.getElementsByClassName("window_result-window");
	let sumWindows = 0;
	[].forEach.call(areasWindows, function (el) {
		sumWindows += parseFloat(el.value);
		console.log(sumWindows);
	});
	document.getElementById("window_area-all2-id").value = sumWindows;
}

/**
 * @function [sumAreasLomFrontonWindow] функция для сумирования всех площадей оконных проемов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonWindows - переменная поля с площадью оконных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonWindows - сумма всех площадей после сложения
 */
function sumAreasLomFrontonWindow() {
	let areasLomFrontonWindows = document.getElementsByClassName("lf-window-result");
	let sumLomFrontonWindows = 0;
	[].forEach.call(areasLomFrontonWindows, function (el) {
		sumLomFrontonWindows += parseFloat(el.value);
		console.log(sumLomFrontonWindows);
	});
	document.getElementById("lf-window-area-all2-id").value = sumLomFrontonWindows;
}

/**
 * @function [sumAreasLomFrontonDoor] функция для сумирования всех площадей дверных проемов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonDoor - переменная поля с площадью дверных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonDoor - сумма всех площадей после сложения
 */
function sumAreasLomFrontonDoor() {
	let areasLomFrontonDoor = document.getElementsByClassName("lf-door-result");
	let sumLomFrontonDoor = 0;
	[].forEach.call(areasLomFrontonDoor, function (el) {
		sumLomFrontonDoor += parseFloat(el.value);
		console.log(sumLomFrontonDoor);
	});
	document.getElementById("lf-door-area-all2-id").value = sumLomFrontonDoor;
}

/**
 * @function [sumAreasTreugFrontonFrontsves] функция для сумирования всех площадей фронтонных свесов со всех форм в треугольных фронтонах
 * @param {number} areasTreugFrontonFrontsves - переменная поля с площадью фронтонных свесов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumTreugFrontonFrontsves - сумма всех площадей после сложения
 */
function sumAreasTreugFrontonFrontsves() {
	let areasTreugFrontonFrontsves = document.getElementsByClassName("tf-frontsves-result");
	let sumTreugFrontonFrontsves = 0;
	[].forEach.call(areasTreugFrontonFrontsves, function (el) {
		sumTreugFrontonFrontsves += parseFloat(el.value);
		console.log(sumTreugFrontonFrontsves);
	});
	document.getElementById("tf-frontsves-area-all2-id").value = sumTreugFrontonFrontsves;
}

/**
 * @function [sumAreasLomFrontonFrontsves] функция для сумирования всех площадей фронтонных свесов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonFrontsves - переменная поля с площадью фронтонных свесов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonFrontsves - сумма всех площадей после сложения
 */
function sumAreasLomFrontonFrontsves() {
	let areasLomFrontonFrontsves = document.getElementsByClassName("lf-frontsves-result");
	let sumLomFrontonFrontsves = 0;
	[].forEach.call(areasLomFrontonFrontsves, function (el) {
		sumLomFrontonFrontsves += parseFloat(el.value);
		console.log(sumLomFrontonFrontsves);
	});
	document.getElementById("lf-frontsves-area-all2-id").value = sumLomFrontonFrontsves;
}


/**
 * @function [sumAreasTreugFrontonKarnizsves] функция для сумирования всех площадей карнизных свесов со всех форм в треугольных фронтонах
 * @param {number} areasTreugFrontonKarnizsves - переменная поля с площадью карнизных свесов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumTreugFrontonKarnizsves - сумма всех площадей после сложения
 */
function sumAreasTreugFrontonKarnizsves() {
	let areasTreugFrontonKarnizsves = document.getElementsByClassName("tf-karnizsves-result");
	let sumTreugFrontonKarnizsves = 0;
	[].forEach.call(areasTreugFrontonKarnizsves, function (el) {
		sumTreugFrontonKarnizsves += parseFloat(el.value);
		console.log(sumTreugFrontonKarnizsves);
	});
	document.getElementById("tf-karnizsves-area-all2-id").value = sumTreugFrontonKarnizsves;
}

/**
 * @function [sumAreasLomFrontonKarnizsves] функция для сумирования всех площадей карнизных свесов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonKarnizsves - переменная поля с площадью карнизных свесов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonKarnizsves - сумма всех площадей после сложения
 */
function sumAreasLomFrontonKarnizsves() {
	let areasLomFrontonKarnizsves = document.getElementsByClassName("lf-karnizsves-result");
	let sumLomFrontonKarnizsves = 0;
	[].forEach.call(areasLomFrontonKarnizsves, function (el) {
		sumLomFrontonKarnizsves += parseFloat(el.value);
		console.log(sumLomFrontonKarnizsves);
	});
	document.getElementById("lf-karnizsves-area-all2-id").value = sumLomFrontonKarnizsves;
}

/**
 * @function [sumAreasDoor] функция для сумирования всех площадей дверных проемов со всех форм
 * @param {number} areasDoors - переменная поля с площадью дверных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumDoors - сумма всех площадей после сложения
 */
function sumAreasDoor() {
	let areasDoors = document.getElementsByClassName("door_result-door");
	let sumDoors = 0;
	[].forEach.call(areasDoors, function (el) {
		sumDoors += parseFloat(el.value);
		console.log(sumDoors);
	});
	document.getElementById("door_area-all2-id").value = sumDoors;
}

/**
 * @function [sumAreasTreugolFronton] функция для сумирования всех площадей треугольных фронтонов со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasTreugolFronton() {
	let areas = document.getElementsByClassName("tf-area");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-area-all22-id").value = sum;
}

/**
 * @function [sumAreasLomFronton] функция для сумирования всех площадей ломаных фронтонов со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasLomFronton() {
	let areas = document.getElementsByClassName("lf-area");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-area-all22-id").value = sum;
}


/**
 * @function [perimeter] Функция подсчета периметра стены для одной формы
 * @param {allForms} form переменная для формы подсчета площади стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
 */
function perimeter() {
	for (let i = 0, max = allForms.length; i < max; i++) {
		let form = allForms[i];
		let dlina = Number(form.querySelector(".wf_length").value);
		dlina = parseFloat(dlina);
		let result = dlina;
		form.querySelector(".wf_perimeter").value = result;
	}
}

/**
 * @function [sumWidthWindows] Функция подсчета сумарной ширины оконного проема для одной формы
 * @param {allFormsWindow} formWindow переменная для формы подсчета площади оконного проема
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
function sumWidthWindows() {
	for (let i = 0, max = allFormsWindow.length; i < max; i++) {
		let formWindow = allFormsWindow[i];
		let shirina = Number(formWindow.querySelector(".window_length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formWindow.querySelector(".window_sum-width").value = result;
	}
}
/*
/**
 * @function [sumWidthTreugFrontonWindows] Функция подсчета сумарной ширины оконного проема для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonWindow} formTreugFrontonWindow переменная для формы подсчета площади оконного проема
 * @param {number} window - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета

function sumWidthTreugFrontonWindows() {
	for (let i = 0, max = allFormsTreugFrontonWindow.length; i < max; i++) {
		let formTreugFrontonWindow = allFormsTreugFrontonWindow[i];
		console.log(formTreugFrontonWindow.querySelectorAll(".tf-window-num"));
		let window = Number(formTreugFrontonWindow.querySelector(".tf-window-num").value);
		window = parseFloat(window);
		let shirina = Number(formTreugFrontonWindow.querySelector(".tf-window-length").value);
		shirina = parseFloat(shirina);
		let result = shirina * window;
		formTreugFrontonWindow.querySelector(".tf-window-sum-width").value = result;
	}
}
*/
/**
 * @function [sumWidthLomFrontonWindows] Функция подсчета сумарной ширины оконного проема для одной формы ломаного фронтона
 * @param {allFormsLomFrontonWindow} formLomFrontonWindow переменная для формы подсчета площади оконного проема
 * @param {number} window - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 
function sumWidthLomFrontonWindows() {
	for (let i = 0, max = allFormsLomFrontonWindow.length; i < max; i++) {
		let formLomFrontonWindow = allFormsLomFrontonWindow[i];
		console.log(formLomFrontonWindow.querySelectorAll(".lf-window-num"));
		let window = Number(formLomFrontonWindow.querySelector(".lf-window-num").value);
		window = parseFloat(window);
		let shirina = Number(formLomFrontonWindow.querySelector(".lf-window-length").value);
		shirina = parseFloat(shirina);
		let result = shirina * window;
		formLomFrontonWindow.querySelector(".lf-window-sum-width").value = result;
	}
}
*/

/**
 * @function [sumWidthTreugFrontonDoor] Функция подсчета сумарной ширины дверного проема для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonDoor} formTreugFrontonDoor переменная для формы подсчета площади дверного проема
 * @param {number} door - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета

function sumWidthTreugFrontonDoor() {
	for (let i = 0, max = allFormsTreugFrontonDoor.length; i < max; i++) {
		let formTreugFrontonDoor = allFormsTreugFrontonDoor[i];
		console.log(formTreugFrontonDoor.querySelectorAll(".tf-door-num"));
		let door = Number(formTreugFrontonDoor.querySelector(".tf-door-num").value);
		door = parseFloat(door);
		let shirina = Number(formTreugFrontonDoor.querySelector(".tf-door-length").value);
		shirina = parseFloat(shirina);
		let result = shirina * door;
		formTreugFrontonDoor.querySelector(".tf-door-sum-width").value = result;
	}
}
*/
/**
 * @function [sumWidthLomFrontonDoor] Функция подсчета сумарной ширины дверного проема для одной формы ломаного фронтона
 * @param {allFormsLomFrontonDoor} formLomFrontonDoor переменная для формы подсчета площади дверного проема
 * @param {number} Door - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета

function sumWidthLomFrontonDoor() {
	for (let i = 0, max = allFormsLomFrontonDoor.length; i < max; i++) {
		let formLomFrontonDoor = allFormsLomFrontonDoor[i];
		console.log(formLomFrontonDoor.querySelectorAll(".lf-door-num"));
		let door = Number(formLomFrontonDoor.querySelector(".lf-door-num").value);
		door = parseFloat(door);
		let shirina = Number(formLomFrontonDoor.querySelector(".lf-door-length").value);
		shirina = parseFloat(shirina);
		let result = shirina * door;
		formLomFrontonDoor.querySelector(".lf-door-sum-width").value = result;
	}
}
 */

/**
 * @function [sumWidthTreugFrontonFrontsves] Функция подсчета сумарной ширины фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} shirina - поле ввода ширины фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumWidthTreugFrontonFrontsves() {
	for (let i = 0, max = allFormsTreugFrontonFrontsves.length; i < max; i++) {
		let formTreugFrontonFrontsves = allFormsTreugFrontonFrontsves[i];
		let shirina = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formTreugFrontonFrontsves.querySelector(".tf-frontsves-sum-width").value = result;
	}
}

/**
 * @function [sumWidthLomFrontonFrontsves] Функция подсчета сумарной ширины фронтонного свеса для одной формы ломаного фронтона
 * @param {allFormsLomFrontonFrontsves} formLomFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} shirina - поле ввода ширины фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumWidthLomFrontonFrontsves() {
	for (let i = 0, max = allFormsLomFrontonFrontsves.length; i < max; i++) {
		let formLomFrontonFrontsves = allFormsLomFrontonFrontsves[i];
		let shirina = Number(formLomFrontonFrontsves.querySelector(".lf-frontsves-length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formLomFrontonFrontsves.querySelector(".lf-frontsves-sum-width").value = result;
	}
}

/**
 * @function [sumWidthTreugFrontonKarnizsves] Функция подсчета сумарной ширины карнизного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonKarnizsves} formTreugFrontonKarnizsves переменная для формы подсчета площади карнизного свеса
 * @param {number} shirina - поле ввода ширины карнизного свеса
 * @param {number} result - результат подсчета
 */
function sumWidthTreugFrontonKarnizsves() {
	for (let i = 0, max = allFormsTreugFrontonKarnizsves.length; i < max; i++) {
		let formTreugFrontonKarnizsves = allFormsTreugFrontonKarnizsves[i];
		let shirina = Number(formTreugFrontonKarnizsves.querySelector(".tf-karnizsves-length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formTreugFrontonKarnizsves.querySelector(".tf-karnizsves-sum-width").value = result;
	}
}

/**
 * @function [sumWidthLomFrontonKarnizsves] Функция подсчета сумарной ширины карнизного свеса для одной формы ломаного фронтона
 * @param {allFormsLomFrontonKarnizsves} formLomFrontonKarnizsves переменная для формы подсчета площади карнизного свеса
 * @param {number} shirina - поле ввода ширины карнизного свеса
 * @param {number} result - результат подсчета
 */
function sumWidthLomFrontonKarnizsves() {
	for (let i = 0, max = allFormsLomFrontonKarnizsves.length; i < max; i++) {
		let formLomFrontonKarnizsves = allFormsLomFrontonKarnizsves[i];
		let shirina = Number(formLomFrontonKarnizsves.querySelector(".lf-karnizsves-length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formLomFrontonKarnizsves.querySelector(".lf-karnizsves-sum-width").value = result;
	}
}

/**
 * @function [sumWidthDoors] Функция подсчета сумарной ширины дверного проема для одной формы
 * @param {allFormsDoor} formDoor переменная для формы подсчета площади дверного проема
 * @param {number} shirina - поле ввода ширины дверного проема
 * @param {number} result - результат подсчета
 */
function sumWidthDoors() {
	for (let i = 0, max = allFormsDoor.length; i < max; i++) {
		let formDoor = allFormsDoor[i];
		let shirina = Number(formDoor.querySelector(".door_length").value);
		shirina = parseFloat(shirina);
		let result = shirina;
		formDoor.querySelector(".door_sum-width").value = result;
	}
}

/**
 * @function [sumHeightTreugFrontonFrontsves] Функция подсчета сумарной высоты фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} height - поле ввода высоты фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumHeightTreugFrontonFrontsves() {
	for (let i = 0, max = allFormsTreugFrontonFrontsves.length; i < max; i++) {
		let formTreugFrontonFrontsves = allFormsTreugFrontonFrontsves[i];
		let height = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-height").value);
		height = parseFloat(height);
		let result = height;
		formTreugFrontonFrontsves.querySelector(".tf-frontsves-sum-height").value = result;
	}
}

/**
 * @function [sumHeightLomFrontonFrontsves] Функция подсчета сумарной высоты фронтонного свеса для одной формы ломаного фронтона
 * @param {allFormsLomFrontonFrontsves} formLomFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} height - поле ввода высоты фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumHeightLomFrontonFrontsves() {
	for (let i = 0, max = allFormsLomFrontonFrontsves.length; i < max; i++) {
		let formLomFrontonFrontsves = allFormsLomFrontonFrontsves[i];
		let height = Number(formLomFrontonFrontsves.querySelector(".lf-frontsves-height").value);
		height = parseFloat(height);
		let height2 = Number(formLomFrontonFrontsves.querySelector(".lf-frontsves-height2").value);
		height2 = parseFloat(height2);
		let result = (height + height2);
		formLomFrontonFrontsves.querySelector(".lf-frontsves-sum-height").value = result;
	}
}

/**
 * @function [sumHeightTreugFrontonKarnizsves] Функция подсчета сумарной высоты карнизного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonKarnizsves} formTreugFrontonKarnizsves переменная для формы подсчета площади карнизного свеса
 * @param {number} height - поле ввода высоты карнизного свеса
 * @param {number} result - результат подсчета
 */
function sumHeightTreugFrontonKarnizsves() {
	for (let i = 0, max = allFormsTreugFrontonKarnizsves.length; i < max; i++) {
		let formTreugFrontonKarnizsves = allFormsTreugFrontonKarnizsves[i];
		let height = Number(formTreugFrontonKarnizsves.querySelector(".tf-karnizsves-height").value);
		height = parseFloat(height);
		let result = height;
		formTreugFrontonKarnizsves.querySelector(".tf-karnizsves-sum-height").value = result;
	}
}


/**
 * @function [sumPerimeters] Функция подсчета всех периметров стен со всех форм
 * @param {number} perim - переменная для поля периметра из формы
 * @param {forEach} function (el) - перебор полей периметра по всем формам
 * @param {number} sum - складываем все поля периметра из всех созданных форм
 */
function sumPerimeters() {
	let perim = document.getElementsByClassName("wf_perimeter");
	let sum = 0;
	[].forEach.call(perim, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("wf_perimeter-all-id").value = sum;
}

/**
 * @function [sumAllWidthWindows] Функция подсчета всех сумарных ширин оконных проемов
 * @param {number} widthWindows - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthWindows() {
	let widthWindows = document.getElementsByClassName("window_sum-width");
	let sum = 0;
	[].forEach.call(widthWindows, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("window_sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthDoors] Функция подсчета всех сумарных ширин дверных проемов
 * @param {number} widthDoor - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthDoors() {
	let widthDoor = document.getElementsByClassName("door_sum-width");
	let sum = 0;
	[].forEach.call(widthDoor, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("door_sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthTreugFrontonFrontsves] Функция подсчета всех сумарных ширин фронтонных свесов в треугольных фронтонах
 * @param {number} widthTreugFrontonFrontsves - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthTreugFrontonFrontsves() {
	let widthTreugFrontonFrontsves = document.getElementsByClassName("tf-frontsves-sum-width");
	let sum = 0;
	[].forEach.call(widthTreugFrontonFrontsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-frontsves-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthLomFrontonKarnizsves] Функция подсчета всех сумарных ширин карнизных свесов в ломаных фронтонах
 * @param {number} widthLomFrontonKarnizsves - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthLomFrontonKarnizsves() {
	let widthLomFrontonKarnizsves = document.getElementsByClassName("lf-karnizsves-sum-width");
	let sum = 0;
	[].forEach.call(widthLomFrontonKarnizsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-karnizsves-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthLomFrontonFrontsves] Функция подсчета всех сумарных ширин фронтонных свесов в ломаных фронтонах
 * @param {number} widthLomFrontonFrontsves - переменная для поля сумарной ширин из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthLomFrontonFrontsves() {
	let widthLomFrontonFrontsves = document.getElementsByClassName("lf-frontsves-sum-width");
	let sum = 0;
	[].forEach.call(widthLomFrontonFrontsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-frontsves-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthTreugFrontonKarnizsves] Функция подсчета всех сумарных ширин карнизных свесов в треугольных фронтонах
 * @param {number} widthTreugFrontonKarnizsves - переменная для поля сумарной ширин из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthTreugFrontonKarnizsves() {
	let widthTreugFrontonKarnizsves = document.getElementsByClassName("tf-karnizsves-sum-width");
	let sum = 0;
	[].forEach.call(widthTreugFrontonKarnizsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-karnizsves-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthLomFrontonFrontsves] Функция подсчета всех сумарных ширин фронтонных свесов в ломаных фронтонах
 * @param {number} widthLomFrontonFrontsves - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthLomFrontonFrontsves() {
	let widthLomFrontonFrontsves = document.getElementsByClassName("lf-frontsves-sum-width");
	let sum = 0;
	[].forEach.call(widthLomFrontonFrontsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-frontsves-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllHeightVneshUgol] Функция подсчета всех сумарных высот внешних углов из всех форм
 * @param {number} heightVneshUgol - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllHeightVneshUgol() {
	let heightVneshUgol = document.getElementsByClassName("ugol_sum-width");
	let sumVneshUgol = 0;
	[].forEach.call(heightVneshUgol, function (el) {
		sumVneshUgol += parseFloat(el.value);
		console.log(sumVneshUgol);
	});
	document.getElementById("ugol_sum-width-all-id").value = sumVneshUgol;
}


/**
 * @function [sumAllHeightInnerUgol] Функция подсчета всех сумарных высот внутренних углов из всех форм
 * @param {number} heightInnerUgol - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllHeightInnerUgol() {
	let heightInnerUgol = document.getElementsByClassName("ugol-inner_sum-width");
	let sumInnerUgol = 0;
	[].forEach.call(heightInnerUgol, function (el) {
		sumInnerUgol += parseFloat(el.value);
		console.log(sumInnerUgol);
	});
	document.getElementById("ugol-inner_sum-width-all-id").value = sumInnerUgol;
}

/**
 * @function [sumAllHeightTreugFrontonFrontsves] Функция подсчета всех сумарных высот фронтонных свесов в треугольных фронтонах
 * @param {number} heightTreugFrontonFrontsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
 */
function sumAllHeightTreugFrontonFrontsves() {
	let heightTreugFrontonFrontsves = document.getElementsByClassName("tf-frontsves-sum-height");
	let sum = 0;
	[].forEach.call(heightTreugFrontonFrontsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-frontsves-sum-height-all-id").value = sum;
}

/**
 * @function [sumAllHeightLomFrontonFrontsves] Функция подсчета всех сумарных высот фронтонных свесов в ломаных фронтонах
 * @param {number} heightLomFrontonFrontsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
 */
function sumAllHeightLomFrontonFrontsves() {
	let heightLomFrontonFrontsves = document.getElementsByClassName("lf-frontsves-sum-height");
	let sum = 0;
	[].forEach.call(heightLomFrontonFrontsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-frontsves-sum-height-all-id").value = sum;
}

/**
 * @function [sumAllHeightTreugFrontonKarnizsves] Функция подсчета всех сумарных высот карнизных свесов в треугольных фронтонах
 * @param {number} heightTreugFrontonKarnizsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
 */
function sumAllHeightTreugFrontonKarnizsves() {
	let heightTreugFrontonKarnizsves = document.getElementsByClassName("tf-karnizsves-sum-height");
	let sum = 0;
	[].forEach.call(heightTreugFrontonKarnizsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-karnizsves-sum-height-all-id").value = sum;
}

/**
 * @function [sumAllHeightLomFrontonKarnizsves] Функция подсчета всех сумарных высот карнизных свесов в ломаных фронтонах
 * @param {number} heightLomFrontonKarnizsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
 */
function sumAllHeightLomFrontonKarnizsves() {
	let heightLomFrontonKarnizsves = document.getElementsByClassName("lf-karnizsves-sum-height");
	let sum = 0;
	[].forEach.call(heightLomFrontonKarnizsves, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("lf-karnizsves-sum-height-all-id").value = sum;
}

/**
 * @function [sumAllSquareNotFrontonKarnizsves] Функция подсчета всех сумарных площадей карнизных свесов когда вальмовая или шатровая крыша
 */
function sumAllSquareNotFrontonKarnizsves() {
	let sum = 0;
	let sum_height = 0;
	$('.notfront-karnizsves-form').each((i, el) => {
		sum += parseFloat($(el).find('.notfront-karnizsves-length').val()) * parseFloat($(el).find('.notfront-karnizsves-height').val());
		sum_height += parseFloat($(el).find('.notfront-karnizsves-height').val());
	});
	$('.notfront-karnizsves-sum-square-all').val(sum);
	$('.notfront-karnizsves-sum-height').val(sum_height);
}

/**
 * Для чекбокса
 * показ формы расчета панелей и комплектующих для треугольных фронтонов
 * @function [showTreugolFrontonItems] добавляет класс hidden к чекбоксу с треугольным фронтоном
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormTreugolFronton] функция сброса всех данных в заполненых полях в треугольных фронтонах когда checkbox снят
 * @function [clearAllFormTreugolFronton] функция сброса всех данных в заполненых полях в треугольных фронтонах когда checkbox снят
 */
function showTreugolFrontonItems(check) {
	check = document.getElementById("check-treugol");
	if (check.checked) {
		document.getElementById("check-treugol-field").classList.remove("hidden");
		document.getElementById("img-tf-color-id").classList.remove("hidden");
		document.getElementById("img-tf-id").classList.add("hidden");
	} else {
		document.getElementById("check-treugol-field").classList.add("hidden");
		document.getElementById("img-tf-color-id").classList.add("hidden");
		document.getElementById("img-tf-id").classList.remove("hidden");
		clearAllFormTreugolFronton();
	}
}

function clearAllFormTreugolFronton() {
	let form = document.getElementById('check-treugol-field');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}


/**
 * Для чекбокса
 * показ формы расчета панелей и комплектующих для треугольных фронтонов
 * @function [showLomFrontonItems] добавляет класс hidden к чекбоксу с треугольным фронтоном
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormLomFronton] функция сброса всех данных в заполненых полях в ломаных фронтонах когда checkbox снят
 */
function showLomFrontonItems(check) {
	check = document.getElementById("check-lom");
	if (check.checked) {
		document.getElementById("check-lom-field").classList.remove("hidden");
		document.getElementById("img-lom-color-id").classList.remove("hidden");
		document.getElementById("img-lom-id").classList.add("hidden");
	} else {
		document.getElementById("check-lom-field").classList.add("hidden");
		document.getElementById("img-lom-color-id").classList.add("hidden");
		document.getElementById("img-lom-id").classList.remove("hidden");
		clearAllFormLomFronton();
	}

}

function clearAllFormLomFronton() {
	let form = document.getElementById('check-lom-field');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';
}

let checkboxLom = document.getElementById('check-lom');
checkboxLom.addEventListener('click', clearAllFormLomFronton);


/**
 * Для чекбокса
 * показ формы расчета панелей и комплектующих когда нет фронтонов фронтонов
 * @function [showNotFrontonItems] добавляет класс hidden к чекбоксу с треугольным фронтоном
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 * @function [clearAllFormNotFronton] функция сброса всех данных в заполненых полях когда нет фронтонов и когда checkbox снят
 */
function showNotFrontonItems(check) {
	check = document.getElementById("check-notfront");
	if (check.checked) {
		document.getElementById("check-notfront-field").classList.remove("hidden");
		document.getElementById("img-notfront-color-id").classList.remove("hidden");
		document.getElementById("img-notfront-id").classList.add("hidden");
	} else {
		document.getElementById("check-notfront-field").classList.add("hidden");
		document.getElementById("img-notfront-color-id").classList.add("hidden");
		document.getElementById("img-notfront-id").classList.remove("hidden");
		clearAllFormNotFronton();
	}
}

function clearAllFormNotFronton() {
	let form = document.getElementById('check-notfront-field');
	let inputs = form.getElementsByTagName('input');
	for (let input of inputs)
		input.value = '';

}

let checkboxNotFronton = document.getElementById('check-notfront');
checkboxNotFronton.addEventListener('click', clearAllFormNotFronton);


/**
 * Кнопка показа формы для количества окон в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnWindow] remuveBtnWindow - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-windows").addEventListener("click", function () {
$(document).on('click', '.show-form-windows', function () {
	document.getElementById("windows-id").classList.remove("hidden");
	document.getElementById("add-form-window-id").classList.remove("hidden");
	document.getElementById("windows-form-id").classList.add("hidden");
	remuveBtnWindow();
});

function remuveBtnWindow() {
	document.getElementById("show-form-windows-id").classList.add("hidden");
}

/**
 * Кнопка показа формы для количества дверей в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnDoors] remuveBtnDoors - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-doors").addEventListener("click", function () {
$(document).on('click', '.show-form-doors', function () {
	document.getElementById("doors-id").classList.remove("hidden");
	document.getElementById("add-form-door-id").classList.remove("hidden");
	document.getElementById("doors-form-id").classList.add("hidden");
	remuveBtnDoors();
});

function remuveBtnDoors() {
	document.getElementById("show-form-doors-id").classList.add("hidden");
}

/**
 * Кнопка показа формы для количества внешних углов в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnUgolsVnes] remuveBtnUgolsVnes - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-ugols-vnesh").addEventListener("click", function () {
$(document).on('click', '.show-form-ugols-vnesh', function () {
	document.getElementById("ugols-vnesh-id").classList.remove("hidden");
	document.getElementById("add-form-ugols-vnesh-id").classList.remove("hidden");
	document.getElementById("ugol-vnesh-form-id").classList.add("hidden");
	remuveBtnUgolsVnesh();
});

function remuveBtnUgolsVnesh() {
	document.getElementById("show-form-ugols-vnesh-id").classList.add("hidden");
}

/**
 * Кнопка показа формы для количества внутренних углов в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnUgolsInnerh] remuveBtnUgolsInnerh - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-ugols-inner").addEventListener("click", function () {
$(document).on('click', '.show-form-ugols-inner', function () {
	document.getElementById("ugols-inner-id").classList.remove("hidden");
	document.getElementById("add-form-ugols-inner-id").classList.remove("hidden");
	document.getElementById("ugol-inner-form-id").classList.add("hidden");
	remuveBtnUgolsInnerh();
});

function remuveBtnUgolsInnerh() {
	document.getElementById("show-form-ugols-inner-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества фронтонных свесов в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfFrontsves] remuveBtnLfFrontsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-frontsves").addEventListener("click", function () {
$(document).on('click', '.show-form-lf-frontsves', function () {
	document.getElementById("lf-frontsves-id").classList.remove("hidden");
	document.getElementById("add-form-lf-frontsves-id").classList.remove("hidden");
	document.getElementById("lf-frontsves-form-id").classList.add("hidden");
	remuveBtnlfFrontsves();
});

function remuveBtnlfFrontsves() {
	document.getElementById("show-form-lf-frontsves-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества карнизных свесов в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfKarnizsves] remuveBtnLfKarnizsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-karnizsves").addEventListener("click", function () {
$(document).on('click', '.show-form-lf-karnizsves', function () {
	document.getElementById("lf-karnizsves-id").classList.remove("hidden");
	document.getElementById("add-form-lf-karnizsves-id").classList.remove("hidden");
	document.getElementById("lf-karnizsves-form-id").classList.add("hidden");
	remuveBtnlfKarnizsves();
});

function remuveBtnlfKarnizsves() {
	document.getElementById("show-form-lf-karnizsves-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества фронтонных свесов в разделе треугольный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtntfFrontsves] remuveBtntfFrontsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-tf-frontsves").addEventListener("click", function () {
$(document).on('click', '.show-form-tf-frontsves', function () {
	document.getElementById("tf-frontsves-id").classList.remove("hidden");
	document.getElementById("add-form-tf-frontsves-id").classList.remove("hidden");
	document.getElementById("tf-frontsves-form-id").classList.add("hidden");
	remuveBtntfFrontsves();
});

function remuveBtntfFrontsves() {
	document.getElementById("show-form-tf-frontsves-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества карнизных свесов в разделе треугольный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtntfKarnizsves] remuveBtntfKarnizsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-tf-karnizsves").addEventListener("click", function () {
$(document).on('click', '.show-form-tf-karnizsves', function () {
	document.getElementById("tf-karnizsves-id").classList.remove("hidden");
	document.getElementById("add-form-tf-karnizsves-id").classList.remove("hidden");
	document.getElementById("tf-karnizsves-form-id").classList.add("hidden");
	remuveBtntfKarnizsves();
});

function remuveBtntfKarnizsves() {
	document.getElementById("show-form-tf-karnizsves-id").classList.add("hidden");
}

/**
 * Кнопка добавления новой формы для стен в разделе стены
 * @param {node} node - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStenaId} newFormStenaId - добавляем новую форму
 * @function [copyForm] el - функция копирования формы
 */
let newFormStenaId = 1;
let node = document.getElementById("walls-form-id").cloneNode(true);

// document.querySelector(".add-form").addEventListener("click", function () {
$(document).on('click', '.add-form', function () {
	let newClonedNode = node.cloneNode(true);
	document.querySelector(".walls").appendChild(newClonedNode);
	newClonedNode.id = "walls-form-id-" + newFormStenaId;
	newClonedNode.querySelector(".wf_length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newClonedNode.querySelector(".wf_length").value = '';
	newClonedNode.querySelector(".wf_height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	newClonedNode.querySelector(".wf_height").value = '';
	funcStena();
	newFormStenaId++;
});

function copyForm(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".walls").appendChild(newArticleDiv);
	newArticleDiv.id = "walls-form-id-" + newFormStenaId;
	newArticleDiv.querySelector(".wf_length").name = 'data[Стены][' + newFormStenaId + '][Длина]';
	newArticleDiv.querySelector(".wf_height").name = 'data[Стены][' + newFormStenaId + '][Высота]';
	funcStena();
	newFormStenaId++;
}

/**
 * Кнопка добавления новой формы для оконных проемов в разделе стены
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormWindow} newFormWindow - добавляем новую форму
 * @function [copyFormWindow] el - функция копирования формы
 */
let newFormWindow = 1;
let nodeWindow = document.getElementById("windows-form-id").cloneNode(true);
// document.querySelector(".add-form-window").addEventListener("click", function () {
$(document).on('click', '.add-form-window', function () {
	let newClonedNode = nodeWindow.cloneNode(true);
	document.querySelector(".windows").appendChild(newClonedNode);
	newClonedNode.id = "windows-form-id-" + newFormWindow;
	newClonedNode.querySelector(".window_length").name = 'data[Окна][' + newFormWindow + '][Ширина]';
	newClonedNode.querySelector(".window_length").value = '';
	newClonedNode.querySelector(".window_height").name = 'data[Окна][' + newFormWindow + '][Высота]';
	newClonedNode.querySelector(".window_height").value = '';
	newClonedNode.querySelector(".select-selected").name = 'data[Окна][' + newFormWindow + '][Исполнение]';
	funcWindow();
	newFormWindow++;
});

function copyFormWindow(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".windows").appendChild(newArticleDiv);
	newArticleDiv.id = "windows-form-id-" + newFormWindow;
	newArticleDiv.querySelector(".window_length").name = 'data[Окна][' + newFormWindow + '][Ширина]';
	newArticleDiv.querySelector(".window_height").name = 'data[Окна][' + newFormWindow + '][Высота]';
	newArticleDiv.querySelector(".select-selected").name = 'data[Окна][' + newFormWindow + '][Исполнение]';
	funcWindow();
	newFormWindow++;
}


/**
 * Кнопка добавления новой формы для дверных проемов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormDoor} newFormDoor - добавляем новую форму
 * @function [copyFormDoor] el - функция копирования формы
 */
let newFormDoor = 1;
let nodeDoor = document.getElementById("doors-form-id").cloneNode(true);

// document.querySelector(".add-form-door").addEventListener("click", function () {
$(document).on('click', '.add-form-door', function () {
	let newClonedNode = nodeDoor.cloneNode(true);
	document.querySelector(".doors").appendChild(newClonedNode);
	newClonedNode.id = "doors-form-id-" + newFormDoor;
	newClonedNode.querySelector(".door_length").name = 'data[Двери][' + newFormDoor + '][Ширина]';
	newClonedNode.querySelector(".door_length").value = '';
	newClonedNode.querySelector(".door_height").name = 'data[Двери][' + newFormDoor + '][Высота]';
	newClonedNode.querySelector(".door_height").value = '';
	newClonedNode.querySelector(".select-selected").name = 'data[Двери][' + newFormDoor + '][Исполнение]';
	funcDoor();
	newFormDoor++;
});

function copyFormDoor(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".doors").appendChild(newArticleDiv);
	newArticleDiv.id = "doors-form-id-" + newFormDoor;
	newArticleDiv.querySelector(".door_length").name = 'data[Двери][' + newFormDoor + '][Ширина]';
	newArticleDiv.querySelector(".door_height").name = 'data[Двери][' + newFormDoor + '][Высота]';
	newArticleDiv.querySelector(".select-selected").name = 'data[Двери][' + newFormDoor + '][Исполнение]';
	funcDoor();
	newFormDoor++;
}

/**
 * Кнопка добавления новой формы для подсчета высоты внешних углов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormVneshUgol} newFormVneshUgol - добавляем новую форму
 * @function [copyFormUgolVnesh] el - функция копирования формы
 */
let newFormVneshUgol = 1;
let nodeVneshUgol = document.getElementById("ugol-vnesh-form-id").cloneNode(true);

// document.querySelector(".add-form-ugols-vnesh").addEventListener("click", function () {
$(document).on('click', '.add-form-ugols-vnesh', function () {
	let newClonedNode = nodeVneshUgol.cloneNode(true);
	document.querySelector(".ugols-vnesh").appendChild(newClonedNode);
	newClonedNode.id = "ugol-vnesh-form-id-" + newFormVneshUgol;
	newClonedNode.name = "ugol-vnesh-form-id-" + newFormVneshUgol;
	newFormVneshUgol++;
});

function copyFormUgolVnesh(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".ugols-vnesh").appendChild(newArticleDiv);
	newArticleDiv.id = "ugol-vnesh-form-id-" + newFormVneshUgol;
	newArticleDiv.name = "ugol-vnesh-form-id-" + newFormVneshUgol;
	newFormVneshUgol++;
}


/**
 * Кнопка добавления новой формы для подсчета высоты внутренних углов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormInnerUgol} newFormInnerUgol - добавляем новую форму
 * @function [copyFormUgolInner] el - функция копирования формы
 */
let newFormInnerUgol = 1;
let nodeInnerUgol = document.getElementById("ugol-inner-form-id").cloneNode(true);

// document.querySelector(".add-form-ugols-inner").addEventListener("click", function () {
$(document).on('click', '.add-form-ugols-inner', function () {
	let newClonedNode = nodeInnerUgol.cloneNode(true);
	document.querySelector(".ugols-inner").appendChild(newClonedNode);
	newClonedNode.id = "gol-inner-form-id-" + newFormInnerUgol;
	newClonedNode.name = "ugol-inner-form-" + newFormInnerUgol;
	newFormInnerUgol++;
});

function copyFormUgolInner(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".ugols-inner").appendChild(newArticleDiv);
	newArticleDiv.id = "gol-inner-form-id-" + newFormInnerUgol;
	newArticleDiv.name = "ugol-inner-form-" + newFormInnerUgol;
	newFormInnerUgol++;
}


/**
 * Кнопка добавления новой формы для размера и площади фронтона в разделе треугольный фронтон
 * @param {nodeTreugFronton} nodeTreugFronton - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFronton} newFormTreugFronton - добавляем новую форму
 * @function [copyFormTF] el - функция копирования формы
 */
let newFormTreugFronton = 1;
let nodeTreugFronton = document.getElementById("tf-form-id").cloneNode(true);

// document.querySelector(".add-form-tf").addEventListener("click", function () {
$(document).on('click', '.add-form-tf', function () {
	let newClonedNode = nodeTreugFronton.cloneNode(true);
	document.querySelector(".tf").appendChild(newClonedNode);
	newClonedNode.id = "tf-form-id-" + newFormTreugFronton;
	newClonedNode.name = "tf-form-id-" + newFormTreugFronton;
	newFormTreugFronton++;
});

function copyFormTF(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".tf").appendChild(newArticleDiv);
	newArticleDiv.id = "tf-form-id-" + newFormTreugFronton;
	newArticleDiv.name = "tf-form-id-" + newFormTreugFronton;
	newFormTreugFronton++;
}

/**
 * Кнопка добавления новой формы для размера и площади фронтона в разделе ломаный фронтон
 * @param {nodeLomFronton} nodeLomFronton - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFronton} newFormLomFronton - добавляем новую форму
 * @function [copyFormLF] el - функция копирования формы
 */
let newFormLomFronton = 1;
let nodeLomFronton = document.getElementById("lf-form-id").cloneNode(true);

// document.querySelector(".add-form-lf").addEventListener("click", function () {
$(document).on('click', '.add-form-lf', function () {
	let newClonedNode = nodeLomFronton.cloneNode(true);
	document.querySelector(".lf").appendChild(newClonedNode);
	newClonedNode.id = "lf-form-id-" + newFormLomFronton;
	newClonedNode.name = "lf-form-id-" + newFormLomFronton;
	newFormLomFronton++;
});

function copyFormLF(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".lf").appendChild(newArticleDiv);
	newArticleDiv.id = "lf-form-id-" + newFormLomFronton;
	newArticleDiv.name = "lf-form-id-" + newFormLomFronton;
	newFormLomFronton++;
}

/**
 * Кнопка добавления новой формы для фронтонных свесов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonFrontsves} newFormTreugFrontonFrontsves - добавляем новую форму
 * @function [copyFormTFFrontsves] el - функция копирования формы
 */
let newFormTreugFrontonFrontsves = 1;
let nodeTreugFrontonFrontsves = document.getElementById("tf-frontsves-form-id").cloneNode(true);

// document.querySelector(".add-form-tf-frontsves").addEventListener("click", function () {
$(document).on('click', '.add-form-tf-frontsves', function () {
	let newClonedNode = nodeTreugFrontonFrontsves.cloneNode(true);
	document.querySelector(".tf-frontsves").appendChild(newClonedNode);
	newClonedNode.id = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newClonedNode.name = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newFormTreugFrontonFrontsves++;
});

function copyFormTFFrontsves(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".tf-frontsves").appendChild(newArticleDiv);
	newArticleDiv.id = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newArticleDiv.name = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newFormTreugFrontonFrontsves++;
}

/**
 * Кнопка добавления новой формы для фронтонных свесов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonFrontsves} newFormLomFrontonFrontsves - добавляем новую форму
 * @function [copyFormLFFrontsves] el - функция копирования формы
 */
let newFormLomFrontonFrontsves = 1;
let nodeLomFrontonFrontsves = document.getElementById("lf-frontsves-form-id").cloneNode(true);

// document.querySelector(".add-form-lf-frontsves").addEventListener("click", function () {
$(document).on('click', '.add-form-lf-frontsves', function () {
	let newClonedNode = nodeLomFrontonFrontsves.cloneNode(true);
	document.querySelector(".lf-frontsves").appendChild(newClonedNode);
	newClonedNode.id = "lf-frontsves-form-id-" + newFormLomFrontonFrontsves;
	newClonedNode.name = "lf-frontsves-form-id-" + newFormLomFrontonFrontsves;
	newFormLomFrontonFrontsves++;
});

function copyFormLFFrontsves(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".lf-frontsves").appendChild(newArticleDiv);
	newArticleDiv.id = "lf-frontsves-form-id-" + newFormLomFrontonFrontsves;
	newArticleDiv.name = "lf-frontsves-form-id-" + newFormLomFrontonFrontsves;
	newFormLomFrontonFrontsves++;
}

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonKarnizsves} newFormTreugFrontonKarnizsves - добавляем новую форму
 * @function [copyFormTFKarnizsves] el - функция копирования формы
 */
let newFormTreugFrontonKarnizsves = 1;
let nodeTreugFrontonKarnizsves = document.getElementById("tf-karnizsves-form-id").cloneNode(true);

// document.querySelector(".add-form-tf-karnizsves").addEventListener("click", function () {
$(document).on('click', '.add-form-tf-karnizsves', function () {
	let newClonedNode = nodeTreugFrontonKarnizsves.cloneNode(true);
	document.querySelector(".tf-karnizsves").appendChild(newClonedNode);
	newClonedNode.id = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newClonedNode.name = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newFormTreugFrontonKarnizsves++;
});

function copyFormTFKarnizsves(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".tf-karnizsves").appendChild(newArticleDiv);
	newArticleDiv.id = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newArticleDiv.name = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newFormTreugFrontonKarnizsves++;
}

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonKarnizsves} newFormLomFrontonKarnizsves - добавляем новую форму
 * @function [copyFormLFKarnizsves] el - функция копирования формы
 */
let newFormLomFrontonKarnizsves = 1;
let nodeLomFrontonKarnizsves = document.getElementById("lf-karnizsves-form-id").cloneNode(true);

// document.querySelector(".add-form-lf-karnizsves").addEventListener("click", function () {
$(document).on('click', '.add-form-lf-karnizsves', function () {
	let newClonedNode = nodeLomFrontonKarnizsves.cloneNode(true);
	document.querySelector(".lf-karnizsves").appendChild(newClonedNode);
	newClonedNode.id = "lf-karnizsves-form-id-" + newFormLomFrontonKarnizsves;
	newClonedNode.name = "lf-karnizsves-form-id-" + newFormLomFrontonKarnizsves;
	newFormLomFrontonKarnizsves++;
});

function copyFormLFKarnizsves(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".lf-karnizsves").appendChild(newArticleDiv);
	newArticleDiv.id = "lf-karnizsves-form-id-" + newFormLomFrontonKarnizsves;
	newArticleDiv.name = "lf-karnizsves-form-id-" + newFormLomFrontonKarnizsves;
	newFormLomFrontonKarnizsves++;
}

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе без фронтонов
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormNotFrontonKarnizsves} newFormNotFrontonKarnizsves - добавляем новую форму
 * @function [copyFormNotfront] el - функция копирования формы
 */
let newFormNotFrontonKarnizsves = 1;
let nodeNotFrontonKarnizsves = document.getElementById("notfront-karnizsves-form-id").cloneNode(true);

// document.querySelector(".add-form-notfront-karnizsves").addEventListener("click", function () {
$(document).on('click', '.add-form-notfront-karnizsves', function () {
	let newClonedNode = nodeNotFrontonKarnizsves.cloneNode(true);
	document.querySelector(".notfront-karnizsves").appendChild(newClonedNode);
	newClonedNode.id = "notfront-karnizsves-form-id-" + newFormNotFrontonKarnizsves;
	newClonedNode.name = "notfront-karnizsves-form-id-" + newFormNotFrontonKarnizsves;
	newFormNotFrontonKarnizsves++;
});

function copyFormNotfront(el) {
	let articleDiv = el.parentElement;
	let newArticleDiv = articleDiv.cloneNode(true);
	document.querySelector(".notfront-karnizsves").appendChild(newArticleDiv);
	newArticleDiv.id = "notfront-karnizsves-form-id-" + newFormNotFrontonKarnizsves;
	newArticleDiv.name = "notfront-karnizsves-form-id-" + newFormNotFrontonKarnizsves;
	newFormNotFrontonKarnizsves++;
}

/**
 * @function [deleteForm] Функция удаления формы для стен
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimeters()] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas()] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteForm(btn) {
	let forms = document.getElementsByClassName('walls-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumPerimeters();
		sumAreas();
	}
}

/**
 * @function [deleteFormTreugFronton] Функция удаления формы для размера треугольного фронтона
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAreasTreugolFronton()] вызываем функцию подсчета всех площадей со всех форм для размера треугольного фронтона
 */
function deleteFormTreugFronton(btn) {
	let forms = document.getElementsByClassName('tf-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAreasTreugolFronton();
	}
}

/**
 * @function [deleteFormLomFronton] Функция удаления формы для размера ломаного фронтона
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAreasLomFronton()] вызываем функцию подсчета всех площадей со всех форм для размера ломаного фронтона
 */
function deleteFormLomFronton(btn) {
	let forms = document.getElementsByClassName('lf-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAreasLomFronton();
	}
}

/**
 * @function [deleteFormLomFrontonWindow] Функция удаления формы оконных проемов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonWindows()] вызываем функцию подсчета всех ширин со всех форм оконных проемов для ломаных фронтонов
 * @function [sumAreasLomFrontonWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для ломаных фронтонов
 */
function deleteFormLomFrontonWindow(btn) {
	let forms = document.getElementsByClassName('lf-window-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthLomFrontonWindows();
		sumAreasLomFrontonWindow();
	}
}

/**
 * @function [deleteFormTreugFrontonFrontsves] Функция удаления формы фронтонных свесов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonFrontsves] вызываем функцию подсчета всех ширин со всех форм фронтонных свесов для треугольных фронтонов
 * @function [sumAllHeightTreugFrontonFrontsves] вызываем функцию подсчета всех высот со всех форм фронтонных свесов для треугольных фронтонов
 * @function [sumAreasTreugFrontonFrontsves] вызываем функцию подсчета всех площадей фронтонных свесов со всех форм для треугольных фронтонов
 * @function [deleteTreugFrontonFrontsves] удаляем обвертку у формы
 */
function deleteFormTreugFrontonFrontsves(btn) {
	let forms = document.getElementsByClassName('tf-frontsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthTreugFrontonFrontsves();
		sumAllHeightTreugFrontonFrontsves();
		sumAreasTreugFrontonFrontsves();
	}
	if (forms.length == 1) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.getElementById("tf-frontsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");
		deleteTreugFrontonFrontsves();
	}
	if (forms.length == 0) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");
		deleteTreugFrontonFrontsves();
		sumAllWidthTreugFrontonFrontsves();
		sumAllHeightTreugFrontonFrontsves();
		sumAreasTreugFrontonFrontsves();
	}
	//return [this];
}

function deleteTreugFrontonFrontsves() {
	let wrpFormInnerUgol = document.querySelector('.tf-frontsves-form');
	if (!wrpFormInnerUgol) {
		document.getElementById("tf-frontsves-id").classList.add("hidden");
	}
}

/**
 * @function [deleteFormLomFrontonFrontsves] Функция удаления формы фронтонных свесов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonFrontsves] вызываем функцию подсчета всех ширин со всех форм фронтонных свесов для ломаных фронтонов
 * @function [sumAllHeightLomFrontonFrontsves] вызываем функцию подсчета всех высот со всех форм фронтонных свесов для ломаных фронтонов
 * @function [sumAreasLomFrontonFrontsves] вызываем функцию подсчета всех площадей фронтонных свесов со всех форм для ломаных фронтонов
 */
function deleteFormLomFrontonFrontsves(btn) {
	let forms = document.getElementsByClassName('lf-frontsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthLomFrontonFrontsves();
		sumAllHeightLomFrontonFrontsves();
		sumAreasLomFrontonFrontsves();
	}
	if (forms.length == 1) {
		document.querySelector(".add-form-lf-frontsves").classList.add("hidden");
		document.getElementById("lf-frontsves-id").classList.add("hidden");
		document.querySelector(".show-form-lf-frontsves").classList.remove("hidden");
		deleteLomFrontonFrontsves();
	}
	if (forms.length == 0) {
		document.querySelector(".add-formlf-frontsves").classList.add("hidden");
		document.querySelector(".show-form-lf-frontsves").classList.remove("hidden");
		deleteLomFrontonFrontsves();
		sumAllWidthLomFrontonFrontsves();
		sumAllHeightLomFrontonFrontsves();
		sumAreasLomFrontonFrontsves();
	}
}

function deleteLomFrontonFrontsves() {
	let wrpFormInnerUgol = document.querySelector('.lf-frontsves-form');
	if (!wrpFormInnerUgol) {
		document.getElementById("lf-frontsves-id").classList.add("hidden");
	}
}

/**
 * @function [deleteFormTreugFrontonKarnizsves] Функция удаления формы карнизных свесов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonKarnizsves] вызываем функцию подсчета всех ширин со всех форм карнизных свесов для треугольных фронтонов
 * @function [sumAllHeightTreugFrontonKarnizsves] вызываем функцию подсчета всех высот со всех форм карнизных свесов для треугольных фронтонов
 * @function [sumAreasTreugFrontonKarnizsves] вызываем функцию подсчета всех площадей карнизных свесов со всех форм для треугольных фронтонов
 */
function deleteFormTreugFrontonKarnizsves(btn) {
	let forms = document.getElementsByClassName('tf-karnizsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();
	}
	if (forms.length == 1) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.getElementById("tf-karnizsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");
		deleteTreugFrontonKarnizsves();
	}
	if (forms.length == 0) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");
		deleteTreugFrontonKarnizsves();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();
	}
}

function deleteTreugFrontonKarnizsves() {
	let wrpFormInnerUgol = document.querySelector('.tf-karnizsves-form');
	if (!wrpFormInnerUgol) {
		document.getElementById("tf-karnizsves-id").classList.add("hidden");
	}
}

/**
 * @function [deleteFormLomFrontonKarnizsves] Функция удаления формы карнизных свесов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonKarnizsves] вызываем функцию подсчета всех ширин со всех форм карнизных свесов для ломаных фронтонов
 * @function [sumAllHeightLomFrontonKarnizsves] вызываем функцию подсчета всех высот со всех форм карнизных свесов для ломаных фронтонов
 * @function [sumAreasLomFrontonKarnizsves] вызываем функцию подсчета всех площадей карнизных свесов со всех форм для ломаных фронтонов
 */
function deleteFormLomFrontonKarnizsves(btn) {
	let forms = document.getElementsByClassName('lf-karnizsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthLomFrontonKarnizsves();
		sumAllHeightLomFrontonKarnizsves();
		sumAreasLomFrontonKarnizsves();
	}
	if (forms.length == 1) {
		document.querySelector(".add-form-lf-karnizsves").classList.add("hidden");
		document.getElementById("lf-karnizsves-id").classList.add("hidden");
		document.querySelector(".show-form-lf-karnizsves").classList.remove("hidden");
		deleteLomFrontonKarnizsves();
	}
	if (forms.length == 0) {
		document.querySelector(".add-form-lf-karnizsves").classList.add("hidden");
		document.querySelector(".show-form-lf-karnizsves").classList.remove("hidden");
		deleteLomFrontonKarnizsves();
		sumAllWidthLomFrontonKarnizsves();
		sumAllHeightLomFrontonKarnizsves();
		sumAreasLomFrontonKarnizsves();
	}
}

function deleteLomFrontonKarnizsves() {
	let wrpFormInnerUgol = document.querySelector('.lf-karnizsves-form');
	if (!wrpFormInnerUgol) {
		document.getElementById("lf-karnizsves-id").classList.add("hidden");
	}
}

/**
 * @function [deleteFormNotFrontonKarnizsves] Функция удаления формы когда вальмовая или шатровая крыша
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthNotFrontonKarnizsves] вызываем функцию подсчета всех ширин со всех форм карнизных свесов для ломаных фронтонов
 * @function [sumAllHeightNotFrontonKarnizsves] вызываем функцию подсчета всех высот со всех форм карнизных свесов для ломаных фронтонов
 * @function [sumAreasNotFrontonKarnizsves] вызываем функцию подсчета всех площадей карнизных свесов со всех форм для ломаных фронтонов
 */
function deleteFormNotFrontonKarnizsves(btn) {
	let forms = document.getElementsByClassName('notfront-karnizsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
	}
}

/**
 * @function [deleteFormWindow] Функция удаления формы оконных проемов в стенах
 * @function [deleteFormWindowTemplate] Функция удаления формы оконных проемов в стенах для второй формы
 * @function deleteWrpFormWindow] Функция удаления обвертки для оконных проемов в стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthWindows] вызываем функцию подсчета всех ширин со всех формах оконных проемах для стен
 * @function [sumAreasWindow] вызываем функцию подсчета всех площадей оконных проемов со всех форм для стен
 */
function deleteFormWindow(btn) {
	let forms = document.getElementsByClassName('windows-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		document.getElementById("windows-id").classList.remove("hidden");
		sumAllWidthWindows();
		sumAreasWindow();
	}
	if (forms.length == 1) {
		document.querySelector(".add-form-window").classList.add("hidden");
		document.getElementById("windows-id").classList.add("hidden");
		document.getElementById("show-form-windows-id").classList.remove("hidden");
	}
	if (forms.length == 0) {
		document.querySelector(".add-form-window").classList.add("hidden");
		document.querySelector(".show-form-windows").classList.remove("hidden");
		deleteWrpFormWindow();
		sumAllWidthWindows();
		sumAreasWindow();

	}

	function deleteWrpFormWindow() {
		let wrpFormWindow = document.querySelector('.windows-form');
		if (!wrpFormWindow) {
			document.getElementById("windows-id").classList.add("hidden");
		}
	}
}

/**
 * @function [deleteFormDoor] Функция удаления формы для дверных проемов
 * @function [deleteFormDoorTemplate] Функция удаления формы дверных проемов в стенах для второй формы
 * @function [deleteWrpFormDoor] Функция удаления обвертки для дверных проемов в стенах
 * @param {formsDoor} formsDoor - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthDoors] вызываем функцию подсчета всех сумарных ширин со всех форм для дверных проемов
 * @function [sumAreasDoor] вызываем функцию подсчета всех площадей со всех форм для дверных проемов
 */
function deleteFormDoor(btn) {
	let formsDoor = document.getElementsByClassName("doors-form");
	if (formsDoor.length > 1) {
		btn.parentElement.remove();
		document.getElementById("doors-id").classList.remove("hidden");
		sumAllWidthDoors();
		sumAreasDoor();
	}
	if (formsDoor.length == 1) {
		document.querySelector(".add-form-door").classList.add("hidden");
		document.getElementById("doors-id").classList.add("hidden");
		document.getElementById("show-form-doors-id").classList.remove("hidden");
	}
	if (formsDoor.length == 0) {
		document.querySelector(".add-form-door").classList.add("hidden");
		document.querySelector(".show-form-doors").classList.remove("hidden");
		deleteWrpFormDoor();
		sumAllWidthDoors();
		sumAreasDoor();
	}

	function deleteWrpFormDoor() {
		let wrpFormDoor = document.querySelector('.doors-form');
		if (!wrpFormDoor) {
			document.getElementById("doors-id").classList.add("hidden");
		}
	}
}

/**
 * @function [deleteFormVneshUgol] Функция удаления формы для подсчета внешних углов
 * @param {formsVneshUgol} formsVneshUgol - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllHeightVneshUgol] вызываем функцию подсчета всех высот со всех форм для внешних углов
 */
function deleteFormVneshUgol(btn) {
	let formsVneshUgol = document.getElementsByClassName('ugol-vnesh-form');
	if (formsVneshUgol.length > 1) {
		btn.parentElement.remove();
		sumAllHeightVneshUgol();
	}
	if (formsVneshUgol.length == 1) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.getElementById("ugols-vnesh-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");
		deleteWrpVneshUgol();
	}
	if (formsVneshUgol.length == 0) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");
		deleteWrpVneshUgol();
		sumAllHeightVneshUgol();
	}
}

function deleteWrpVneshUgol() {
	let wrpFormVneshUgol = document.querySelector('.ugol-vnesh-form');
	if (!wrpFormVneshUgol) {
		document.getElementById("ugols-vnesh-id").classList.add("hidden");
	}
}

/**
 * @function [deleteFormInnerUgol] Функция удаления формы для подсчета внутренних углов
 * @param {formsInnerUgol} formsVneshUgol - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllHeightInnerUgol] вызываем функцию подсчета всех высот со всех форм для внутренних углов
 */
function deleteFormInnerUgol(btn) {
	let formsInnerUgol = document.getElementsByClassName('ugol-inner-form');
	if (formsInnerUgol.length > 1) {
		btn.parentElement.remove();
		sumAllHeightInnerUgol();
	}
	if (formsInnerUgol.length == 1) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.getElementById("ugols-inner-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");
		deleteWrpInnerUgol();
	}
	if (formsInnerUgol.length == 0) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");
		deleteWrpInnerhUgol();
		sumAllHeightInnerUgol();
	}
}

function deleteWrpInnerUgol() {
	let wrpFormInnerUgol = document.querySelector('.ugol-inner-form');
	if (!wrpFormInnerUgol) {
		document.getElementById("ugols-inner-id").classList.add("hidden");
	}
}