import { View, Text ,Image} from 'react-native'
import React ,{useState,useRef,useEffect}from 'react'
import * as MediaLibrary from 'expo-media-library';
import { Camera, CameraType } from 'expo-camera';
import stylesCamera from '../styles/styleCamera';
import Button from '../components/Button';


export default function CameraClassification(){
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

    const saveImage=async()=>{
        if(image){
            try {
                await MediaLibrary.createAssetAsync(image)
                alert('Picture save')
                setImage(null)
            } catch (error) {
                console.log(error)
            }
        }
    }

    const takePicture=async()=>{
        if (cameraRef) {
            try {
                const data=await cameraRef.current.takePictureAsync()
                console.log(data)
                setImage(data.uri)
            } catch (error) {
                console.log(error)
            }
        }
    }

    if(hasCameraPermission==false){
        return <Text>No access to camera</Text>
    }
  return (
    <View style={stylesCamera.container}>
        {!image ?
      <Camera
        style={stylesCamera.camera}
        type={type}
        flashMode={flash}
        ref={cameraRef}
      >
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:30
        }}>
            <Button icon={'retweet'} onPress={()=>{setType(type===CameraType.back ? CameraType.front :CameraType.back)}}></Button>
            <Button icon={'bolt'} 
                color={flash === Camera.Constants.FlashMode.off ? 'gray': '#f1f1f1'}
                onPress={()=>{setFlash(flash===Camera.Constants.FlashMode.off
                ? Camera.Constants.FlashMode.on
                : Camera.Constants.FlashMode.off
            )}}></Button>
        </View>
      </Camera>
      :
      <Image source={{uri: image}} style={stylesCamera.camera}></Image>
        }
      <View>
        {image ?
        <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            paddingHorizontal:60
        }}>
            <Button title={"Re-take"} icon="undo" onPress={()=>setImage(null)}></Button>
            <Button title={"Save"} icon="check-circle" onPress={saveImage}></Button>
        </View>
        :
        <Button title={'Toma una fotografia'} icon="camera" onPress={takePicture}></Button>
        }
        </View>
    </View>
  )
}