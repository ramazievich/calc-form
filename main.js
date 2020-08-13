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

