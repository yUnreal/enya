import { type EnyaAnySchema, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaDefer<Schema extends EnyaAnySchema> extends EnyaBase<
	EnyaType.Defer,
	() => Schema['_output']
> {
	public constructor(public readonly schema: Schema) {
		super(EnyaType.Defer);
	}

	public parse(value: string): () => Schema['_output'] {
		return (() => this.schema.parse(value)) as () => Schema['_output'];
	}
}
