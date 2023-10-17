export const API_ROOT = `${import.meta.env.VITE_SERVER_DOMAIN}/api/v1`;

export const API_URLS = {
	login: () => `${API_ROOT}/users/create_session`,
	logout: () => `${API_ROOT}/users/destroy_session`,
	signup: () => `${API_ROOT}/users/create_user`,
	getPosts: (page, limit) => `${API_ROOT}/posts?_page=${page}&_limit=${limit}`,
	createPost: (content) => `${API_ROOT}/posts/create_post`,
	getPost: (postId) => `${API_ROOT}/posts?post_id=${postId}`,
	updatePost: (postId) => `${API_ROOT}/posts?post_id=${postId}`,
	deletePost: (postId) => `${API_ROOT}/posts?post_id=${postId}`,
	getFriends: () => `${API_ROOT}/friends`,
	addFriend: (userId) => `${API_ROOT}/friends/add_friend?user_id=${userId}`,
	removeFriend: (userId) => `${API_ROOT}/friends/remove_friend?user_id=${userId}`,
	toggleLike: (itemId, itemType) =>
		`${API_ROOT}/likes/toggle?likeable_id=${itemId}&likeable_type=${itemType}`,
	getLikes: (itemId, itemType) =>
		`${API_ROOT}/likes?likeable_id=${itemId}&likeable_type=${itemType}`,
	getComments: (page, limit) => `${API_ROOT}/comments?page=${page}&limit=${limit}`,
	createComment: (content) => `${API_ROOT}/comments/create_comment`,
	getComment: (commentId) => `${API_ROOT}/comments?comment_id=${commentId}`,
	updateComment: (commentId) => `${API_ROOT}/comments?comment_id=${commentId}`,
	deleteComment: (commentId) => `${API_ROOT}/comments?comment_id=${commentId}`,
	getUsers: () => `${API_ROOT}/users`,
	getUser: (userId) => `${API_ROOT}/users/${userId}`,
	updateUser: (userId) => `${API_ROOT}/users/${userId}`,
	deleteUser: (userId) => `${API_ROOT}/users/${userId}`,
	searchUsers: (searchText) => `${API_ROOT}/users/search?text=${searchText}`,
};

export const LOCALSTORAGE_TOKEN_KEY = `${
	import.meta.env.VITE_LOCALSTORAGE_TOKEN_KEY
}`;
