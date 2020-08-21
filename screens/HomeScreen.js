import React, { Component } from 'react';
import {StyleSheet,View,ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import HeaderHome from '../components/HeaderHome';
import SectionHome1 from '../components/SectionHome1';

export default class HomeScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            
        }
    }
    render(){

        return(
            <View>
                
                <View>
                    <SectionHome1 />
                </View>
            </View>
        )
    }
}
