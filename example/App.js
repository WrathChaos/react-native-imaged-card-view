import React, { Fragment } from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import ImagedCardView from "./lib/src/components/ImagedCardView";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View style={{ marginTop: 100 }}>
          <ImagedCardView />
        </View>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
