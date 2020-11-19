import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import StyledModal from "./StyledModal";

function ShowTodos({ list: { name, color, todos }, complete }) {
  return (
    <View style={styles.showTodosContainer}>
      <View style={[styles.showTododsHeader, { borderBottomColor: color }]}>
        <Text style={styles.showTodosTitle}>{name}</Text>
        <Text style={{ color: "gray" }}>
          {complete} of {todos.length} tasks
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => <Text>{item.title} </Text>}
        />
      </View>
    </View>
  );
}

export default function TodoList({ list }) {
  const complete = list.todos.filter(({ completed }) => completed).length;
  const unfinished = list.todos.length - complete;

  const [showModal, setShowModal] = React.useState(false);

  function toggleModal() {
    setShowModal((state) => !state);
  }

  return (
    <View>
      <StyledModal show={showModal} toggle={toggleModal}>
        <ShowTodos list={list} complete={complete}></ShowTodos>
      </StyledModal>
      <TouchableOpacity
        style={[styles.listContainer, { backgroundColor: list.color }]}
        onPress={toggleModal}>
        <Text style={styles.title}>{list.name}</Text>
        <View style={styles.center}>
          <Text style={styles.showNum}>{complete}</Text>
          <Text>Completed</Text>
        </View>
        <View style={styles.center}>
          <Text style={styles.showNum}>{unfinished}</Text>
          <Text>Unfinished</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    paddingVertical: 28,
    paddingHorizontal: 16,
    borderRadius: 6,
    marginHorizontal: 12,
    width: 200,
    alignItems: "center",
  },
  title: {
    color: "white",
    fontSize: 23,
    fontWeight: "700",
  },
  showNum: {
    color: "white",
    fontSize: 26,
    marginVertical: 9,
  },
  center: {
    alignItems: "center",
  },
  // modal
  showTodosContainer: {
    flex: 1,
    paddingTop: 16,
  },
  showTodosTitle: {
    fontSize: 26,
    fontWeight: "700",
  },
  showTododsHeader: {
    marginLeft: 45,
    borderBottomWidth: 5,
    paddingVertical: 12,
  },
});
