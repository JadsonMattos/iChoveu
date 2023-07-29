// Remova os comentários a medida que for implementando as funções

export const searchCities = async (term) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const urlAPI = `https://api.weatherapi.com/v1/search.json?lang=pt&key=${TOKEN}&q=${term}`;

  try {
    const response = await fetch(urlAPI);
    const cities = await response.json();
    if (cities.length === 0) {
      window.alert('Nenhuma cidade encontrada');
    }
    return cities;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getWeatherByCity = async (cityURL) => {
  const TOKEN = import.meta.env.VITE_TOKEN;
  const urlAPI = `https://api.weatherapi.com/v1/current.json?key=${TOKEN}&q=${cityURL}`;
  const response = await fetch(urlAPI);
  const data = await response.json();
  return {
    temp: data.current.temp_c,
    condition: data.current.condition.text,
    icon: data.current.condition.icon,
  };
};

//   try {
//     const response = await fetch(urlAPI);
//     const data = await response.json();
//     const actual = {
//       temp: data.current.temp_c,
//       condition: data.current.condition.text,
//       icon: data.current.condition.icon,
//     };
//     return actual;
//   } catch (error) {
//     console.error(error);
//     return null;
//   }
// };
