import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  TextInput
} from 'react-native';


import { connect } from 'react-redux';
import { login } from '../actions/userActions';

export class Login extends Component < state,props > {

    constructor(props){
        super(props);
        this.state = {
            validLogin : false,
            userInputText: '',
        }
    }

    onLoginButtonClicked =()=> {


        console.log ( this.state.userInputText);
        if ( this.state.validLogin ){

            this.props.login({
                username:this.state.userInputText,
                password:'testpassword',
            })
        } else{
            this.props.login({
                username:this.state.userInputText,
                password:'testpassword',
            })
        }

        this.setState ({
            validLogin: !this.state.validLogin,
        })
    }

    render(){

        return(
                   <View style = {styles.container} >  
                        
                        {this.state.validLogin ? <SuccessPage successMessage = 'success' /> : <FailurePage>}
                        

                        <TextInput
                            style={{height: 40, width: 100, borderColor: 'gray', borderWidth: 1}}
                            onChangeText={ (text) => this.setState({userInputText: text})}
                            value={this.state.userInputText}
                        />

                        <Text> {this.props.user.userName} </Text>

                        <TouchableHighlight onPress = {this.onLoginButtonClicked} > 
                                <Text> Click me </Text>
                        </TouchableHighlight>
                         

                 </View>     
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });


const mapStateToProps = state => ({
    user: state.userReducer,
});

const mapDispatchToProps = dispatch => ({

    login:(userCredentials) => dispatch ( login(userCredentials)),
    

});

export default connect ( mapStateToProps, mapDispatchToProps) (Login);