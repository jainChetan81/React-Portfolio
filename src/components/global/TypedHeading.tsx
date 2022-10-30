import { FC, MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";

type Props = {
	text: string[];
};

const TypedHeading: FC<Props> = ({ text }) => {
	const el: MutableRefObject<any> = useRef(null);
	useEffect(() => {
		const options = {
			strings: [...text],
			typeSpeed: 50,
			backSpeed: 50,
			smartBackspace: true,
			loop: true,
			loopCount: Infinity,
		}; // elRef refers to the <span> rendered below
		const animation: Typed = new Typed(el.current, options);
		animation.start();

		return () => {
			// to destroy Typed instance during cleanup
			// to prevent memory leaks
			animation.destroy();
		};
	});
	return (
		<h2 className="type-wrap">
			<span style={{ whiteSpace: "pre" }} ref={el} />
		</h2>
	);
};

export default TypedHeading;
