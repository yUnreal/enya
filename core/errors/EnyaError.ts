export class EnyaError extends Error {
	public constructor(
		public readonly message: string,
		description?: string,
	) {
		super(`${message}. See description: ${description}`);
	}
}
