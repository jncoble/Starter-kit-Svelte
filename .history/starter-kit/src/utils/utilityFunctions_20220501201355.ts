export function parseError(e: any | undefined): ErrorResponse {
	if (e && (e as ApiError) !== undefined) {
		if (e.status == 401) {
			return {
				shoudDisplayAsFormError: true,
				status: e.status,
				message: e.message,
				field: e?.field
			};
		}

		return {
			shoudDisplayAsFormError: true,
			status: e.status,
			message: e.message,
			field: e?.field
		};
	} else if (e) {
		return {
			shoudDisplayAsFormError: false,
			status: e.status,
			message: e.message
		};
	}

	return e;
}
