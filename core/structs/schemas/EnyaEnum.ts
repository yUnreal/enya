import { EnyaError } from '@/errors/EnyaError';
import { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaEnum<Values extends string[]> extends EnyaBase<
	EnyaType.Enum,
	Values[number]
> {
	public constructor(public readonly values: Values) {
		super(EnyaType.Enum);
	}

	public parse(value: string) {
		if (!this.values.includes(value))
			throw new EnyaError(
				`Invalid enum member, expected one of: "${this.values.join('", "')}".`,
			);

		return value;
	}
}
