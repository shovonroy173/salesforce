/* eslint-disable react-native/no-inline-styles */
import {View, FlatList} from 'react-native';
import React from 'react';
import {
  responsiveWidth,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import {basic} from '../../../assets/data/data';
import Option from '../../components/Option';

const BasicScreen = () => {
  return (
    <View
      // className="flex-row flex-wrap justify-center"
      style={{
        paddingVertical: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(5),
      }}>
      <FlatList
        data={basic}
        renderItem={({item}) => <Option item={item} />}
        keyExtractor={item => item.id.toString()}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          marginBottom: responsiveHeight(2),
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default BasicScreen;
