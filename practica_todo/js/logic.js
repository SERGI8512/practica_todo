let tareas = new Array()
let sectionTareas = document.querySelector('#sectionTareas');
let sectionForm = document.querySelector('#sectionForm');

tareas = [
    {
        idTarea: 0, titulo: "pasear perro", prioridad: "diaria"
    },
    {
        idTarea: 1, titulo: "follar", prioridad: "urgente"
    },
    {
        idTarea: 2, titulo: "pagar alquiler", prioridad: "urgente"
    }
]

function printTareas() {
    tareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>
        <button id="btnDelet" onclick="deleteTarea(${tarea.idTarea})">ELIMINAR</button>`
    ))
}

function createForm() {
    let inputForm = document.querySelector('#inputForm');
    let selectForm = document.querySelector('#selectForm');

    let nuevaTarea = { idTarea: (tareas[tareas.length - 1] ? tareas[tareas.length - 1].idTarea + 1 : 1), titulo: inputForm.value, prioridad: selectForm.value }
    tareas.push(nuevaTarea)
    sectionTareas.innerHTML = ""
    tareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>
        <button id="btnDelet" onclick="deleteTarea(${tarea.idTarea})">ELIMINAR</button>`
    ))
}

function deleteTarea(idTarea) {

    let tarea = tareas.find(tarea => tarea.idTarea === idTarea);
    positionTarea = tareas.indexOf(tarea)
    tareas.splice(positionTarea, 1)
    sectionTareas.innerHTML = ""
    tareas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>
    <button id="btnDelet" onclick="deleteTarea(${tarea.idTarea})">ELIMINAR</button>`
    ))
}

function filtrarTareas() {
    let selectFiltroValue = document.querySelector('#selectTarea').value;
    let inputFiltroValue = document.querySelector('#inputFilter').value;
    let tareasFiltradas = tareas.filter(tarea => tarea.prioridad.includes(selectFiltroValue));
    tareasFiltradas = tareasFiltradas.filter(tarea => tarea.titulo.includes(inputFiltroValue));

    sectionTareas.innerHTML = ""
    tareasFiltradas.forEach(tarea => (
        sectionTareas.innerHTML += `<article>${tarea.titulo}</article>
    <button id="btnDelet" onclick="deleteTarea(${tarea.idTarea})">ELIMINAR</button>`
    ))
}
printTareas();
