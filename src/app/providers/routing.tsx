import { MainPage } from "@/pages";
import { MainLayout } from "@/shared";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const AppRouter: React.FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<MainPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};