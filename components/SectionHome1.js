import React, { Component } from 'react';
import {StyleSheet,View,ScrollView,Text,SafeAreaView,Image, SectionList} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FlatList } from 'react-native-gesture-handler';
import SectionListItem from './SectionListItem';


export default class SectionHome1 extends Component{

    constructor(props){
        super(props);
        this.state= {
            data : [],
            Loading : true
        }
    }

    componentDidMount(){
        fetch('https://raw.githubusercontent.com/TheSon-devv/demo/master/db.json')
        .then((response) => response.json())
        .then((json) => {
            this.setState( {data:json.book});
        })
        .catch((error) => console.error(error))
        .finally(() => {
            this.setState( {Loading:false});
        })
    }

    render(){
        const { data,Loading } = this.state;
        return(
            <View style={styles.container}>
                <FlatList 
                    data={data}
                    renderItem={({item}) => (
                        <View style={styles.listItem}>
                            <Text>{item.name}</Text>
                        </View>
                    )}
                    keyExtractor={item => `${item.id}`}
                />
            </View>
                
        )
    }
}

const styles = StyleSheet.create({
    container : {
        width: 100,
        backgroundColor:'red',
    },
    listItem:{
        width:100,
        height:100
    }
})