import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';

type TUser = {
  username: string;
  email: string;
};

export const User = () => {
  const [user, setUser] = useState<TUser>({} as TUser);

  const handleLogin = () => {
    setUser({
      username: 'gorkemdurgun',
      email: 'gorkemdurgun@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser({} as TUser);
  };

  return (
    <View>
      <Text>
        {user.username} {user.email}
      </Text>
      <Button title="Login" onPress={handleLogin} />
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};
