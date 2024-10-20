import { EnyaError } from '@/errors/EnyaError';
import type {
	EnyaAnySchema,
	EnyaSchemaOptions,
	EnyaType,
} from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaArray<Items extends EnyaAnySchema[]> extends EnyaBase<
	EnyaType.Array,
	Items[number]['_output'][]
> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.Array>,
		public items: Items,
	) {
		super(options);
	}

	public parse(value: string) {
		const splited = value.split(',');
		const invalidIndex = splited.findIndex((data) =>
			this.items.every((schema) => !schema.parse(data)),
		);

		if (invalidIndex !== -1)
			throw new EnyaError(
				`Invalid value at index "${invalidIndex}", value '${JSON.stringify(splited[invalidIndex], null, '\t')}'.`,
			);

		return value as unknown as Items[number]['_output'][];
	}
}
