import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

const ProjectID = "ca1204bc-aa0e-4362-93a6-048f8e6cf08f";

const App = () => {
	if (!localStorage.getItem("username")) return <LoginForm />;

	return (
		<ChatEngine
			height="100vh"
			projectID={ProjectID}
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
};
export default App;
