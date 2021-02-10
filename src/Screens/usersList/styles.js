export const styles = (theme) => ({
    root: {
        backgroundColor:"#F0F0F5",
      },
      pageScroll: {
        overflowX: "scroll",
  
      },
        topGrid: {
          backgroundColor:"#F9F9FE",
          padding:"1%"
        },
        Heading: {
          textAlign: "left",
          font: "normal normal medium 20px/24px Roboto",
          letterSpacing:" 0.19px",
          color: "#2B2B2B",
          opacity: 1
        },
        AddPropertyBtn: {
          marginLeft: "auto",
          marginRight: "23px",
          width: "131px",
          height: "40px",
          background: "#CA2208 ",
          backgroundRepeat: "no-repeat",
          borderRadius: "3px",
          opacity: "1",
          letterSpacing: "0px",
          color: "#ffffff",
          fontSize: "16px",
          textTransform: "none",
          float: "right"
        },
        PaperTable : {
          borderRadius:"20px",
          margin: "30px 30px 30px 30px",
          borderRadius: "6px",
          background: "#FFFFFF 0% 0% no-repeat padding-box",
          boxShadow: "0px 0px 4px #0000000D",
          height: "40vh"
        },
        ButtonStyle:{
backgroundColor:"#F0F0F5"
        },
        searchField: {
          width: '57ch',
          margin: "29px auto 29px 45px",
        },
        label: {
          fontSize: "14px",
        },
        divider: {
          marginLeft: "45px",
          marginRight: "45px",
        },
        contentTable:{
            width:" -webkit-fill-available",
          marginTop:"15px",
        },
        tableContent : {
          
          marginTop:"inherit",
          maxHeight: "294px",
         
          marginLeft: "45px",
          marginRight: "45px",
         
          boxShadow: "none",
        },
        tableCell: {
          padding: "0px",
        },
        actionButton: {
          marginRight: "41px",
          [theme.breakpoints.down('sm')]: {
            marginRight: "7px",
          },
        },
    
        // FormSixAddEdit.jsx
        
        cardPanel : {
          marginTop : "20px",
          borderRadius : "20px",
        },
        cardHeader : {
          background: "#142240",
          color: "#fff",
          height: "49px",
          padding: "24px",
        },
        inputField: {
          height: "49px",
          position: "relative",
          minWidth: "95%",
          background: "#ffffff 0% 0%",
          borderRadius: " 4px",
          opacity: "1",
          marginTop: "8px",
          fontSize: "large",
          border: " 1px solid #ccc",
          paddingRight: "24px",
          padding: "7px 14px",
        },
        textField: {
          height: "49px",
          position: "relative",
          minWidth: "95%",
          width: "307px",
          background: "#ffffff 0% 0%",
          borderRadius: " 4px",
          opacity: "1",
          marginTop: "8px",
          fontSize: "large",
          border: " 1px solid #ccc",
          paddingRight: "24px",
          padding: "7px 14px",
          width: "20%"
        },
        selectField : {
          width: "95%",
          minWidth: "95%",
        },
        textSize: {
          fontSize: "12px",
          // lineHeight: "22px",
        },
        nrBtn : {
          minWidth : "47px",
          height : "47px",
          background : "#F0F0F5",
          border: "1px solid #C02008",
          color : "#CA2208",
          fontSize : "14px",
          marginTop : "9px",
        },
  });
  