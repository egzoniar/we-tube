import moment from 'moment'
import { format } from 'friendly-numbers'
import API_KEY from '../../youtube-api.keys';

const URL = 'https://www.googleapis.com/youtube/v3/'

const getVideosUrlString = q => `${URL}search?maxResults=50&part=snippet&q=${q}&key=${API_KEY}&type=video`

const getVideoDetailsUrlString = videoIds => `${URL}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoIds}&key=${API_KEY}`

// Fetch youtube videos by search keywords
const fetchVideosFromYoutube = async q => {
  try {
    const response = await fetch(getVideosUrlString(q))
    const json = await response.json()

    let videoIds = ''

    if (json.error) throw json

    json.items.forEach((item, idx, arr) => {
      if (idx === 0)
        videoIds += item.id.videoId
      else videoIds += ',' + item.id.videoId
    })

    // fetch other details related to previously fetched videos
    const videoDetailsResponse = await fetch(getVideoDetailsUrlString(videoIds))
    const videoDetailsJson = await videoDetailsResponse.json()
    return videoDetailsJson
  }
  catch (err) {
    return err
  }
}


export const fetchVideos = async q => {
  try {
    const response = await fetchVideosFromYoutube(q)

    if (response.error) throw response

    return response.items.map(item => {
      const { contentDetails, statistics, snippet, id } = item

      return {
        videoId: id,
        title: snippet.title,
        thumbnail: snippet.thumbnails.high.url,
        publishedAt: moment(snippet.publishedAt).fromNow(),
        channelId: snippet.channelId,
        channelTitle: snippet.channelTitle,
        duration: parseDuration(contentDetails.duration),
        views: format(statistics.viewCount)
      }
    })
  }
  catch (err) {
    return err
  }
}

const parseDuration = (iso8601) => {
  let split_time = iso8601.split('T')[1]

  let result = ''
  if (split_time.includes('H')) {
    const tmp_split = split_time.split('H')
    split_time = tmp_split[1]
    const hours = tmp_split[0]
    result += (hours + ':')
  }
  if (split_time.includes('M')) {
    const tmp_split = split_time.split('M')
    split_time = tmp_split[1]
    const minutes = tmp_split[0]
    result += (minutes + ':')
  }
  if (split_time.includes('S')) {
    const tmp_split = split_time.split('S')
    const seconds = tmp_split[0]
    result += (seconds)
  }

  return result
}