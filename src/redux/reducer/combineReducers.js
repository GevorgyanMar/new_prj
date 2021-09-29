import { persistCombineReducers } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import { loginUserReducer } from './userReducer';

const config = {
    key: 'root',
    storage: AsyncStorage,
    // blacklist: ['user']
};

export default persistCombineReducers(config, {
    user: loginUserReducer,
});