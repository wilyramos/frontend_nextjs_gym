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
        relative cursor-pointer rounded-2xl border flex flex-col justify-between
        transition-all duration-300 p-4 md:p-6
        ${isSelected
                    ? "border-red-700 ring-2 ring-red-700 bg-red-700 text-white shadow-xl"
                    : "border-gray-200 bg-white hover:shadow-lg"}
        ${popular ? "md:-translate-y-2" : ""}
      `}
        >
            {/* Cabecera */}
            <div className="flex md:flex-col justify-between mb-4 md:mb-6">
                <h2
                    className={`text-lg md:text-2xl font-extrabold flex items-center gap-2 ${isSelected ? "text-white" : "text-black"
                        }`}
                >
                    {popular && <AiFillStar className="text-yellow-400 w-5 h-5" />}
                    {name}
                </h2>

                <p
                    className={`font-bold text-md md:text-xl ${isSelected ? "text-white" : "text-black"
                        }`}
                >
                    S/ {price}
                    <span
                        className={`text-sm font-medium ml-1 ${isSelected ? "text-gray-100" : "text-gray-500"
                            }`}
                    >
                        / {duration}
                    </span>
                </p>
            </div>

            {/* Características */}
            <ul
                className={`space-y-2 text-xs md:text-sm ${isSelected ? "text-gray-100" : "text-gray-600"
                    }`}
            >
                {features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                        <AiOutlineCheck
                            className={`mr-2 w-5 h-5 ${isSelected ? "text-white" : "text-black"
                                }`}
                        />
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            {/* Etiqueta Popular */}
            {popular && !isSelected && (
                <span className="absolute top-3 right-3 bg-red-700 text-white text-xs font-semibold px-2 py-1 rounded-full">
                    Popular
                </span>
            )}
        </div>
    );
}
