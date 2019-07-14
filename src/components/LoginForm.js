
import { Formik } from 'formik';
import React, { Component, Fragment } from 'react';
import {
  TextInput, Text, TouchableOpacity, StyleSheet, View
} from 'react-native';

import { validationLogin } from '../helpers/validationLogin';


class LoginForm extends Component {
  handleSubmit = async (values) => {
    const { logIn } = this.props;
    await logIn(values);
  };

  render() {
    const { switchForm } = this.props;
    return (
      <View>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={values => this.handleSubmit(values)}
          validationSchema={validationLogin}
        >
          {({
            values, handleChange, errors, setFieldTouched, touched, handleSubmit
          }) => (
            <Fragment>
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
                value={values.password}
                onChangeText={handleChange('password')}
                placeholder="Password"
                onBlur={() => setFieldTouched('password')}
                secureTextEntry
              />
              {touched.password && errors.password
                && <Text style={styles.errorText}>{errors.password}</Text>
              }
              <TouchableOpacity
                style={styles.button}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Sign In</Text>
              </TouchableOpacity>
            </Fragment>
          )}
        </Formik>
        <View style={styles.toSignUpBlock}>
          <Text style={styles.toSignUpText}>
            New to ProductsApp?
          </Text>
          <TouchableOpacity onPress={switchForm}>
            <Text style={styles.linkText}>Create an account.</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default LoginForm;

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
