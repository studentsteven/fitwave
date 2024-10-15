import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useUserData = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const loadUserData = async () => {
      try {
        const storedUsername = await AsyncStorage.getItem("username");
        const storedEmail = await AsyncStorage.getItem("email");
        const storedUserId = await AsyncStorage.getItem("userId");

        if (storedUsername) setUsername(storedUsername);
        if (storedEmail) setEmail(storedEmail);
        if (storedUserId) setUserId(storedUserId);
      } catch (error) {
        console.error("Error loading user data from AsyncStorage", error);
      }
    };

    loadUserData();
  }, []);

  return { username, email, userId };
};
