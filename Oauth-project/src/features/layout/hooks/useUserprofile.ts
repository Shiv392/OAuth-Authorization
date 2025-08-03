import { useState } from "react";
import user_detail_service from "../services/user-detail-service";
import type { AxiosError } from "axios";

const useUserProfile = () => {
    const [err, setError] = useState<any>(null);

    const get_user_profile = async () => {
        try {
            const data = await user_detail_service();
            return data;
        }
        catch (err) {
            const axios_error = err as AxiosError<any>;
            const message: string = axios_error.response?.data?.message || '';
            setError(message);
            return null;
        }
    }
    return { get_user_profile, err };
}

export default useUserProfile;