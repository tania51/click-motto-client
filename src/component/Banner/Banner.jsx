import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";
import { IoSearchOutline } from "react-icons/io5";
import './Banner.css'


const Banner = () => {
    return (
        <div>
            <Card
                shadow={false}
                className="relative grid h-[40rem] lg:h-[659px] w-full items-center justify-center z-10 text-center font-normal rounded-none"
            >
                <CardHeader
                    floated={false}
                    shadow={false}
                    color="transparent"
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center banner-bg"
                >
                    <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
                </CardHeader>
                <CardBody className="relative lg:w-[963px] lg:h-[212px]">
                    <Typography
                        variant="h2"
                        color="white"
                        className="text-[44px] text-white font-normal"
                    >
                        Your local source of high quality images
                        and videos directly from their creators
                    </Typography>
                    <Typography className="flex items-center pt-[26px] pb-4">
                        <input className="lg:w-[963px] lg:h-[60px] border-none rounded-full pl-10 text-[22px]" placeholder="Search photos and videos" />
                        <IoSearchOutline className="text-3xl text-[#707070] -ml-14" />
                    </Typography>
                    <Typography variant="h5" className="text-white text-lg font-normal">
                        Recommended: <span className="text-gray-400">summer, food, covid-19, real estate, love</span>
                    </Typography>
                </CardBody>
            </Card>
        </div>
    );
};

export default Banner;