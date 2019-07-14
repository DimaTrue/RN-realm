import { Alert } from 'react-native';

import { client } from './client';


export const signInUser = params => client.post('login/', params);
export const signUpUser = params => client.post('registration/', params).then(res => Alert.alert(`${res.data.user.username} was successfully registered`));

export const signOutUser = () => client.get('logout/').then(res => Alert.alert(res.data.detail));
