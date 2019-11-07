import React from "react";
import ReactDOM from "react-dom";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import "./styles.css";

const useStyles = makeStyles({
  root: {
    justifyContent: "space-between",
    width: "468px",
    height: "40px",
    fontFamily: "Roboto",
    fontSize: "16px",
    lineHeight: "24px",
    letterSpacing: "0.44px",
    color: "#263238"
  }
});

function SwitchWithLabel({ term, isSwitchOn }) {
  const classes = useStyles();
  const [checked, setCheckedStatus] = useState(isSwitchOn);
  return (
    <div className="App">
      <FormControlLabel
        control={<Switch color="primary" />}
        label={term}
        labelPlacement="start"
        classes={classes}
        onChange={() => {
          setCheckedStatus(!checked);
        }}
        checked={checked}
      />
    </div>
  );
}

function App() {
  return (
    <SwitchWithLabel term="Send email notification (yes)" isSwitchOn={false} />
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
