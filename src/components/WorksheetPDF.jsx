import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font
} from "@react-pdf/renderer";

import Bangla from "../fonts/NotoSansBengali-Regular.ttf";

Font.register({
    family: "Bangla",
    src: Bangla,
});

const styles = StyleSheet.create({
    page: {
        padding: 30,
        fontFamily: "Bangla",
    },

    title: {
        fontSize: 20,
        textAlign: "center",
        marginBottom: 25,
        fontFamily: "Bangla",
    },

    grid: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-between",
    },

    problem: {
        width: "22%",
        marginBottom: 30,
        alignItems: "flex-end",
        fontFamily: "Bangla",
    },

    number: {
        fontSize: 18,
        marginBottom: 2,
        fontFamily: "Bangla",
    },

    operatorRow: {
        fontSize: 18,
        marginBottom: 2,
        fontFamily: "Bangla",
    },

    line: {
        width: "100%",
        borderBottom: 1,
        marginTop: 3,
        marginBottom: 3,
    },

    answer: {
        fontSize: 18,
        fontFamily: "Bangla",
    },
});

export default function WorksheetPDF({
    worksheet,
    showAnswer,
}) {

    return (
        <Document>

            <Page
                size="A4"
                style={styles.page}
            >

                <Text style={styles.title}>
                    যোগের অনুশীলনী
                </Text>

                <View style={styles.grid}>

                    {worksheet.map((problem, index) => (

                        <View
                            key={index}
                            style={styles.problem}
                        >

                            {problem.numbers.map((num, i) => (

                                <Text
                                    key={i}
                                    style={
                                        i === problem.numbers.length - 1
                                            ? styles.operatorRow
                                            : styles.number
                                    }
                                >

                                    {i === problem.numbers.length - 1
                                        ? `${problem.operator} ${num}`
                                        : num}

                                </Text>

                            ))}

                            <View style={styles.line} />

                            {showAnswer && (

                                <Text style={styles.answer}>
                                    {problem.answer}
                                </Text>

                            )}

                        </View>

                    ))}

                </View>

            </Page>

        </Document>
    );
}