import React from 'react';
import Svg, { G, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

const Envoyer = props => {
	let width = props.style && props.style.width ? props.style.width : 15;
	let height = props.style && props.style.height ? props.style.height : 13;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 15 13"
			preserveAspectRatio="xMinYMin slice"
			{...props}
			{...style}
		>
			<G fillRule="nonzero" fill="#8397A4">
				<Path d="M14.0076455,0.016091954 L0.163832111,6.69425287 C0.0667901934,6.74867423 0.00689277473,6.85001146 0.00689277473,6.95977011 C0.00689277473,7.06952877 0.0667901934,7.170866 0.163832111,7.22528736 L3.73537213,8.91494253 L11.2224996,3.17011494 L4.84943049,9.44597701 L9.32204712,11.554023 C9.39531288,11.5919147 9.48142177,11.5978066 9.55932872,11.5702587 C9.63723567,11.5427108 9.69976242,11.4842614 9.7316274,11.4091954 L14.204244,0.193103448 C14.2211652,0.139577789 14.2051252,0.0812674227 14.1630624,0.043395284 C14.1209996,0.00552314522 14.0604657,-0.00511132595 14.0076455,0.016091954 Z" />
				<Path d="M4.80028086,10.0574713 L6.86456545,11.0712644 L5.24262756,12.1816092 C5.151866,12.2505983 5.02859945,12.2616015 4.92666314,12.2098131 C4.82472684,12.1580248 4.76263847,12.0528528 4.76751443,11.9402299 L4.80028086,10.0574713 Z" />
			</G>
		</Svg>
	);
};

export default Envoyer;
