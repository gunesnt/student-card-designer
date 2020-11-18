import { memo, useContext, useMemo } from "react";
import { PDFViewer } from "@react-pdf/renderer";

import TestDoc from "../TestDoc";
import SchoolContext from "../contexts/SchoolContext";
import DesignModeContext from "../contexts/DesignModeContext";
import DocTemplateContext from "../contexts/DocTemplateContext";

const previewStudent = {
  id: "AWS000110",
  firstName: "Liza",
  lastName: "Mccarthy",
  dateOfBirth: "20.01.1995",
  photo: { large: "https://randomuser.me/api/portraits/women/63.jpg" },
};

const PrintPreview = memo(() => {
  const { designMode } = useContext(DesignModeContext);
  const { school, loading: schoolLoading } = useContext(SchoolContext);
  const { template } = useContext(DocTemplateContext);

  if (schoolLoading) return <></>;

  if (designMode) return <TestDoc {...{ school, template }} students={[previewStudent]} preview />;

  /*
   * The PDF Renderer does not support the re-render on changes.
   * Found solution: https://github.com/diegomura/react-pdf/issues/608#issuecomment-662941647
   */
  // eslint-disable-next-line react-hooks/rules-of-hooks
  return useMemo(
    () => (
      <PDFViewer style={{ flexGrow: 1, border: 0 }}>
        <TestDoc {...{ school, template }} students={[previewStudent]} />
      </PDFViewer>
    ),
    [] // eslint-disable-line react-hooks/exhaustive-deps
  );
});

export default PrintPreview;
