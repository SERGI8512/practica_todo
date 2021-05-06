let tareas = new Array()
let sectionTareas = document.querySelector('#sectionTareas');
let sectionForm = document.querySelector('#sectionForm');

tareas = [
    { idTarea: 0, titulo: "pasear perro", prioridad: "diaria", color: "skyblue" },
    { idTarea: 1, titulo: "follar", prioridad: "urgente", color: "tomato" },
    { idTarea: 2, titulo: "pagar alquiler", prioridad: "mensual", color: "green" }
]

function printTareas(printTareas) {
    sectionTareas.innerHTML = ""
    printTareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article class="flex-container-tareas ${tarea.color}">${tarea.titulo}
        <button id="btnDelet" onclick="deleteTarea(${tarea.idTarea})">ELIMINAR</button></article>`
    ))
}

function createForm() {
    let inputForm = document.querySelector('#inputForm');
    let selectForm = document.querySelector('#selectForm');

    let nuevaTarea = { idTarea: (tareas[tareas.length - 1] ? tareas[tareas.length - 1].idTarea + 1 : 1), titulo: inputForm.value, prioridad: selectForm.value }
    tareas.push(nuevaTarea)
    printTareas(tareas)
}

function deleteTarea(idTarea) {
    let tarea = tareas.find(tarea => tarea.idTarea === idTarea);
    positionTarea = tareas.indexOf(tarea)
    tareas.splice(positionTarea, 1)
    printTareas(tareas)
}

function filtrarTareas() {
    let selectFiltroValue = document.querySelector('#selectTarea').value;
    let inputFiltroValue = document.querySelector('#inputFilter').value;
    let tareasFiltradas = tareas.filter(tarea => tarea.prioridad.includes(selectFiltroValue));
    tareasFiltradas = tareasFiltradas.filter(tarea => tarea.titulo.includes(inputFiltroValue));

    printTareas(tareasFiltradas)
}

printTareas(tareas);
