import React from 'react';
import Svg, { Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function SvgComponent(props) {
	let width = props.style && props.style.width ? props.style.width : 17;
	let height = props.style && props.style.height ? props.style.height : 20;
	let style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 17 20"
			preserveAspectRatio="xMinYMin slice"
			{...props}
		>
			<Path
				fill="#FFCC68"
				d="M16.965 11.715c0-.745-.298-1.458-.824-1.984a2.836 2.836 0 00.129-1.994c-.347-1.17-1.481-1.987-2.76-1.987h-2.895l.308-.615c.214-.429.327-.909.327-1.421A3.689 3.689 0 007.586.035c-.776 0-1.407.625-1.407 1.393v1.285a.327.327 0 01-.079.212L2.724 6.783a.324.324 0 01-.243.11H1.286a.822.822 0 00-.821.821v9.143c0 .453.369.821.821.821h1.199c.262 0 .52.039.753.11l3.083 1.137a16.826 16.826 0 005.822 1.039 2.539 2.539 0 002.536-2.522 2.814 2.814 0 001.714-2.585c0-.399-.087-.797-.252-1.159a2.803 2.803 0 00.824-1.983zm-2.742 1.637a.818.818 0 00.208.708c.206.221.319.504.319.798 0 .609-.463 1.109-1.077 1.163a.812.812 0 00-.62.379.81.81 0 00-.076.724.895.895 0 01.059.306c0 .492-.4.893-.893.893-1.798 0-3.565-.315-5.254-.937l-3.124-1.151a4.283 4.283 0 00-1.28-.198h-.378v-7.5h.374a1.97 1.97 0 001.479-.671l3.377-3.857a1.97 1.97 0 00.485-1.294v-1.02a2.047 2.047 0 011.785 2.05c0 .227-.054.453-.154.655l-.902 1.804c-.129.256-.115.555.036.799s.412.39.698.39h4.225c.556 0 1.043.333 1.186.811a1.18 1.18 0 01-.265 1.166.81.81 0 00-.208.706.813.813 0 00.441.59c.405.203.657.605.657 1.05s-.252.846-.657 1.049a.811.811 0 00-.441.587z"
			/>
		</Svg>
	);
}

export default SvgComponent;