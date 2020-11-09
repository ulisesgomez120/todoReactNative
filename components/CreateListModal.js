import React from "react";
import {
  Modal,
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  TextInput,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { tempData } from "../tempData";

export default function CreateListModal({ show, toggle }) {
  const colors = [
    "#24A6D9",
    "goldenrod",
    "#A4A6D9",
    "#d159d8",
    "#d88559",
    "#d85963",
  ];

  const [inputVal, setInputVal] = React.useState("");
  const [currentColor, setColor] = React.useState(colors[0]);

  function createTodoList() {
    const todo = {
      name: inputVal,
      color: currentColor,
      todos: [],
    };
    setInputVal("");
    tempData.push(todo);
    toggle();
  }

  const colorList = colors.map((col) => {
    return (
      <TouchableOpacity
        style={[styles.colorList, { backgroundColor: col }]}
        key={col}
        onPress={() => setColor(col)}
      />
    );
  });
  return (
    <Modal animationType='slide' visible={show} onRequestClose={toggle}>
      <TouchableOpacity onPress={toggle} style={styles.closeBtn}>
        <AntDesign name='close' size={26} color='gray' />
      </TouchableOpacity>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 35,
        }}>
        <Text style={{ fontSize: 27, fontWeight: "bold" }}>
          Create Todo List
        </Text>
        <TextInput
          style={styles.textInput}
          placeholder='List Name'
          value={inputVal}
          onChangeText={(text) => setInputVal(text)}
        />
        <View style={styles.colorContainer}>{colorList}</View>
        <TouchableOpacity
          style={[styles.createBtn, { backgroundColor: currentColor }]}
          onPress={createTodoList}>
          <Text style={{ color: "white", fontWeight: "600" }}>Create!</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 16,
  },
  textInput: {
    borderColor: "goldenrod",
    borderWidth: 1,
    alignSelf: "stretch",
    borderRadius: 5,
    marginVertical: 10,
    padding: 4,
  },
  createBtn: {
    paddingVertical: 7,
    alignSelf: "stretch",
    borderRadius: 5,
    alignItems: "center",
  },
  colorList: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  colorContainer: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginVertical: 16,
  },
});
