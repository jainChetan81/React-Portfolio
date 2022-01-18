import { useRef, useEffect, MutableRefObject } from "react";

const useHorizontalScroll = () => {
	const elRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
	useEffect(() => {
		if (elRef.current) {
			const el: HTMLDivElement = elRef.current;
			const onWheel = (e: any) => {
				if (e.deltaY == 0) return;
				e.preventDefault();
				if (
					!(el.scrollLeft === 0 && e.deltaY < 0) &&
					!(el.scrollWidth - el.clientWidth - Math.round(el.scrollLeft) === 0 && e.deltaY > 0)
				) {
					e.preventDefault();
				}
				el.scrollTo({
					left: el.scrollLeft + e.deltaY,
					behavior: "smooth",
				});
			};
			el.addEventListener("wheel", onWheel);
			return () => el.removeEventListener("wheel", onWheel);
		}
	}, []);
	return elRef;
};
export default useHorizontalScroll;
