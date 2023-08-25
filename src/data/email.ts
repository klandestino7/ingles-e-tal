import { SubscribeProps } from "@/types";
import { emailClient } from "./client/email";
import { API_ENDPOINTS } from "./client/api-endpoints";
import { useQuery, useMutation } from "react-query";


type Subscribe = {
    email: string,
    conversionIdentifier: string
}

// type handleData = {
//     handleData: Subscribe
// }

// export function useSubscribeEmail({ handleData }: handleData) {

//     const { data, isLoading, error, isFetching, refetch } = useQuery<Subscribe, Error
//     >(
//         [`${API_ENDPOINTS.CONVERSIONS}?api_key=${process.env.RDSTATION_API_KEY}`, handleData],
//         () => emailClient.subscribeEmail(handleData.email, handleData.conversionIdentifier),
//         { enabled: false }
//     );
//     return {
//         result: data,
//         isFetching,
//         isLoading,
//         refetch,
//         error,
//     };
// }


export function useSubscribeEmail() {
    return useMutation(emailClient.subscribeEmail);
}