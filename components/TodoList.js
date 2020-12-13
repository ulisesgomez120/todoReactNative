import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
  TextInput,
  KeyboardAvoidingView,
} from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import StyledModal from "./StyledModal";

function ShowTodos({
  list: { name, color, todos },
  complete,
  updateCompleted,
}) {
  const [todo, setTodo] = React.useState("");

  function todoHandler(text) {
    setTodo(text);
  }
  function addTodo() {
    const formatTodo = { title: todo, completed: false };
    todos.push(formatTodo);
    setTodo("");
  }
  function toggleTodoCompleted(todo) {
    todo.completed = !todo.completed;
    updateCompleted();
  }
  return (
    <SafeAreaView style={styles.todosContainer}>
      <View style={[styles.tododsHeader, { borderBottomColor: color }]}>
        <Text style={styles.todosTitle}>{name}</Text>
        <Text style={{ color: "gray" }}>
          {complete} of {todos.length} tasks
        </Text>
      </View>
      <View style={{ flex: 3 }}>
        <FlatList
          data={todos}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 13,
              }}>
              <TouchableOpacity onPress={() => toggleTodoCompleted(item)}>
                <Ionicons
                  name={item.completed ? "ios-square" : "ios-square-outline"}
                  size={24}
                  color='gray'
                  style={{ width: 32 }}
                />
              </TouchableOpacity>
              <Text
                style={[
                  styles.listItem,
                  {
                    textDecorationLine: item.completed
                      ? "line-through"
                      : "none",
                    color: item.completed ? "gray" : "black",
                  },
                ]}>
                {item.title}{" "}
              </Text>
            </View>
          )}
          style={styles.flatListContainer}
        />
      </View>
      <KeyboardAvoidingView style={styles.todosFooter} behavior='padding'>
        <TextInput
          value={todo}
          onChangeText={todoHandler}
          placeholder='Add Todo'
          style={[styles.input, { borderColor: color }]}
        />
        <TouchableOpacity
          style={[styles.addTodoBtn, { backgroundColor: color }]}
          onPress={addTodo}>
          <AntDesign name='plus' size={24} color='white' />
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

export default function TodoList({ list }) {
  const [complete, setComplete] = React.useState(
    list.todos.filter(({ completed }) => completed).length
  );
  // finish complete state
  const [showModal, setShowModal] = React.useState(false);

  const unfinished = list.todos.length - complete;
  function toggleModal() {
    setShowModal((state) => !state);
  }
  function updateCompleted() {
    setComplete(list.todos.filter(({ completed }) => completed).length);
  }

  return (
    <View>
      <StyledModal show={showModal} toggle={toggleModal}>
        <ShowTodos
          list={list}
          complete={complete}
          updateCompleted={updateCompleted}></ShowTodos>
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
    justifyContent: "space-between",
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
  todosContainer: {
    flex: 1,
    paddingVertical: 16,
  },
  todosTitle: {
    fontSize: 26,
    fontWeight: "700",
  },
  tododsHeader: {
    marginLeft: 45,
    borderBottomWidth: 5,
    paddingVertical: 12,
  },
  todosFooter: {
    alignSelf: "stretch",
    flex: 0.5,
    flexDirection: "row",
    marginBottom: "20%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 22,
  },
  input: {
    flex: 1,
    borderWidth: StyleSheet.hairlineWidth,
    marginRight: 12,
    padding: 22,
    borderRadius: 5,
  },
  addTodoBtn: {
    padding: 22,
    borderRadius: 5,
  },
  flatListContainer: {
    marginLeft: 35,
    paddingVertical: 20,
  },
  listItem: {
    fontSize: 20,
  },
});
