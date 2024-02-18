import { useState } from "react"

// Custom React Hook to show if the user is online/offline
const useOnlineStatus = ()=>{

    const [onlineStatus, setOnlineStatus] = useState(true);

    window.addEventListener('offline', ()=>{
        setOnlineStatus(false);
    });

    window.addEventListener('online', ()=>{
        setOnlineStatus(true);
    });

    return onlineStatus;
}

export default useOnlineStatus;