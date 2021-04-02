
const redditAPI = {
    async getData() {
        let url = 'https://www.reddit.com/r/popular.json';

        try {
            let response = await fetch(url);
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
            }
        } catch(error) {
            console.log(error)
        }
    }
}