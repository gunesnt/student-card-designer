import { useContext } from "react";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import IconButton from "@material-ui/core/IconButton";
import CallIcon from "@material-ui/icons/Call";

import usePhone from "../hooks/usePhone";
import SchoolContext from "../contexts/SchoolContext";
import ModalsContext from "../contexts/ModalsContext";
import ReadOnlyTextField from "./ReadOnlyTextField";
import ResponsiveModal from "./ResponsiveModal";
import DocTemplateContext from "../contexts/DocTemplateContext";

const SchoolInfoModal = () => {
  const { school } = useContext(SchoolContext);
  const { schoolOpen, closeSchoolModal } = useContext(ModalsContext);
  const { template } = useContext(DocTemplateContext);
  const principalPhone = usePhone(school.principalPhone);

  return (
    <ResponsiveModal
      id="school-info"
      open={schoolOpen}
      onClose={closeSchoolModal}
      maxWidth="xs"
      title={
        <Box display="flex" justifyContent="space-between" alignItems="center">
          School Info
          <Tooltip title="Call">
            <IconButton color="primary" href={principalPhone.link} aria-label="call">
              <CallIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>
      }
    >
      {school.name && (
        <Box p={1} pt={0}>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                minHeight={250}
                style={{ backgroundColor: template.color.hex }}
                mx={-4}
                mb={3}
              >
                <Box
                  component="img"
                  src={school.logo}
                  maxWidth={300}
                  maxHeight={300}
                  alt="logo"
                  m={5}
                />
              </Box>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs>
                <ReadOnlyTextField
                  id="school-name"
                  label="School Name"
                  defaultValue={school.name}
                />
              </Grid>
              <Grid item xs={4}>
                <ReadOnlyTextField
                  id="school-abbr"
                  label="Abbreviation"
                  defaultValue={school.abbreviation}
                />
              </Grid>
              <Grid item xs={12}>
                <ReadOnlyTextField
                  id="school-address"
                  label="School Address"
                  defaultValue={school.address}
                  multiline
                  rowsMax={2}
                />
              </Grid>
              <Grid item xs={2}>
                <ReadOnlyTextField id="school-campus" label="Campus" defaultValue={school.campus} />
              </Grid>
              <Grid item xs>
                <ReadOnlyTextField
                  id="school-principal"
                  label="Principal"
                  defaultValue={school.principal}
                />
              </Grid>
              <Grid item xs={5}>
                <ReadOnlyTextField
                  id="school-principal-phone"
                  label="Principal Phone"
                  defaultValue={principalPhone.formatted}
                />
              </Grid>
            </Grid>
          </Grid>
        </Box>
      )}
    </ResponsiveModal>
  );
};

export default SchoolInfoModal;
