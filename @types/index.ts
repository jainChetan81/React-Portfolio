export type Project = {
	name: string;
	slug: string;
	startDate: string;
	endDate: string;
	rank: number;
	externalUrl: string;
	githubUrl: string;
	summary: string;
	technologies: string[];
	description: string;
	displayImage: {
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
