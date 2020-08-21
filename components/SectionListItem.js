import React from 'react';
import { View,Text,Image,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


export default function SectionListItem(props){
    const { book ,onPress } =props;
    return (
        <ScrollView horizontal={true}>
            <TouchableOpacity activeOpacity={0.5} onPress= {onPress}>
                <View style = {styles.container} >
                    <Text style = {styles.title}>{book.name}</Text>
                    <Image style={styles.image} source={book.images} />
                    <Text>{book.price}</Text>
                </View>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    image : {
        width:100,
        height:150,
    },
    container : {
        alignItems: 'center',
        backgroundColor : 'green',
        padding : 16,
        shadowColor : '#000',
        marginBottom : 10,
    },
    title : {
        marginBottom : 10,
        textTransform : 'uppercase',
        fontWeight : '700'
    }

});