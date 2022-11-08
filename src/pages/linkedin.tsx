const StackOverflow = () => <div></div>;

export default StackOverflow;

export async function getServerSideProps() {
	return {
		redirect: {
			destination: "https://www.linkedin.com/in/jainchetan81/",
			permanent: true,
		},
	};
}
