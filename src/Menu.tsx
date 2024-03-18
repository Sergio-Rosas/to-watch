import {ReactNode, useState} from "react";

export default function Menu({children, className}) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={className} onClick={() => setIsOpen(!isOpen)}>
            {children}
            {isOpen &&
                <ul className="menu">
                    <li>Por Defecto</li>
                    <li>Nombre Ascendente</li>
                    <li>Nombre Descendente</li>
                    <li>Año Ascendente</li>
                    <li>Año Descendente</li>
                    <li>Duración Ascendente</li>
                    <li>Duración Descendente</li>
                </ul>
            }
        </div>
    )
}