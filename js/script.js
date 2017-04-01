function Mystere() {
	var nombreMystere = Math.floor(Math.random() * 100) + 1;
	var coup = 0;

	while (coup < 10) {
		var saisi = prompt(' Il te reste ' + (10 - coup) + ' essai pour trouver le nombre mystere !.');
		if (saisi == nombreMystere) {
			coup = 10;
		} else {
			if (saisi > nombreMystere) {
				alert(' Le nombre mystere est plus petit !');
			}
			if (saisi < nombreMystere) {
				alert(' Le nombre mystere est plus grand !');
			}
			coup += 1;
		}
	}
	if (saisi != nombreMystere) {
		alert('Perduuuuu , Le nombre mystere est : ' + nombreMystere + '.');
	} else {
		alert('Gangnerrr , Le nombre mystere est : ' + nombreMystere + '.');

	}
}
