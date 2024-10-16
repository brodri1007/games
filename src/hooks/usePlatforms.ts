import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
    image_background: string;
}


const usePlatforms = () => useData<Platform>('/platforms/lists/parents')

export default usePlatforms;