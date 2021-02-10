import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
  TodayButton,
} from "@devexpress/dx-react-scheduler-material-ui";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import { Grid, Typography, CssBaseline } from "@material-ui/core";
import { appointments } from "./month-appointments2";
// import Bar from "../../Components/appBar";
import { styles } from "../userActivity/styles";
import { withStyles } from "@material-ui/core/styles";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import { push } from "connected-react-router";
import { connect } from "react-redux";
import appUrls from "../../Config/appUrls";
const themeLight = createMuiTheme({
  palette: {
    background: {
      default: "#F0F0F5",
    },
  },
});
const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    {...restProps}
    style={{
      ...style,
      backgroundColor: "#1976d2",
      borderRadius: "8px",
    }}
  >
    {children}
  </Appointments.Appointment>
);

class Activity2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: appointments,
      currentDate: "2020-02-1",
    };
    this.currentDateChange = (currentDate) => {
      this.setState({ currentDate });
    };
  }
  handleClick = () => {
    this.props.history.push("/userlist");
  };
  render() {
    const { data, currentDate } = this.state;
    const { classes } = this.props;

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
              <IconButton onClick={this.handleClick}>
                <ArrowBackIcon fontSize="large" />
              </IconButton>
              Glinda Southgood Schedule
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          display="flex"
          flexDirection="row"
          className={classes.Grid_container}
          // className={classes.Schedule_container}
        >
          <Grid item xs={12} md={8}>
            <Paper elevation={7} className={classes.Scheduler_Paper}>
              <Scheduler
                data={data}
                height={530}
                showAllDayPanel={false}
                crossScrollingEnabled={true}
                showAllDayPanel={false}
                columnRenderingMode="virtual"
              >
                <ViewState
                  style={{ marginTop: "12%" }}
                  currentDate={currentDate}
                  onCurrentDateChange={this.currentDateChange}
                />
                <WeekView startDayHour={11} endDayHour={21} />
                <Toolbar />

                <DateNavigator />
                <TodayButton />
                <Appointments appointmentComponent={Appointment} />
              </Scheduler>
            </Paper>
          </Grid>
          <Grid item xs={12} md={4}>
            <Paper elevation={4} className={classes.Schedule_SummaryPaper}>
              <Grid display="flex">
                <Typography align="left" className={classes.Schedule_heading}>
                  Total Active Days
                </Typography>
              </Grid>
              <br></br>
              <Grid container display="flex" flexDirection="row">
                <EventAvailableIcon className={classes.Schedule_EventIcon} />

                <Typography align="left" className={classes.Schedule_month}>
                  February 1st 2020
                </Typography>
              </Grid>
              <br></br>
              <Grid container display="flex" flexDirection="row">
                <EventAvailableIcon className={classes.Schedule_EventIcon} />
                <Typography align="left" className={classes.Schedule_month}>
                  {" "}
                  March 1st 2020
                </Typography>
              </Grid>
              <br></br>
              <Grid container display="flex" flexDirection="row">
                <EventAvailableIcon className={classes.Schedule_EventIcon} />
                <Typography
                  align="left"
                  className={classes.Schedule_monthBelow}
                >
                  {" "}
                  March 16th 2020
                </Typography>
              </Grid>
            </Paper>
          </Grid>
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
const styledActivity2 = withStyles(styles)(Activity2);
export default connect(mapDispatchToProps)(styledActivity2);
