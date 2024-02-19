import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import MovieDetailsScreen from "./screens/MovieDetailsScreen";
import MovieScreen from "./screens/MovieScreen";
import LikedScreen from "./screens/LikedScreen";
import ProfileScreen from "./screens/ProfileScreen";
import SearchScreen from "./screens/SearchScreen";

const Stack = createNativeStackNavigator();

// Navigation bileşenini bir fonksiyon olarak tanımla
const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    contentStyle: { backgroundColor: 'black' } // Arka plan rengini burada belirleyin
                }}
            >
                <Stack.Screen
                    name="Movie"
                    component={MovieScreen}
                    options={{ headerShown: false }} />
                <Stack.Screen
                    name="Movie Details"
                    component={MovieDetailsScreen}
                    options={{ presentation: "modal", headerShown: false }}
                />
                <Stack.Screen name="Liked" component={LikedScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Search" component={SearchScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

// Navigation bileşenini dışarıya aktar
export default Navigation;
