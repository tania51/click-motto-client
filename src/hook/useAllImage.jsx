import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useAllImage = () => {
    const axiosPublic = useAxiosPublic();

    const { refetch, data: allImages = [] } = useQuery({
        queryKey: ['images'],
        queryFn: async () => {
            const res = await axiosPublic.get('/all-images')
            return res.data
        }
    })
    const randomImages = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    };
    const images = randomImages([...allImages]);

    return [images, refetch]
};

export default useAllImage;