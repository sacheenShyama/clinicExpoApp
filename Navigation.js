import { NavigationContainer } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Doctordetail from "./screens/Doctordetail";
import Patientdetail from "./screens/Patientdetail";
import Payment from "./screens/Payment";
import Home from "./screens/Home";
import { Entypo, Ionicons } from "@expo/vector-icons";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Finddoctor from "./screens/Finddoctor";

//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />
      <HomeStack.Screen name="Register" component={Register} />
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{
          headerShown: false,
        }}
      />
    </HomeStack.Navigator>
  );
}

//Nested screen
function NestedStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} />
      <HomeStack.Screen name="Finddoctor" component={Finddoctor} />
    </HomeStack.Navigator>
  );
}

//Tab Bottom
const Tab = createBottomTabNavigator();
function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarActiveTintColor: "#21a6ad",
      })}
    >
      <Tab.Screen
        name="NestedStack"
        component={NestedStack}
        options={{
          title: "Home",
          tabBarIcon: () => <Entypo name="home" size={24} />,
          headerShown: false,
        }}
      />
      <Tab.Screen name="Doctordetail" component={Doctordetail} />
      <Tab.Screen name="Patientdetail" component={Patientdetail} />
      <Tab.Screen name="Payment" component={Payment} />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <HomeStackGroup />
    </NavigationContainer>
  );
}
