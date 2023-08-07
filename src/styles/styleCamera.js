import { StyleSheet } from "react-native";

const stylesCamera=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingBottom:20
    },
    camera:{
        flex:1,
        borderRadius:20,
    },
    button:{
        height:40,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    text:{
        fontWeight:'bold',
        fontSize:16,
        marginLeft:10,
        color:'#f1f1f1'
    }
})

export default stylesCamera