import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Header = (props) => {
  const { title } = props;
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};


// stylesheet
const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: "#744d9e",
  },
  text: {
    color: "white",
    fontSize: 22,
    textAlign: "center",
    fontWeight: "bold",
  },
});

export default Header;
