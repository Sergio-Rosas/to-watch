import {useGetFlag} from "./useGetFlag.tsx";

export function attachFlags(countryNames) {
    return countryNames.map( (name) => `${searchFlag(name)} ${name}` ).join(", ");
}

function searchFlag(name) {
    const [flags, isLoading] = useGetFlag();

    if (!isLoading) {
        const country = flags.filter( (obj) => obj.name === name );
        return country.at(0).unicodeFlag;
    }
}