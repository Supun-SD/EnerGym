import { Stack } from "expo-router";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import "./theme/global.css";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack />
    </Provider>
  );
}
