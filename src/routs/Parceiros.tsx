// NotificationsScreen.tsx

import React from 'react';
import { Button, View } from 'react-native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

type RootDrawerParamList = {
  Home: undefined;
  Notifications: undefined;
};

type NotificationsScreenProps = {
  navigation: DrawerNavigationProp<RootDrawerParamList, 'Notifications'>;
};

export function Parceiros({ navigation }: NotificationsScreenProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      
    </View>
  );
}

  