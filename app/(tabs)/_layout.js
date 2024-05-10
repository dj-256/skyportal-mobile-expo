import { Tabs } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="sources"
        options={{
          title: "Sources",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="storage" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="candidates"
        options={{
          title: "Candidates",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="explore" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="events"
        options={{
          title: "Events",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="cell-tower" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
