export interface PostMetadata {
	title: string;
	seo_title: string;
	author: string;
	avatar: string;
	date: Date;
	description: string;
	tags: string[];
	slug: string;
}

export const sleep = (ms: number): Promise<void> =>
	new Promise((resolve) => setTimeout(resolve, ms));
