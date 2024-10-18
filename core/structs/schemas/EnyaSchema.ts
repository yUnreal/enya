import { EnyaError } from '@/errors/EnyaError';
import { type EnyaShape, EnyaType, type Infer } from '@/types/schema';

export class EnyaSchema<Shape extends EnyaShape> {
	public constructor(public readonly shape: Shape) {}

	public parse(env = Bun.env) {
		const data = { ...env };

		for (const [key, schema] of Object.entries(this.shape)) {
			const value = data[key];

			if (!value) {
				if (schema.type !== EnyaType.Optional)
					throw new EnyaError(
						`Missing required environment variable "${key}". Expected a value of type "${schema.type}"`,
					);

				continue;
			}

			// @ts-expect-error
			data[key] = schema.parse(value);
		}

		return data as Infer<Shape>;
	}
}
