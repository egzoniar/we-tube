import API_KEY from '../../youtube-api.keys';

export const youtubeApiUrl = ({ q, maxResults }) => `https://www.googleapis.com/youtube/v3/search?maxResults=${maxResults}&part=snippet&q=${q}&key=${API_KEY}&type=video`