import "../styles/globals.css";
import "../styles/normalize.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "../components";
import * as ga from "../libs/google_analytics";

function MyApp({ Component, pageProps }: AppProps) {
	const router = useRouter();
	const [loading, setLoading] = useState<boolean>(false);
	useEffect(() => {
		const handleRouteChange = (url: string, { shallow }: { shallow: boolean }) => {
			ga.pageview(url);
			if (!shallow) {
				setLoading(true);
			}
		};
		const handleRouteComplete = (url: string, { shallow }: { shallow: boolean }) => {
			ga.pageview(url);
			setTimeout(() => {
				if (!shallow) {
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

	return <>{loading ? <Loader /> : <Component {...pageProps} />}</>;
}

export default MyApp;
