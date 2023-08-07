import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F19A34',
      width: "100%",
      height: "100%",
      alignItems: "center"
    },coverPhoto: {
        width: "100%",
        height: 200,
        resizeMode: "cover"
    },avatarContainer: {
        
        alignItems: "center",
        marginTop: -75,
    },avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        borderWidth: 5,
        borderColor: "white", 
    }, name: {
        marginTop: 15,
        fontSize: 20,
        fontWeight: "bold",
        color: 'purple'
    },buttonContainer: {
        flexDirection: "row",
        marginTop: 20,
        width: "60%",
        justifyContent: "space-between"
    }
  });

  export default styles;