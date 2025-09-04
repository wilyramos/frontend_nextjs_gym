import { getCurrentUser } from "@/src/auth/currentUser";



export default async function ProfilePage() {

    const user = await getCurrentUser();

    if (!user) {
        return <div>Loading...</div>;
    }
    
    

    return (
        <div className="max-w-2xl mx-auto flex flex-col  pt-10">
            <h1 className="text-2xl font-bold mb-4">My Profile</h1>

            <div className="space-y-4">
                <div>
                    <p className="text-gray-500 text-sm">Name</p>
                    <p className="text-lg font-medium">{user.name}</p>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <p className="text-lg font-medium">{user.email}</p>
                </div>

                <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <p className="text-lg font-medium">{user.phone}</p>
                </div>
            </div>

            <button className="mt-6 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 w-32">
                Edit Profile
            </button>
        </div>
    );
}