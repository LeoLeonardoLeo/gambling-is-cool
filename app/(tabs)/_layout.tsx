import { Tabs } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
  return (
    <Tabs 
      screenOptions={{ 
        tabBarActiveTintColor: '#a9a9ab', //when tab is used this colour
        tabBarInactiveTintColor: '#89898c',

        tabBarStyle: {
          paddingBottom: 5,
          backgroundColor: '#232324',
          borderTopWidth: 0, //removes the white line that is ugly
          elevation: 0, //removes shadow on Android
        },
        headerStyle: {
          height: 70, //the top has a bar, make this bigger or smaller
          backgroundColor: '#232324',
          },
        }}>
    

      <Tabs.Screen 
      name='index' 
      options={{
        title: 'Home',
        tabBarIcon: ({color}) => <FontAwesome size={25} name="home" color={color} />,
        headerTitle: '', //removes title on the top
      }}  />


      <Tabs.Screen name='search' 
      options={{
        title: 'Search',
        tabBarIcon: ({color}) => <FontAwesome name="search" size={25} color={color}/>,
        headerTitle: '',
      }}  />


      <Tabs.Screen name='details'
      options={{
        title: 'Details',
        tabBarIcon: ({color}) => <FontAwesome name="info-circle" size={25} color={color} />,
        headerTitle: '',
      }}  />
    </Tabs>
  );
}