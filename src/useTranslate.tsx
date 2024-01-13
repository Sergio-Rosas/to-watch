import {useEffect, useState} from "react";

export function useTranslate(text) {
    const [translated, setTranslated] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    useEffect(function () {
        async function translate() {
            setIsLoading(true);
            const url = `https://script.google.com/macros/s/AKfycbx3OaYYy8royaKqTOUiIkMRGV6ZrR4KKTUZTdyguOgy5tXdTae1Y8Dhxto71ZpNcw1S/exec?q=${text.replaceAll(" ", "%20")}&target=es&source=en`;

            try {
                const response = await fetch(url);
                const data = await response.text();
                setTranslated( () => data);
                setIsLoading(false);
            } catch (error) {
                console.error(error);
            }
        }
        translate();
    }, []);

    return [isLoading, translated];
}