import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  Alert,
  StyleSheet,
} from "react-native";
import React from "react";

const Bookmark: React.FC = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={false}
            onRefresh={() => {
              Alert.alert("Refreshing");
            }}
          />
        }
        contentContainerStyle={{ flexGrow: 1 }}
      >
        <Text>Bookmark</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Bookmark;
