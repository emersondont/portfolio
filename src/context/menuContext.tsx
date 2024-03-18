import React, { createContext, useState } from 'react';

interface MenuContextType {
	selected: string;
	setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const initialContext: MenuContextType = {
	selected: 'about',
	setSelected: () => { },
};

export const MenuContext = createContext<MenuContextType>(initialContext);

export function MenuProvider({ children }: { children: React.ReactNode }) {
  const [selected, setSelected] = useState(initialContext.selected);

	return (
		<MenuContext.Provider value={{ selected, setSelected }}>
			{children}
		</MenuContext.Provider>
	);
};