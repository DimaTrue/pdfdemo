import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import styles from './styles';

export default props => {
  if (props.active) {
    return (
      <View style={[styles.tabButton, styles.tabButtonActive, props.style]}>
        <Text>{props.title}</Text>
      </View>
    );
  }

  return (
    <TouchableOpacity
      style={[styles.tabButton, props.style]}
      onPress={props.onPress}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
