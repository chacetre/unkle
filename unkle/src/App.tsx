import React from 'react';
import welcomeIcon from './assets/unkle_welcome.png';
import './App.css';

function App() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-items-center m-16 p-4 text-center">
                <div>
                    <img src={welcomeIcon} width="100px" className="m-auto" alt="logo"/>
                </div>
                <div className="mb-3 text-2xl uppercase text-blue-900">Bienvenue sur Unkle !</div>
                <div className="text-blue-900">Renseignez vos informations en moins de 3 minutes pour recevoir votre
                    garantie Unkle.
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-1/2 m-auto">
                <div>
                    <p className="text-xl font-semibold ">Comment vous appelez-vous ?</p>
                </div>
                <div className="grid grid-cols-3 gap-4 content-center">
                    <p className="self-center">Prénom :</p>
                    <input className="focus:outline-none px-4 border-l-4 border-indigo-500 bg-slate-100 rounded h-14 col-span-2 focus:border-r focus:border-y focus:border-indigo-500" type="text"/>

                    <p className="self-center">Nom :</p>
                    <input className="focus:outline-none px-4 border-l-4 border-indigo-500 bg-slate-100 rounded h-14 col-span-2 focus:border-r focus:border-y focus:border-indigo-500" type="text"/>
                </div>
            </div>
        </div>

    );
}

export default App;
