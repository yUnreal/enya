import type {
	EnyaSchemaOptions,
	EnyaType,
	MappedEnyaType,
} from '@/types/schema';
import { coerce } from '@/utils/coerce';

export abstract class EnyaBase<
	Type extends EnyaType,
	// @ts-expect-error
	Output = MappedEnyaType[Type],
> {
	public _output!: Output;

	public constructor(public options: EnyaSchemaOptions<Type>) {}

	public describe(description: string) {
		this.options.description = description;

		return this;
	}

	public parse(value: string) {
		return coerce(value, this.options.type, {
			// @ts-expect-error
			base: this.base,
			// @ts-expect-error
			flags: this.flags,
		}) as Output;
	}
}
