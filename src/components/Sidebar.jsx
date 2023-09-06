import Grid from "@mui/material/Unstable_Grid2";
import {
  Typography,
  Avatar,
  Divider,
  Box,
  Hidden,
  Tabs,
  Tab,
} from "@mui/material/";
import { grey } from "@mui/material/colors";
import {
  HomeRounded,
  FaceRounded,
  TextSnippetRounded,
  TerminalRounded,
  MessageRounded,
  ConnectWithoutContactRounded,
  FavoriteRounded,
  CopyrightRounded,
} from "@mui/icons-material";

const Sidebar = ({ value, handleChange }) => {
  const tabProps = (index) => {
    return {
      id: `sidebar-tab-${index}`,
      "aria-controls": `tabpanel-${index}`,
    };
  };

  return (
    <Grid
      xs={0}
      sm={0}
      md={3}
      lg={2}
      xl={2}
      sx={{ backgroundColor: grey[900] }}
    >
      <Box
        // display={{ sm: "none" }}
        sx={{
          justifyContent: "center",
          textAlign: "center",
          mt: 2,
        }}
      >
        <Hidden mdDown>
          <Avatar
            src={require("../assets/avatar.jpg")}
            variant="rounded"
            sx={{ height: 150, width: 150, margin: "0 auto" }}
          >
            YG
          </Avatar>
        </Hidden>
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
    </Grid>
  );
};

export default Sidebar;

// <Tab
//     label={
//         <div>
//             <Typography variant="subtitle2" color="white">
//                 <HomeRounded
//                     sx={{ verticalAlign: "middle", mx: 2 }}
//                 />
//                 خانه
//             </Typography>
//         </div>
//     }
//     // icon={<HomeRounded />}
//     // iconPosition="start"
// />
