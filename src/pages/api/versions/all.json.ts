import { getAllVersions } from "@biomejs/version-utils";
import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const versions = (await getAllVersions(true)) ?? [];

	return new Response(JSON.stringify(versions), {
		headers: {
			"Content-Type": "application/json",
		},
	});
};
