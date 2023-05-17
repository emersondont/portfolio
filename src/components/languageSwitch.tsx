import { useContext } from 'react';
import { AppContext } from "@/context/appContext";

export default function LanguageSwitch() {
    const {isEnglish, setIsEnglish} = useContext(AppContext)

    const handleChange = () => {
        setIsEnglish(!isEnglish);
    };

    return (
        <label className="cursor-pointer text-white font-Rubik font-semibold fixed top-6 right-6 z-30">
            <input
                type="checkbox"
                checked={isEnglish}
                onChange={handleChange}
                className="hidden"
            ></input>
            {isEnglish ?
                <div className="flex w-24 h-6 bg-purple-900 rounded-xl">
                    <div className="w-2/3 h-6 flex justify-center rounded-xl custom-switch-shadow-left">
                        <span>en</span>
                    </div>
                </div> :
                <div className="flex w-24 h-6 bg-purple-900 justify-end rounded-xl">
                    <div className="w-2/3 h-6 flex justify-center rounded-xl custom-switch-shadow-right">
                        <span>pt-br</span>
                    </div>
                </div>
            }
        </label>
    );

}