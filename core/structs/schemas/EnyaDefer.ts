import type {
	EnyaAnySchema,
	EnyaSchemaOptions,
	EnyaType,
} from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaDefer<Schema extends EnyaAnySchema> extends EnyaBase<
	EnyaType.Defer,
	() => Schema['_output']
> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.Defer>,
		public schema: Schema,
	) {
		super(options);
	}

	public parse(value: string): () => Schema['_output'] {
		return (() => this.schema.parse(value)) as () => Schema['_output'];
	}
}
