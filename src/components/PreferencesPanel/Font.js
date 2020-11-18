import { useContext } from "react";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import { FONT_NAMES } from "../../constants/FONTS";
import DocTemplateContext from "../../contexts/DocTemplateContext";
import PanelWrapper from "./partials/PanelWrapper";

const Font = () => {
  const { template, setTemplateProp } = useContext(DocTemplateContext);

  return (
    <PanelWrapper title="Font">
      <Grid item xs={12}>
        <List component="nav" dense disablePadding>
          {FONT_NAMES.map((fontFamily) => (
            <ListItem
              button
              key={fontFamily}
              selected={fontFamily === template.fontFamily}
              onClick={() => setTemplateProp({ fontFamily })}
            >
              <ListItemText primary={fontFamily} style={{ fontFamily }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </PanelWrapper>
  );
};

export default Font;
