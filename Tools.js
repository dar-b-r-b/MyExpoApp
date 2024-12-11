import { List, PaperProvider, Divider, Text, Button } from "react-native-paper";
import { ScrollView, View } from "react-native";
import { useState } from "react";
import "react-native-get-random-values";
import { styles } from "./styles";
import { theme } from "./theme";
import { DialogWindow } from "./DialogForTools";

export function Tools() {
  const [needles, setNeedles] = useState([
    {
      id: "c89fc924-3feb-4c93-829b-f58d6fa04c4e",
      name: "спицы",
      size: "2 mm",
      length: "100 cm",
      type: "Чулочные",
    },
    {
      id: "0a68f5cb-fc00-4392-9881-7c6587f22570",
      name: "спицы",
      size: "2 mm",
      length: "11 cm",
      type: "Разъемные",
    },
    {
      id: "0a68f5cb-fc00-2392-9881-7c6587f22570",
      name: "спицы",
      size: "4 mm",
      length: "11 cm",
      type: "Разъемные",
    },
  ]);
  const [hooks, setHooks] = useState([
    {
      id: "20aa6309-b9be-4f3a-beb0-9f90873ffec7",
      name: "Крючок",
      size: "2 mm",
    },
    {
      id: "20aa6309-b7be-4f3a-beb0-9f90873ffec7",
      name: "Крючок",
      size: "6 mm",
    },
  ]);
  const [cables, setCables] = useState([
    {
      id: "ba796977-5859-49dc-b2fd-5fa124273ce1",
      name: "Леска",
      length: "60 cm",
    },
  ]);
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);
  return (
    <PaperProvider theme={theme}>
      <ScrollView>
        <List.Subheader style={styles.subheader}>Спицы</List.Subheader>
        <Divider bold="true" />
        {needles.map((n) => {
          return (
            <List.Item
              key={n.id}
              style={styles.listItem}
              title={`${n.type} ${n.name}`}
              description={`${n.size} mm ${n.length} mm`}
            ></List.Item>
          );
        })}
        <List.Subheader style={styles.subheader}>Крючки</List.Subheader>
        <Divider bold="true" />
        {hooks.map((h) => {
          return (
            <List.Item
              key={h.id}
              style={styles.listItem}
              title={h.name}
              description={`${h.size} mm`}
            ></List.Item>
          );
        })}
        <List.Subheader style={styles.subheader}>Лески</List.Subheader>
        <Divider bold="true" />
        {cables.map((c) => {
          return (
            <List.Item
              key={c.id}
              style={styles.listItem}
              title={c.name}
              description={`${c.length} cm`}
            ></List.Item>
          );
        })}
      </ScrollView>
      <View style={styles.addToolContainer}>
        <Button
          mode="contained"
          style={styles.addToolButton}
          labelStyle={styles.textInAddToolButton}
          onPress={() => {
            showDialog();
          }}
        >
          Добавить инструмент
        </Button>
        <DialogWindow
          visible={visible}
          hideDialog={hideDialog}
          hooks={hooks}
          setHooks={setHooks}
          needles={needles}
          setNeedles={setNeedles}
          cables={cables}
          setCables={setCables}
        />
      </View>
    </PaperProvider>
  );
}
