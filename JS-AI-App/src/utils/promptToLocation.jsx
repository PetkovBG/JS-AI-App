

const PromptToLocation = (prompt) => {
    const url = "https://api.openai.com/v1/chat/completions";

    const data = {
        model: "gpt-3.5-turbo-0613",
        messages: [{role: 'user', content: prompt}],
        functions: [
            {
                name: 'displayData',
                description: 'Get the current weather in a given location',
                parameters: {
                    type: 'object',
                    properties: {
                        country: {
                            type: 'string',
                            description: 'Country name.',
                        },
                        USstate: {
                            type: 'string',
                            description: 'Two-letter state code.'
                        },
                        city: {
                            type: 'string',
                            description: 'location unit: metric or imperial.'
                        }
                    },
                    required: [
                        'countryCode',
                        'country',
                        'USstate',
                        'state',
                        'city',
                        'unit'
                    ]
                }
            }
        ],
        function_call: 'auto',
    }

    const params = {
        headers: {
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI}`,
            "Content-Type": 'application/json'
        },
        body: JSON.stringify(data),
        method: 'POST'
    }

    return fetch(url, params)
    .then((response) => response.json())
    .then((data) => {
        const promptRes = JSON.parse(
            data.choices[0].message.function_call.arguments
        );
        console.log('promptRes', promptRes);

        const locationString = () => {
            if(promptRes.countryCode === 'US') {
                return `${promptRes.city},${promptRes.state},${promptRes.country}`;
            } else {
                return `${promptRes.city}, ${promptRes.country}`
            }
        }

        const promptData = {
            locationString: locationString(),
            units: promptRes.unit,
            country: promptRes.country,
            USstate: promptRes.USstate,
        }
        return promptData;
    })
    .catch((error) => {
        console.log('Prompt To Location error: ', error);
        return Promise.reject('Unable to identify a location from your question. Please try again.')
    })
}

export default PromptToLocation;