"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error("useAuth must be used within a AuthProvider");
	}
	return context;
};

export const ContextProvider = ({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [user, setUser] = useState(null);
	const [cartItems, setCartItems] = useState([])

	const logOut = () => {
		//eliminar token
	};

	useEffect(() => {
		const checkLogin = async () => {
			//Verificar si el usuario esta logueado
		};
		checkLogin();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				user,
				logOut,
				isAuthenticated,
				setCartItems,
				cartItems
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
