import { getPosts } from "@/api";
import { Home } from "@/pages";
import { useEffect, useState } from "react";
import { Loader } from "@/components";

function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchPosts = async () => {
			const response = await getPosts();
			console.log(response);
			if (response.success) setPosts(response.data);
			setLoading(false);
		};
		fetchPosts();
	}, []);
	if (loading) return <Loader />;
	return (
		<div className="h-screen w-screen">
			<Home posts={posts} />
		</div>
	);
}

export default App;
