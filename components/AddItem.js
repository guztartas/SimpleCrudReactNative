import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ itemAdd }) => {
  const [text, setText] = useState("");

  return (
    <View style={styles.AddItem}>
      <Text style={styles.text}>Adicionar uma nova tarefa: </Text>
      <TextInput
        placeholder="Nome da tarefa"
        style={styles.input}
        value={text}
        onChangeText={(text)=> setText(text)}
      />
      <TouchableOpacity style={styles.btn} onPress={() => {
        setText('');
        itemAdd(text);
      }}>
        <Text style={styles.btntext}>Adicionar</Text>
      </TouchableOpacity>
    </View>
  );
};


// stylesheet
const styles = StyleSheet.create({
  input: {
    margin: 20,
    height: 60,
    padding: 10,
    fontSize: 16,
    borderRadius: 10,
    borderWidth: 1,
    marginTop: 5,
  },
  btn: {
    backgroundColor: "#744d9e",
    padding: 9,
    margin: 20,
    marginTop: 5,
    marginBottom: 50,
    borderRadius: 10,
  },
  btntext: {
    color: "white",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    marginTop: 20,
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default AddItem;
