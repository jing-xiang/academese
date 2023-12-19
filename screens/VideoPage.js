import React from 'react'
import {View,StyleSheet,Image,StatusBar,Dimensions, Text} from 'react-native'
import { Video } from 'expo-av'
import Chapters from '../screens/Chapters'


const {width, height} = Dimensions.get("window");


const VideoPage = ({ navigation }) => {
    //render(){
        return(
           <View style={style.container}>
               <StatusBar backgroundColor="#f58084"/>
               <Video
                source={require('../images/maintro.mp4')}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping={false}
                useNativeControls
                style={style.video}
               />
               <Chapters
                    color="#fde6e6"
                    percent={25}
                    duration="2 hours, 20 minutes"
                    title="Introduction"
                    num={1}
               />

               <Text style={{
                   fontFamily:"Medium",
                   textAlign:"justify",
                   color:"#345c74",
                   paddingLeft:42,
                   paddingRight:35
               }}>
                   Southeast Asia is a region characterized by diverse political structures and a rich history of political evolution. Historically, the region has witnessed 
                   the rise and fall of various political entities, each shaped by its unique cultural, social, and economic contexts. The political landscape of Southeast Asia
                    has been profoundly influenced by indigenous kingdoms, maritime empires, and the interactions with external powers.
               </Text>
               <View style={{
                   flexDirection:"row",
                   paddingVertical:5,
                   backgroundColor:"#f58084",
                   marginHorizontal:40,
                   paddingVertical:15,
                   alignItems:"center",
                   borderRadius:10,
                   justifyContent:"center",
                   marginTop:20
               }}>
                   <Text style={{
                       color:"#FFF",
                       fontFamily:"Bold",
                       fontSize:15,
                       marginRight:50
                   }}>
                       Read more
                   </Text>
                   <Image source={require('../images/a3.png')}/>
               </View>
           </View>
        )
    }
    export default VideoPage;
const style = StyleSheet.create({
    video:{
        width:width,
        height:height/3
    },
    container:{
        backgroundColor:"#fff",
        justifyContent:"center"
    }
})

