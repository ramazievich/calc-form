'use strict';
/**
 * @function [funcStena] Функция подсчета площади стены для одной формы
 * @param {allForms} allForms переменная для формы подсчета площади стен
 * @param {number} stena - поле ввода количества стен
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
		form.querySelector(".wf_result-wall").value = result;
	}
}

/**
 * @function [funcWindow] Функция подсчета площади оконного проема для одной формы
 * @param {allFormsWindow} allFormsWindow переменная для формы подсчета площади оконнх проемов
 * @param {number} okno - поле ввода количества оконных проемов
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
		form.querySelector(".window_result-window").value = result;
	}
}

/**
 * @function [funcTreugFrontonWindow] Функция подсчета площади оконного проема для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonWindow} allFormsTreugFrontonWindow переменная для формы подсчета площади оконных проемов в треугольных фронтонах
 * @param {number} okno - поле ввода количества оконных проемов в треугольных фронтонах
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
		form.querySelector(".tf-window-result").value = result;
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
		form.querySelector(".lf-window-result").value = result;
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
		form.querySelector(".tf-door-result").value = result;
	}
}

/**
 * @function [funcLomFrontonDoor] Функция подсчета площади дверного проема для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonDoor} allFormsLomFrontonDoor переменная для формы подсчета площади дверных проемов в ломаных фронтонах
 * @param {number} dver - поле ввода количества оконных проемов в ломаных фронтонах
 * @param {number} shirina - поле ввода ширины оконного проема в ломаных фронтонах
 * @param {number} visota - поле ввода высоты оконного проема в ломаных фронтонах
 * @param {number} result - результат подсчета
 */

// let allFormsLomFrontonDoor = document.querySelectorAll(".lf-door-form");
// console.log(allFormsTreugFrontonDoor);
//
// function funcLomFrontonDoor() {
// 	allFormsLomFrontonDoor = document.querySelectorAll(".lf-door-form");
// 	for (let i = 0, max = allFormsLomFrontonDoor.length; i < max; i++) {
// 		let form = allFormsLomFrontonDoor[i];
// 		console.log(form.querySelector(".lf-door-num"));
// 		let dver = Number(form.querySelector(".lf-door-num").value);
// 		dver = parseFloat(dver);
// 		let shirina = Number(form.querySelector(".lf-door-length").value);
// 		shirina = parseFloat(shirina);
// 		let visota = Number(form.querySelector(".lf-door-height").value);
// 		visota = parseFloat(visota);
// 		let result = (shirina + visota) * dver;
// 		form.querySelector(".lf-door-result").value = result;
// 	}
// }

/**
 * @function [funcTreugFrontonFrontsves] Функция подсчета площади фронтонного свеса для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonFrontsves} allFormsTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса в треугольных фронтонах
 * @param {number} frontsves - поле ввода количества фронтонных свесов в треугольных фронтонах
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
		form.querySelector(".tf-frontsves-result").value = result;
	}
}

/**
 * @function [funcLomFrontonFrontsves] Функция подсчета площади фронтонного свеса для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonFrontsves} allFormsLomFrontonFrontsves переменная для формы подсчета площади фронтонного свеса в ломаных фронтонах
 * @param {number} frontsves - поле ввода количества фронтонных свесов в ломаных фронтонах
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
		form.querySelector(".lf-frontsves-result").value = result;
	}
}

/**
 * @function [funcTreugFrontonKarnizsves] Функция подсчета площади карнизного свеса для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonKarnizsves} allFormsTreugFrontonKarnizsves переменная для формы подсчета площади карнизного свеса в треугольных фронтонах
 * @param {number} karnizsves - поле ввода количества фронтонных свесов в треугольных фронтонах
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
		form.querySelector(".tf-karnizsves-result").value = result;
	}
}

/**
 * @function [funcLomFrontonKarnizsves] Функция подсчета площади карнизного свеса для одной формы в ломаных фронтонах
 * @param {allFormsLomFrontonKarnizsves} allFormsLomFrontonKarnizsves переменная для формы подсчета площади карнизного свеса в ломаных фронтонах
 * @param {number} karnizsves - поле ввода количества фронтонных свесов в ломаных фронтонах
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
		form.querySelector(".lf-karnizsves-result").value = result;
	}
}

/**
 * @function [funcDoor] функция подсчета площади дверного проема для одной формы
 * @param {allFormsDoor} allFormsDoor переменная для формы подсчета площади дверных проемов
 * @param {number} dver - поле ввода количества дверных проемов
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
		form.querySelector(".door_result-door").value = result;
	}
}

/**
 * @function [funcTreugFronton]Функция подсчета площади треугольного фронтона для одной формы
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
		form.querySelector(".tf-area").value = result;
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
		let shirina = Number(form.querySelector(".lf-width").value);
		shirina = parseFloat(shirina);
		let shirina2 = Number(form.querySelector(".lf-width2").value);
		shirina2 = parseFloat(shirina2);
		let visota = Number(form.querySelector(".lf-height").value);
		visota = parseFloat(visota);
		let visota2 = Number(form.querySelector(".lf-height2").value);
		visota2 = parseFloat(visota2);
		let s1 = (shirina - shirina2) / visota;
		let s2 = 0.5 * shirina2 * visota2;
		let s3 = shirina2 * visota;
		let result = (s1 + s2 + s3);
		form.querySelector(".lf-area").value = result;
	}
}


/**
 * @function [funcCornerVnesh] функция подсчета высоты внешнего угла для одной формы
 * @param {allFormsCornerVnesh} allFormsCornerVnesh переменная для формы подсчета высоты внешнего угла
 * @param {number} ugol - поле ввода количества внешних углов
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
		form.querySelector(".ugol_sum-width").value = result;
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
		form.querySelector(".ugol-inner_sum-width").value = result;
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
 * @function [sumAreasTreugFronton] функция для сумирования всех площадей треугольных фронтонов со всех форм
 * @param {number} areas - переменная поля с площадью стены
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sum - сумма всех площадей после сложения
 */
function sumAreasTreugFronton() {
	let areas = document.getElementsByClassName("tf-area");
	let sum = 0;
	[].forEach.call(areas, function (el) {
		sum += parseFloat(el.value);
		console.log(sum);
	});
	document.getElementById("tf-area-all22-id").value = sum;
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
 * @function [sumAreasTreugFrontonWindow] функция для сумирования всех площадей оконных проемов со всех форм в треугольных фронтонах
 * @param {number} areasTreugFrontonWindows - переменная поля с площадью оконных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumTreugFrontonWindows - сумма всех площадей после сложения
 */
// function sumAreasTreugFrontonWindow() {
// 	let areasTreugFrontonWindows = document.getElementsByClassName("tf-window-result");
// 	let sumTreugFrontonWindows = 0;
// 	[].forEach.call(areasTreugFrontonWindows, function (el) {
// 		sumTreugFrontonWindows += parseFloat(el.value);
// 		console.log(sumTreugFrontonWindows);
// 	});
// 	document.getElementById("tf-window-area-all2-id").value = sumTreugFrontonWindows;
// }

/**
 * @function [sumAreasLomFrontonWindow] функция для сумирования всех площадей оконных проемов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonWindows - переменная поля с площадью оконных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonWindows - сумма всех площадей после сложения
 */
// function sumAreasLomFrontonWindow() {
// 	let areasLomFrontonWindows = document.getElementsByClassName("lf-window-result");
// 	let sumLomFrontonWindows = 0;
// 	[].forEach.call(areasLomFrontonWindows, function (el) {
// 		sumLomFrontonWindows += parseFloat(el.value);
// 		console.log(sumLomFrontonWindows);
// 	});
// 	document.getElementById("lf-window-area-all2-id").value = sumLomFrontonWindows;
// }

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
 * @function [sumAreasTreugFrontonDoor] функция для сумирования всех площадей дверных проемов со всех форм в треугольных фронтонах
 * @param {number} areasTreugFrontonDoor - переменная поля с площадью дверных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumTreugFrontonDoor - сумма всех площадей после сложения
 */
// function sumAreasTreugFrontonDoor() {
// 	let areasTreugFrontonDoor = document.getElementsByClassName("tf-door-result");
// 	let sumTreugFrontonDoor = 0;
// 	[].forEach.call(areasTreugFrontonDoor, function (el) {
// 		sumTreugFrontonDoor += parseFloat(el.value);
// 		console.log(sumTreugFrontonDoor);
// 	});
// 	document.getElementById("tf-door-area-all2-id").value = sumTreugFrontonDoor;
// }

/**
 * @function [sumAreasLomFrontonDoor] функция для сумирования всех площадей дверных проемов со всех форм в ломаных фронтонах
 * @param {number} areasLomFrontonDoor - переменная поля с площадью дверных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumLomFrontonDoor - сумма всех площадей после сложения
 */
// function sumAreasLomFrontonDoor() {
// 	let areasLomFrontonDoor = document.getElementsByClassName("lf-door-result");
// 	let sumLomFrontonDoor = 0;
// 	[].forEach.call(areasLomFrontonDoor, function (el) {
// 		sumLomFrontonDoor += parseFloat(el.value);
// 		console.log(sumLomFrontonDoor);
// 	});
// 	document.getElementById("lf-door-area-all2-id").value = sumLomFrontonDoor;
// }

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
 * @function [sumAreasLomFronton] функция для сумирования всех площадей треугольных фронтонов со всех форм
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
 * @param {number} stena - поле ввода количества стен
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
 * @param {number} window - поле ввода количества оконных проемов
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

/**
 * @function [sumWidthTreugFrontonWindows] Функция подсчета сумарной ширины оконного проема для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonWindow} formTreugFrontonWindow переменная для формы подсчета площади оконного проема
 * @param {number} window - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
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

/**
 * @function [sumWidthLomFrontonWindows] Функция подсчета сумарной ширины оконного проема для одной формы ломаного фронтона
 * @param {allFormsLomFrontonWindow} formLomFrontonWindow переменная для формы подсчета площади оконного проема
 * @param {number} window - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
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

/**
 * @function [sumWidthTreugFrontonDoor] Функция подсчета сумарной ширины дверного проема для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonDoor} formTreugFrontonDoor переменная для формы подсчета площади дверного проема
 * @param {number} Door - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
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

/**
 * @function [sumWidthLomFrontonDoor] Функция подсчета сумарной ширины дверного проема для одной формы ломаного фронтона
 * @param {allFormsLomFrontonDoor} formLomFrontonDoor переменная для формы подсчета площади дверного проема
 * @param {number} Door - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
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

/**
 * @function [sumWidthTreugFrontonFrontsves] Функция подсчета сумарной ширины фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} frontsves - поле ввода количества фронтонных свесов
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
 * @param {number} frontsves - поле ввода количества фронтонных свесов
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
 * @param {number} karnizsves - поле ввода количества карнизных свесов
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
 * @param {number} karnizsves - поле ввода количества карнизных свесов
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
 * @param {number} door - поле ввода количества дверных проемов
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
 * @function [sumHeightTreugFrontonFrontsves] Функция подсчета сумарной ширины фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} frontsves - поле ввода количества фронтонных свесов
 * @param {number} height - поле ввода ширины фронтонного свеса
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
 * @function [sumHeightLomFrontonFrontsves] Функция подсчета сумарной ширины фронтонного свеса для одной формы ломаного фронтона
 * @param {allFormsLomFrontonFrontsves} formLomFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} frontsves - поле ввода количества фронтонных свесов
 * @param {number} height - поле ввода ширины фронтонного свеса
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
 * @function [sumHeightTreugFrontonKarnizsves] Функция подсчета сумарной ширины карнизного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonKarnizsves} formTreugFrontonKarnizsves переменная для формы подсчета площади карнизного свеса
 * @param {number} karnizsves - поле ввода количества карнизных свесов
 * @param {number} height - поле ввода ширины карнизного свеса
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
 * @function [sumHeightLomFrontonKarnizsves] Функция подсчета сумарной ширины карнизного свеса для одной формы ломаного фронтона
 * @param {allFormsLomFrontonKarnizsves} formLomFrontonKarnizsves переменная для формы подсчета площади карнизного свеса
 * @param {number} karnizsves - поле ввода количества карнизных свесов
 * @param {number} height - поле ввода ширины карнизного свеса
 * @param {number} result - результат подсчета
 */
function sumHeightLomFrontonKarnizsves() {
	for (let i = 0, max = allFormsLomFrontonKarnizsves.length; i < max; i++) {
		let formLomFrontonKarnizsves = allFormsLomFrontonKarnizsves[i];
		let height = Number(formLomFrontonKarnizsves.querySelector(".lf-karnizsves-height").value);
		height = parseFloat(height);
		let result = height;
		formLomFrontonKarnizsves.querySelector(".lf-karnizsves-sum-height").value = result;
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
 * @function [sumAllWidthTreugFrontonWindows] Функция подсчета всех сумарных ширин оконных проемов в треугольных фронтонах
 * @param {number} widthTreugolFrontonWindows - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
// function sumAllWidthTreugFrontonWindows() {
// 	let widthTreugolFrontonWindows = document.getElementsByClassName("tf-window-sum-width");
// 	let sum = 0;
// 	[].forEach.call(widthTreugolFrontonWindows, function (el) {
// 		sum += parseFloat(el.value);
// 		console.log(sum);
// 	});
// 	document.getElementById("tf-window-sum-width-all-id").value = sum;
// }

/**
 * @function [sumAllWidthLomFrontonWindows] Функция подсчета всех сумарных ширин оконных проемов в ломаных фронтонах
 * @param {number} widthLomFrontonWindows - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
// function sumAllWidthLomFrontonWindows() {
// 	let widthLomFrontonWindows = document.getElementsByClassName("lf-window-sum-width");
// 	let sum = 0;
// 	[].forEach.call(widthLomFrontonWindows, function (el) {
// 		sum += parseFloat(el.value);
// 		console.log(sum);
// 	});
// 	document.getElementById("lf-window-sum-width-all-id").value = sum;
// }

/**
 * @function [sumAllWidthTreugFrontonDoor] Функция подсчета всех сумарных ширин дверных проемов в треугольных фронтонах
 * @param {number} widthTreugolFrontonDoor - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
// function sumAllWidthTreugFrontonDoor() {
// 	let widthTreugFrontonDoor = document.getElementsByClassName("tf-door-sum-width");
// 	let sum = 0;
// 	[].forEach.call(widthTreugFrontonDoor, function (el) {
// 		sum += parseFloat(el.value);
// 		console.log(sum);
// 	});
// 	document.getElementById("tf-door-sum-width-all-id").value = sum;
// }

/**
 * @function [sumAllWidthLomFrontonDoor] Функция подсчета всех сумарных ширин дверных проемов в ломаных фронтонах
 * @param {number} widthLomFrontonDoor - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
// function sumAllWidthLomFrontonDoor() {
// 	let widthLomFrontonDoor = document.getElementsByClassName("lf-door-sum-width");
// 	let sum = 0;
// 	[].forEach.call(widthLomFrontonDoor, function (el) {
// 		sum += parseFloat(el.value);
// 		console.log(sum);
// 	});
// 	document.getElementById("lf-door-sum-width-all-id").value = sum;
// }

/**
 * @function [sumAllWidthTreugFrontonFrontsves] Функция подсчета всех сумарных высот фронтонных свесов в треугольных фронтонах
 * @param {number} widthTreugFrontonFrontsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
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
 * @function [sumAllWidthLomFrontonFrontsves] Функция подсчета всех сумарных высот фронтонных свесов в ломаных фронтонах
 * @param {number} widthLomFrontonFrontsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
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
 * @function [sumAllWidthTreugFrontonKarnizsves] Функция подсчета всех сумарных высот карнизных свесов в треугольных фронтонах
 * @param {number} widthTreugFrontonKarnizsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
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
 * @function [sumAllWidthLomFrontonKarnizsves] Функция подсчета всех сумарных высот карнизных свесов в ломаных фронтонах
 * @param {number} widthLomFrontonKarnizsves - переменная для поля сумарной высот из формы
 * @param {forEach} function (el) - перебор полей сумарных высот по всем формам
 * @param {number} sum - складываем все поля сумарных высот из всех созданных форм
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
 * @function [sumAllWidthDoors] Функция подсчета всех сумарных ширин дверных проемов
 * @param {number} widthDoors - переменная для поля сумарной ширины из формы
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
 */
function showTreugolFrontonItems(check) {
	check = document.getElementById("check-treugol");
	if (check.checked) {
		document.getElementById("check-treugol-field").classList.remove("hidden");
	} else document.getElementById("check-treugol-field").classList.add("hidden");
}

/**
 * Для чекбокса
 * показ формы расчета панелей и комплектующих для треугольных фронтонов
 * @function [showLomFrontonItems] добавляет класс hidden к чекбоксу с треугольным фронтоном
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 */
function showLomFrontonItems(check) {
	check = document.getElementById("check-lom");
	if (check.checked) {
		document.getElementById("check-lom-field").classList.remove("hidden");
	} else document.getElementById("check-lom-field").classList.add("hidden");
}

/**
 * Для чекбокса
 * показ формы расчета панелей и комплектующих когда нет фронтонов фронтонов
 * @function [showNotFrontonItems] добавляет класс hidden к чекбоксу с треугольным фронтоном
 * @param {remove} - удаляет класс hidden у формы
 * @param {check}  - переменная к классу для чекбокса
 * @param {add}  - добавляет hidden к форме
 */
function showNotFrontonItems(check) {
	check = document.getElementById("check-notfront");
	if (check.checked) {
		document.getElementById("check-notfront-field").classList.remove("hidden");
	} else document.getElementById("check-notfront-field").classList.add("hidden");
}

/**
 * Кнопка показа формы для количества окон в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnWindow] remuveBtnWindow - добавляет класс hidden к кнопке показать форму
 */
document.querySelector(".show-form-windows").addEventListener("click", function () {
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
document.querySelector(".show-form-doors").addEventListener("click", function () {
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
document.querySelector(".show-form-ugols-vnesh").addEventListener("click", function () {
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
document.querySelector(".show-form-ugols-inner").addEventListener("click", function () {
	document.getElementById("ugols-inner-id").classList.remove("hidden");
	document.getElementById("add-form-ugols-inner-id").classList.remove("hidden");
	document.getElementById("ugol-inner-form-id").classList.add("hidden");
	remuveBtnUgolsInnerh();
});

function remuveBtnUgolsInnerh() {
	document.getElementById("show-form-ugols-inner-id").classList.add("hidden");
}


/**
 * Кнопка показа формы размера и количества окон в разделе треугольный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtntfWindow] remuveBtntfWindow - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-tf-window").addEventListener("click", function () {
// $(document).on('click', '.show-form-tf-window', function () {
// 	document.getElementById("tf-window-wrp-id").classList.remove("hidden");
// 	remuveBtnTfWindow();
// });
//
// function remuveBtnTfWindow() {
// 	document.getElementById("show-form-tf-window-id").classList.add("hidden");
// }

/**
 * Кнопка показа формы размера и количества окон в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfWindow] remuveBtnLfWindow - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-window").addEventListener("click", function () {
// $(document).on('click', '.show-form-lf-window', function () {
// 	document.getElementById("lf-window-wrp-id").classList.remove("hidden");
// 	remuveBtnLfWindow();
// });
//
// function remuveBtnLfWindow() {
// 	document.getElementById("show-form-lf-window-id").classList.add("hidden");
// }

/**
 * Кнопка показа формы размера и количества дверей в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfDoor] remuveBtnLfDoor - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-door").addEventListener("click", function () {
// $(document).on('click', '.show-form-lf-door', function () {
// 	document.getElementById("lf-door-wrp-id").classList.remove("hidden");
// 	remuveBtnLfDoor();
// });
//
// function remuveBtnLfDoor() {
// 	document.getElementById("show-form-lf-door-id").classList.add("hidden");
// }

/**
 * Кнопка показа формы размера и количества фронтонных свесов в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfFrontsves] remuveBtnLfFrontsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-frontsves").addEventListener("click", function () {
$(document).on('click', '.show-form-lf-frontsves', function () {
	document.getElementById("lf-frontsves-wrp-id").classList.remove("hidden");
	remuveBtnLfFrontsves();
});

function remuveBtnLfFrontsves() {
	document.getElementById("show-form-lf-frontsves-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества карнизных свесов в разделе ломаный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnLfKarnizsves] remuveBtnLfKarnizsves - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-lf-karnizsves").addEventListener("click", function () {
$(document).on('click', '.show-form-lf-karnizsves', function () {
	document.getElementById("lf-karnizsves-wrp-id").classList.remove("hidden");
	remuveBtnLfKarnizsves();
});

function remuveBtnLfKarnizsves() {
	document.getElementById("show-form-lf-karnizsves-id").classList.add("hidden");
}

/**
 * Кнопка показа формы размера и количества дверей в разделе треугольный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtntfDoor] remuveBtntfDoor - добавляет класс hidden к кнопке показать форму
 */
// document.querySelector(".show-form-tf-door").addEventListener("click", function () {
// $(document).on('click', '.show-form-tf-door', function () {
// 	document.getElementById("tf-door-wrp-id").classList.remove("hidden");
// 	remuveBtntfDoor();
// });

// function remuveBtntfDoor() {
// 	document.getElementById("show-form-tf-door-id").classList.add("hidden");
// }

/**
 * Кнопка показа формы размера и количества фронтонных свесов в разделе треугольный фронтон
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtntfFrontsves] remuveBtntfFrontsves - добавляет класс hidden к кнопке показать форму
 */
document.querySelector(".show-form-tf-frontsves").addEventListener("click", function () {
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
document.querySelector(".show-form-tf-karnizsves").addEventListener("click", function () {
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
 */
let newFormStenaId = 1;
let node = document.getElementById("walls-form-id").cloneNode(true);

document.querySelector(".add-form").addEventListener("click", function () {
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

/**
 * Кнопка добавления новой формы для оконных проемов в разделе стены
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormWindow} newFormWindow - добавляем новую форму
 */
let newFormWindow = 1;
let nodeWindow = document.getElementById("windows-form-id").cloneNode(true);
document.querySelector(".add-form-window").addEventListener("click", function () {	
let newClonedNode = nodeWindow.cloneNode(true);
document.querySelector(".windows").appendChild(newClonedNode);
newClonedNode.id = "windows-form-id-" + newFormWindow;
newClonedNode.querySelector(".window_length").name = 'data[Окна][' + newFormWindow + '][Ширина]';
newClonedNode.querySelector(".window_length").value = '';
newClonedNode.querySelector(".window_height").name = 'data[Окна][' + newFormWindow + '][Высота]';
newClonedNode.querySelector(".window_height").value = '';
newClonedNode.querySelector(".select-selected").name = 'data[Окна][' + newFormWindow + '][Исполнение]';
newFormWindow++;
});


/**
 * Кнопка добавления новой формы для дверных проемов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormDoor} newFormDoor - добавляем новую форму
 */
let newFormDoor = 1;
let nodeDoor = document.getElementById("doors-form-id").cloneNode(true);

document.querySelector(".add-form-door").addEventListener("click", function () {
	let newClonedNode = nodeDoor.cloneNode(true);
	document.querySelector(".doors").appendChild(newClonedNode);
	newClonedNode.id = "doors-form-id-" + newFormDoor;
	newClonedNode.querySelector(".door_length").name = 'data[Двери][' + newFormDoor + '][Ширина]';
	newClonedNode.querySelector(".door_length").value = '';
	newClonedNode.querySelector(".door_height").name = 'data[Двери][' + newFormDoor + '][Высота]';
	newClonedNode.querySelector(".door_height").value = '';
	newClonedNode.querySelector(".select-selected").name = 'data[Двери][' + newFormDoor + '][Исполнение]';
	newFormDoor++;
});

/**
 * Кнопка добавления новой формы для подсчета высоты внешних углов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormVneshUgol} newFormVneshUgol - добавляем новую форму
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


/**
 * Кнопка добавления новой формы для подсчета высоты внутренних углов в стенах
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormInnerUgol} newFormInnerUgol - добавляем новую форму
 */
let newFormInnerUgol = 1;
let nodeInnerUgol = document.getElementById("ugol-inner-form-id").cloneNode(true);

document.querySelector(".add-form-ugols-inner").addEventListener("click", function () {
	let newClonedNode = nodeInnerUgol.cloneNode(true);
	document.querySelector(".ugols-inner").appendChild(newClonedNode);
	newClonedNode.id = "gol-inner-form-id-" + newFormInnerUgol;
	newClonedNode.name = "ugol-inner-form-" + newFormInnerUgol;
	newFormInnerUgol++;
});


/**
 * Кнопка добавления новой формы для размера и площади фронтона в разделе треугольный фронтон
 * @param {nodeTreugFronton} nodeTreugFronton - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFronton} newFormTreugFronton - добавляем новую форму
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

/**
 * Кнопка добавления новой формы для размера и площади фронтона в разделе ломаный фронтон
 * @param {nodeLomFronton} nodeLomFronton - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFronton} newFormLomFronton - добавляем новую форму
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

/**
 * Кнопка добавления новой формы для оконных проемов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonWindow} newFormTreugFrontonWindow - добавляем новую форму
 */
// let newFormTreugFrontonWindow = 1;
// let nodeTreugFrontonWindow = document.getElementById("tf-window-form-id").cloneNode(true);
//
// // document.querySelector(".add-form-tf-window").addEventListener("click", function () {
// $(document).on('click', '.add-form-tf-window', function () {
// 	let newClonedNode = nodeTreugFrontonWindow.cloneNode(true);
// 	document.querySelector(".tf-window").appendChild(newClonedNode);
// 	newClonedNode.id = "tf-window-form-id-" + newFormTreugFrontonWindow;
// 	newClonedNode.name = "tf-window-form-id-" + newFormTreugFrontonWindow;
// 	newFormTreugFrontonWindow++;
// });

/**
 * Кнопка добавления новой формы для оконных проемов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonWindow} newFormLomFrontonWindow - добавляем новую форму
 */
// let newFormLomFrontonWindow = 1;
// let nodeLomFrontonWindow = document.getElementById("lf-window-form-id").cloneNode(true);
//
// // document.querySelector(".add-form-lf-window").addEventListener("click", function () {
// $(document).on('click', '.add-form-lf-window', function () {
// 	let newClonedNode = nodeLomFrontonWindow.cloneNode(true);
// 	document.querySelector(".lf-window").appendChild(newClonedNode);
// 	newClonedNode.id = "lf-window-form-id-" + newFormLomFrontonWindow;
// 	newClonedNode.name = "lf-window-form-id-" + newFormLomFrontonWindow;
// 	newFormLomFrontonWindow++;
// });


/**
 * Кнопка добавления новой формы для дверных проемов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonWindow} newFormLomFrontonWindow - добавляем новую форму
 */
// let newFormLomFrontonDoor = 1;
// let nodeLomFrontonDoor = document.getElementById("lf-door-form-id").cloneNode(true);
//
// // document.querySelector(".add-form-lf-door").addEventListener("click", function () {
// $(document).on('click', '.add-form-lf-door', function () {
// 	let newClonedNode = nodeLomFrontonDoor.cloneNode(true);
// 	document.querySelector(".lf-door").appendChild(newClonedNode);
// 	newClonedNode.id = "lf-door-form-id-" + newFormLomFrontonDoor;
// 	newClonedNode.name = "lf-door-form-id-" + newFormLomFrontonDoor;
// 	newFormLomFrontonDoor++;
// });

/**
 * Кнопка добавления новой формы для оконных проемов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonWindow} newFormLomFrontonWindow - добавляем новую форму
 */
/*
 let newFormLomFrontonWindow = 1;
let nodeLomFrontonWindow = document.getElementById("lf-window-form-id").cloneNode(true);

document.querySelector(".add-form-lf-window").addEventListener("click", function () {
	let newClonedNode = nodeLomFrontonWindow.cloneNode(true);
	document.querySelector(".lf-window").appendChild(newClonedNode);
	newClonedNode.id = "lf-window-form-id-" + newFormLomFrontonWindow;
	newClonedNode.name = "lf-window-form-id-" + newFormLomFrontonWindow;
	newFormLomFrontonWindow++;
});

*/
/**
 * Кнопка добавления новой формы для оконных проемов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonWindow} newFormLomFrontonWindow - добавляем новую форму
 */

 /*
let newFormLomFrontonDoor = 1;
let nodeLomFrontonDoor = document.getElementById("lf-door-form-id").cloneNode(true);

document.querySelector(".add-form-lf-door").addEventListener("click", function () {
	let newClonedNode = nodeLomFrontonDoor.cloneNode(true);
	document.querySelector(".lf-door").appendChild(newClonedNode);
	newClonedNode.id = "lf-door-form-id-" + newFormLomFrontonDoor;
	newClonedNode.name = "lf-door-form-id-" + newFormLomFrontonDoor;
	newFormLomFrontonDoor++;
});
*/

/**
 * Кнопка добавления новой формы для дверных проемов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonDoor} newFormTreugFrontonDoor - добавляем новую форму
 */
// let newFormTreugFrontonDoor = 1;
// let nodeTreugFrontonDoor = document.getElementById("tf-door-form-id").cloneNode(true);
//
// // document.querySelector(".add-form-tf-door").addEventListener("click", function () {
// $(document).on('click', '.add-form-tf-door', function () {
// 	let newClonedNode = nodeTreugFrontonDoor.cloneNode(true);
// 	document.querySelector(".tf-door").appendChild(newClonedNode);
// 	newClonedNode.id = "tf-door-form-id-" + newFormTreugFrontonDoor;
// 	newClonedNode.name = "tf-door-form-id-" + newFormTreugFrontonDoor;
// 	newFormTreugFrontonDoor++;
// });

/**
 * Кнопка добавления новой формы для фронтонных свесов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonFrontsves} newFormTreugFrontonFrontsves - добавляем новую форму
 */
let newFormTreugFrontonFrontsves = 1;
let nodeTreugFrontonFrontsves = document.getElementById("tf-frontsves-form-id").cloneNode(true);

document.querySelector(".add-form-tf-frontsves").addEventListener("click", function () {
	let newClonedNode = nodeTreugFrontonFrontsves.cloneNode(true);
	document.querySelector(".tf-frontsves").appendChild(newClonedNode);
	newClonedNode.id = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newClonedNode.name = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
	newFormTreugFrontonFrontsves++;
});

/**
 * Кнопка добавления новой формы для фронтонных свесов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonFrontsves} newFormLomFrontonFrontsves - добавляем новую форму
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

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonKarnizsves} newFormTreugFrontonKarnizsves - добавляем новую форму
 */
let newFormTreugFrontonKarnizsves = 1;
let nodeTreugFrontonKarnizsves = document.getElementById("tf-karnizsves-form-id").cloneNode(true);

document.querySelector(".add-form-tf-karnizsves").addEventListener("click", function () {
	let newClonedNode = nodeTreugFrontonKarnizsves.cloneNode(true);
	document.querySelector(".tf-karnizsves").appendChild(newClonedNode);
	newClonedNode.id = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newClonedNode.name = "tf-karnizsves-form-id-" + newFormTreugFrontonKarnizsves;
	newFormTreugFrontonKarnizsves++;
});

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе ломаный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormLomFrontonKarnizsves} newFormLomFrontonKarnizsves - добавляем новую форму
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

/**
 * Кнопка добавления новой формы для карнизных свесов в разделе без фронтонов
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormNotFrontonKarnizsves} newFormNotFrontonKarnizsves - добавляем новую форму
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
		// remuveBtnStena();
	}
}

/**
 * @function [deleteFormTreugFronton] Функция удаления формы для размера треугольного фронтона
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAreasTreugFronton()] вызываем функцию подсчета всех площадей со всех форм для размера треугольного фронтона
 */
function deleteFormTreugFronton(btn) {
	let forms = document.getElementsByClassName('tf-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAreasTreugFronton();
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
 * @function [deleteFormTreugFrontonWindow] Функция удаления формы оконных проемов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonWindows()] вызываем функцию подсчета всех ширин со всех форм оконных проемов для треугольных фронтонов
 * @function [sumAreasTreugFrontonWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для треугольных фронтонов
 */
// function deleteFormTreugFrontonWindow(btn) {
// 	let forms = document.getElementsByClassName('tf-window-form');
// 	if (forms.length > 1) {
// 		btn.parentElement.remove();
// 		sumAllWidthTreugFrontonWindows();
// 		sumAreasTreugFrontonWindow();
// 	}
// }


/**
 * @function [deleteFormLomFrontonWindow] Функция удаления формы оконных проемов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonWindows()] вызываем функцию подсчета всех ширин со всех форм оконных проемов для ломаных фронтонов
 * @function [sumAreasLomFrontonWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для ломаных фронтонов
 */
// function deleteFormLomFrontonWindow(btn) {
// 	let forms = document.getElementsByClassName('lf-window-form');
// 	if (forms.length > 1) {
// 		btn.parentElement.remove();
// 		sumAllWidthLomFrontonWindows();
// 		sumAreasLomFrontonWindow();
// 	}
// }

/**
 * @function [deleteFormLomFrontonWindow] Функция удаления формы оконных проемов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonWindows()] вызываем функцию подсчета всех ширин со всех форм оконных проемов для ломаных фронтонов
 * @function [sumAreasLomFrontonWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для ломаных фронтонов
 */
// function deleteFormLomFrontonWindow(btn) {
// 	let forms = document.getElementsByClassName('lf-window-form');
// 	if (forms.length > 1) {
// 		btn.parentElement.remove();
// 		sumAllWidthLomFrontonWindows();
// 		sumAreasLomFrontonWindow();
// 	}
// }


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
 * @function [deleteFormTreugFrontonDoor] Функция удаления формы дверных проемов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonDoor()] вызываем функцию подсчета всех ширин со всех форм дверных проемов для треугольных фронтонов
 * @function [sumAreasTreugFrontonDoor()] вызываем функцию подсчета всех площадей дверных проемов со всех форм для треугольных фронтонов
 */
// function deleteFormTreugFrontonDoor(btn) {
// 	let forms = document.getElementsByClassName('tf-door-form');
// 	if (forms.length > 1) {
// 		btn.parentElement.remove();
// 		sumAllWidthTreugFrontonDoor();
// 		sumAreasTreugFrontonDoor();
// 	}
// }

/**
 * @function [deleteFormLomFrontonDoor] Функция удаления формы дверных проемов в ломаных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthLomFrontonDoor] вызываем функцию подсчета всех ширин со всех форм дверных проемов для ломаных фронтонов
 * @function [sumAreasLomFrontonDoor] вызываем функцию подсчета всех площадей дверных проемов со всех форм для ломаных фронтонов
 */
// function deleteFormLomFrontonDoor(btn) {
// 	let forms = document.getElementsByClassName('lf-door-form');
// 	if (forms.length > 1) {
// 		btn.parentElement.remove();
// 		sumAllWidthLomFrontonDoor();
// 		sumAreasLomFrontonDoor();
// 	}
// }

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
	} if (forms.length == 1) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.getElementById("tf-frontsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");	
		deleteTreugFrontonFrontsves ();	
	}  if (forms.length == 0) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");
		deleteTreugFrontonFrontsves();
		sumAllWidthTreugFrontonFrontsves();
		sumAllHeightTreugFrontonFrontsves();
		sumAreasTreugFrontonFrontsves();		
	}	
}
function deleteTreugFrontonFrontsves(){
	let wrpFormInnerUgol = document.querySelector('.tf-frontsves-form');
	if(!wrpFormInnerUgol){
		document.getElementById("tf-frontsves-id").classList.add("hidden");
	}
}

function deleteFormTreugFrontonFrontsvesTemplate(btn) {
	let forms = document.getElementsByClassName('tf-frontsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthTreugFrontonFrontsves();
		sumAllHeightTreugFrontonFrontsves();
		sumAreasTreugFrontonFrontsves();
	} if (forms.length == 1) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.getElementById("tf-frontsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");	
		deleteTreugFrontonFrontsvesTemplate();	
	}  if (forms.length == 0) {
		document.querySelector(".add-form-tf-frontsves").classList.add("hidden");
		document.querySelector(".show-form-tf-frontsves").classList.remove("hidden");
		deleteTreugFrontonFrontsvesTemplate();
		sumAllWidthTreugFrontonFrontsves();
		sumAllHeightTreugFrontonFrontsves();
		sumAreasTreugFrontonFrontsves();		
	}	
}
function deleteTreugFrontonFrontsvesTemplate(){
	let wrpFormInnerUgol = document.querySelector('.tf-frontsves-form');
	if(!wrpFormInnerUgol){
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
}

function deleteFormTreugFrontonKarnizsves(btn) {
	let forms = document.getElementsByClassName('tf-karnizsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();
	} if (forms.length == 1) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.getElementById("tf-karnizsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");	
		eleteTreugFrontonKarnizsves();	
	}  if (forms.length == 0) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");
		eleteTreugFrontonKarnizsves();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();		
	}	
}

function deleteTreugFrontonKarnizsves(){
	let wrpFormInnerUgol = document.querySelector('.tf-karnizsves-form');
	if(!wrpFormInnerUgol){
		document.getElementById("tf-karnizsves-id").classList.add("hidden");
	}
}

function deleteFormTreugFrontonKarnizsvesTemplate(btn) {
	let forms = document.getElementsByClassName('tf-karnizsves-form');
	if (forms.length > 1) {
		btn.parentElement.remove();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();
	} if (forms.length == 1) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.getElementById("tf-karnizsves-id").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");	
		eleteTreugFrontonKarnizsves();	
	}  if (forms.length == 0) {
		document.querySelector(".add-form-tf-karnizsves").classList.add("hidden");
		document.querySelector(".show-form-tf-karnizsves").classList.remove("hidden");
		eleteTreugFrontonKarnizsves();
		sumAllWidthTreugFrontonKarnizsves();
		sumAllHeightTreugFrontonKarnizsves();
		sumAreasTreugFrontonKarnizsves();		
	}	
}

function deleteTreugFrontonKarnizsvesTemplate(){
	let wrpFormInnerUgol = document.querySelector('.tf-karnizsves-form');
	if(!wrpFormInnerUgol){
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
}

/**
 * @function [deleteFormNotFrontonKarnizsves] Функция удаления формы карнизных свесов в ломаных фронтонах
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
	} if (forms.length == 1){
		document.querySelector(".add-form-window").classList.add("hidden");
		document.getElementById("windows-id").classList.add("hidden");
		document.getElementById("show-form-windows-id").classList.remove("hidden");
	} if (forms.length == 0) {
		document.querySelector(".add-form-window").classList.add("hidden");
		document.querySelector(".show-form-windows").classList.remove("hidden");
		deleteWrpFormWindow();
		sumAllWidthWindows();
		sumAreasWindow();
			
	} 
	function deleteWrpFormWindow (){
		let wrpFormWindow = document.querySelector('.windows-form');
		if(!wrpFormWindow){
			document.getElementById("windows-id").classList.add("hidden");
		} 
	}	
}
function deleteFormWindowTemplate(btn) {
	let forms = document.getElementsByClassName('windows-form');	
	if (forms.length > 1) {
		btn.parentElement.remove();
		document.getElementById("windows-id").classList.remove("hidden");
		sumAllWidthWindows();
		sumAreasWindow();
	} if (forms.length == 1){
		document.querySelector(".add-form-window").classList.add("hidden");
		document.getElementById("windows-id").classList.add("hidden");
		document.getElementById("show-form-windows-id").classList.remove("hidden");
	} if (forms.length == 0) {
		document.querySelector(".add-form-window").classList.add("hidden");
		document.querySelector(".show-form-windows").classList.remove("hidden");
		deleteWrpFormWindowTemplate();
		sumAllWidthWindows();
		sumAreasWindow();
			
	} 
	function deleteWrpFormWindowTemplate(){
		let wrpFormWindow = document.querySelector('.windows-form');
		if(!wrpFormWindow){
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
	let formsDoor = document.getElementsByClassName('doors-form');
	if (formsDoor.length > 1) {
		btn.parentElement.remove();
		document.getElementById("doors-id").classList.remove("hidden");
		sumAllWidthDoors();
		sumAreasDoor();
	} if (formsDoor.length == 1){
		document.querySelector(".add-form-door").classList.add("hidden");
		document.getElementById("doors-id").classList.add("hidden");
		document.getElementById("show-form-doors-id").classList.remove("hidden");
	} if (forms.length == 0) {
		document.querySelector(".add-form-door").classList.add("hidden");
		document.querySelector(".show-form-doors").classList.remove("hidden");
		deleteWrpFormDoor();
		sumAllWidthDoors();
		sumAreasDoor();			
	} 	
}
function deleteWrpFormDoor (){
	let wrpFormDoor = document.querySelector('.doors-form');
	if(!wrpFormDoor){
		document.getElementById("doors-id").classList.add("hidden");
	}
}

function deleteFormDoorTemplate(btn) {
	let formsDoor = document.getElementsByClassName('doors-form');
	if (formsDoor.length > 1) {
		btn.parentElement.remove();
		document.getElementById("doors-id").classList.remove("hidden");
		sumAllWidthDoors();
		sumAreasDoor();
	} if (formsDoor.length == 1){
		document.querySelector(".add-form-door").classList.add("hidden");
		document.getElementById("doors-id").classList.add("hidden");
		document.getElementById("show-form-doors-id").classList.remove("hidden");
	} if (formsDoor.length == 0) {
		document.querySelector(".add-form-door").classList.add("hidden");
		document.querySelector(".show-form-doors").classList.remove("hidden");
		deleteWrpFormDoorTemplate();
		sumAllWidthDoors();
		sumAreasDoor();			
	} 	
}
function deleteWrpFormDoorTemplate(){
	let wrpFormDoor = document.querySelector('.doors-form');
	if(!wrpFormDoor){
		document.getElementById("doors-id").classList.add("hidden");
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
	} if (formsVneshUgol.length == 1) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.getElementById("ugols-vnesh-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");	
		deleteWrpVneshUgol ();	
	} if (formsVneshUgol.length == 0) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");
		deleteWrpVneshUgol();
		sumAllHeightVneshUgol();		
	}	
}
function deleteWrpVneshUgol(){
	let wrpFormVneshUgol = document.querySelector('.ugol-vnesh-form');
	if(!wrpFormVneshUgol){
		document.getElementById("ugols-vnesh-id").classList.add("hidden");
	}
}

function deleteFormVneshUgolTemplate(btn) {
	let formsVneshUgol = document.getElementsByClassName('ugol-vnesh-form');
	if (formsVneshUgol.length > 1) {
		btn.parentElement.remove();
		sumAllHeightVneshUgol();
	} if (formsVneshUgol.length == 1) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.getElementById("ugols-vnesh-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");	
		deleteWrpVneshUgolTemplate();	
	} if (formsVneshUgol.length == 0) {
		document.querySelector(".add-form-ugols-vnesh").classList.add("hidden");
		document.querySelector(".show-form-ugols-vnesh").classList.remove("hidden");
		deleteWrpVneshUgolTemplate();
		sumAllHeightVneshUgol();		
	}	
}
function deleteWrpVneshUgolTemplate(){
	let wrpFormVneshUgol = document.querySelector('.ugol-vnesh-form');
	if(!wrpFormVneshUgol){
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
	} if (formsInnerUgol.length == 1) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.getElementById("ugols-inner-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");	
		deleteWrpInnerUgol ();	
	}  if (formsInnerUgol.length == 0) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");
		deleteWrpInnerhUgol();
		sumAllHeightInnerUgol();		
	}	
}
function deleteWrpInnerUgol(){
	let wrpFormInnerUgol = document.querySelector('.ugol-inner-form');
	if(!wrpFormInnerUgol){
		document.getElementById("ugols-inner-id").classList.add("hidden");
	}
}

function deleteFormInnerUgolTemplate(btn) {
	let formsInnerUgol = document.getElementsByClassName('ugol-inner-form');
	if (formsInnerUgol.length > 1) {
		btn.parentElement.remove();
		sumAllHeightInnerUgol();
	} if (formsInnerUgol.length == 1) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.getElementById("ugols-inner-id").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");	
		deleteWrpInnerUgolTemplate();	
	}  if (formsInnerUgol.length == 0) {
		document.querySelector(".add-form-ugols-inner").classList.add("hidden");
		document.querySelector(".show-form-ugols-inner").classList.remove("hidden");
		deleteWrpInnerUgolTemplate();
		sumAllHeightInnerUgol();		
	}	
}
function deleteWrpInnerUgolTemplate(){
	let wrpFormInnerUgol = document.querySelector('.ugol-inner-form');
	if(!wrpFormInnerUgol){
		document.getElementById("ugols-inner-id").classList.add("hidden");
	}
}
