
const giveMeFrenchDay = () => {
	const aujourdhui = new Date()
	const day = aujourdhui.getDay()

	switch (day) {
		case 0 : 
			return "Dimanche"
			break;
	case 1 : 
			return "Lundi"
			break;
	case 1 : 
			return "Mardi"
			break;
	case 1 : 
			return "Mercredi"
			break;
		case 4 :
			return "Jeudi"
			break;
	case 5 : 
			return "Vendredi"
			break;
	case 6 : 
			return "Samedi"
			break;
		default :
			return 'Semaine'
	}

}

export default giveMeFrenchDay