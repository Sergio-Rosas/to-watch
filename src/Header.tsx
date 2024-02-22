import Menu from "./Menu";

export default function Header() {
    return (
        <header className="header">
            <h1>🎥 Para Ver</h1>
            <Menu className="header__button">Ordenar...</Menu>
        </header>
    )
}