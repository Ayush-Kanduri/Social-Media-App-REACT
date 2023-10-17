import { getPosts } from "@/api";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await getPosts();
			console.log(response);
		};
		fetchPosts();
	}, []);
	return <div className="bg-black h-screen w-screen"></div>;
}

export default App;
