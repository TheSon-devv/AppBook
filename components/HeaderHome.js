import React, { Component } from 'react';
import {StyleSheet,View,ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { SearchBar } from 'react-native-elements';

export default class HeaderHome extends Component{
    render(){

        return(
            <Container style={{marginBottom:100}}>
            <Header>
              <Left>
                <Button transparent>
                  <Icon name='search' />
                </Button>
              </Left>
              <Body>
                <Title> BookMarket</Title>
              </Body>
              <Right>
                <Button transparent>
                  <Icon name='cart' />
                </Button>
              
              </Right>
            </Header>
          </Container>
        )
    }
}