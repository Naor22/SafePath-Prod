import { useEffect, useState } from "react";


const useMobile = ()=>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(checkIsMobile())
        window.addEventListener("resize",()=>{
            setIsMobile(checkIsMobile())
        })
        return ()=>{
            window.removeEventListener("resize",()=>{
                setIsMobile(checkIsMobile())
            })
        }
    },[])



    const checkIsMobile = () => {
        return window.matchMedia("(max-width: 768px)").matches;
    }

    return {isMobile}


}
export default useMobile;
