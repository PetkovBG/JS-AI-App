

const WeatherDescription = (prompt, weatherData) => {
    console.log('weather Desc component');

    const url = 'https://api.openai.com/v1/chat/completions';

    const sysMsg = `In a conversational professional tone, answer the [Question] based on the [Weather Data]

    - Provide an opinion about what the weather feels like.
    - Provide temperature in either Celsius or Fahrenheit, whichever is more appropriate. 
    - Never display the temperature in Kelvin. 
    - Provide a recommendation on how to prepare and what to wear(e.g.bring an umbrella, wear a wind breaker, a warm jacket, etc.)`;


    const newPrompt = `Question: ${prompt}. Weather Data: ${JSON.stringify(weatherData)}`

    const data = {
        model: 'gpt-4-turbo-preview',
        messages: [
            {role: "system", content: sysMsg},
            {role: "user", content: newPrompt},
        ]
    }
    const params = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        method: 'POST',
    }

    return fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
        console.log('weather Desc data', data);
        return data.choices[0].message.content
    })
    .catch((error) => {
        console.log('Weather Description Error: ', error);
        return Promise.reject('Unable to fetch weather description.')
    })
}

export default WeatherDescription;