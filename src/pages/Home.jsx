import styles from "@/styles/home.module.css";

const Home = ({ posts }) => {
	return (
		<div className={styles.postsList}>
			{posts.map((post) => (
				<div className={styles.postWrapper} key={post.id}>
					<div className={styles.postHeader}>
						<div className={styles.postAvatar}>
							<img
								src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2048"
								alt="user-pic"
							/>
							<div>
								<span className={styles.postAuthor}>
									{post.user.name}
								</span>
								<span className={styles.postTime}>a minute ago</span>
							</div>
						</div>
						<div className={styles.postContent}>{post.content}</div>

						<div className={styles.postActions}>
							<div className={styles.postLike}>
								<img
									src="https://png.pngtree.com/png-vector/20190223/ourmid/pngtree-vector-like-icon-png-image_695769.jpg"
									alt="likes-icon"
								/>
								<span>5</span>
							</div>

							<div className={styles.postCommentsIcon}>
								<img
									src="https://cdn-icons-png.flaticon.com/512/1380/1380338.png"
									alt="comments-icon"
								/>
								<span>2</span>
							</div>
						</div>
						<div className={styles.postCommentBox}>
							<input placeholder="Start typing a comment" />
						</div>

						<div className={styles.postCommentsList}>
							<div className={styles.postCommentsItem}>
								<div className={styles.postCommentHeader}>
									<span className={styles.postCommentAuthor}>
										Bill
									</span>
									<span className={styles.postCommentTime}>
										a minute ago
									</span>
									<span className={styles.postCommentLikes}>
										22
									</span>
								</div>

								<div className={styles.postCommentContent}>
									Random comment
								</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Home;
