const StackOverflow = () => <div></div>;

export default StackOverflow;

export async function getServerSideProps() {
	return {
		redirect: {
			destination: "https://stackoverflow.com/users/10671677/jainchetan81",
			permanent: true,
		},
	};
}
