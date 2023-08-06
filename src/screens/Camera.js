import { View, Text } from 'react-native'
import React from 'react'
import * as MediaLibrary from 'expo-media-library';
import { Camera } from 'expo-camera';
import stylesCamera from '../styles/styleCamera';


export default function Camera() {
    const [hasCameraPermission,setHasCameraPermission]=useState()
    const [image,setImage]=useState(null)
    const [type,setType]=useState(Camera.Constants.Type.back)
    const [flash,setFlash]=useState(Camera.Constants.FlashMode.off)

    const cameraRef=useRef(null)

    useEffect(()=>{
        (async()=>{
            MediaLibrary.requestPermissionsAsync()
            const cameraStatus=await Camera.requestCameraPermissionsAsync()
            setHasCameraPermission(cameraStatus.status==='granted')
        })()
    },[])
  return (
    <View style={stylesCamera.container}>
      <Camera
        type={type}
        flashMode={flash}
        ref={cameraRef}
      ></Camera>
    </View>
  )
}