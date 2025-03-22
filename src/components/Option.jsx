import {View, Text} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';

const Option = ({item}) => {
  return (
    <View
      className="shadow-md rounded-lg px-6 py-8 flex items-center gap-2 justify-between"
      style={{
        width: responsiveWidth(43),
        paddingVertical: responsiveHeight(3),
      }}
      key={item.id}>
      {item.icon}
      <Text className="font-SemiBold text-lg text-center">{item.title}</Text>
    </View>
  );
};

export default Option;
