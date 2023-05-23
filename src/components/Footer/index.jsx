import '../scss/main.scss'

export default function footer(){

return(
    <footer>
        <div className="container-fluid">            
            <hr/>
            <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © <span id="anio-actual">{`${(new Date).getFullYear()}`}</span>
                    <a href="#" target="_blank"/> &nbsp; 
                    <a href="home#" className='link'>WizardingStop</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    );
};