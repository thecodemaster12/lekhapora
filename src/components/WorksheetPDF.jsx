// WorksheetPDF.jsx

import {
    Document,
    Page,
    Text,
    View,
    StyleSheet,
    Font
} from "@react-pdf/renderer";
import Bangla from '../fonts/NotoSansBengali-Regular.ttf'
Font.register({
    family: "Bangla",
    src: Bangla,
});

const styles = StyleSheet.create({

    page: {
        fontFamily: "Bangla",
    },

    problem: {
        fontFamily: "Bangla",
        fontSize: 18,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
});


export default function WorksheetPDF({ worksheet }) {
    return (
        <Document>
            <Page size="A4" style={styles.page}>

                <Text style={styles.title}>
                    Addition Worksheet
                </Text>

                {worksheet.map((problem, index) => (
                    <View key={index} style={styles.problem}>
                        <Text>
                            {problem.numbers.join(` ${problem.operator} `)} =
                        </Text>
                    </View>
                ))}

            </Page>
        </Document>
    );
}