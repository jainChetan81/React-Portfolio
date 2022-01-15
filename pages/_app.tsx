import "../styles/globals.css";
import "../styles/normalize.css";
import Script from "next/script";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader, MatrixRainLoader } from "../components";
import * as ga from "../libs/google_analytics";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	const [display, setDisplay] = useState<boolean>(false);
	useEffect(() => {
		const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
			//if the url is external or regarding api's dont't track or show the loader
			if (!shallow && !url.includes("api")) {
				url !== router.pathname ? setLoading(true) : setLoading(false);
				ga.pageview(url);
			}
		};
		const handleRouteComplete = (url: string, { shallow }: { shallow: boolean }) => {
			setTimeout(() => {
				if (!shallow) {
					ga.pageview(url);
					setLoading(false);
					window.scrollTo(0, 0);
				}
			}, 2000);
		};
		const handleRouteChangeError = (err: any, url: string) => {
			if (err.cancelled) {
				console.error(`Route to ${url} was cancelled!`);
			}
		};

		router.events.on("routeChangeStart", handleRouteChange);
		router.events.on("routeChangeComplete", handleRouteComplete);
		router.events.on("routeChangeError", handleRouteChangeError);
		return () => {
			router.events.off("routeChangeStart", handleRouteChange);
			router.events.off("routeChangeComplete", handleRouteComplete);
			router.events.off("routeChangeError", handleRouteChangeError);
		};
	});
	useEffect(() => {
		setDisplay(true);
		setTimeout(() => {
			setDisplay(false);
		}, 3000);
	}, []);

	return (
		<>
			{/* Global Site Tag (gtag.js) - Google Analytics */}
			<Script
				strategy="afterInteractive"
				src={`https://www.googletagmanager.com/gtag/js?id=${ga.GA_TRACKING_ID}`}
			/>
			<Script
				id="gtag-init"
				strategy="afterInteractive"
				dangerouslySetInnerHTML={{
					__html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${ga.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
				}}
			/>
			{loading ? <Loader /> : <div>{display ? <MatrixRainLoader /> : <Component {...pageProps} />}</div>};
		</>
	);
}

export default MyApp;
