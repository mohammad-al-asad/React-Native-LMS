import { ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { Redirect } from "expo-router";

const index = () => {
  const [loading, setLoading] = useState(true);
  const [isLoggedin, setIsLoggedin] = useState(false);
  useEffect(() => {
    async function subscription() {
      const token = SecureStore.getItem("accessToken");
      setIsLoggedin(token ? true : false);
      setLoading(false);
    }
    subscription();
  }, []);

  return (
    <>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Redirect href={(isLoggedin ? "/(tabs)/index" : "/(routes)/onbording")} />
      )}
    </>
  );
};

export default index;
