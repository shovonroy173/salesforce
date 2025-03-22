/* eslint-disable react-native/no-inline-styles */
import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import Input from '../../components/Input';
import DropdownInput from '../../components/DropdownInput';
import {register} from '../../../assets/data/data';
import Button from '../../components/Button';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
const RegisterScreen = ({navigation}) => {
  return (
    <View
      className="flex-1 "
      style={{
        paddingVertical: responsiveHeight(5),
        paddingHorizontal: responsiveWidth(5),
        gap: responsiveHeight(3),
      }}>
      <View
        style={{
          gap: responsiveHeight(1),
        }}>
        <Text className="font-SemiBold text-2xl text-center px-5">
          Employee Register
        </Text>
        <TouchableOpacity className="flex items-center  relative">
          <Image
            source={require('../../../assets/images/image.webp')}
            style={{
              width: responsiveWidth(20),
              height: responsiveWidth(20),
              objectFit: 'cover',
              borderRadius: 50,
              borderWidth: 1,
              borderColor: '#6C5DD3',
            }}
          />
          <AntDesign
            name="pluscircle"
            size={24}
            className="absolute bottom-3 right-40"
            color="#6C5DD3"
          />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-grow" showsVerticalScrollIndicator={false}>
        {register.map(item => (
          <View key={item.id} className="mb-5">
            {item.type === 'text' ? (
              <Input label={item.label} placeholder={item.placeholder} />
            ) : (
              <DropdownInput
                label={item.label}
                options={item.options}
                placeholder={item.placeholder}
              />
            )}
          </View>
        ))}
      </ScrollView>

      <Button title="Register" navigation={navigation} path="Login" />
      <View className="flex flex-row gap-2 justify-center">
        <Text className="text-gray-500 font-Regular">
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text className="text-[#6C5DD3] font-Bold">Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default RegisterScreen;
