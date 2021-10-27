const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '8137f97bd6cb6b507544155a7801b926',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;