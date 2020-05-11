import React, { useState, useEffect } from 'react'
import { Button, View, Image, Text, StyleSheet, Dimensions } from 'react-native'
import { WebView } from 'react-native-webview'
import AsyncStorage from '@react-native-community/async-storage'
import RNFS from 'react-native-fs'
const { width } = Dimensions.get('window')

const BASE_PATH = RNFS.ExternalStorageDirectoryPath + '/WeTube/'

const OnlinePlayer = props => {
  const { videoId, item } = props

  const filename = item.title + ".mp4"
  const youtubeURL = 'https://www.youtube.com/embed/' + videoId
  const downloadURL = 'https://wetubed.herokuapp.com/download?videoId=' + videoId

  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [downloadProgress, setDownloadProgress] = useState(0)

  const saveToStorage = async videoItem => {
    const videos = await AsyncStorage.getItem('savedVideos') // string or null
    if (videos === null) {
      AsyncStorage.setItem('savedVideos', JSON.stringify([videoItem]))
      return;
    }

    const vidArr = JSON.parse(videos)
    vidArr.push(videoItem)
    AsyncStorage.setItem('savedVideos', JSON.stringify(vidArr))
  }

  const downloadVideo = () => {
    let path_name = BASE_PATH + filename;

    RNFS.exists(path_name).then(exists => {
      if (exists) {
        console.log("Already downloaded in: " + path_name);
      }
      else {
        console.log('Downloading...')
        let progressUpdateCount = 0
        setDownloading(true)
        RNFS.downloadFile({
          fromUrl: downloadURL,
          toFile: path_name.replace(/%20/g, "_"),
          background: true,
          progress: res => {
            // console.log("Response written ===\n\n");
            let progressPercent = (res.bytesWritten / res.contentLength) * 100; // to calculate in percentage
            // console.log("\n\nprogress===", progressPercent)

            if ((~~progressPercent) >= 90) {
              setDownloadProgress(~~progressPercent);
            }
            else if (progressUpdateCount >= 100) {
              setDownloadProgress(~~progressPercent);
              progressUpdateCount = 0
            }
            progressUpdateCount++
          }
        })
          .promise.then(res => {
            setDownloading(false)
            setDownloaded(true)
            console.log("File Downloaded", res);

            saveToStorage({
              ...item,
              videoPath: BASE_PATH + filename,
              thumbPath: 'file:///' + BASE_PATH + filename
            })
          })
          .catch(err => {
            console.log("err downloadFile", err);
          });
      }
    });
  }

  return (
    <View>
      <WebView
        style={styles.webView}
        originWhitelist={['https://www.youtube.com/embed/*']}
        source={{ uri: youtubeURL }}
        startInLoadingState={true}
      />
      {(downloading) ? <Text>Downloading progress: {downloadProgress}%</Text> : null}
      {(downloaded) ? null : <Button title="Download" onPress={downloadVideo} />}
    </View>
  )
}

const styles = StyleSheet.create({
  webView: {
    width
  }
})

export default OnlinePlayer
