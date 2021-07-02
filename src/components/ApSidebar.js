/* eslint-disable prettier/prettier */
import {
    AdjustOutlined,
    ArrowForwardIosRounded,
    BrandingWatermarkOutlined,
    CalendarTodayOutlined,
    ChatBubbleOutlineOutlined,
    DashboardOutlined,
    EqualizerOutlined,
    FolderOutlined,
    HomeOutlined,
    MailOutlined,
    MapOutlined,
    MemoryOutlined,
    PersonOutlineOutlined,
    ShoppingCartOutlined,
    ViewCompactRounded
} from "@material-ui/icons";
import React, { useState } from "react";
import "../styles/ApSidebar.scss";

const ApSidebar = () => {
    const [select, setSelect] = useState("Email");

	const sidebarItems = [
		{
			icon: <HomeOutlined fontSize="small" />,
			title: "Dashboard",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <MailOutlined fontSize="small" />,
			title: "Email",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <ChatBubbleOutlineOutlined fontSize="small" />,
			title: "Chats",
		},
		{
			icon: <ShoppingCartOutlined fontSize="small" />,
			title: "eCommerce",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <CalendarTodayOutlined fontSize="small" />,
			title: "Calendar",
		},
		{
			icon: <BrandingWatermarkOutlined fontSize="small" />,
			title: "Layouts",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <PersonOutlineOutlined fontSize="small" />,
			title: "Profile",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <FolderOutlined fontSize="small" />,
			title: "Pages",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
	];
	const componentItems = [
		{
			icon: <ViewCompactRounded fontSize="small" />,
			title: "UI Elements",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <DashboardOutlined fontSize="small" />,
			title: "Icons",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <EqualizerOutlined fontSize="small" />,
			title: "Charts",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <MemoryOutlined fontSize="small" />,
			title: "Table",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <AdjustOutlined fontSize="small" />,
			title: "Forms",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
		{
			icon: <MapOutlined fontSize="small" />,
			title: "Map",
			forwardIcon: (
				<ArrowForwardIosRounded style={{ fontSize: "12px" }} />
			),
		},
	];

	return (
		<div className="ap_sidebar">
			<div className="ap_sidebar_main_menu">
				<small>
					<strong>Main Menu</strong>
				</small>
				{sidebarItems.map((item, i) => (
					<div
                    onClick={() => setSelect(item.title)}
						className={
							item.title === select
								? "sidebar_item active"
								: "sidebar_item"
						}
						role="button"
						tabIndex={i}
						key={item.title}
					>
						<div>
							<span>{item.icon}</span>
							<span>{item.title}</span>
						</div>
						<span>{item.forwardIcon}</span>
					</div>
				))}
			</div>
			<div className="ap_sidebar_components">
				<small>
					<strong>Components</strong>
				</small>
				{componentItems.map((item, i) => (
					<div
						className={
							item.title === select
								? "sidebar_item active"
								: "sidebar_item"
						}
						onClick={() => setSelect(item.title)}
						role="button"
						tabIndex={i}
						key={item.title}
					>
						<div>
							<span>{item.icon}</span>
							<span>{item.title}</span>
						</div>
						<span>{item.forwardIcon}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default ApSidebar;
