//If Header isn't dynamic, it's can make code in `index.html`

import Logo from '../assets/investment-calculator-logo.png'

export default function Header() {
    return (
        <header id="header">
            <img src={Logo} alt="Logo Header"/>
            <h1>Investment Calculator</h1>
        </header>
    );
}