import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const ListItem = ({ item, deleteItem, editItem }) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <View style={styles.icons}>
          <Ionicons
            name="pencil"
            size={20}
            color="orange"
            onPress={() => editItem(item.id)}
            style={styles.editIcon}
          />
          <Ionicons
            name="trash"
            size={20}
            color="red"
            onPress={() => deleteItem(item.id)}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};


// stylesheet
const styles = StyleSheet.create({
  listItem: {
    padding: 15,
    margin: 20,
    marginBottom: 2,
    marginTop: 5,
    backgroundColor: "#04a1fe",
    borderBottomWidth: 1,
    borderColor: "#eee",
    borderRadius: 10,
  },
  listItemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  listItemText: {
    fontSize: 18,
    color: "white",
  },
  icons: {
    margin: 0,
    flexDirection: "row",
  },
  editIcon: {
    marginRight: 12,
  }
});

export default ListItem;
