import { EnyaError } from '@/errors/EnyaError';
import type {
	EnyaSchemaOptions,
	EnyaShape,
	EnyaType,
	Infer,
} from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaObject<Shape extends EnyaShape> extends EnyaBase<
	EnyaType.Object,
	Infer<Shape>
> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.Object>,
		public shape: Shape,
	) {
		super(options);
	}

	public parse(value: string) {
		const coerced = super.parse(value);

		for (const [key, schema] of Object.entries(this.shape)) {
			if (!(key in coerced))
				throw new EnyaError(
					`Missing required object key "${key}".`,
					this.options.description,
				);

			// @ts-expect-error
			coerced[key] = schema.parse(coerced[key]);
		}

		return coerced;
	}
}
