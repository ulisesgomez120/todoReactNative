import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import TodoList from "./components/TodoList";
import { tempData } from "./tempData";
import StyledModal from "./components/StyledModal";
import CreateList from "./components/CreateList";

export default function App() {
  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal((state) => !state);
  }
  return (
    <View style={styles.container}>
      <StyledModal show={showModal} toggle={toggleModal}>
        <CreateList toggle={toggleModal} />
      </StyledModal>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.divider} />
        <Text style={styles.heading}>
          Todo <Text style={styles.subheading}>List</Text>
        </Text>
        <View style={styles.divider} />
      </View>
      <View>
        <TouchableOpacity style={styles.addListBtn} onPress={toggleModal}>
          <AntDesign name='plus' size={28} color='goldenrod'></AntDesign>
        </TouchableOpacity>
        <Text style={{ color: "goldenrod", marginVertical: 10 }}>
          Add A List
        </Text>
      </View>
      <View style={{ height: 250, marginLeft: 30, marginTop: 25 }}>
        <FlatList
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={tempData}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => <TodoList list={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "steelblue",
    alignItems: "center",
    justifyContent: "center",
  },
  divider: {
    height: 2,
    flex: 1,
    backgroundColor: "goldenrod",
    alignSelf: "center",
  },
  heading: {
    fontSize: 38,
    color: "#222",
    paddingHorizontal: 24,
    fontWeight: "bold",
  },
  subheading: {
    fontWeight: "300",
    color: "goldenrod",
  },
  addListBtn: {
    alignItems: "center",
    marginTop: 18,
    padding: 10,
    borderWidth: 1,
    borderColor: "goldenrod",
  },
});
