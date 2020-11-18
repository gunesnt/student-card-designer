import Layout from "./Layout";
import PrintPreview from "./components/PrintPreview";
import PreferencesPanel from "./components/PreferencesPanel";
import { SchoolProvider } from "./contexts/SchoolContext";
import { StudentsProvider } from "./contexts/StudentsContext";
import { DesignModeProvider } from "./contexts/DesignModeContext";
import { DocTemplateProvider } from "./contexts/DocTemplateContext";

import "./style/pdf-fonts.css";

const App = () => (
  <SchoolProvider>
    <StudentsProvider>
      <DesignModeProvider>
        <DocTemplateProvider>
          <Layout drawerContent={<PreferencesPanel />}>
            <PrintPreview />
          </Layout>
        </DocTemplateProvider>
      </DesignModeProvider>
    </StudentsProvider>
  </SchoolProvider>
);

export default App;
