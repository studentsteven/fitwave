import "@/global.css";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Button from "./Button";
import { Actionsheet, ActionsheetBackdrop } from "./ui/actionsheet";

export default function Caltoevoegen() {
  const [showActionsheet, setShowActionsheet] = useState(false);
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");
  const [errors, setErrors] = useState({ name: "", calories: "" });

  const handleClose = () => {
    setShowActionsheet(false);
    setName("");
    setCalories("");
    setErrors({ name: "", calories: "" });
  };

  const handleAdd = () => {
    let isValid = true;

    // Validate name input
    if (name.trim() === "") {
      setErrors((prev) => ({ ...prev, name: "Naam is verplicht." }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, name: "" })); // Clear error
    }

    // Validate kcal input
    if (calories.trim() === "") {
      setErrors((prev) => ({ ...prev, calories: "Kcal is verplicht." }));
      isValid = false;
    } else {
      setErrors((prev) => ({ ...prev, calories: "" })); // Clear error
    }

    if (isValid) {
      handleClose();
    }
  };

  return (
    <>
      <Button
        text="Calorieën toevoegen"
        pressFunc={() => setShowActionsheet(true)}
      />
      <Actionsheet
        isOpen={showActionsheet}
        onClose={handleClose}
        style={styles.sheet}
      >
        <ActionsheetBackdrop />
        <View>
          <View style={styles.bovenkant}>
            <Text>Calorieën toevoegen</Text>
            <TouchableOpacity onPress={handleClose}>
              <Image
                source={require("@/assets/close.png")}
                style={{ height: 24, width: 24 }}
              />
            </TouchableOpacity>
          </View>
          <TextInput
            style={[
              styles.input,
              { marginTop: 40 },
              errors.name ? styles.errorInput : null,
            ]}
            placeholder="Naam"
            placeholderTextColor="black"
            autoCapitalize="none"
            value={name}
            onChangeText={setName}
          />
          {errors.name ? (
            <Text style={styles.errorText}>{errors.name}</Text>
          ) : null}
          <TextInput
            style={[
              styles.input,
              { marginTop: 7 },
              errors.calories ? styles.errorInput : null,
            ]}
            placeholder="Kcal"
            placeholderTextColor="black"
            autoCapitalize="none"
            keyboardType="numeric"
            value={calories}
            onChangeText={setCalories}
          />
          {errors.calories ? (
            <Text style={styles.errorText}>{errors.calories}</Text>
          ) : null}
          <View style={{ marginTop: "10%" }}>
            <Button text="Toevoegen" pressFunc={handleAdd} />
          </View>
        </View>
      </Actionsheet>
    </>
  );
}

const styles = StyleSheet.create({
  sheet: {
    display: "flex",
    backgroundColor: "white",
    height: 300,
    top: "61%",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    padding: 12,
    borderWidth: 1,
    borderColor: "grey",
    borderStyle: "solid",

    // iOS shadow properties
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    // Android shadow
    elevation: 24,
  },
  bovenkant: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    height: 40,
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    borderRadius: 8,
    color: "black",
    padding: 10,
  },
  errorInput: {
    borderColor: "red",
    borderWidth: 2,
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
});
