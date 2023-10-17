import { getPosts } from "@/api";
import { Home } from "@/pages";
import { useEffect } from "react";

function App() {
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await getPosts();
			console.log(response);
		};
		fetchPosts();
	}, []);
	return (
		<div className="bg-black h-screen w-screen text-white">
			<Home />
		</div>
	);
}

export default App;
