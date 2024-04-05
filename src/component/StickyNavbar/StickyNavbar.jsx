import React from "react";
import logo from "../../../public/logo.png"
import {
    Navbar,
    Collapse,
    Typography,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";
import { BsThreeDots } from "react-icons/bs";

const navListMenuItems = [
    {
        title: "About Click Motto",
    },
    {
        title: "Pricing",
    },
    {
        title: "License",
    },
    {
        title: "Partnerships",
    },
    {
        title: "Blog",
    },
    {
        title: "Help",
    },
    {
        title: "Join The Team",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const renderItems = navListMenuItems.map(
        ({ title }, key) => (
            <a href="#" key={key}>
                <MenuItem className="inline-block rounded-lg text-left">
                    <div>
                        <Typography
                            variant="h6"
                            color="blue-gray"
                            className="text-sm font-bold inline-block hover:text-[#fff] hover:bg-[#1C1C1C] w-full pl-4 py-2 text-left"
                        >
                            {title}
                        </Typography>
                    </div>
                </MenuItem>
            </a>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <BsThreeDots />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-[218px] h-[266px] rounded-xl lg:block">
                    <ul className="text-left bg-[#111111] text-[#929292] outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1 font-semibold">
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#1C1C1C]">Explore</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#1C1C1C]">Discover</ListItem>
            </Typography>
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4 hover:text-[#1C1C1C]">For Professionals</ListItem>
            </Typography>
            <NavListMenu />
            <Typography
                as="a"
                href="#"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    <a href="#">
                        <Button variant="outlined" className="text-[#707070] border border-[#707070] p-[7px]">Submit Photos</Button>
                    </a>
                </ListItem>
            </Typography>
        </List>
    );
}



const StickyNavbar = () => {

    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    return (
        <div>
            <Navbar className="max-w-screen border-none pt-[14px] pb-[16px]">
                <div className="flex items-center justify-between text-[#707070]">
                    <Typography
                        as="a"
                        href="#"
                        variant="h6"
                        className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                    >
                        <img src={logo} className="w-[194px] h-9" alt="" />
                    </Typography>
                    <div className="hidden gap-2 lg:flex">
                        <div className="hidden gap-2 lg:flex">
                            <NavList />
                            <Button variant="text" size="sm" color="blue-gray">
                                Login
                            </Button>
                            <Button className="text-white px-6 py-0 bg-[#E17800]">Join Free</Button>
                        </div>
                    </div>
                    <IconButton
                        variant="text"
                        color="blue-gray"
                        className="lg:hidden"
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                        ) : (
                            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                        )}
                    </IconButton>
                </div>
                <Collapse open={openNav}>
                    <div className="lg:hidden">
                        <NavList />
                    </div>
                    <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                        <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                            Log In
                        </Button>
                        <Button variant="gradient" size="sm" fullWidth>
                            Sign In
                        </Button>
                    </div>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default StickyNavbar;