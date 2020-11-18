import TextField from "@material-ui/core/TextField";

const ReadOnlyTextField = (props) => (
  <TextField
    fullWidth
    disabled
    size="small"
    InputProps={{
      disabled: false,
      readOnly: true,
      disableUnderline: true,
    }}
    {...props}
  />
);

export default ReadOnlyTextField;
