import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { WebView } from 'react-native-webview'
import styles from './player.styles'
import EmptyList from '../../components/EmptyList'
import RNFS from 'react-native-fs'
import Video from 'react-native-video'

const PlayerScreen = ({ route }) => {
  if (!route.params)
    route.params = { videoId: '' }

  const [id, setId] = useState('')
  const [file, setFile] = useState({ name: '', path: '' });

  useEffect(() => {
    const { videoId } = route.params
    setId(videoId)
    // loadVideo()
    console.log(videoId)
  }, [route.params.videoId])

  const URL = 'https://file-examples.com/wp-content/uploads/2017/04/file_example_MP4_640_3MG.mp4'
  const filename = "myfile.mp4"

  const loadVideo = () => {
    let path_name = RNFS.DownloadDirectoryPath + '/' + filename;

    RNFS.exists(path_name).then(exists => {
      if (exists) {
        console.log("Already downloaded in: " + path_name);
      }
      else {
        console.log('Downloading...')
        RNFS.downloadFile({
          fromUrl: URL,
          toFile: path_name.replace(/%20/g, "_"),
          background: true
        })
          .promise.then(res => {
            console.log("File Downloaded", res);
          })
          .catch(err => {
            console.log("err downloadFile", err);
          });
      }
    });
  }

  const getVideoUrl = (url, filename) => {
    return new Promise((resolve, reject) => {
      RNFS.readDir(RNFS.DownloadDirectoryPath)
        .then(result => {
          result.forEach(element => {
            if (element.name == filename.replace(/%20/g, "_")) {
              resolve(element.path);
            }
          });
        })
        .catch(err => {
          reject(url);
        });
    });
  };

  const call = (url, filename) => {
    getVideoUrl(url, filename)
      .then(res => {
        setFile({ name: filename, path: res })
      })
      .catch(url => {
        setFile({ name: filename, path: url })
      });
  }

  return (
    <View style={styles.container}>
      {/* {(file.path !== '') ?
        <View style={{ width: '100%' }}>
          <Video
            playInBackground={true}
            resizeMode="contain"
            style={{ width: '100%', height: '40%', borderWidth: 1, borderColor: 'red' }}
            source={{ uri: file.path }} />
          <Image style={{ width: 300, height: 150, borderWidth: 1, borderColor: 'red' }} source={{ uri: file.path }} />
        </View>
        : null}
      <Text style={styles.text}>{file.title}</Text>
      <Button title="Load file from storage" onPress={() => call(URL, filename)} /> */}
      {id ? <WebView
        style={styles.webView}
        originWhitelist={['https://www.youtube.com/embed/*']}
        source={{ uri: "https://www.youtube.com/embed/" + id }}
        startInLoadingState={true}
      /> : <EmptyList text='home' />}
    </View>
  )

}

export default PlayerScreen;