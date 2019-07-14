import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import {
  TextInput, Text, TouchableOpacity, StyleSheet, View
} from 'react-native';

import { validationSignUp } from '../helpers/validationSignUp';


class SignUpForm extends Component {
  handleSubmit = (values) => {
    const { signUp } = this.props;
    signUp(values);
  };

  render() {
    const { switchForm } = this.props;
    return (
      <View>
        <Formik
          initialValues={{
            username: '', email: '', password1: '', password2: ''
          }}
          onSubmit={values => this.handleSubmit(values)}
          validationSchema={validationSignUp}
        >
          {({
            values, handleChange, errors, setFieldTouched, touched, handleSubmit
          }) => (
            <Fragment>
              <TextInput
                style={styles.input}
                value={values.username}
                onChangeText={handleChange('username')}
                onBlur={() => setFieldTouched('username')}
                placeholder="Username"
              />
              {touched.username && errors.username
                && <Text style={styles.errorText}>{errors.username}</Text>
              }
              <TextInput
                style={styles.input}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                placeholder="E-mail"
              />
              {touched.email && errors.email
                && <Text style={styles.errorText}>{errors.email}</Text>
              }
              <TextInput
                style={styles.input}
                value={values.password1}
                onChangeText={handleChange('password1')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password1')}
                secureTextEntry
              />
              {touched.password1 && errors.password1
                && <Text style={styles.errorText}>{errors.password1}</Text>
              }
              <TextInput
                style={styles.input}
                value={values.password2}
                onChangeText={handleChange('password2')}
                placeholder="Confirm password"
                onBlur={() => setFieldTouched('password2')}
                secureTextEntry
              />
              {touched.password2 && errors.password2
                && <Text style={styles.errorText}>{errors.password2}</Text>
              }
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        </Formik>
        <View style={styles.toSignUpBlock}>
          <Text style={styles.toSignUpText}>
            Do you have a ProductsApp account?
          </Text>
          <TouchableOpacity onPress={switchForm}>
            <Text style={styles.linkText}>Please, sign in.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  input: {
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: '#ced3db',
    textAlign: 'left',
    padding: 10
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 10,
    backgroundColor: '#ced3db',
  },
  buttonText: {
    color: '#fff',
  },
  errorText: {
    textAlign: 'left',
    fontSize: 15,
    color: 'red',
  },
  toSignUpBlock: {
    padding: 10,
    marginTop: 10,
  },
  toSignUpText: {
    textAlign: 'center',
    color: '#ced3db'
  },
  linkText: {
    textAlign: 'center',
    color: 'blue'
  }
});
