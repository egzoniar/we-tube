import AsyncStorage from '@react-native-community/async-storage'
import RNFS from 'react-native-fs'

const BASE_PATH = RNFS.ExternalStorageDirectoryPath + '/WeTube/'
const downloadURL = 'https://wetubed.herokuapp.com/download?videoId='

export const downloadVideo = (item) => {
  const { title, videoId } = item
  const filename = title + '.mp4'
  const pathname = BASE_PATH + filename

  RNFS.exists(pathname).then(exists => {
    if (exists) {
      console.log("Already downloaded in: " + path_name);
      return

    }

    console.log('Downloading...')
    let progressUpdateCount = 0
    RNFS.downloadFile({
      fromUrl: downloadURL,
      toFile: pathname.replace(/%20/g, "_"),
      background: true,
      progress: res => {
        // console.log("Response written ===\n\n");
        let progressPercent = (res.bytesWritten / res.contentLength) * 100; // to calculate in percentage
        // if ((~~progressPercent) >= 90) {
        //   // setDownloadProgress(~~progressPercent);
        // }
        // else if (progressUpdateCount >= 100) {
        //   // setDownloadProgress(~~progressPercent);
        //   progressUpdateCount = 0
        // }
        // progressUpdateCount++
      }
    })
      .promise.then(res => {
        saveToStorage({ title, videoId, videoPath: pathname })
        console.log("File Downloaded");
      })
      .catch(err => {
        console.log("err downloadFile", err);
      });
  })
}

export const getVideos = async () => {
  const videos = await AsyncStorage.getItem('savedVideos')

  if (videos !== null) {
    const videoArr = JSON.parse(videos)
    return videoArr
  }

  return []
}

export const deleteVideo = item => {
  RNFS.unlink(item.videoPath)
    .then(() => deleteFromAS(item.videoId))
    // `unlink` will throw an error, if the item to unlink does not exist
    .catch((err) => deleteFromAS(item.videoId));
}

const deleteFromAS = async videoId => {
  const videos = await AsyncStorage.getItem('savedVideos') // string or null
  if (videos === null) return

  const tmpArr = JSON.parse(videos).filter(vid => vid.videoId !== videoId)
  AsyncStorage.setItem('savedVideos', JSON.stringify(tmpArr))
  console.log('video deleted')
}

const saveToStorage = async videoItem => {
  const videos = await AsyncStorage.getItem('savedVideos') // string or null
  if (videos === null) {
    AsyncStorage.setItem('savedVideos', JSON.stringify([videoItem]))
    return;
  }

  const vidArr = JSON.parse(videos)
  vidArr.unshift(videoItem)
  AsyncStorage.setItem('savedVideos', JSON.stringify(vidArr))
}