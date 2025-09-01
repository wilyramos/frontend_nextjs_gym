// src/app/loading.tsx
import Loader from '@/src/components/common/Loader';

export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-500">
            <Loader show />
        </div>
    );
}
