import React, { Fragment } from "react";
import { View, StatusBar, ScrollView, SafeAreaView } from "react-native";
import ImagedCardView from "./lib/src/components/ImagedCardView";

const yosemite =
  "https://images.unsplash.com/photo-1548625361-1adcab316530?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
const islandBali =
  "https://images.unsplash.com/photo-1445262102387-5fbb30a5e59d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentContainerStyle={{
            height: "100%",
            justifyContent: "space-evenly"
          }}
        >
          <ImagedCardView />
          <ImagedCardView
            stars={5}
            reviews={456}
            ratings={4.5}
            title="Yosemite"
            rightSideValue="$990"
            subtitle="California"
            leftSideValue="3 Days"
            backgroundColor="#ff6460"
            source={{
              uri: yosemite
            }}
          />
          <ImagedCardView
            stars={5}
            reviews={346}
            ratings={4.5}
            title="Yosemite"
            rightSideValue="$800"
            subtitle="New Zealand"
            leftSideValue="4 Days"
            backgroundColor="#0ad5b8"
            source={{
              uri: islandBali
            }}
          />
        </ScrollView>
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
