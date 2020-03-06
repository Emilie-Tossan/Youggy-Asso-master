import React from 'react';
import Svg, { Ellipse, Path } from 'react-native-svg';
/* SVGR has dropped some elements not supported by react-native-svg: title */

function AjoutPhoto(props) {
	const width =
		props.style && props.style.width ? props.style.width : 841.889;
	const height =
		props.style && props.style.height ? props.style.height : 595.281;
	const style = props.style ? { ...props.style } : {};
	return (
		<Svg
			width={width}
			height={height}
			viewBox="0 0 841.889 595.281"
			preserveAspectRatio="xMinYMin slice"
			{...style}
			{...props}
		>
			<Ellipse
				fill="#A8A8A8"
				cx={419.849}
				cy={272.258}
				rx={61.624}
				ry={61.671}
			/>
			<Path
				fill="#A8A8A8"
				d="M523.714,301.117c18.346-6.819,38.425-7.422,57.146-1.715c4.975,1.71,10.395-0.938,12.104-5.911
	c0.331-0.964,0.506-1.975,0.517-2.994V171.441c0-5.261-4.265-9.524-9.523-9.524h-41.289c-3.225-0.02-6.232-1.622-8.049-4.286
	L491.76,94.722c-1.771-2.689-4.78-4.303-8.001-4.286H355.845c-3.224,0.02-6.232,1.621-8.048,4.286l-42.86,62.908
	c-1.732,2.634-4.658,4.237-7.811,4.286h-41.766c-5.26,0-9.523,4.265-9.523,9.524v214.301c0,5.261,4.265,9.524,9.523,9.524h200.49
	c5.26,0.002,9.526-4.26,9.528-9.521c0.001-0.097-0.001-0.192-0.004-0.29l0,0c-0.003-5.334,0.477-10.656,1.429-15.904
	c0.774-5.203-2.813-10.049-8.018-10.824c-1.633-0.244-3.302-0.059-4.842,0.537c-47.937,18.816-102.051-4.789-120.866-52.727
	c-18.817-47.937,4.789-102.052,52.726-120.868s102.051,4.789,120.868,52.727c3.397,8.658,5.481,17.776,6.183,27.052
	c0.666,8.376,0.186,16.804-1.429,25.05c-0.854,5.19,2.664,10.09,7.854,10.942C520.764,301.682,522.281,301.572,523.714,301.117z
	 M469.661,142.867c0,2.631-2.132,4.763-4.763,4.763h-90.481c-2.63,0-4.763-2.132-4.763-4.763v-14.286
	c0-2.63,2.133-4.763,4.763-4.763H464.9c2.631,0,4.763,2.133,4.763,4.763L469.661,142.867L469.661,142.867z"
			/>
			<Path
				fill="#A8A8A8"
				d="M555.049,326.023c-32.692,0-59.194,26.503-59.194,59.194s26.502,59.194,59.194,59.194
	c32.691,0,59.194-26.503,59.194-59.193l0,0C614.243,352.526,587.74,326.023,555.049,326.023z M587.337,389.076
	c0,2.63-2.133,4.763-4.763,4.763h-14.001c-2.631,0-4.763,2.132-4.763,4.763v14.286c0,2.63-2.132,4.763-4.763,4.763h-7.857
	c-2.63,0-4.762-2.133-4.762-4.763V398.6c0-2.631-2.133-4.763-4.764-4.763H527.38c-2.632,0-4.764-2.133-4.764-4.763v-7.715
	c0-2.631,2.132-4.763,4.764-4.763h14.285c2.631,0,4.764-2.132,4.764-4.763v-14.284c0-2.63,2.132-4.764,4.762-4.764h7.857
	c2.631,0,4.763,2.134,4.763,4.764v14.286c0,2.631,2.132,4.763,4.763,4.763h14.286c2.63,0,4.763,2.132,4.763,4.763L587.337,389.076z"
			/>
		</Svg>
	);
}

export default AjoutPhoto;
