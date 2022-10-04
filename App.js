import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Alert,
  StatusBar,
  TextInput,
  Modal,
  Pressable,
} from "react-native";
import Header from "./components/Header";
import { v4 as uuidv4 } from "uuid";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([
    {
      id: uuidv4(),
      text: "Tomar café",
    },
    {
      id: uuidv4(),
      text: "Estudar",
    },
    {
      id: uuidv4(),
      text: "Apostar",
    },
    {
      id: uuidv4(),
      text: "Almoçar",
    },
  ]);

  const deleteItem = (id) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== id);
    });
  };

  const editItem = (id) => {
    setModalVisible(true);
    setIdToEdit(id);
  };

  const saveNewText = (text) => {
    if (text === '' || text === undefined) {
      console.log(text);
      Alert.alert("Erro", "Por favor, digite o nome da sua tarefa", [
        {
          text: "Ok",
        },
      ]);
    } else {
      setItems((prevItems) => {
        return prevItems.filter((item) => item.id !== idToEdit);
    });
      setItems((prevItems) => {
        return [{ id: idToEdit, text: text }, ...prevItems];
    });
      setModalVisible(false);
    }
  };

  const itemAdd = (text) => {
    console.log(text);
    if (text === '' || text === undefined) {
      console.log(text);
      Alert.alert("Erro", "Por favor, digite o nome da sua tarefa", [
        {
          text: "Ok",
        },
      ]);
    } else {
      setItems((prevItems) => {
        return [{ id: uuidv4(), text: text }, ...prevItems];
      });
    }
  };

  const [modalVisible, setModalVisible] = useState(false);
  const [newText, setNewText] = useState("");
  const [idToEdit, setIdToEdit] = useState("");

  return (
    <View style={styles.container}>
      <StatusBar style={styles.status} />
      <Header title="Tarefas diárias" />
      <AddItem itemAdd={itemAdd} />
      <Text style={styles.text}>Suas tarefas</Text>
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} editItem={editItem} />
        )}
      />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Editar tarefa</Text>
                <TextInput
                  placeholder="Novo nome da tarefa"
                  style={styles.input}
                  value={newText}
                  onChangeText={(text) => setNewText(text)}
                />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    saveNewText(newText)
                    setNewText('');
                  }}
                >
                  <Text style={styles.textStyle}>Salvar</Text>
                </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};


// stylesheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    marginTop: 32,
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default App;
