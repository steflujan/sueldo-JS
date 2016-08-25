var horasTrabajadas = prompt("Ingrese horas trabajadas en la semana");
       horasTrabajadas = parseInt(horasTrabajadas);
var pagoPorHora = prompt("Ingrese pago por hora en s/.");
       pagoPorHora = parseInt(pagoPorHora);
var sueldoSemanal = horasTrabajadas*pagoPorHora;
document.write("su sueldo semanal es: s/.");
document.write(sueldoSemanal);
/*
var num1 = prompt ("Duración de la llamada");
var num2 = prompt ("Costo por minuto");
document.write("El costo de la llamada es: ");
document.write(parseInt(num1)*parseInt(num2));
*/