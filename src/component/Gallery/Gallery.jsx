import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
    Typography,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import React from "react";
import { BsThreeDots } from "react-icons/bs";
import useAllImage from "../../hook/useAllImage";

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



const Gallery = () => {
    const [images, refetch] = useAllImage();
    

    const photosImage = images && images.filter(singleImage => singleImage?.categories === 'Photos')
    const videosImage = images && images.filter(singleImage => singleImage?.categories === 'Videos')
    const freebiesImage = images && images.filter(singleImage => singleImage?.categories === 'Freebies')
    const numImage = images && images.filter(singleImage => singleImage?.categories === '360')

    const data = [
        {
            label: "All",
            value: "all",
            desc: <div open={() => open()} className="grid grid-cols-1 lg:grid-cols-3 gap-[17px]">
                {images && images.map(singleImage => <div key={singleImage?._id}>
                    <div className="flex justify-between items-center">
                        {singleImage?.categories !== 'Videos' ? <img src={singleImage?.productImg} className="w-[600px] h-[547px]" alt="" />
                        :
                        <iframe width="600" height="547" src={singleImage?.productImg} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> 
                    }
                        
                    </div>
                </div>)}
            </div>,
        },
        {
            label: "Photos",
            value: "photos",
            desc: <div open={() => open()} className="grid grid-cols-1 lg:grid-cols-3 gap-[17px]">
                {photosImage && photosImage.map(singleImage => <div key={singleImage?._id}>
                    <div className="flex justify-between items-center">
                        <img src={singleImage?.productImg} className="w-[600px] h-[547px]" alt="" />
                    </div>
                </div>)}
            </div>,
        },
        {
            label: "Videos",
            value: "videos",
            desc: <div open={() => open()} className="grid grid-cols-1 lg:grid-cols-3 gap-[17px]">
            {videosImage && videosImage.map(singleImage => <div key={singleImage?._id}>
                <div className="flex justify-between items-center">
                <iframe width="600" height="547" src={singleImage?.productImg} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
            </div>)}
        </div>,
        },
        {
            label: "Freebies",
            value: "freebies",
            desc: <div open={() => open()} className="grid grid-cols-1 lg:grid-cols-3 gap-[17px]">
                {freebiesImage && images.map(singleImage => <div key={singleImage?._id}>
                    <div className="flex justify-between items-center">
                        <img src={singleImage?.productImg} className="w-[600px] h-[547px]" alt="" />
                    </div>
                </div>)}
            </div>,
        },
        {
            label: "360",
            value: "360",
            desc: <div open={() => open()} className="grid grid-cols-1 lg:grid-cols-3 gap-[17px]">
                {numImage && numImage.map(singleImage => <div key={singleImage?._id}>
                    <div className="flex justify-between items-center">
                        <img src={singleImage?.productImg} className="w-[600px] h-[547px]" alt="" />
                    </div>
                </div>)}
            </div>,
        },
    ];
    const defaultValue = data[0].value;

    //   sorting
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


        <div className="flex justify-between gap-10 items-center lg:w-[1588px] mx-auto pl-[32px] pt-[38px]">
            <Tabs value={defaultValue} className="overflow-hidden">
                <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                        className: "bg-green-900/10 shadow-none !text-gray-900",
                    }}
                >
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value} className="text-lg w-32 mb-[16px]">
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="">
                    {data.map(({ value, desc }) => (
                        <TabPanel key={value} value={value}>
                            {desc}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>

            {/* sorting */}
            <div className="text-red-700 text-4xl mt-100">
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
            </div>
        </div>
    );
};

export default Gallery;