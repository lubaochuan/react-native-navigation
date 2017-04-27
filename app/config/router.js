import React from 'react';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Feed from '../screens/Feed';
import Settings from '../screens/Settings';
import UserDetail from '../screens/UserDetail';
import Me from '../screens/Me';

export const Tabs = TabNavigator({
  Feed: {
    screen: Feed,
    navigationOptions: {
      tabBar: {
        label: 'Feed',
        icon: ({ tintColor }) => <Icon name="list" size={35} color={tintColor} />
      },
    },
  },
  Me: {
    screen: Me,
    navigationOptions: {
      tabBar: {
        label: 'Me',
        icon: ({ tintColor }) => <Icon name="account-circle" size={35} color={tintColor} />
      },
    },
  },
});
