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
  },
  Me: {
    screen: Me,
  },
});
