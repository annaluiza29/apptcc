import { StyleSheet } from "react-native";
import colors from "../../styles/colors";
import fonts from "../../styles/fonts";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
    },

    header:{
        
        backgroundColor: '#fafafa',
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.1,
        elevation: 6,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        height: 55,
    },

    menu:{
        position: 'absolute',
        left: 20,
        alignSelf: "center",
        top: 10,
    },

    logo:{
        width: 150,
        height: 55,
        alignSelf: "center"
    },

    containerHeader:{
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },

    titleTasks:{
        flexDirection: 'row',
        marginBottom: 5,
        marginTop: 50,
    },

    greeting:{
        fontSize: 18,
        color: colors.heading,
        fontFamily: fonts.text,
        alignSelf: "center",
    },

    userName:{
        fontSize: 22,
        color: colors.heading,
        lineHeight: 40,
        fontFamily: fonts.text,
    },

    image:{
        width: 70,
        height: 70,
        borderRadius: 30
    },

    lenghtText:{
        color: colors.green, 
        fontSize: 35, 
        fontFamily: fonts.text,
    },

    tasks:{
        marginTop: 20,
        marginBottom: 50,
    },

    taskBackground:{
        backgroundColor: '#333333'
    },

    tasksText:{
        marginTop: 10,
        fontSize: 20,
        marginBottom: 10,
        color: '#000'
    },

    logout:{
        position: 'absolute',
        right: 0,
        color: colors.red,
        alignSelf: "center"
    },

    containerBox:{
        width: '90%',
        alignSelf: "center",
        marginBottom: 25,
        border: '10px solid #E28934'
    },

    box:{
        backgroundColor: 'white',
        flexDirection: 'column',
        padding: 10,
        marginTop: 30,
        borderRadius: 15,
        borderWidth: 2,
        borderColor: '#E28934',
        shadowOpacity: 1,
        elevation: 5,
        shadowRadius: 15,
        shadowOffset : { width: 1, height: 5},
        height: 300,
    },

    boxUnder:{
        borderBottomWidth: 1,
        borderBottomColor: '#7FCFEF'
    },

    rText:{
        fontSize: 20,
        color: 'gray',
        fontFamily: fonts.text,
    },

    textFooter:{
        borderTopColor: '#ccc',
        paddingTop: 15, 
        paddingBottom: 10, 
        borderTopWidth: 1,
        color: '#FFF',
        backgroundColor: '#871003',
        textAlign: 'center',
        fontSize: 15,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        fontFamily: fonts.text,
    },

    iconRegistered:{
        justifyContent: 'center',
        alignSelf: 'center',
    },

    textos:{
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    informacoesG:{
        alignSelf: "center",
        display: 'flex',
        flexDirection: 'row',
    },

    informacoes:{
        padding: 15
    },

    informacoes2:{
        display: 'flex',
        flexDirection: 'row',
    },

    titleInfo:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#E28934',
    },

    textInfo:{
        fontFamily: fonts.text,
        fontSize: 16    
    },

    circleProgressView:{
        flexDirection: 'row',
        alignSelf: "center",
        marginTop: 10,
    },

    textProgress:{
        fontFamily: fonts.text,
        fontSize: 16,
        color: 'gray',
    },

    textProgressTitle:{
        fontFamily: fonts.text,
        fontSize: 17,
        color: '#000',
    },

    textProgressContainer:{
        alignSelf: "center",
        display: 'flex',
        width: 180,
        paddingLeft: 15
        
       },

    numberInside:{
        fontFamily: fonts.text,
        fontSize: 18,
        color: '#000',
        textDecorationLine: 'underline',

    },

    boxContainer:{
        marginRight: 20,
        width: 200,
        marginLeft: 10,
    }
})