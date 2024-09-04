import Frutas from "./frutas";
import Legumes from "./legumes";

const Catalog = () => {
    return (
        <div className="flex flex-col w-full md:w-full pb-11 items-center bg-whiteNormal">
            <div className="flex flex-col w-[90%] mt-6 md:mt-10 lg:mt-15">
                <Frutas />
                <Legumes />      
            </div>
        </div>
    )
}

export default Catalog