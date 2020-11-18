import FONTS from "./constants/FONTS";
import { StyleSheet, Document, Page, View, Text, Image, Font } from "./components/PDF";

const TestDoc = ({ school, students, template, preview }) => {
  if (!preview) Font.register({ family: template.fontFamily, src: FONTS[template.fontFamily] });

  return (
    <Document preview={preview}>
      {students.length &&
        students.map((student) => (
          <Page
            key={student.id}
            size={template.sizeName || [template.width, template.height]}
            orientation={template.orientation}
            style={{
              ...styles.page,
              backgroundColor: template.color.hex,
              fontFamily: template.fontFamily,
            }}
            preview={preview}
          >
            <View style={styles.imageContainer} preview={preview}>
              <Image style={styles.logo} src={{ uri: school.logo }} preview={preview} />
            </View>
            <View style={styles.imageContainer} preview={preview}>
              <Image style={styles.image} src={{ uri: student.photo.large }} preview={preview} />
            </View>

            <View style={styles.fieldset} preview={preview}>
              <Text style={styles.label} preview={preview}>
                Full Name
              </Text>
              <Text style={styles.name} preview={preview}>
                {student.firstName} {student.lastName}
              </Text>
            </View>

            <View style={{ ...styles.fieldset, ...styles.row }} preview={preview}>
              <View style={styles.gridItem} preview={preview}>
                <Text style={styles.label} preview={preview}>
                  School ID
                </Text>
                <Text style={styles.field} preview={preview}>
                  {student.id}
                </Text>
              </View>
              <View style={styles.gridItem} preview={preview}>
                <Text style={styles.label} preview={preview}>
                  Date of Birth
                </Text>
                <Text style={styles.field} preview={preview}>
                  {student.dateOfBirth}
                </Text>
              </View>
            </View>

            <View style={{ paddingTop: "10pt" }} preview={preview}>
              <Text style={styles.school} preview={preview}>
                {school.name}
              </Text>
              <Text style={styles.address} preview={preview}>
                {school.address}
              </Text>
            </View>
          </Page>
        ))}
    </Document>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: "15pt 20pt 0pt",
    color: "white",
  },
  row: {
    display: "flex",
    flexDirection: "row",
  },
  rowEnd: {
    justifyContent: "flex-end",
  },
  gridItem: {
    flex: 1,
  },
  imageContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: "18pt",
  },
  logo: {
    width: "180pt",
  },
  image: {
    width: "170pt",
    height: "170pt",
    borderRadius: "50pt",
  },
  fieldset: {
    marginBottom: "12pt",
  },
  label: {
    fontSize: "10pt",
  },
  field: {
    fontSize: "14pt",
  },
  name: {
    fontSize: "22pt",
  },
  school: {
    fontSize: "12pt",
    textAlign: "right",
  },
  address: {
    fontSize: "10pt",
    textAlign: "right",
  },
});

export default TestDoc;
