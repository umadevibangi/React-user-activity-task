import React, { Component } from "react";
import "../../App.css";
// import Bar from "../../Components/appBar";
import { styles } from "./styles";
import { withStyles } from "@material-ui/core/styles";
import {
  TableHead,
  TableRow,
  TableContainer,
  TableBody,
  Grid,
  TableCell,
  Typography,
  CssBaseline,
  InputBase,
  Button,
  Paper,
  Card,
  TextField,
  InputAdornment,
  Divider,
} from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Table } from "react-bootstrap";

import IconButton from "@material-ui/core/IconButton";
// import Activity from "../../Screens/userActivity";
import appUrls from "../../Config/appUrls";

// import { handleUserId } from "./data/action";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { Hidden } from "@material-ui/core";
const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#F0F0F5",
    },
  },
});
class Userlist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: [
        {
          user_id: "W012A3CDE",
          real_name: " Egon Spengler",
          tz: "America/Los_Angeles",
        },
        {
          user_id: "W07QCRPA4",
          real_name: "Glinda Southgood",
          tz: "Asia/Kolkata",
        },
      ],
    };
  }
  handleClick = (id, i) => {
    console.log(id);
    let user_id = id;
    console.log(user_id);
    if (user_id === "W012A3CDE") {
      this.props.navigateTo(appUrls.USER_ACTIVITY);
    }
    if (user_id === "W07QCRPA4") {
      this.props.navigateTo(appUrls.USER_ACTIVITY2);
    }
  };

  render() {
    const { classes } = this.props;
    const { user } = this.state;

    return (
      <MuiThemeProvider theme={themeLight}>
        <CssBaseline />
        <Grid container direction="column">
          <Grid
            item
            xs={12}
            justify="center"
            alignItems="flex-start"
            className={classes.topGrid}
          >
            <Typography variant="h4" component="h2" className={classes.Heading}>
              User Details
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Paper
            className={classes.PaperTable}
            style={{ borderRadius: "20px" }}
          >
            <Card className={classes.tableContent}>
              <Table className={classes.contentTable}>
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Sl no</TableCell>
                    <TableCell align="left">UserID</TableCell>
                    <TableCell align="left">User Name</TableCell>
                    <TableCell align="left">Location</TableCell>
                    <TableCell align="left">Active On</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {user.map((item, idx) => (
                    <TableRow key={idx}>
                      <TableCell align="left"> {idx + 1}</TableCell>
                      <TableCell align="left">{item.user_id}</TableCell>
                      <TableCell align="left">{item.real_name}</TableCell>
                      <TableCell align="left">{item.tz}</TableCell>
                      <TableCell align="left">
                        <Button
                          className={classes.ButtonStyle}
                          onClick={(e) => this.handleClick(item.user_id)}
                          // onClick={this.handleClick}
                        >
                          Check Status
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </Paper>
        </Grid>
      </MuiThemeProvider>
    );
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    navigateTo: (url) => dispatch(push(url)),
  };
};

const styledUserlist = withStyles(styles)(Userlist);
export default connect(null, mapDispatchToProps)(styledUserlist);
