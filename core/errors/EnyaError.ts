export class EnyaError extends Error {
	public constructor(
		message: string,
		public description?: string,
	) {
		super(message + (description ? ` (${description})` : ''));
	}
}
