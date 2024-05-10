import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchSources } from "../lib/sources";
import SourceListItem from "../components/SourceListItem";
import { useTheme } from "@react-navigation/native";

export default function SourcesScreen() {
  // const [page, setPage] = useState(1);
  const { colors } = useTheme();
  const {
    data: sources,
    status,
    error,
  } = useQuery({
    queryKey: ["sources"],
    queryFn: () => fetchSources(1, 10),
  });

  console.log(status);

  if (status === "pending") {
    return (
      <View style={styles.content}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }

  if (status === "error") {
    return (
      <View style={styles.content}>
        <Text>Something went wrong...</Text>
        <Text>{error.message}</Text>
      </View>
    );
  }
  return (
    <FlatList
      data={sources}
      renderItem={({ item }) => <SourceListItem source={item} />}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.list}
    />
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    gap: 16,
  },
  list: {
    padding: 16,
    gap: 12,
  },
});
