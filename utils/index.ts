export async function fetchCars() {
    const header = {
		'X-RapidAPI-Key': '136b71cf89msh504cebe67151e3cp123561jsncdb1171a0a92',
		'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    const response = await fetch("https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla", {
        method: 'GET',
        headers: header
    })

    const result = await response.json()

    return result;
}  