import { SubscribeHandle, SubscribeProps } from '@/types';
import { API_ENDPOINTS } from './api-endpoints';
import { HttpClient } from './http-client';

export const emailClient = {
    subscribeEmail: (handleData: SubscribeHandle) => {
        return HttpClient.post<any>(`${API_ENDPOINTS.CONVERSIONS}?api_key=${process.env.RDSTATION_API_KEY}`, {
            event_type: 'CONVERSION',
            event_family: 'CDP',
            payload: { conversion_identifier: handleData.conversionIdentifier, email: handleData.email }
        });
    }
}