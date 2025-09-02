// File: frontend/components/ui/Spinner.tsx

import { SyncLoader } from "react-spinners";

export default function Spinner() {
    return (
        <div className="flex items-center justify-center ">
            <SyncLoader
                size={8}
                speedMultiplier={0.8}
                color="#ffffff"
            />
        </div>
    );
}
