import type { EnyaType, MappedEnyaType } from '@/types/schema';
import { coerce } from '@/utils/coerce';

export abstract class EnyaBase<
	Type extends EnyaType,
	// @ts-expect-error
	Output = MappedEnyaType[Type],
> {
	public _output!: Output;

	public constructor(public readonly type: Type) {}

	public parse(value: string) {
		return coerce(value, this.type, {
			// @ts-expect-error
			base: this.base,
			// @ts-expect-error
			flags: this.flags,
		}) as Output;
	}
}
