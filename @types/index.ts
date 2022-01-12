export type StrapiImage = {
	name: string;
	url: string;
	formats: {
		small: {
			url: string;
		};
		thumbnail: {
			url: string;
		};
	};
};
export type Project = {
	name: string;
	slug: string;
	startDate: string;
	endDate: string;
	rank: number;
	externalUrl: string;
	githubUrl: string;
	summary: string;
	technologies: { name: string; icon: string }[];
	description: string;
	displayImage: StrapiImage;
	sliderImages: {
		name: string;
		url: string;
		formats: {
			small: {
				url: string;
			};
			thumbnail: {
				url: string;
			};
		};
	}[];
};
