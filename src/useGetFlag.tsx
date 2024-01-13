import {useEffect, useState} from "react";

export function useGetFlag() {
    const [flagsData, setFlagsData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(function () {
        async function getFlag() {
            try {
                console.log("Initial request");
                const res = await fetch("https://countriesnow.space/api/v0.1/countries/info?returns=unicodeFlag", {
                    method: "GET",
                    redirect: "follow"
                });

                if (!res.ok) {
                    throw new Error("Response error: flags not retrieved.");
                }

                const objectData = await res.json();
                setFlagsData( () => objectData.data);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getFlag();
    }, [])

    return [flagsData, isLoading];
}