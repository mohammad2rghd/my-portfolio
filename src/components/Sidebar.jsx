import { useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Drawer, Fab, Box } from "@mui/material";
import { grey, red } from "@mui/material/colors";
import { MenuRounded } from "@mui/icons-material";
import DrawerContent from "./DrawerContent";

//................................................
const Sidebar = ({ value, handleChange }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

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
        sx={{
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
            xl: "none",
          },
        }}
      >
        <Fab
          aria-label="Sidebar"
          size="small"
          sx={{ backgroundColor: red[900], m: 2 }}
          onClick={() => setDrawerOpen(true)}
        >
          <MenuRounded />
        </Fab>
      </Box>
      {drawerOpen ? null : (
        <DrawerContent
          drawerOpen={drawerOpen}
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      )}

      <Drawer
        open={drawerOpen}
        variant="temporary"
        onClose={() => setDrawerOpen(false)}
        sx={{
          "& .MuiDrawer-paper": {
            width: 300,
          },
          display: {
            xs: "block",
            sm: "block",
            md: "none",
            lg: "none",
          },
        }}
      >
        {/* Drawer */}
        <DrawerContent
          drawerOpen={drawerOpen}
          value={value}
          handleChange={handleChange}
          setDrawerOpen={setDrawerOpen}
        />
      </Drawer>
    </Grid>
  );
};

export default Sidebar;
