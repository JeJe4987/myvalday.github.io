document.addEventListener('DOMContentLoaded', function() {
    const latestNews = document.getElementById('latest-news');
    const newsGrid = document.querySelector('.news-grid');

    const newsArticles = [
        { title: 'Berita 1', snippet: 'Cuplikan berita 1...' },
        { title: 'Berita 2', snippet: 'Cuplikan berita 2...' },
        { title: 'Berita 3', snippet: 'Cuplikan berita 3...' },
        { title: 'Berita 4', snippet: 'Cuplikan berita 4...' }
    ];

    newsArticles.forEach(article => {
        const newsDiv = document.createElement('div');
        newsDiv.className = 'news-box';
        newsDiv.innerHTML = `<h4>${article.title}</h4><p>${article.snippet}</p>`;
        newsGrid.appendChild(newsDiv);

        if (latestNews && latestNews.children.length < 3) {
            const latestDiv = document.createElement('div');
            latestDiv.className = 'news-box';
            latestDiv.innerHTML = `<h4>${article.title}</h4><p>${article.snippet}</p>`;
            latestNews.appendChild(latestDiv);
        }
    });
});
