import React, { useEffect, useState } from 'react';
import { Text, Button, View, Image } from 'react-native';
import styles from './player.styles'
import EmptyList from '../../components/EmptyList'
import RNFS from 'react-native-fs'
import OnlinePlayer from '../../components/Video-Player/OnlinePlayer';
import OfflinePlayer from '../../components/Video-Player/OfflinePlayer';

const PlayerScreen = ({ route }) => {
  const { params } = route

  const [item, setItem] = useState({})

  useEffect(() => {
    if (params.videoId !== '')
      setItem({ ...params })
  }, [params.videoId])

  const BASE_PATH = RNFS.DownloadDirectoryPath
  const URL = 'https://wetubed.herokuapp.com/download?videoId='
  const filename = "othervideo.mp4"


  const getVideoUrl = (url, filename) => {
    return new Promise((resolve, reject) => {
      RNFS.readDir(BASE_PATH)
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

  const call = (url) => {
    getVideoUrl(url + id, filename)
      .then(res => {
        setFile({ name: filename, path: res })
      })
      .catch(url => {
        setFile({ name: filename, path: url })
      });
  }

  return (
    <View style={styles.container}>
      {
        (params.videoId === '')
          ? <EmptyList text='home' />
          : (params.videoItem.fromHome)
            ? <OnlinePlayer
              item={params.videoItem}
              videoId={params.videoId}
            />
            : <OfflinePlayer />
      }
    </View>
  )

}

export default PlayerScreen;