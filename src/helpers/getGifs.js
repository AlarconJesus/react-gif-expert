  export const getGif = async(category) => {
    
    const url = `https://api.giphy.com/v1/gifs/search?api_key=8AxIdJSDx22KD8Or1tnZE6Qb7sB7xMFH&q="${category}"&limit=20`;
    const res = await fetch(url);
    const {data} = await res.json();
    
    const gifs = data.map(img => ({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }));
    
    return gifs;
  } 