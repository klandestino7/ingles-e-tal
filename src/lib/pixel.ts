export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID


export const pageview = () => {
    const fbq = (window as any).fbq;
    fbq('track', 'PageView') 
}

// https://developers.facebook.com/docs/facebook-pixel/advanced/
export const event = (name: string, options = {}) => {
    const fbq = (window as any).fbq;
    fbq('track', name, options)
}
