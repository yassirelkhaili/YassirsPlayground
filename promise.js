//This code is intended to demonstrate/explain how promises work in real life

const fetchJoke = async() => {
    const endpoint = "https://icanhazdadjoke.com/";
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json", // Set the Accept header to indicate JSON response
        }
      };
    try {
        const response = await fetch(endpoint, options);
        if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          return data;
    } catch (error) {
        throw new Error('there was an error ' + error.message);
    }
}

fetchJoke().then((data) => console.log(data.joke)).catch((error) => console.error(error))