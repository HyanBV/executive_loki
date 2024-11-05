/* ------------------------------------------------------------

                      SECOND EXERCIES, REVIEWED

--------------------------------------------------------------- */ 


// Changed all "var"s to "let"s.
let formulario = document.querySelector(".formulario"); // Fixed query type, from id to class.

// Form submission handler; changed the "e" for an "event"; Optional change, but cleaner POV.
formulario.onsubmit = function(event) {

  // Renamed variables to facilitate reading and debugging.
  event.preventDefault();
  
  let nombreField = formulario.elements[0];
  let edadField = formulario.elements[1];
  let nacionalidadField = formulario.elements[2];

  let nombre = nombreField.value
  let edad = parseInt(edadField.value);

  let nacionalidadIndex = nacionalidadField.selectedIndex;
  let nacionalidad = nacionalidadField.options[nacionalidadIndex].value;

  // Validate name & age
  if (nombre.length === 0) {
    nombreField.classList.add("error");
  } else {
    nombreField.classList.remove("error");
  }

  if ( edad < 18 || edad > 120 || isNaN(edad)) {
    edadField.classList.add("error");
  } else {
    edadField.classList.remove("error");
  }

  // If valid, add the guest.
  if (nombre.length > 0 && edad >= 18 && edad <= 120) {
    agregarInvitado(nombre, edad, nacionalidad);
  }
};

  let botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.id = "boton-borrar";


// Deleted unnecessary dual submission button.


// Swapped functions for a switch case.
function agregarInvitado(nombre, edad, nacionalidad) {

  switch (nacionalidad) {
      case "ar":
        nacionalidad = "Argentina";
        break;
      case "mx":
        nacionalidad = "Mexicana";
        break;
      case "vnzl":
        nacionalidad = "Venezolana";
        break;
      case "per":
        nacionalidad = "Peruana";
        break;
  }

  let lista = document.getElementById("lista-de-invitados");
  if (!lista) {
    lista = document.createElement("div");
    lista.id = "lista-de-invitados";
    document.body.appendChild(lista);
  }


  let elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  lista.appendChild(elementoLista);

  // Deleted duplicate variables to prevent duality output.
  function crearElemento(descripcion, valor) {
    let spanLabel = document.createElement("span");
    let inputField = document.createElement("input");
    let lineBreak = document.createElement("br");

    spanLabel.textContent = descripcion + ": ";
    inputField.value = valor;
    inputField.readOnly = true; // Make input field read-only

    elementoLista.appendChild(spanLabel);
    elementoLista.appendChild(inputField);
    elementoLista.appendChild(lineBreak);
  }

  // Create fields for name, age, and nationality
  crearElemento("Nombre", nombre);
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);


  // Add delete button to guest element
  let deleteButton = document.createElement("button");
  deleteButton.textContent = "Eliminar invitado";
  deleteButton.id = "boton-borrar";
  elementoLista.appendChild(document.createElement("br"));
  elementoLista.appendChild(deleteButton);

  // Event handler for deleting the guest element
  deleteButton.onclick = function() {
    elementoLista.remove();
  };
}