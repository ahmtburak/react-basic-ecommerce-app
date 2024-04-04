import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedAdmin() {
	const { user } = useAuth();

	return (
		<>
			{user?.role != `admin` && <Navigate to={`/`} />}

			<Outlet />
		</>
	);
}

export default ProtectedAdmin;
