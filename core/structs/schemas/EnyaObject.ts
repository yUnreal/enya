import { type EnyaShape, EnyaType, type Infer } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaObject<Shape extends EnyaShape> extends EnyaBase<
	EnyaType.Object,
	Infer<Shape>
> {
	public constructor(public readonly shape: Shape) {
		super(EnyaType.Object);
	}

	public parse(value: string) {
		const coerced = super.parse(value);

		for (const [key, schema] of Object.entries(this.shape)) {
			if (!(key in coerced)) throw new Error(`Missing key "${key}"`);

			// @ts-expect-error
			coerced[key] = schema.parse(coerced[key]);
		}

		return coerced;
	}
}
