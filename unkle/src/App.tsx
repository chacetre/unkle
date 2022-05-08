import React from 'react';
import welcomeIcon from './assets/unkle_welcome.png';
import './App.css';
import {Positions, Tooltips, Types} from "./component/Tooltips";

function App() {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col justify-items-center m-16 p-4 text-center">
                <div>
                    <img src={welcomeIcon} width="100px" className="m-auto animate-waving-hand -z-10" alt="logo"/>
                </div>
                <div className="mb-3 text-2xl uppercase text-unkle-blue">Bienvenue sur Unkle !</div>
                <div className="text-unkle-blue">Renseignez vos informations en moins de 3 minutes pour recevoir votre
                    garantie Unkle.
                </div>
            </div>
            <div className="flex flex-col space-y-4 w-1/2 m-auto">
                <div>
                    <p className="text-xl font-semibold ">Comment vous appelez-vous ?</p>
                </div>
                <div className="grid grid-cols-3 gap-4 content-center">
                    <Tooltips type={Types.HOVER} content="I'm a tooltips" position={Positions.TOP}>
                        <p className="self-center">Prénom :</p>
                    </Tooltips>
                    <div className="col-span-2">
                        <Tooltips type={Types.FOCUS}
                                  content="I'm a very long content tooltips very very very very very very very long">
                            <input
                                className="w-full focus:outline-none px-4 border-l-4 border-unkle-blue-light bg-slate-100 rounded h-14 focus:border-r focus:border-y focus:border-unkle-blue-light"
                                type="text"/>
                        </Tooltips>
                    </div>
                    <Tooltips type={Types.HOVER} content="I'm another tooltips" position={Positions.RIGHT} withoutAnimation>
                        <p className="self-center">Nom :</p>
                    </Tooltips>
                    <input
                        className="focus:outline-none px-4 border-l-4 border-unkle-blue-light bg-slate-100 rounded h-14 col-span-2 focus:border-r focus:border-y focus:border-unkle-blue-light"
                        type="text"/>
                </div>
            </div>
        </div>

    );
}

export default App;
