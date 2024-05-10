import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { fetchSources } from "../lib/sources";

export default function SourcesScreen() {
  // const [page, setPage] = useState(1);
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
        <ActivityIndicator size="large" color={"#457B9D"} />
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
    <View key={sources} style={styles.content}>
      {sources.map((source) => (
        <Text key={source.id}>{source.id}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
  },
});
