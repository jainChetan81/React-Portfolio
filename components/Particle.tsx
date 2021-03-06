import type { FC } from "react";
import Particles from "react-tsparticles";
const Particle: FC = () => (
	<Particles
		id="tsparticles"
		options={{
			fullScreen: {
				enable: true,
				zIndex: 1,
			},
			detectRetina: true,
			fpsLimit: 60,
			interactivity: {
				events: {
					onClick: {
						enable: true,
						mode: "push",
					},
					onDiv: {
						elementId: "repulse-div",
						enable: false,
						mode: "repulse",
					},
					onHover: {
						enable: true,
						mode: "bubble",
						parallax: {
							enable: false,
							force: 60,
							smooth: 10,
						},
					},
					resize: true,
				},
				modes: {
					bubble: {
						distance: 400,
						duration: 2,
						opacity: 0.8,
						size: 2,
					},
					connect: {
						distance: 80,
						lineLinked: {
							opacity: 0.5,
						},
						radius: 60,
					},
					grab: {
						distance: 400,
						lineLinked: {
							opacity: 1,
						},
					},
					push: {
						quantity: 2,
					},
					remove: {
						quantity: 2,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				color: {
					value: "#ffffff",
				},
				lineLinked: {
					blink: false,
					color: "#000",
					consent: false,
					distance: 150,
					enable: false,
					opacity: 0.4,
					width: 1,
				},
				move: {
					attract: {
						enable: false,
						rotate: {
							x: 600,
							y: 1200,
						},
					},
					bounce: false,
					direction: "none",
					enable: true,
					outMode: "out",
					random: false,
					speed: 2,
					straight: false,
				},
				number: {
					density: {
						enable: true,
						area: 800,
					},
					limit: 20,
					value: 15,
				},
				opacity: {
					animation: {
						enable: true,
						minimumValue: 0.2,
						speed: 1,
						sync: false,
					},
					random: true,
					value: 1,
				},
				rotate: {
					animation: {
						enable: true,
						speed: 5,
						sync: false,
					},
					direction: "random",
					random: true,
					value: 0,
				},
				shape: {
					character: {
						fill: false,
						font: "Red Hat Display",
						style: "",
						value: "*",
						weight: "500",
					},
					image: [
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/bootstrap?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "bootstrap icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/css?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "css icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/html?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "html icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/javascript?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "javascript icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/mysql?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "mysql icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/node?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "node icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/react?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "react icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/sass?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "sass icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/typescript?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "typescript icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/vscode?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "vscode icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/redux?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "redux icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/tailwindcss?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "tailwindcss icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/nextjs?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "nextjs icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/jest?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "jest icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/cypress?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "cypress icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/mongodb?tr=w-30,h-30,r-30`,
							width: 30,
							height: 30,
							alt: "mongodb icon",
						},
						{
							src: `${process.env.NEXT_PUBLIC_IMAGEKIT_URL}/icons/strapi?tr=w-30,h-30,r-100`,
							width: 30,
							height: 30,
							alt: "strapi icon",
						},
					],
					polygon: {
						sides: 5,
					},
					stroke: {
						color: "#000000",
						width: 0,
					},
					type: "image",
				},
				size: {
					animation: {
						enable: false,
						minimumValue: 0.1,
						speed: 40,
						sync: false,
					},
					random: false,
					value: 16,
				},
			},
			polygon: {
				draw: {
					enable: false,
					lineColor: "#ffffff",
					lineWidth: 0.5,
				},
				move: {
					radius: 10,
				},
				scale: 1,
				url: "",
			},
			background: {
				image: "",
				position: "50% 50%",
				repeat: "no-repeat",
				size: "cover",
			},
		}}
	/>
);

export default Particle;
