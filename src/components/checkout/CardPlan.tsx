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
            className={`relative cursor-pointer rounded-2xl border p-6 flex flex-col justify-between 
            transition-all duration-300 ease-in-out transform
            hover:scale-105 hover:shadow-2xl 
            ${isSelected
                    ? "border-black bg-amber-300 shadow-xl ring-2 ring-black"
                    : "border-gray-300 bg-white shadow-md"}
            ${popular ? "md:-translate-y-2 border-amber-300 bg-gradient-to-b from-amber-50 to-white" : ""}`}
        >
            {/* Badge "Más Popular" */}
            {popular && (
                <div className="absolute top-0 left-0 w-full flex items-center justify-center gap-1 bg-amber-300 text-black text-xs font-bold py-1 rounded-t-2xl shadow-sm">
                    Más Popular
                </div>
            )}

            <div className="pt-6">
                <h2 className="text-2xl font-extrabold text-gray-900 mb-2 flex items-center gap-2">
                    {popular && <AiFillStar className="text-amber-300 w-5 h-5" />}
                    {name}
                </h2>
                <p className="text-black font-bold text-xl mb-4">
                    S/ {price}{" "}
                    <span className="text-sm font-medium text-gray-500">/ {duration}</span>
                </p>

                <ul className="space-y-2 text-sm text-gray-700">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center">
                            <AiOutlineCheck className="text-amber-300 mr-2 w-5 h-5" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
