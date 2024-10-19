import { EnyaError } from '@/errors/EnyaError';
import type { EnyaSchemaOptions, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaEnum<Values extends string[]> extends EnyaBase<
	EnyaType.Enum,
	Values[number]
> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.Enum>,
		public values: Values,
	) {
		super(options);
	}

	public parse(value: string) {
		if (!this.values.includes(value))
			throw new EnyaError(
				`Invalid enum member, expected one of: "${this.values.join('", "')}".`,
				this.options.description,
			);

		return value;
	}
}
