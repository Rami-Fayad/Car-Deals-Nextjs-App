export const fetchCars = async () => {
    const headers = {
        'x-rapidapi-key': process.env.NEXT_PUBLIC_RAPID_API_KEY || '',
        'x-rapidapi-host': process.env.NEXT_PUBLIC_RAPID_API_HOST || ''
    }

    try {
        const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', {
            headers: headers,
        });

        const result = await response.json();
        return result;
    } catch (error) {
        console.error('Error fetching cars:', error);
        return [];
    }
}

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
};

      