import { Box, Typography, Avatar, Tabs, Tab, Divider } from "@mui/material";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
} from "@mui/icons-material";
import { grey } from "@mui/material/colors";

const DrawerContent = ({ value, handleChange, drawerOpen }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`, //aria-controls is a string so we put in between double quotation
    };
  };
  return (
    <Box
      sx={{
        justifyContent: "center",
        textAlign: "center",
        mt: 2,
      }}
    >
      <Avatar
        src={require("../../assets/avatar.jpg")}
        variant="rounded"
        sx={{
          height: 170,
          width: 170,
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "block",
            md: "block",
            sm: drawerOpen ? "block" : "none",
            xs: drawerOpen ? "block" : "none",
          },
        }}
      >
        MGh
      </Avatar>
      <Typography variant="h6" color="whitesmoke">
        محمد قلاوند
      </Typography>

      <Typography variant="caption" color="whitesmoke">
        مدرس برنامه نویسی و توسعه دهنده فول استک
      </Typography>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />

      <Tabs
        orientation="vertical"
        variant="scrollable"
        allowScrollButtonsMobile
        value={value}
        onChange={handleChange}
      >
        <Tab
          label="صفحه اصلی"
          icon={<HomeRounded />}
          iconPosition="start"
          {...tabProps(0)}
        />

        <Tab
          label="درباره من"
          icon={<FaceRounded />}
          iconPosition="start"
          {...tabProps(1)}
        />
        <Tab
          label="رزومه من"
          icon={<TextSnippetRounded />}
          iconPosition="start"
          {...tabProps(2)}
        />
        <Tab
          label="نمونه کارها"
          icon={<TerminalRounded />}
          iconPosition="start"
          {...tabProps(3)}
        />
        <Tab
          label="نظرات دانشجویان"
          icon={<MessageRounded />}
          iconPosition="start"
          {...tabProps(4)}
        />
        <Tab
          label="ارتباط با من"
          icon={<ConnectWithoutContactRounded />}
          iconPosition="start"
          {...tabProps(5)}
        />
      </Tabs>

      <Divider variant="middle" color={grey[900]} sx={{ mt: 2 }} />
    </Box>
  );
};

export default DrawerContent;
