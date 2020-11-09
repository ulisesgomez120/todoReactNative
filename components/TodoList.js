import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function TodoList({ list }) {
  const complete = list.todos.filter(({ completed }) => completed).length;
  const unfinished = list.todos.length - complete;
  return (
    <View style={[styles.listContainer, { backgroundColor: list.color }]}>
      <Text style={styles.title}>{list.name}</Text>
      <View style={styles.center}>
        <Text style={styles.showNum}>{complete}</Text>
        <Text>Completed</Text>
      </View>
      <View style={styles.center}>
        <Text style={styles.showNum}>{unfinished}</Text>
        <Text>Unfinished</Text>
      </View>
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
});
