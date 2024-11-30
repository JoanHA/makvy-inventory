"use client";
import logo from "@/app/static/Img/Logo.jpeg";
import Image from "next/image";
import { signUp } from "./_actions/actions";
// import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function Page() {
	const [state, action, pending] = useFormState(signUp, null);
	const [showError, setShowError] = useState<boolean>(false);
	const [show, setShow] = useState<boolean>(false);

	useEffect(() => {
		// Si hay errores, configuro un temporizador para limpiar los errores
		if (state?.errors) {
			setShowError(true);
			const timer = setTimeout(() => {
				setShowError(false);
			}, 5000); // 5 segundos

			return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta
		}
	}, [state?.errors, action]);

	useEffect(() => {
		// Si hay errores, configuro un temporizador para limpiar los errores
		if (state?.status == 409 && show == false) {
			setShow(true);
			state.status = 200;
		}
	}, [state?.status, action, show]);
	return (
		<section className="bg-gray-50 dark:bg-gray-900">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 h-screen">
				<a
					href="#"
					className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
				>
					<Image className="w-8 h-8 mr-2" src={logo} alt="logo" />
					Makvy Tienda
				</a>

				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						{state?.status == 409 && show == true && (
							<div
								id="toast-danger"
								className="flex items-center w-full p-4 mb-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800"
								role="alert"
							>
								<div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200">
									<svg
										className="w-5 h-5"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="currentColor"
										viewBox="0 0 20 20"
									>
										<path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 11.793a1 1 0 1 1-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L8.586 10 6.293 7.707a1 1 0 0 1 1.414-1.414L10 8.586l2.293-2.293a1 1 0 0 1 1.414 1.414L11.414 10l2.293 2.293Z" />
									</svg>
									<span className="sr-only">Error icon</span>
								</div>
								<div className="ms-3 text-sm font-normal text-center">
									<span>{state.msg}</span>
								</div>
								<button
									type="button"
									className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700"
									data-dismiss-target="#toast-danger"
									aria-label="Close"
									onClick={() => setShow(false)}
								>
									<span className="sr-only">Close</span>
									<svg
										className="w-3 h-3"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 14"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
										/>
									</svg>
								</button>
							</div>
						)}
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Crea una cuenta
						</h1>
						<form className="space-y-4 md:space-y-6" action={action}>
							<div>
								<label
									htmlFor="username"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Tu usuario
								</label>
								<input
									type="text"
									name="username"
									id="username"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Usuario"
								/>
								<div className=" flex flex-col">
									{showError &&
										state?.errors?.username &&
										state?.errors?.username.map((error, key) => (
											<p className="text-red-600 text-sm" key={key}>
												{error}
											</p>
										))}
								</div>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Contraseña
								</label>
								<input
									type="password"
									name="password"
									id="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>
								{showError &&
									state?.errors?.password &&
									state?.errors?.password.map((error, key) => (
										<p className="text-red-600 text-sm" key={key}>
											{error}
										</p>
									))}
							</div>
							<div>
								<label
									htmlFor="confirmPassword"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
								>
									Confirma contraseña
								</label>
								<input
									type="password"
									name="confirmPassword"
									id="confirm-password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
								/>

								{showError &&
									state?.errors?.confirmPassword &&
									state.errors.confirmPassword.map((error, key) => (
										<p className="text-red-600 text-sm" key={key}>
											{error}
										</p>
									))}
							</div>

							<button
								type="submit"
								className="w-full text-white bg-blue-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
							>
								{pending ? "Creando..." : "Crear cuenta"}
							</button>
							<p className="text-sm font-light text-gray-500 dark:text-gray-400">
								Already have an account?{" "}
								<a
									href="#"
									className="font-medium text-blue-600 hover:underline dark:text-blue-500"
								>
									Login here
								</a>
							</p>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
