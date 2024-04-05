import { Button, Card, Input, Typography } from "@material-tailwind/react";
import { Bounce, toast } from "react-toastify";
import useAxiosPublic from "../../hook/useAxiosPublic";



const AddImage = () => {
    const axiosPublic = useAxiosPublic();


    const addImageHandeler = e => {
        e.preventDefault();
        const form2 = new FormData(e.target)
        const form = e.target;
        const categories = form.categories.value;
        const recommended = form.recommended.value;
        const image = form2.get('clickImg')

        const imgData = new FormData()
        imgData.append('image', image)

        fetch('https://api.imgbb.com/1/upload?key=acea884a191d27e67e7d4546ba1d8443', {
            method: "POST",
            body: imgData
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to upload image');
                }
                return res.json();
            })
            .then(data => {
                const productData = {
                    productImg: data.data.url,
                    categories,
                    recommended
                }
                axiosPublic.post('/images', productData)
                    .then(res => {

                        if (res.data.insertedId) {
                            toast.success('Image Added Successfully!', {
                                position: "top-right",
                                autoClose: true,
                                hideProgressBar: true,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "dark",
                                transition: Bounce,
                            });
                        }
                    })
                    .catch(err => {
                        console.log('error message', err.message);
                    })
            })

        form2.value = '';
        form.categories.value = 'Select One';
        form.recommended.value = 'Select One';

    }

    return (
        <div className="mt-5 ml-10 lg:ml-0 lg:mt-20 lg:-mb-20 -mb-20">
            <div className=" flex flex-1 justify-center items-center">
                <Card className="bg-gray-900 px-10 lg:pl-32 lg:pr-20 pt-10 pb-14 lg:w-8/12 ml-1" color="transparent" shadow={false}>
                    <Typography className="text-5xl lg:text-6xl text-center font-semibold lg:pb-8 lg:pt-3" color="white">
                        Add Image
                    </Typography>
                    <form onSubmit={addImageHandeler} className="mt-8 mb-2 lg:w-full max-w-screen-lg sm:w-96">
                        <div className="mb-1 flex flex-col">
                            <div className="border-b border-gray-400 pt-3 items-center">
                                <Typography color="white" className="text-2xl font-semibold">
                                    Add Image
                                </Typography>
                                <Input name="clickImg"
                                    type="file"
                                    size="lg"
                                    placeholder="Image"
                                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900 text-white p-3 rounded text-2xl bg-transparent border-none"
                                    labelProps={{
                                        className: "before:content-none after:content-none",
                                    }}
                                    required
                                />
                            </div>

                            {/* select Category */}
                            <div className="items-center border-b border-gray-400">
                                <Typography color="white" className="text-2xl font-semibold my-3">
                                    Categories
                                </Typography>
                                <select
                                    name="categories"
                                    label="Select Version" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg text-white border-none bg-gray-900" required
                                >
                                    <option>Select One</option>
                                    <option value="Photos">Photos</option>
                                    <option value="Videos">Videos</option>
                                    <option value="Freebies">Freebies</option>
                                    <option value="360">360</option>
                                </select>
                            </div>

                            {/* select Recommended */}
                            <div className="items-center border-b border-gray-400">
                                <Typography color="white" className="text-2xl font-semibold my-3">
                                    Recommended
                                </Typography>
                                <select
                                    name="recommended"
                                    label="Select Version" className="w-full py-2 px-2 border border-blue-gray-200 rounded-lg text-white border-none bg-gray-900" required
                                >
                                    <option>Select One</option>
                                    <option value="Recent">Most Recent</option>
                                    <option value="Viewed">Most Viewed</option>
                                    <option value="Downloaded">Most Downloaded</option>
                                    <option value="Appreciated">Most Appreciated</option>
                                </select>
                            </div>
                        </div>
                        <Button type="submit" className="mt-6 text-xl border-b-2 bg-black text-white border-white py-2" fullWidth>
                            Add Image
                        </Button>
                    </form>
                </Card>
            </div>
        </div>
    );
};

export default AddImage;