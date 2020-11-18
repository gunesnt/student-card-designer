import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";

import theme from "./theme";
import MainContainer from "./components/MainContainer";
import AppBar from "./components/AppBar";
import ToolbarSpacer from "./components/ToolbarSpacer";
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import ExcelImportModal from "./components/ExcelImportModal";
import SchoolInfoModal from "./components/SchoolInfoModal";
import StudentsModal from "./components/StudentsModal";
import PrintModal from "./components/PrintModal";
import { MainDrawerProvider } from "./contexts/MainDrawerContext";
import { ExcelImportProvider } from "./contexts/ExcelImportContext";
import { ModalsProvider } from "./contexts/ModalsContext";

const Layout = ({ children, drawerContent }) => (
  <ModalsProvider>
    <MainDrawerProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainContainer>
          <AppBar />

          <ResponsiveDrawer>
            <ToolbarSpacer />
            {drawerContent}
          </ResponsiveDrawer>

          <Box component="main" flexGrow={1} display="flex" flexDirection="column">
            <ToolbarSpacer />
            {children}
          </Box>

          <ExcelImportProvider>
            <ExcelImportModal />
          </ExcelImportProvider>
          <SchoolInfoModal />
          <StudentsModal />
          <PrintModal />
        </MainContainer>
      </ThemeProvider>
    </MainDrawerProvider>
  </ModalsProvider>
);

export default Layout;
