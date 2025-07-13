function mostrarInfo(asignatura) {
  const info = {
    biologia: "Biología: 5 créditos. Prerrequisito: Ninguno.",
    quimica: "Química: 4 créditos. Prerrequisito: Biología."
  };
  document.getElementById('contenido-info').innerText = info[asignatura];
  document.getElementById('info').style.display = 'block';
}

function cerrarInfo() {
  document.getElementById('info').style.display = 'none';
}
