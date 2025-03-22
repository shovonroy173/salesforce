import {View, StyleSheet, Text} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const DropdownInput = ({label, placeholder, options}) => {
  const [value, setValue] = useState(null);
  return (
    <View className="flex gap-1">
      <Text
        className="font-SemiBold"
        style={{fontSize: responsiveFontSize(1.7)}}>
        {label}
      </Text>
      <Dropdown
        style={styles.dropdown}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        itemTextStyle={styles.selectedTextStyle}
        data={options}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        searchPlaceholder="Search..."
        value={value}
        onChange={item => {
          setValue(item.value);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderColor: '#9ca3af',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 20,
  },
  placeholderStyle: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
    color: '#3f3f46',
  },
  selectedTextStyle: {
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
  },
  inputSearchStyle: {
    height: 50,
    fontSize: responsiveFontSize(1.6),
    fontFamily: 'Poppins-Regular',
    borderColor: '#9ca3af',
    borderRadius: 6,
  },
});

export default DropdownInput;
