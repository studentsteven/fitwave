import AsyncStorage from '@react-native-async-storage/async-storage';

export const getUserdata = async () => {
  try {
    const getUsername = await AsyncStorage.getItem('username');
    const getEmail = await AsyncStorage.getItem('email');
    const getUserId = await AsyncStorage.getItem('user_id');

    if (getUsername !== null && getEmail !== null && getUserId !== null) {
      return {
        username: getUsername,
        email: getEmail,
        userId: getUserId,
      };
    } else {
      alert('NO SESSION FOUND! Going back to login.');
      return null;
    }
  } catch (e) {
    console.error(e);
    return null;
  }
};
