const Twitter = () => {
	return <div></div>;
};

export default Twitter;
export async function getServerSideProps() {
	return {
		redirect: {
			destination: "https://twitter.com/jainchetn",
			permanent: true,
		},
	};
}
