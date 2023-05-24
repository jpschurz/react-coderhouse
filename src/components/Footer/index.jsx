export default function footer() {

    return (
        <footer>
            <div className="menu-footer">
                Copyright © <span id="anio-actual">{`${(new Date).getFullYear()}`}</span>
                <a href="home#" target="_blank"> WizardingStop </a> | Todos los derechos reservados. 
            </div>
        </footer>
    );
};