const Stack = createNativeStackNavigator();
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import SplashScreen from "./screens/SplashScreen";
import HomeScreenOfStaff from "./screens/HomeScreenOfStaff";
import TaskUpdate from "./screens/TaskUpdate";
import PopupForSite from "./components/PopupForSite";
import PopupForAddContractor from "./components/PopupForAddContractor";
import ContractorPopup from "./components/ContractorPopup";
import CreateContractor from "./screens/CreateContractor";
import TaskList from "./screens/TaskList";
import HomeScreenForSupervisor from "./screens/HomeScreenForSupervisor";
import TaskInformation from "./screens/TaskInformation";
import OnboardingScreen from "./screens/OnboardingScreen";
import CreateSite from "./screens/CreateSite";
import StaffRegistration from "./screens/StaffRegistration";
import PopupRejectingTask from "./components/PopupRejectingTask";
import StaffRegistration1 from "./screens/StaffRegistration1";
import SupervisorRegistration from "./screens/SupervisorRegistration";
import PopupforTheWorkflow from "./components/PopupforTheWorkflow";
import PopupForLogin from "./components/PopupForLogin";
import SupervisorRegistration1 from "./screens/SupervisorRegistration1";
import PopupForRegistration from "./components/PopupForRegistration";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { IconRegistry, ApplicationProvider } from "@ui-kitten/components";
import * as eva from "@eva-design/eva";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(true);

  const [fontsLoaded, error] = useFonts({
    "Lato-Regular": require("./assets/fonts/Lato-Regular.ttf"),
    "Lato-Light": require("./assets/fonts/Lato-Light.ttf"),
    "Lato-Bold": require("./assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("./assets/fonts/Lato-BoldItalic.ttf"),
  });

  function MaterialIcon({ name, style }) {
    const { height, tintColor, ...iconStyle } = StyleSheet.flatten(style);
    return (
      <MIcon name={name} size={height} color={tintColor} style={iconStyle} />
    );
  }

  const IconProvider = (name) => ({
    toReactElement: (props) => MaterialIcon({ name, ...props }),
  });

  function createIconsMap() {
    return new Proxy(
      {},
      {
        get(target, name) {
          return IconProvider(name);
        },
      }
    );
  }
  const MaterialIconsPack = {
    name: "material",
    icons: createIconsMap(),
  };

  if (!fontsLoaded && !error) {
    return null;
  }

  return (
    <>
      <IconRegistry icons={[MaterialIconsPack]} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          {hideSplashScreen ? (
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreenOfStaff"
                component={HomeScreenOfStaff}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TaskUpdate"
                component={TaskUpdate}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupForSite"
                component={PopupForSite}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupForAddContractor"
                component={PopupForAddContractor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ContractorPopup"
                component={ContractorPopup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateContractor"
                component={CreateContractor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TaskList"
                component={TaskList}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="HomeScreenForSupervisor"
                component={HomeScreenForSupervisor}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="TaskInformation"
                component={TaskInformation}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="OnboardingScreen"
                component={OnboardingScreen}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="CreateSite"
                component={CreateSite}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffRegistration"
                component={StaffRegistration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupRejectingTask"
                component={PopupRejectingTask}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="StaffRegistration1"
                component={StaffRegistration1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SupervisorRegistration"
                component={SupervisorRegistration}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupforTheWorkflow"
                component={PopupforTheWorkflow}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupForLogin"
                component={PopupForLogin}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="SupervisorRegistration1"
                component={SupervisorRegistration1}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="PopupForRegistration"
                component={PopupForRegistration}
                options={{ headerShown: false }}
              />
            </Stack.Navigator>
          ) : null}
        </NavigationContainer>
      </ApplicationProvider>
    </>
  );
};
export default App;
