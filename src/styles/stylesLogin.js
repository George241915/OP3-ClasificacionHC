import { StyleSheet } from "react-native";

const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#ffff'

    },

    image:{
        width: '100%',
        height:'100%',
        resizeMode:'cover',

    },

    image1:{
            width: '100%',
            height:'100%',
            resizeMode:'contain',

        },

    card:{
        margin:'auto',
        backgroundColor:'#ffff',
        borderRadius:20,
        width:'50%',
        padding:20,
        shadowColor:'#000',
        shadowOffset:{
            width:0,
            height:2
        },
        shadowOpacity:0.25,
        shadowRadius:4,
        elevation:5
    },
    profilePictures:{
        width:200,
        height:200,
        marginVertical:110,
        marginHorizontal:'auto',
        resizeMode:'contain',

    },

    input: {
        fontSize: 20,
        textAlign:'center',
    },

    boxText:{
        paddingVertical:20,
        backgroundColor:'#cccccc40',
        borderRadius:30,
        marginVertical:10,
        justifyContent: 'center',
        alignItems: 'center',


    },
    button:{
        
        alignItems:'center',

    },
    boxButton:{
        backgroundColor: '#6745A3',
        borderRadius:30,
        paddingVertical:20,
        width:150,
        marginTop:20
    },
    TextButton:{
        textAlign:'center',
        fontSize: 20,

        color:'#ffff'
    }
})

export default styles