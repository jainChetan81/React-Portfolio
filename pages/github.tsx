const Github = () => {
	return <div></div>;
};

export default Github;
export async function getServerSideProps() {
	return {
		redirect: {
			destination: "https://github.com/jainChetan81",
			permanent: true,
		},
	};
}
