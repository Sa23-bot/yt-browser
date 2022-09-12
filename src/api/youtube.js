import axios from 'axios';

// youtube api: AIzaSyDzdlJKiqA-quSYQ1yDSTEUkXnVQUvZZk0

const KEY = 'AIzaSyDzdlJKiqA-quSYQ1yDSTEUkXnVQUvZZk0';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 10,
        key: `${KEY}`
    }
})

