'use strict';
/**
 * @function [funcStena] Функцыя подсчета площади стены для одной формы
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
    console.log(form.querySelector(".wf_wall"));
    let stena = Number(form.querySelector(".wf_wall").value);
    stena = parseFloat(stena);
    let dlina = Number(form.querySelector(".wf_length").value);
    dlina = parseFloat(dlina);
    let visota = Number(form.querySelector(".wf_height").value);
    visota = parseFloat(visota);
    let result = (dlina + visota) * stena;
    form.querySelector(".wf_result-wall").value = result;
  }
}

/**
 * @function [funcWindow] Функцыя подсчета площади оконного проема для одной формы
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
    console.log(form.querySelector(".window_wall"));
    let okno = Number(form.querySelector(".window_wall").value);
    okno = parseFloat(okno);
    let shirina = Number(form.querySelector(".window_length").value);
    shirina = parseFloat(shirina);
    let visota = Number(form.querySelector(".window_height").value);
    visota = parseFloat(visota);
    let result = (shirina + visota) * okno;
    form.querySelector(".window_result-window").value = result;
  }
}

/**
 * @function [funcTreugFrontonWindow] Функцыя подсчета площади оконного проема для одной формы в треугольных фронтонах
 * @param {allFormsTreugFrontonWindow} allFormsTreugFrontonWindow переменная для формы подсчета площади оконнх проемов в треугольных фронтонах
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
 * @function [funcTreugFrontonDoor] Функцыя подсчета площади дверного проема для одной формы в треугольных фронтонах
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
 * @function [funcTreugFrontonFrontsves] Функцыя подсчета площади фронтонного свеса для одной формы в треугольных фронтонах
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
    console.log(form.querySelector(".tf-frontsves-num"));
    let frontsves = Number(form.querySelector(".tf-frontsves-num").value);
    frontsves = parseFloat(frontsves);
    let shirina = Number(form.querySelector(".tf-frontsves-length").value);
    shirina = parseFloat(shirina);
    let visota = Number(form.querySelector(".tf-frontsves-height").value);
    visota = parseFloat(visota);
    let result = (shirina + visota) * frontsves;
    form.querySelector(".tf-frontsves-result").value = result;
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
    console.log(form.querySelector(".door_wall"));
    let dver = Number(form.querySelector(".door_wall").value);
    dver = parseFloat(dver);
    let shirina = Number(form.querySelector(".door_length").value);
    shirina = parseFloat(shirina);
    let visota = Number(form.querySelector(".door_height").value);
    visota = parseFloat(visota);
    let result = (shirina + visota) * dver;
    form.querySelector(".door_result-door").value = result;
  }
}

/**
 * @function [funcTreugFronton] Функцыя подсчета площади треугольного фронтона для одной формы
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
    console.log(form.querySelector(".tf-number"));
    let fronton = Number(form.querySelector(".tf-number").value);
    fronton = parseFloat(fronton);
    let shirina = Number(form.querySelector(".tf-width").value);
    shirina = parseFloat(shirina);
    let visota = Number(form.querySelector(".tf-height").value);
    visota = parseFloat(visota);
    let result = (shirina + visota) * fronton;
    form.querySelector(".tf-area").value = result;
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
    console.log(form.querySelector(".ugol-quantity"));
    let ugol = Number(form.querySelector(".ugol-quantity").value);
    ugol = parseFloat(ugol);   
    let visota = Number(form.querySelector(".ugol_height").value);
    visota = parseFloat(visota);
    let result = ugol * visota;
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
    console.log(form.querySelector(".ugol-inner-quantity"));
    let ugolInner = Number(form.querySelector(".ugol-inner-quantity").value);
    ugolInner = parseFloat(ugolInner);   
    let visota = Number(form.querySelector(".ugol-inner_height").value);
    visota = parseFloat(visota);
    let result = ugolInner * visota;
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
function sumAreasTreugFrontonWindow() {
  let areasTreugFrontonWindows = document.getElementsByClassName("tf-window-result");
  let sumTreugFrontonWindows = 0;
  [].forEach.call(areasTreugFrontonWindows, function (el) {
    sumTreugFrontonWindows += parseFloat(el.value);
    console.log(sumTreugFrontonWindows);
  });
  document.getElementById("tf-window-area-all2-id").value = sumTreugFrontonWindows;
}

/**
 * @function [sumAreasTreugFrontonDoor] функция для сумирования всех площадей дверных проемов со всех форм в треугольных фронтонах
 * @param {number} areasTreugFrontonDoor - переменная поля с площадью дверных проемов
 * @param [function (el)] - функция перебора и сумирования всех полученных площадей из всех форм
 * @param {number} sumTreugFrontonDoor - сумма всех площадей после сложения
 */
function sumAreasTreugFrontonDoor() {
  let areasTreugFrontonDoor = document.getElementsByClassName("tf-door-result");
  let sumTreugFrontonDoor = 0;
  [].forEach.call(areasTreugFrontonDoor, function (el) {
    sumTreugFrontonDoor += parseFloat(el.value);
    console.log(sumTreugFrontonDoor);
  });
  document.getElementById("tf-door-area-all2-id").value = sumTreugFrontonDoor;
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
 * @function [perimeter] Функцыя подсчета периметра стены для одной формы
 * @param {allForms} form переменная для формы подсчета площади стен
 * @param {number} stena - поле ввода количества стен
 * @param {number} dlina - поле ввода длины стен
 * @param {number} result - результат подсчета
 */
function perimeter() {
  for (let i = 0, max = allForms.length; i < max; i++) {
    let form = allForms[i];
    console.log(form.querySelectorAll(".wf_wall"));
    let stena = Number(form.querySelector(".wf_wall").value);
    stena = parseFloat(stena);
    let dlina = Number(form.querySelector(".wf_length").value);
    dlina = parseFloat(dlina);
    let result = dlina * stena;
    form.querySelector(".wf_perimeter").value = result;
  }
}

/**
 * @function [sumWidthWindows] Функцыя подсчета сумарной ширины оконного проема для одной формы
 * @param {allFormsWindow} formWindow переменная для формы подсчета площади оконного проема
 * @param {number} window - поле ввода количества оконных проемов
 * @param {number} shirina - поле ввода ширины оконного проема
 * @param {number} result - результат подсчета
 */
function sumWidthWindows() {
  for (let i = 0, max = allFormsWindow.length; i < max; i++) {
    let formWindow = allFormsWindow[i];
    console.log(formWindow.querySelectorAll(".window_wall"));
    let window = Number(formWindow.querySelector(".window_wall").value);
    window = parseFloat(window);
    let shirina = Number(formWindow.querySelector(".window_length").value);
    shirina = parseFloat(shirina);
    let result = shirina * window;
    formWindow.querySelector(".window_sum-width").value = result;
  }
}

/**
 * @function [sumWidthTreugFrontonWindows] Функцыя подсчета сумарной ширины оконного проема для одной формы треугольного фронтона
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
 * @function [sumWidthTreugFrontonDoor] Функцыя подсчета сумарной ширины дверного проема для одной формы треугольного фронтона
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
 * @function [sumWidthTreugFrontonFrontsves] Функцыя подсчета сумарной ширины фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} frontsves - поле ввода количества фронтонных свесов
 * @param {number} shirina - поле ввода ширины фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumWidthTreugFrontonFrontsves() {
  for (let i = 0, max = allFormsTreugFrontonFrontsves.length; i < max; i++) {
    let formTreugFrontonFrontsves = allFormsTreugFrontonFrontsves[i];
    console.log(formTreugFrontonFrontsves.querySelectorAll(".tf-frontsves-num"));
    let frontsves = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-num").value);
    frontsves = parseFloat(frontsves);
    let shirina = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-length").value);
    shirina = parseFloat(shirina);
    let result = shirina * frontsves;
    formTreugFrontonFrontsves.querySelector(".tf-frontsves-sum-width").value = result;
  }
}

/**
 * @function [sumWidthDoors] Функцыя подсчета сумарной ширины дверного проема для одной формы
 * @param {allFormsDoor} formDoor переменная для формы подсчета площади дверного проема
 * @param {number} door - поле ввода количества дверных проемов
 * @param {number} shirina - поле ввода ширины дверного проема
 * @param {number} result - результат подсчета
 */
function sumWidthDoors() {
  for (let i = 0, max = allFormsDoor.length; i < max; i++) {
    let formDoor = allFormsDoor[i];
    console.log(formDoor.querySelectorAll(".door_wall"));
    let door = Number(formDoor.querySelector(".door_wall").value);
    door = parseFloat(door);
    let shirina = Number(formDoor.querySelector(".door_length").value);
    shirina = parseFloat(shirina);
    let result = shirina * door;
    formDoor.querySelector(".door_sum-width").value = result;
  }
}

/**
 * @function [sumHeightTreugFrontonFrontsves] Функцыя подсчета сумарной ширины фронтонного свеса для одной формы треугольного фронтона
 * @param {allFormsTreugFrontonFrontsves} formTreugFrontonFrontsves переменная для формы подсчета площади фронтонного свеса
 * @param {number} frontsves - поле ввода количества фронтонных свесов
 * @param {number} height - поле ввода ширины фронтонного свеса
 * @param {number} result - результат подсчета
 */
function sumHeightTreugFrontonFrontsves() {
  for (let i = 0, max = allFormsTreugFrontonFrontsves.length; i < max; i++) {
    let formTreugFrontonFrontsves = allFormsTreugFrontonFrontsves[i];
    console.log(formTreugFrontonFrontsves.querySelectorAll(".tf-frontsves-num"));
    let frontsves = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-num").value);
    frontsves = parseFloat(frontsves);
    let height = Number(formTreugFrontonFrontsves.querySelector(".tf-frontsves-height").value);
    height = parseFloat(height);
    let result = height * frontsves;
    formTreugFrontonFrontsves.querySelector(".tf-frontsves-sum-height").value = result;
  }
}

/**
 * @function [sumPerimeters] Функцыя подсчета всех периметров стен со всех форм
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
 * @function [sumAllWidthWindows] Функцыя подсчета всех сумарных ширин оконных проемов
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
 * @function [sumAllWidthTreugFrontonWindows] Функцыя подсчета всех сумарных ширин оконных проемов в треугольных фронтонах
 * @param {number} widthTreugolFrontonWindows - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthTreugFrontonWindows() {
  let widthTreugolFrontonWindows = document.getElementsByClassName("tf-window-sum-width");
  let sum = 0;
  [].forEach.call(widthTreugolFrontonWindows, function (el) {
    sum += parseFloat(el.value);
    console.log(sum);
  });
  document.getElementById("tf-window-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthTreugFrontonDoor] Функцыя подсчета всех сумарных ширин дверных проемов в треугольных фронтонах
 * @param {number} widthTreugolFrontonDoor - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthTreugFrontonDoor() {
  let widthTreugFrontonDoor = document.getElementsByClassName("tf-door-sum-width");
  let sum = 0;
  [].forEach.call(widthTreugFrontonDoor, function (el) {
    sum += parseFloat(el.value);
    console.log(sum);
  });
  document.getElementById("tf-door-sum-width-all-id").value = sum;
}

/**
 * @function [sumAllWidthTreugFrontonFrontsves] Функцыя подсчета всех сумарных высот дверных проемов в треугольных фронтонах
 * @param {number} widthTreugolFrontonFrontsves - переменная для поля сумарной высот из формы
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
 * @function [sumAllWidthDoors] Функцыя подсчета всех сумарных ширин дверных проемов
 * @param {number} widthDoors - переменная для поля сумарной ширины из формы
 * @param {forEach} function (el) - перебор полей сумарных ширин по всем формам
 * @param {number} sum - складываем все поля сумарных ширин из всех созданных форм
 */
function sumAllWidthDoors() {
  let widthDoors = document.getElementsByClassName("door_sum-width");
  let sum = 0;
  [].forEach.call(widthDoors, function (el) {
    sum += parseFloat(el.value);
    console.log(sum);
  });
  document.getElementById("door_sum-width-all-id").value = sum;
}

/**
 * @function [sumAllHeightVneshUgol] Функцыя подсчета всех сумарных высот внешних углов из всех форм
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
 * @function [sumAllHeightInnerUgol] Функцыя подсчета всех сумарных высот внутренних углов из всех форм
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
 * @function [sumAllHeightTreugFrontonFrontsves] Функцыя подсчета всех сумарных высот фронтонных свесов в треугольных фронтонах
 * @param {number} heightTreugolFrontonFrontsves - переменная для поля сумарной высот из формы
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
 * Кнопка добавления новой формы для стен в разделе стены
 * @param {node} node - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormStenaId} newFormStenaId - добавляем новую форму
 */
let newFormStenaId = 1;
let node = document.getElementById("walls-form-id").cloneNode(true);

document.querySelector(".add-form").addEventListener("click", function() {
let newClonedNode = node.cloneNode(true);
document.querySelector(".walls").appendChild(newClonedNode);
newClonedNode.id = "walls-form-id-" + newFormStenaId;
newClonedNode.name = "walls-form-id-" + newFormStenaId;
newFormStenaId++;
});

/**
 * Кнопка показа формы для количества стен в разделе стены
 * @param {remove} - удаляет класс hidden у формы
 * @function [remuveBtnStena] remuveBtnStena - добавляет класс hidden к кнопке показать форму
 * @param {newFormWindow} newFormWindow - добавляем новую форму
 */
document.querySelector(".show-form-stena").addEventListener("click", function() {
  document.getElementById("walls-wrp-id").classList.remove("hidden"); 
  remuveBtnStena(); 
}); 
function remuveBtnStena() {
  document.getElementById("show-form-stena-id").classList.add("hidden"); 
 }

/**
 * Кнопка добавления новой формы для оконных проемов в разделе стены
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormWindow} newFormWindow - добавляем новую форму
 */
let newFormWindow = 1;
let nodeWindow = document.getElementById("windows-form-id").cloneNode(true);

document.querySelector(".add-form-window").addEventListener("click", function() {
let newClonedNode = nodeWindow.cloneNode(true);
document.querySelector(".windows").appendChild(newClonedNode);
newClonedNode.id = "windows-form-id-" + newFormWindow;
newClonedNode.name = "windows-form-id-" + newFormWindow;
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

document.querySelector(".add-form-door").addEventListener("click", function() {
let newClonedNode = nodeDoor.cloneNode(true);
document.querySelector(".doors").appendChild(newClonedNode);
newClonedNode.id = "doors-form-id-" + newFormDoor;
newClonedNode.name = "doors-form-id-" + newFormDoor;
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

document.querySelector(".add-form-ugols-vnesh").addEventListener("click", function() {
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

document.querySelector(".add-form-ugols-inner").addEventListener("click", function() {
let newClonedNode = nodeInnerUgol.cloneNode(true);
document.querySelector(".ugols-inner").appendChild(newClonedNode);
newClonedNode.id = "add-form-ugols-inner-" + newFormInnerUgol;
newClonedNode.name = "add-form-ugols-inner-" + newFormInnerUgol;
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

document.querySelector(".add-form-tf").addEventListener("click", function() {
let newClonedNode = nodeTreugFronton.cloneNode(true);
document.querySelector(".tf").appendChild(newClonedNode);
newClonedNode.id = "tf-form-id-" + newFormTreugFronton;
newClonedNode.name = "tf-form-id-" + newFormTreugFronton;
newFormTreugFronton++;
});

/**
 * Кнопка добавления новой формы для оконных проемов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonWindow} newFormTreugFrontonWindow - добавляем новую форму
 */
let newFormTreugFrontonWindow = 1;
let nodeTreugFrontonWindow = document.getElementById("tf-window-form-id").cloneNode(true);

document.querySelector(".add-form-tf-window").addEventListener("click", function() {
let newClonedNode = nodeTreugFrontonWindow.cloneNode(true);
document.querySelector(".tf-window").appendChild(newClonedNode);
newClonedNode.id = "tf-window-form-id-" + newFormTreugFrontonWindow;
newClonedNode.name = "tf-window-form-id-" + newFormTreugFrontonWindow;
newFormTreugFrontonWindow++;
});

/**
 * Кнопка добавления новой формы для дверных проемов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonDoor} newFormTreugFrontonDoor - добавляем новую форму
 */
let newFormTreugFrontonDoor = 1;
let nodeTreugFrontonDoor = document.getElementById("tf-door-form-id").cloneNode(true);

document.querySelector(".add-form-tf-door").addEventListener("click", function() {
let newClonedNode = nodeTreugFrontonDoor.cloneNode(true);
document.querySelector(".tf-door").appendChild(newClonedNode);
newClonedNode.id = "tf-door-form-id-" + newFormTreugFrontonDoor;
newClonedNode.name = "tf-door-form-id-" + newFormTreugFrontonDoor;
newFormTreugFrontonDoor++;
});

/**
 * Кнопка добавления новой формы для фронтальных свесов в разделе треугольный фронтон
 * @param {newClonedNode} newClonedNode - переменная для всей формы
 * @param {cloneNode} newClonedNode - получаем форму и клонируем ее
 * @param {newFormTreugFrontonFrontsves} newFormTreugFrontonFrontsves - добавляем новую форму
 */
let newFormTreugFrontonFrontsves = 1;
let nodeTreugFrontonFrontsves = document.getElementById("tf-frontsves-form-id").cloneNode(true);

document.querySelector(".add-form-tf-frontsves").addEventListener("click", function() {
let newClonedNode = nodeTreugFrontonFrontsves.cloneNode(true);
document.querySelector(".tf-frontsves").appendChild(newClonedNode);
newClonedNode.id = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
newClonedNode.name = "tf-frontsves-form-id-" + newFormTreugFrontonFrontsves;
newFormTreugFrontonFrontsves++;
});

/**
 * @function [deleteForm] Функцыя удаления формы для стен
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumPerimeters()] вызываем функцию подсчета всех периметров со всех форм для стен
 * @function [sumAreas()] вызываем функцию подсчета всех площадей со всех форм для стен
 */
function deleteForm(btn) {
    let forms = document.getElementsByClassName('walls-form') ;
    if (forms.length > 1){
        btn.parentElement.remove();
        sumPerimeters();
        sumAreas();
    }
}

/**
 * @function [deleteFormTreugFronton] Функцыя удаления формы для размера треугольного фронтона
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAreasTreugFronton()] вызываем функцию подсчета всех площадей со всех форм для размера треугольного фронтона
 */
function deleteFormTreugFronton(btn) {
  let forms = document.getElementsByClassName('tf-form') ;
  if (forms.length > 1){
      btn.parentElement.remove();
      sumAreasTreugFronton();
  }
}

/**
 * @function [deleteFormWindow] Функцыя удаления формы оконных проемов в стенах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthWindows()] вызываем функцию подсчета всех ширин со всех формах оконных проемах для стен
 * @function [sumAreasWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для стен
 */
function deleteFormWindow(btn) {
  let forms = document.getElementsByClassName('windows-form') ;
  if (forms.length > 1){
      btn.parentElement.remove();
      sumAllWidthWindows();
      sumAreasWindow();
  }
}

/**
 * @function [deleteFormTreugFrontonWindow] Функцыя удаления формы оконных проемов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonWindows()] вызываем функцию подсчета всех ширин со всех форм оконных проемов для треугольных фронтонов
 * @function [sumAreasTreugFrontonWindow()] вызываем функцию подсчета всех площадей оконных проемов со всех форм для треугольных фронтонов
 */
function deleteFormTreugFrontonWindow(btn) {
  let forms = document.getElementsByClassName('tf-window-form') ;
  if (forms.length > 1){
      btn.parentElement.remove();
      sumAllWidthTreugolFrontonWindows();
      sumAreasTreugFrontonWindow();
  }
}

/**
 * @function [deleteFormTreugFrontonDoor] Функцыя удаления формы дверных проемов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonDoor()] вызываем функцию подсчета всех ширин со всех форм дверных проемов для треугольных фронтонов
 * @function [sumAreasTreugFrontonDoor()] вызываем функцию подсчета всех площадей дверных проемов со всех форм для треугольных фронтонов
 */
function deleteFormTreugFrontonDoor(btn) {
  let forms = document.getElementsByClassName('tf-door-form') ;
  if (forms.length > 1){
      btn.parentElement.remove();
      sumAllWidthTreugFrontonDoor();
      sumAreasTreugFrontonDoor();
  }
}

/**
 * @function [deleteFormTreugFrontonFrontsves] Функцыя удаления формы фронтонных свесов в треугольных фронтонах
 * @param {forms} forms - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthTreugFrontonFrontsves()] вызываем функцию подсчета всех ширин со всех форм фронтонных свесов для треугольных фронтонов
 * @function [sumAreasTreugFrontonFrontsves()] вызываем функцию подсчета всех площадей фронтонных свесов со всех форм для треугольных фронтонов
 */
function deleteFormTreugFrontonFrontsves(btn) {
  let forms = document.getElementsByClassName('tf-frontsves-form') ;
  if (forms.length > 1){
      btn.parentElement.remove();
      sumAllWidthTreugFrontonFrontsves();
      sumAllHeightTreugFrontonFrontsves();
      sumAreasTreugFrontonFrontsves();
  }
}

/**
 * @function [deleteFormDoor] Функцыя удаления формы для дверных проемов
 * @param {formsDoor} formsDoor - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllWidthDoors()] вызываем функцию подсчета всех сумарных ширин со всех форм для дверных проемов
 * @function [sumAreasDoor()] вызываем функцию подсчета всех площадей со всех форм для дверных проемов
 */
function deleteFormDoor(btn) {
  let formsDoor = document.getElementsByClassName('doors-form') ;
  if (formsDoor.length > 1){
      btn.parentElement.remove();
      sumAllWidthDoors();
      sumAreasDoor();
  }
}

/**
 * @function [deleteFormVneshUgol] Функцыя удаления формы для подсчета внешних углов
 * @param {formsVneshUgol} formsVneshUgol - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllHeightVneshUgol()] вызываем функцию подсчета всех высот со всех форм для внешних углов
 */
function deleteFormVneshUgol(btn) {
  let formsVneshUgol = document.getElementsByClassName('ugol-vnesh-form') ;
  if (formsVneshUgol.length > 1){
      btn.parentElement.remove();
      sumAllHeightVneshUgol();
  }
}

/**
 * @function [deleteFormInnerUgol] Функцыя удаления формы для подсчета внутренних углов
 * @param {formsInnerUgol} formsVneshUgol - переменная для всей формы
 * @param {remove} remove - удаляем форму
 * @function [sumAllHeightInnerUgol()] вызываем функцию подсчета всех высот со всех форм для внутренних углов
 */
function deleteFormInnerUgol(btn) {
  let formsInnerUgol = document.getElementsByClassName('ugol-inner-form') ;
  if (formsInnerUgol.length > 1){
      btn.parentElement.remove();
      sumAllHeightInnerUgol();
  }
}

