export const register = [
  {id: 1, label: 'Employee ID', placeholder: 'Enter Employee ID', type: 'text'},
  {
    id: 2,
    label: 'Employee Name',
    placeholder: 'Enter Employee Name',
    type: 'text',
  },
  {
    id: 3,
    label: 'Designation/Role',
    placeholder: 'Choose a designation/role',
    type: 'dropdown',
    options: [
      {label: 'Software Engineer', value: 'Software Engineer'},
      {label: 'Frontend Developer', value: 'Frontend Developer'},
      {label: 'Backend Developer', value: 'Backend Developer'},
      {label: 'Full Stack Developer', value: 'Full Stack Developer'},
      {label: 'Mobile App Developer', value: 'Mobile App Developer'},
      {label: 'Data Scientist', value: 'Data Scientist'},
      {label: 'DevOps Engineer', value: 'DevOps Engineer'},
      {label: 'UI/UX Designer', value: 'UI/UX Designer'},
    ],
  },
  {
    id: 4,
    label: 'User Name / User ID',
    placeholder: 'Enter User ID',
    type: 'text',
  },
  {id: 5, label: 'Password', placeholder: 'Enter your password', type: 'text'},
  {id: 6, label: 'Email', placeholder: 'Enter Email', type: 'text'},
  {
    id: 7,
    label: 'Employee Name',
    placeholder: 'Enter Employee Name',
    type: 'text',
  },
  {id: 8, label: 'Address', placeholder: 'Enter Address', type: 'text'},
  {
    id: 9,
    label: 'Reporting',
    placeholder: 'Choose reporting to',
    type: 'dropdown',
    options: [
      {label: 'Tech Lead', value: 'Tech Lead'},
      {label: 'Tech Lead', value: 'Tech Lead'},
      {label: 'Tech Lead', value: 'Tech Lead'},
      {label: 'Engineering Manager', value: 'Engineering Manager'},
      {label: 'Tech Lead', value: 'Tech Lead'},
      {label: 'Head of Data Science', value: 'Head of Data Science'},
      {label: 'Infrastructure Manager', value: 'Infrastructure Manager'},
      {label: 'Design Lead', value: 'Design Lead'},
    ],
  },
];
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export const basic = [
  {
    id: 1,
    title: 'Financial Year',
    icon: <MaterialCommunityIcons name="credit-card-clock-outline" size={40} />,
  },
  {
    id: 2,
    title: 'Designation',
    icon: <FontAwesome5 name="user-tie" size={40} />,
  },
  {
    id: 3,
    title: 'User/Employee Registration',
    icon: <Ionicons name="person-add-outline" size={40} />,
  },
  {
    id: 4,
    title: 'Region Type',
    icon: <MaterialCommunityIcons name="map-legend" size={40} />,
  },
  {
    id: 5,
    title: 'Region Area',
    icon: <MaterialCommunityIcons name="map-marker-radius-outline" size={40} />,
  },
  {
    id: 6,
    title: 'Institution Type',
    icon: <MaterialCommunityIcons name="office-building-outline" size={40} />,
  },
  {
    id: 7,
    title: 'Institution',
    icon: <MaterialCommunityIcons name="domain" size={40} />,
  },
  {
    id: 8,
    title: 'Books Category',
    icon: <MaterialCommunityIcons name="book-open-page-variant" size={40} />,
  },
  {
    id: 9,
    title: 'Books (Products)',
    icon: <MaterialCommunityIcons name="book-outline" size={40} />,
  },
  {
    id: 10,
    title: 'Party Management',
    icon: <MaterialCommunityIcons name="account-group-outline" size={40} />,
  },
];
