import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AllUsers } from "./SRC/AllUsers";
import { ProfileScreen } from "./SRC/ProfileScreen";


const AllUsersStack = ({ route, navigation }) => {
      return (
            <AllUsers navigation={navigation} route={route} />
      )
}

const ProfileScreenStack = ({ route, navigation }) => {
      return (
            <ProfileScreen navigation={navigation} route={route} />
      );
}

const Stack = createNativeStackNavigator();

function App(props) {
      return (
            <NavigationContainer>
                  <Stack.Navigator initialRouteName="AllUsers">
                        <Stack.Screen name="AllUsers" component={AllUsersStack} />
                        <Stack.Screen name="Profile" component={ProfileScreenStack} />
                  </Stack.Navigator>
            </NavigationContainer>
      );
}

export default App;
