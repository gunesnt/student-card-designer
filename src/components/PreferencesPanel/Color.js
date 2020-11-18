import { useContext } from "react";
import { CirclePicker } from "react-color";
import Grid from "@material-ui/core/Grid";

import DocTemplateContext from "../../contexts/DocTemplateContext";
import PanelWrapper from "./partials/PanelWrapper";

const Color = () => {
  const { template, setTemplateProp } = useContext(DocTemplateContext);

  return (
    <PanelWrapper title="Color">
      <Grid item xs={12}>
        <CirclePicker
          color={template.color}
          onChangeComplete={(color) => setTemplateProp({ color })}
          width="210px"
          circleSize={24}
          circleSpacing={10}
        />
      </Grid>
    </PanelWrapper>
  );
};

export default Color;
