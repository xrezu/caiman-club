// Declaramos las variables para hacer el slider del número de comensales y poder sacar el valor del mismo
const numComensalesRange = document.getElementById('numComensales');
const numComensalesValue = document.getElementById('numComensalesValue');

// Añadimos el evento para que se actualice el valor del slider
numComensalesRange.addEventListener('input', () => {
  numComensalesValue.textContent = `Número de Comensales: ${numComensalesRange.value}`;
});

// Creamos la función para validar el formulario
function validarFormulario(event) {
  // Evitar el envío automático del formulario
  event.preventDefault();

  // Obtenemos los valores de los campos de formulario
  var nombre = document.getElementById('nombre').value;
  var telefono = document.getElementById('telefono');
  var email = document.getElementById('email');
  var fecha = document.getElementById('fecha');
  var hora = document.getElementById('hora');
  var numComensales = document.getElementById('numComensales').value;

  // Flag para evitar múltiples alertas
  var hayErrores = false;

  // Comprobamos que no haya campos vacíos
  if (!nombre || !telefono.value || !email.value || !fecha.value || !hora.value || !numComensales) {
    Swal.fire('Error', 'Por favor, complete todos los campos.', 'error');
    hayErrores = true;
    return;
  }

  // Validación del formato del teléfono móvil
  var telefonoRegex = /^[0-9]{9}$/;
  if (!telefonoRegex.test(telefono.value)) {
    Swal.fire('Error', 'Formato de teléfono móvil incorrecto. Debe tener 9 dígitos.', 'error');
    telefono.value = '';
    hayErrores = true;
    return;
  }

  // Validación del formato de correo electrónico
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value)) {
    Swal.fire('Error', 'Formato de correo electrónico incorrecto.', 'error');
    email.value = '';
    hayErrores = true;
    return;
  }

  // Validación de días y horarios permitidos
  var dia = new Date(fecha.value).getDay();
  var horaReserva = new Date('1970-01-01 ' + hora.value);
  var horaLimiteInicio = new Date('1970-01-01 20:30');
  var horaLimiteFin = new Date('1970-01-01 02:30');

  if (dia < 4 || dia > 0) {
    Swal.fire('Error', 'Las reservas solo están disponibles de jueves a domingo.', 'error');
    hayErrores = true;
    return;
  }

  if (horaReserva < horaLimiteInicio || horaReserva > horaLimiteFin) {
    Swal.fire('Error', 'Las reservas solo están disponibles de 20:30 a 2:30.', 'error');
    hayErrores = true;
    return;
  }

  // Si hay errores, no se envía el formulario
  if (hayErrores) {
    return;
  }

  Swal.fire({
    title: '¡Formulario Enviado!',
    text: 'Su reserva se ha enviado correctamente.',
    icon: 'success',
    showCancelButton: false,
    confirmButtonText: 'Ir a "Donde estamos"',
  }).then((result) => {
    if (result.isConfirmed) {
      // Envía el formulario manualmente
      document.getElementById('miFormulario').submit();
    }
  });
}
