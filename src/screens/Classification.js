import { View, Text,Image } from 'react-native'
import React, { useState,useRef, useEffect } from 'react'


export default function Classification() {
   
  return (
    <View>
      <View>
        <Image
            source={require("../assets/logEC.png")}
            style={{width:150,height:150,justifyContent:'center',top:150}}
        ></Image>
      </View>
    </View>
  )
}