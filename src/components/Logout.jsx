import {View, Text, Modal, Pressable, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Logout = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View className="flex-1 justify-start items-end pt-16 pr-8">
          <View className="bg-gray-100 shadow-lg rounded-lg px-8 py-5 gap-3">
            <View className="flex-row gap-2 items-center">
              <MaterialCommunityIcons name="target" size={22} />

              <Text className="font-Medium">Daily Targets</Text>
            </View>
            <View className="flex-row gap-2 items-center relative">
              <Ionicons name="notifications-outline" size={22} />
              <View className="bg-zinc-700 rounded-full px-2 absolute -top-3 left-2">
                <Text className="text-white font-Regular text-center">0</Text>
              </View>
              <Text className="font-Medium">Notifications</Text>
            </View>
            <View className="flex-row gap-2 items-center">
              <MaterialIcons name="logout" size={22} />
              <Text className="font-Medium">Logout</Text>
            </View>
            <Pressable
              onPress={() => setModalVisible(false)}
              className="items-end pt-2">
              <Ionicons name="close-circle-outline" size={24} />
            </Pressable>
          </View>
        </View>
      </Modal>
      <View className=" bg-[#6C5DD3] rounded-b-[50px] flex-row justify-between items-center px-10 py-5">
        <Text className="text-xl font-Bold text-white text-center px-10">
          D-Logic Sales Force Application
        </Text>
        <TouchableOpacity
          onPress={() => {
            setModalVisible(true);
          }}>
          <Entypo name="dots-three-vertical" color="#ffffff" size={20} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Logout;
