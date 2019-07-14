import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import LoginForm from '../components/LoginForm';
import SignUpForm from '../components/SignUpForm';
import { logIn, registrationUser } from '../actions/userData';


class SignInScreen extends Component {
  state = {
    form: 'login',
  }

  switchSignUp = () => this.setState({ form: 'signup' })

  switchLogIn = () => this.setState({ form: 'login' })

  render() {
    const { form } = this.state;
    const { signIn, signUp } = this.props;
    if (form === 'signup') {
      return (
        <View style={styles.container}>
          <SignUpForm
            signUp={signUp}
            switchForm={this.switchLogIn}
          />
        </View>
      );
    } if (form === 'login') {
      return (
        <View style={styles.container}>
          <LoginForm
            logIn={signIn}
            switchForm={this.switchSignUp}
          />
        </View>
      );
    }
  }
}

const mapDispatchToProps = dispatch => ({
  signIn: values => dispatch(logIn(values)),
  signUp: values => dispatch(registrationUser(values))
});

export default connect(null, mapDispatchToProps)(SignInScreen);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
