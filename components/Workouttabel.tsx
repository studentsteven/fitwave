import { StyleSheet, Text, View } from "react-native";

export default function Workouttabel({ oefeningen }) {
  return (
    <View style={styles.table}>
      <View style={styles.oefening}>
        <Text style={styles.tableHeader}>Oefening</Text>
        <Text style={styles.tableHeader}>Aantal</Text>
      </View>

      {oefeningen.map((oefening, index) => (
        <View key={index} style={styles.oefening}>
          <Text style={styles.tableRow}>{oefening.naam}</Text>
          <Text style={styles.tableRow}>{oefening.aantal}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  table: {
    marginBottom: 10,
    width: 300,
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 16,
  },
  tableRow: {
    fontSize: 16,
  },
  oefening: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
