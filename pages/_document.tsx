import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					<link rel="manifest" href="/manifest.json" />
					<link
						rel="stylesheet"
						href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
					/>
					<link
						href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap"
						rel="stylesheet"
					/>
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link rel="apple-touch-icon" href="/oo" />
					<meta name="theme-color" content="#ffffff" />
					<meta name="msapplication-TileColor" content="#2B5797" />
					<meta name="msapplication-tap-highlight" content="no" />
					<meta name="format-detection" content="telephone=no" />
					<meta name="mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-capable" content="yes" />
					<meta name="apple-mobile-web-app-status-bar-style" content="default" />
					<meta name="apple-mobile-web-app-title" content="Portfolio - Chetan Jain" />
					<link
						rel="apple-touch-icon"
						href="https://ik.imagekit.io/aqaseg5nkl6/portfolio/ChetanId.jpg?tr=w-200,h-200,f-png,r-100"
					/>
					<link
						rel="shortcut icon"
						href="https://ik.imagekit.io/aqaseg5nkl6/portfolio/ChetanId.jpg?tr=w-200,h-200,f-png,r-100"
					/>
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:url" content="https://thechetanjain.in" />
					<meta name="twitter:title" content="Portfolio - Chetan Jain" />
					<meta
						name="twitter:description"
						content="A Portfolio of Chetan Jain to showcase various skills and projects"
					/>
					<meta
						name="twitter:image"
						content="https://ik.imagekit.io/aqaseg5nkl6/portfolio/ChetanId.jpg?tr=w-200,h-200,f-png,r-100"
					/>
					<meta name="twitter:creator" content="@jainChetan81" />
					<meta property="og:type" content="website" />
					<meta property="og:title" content="Portfolio - Chetan Jain" />
					<meta
						property="og:description"
						content="A Portfolio of Chetan Jain to showcase various skills and projects"
					/>
					<meta property="og:site_name" content="Portfolio - Chetan Jain" />
					<meta property="og:url" content="https://thechetanjain.in" />
					<meta
						property="og:image"
						content="https://ik.imagekit.io/aqaseg5nkl6/portfolio/ChetanId.jpg?tr=w-200,h-200,f-png,r-100"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
					<div id="modal-root" />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
