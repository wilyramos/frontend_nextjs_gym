import { AiOutlineCheck, AiFillStar } from "react-icons/ai";

type CardPlanProps = {
    name: string;
    price: number;
    duration: string;
    features: string[];
    onSelect?: () => void;
    isSelected?: boolean;
    popular?: boolean;
};

export default function CardPlan({
    name,
    price,
    duration,
    features,
    onSelect,
    isSelected,
    popular,
}: CardPlanProps) {
    return (
        <div
            onClick={onSelect}
            className={`
        relative cursor-pointer rounded-2xl border py-2 px-2 md:p-6 flex flex-col justify-between 
        transition-all duration-300 hover:shadow-lg 
        ${isSelected
                    ? "border-black text-white shadow-xl ring-2 ring-black"
                    : "border-gray-200 bg-white shadow-md"}
        ${popular ? "md:-translate-y-2" : ""}
      `}
        >
            <div className="">
                <div className="flex md:flex-col justify-between mb-2 md:mb-6">
                    <h2 className="text-lg md:text-2xl font-extrabold text-black mb-2 flex items-center gap-2">
                        {popular && <AiFillStar className="text-red-700 w-5 h-5" />}
                        {name}
                    </h2>
                    <p className="text-black font-bold text-md md:text-xl mb-4">
                        S/ {price}{" "}
                        <span className="text-sm font-medium text-gray-500">/ {duration}</span>
                    </p>
                </div>

                <ul className="md:space-y-2 text-xs md:text-sm text-gray-500">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <AiOutlineCheck className="text-black mr-2 w-5 h-5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
