import { type EnyaShape, EnyaType, type Infer } from '@/types/schema';

export class EnyaSchema<Shape extends EnyaShape> {
	public constructor(public readonly shape: Shape) {}

	public parse(data = Bun.env) {
		const copied = { ...data };

		for (const [key, schema] of Object.entries(this.shape)) {
			const value = copied[key] ?? schema?.fn();

			if (!copied[key]) {
				if (schema.type !== EnyaType.Optional)
					throw new Error(`Missing key "${key}"`);

				continue;
			}

			// @ts-expect-error
			copied[key] = schema.parse(copied[key]);
		}

		return copied as Infer<Shape>;
	}
}
