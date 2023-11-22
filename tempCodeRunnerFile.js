const app = async () => {
    var url = 'http://api.mediastack.com/v1/news?access_key=a6e8354df60fb47c4c07c7242e0dcc73&keywords=tennis&countries=us,gb,de';
    var req = new Request(url);

    try {
        const response = await fetch(req);
        const result = await response.json();

        // Check if there are articles in the result
        if (result.data && result.data.length > 0) {
            // Loop through the articles and log title and URL
            result.data.forEach(article => {
          
                console.log(`Title: ${article.title}`);
                console.log(`URL: ${article.url}`);
            });
        } else {
            console.log('No articles found.');
        }
    } catch (error) {
        console.error(error);
    }
};

app();
