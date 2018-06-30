	var pisoSeleccionado = 18; 
	var pisoActual = 1;
	var dirreccion = prompt("subes o bajas?");
	const primerPiso = 2;
	const ultimoPiso = 20;

	pisoSeleccionado = prompt("a que piso vas?")
    if (dirreccion == "subes") {
    for(pisoActual; pisoActual <= ultimoPiso; pisoActual++) {
		console.log("Estas en el piso" + pisoActual); 
	if (pisoActual == pisoSeleccionado) {
		alert ("llegaste");
		}
}
}
    if (dirreccion == "bajas") {
    	pisoActual = 20;
	for(ultimoPiso; pisoActual >= primerPiso; pisoActual--) {
		console.log("Estas en el piso" + pisoActual); 
	if (pisoActual == pisoSeleccionado) {
		alert ("llegaste");
		}
}
}
	