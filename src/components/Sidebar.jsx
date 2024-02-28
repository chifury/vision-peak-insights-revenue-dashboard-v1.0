import React, { useEffect } from 'react'
import {
    Box,
    Divider,
    Drawer,
    IconButton,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    useTheme
} from "@mui/material";
import {
    SettingsOutlined,
    ChevronLeft,
    ChevronRightOutlined,
    HomeOutLined,
    ShoppingCartOutlined,
    Groups2Outlined,
    ReceiptLongOutlined,
    PublicOutlined,
    PointOfSaleOutLined,
    TodayOutlined,
    CalendarMonthOutlined,
    AdminPanelSettingOutlined,
    TrendingUpOutlined,
    PieChartOutlined
} from "@mui/icons-material";
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import FlexBetween from './FlexBetween';
import profileImage from "assets/profile.webp";


const Sidebar = ({
    drawerWidth,
    isSidebarOpen,
    setIsSidebarOpen,
    isNonMobile,
}) => {
    const { pathname } = useLocation();
    const [active, setActive] = useState("");
    const navigate = useNavigate();
    const theme useTheme();

    useEffect(() => {
        setActive(pathname.substring(1));
    }, [pathname])

  return <Box component="nav">
    {isSidebarOpen && (
        <Drawer
            open={isSidebarOpen}
            onClose={() => setIsSidebarOpen(false)}
            variant="persistent"
            anchor="left"
            sx={{
                width: drawerWidth,
                "& .MuiDrawer-paper": {
                    color: theme. palette.secondary[200],
                    boxSixing: "border-box",
                    borderWidth: isNonMobile ? 0 : 2px,
                    width: drawerWidth
                }
            }}
        >
            <Box width="100%">
                <Box m="1.5rem 2rem 2rem 3 rem">
                    <FlexBetween color={theme.palette.secondary.main}>
                        <Box display="flex" alignItems="center" gap="0.5rem">
                            <Typography variant='h4' fontWeight="bold">
                                VISION PEAK INSIGHTS REVENUE DASHBOARD
                            </Typography>
                        </Box>
                        {!isNonMobile && (
                            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                                <ChevronLeft />
                            </IconButton>
                        )}
                    </FlexBetween>
                </Box>
                <List>
                    {}
                </List>
            </Box>
        </Drawer>
    )}
  </Box>;
  <div>
    <div>
        <div>
            
        </div>
    </div>
  </div>
}

export default Sidebar