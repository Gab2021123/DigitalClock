const reloj = document.getElementById("reloj");
const relojContainer = document.getElementById("container");
const hora = document.getElementById("hora");
const fecha = document.getElementById("fecha");

const mostrarReloj = () => {
  let fechaActual = new Date();
  let hr = formaHora(fechaActual.getHours());
  let min = formaHora(fechaActual.getMinutes());
  let seg = formaHora(fechaActual.getSeconds());
  hora.innerHTML = `${hr}:${min}:${seg}`;

  const meses = [
    "Diciembre",
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Setiemnre",
    "Octubre",
    "Noviembre",
  ];
  const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes"];
  let diaSemana = dias[fechaActual.getDay()];
  let dia = formatoDia(fechaActual.getDate());
  let mes = meses[fechaActual.getMonth()];
  let year = fechaActual.getFullYear();
  let fechaTexto = `${diaSemana}, ${dia} ${mes} del  ${year}`;
  fecha.innerHTML = fechaTexto;

  relojContainer.classList.toggle("animar");
};

//Formats
const formaHora = (hora) => {
  if (hora < 10) {
    hora = "0" + hora;
  }
  return hora;
};
const formatoDia = (dia) => {
  if (dia < 10) {
    dia = "0" + dia;
  }
  return dia;
};

window.setInterval(mostrarReloj, 1000);

window.addEventListener("load", () => {
  window.addEventListener("focus", () => {
    document.title = "Está corriendo el reloj";
  });
  window.addEventListener("blur", () => {
    document.title = "Está obstruído el reloj";
  });
  mostrarReloj();
});
