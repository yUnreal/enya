import { EnyaError } from '@/errors/EnyaError';
import type {
	EnyaForOptions,
	EnyaSchemaOptions,
	EnyaType,
} from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaFor<Options extends EnyaForOptions> extends EnyaBase<
	EnyaType.For,
	// @ts-expect-error
	Options[keyof Options]['_output']
> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.For>,
		public specs: Options,
	) {
		super(options);

		if (!Object.keys(specs).length)
			throw new EnyaError(
				'EnyaFor need at least one argument to parse the property',
				this.options.description,
			);
	}

	// @ts-expect-error
	public parse(value: string): Options[keyof Options]['_output'] {
		// @ts-expect-error
		return this.options[process.env.NODE_ENV ?? 'test'].parse(value);
	}
}
