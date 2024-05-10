import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { useMemo } from "react";
import { baseColors } from "../lib/theme";
import { MaterialIcons } from "@expo/vector-icons";

export default function SourceListItem({ source }) {
  const { colors } = useTheme();
  const styles = useMemo(
    () =>
      StyleSheet.create({
        container: {
          paddingHorizontal: 16,
          paddingVertical: 12,
          gap: 4,
          backgroundColor: colors.card,
          borderRadius: 16,
        },
        header: {
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        },
        names: {
          flexDirection: "row",
          gap: 10,
          alignItems: "center",
        },
        id: {
          fontSize: 16,
          fontWeight: "600",
        },
        tns: {
          fontSize: 14,
          color: baseColors.slateGray,
        },
        valueContainer: {
          flexDirection: "row",
          justifyContent: "flex-start",
          gap: 8,
        },
        otherContainer: {
          justifyContent: "space-between",
        },
        value: {
          fontSize: 12,
        },
        label: {
          fontSize: 12,
          color: baseColors.slateGray,
        },
      }),
    [colors],
  );

  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.7}>
      <View style={styles.header}>
        <View style={styles.names}>
          <Text style={styles.id}>{source.id}</Text>
          <Text style={styles.tns}>{source.tns_name}</Text>
        </View>
        <MaterialIcons
          name={"star-outline"}
          size={24}
          color={baseColors.frenchGray}
        />
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.label}>Created:</Text>
        <Text style={styles.value}>
          {new Date(source.created_at).toLocaleString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
            timeZoneName: "short",
          })}
        </Text>
      </View>
      <View style={styles.otherContainer}>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>RA:</Text>
          <Text style={styles.value}>{source.ra}</Text>
        </View>
        <View style={styles.valueContainer}>
          <Text style={styles.label}>DEC:</Text>
          <Text style={styles.value}>{source.dec}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
