import React, { useState, useRef, useLayoutEffect } from "react";
import { Animated } from "react-native";
import Svg, { LinearGradient, Stop, Path, G, Circle } from "react-native-svg";
import _D from "./TabMouvement";

const AnimatedPath = Animated.createAnimatedComponent(Path);
const AnimatedSvg = Animated.createAnimatedComponent(Svg);

const PersonnageAssociation2 = props => {
	const width =
		props.style && props.style.width ? props.style.width : 426.748;
	const height =
		props.style && props.style.height ? props.style.height : 426.75;
	const style = props.style ? { ...props.style } : {};
	const [flyingUp, setFlyingUp] = useState(new Animated.Value(10));
	const flyingDuration = 500;
	const flyingYRef = useRef(null);
	const flyingIterationRef = useRef(null);
	const [dState, setDState] = useState(_D[0]);
	const battementDuration = 500;
	const decompositionValue = 31;

	let newBattement = false;
	let isMounted = true;
	const flyingIteration = evolution => {
		if (evolution <= decompositionValue) {
			setTimeout(() => {
				if (isMounted) {
					setDState(_D[evolution]);
					flyingIterationRef.current = requestAnimationFrame(
						flyingIteration.bind(this, evolution + 1)
					);
				}
			}, battementDuration / decompositionValue);
		} else {
			newBattement = true;
		}
		if (newBattement) {
			newBattement = false;
			if (isMounted)
				flyingIterationRef.current = requestAnimationFrame(
					flyingIteration.bind(this, 0)
				);
		}
	};

	const flyingY = (val, duration) => {
		let translation = 10;
		const nextVal = val ? 0 : 1;
		if (val === 1) {
			translation = 0;
		}
		if (isMounted) {
			Animated.timing(flyingUp, {
				useNativeDriver: true,
				toValue: translation,
				duration: duration * 2
			}).start(() => {
				if (isMounted)
					flyingYRef.current = requestAnimationFrame(
						flyingY.bind(this, nextVal, duration)
					);
			});
		}
	};

	useLayoutEffect(() => {
		flyingYRef.current = requestAnimationFrame(
			flyingY.bind(this, 1, flyingDuration)
		);
		flyingIterationRef.current = requestAnimationFrame(
			flyingIteration.bind(this, 1)
		);
		return () => {
			isMounted = false;
			cancelAnimationFrame(flyingYRef.current);
			cancelAnimationFrame(flyingIterationRef.current);
		};
	}, []);

	return (
		<AnimatedSvg
			width={width}
			height={height}
			viewBox={`0 0 426.748 426.75`}
			preserveAspectRatio="xMinYMin slice"
			{...style}
			style={{
				transform: [{ translateY: flyingUp }]
			}}
		>
			<AnimatedPath
				transform="translate(72, 95) scale(0.6, 0.51)"
				fill="#FFF"
				d={dState}
			/>
			<LinearGradient
				id="prefix__a"
				gradientUnits="userSpaceOnUse"
				x1={205.282}
				y1={-151.283}
				x2={205.282}
				y2={-182.573}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fcc3ba" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__a)"
				d="M227.705,203.252c0,0-0.786,6.02-1.119,9.52c-0.334,3.5-0.807,6.999-0.807,6.999
		s-6.606,15.418-12.5,14.75c-5.893-0.666-12.273-14.75-12.273-14.75s-0.226-4.082-0.56-7.583c-0.334-3.5-1.137-8.936-1.137-8.936
		H227.705L227.705,203.252z"
			/>
			<LinearGradient
				id="prefix__b"
				gradientUnits="userSpaceOnUse"
				x1={146.395}
				y1={-98.376}
				x2={263.714}
				y2={-98.376}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fdcfcb" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__b)"
				d="M271.505,140.521c0,0-8,29-19,44s-39,25-39,25s-28-10-39-25s-19-44-19-44
		c-2.25-7.25-1.708-28.212,20.107-40.657c17.143-9.779,50.893-13.343,71.643,0.157C261.59,109.347,274.491,130.933,271.505,140.521z
		"
			/>
			<LinearGradient
				id="prefix__c"
				gradientUnits="userSpaceOnUse"
				x1={141.073}
				y1={-68.957}
				x2={264.959}
				y2={-68.957}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.084} stopColor="#dba399" />
				<Stop offset={1} stopColor="#b3857d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__c)"
				d="M224.28,91.95c0,0-32.928-8.562-56.273,6.07c-18.873,11.829-20.524,40.76-17.528,50.012
		c0.711,2.193,4.396-0.179,4.396-0.179s7.172-20.184,29.626-16.229c22.455,3.954,21.135,6.896,21.135,6.896
		s7.454-14.319,19.998-22.993c12.545-8.674,15.878-9.689,15.878-9.689s5.729,5.941,10.866,15.143
		c5.14,9.201,13.481,31.411,13.481,31.411s0.104-5.542,4.534-6.917c4.43-1.375,4.925-27.765-8.612-41.62
		C243.377,85.021,224.28,91.95,224.28,91.95z"
			/>
			<LinearGradient
				id="prefix__d"
				gradientUnits="userSpaceOnUse"
				x1={138.027}
				y1={-102.506}
				x2={155.264}
				y2={-102.506}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fcc3ba" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__d)"
				d="M156.987,145.474c0,0-8.147-3.287-10.147-0.954s1.667,8.334,2.667,11.667s3,8.706,6,9.039
		s7.982-1.639,7.982-1.639"
			/>
			<LinearGradient
				id="prefix__e"
				gradientUnits="userSpaceOnUse"
				x1={255.663}
				y1={-102.506}
				x2={272.897}
				y2={-102.506}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fcc3ba" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__e)"
				d="M270.389,145.474c0,0,8.146-3.287,10.146-0.954s-1.666,8.334-2.666,11.667s-3,8.706-6,9.039
		s-7.981-1.639-7.981-1.639"
			/>
			<LinearGradient
				id="prefix__f"
				gradientUnits="userSpaceOnUse"
				x1={211.502}
				y1={-234.25}
				x2={211.502}
				y2={-170.836}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.049} stopColor="#382514" />
				<Stop offset={1} stopColor="#61493d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__f)"
				d="M235.425,222.854c0,0,0.755-0.379,11.755,0.955c1.995,0.24,5.388,1.182,9.174,2.834
		c3.151,1.379,7.151,10.379,11.651,19.629s8,14.5,8,14.5l6.75-35.25l11.718,2.418c0,0-1.718,11.321-4.718,26.571
		s-8,23.011-11.5,22.761s-8.75-4.25-14.367-12.75c-5.619-8.5-13.087-21.688-13.087-21.688s-1.377,6.188-3.21,16.188
		s-8.5,25.832-8.5,25.832s-13.833,1.364-25.666,1.364h0.08c-11.834,0-25.667-1.364-25.667-1.364s-6.666-15.832-8.5-25.832
		c-1.832-10-4.166-20.668-4.166-20.668s-16.5,8.168-18.334,16.834c-1.833,8.668,4.167,21.334,4.167,21.334l-8.833,4.5
		c0,0-2.758-4.266-4.705-10.375c-4.279-13.432-3.713-21.602,7.154-33.375c7.438-8.061,20.309-12.877,25.131-13.463
		c11-1.334,11.753-0.955,11.753-0.955s10.385,11.834,21.773,11.668C224.67,234.354,235.425,222.854,235.425,222.854z"
			/>
			<LinearGradient
				id="prefix__g"
				gradientUnits="userSpaceOnUse"
				x1={191.769}
				y1={-158.787}
				x2={197.405}
				y2={-158.787}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.084} stopColor="#dba399" />
				<Stop offset={1} stopColor="#b3857d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__g)"
				d="M199.994 204.24l5.636 13.031-4.963-6.516z"
			/>
			<LinearGradient
				id="prefix__h"
				gradientUnits="userSpaceOnUse"
				x1={212.811}
				y1={-158.787}
				x2={218.446}
				y2={-158.787}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.084} stopColor="#dba399" />
				<Stop offset={1} stopColor="#b3857d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__h)"
				d="M226.672 204.24l-5.636 13.031 4.963-6.516z"
			/>
			<LinearGradient
				id="prefix__i"
				gradientUnits="userSpaceOnUse"
				x1={199.617}
				y1={-174.051}
				x2={210.236}
				y2={-174.051}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.084} stopColor="#dba399" />
				<Stop offset={1} stopColor="#b3857d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__i)"
				d="M208.505,223.396c0,0,0.597,0.604,1.487,1.516c0.445,0.433,0.96,0.933,1.542,1.363
			c0.287,0.221,0.594,0.408,0.898,0.576c0.312,0.131,0.62,0.271,0.907,0.271l0.109,0.018l0.026,0.004l0.015,0.002l0.007,0.002h0.003
			c0.021,0-0.146,0.008-0.07,0.004l0.076-0.008l0.313-0.029c0.193-0.037,0.229-0.062,0.383-0.107
			c0.283-0.129,0.582-0.28,0.848-0.508c0.552-0.422,1.017-0.959,1.411-1.428c0.772-0.957,1.291-1.676,1.291-1.676
			s-0.037,0.891-0.553,2.117c-0.256,0.611-0.636,1.311-1.25,1.965c-0.3,0.33-0.697,0.629-1.16,0.857
			c-0.229,0.106-0.597,0.227-0.812,0.257l-0.312,0.036l-0.079,0.01l-0.089,0.004h-0.014l-0.024-0.002l-0.054-0.004l-0.204-0.02
			c-0.562-0.043-1.039-0.265-1.471-0.496c-0.411-0.254-0.771-0.545-1.072-0.854c-0.604-0.619-1.039-1.267-1.353-1.847
			C208.669,224.27,208.505,223.396,208.505,223.396z"
			/>
			<G fill="#FFF">
				<Path
					d="M201.005,219.771l-9.5,2.25c0,0,0.83,4.414,4.75,10c5,7.125,11.5,12.125,11.5,12.125l5.75-9.625
			c0,0-4.5-3.25-7.25-7S201.005,219.771,201.005,219.771z"
				/>
				<Path
					d="M225.78,219.771l9.5,2.25c0,0-0.829,4.414-4.75,10c-5,7.125-11.5,12.125-11.5,12.125l-5.75-9.625
			c0,0,4.5-3.25,7.25-7S225.78,219.771,225.78,219.771z"
				/>
			</G>
			<Path
				d="M248.996,131.23c-11.761,0-29.479,4.35-29.479,4.35s-3.062-1.128-6.281-1.128h-0.001c-3.222,0-6.281,1.128-6.281,1.128
		s-17.722-4.35-29.479-4.35c-11.763,0-14.82,2.899-24.325,2.899v8.538c0,0,3.383,0.645,4.512,3.705
		c1.128,3.062,1.128,18.396,14.337,25.228c11.108,5.745,26.06-0.158,30.285-7.347c4.832-8.215,4.351-11.92,4.673-16.108
		c0.321-4.188,3.864-5.639,6.281-5.639h0.001c2.416,0,5.959,1.45,6.281,5.639c0.321,4.188-0.16,7.894,4.672,16.108
		c4.229,7.188,19.179,13.091,30.286,7.347c13.209-6.831,13.21-22.166,14.338-25.228c1.127-3.061,4.511-3.705,4.511-3.705v-8.538
		C263.817,134.13,260.756,131.23,248.996,131.23z M183.108,171.6c-22.068,0-25.122-23.004-18.524-34.087
		c4.026-6.767,31.091-4.994,37.054,1.128C207.595,144.762,205.178,171.6,183.108,171.6z M243.358,171.6
		c-22.068,0-24.486-26.838-18.525-32.959c5.961-6.122,33.023-7.895,37.054-1.128C268.481,148.595,265.427,171.6,243.358,171.6z"
			/>
			<LinearGradient
				id="prefix__j"
				gradientUnits="userSpaceOnUse"
				x1={215.968}
				y1={-98.507}
				x2={254.337}
				y2={-98.507}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#caebf3" />
				<Stop offset={0.273} stopColor="#d8f0f6" />
				<Stop offset={0.663} stopColor="#e6f6f9" />
				<Stop offset={1} stopColor="#ebf7fa" />
			</LinearGradient>
			<Circle
				fill="url(#prefix__j)"
				cx={243.377}
				cy={150.475}
				r={19.184}
			/>
			<Path
				fill="#FFF"
				d="M244.969,164.827c0,0-0.177,0.01-0.509,0.028c-0.334-0.001-0.812,0.094-1.439,0.023
				c-0.315-0.021-0.666-0.047-1.047-0.073c-0.375-0.066-0.781-0.14-1.217-0.217c-0.433-0.088-0.879-0.241-1.359-0.374
				c-0.479-0.144-0.949-0.378-1.463-0.581c-0.487-0.25-1.003-0.51-1.514-0.818c-0.489-0.336-1.021-0.663-1.492-1.09
				c-1.006-0.789-1.914-1.806-2.721-2.949c-0.799-1.153-1.442-2.472-1.9-3.879c-0.438-1.44-0.646-2.868-0.688-4.475
				c0.033-1.337,0.251-2.987,0.688-4.373c0.456-1.408,1.104-2.727,1.9-3.88c0.808-1.145,1.714-2.163,2.721-2.949
				c0.473-0.429,1.004-0.754,1.492-1.092c0.512-0.309,1.024-0.569,1.515-0.818c0.513-0.203,0.983-0.437,1.464-0.581
				c0.48-0.132,0.929-0.285,1.36-0.373c0.435-0.077,0.841-0.149,1.216-0.216c0.379-0.026,0.728-0.051,1.04-0.072
				c0.622-0.07,1.116,0.023,1.447,0.022c0.331,0.02,0.509,0.029,0.509,0.029s-0.177,0.028-0.506,0.08
				c-0.323,0.066-0.808,0.095-1.396,0.262c-0.295,0.074-0.621,0.156-0.979,0.245c-0.344,0.118-0.716,0.246-1.111,0.382
				c-0.781,0.308-1.625,0.72-2.502,1.232c-0.853,0.556-1.74,1.198-2.557,2.011c-0.846,0.78-1.562,1.766-2.235,2.798
				c-0.669,1.05-1.129,2.25-1.528,3.476c-0.359,1.277-0.508,2.438-0.539,3.917c0.023,1.211,0.179,2.595,0.538,3.815
				c0.396,1.228,0.858,2.427,1.527,3.477c0.676,1.034,1.392,2.02,2.235,2.799c0.814,0.812,1.704,1.457,2.558,2.011
				c0.876,0.514,1.721,0.926,2.502,1.232c0.396,0.136,0.771,0.264,1.112,0.382c0.354,0.088,0.679,0.17,0.971,0.244
				c0.586,0.167,1.085,0.197,1.406,0.262C244.794,164.799,244.969,164.827,244.969,164.827z"
			/>
			<Path
				d="M243.377,125.74c-13.661,0-24.732,11.074-24.732,24.734c0,13.659,11.071,24.733,24.732,24.733
			c13.66,0,24.733-11.074,24.733-24.733C268.112,136.814,257.038,125.74,243.377,125.74z M243.377,169.658
			c-10.595,0-19.185-8.588-19.185-19.184s8.59-19.185,19.185-19.185c10.597,0,19.186,8.589,19.186,19.185
			C262.561,161.07,253.972,169.658,243.377,169.658z"
			/>
			<Path d="M259.196,167.524c-0.541,1.378-5.07,4.155-6.822,5.132l14.815,24.148l6.305-5.891L259.196,167.524z" />
			<LinearGradient
				id="prefix__k"
				gradientUnits="userSpaceOnUse"
				x1={153.28}
				y1={-100.424}
				x2={196.209}
				y2={-100.424}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#caebf3" />
				<Stop offset={0.273} stopColor="#d8f0f6" />
				<Stop offset={0.663} stopColor="#e6f6f9" />
				<Stop offset={1} stopColor="#ebf7fa" />
			</LinearGradient>
			<Path
				fill="url(#prefix__k)"
				d="M183.108,171.6c-22.068,0-25.122-23.004-18.524-34.087c4.026-6.767,31.091-4.994,37.054,1.128
		C207.595,144.762,205.178,171.6,183.108,171.6z"
			/>
			<Path
				fill="#FFF"
				d="M166.172,141.878c0,0-0.039,0.691-0.047,1.893c-0.006,0.6,0.008,1.328,0.022,2.158
			c0.022,0.83,0.084,1.764,0.156,2.775c0.094,1.011,0.229,2.099,0.418,3.232c0.211,1.129,0.47,2.311,0.854,3.478
			c0.339,1.19,0.913,2.312,1.509,3.416c0.164,0.267,0.354,0.517,0.526,0.776l0.267,0.388l0.033,0.049l0.019,0.024l0.009,0.012
			c0.043,0.053-0.051-0.058-0.037-0.042l0.087,0.094l0.174,0.189l0.692,0.758c0.23,0.247,0.47,0.389,0.698,0.591
			c0.419,0.406,0.989,0.733,1.512,1.086c0.548,0.32,1.122,0.606,1.699,0.868c1.183,0.468,2.374,0.919,3.593,1.158
			c2.414,0.551,4.771,0.717,6.786,0.7c1.008-0.026,1.938-0.071,2.757-0.162c0.812-0.103,1.537-0.188,2.114-0.325
			c0.292-0.062,0.554-0.118,0.778-0.167c0.226-0.064,0.413-0.121,0.565-0.166c0.312-0.092,0.478-0.141,0.478-0.141
			s-0.148,0.083-0.435,0.239c-0.28,0.165-0.701,0.396-1.271,0.613c-0.561,0.248-1.269,0.477-2.091,0.697
			c-0.824,0.223-1.771,0.417-2.812,0.555c-1.044,0.134-2.188,0.229-3.398,0.212c-1.211-0.019-2.5-0.077-3.812-0.33
			c-0.662-0.098-1.326-0.252-1.996-0.438c-0.68-0.144-1.333-0.426-2.002-0.667c-1.32-0.576-2.604-1.228-3.787-2.238
			c-0.281-0.253-0.614-0.507-0.849-0.764l-0.681-0.771l-0.171-0.191l-0.085-0.097l-0.056-0.067l-0.012-0.015l-0.02-0.028
			l-0.038-0.058l-0.307-0.458c-0.199-0.307-0.412-0.605-0.6-0.918c-0.684-1.271-1.209-2.59-1.525-3.893
			c-0.373-1.293-0.521-2.577-0.646-3.78c-0.057-0.603-0.076-1.189-0.103-1.757c0.006-0.566,0.01-1.112,0.017-1.637
			c0.067-2.096,0.338-3.814,0.567-5.003C165.967,142.54,166.172,141.878,166.172,141.878z"
			/>
			<LinearGradient
				id="prefix__l"
				gradientUnits="userSpaceOnUse"
				x1={253.55}
				y1={-153.924}
				x2={286.247}
				y2={-153.924}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fdcfcb" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__l)"
				d="M294.471,214.755c0,0-4.301-20.408-11.968-23.654s-18.146-0.587-19.571,2.917
		c-1.429,3.504,1.002,3.504,0.954,5.504c-0.05,2-2.653,2.188-2.008,5.375c0.683,3.345,2.625,2.293,3.625,4.625
		c1,2.333-1.288,2.481,0,5.233c1.119,2.393,3.5,0.643,4.854,2.361c1.563,1.989-0.979,5.217,6.021,5.028
		C284.533,221.927,294.471,214.755,294.471,214.755z"
			/>
			<Path
				fill="#FFF"
				d="M282.755 225.521l-.999-4.337 13.499-9.356-.784 16.111z"
			/>
			<LinearGradient
				id="prefix__m"
				gradientUnits="userSpaceOnUse"
				x1={152.749}
				y1={-248.457}
				x2={152.749}
				y2={-224.553}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0} stopColor="#fdcfcb" />
				<Stop offset={1} stopColor="#fee3db" />
			</LinearGradient>
			<Path
				fill="url(#prefix__m)"
				d="M152.172,281.021c0,0-3,4.332-2.167,9.5c0.833,5.166,3.333,9.332,5.167,9.832
		c1.833,0.5,1.75-1.748,3.067-2.27c1.25-0.494,1.523,0.416,3.355-0.084c1.834-0.5,1.09-1.793,2.632-2.438
		c1.565-0.656,1.413,0.234,3.11-0.525c1.332-0.6,0.832-1.848,1.332-2.016c0.5-0.166,2,0.25,2.833-0.25
		c1.875-1.125-1.125-7.791-3.375-10.125s-7.125-6.125-7.125-6.125L152.172,281.021z"
			/>
			<Path
				fill="#FFF"
				d="M158.38 269.58l2.625 6.941-9.734 6.135-2.845-9.299z"
			/>
			<LinearGradient
				id="prefix__n"
				gradientUnits="userSpaceOnUse"
				x1={200.28}
				y1={-121.436}
				x2={209.53}
				y2={-121.436}
				gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
			>
				<Stop offset={0.084} stopColor="#dba399" />
				<Stop offset={1} stopColor="#b3857d" />
			</LinearGradient>
			<Path
				fill="url(#prefix__n)"
				d="M208.505,171.6c0,0,2.75,1.421,4.625,1.421s4.625-1.421,4.625-1.421s-1.5,3.608-4.625,3.608
		S208.505,171.6,208.505,171.6z"
			/>
			<G>
				<LinearGradient
					id="prefix__o"
					gradientUnits="userSpaceOnUse"
					x1={193.446}
					y1={-132.585}
					x2={217.401}
					y2={-132.585}
					gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__o)"
					d="M201.671,186.354c0,0,5.147-2.182,6.158-3.34c1.01-1.159,5.812,1.92,5.812,1.92h0.017
				c0,0,4.804-3.08,5.812-1.92c1.01,1.159,6.156,3.34,6.156,3.34s-5.289-0.758-6.873-0.758s-3.795,0.758-5.104,0.758
				c-1.312,0-3.979-0.758-4.979-0.758S201.671,186.354,201.671,186.354z"
				/>
				<LinearGradient
					id="prefix__p"
					gradientUnits="userSpaceOnUse"
					x1={198.893}
					y1={-138.135}
					x2={212.25}
					y2={-138.135}
					gradientTransform="matrix(1 0 0 -1 8.225 51.968)"
				>
					<Stop offset={0.084} stopColor="#dba399" />
					<Stop offset={1} stopColor="#b3857d" />
				</LinearGradient>
				<Path
					fill="url(#prefix__p)"
					d="M207.118,188.184c0,0,3.531,1.337,6.48,1.337c2.947,0,6.877-1.337,6.877-1.337
			s-3.539,3.837-6.877,3.837C210.26,192.021,207.118,188.184,207.118,188.184z"
				/>
			</G>
			<Path
				d="M189.655,284.854c0,0,3.334,12.002,3.667,24.668c0.332,12.666-0.716,27.766-0.716,27.766
	c-4.835,8.353-6.445,9.46-12.078,18.525c-5.633,9.063-3.404,19.173,0.034,21.55s5.321,2.119,8.996-4.228
	c7.009-12.105,11.353-23.915,13.863-28.254c2.301-3.972,5.147-7.924,5.147-10.277c0-2.805-6.53-9.618-6.363-13.786
	c0.167-4.166,1.835-16.718,6.632-18.13c1.416-0.416,8.202-0.562,9.535,0c4.797,1.412,6.465,13.964,6.632,18.13
	c0.167,4.168-6.362,10.981-6.362,13.786c0,2.354,2.848,6.307,5.146,10.277c2.512,4.339,6.855,16.147,13.864,28.254
	c3.674,6.347,5.557,6.604,8.996,4.228c3.438-2.377,5.667-12.485,0.034-21.55c-5.634-9.065-7.243-10.174-12.078-18.525
	c0,0-1.048-15.1-0.716-27.766c0.333-12.666,3.667-24.668,3.667-24.668"
			/>
		</AnimatedSvg>
	);
};

export default PersonnageAssociation2;
