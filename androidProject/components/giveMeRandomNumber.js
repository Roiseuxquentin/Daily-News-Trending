const giveMeRandomNumber = (min,max) => {
	const debut = Math.ceil(min)
	const fin = Math.floor(max)
	const randomNb = Math.floor(Math.random() * (debut - fin)) + fin
	return randomNb
}

export default giveMeRandomNumber