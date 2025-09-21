import getToken from "../auth/token";
import type { TPaginatedUsers } from "../types";
import { PaginatedUsersWithMembershipsSchema } from "../types";



type GetUsersParams = {
    page?: string;
    limit?: string;
    search?: string;
    status?: string;
};



export async function getUsers(params: GetUsersParams = {}): Promise<TPaginatedUsers> {
    try {
        const token = await getToken();

        const query = new URLSearchParams();
        if (params.page) query.append("page", params.page.toString());
        if (params.limit) query.append("limit", params.limit.toString());
        if (params.search) query.append("search", params.search);
        if (params.status) query.append("status", params.status);

        const url = `${process.env.API_URL}/users?${query.toString()}`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        const data: TPaginatedUsers = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}


export async function getUsersWithMemberships(): Promise<TPaginatedUsers> {
    try {
        const token = await getToken();

        const url = `${process.env.API_URL}/users/with-memberships`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        const data: TPaginatedUsers = await response.json();
        return data;

    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export async function getUsersWithLastMembership(
    params: GetUsersParams = {}
) {
    try {
        const token = await getToken();
        const query = new URLSearchParams();
        if (params.page) query.append("page", params.page.toString());
        if (params.limit) query.append("limit", params.limit.toString());
        if (params.search) query.append("search", params.search);

        const url = `${process.env.API_URL}/users/with-memberships?${query.toString()}`;

        const response = await fetch(url, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            cache: "no-store",
        });

        console.log("Response status:", response.status);
        const data = await response.json();
        console.log("Raw data:", data);
        return PaginatedUsersWithMembershipsSchema.parse(data);

    } catch (error) {

        console.error("Error fetching users:", error);
    }
}