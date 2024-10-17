import { type EnyaAnySchema, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaOptional<Schema extends EnyaAnySchema> extends EnyaBase<
	EnyaType.Optional,
	Schema['_output'] | undefined
> {
	public constructor(public readonly schema: Schema) {
		super(EnyaType.Optional);
	}

	public parse(value: string): Schema['_output'] | undefined {
		return this.schema.parse(value) as Schema['_output'] | undefined;
	}
}
