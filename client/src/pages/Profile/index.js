import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

function Profile({ history }) {
	const { user, logout } = useAuth();
	let navigate = useNavigate();


	const handleLogout = async () => {
		logout(() => {
			navigate("../");
		});
	};

	return (
		<div>
			<Text fontSize="22">Profil</Text>
			<code>{JSON.stringify(user)}</code>
			<br />
			<br />
			<Button colorScheme="red" variant="solid" onClick={handleLogout}>
				Logout
			</Button>
		</div>
	);
}

export default Profile;
