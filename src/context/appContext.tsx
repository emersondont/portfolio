import React, { createContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const cookieExists = Cookies.get('language') !== undefined;
if (!cookieExists) {
	Cookies.set('language', 'en', { sameSite: 'strict' });
}

interface AppContextType {
	isEnglish: boolean;
	setIsEnglish: React.Dispatch<React.SetStateAction<boolean>>;
	handleChange: () => void;
}

const initialContext: AppContextType = {
	isEnglish: true,
	setIsEnglish: () => { },
	handleChange: () => { }
};

export const AppContext = createContext<AppContextType>(initialContext);

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [isEnglish, setIsEnglish] = useState(true);

	useEffect(() => {
		const cookieValue = Cookies.get('language') == 'en' ? true : false;
		setIsEnglish(cookieValue)
	}, [])

	const handleChange = () => {
		if (isEnglish) {
			Cookies.set('language', 'pt-br', { sameSite: 'strict' });
		}
		else {
			Cookies.set('language', 'en', { sameSite: 'strict' });
		}
		setIsEnglish(!isEnglish)
	};

	return (
		<AppContext.Provider value={{ isEnglish, setIsEnglish, handleChange }}>
			{children}
		</AppContext.Provider>
	);
};