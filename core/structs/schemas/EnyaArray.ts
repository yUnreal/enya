import { type EnyaAnySchema, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaArray<Items extends EnyaAnySchema[]> extends EnyaBase<
	EnyaType.Array,
	Items[number]['_output'][]
> {
	public constructor(public readonly items: Items) {
		super(EnyaType.Array);
	}

	public parse(value: string) {
		const splited = value.split(',');
		const invalidIndex = splited.findIndex((data) =>
			this.items.every((schema) => !schema.parse(data)),
		);

		if (invalidIndex !== -1)
			throw new Error(
				`Invalid value at index "${invalidIndex}", value ${JSON.stringify(splited[invalidIndex])}`,
			);

		return value as unknown as Items[number]['_output'][];
	}
}
