import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

export default function Chart({type}) {
    const screenWidth = Dimensions.get("window").width -50;
    const [steps, setSteps] = useState<number[]>([]);
    const [info, setInfo] = useState<string[]>([]);

    useEffect(() => {
        if (type === "day") {
            setSteps([Math.random() * 1000, Math.random() * 2000, Math.random() * 1500, Math.random() * 5000]);
            setInfo(["0-6", "6-12", "12-18", "18-24"])
        }



    }, [type]);

        const data = {
            labels: info, // Kept the labels

            datasets: [
                {
                    data: steps,
                },
            ],
    }

    const chartConfig = {
        backgroundGradientFrom: "#4DBBCF",
        backgroundGradientTo: "#4DBBCF",

        fillShadowGradientFrom: "#fff",
        fillShadowGradientTo: "#fff",

        fillShadowGradientToOpacity: 1,
        fillShadowGradientFromOpacity: 1,
        color: () => "#fff",
        barPercentage: 0.8,
        // barRadius: 10,
    };

    return (
        <View style={styles.container}>
            <BarChart
                style={styles.graphStyle}
                data={data}
                width={screenWidth}
                height={170}
                yAxisLabel=""                // Label for y-axis (if needed)
                yAxisSuffix=""               // Empty suffix to fix TS error
                chartConfig={chartConfig}
                withVerticalLabels={true}   // Disables y-axis labels
                withHorizontalLabels={false}
                fromZero={true}
                showBarTops={false}
                withInnerLines={true} // design = false but like this one more.
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        backgroundColor: "#fff",
    },

    graphStyle: {
        display: "flex",
        margin:0,
        padding: 0,
        paddingRight: 0,
        paddingBottom: 100,
        borderRadius: 10,
    },
});
