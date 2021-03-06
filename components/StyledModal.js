import React from "react";
import {
  Modal,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function StyledModal({ show, toggle, children }) {
  return (
    <Modal animationType='slide' visible={show} onRequestClose={toggle}>
      <TouchableOpacity onPress={toggle} style={styles.closeBtn}>
        <SafeAreaView>
          <AntDesign name='close' size={26} color='gray' />
        </SafeAreaView>
      </TouchableOpacity>
      {children}
    </Modal>
  );
}

const styles = StyleSheet.create({
  closeBtn: {
    position: "absolute",
    top: 0,
    right: 0,
    margin: 16,
    zIndex: 1,
  },
});
