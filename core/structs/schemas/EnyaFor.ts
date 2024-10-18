import { EnyaError } from '@/errors/EnyaError';
import {
	type EnyaForOptions,
	EnyaType,
} from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaFor<Options extends EnyaForOptions> extends EnyaBase<
	EnyaType.For,
	// @ts-expect-error
	Options[keyof Options]['_output']
> {
	public constructor(public readonly options: Options) {
		super(EnyaType.For);

		if (!Object.keys(options).length)
			throw new EnyaError(
				'EnyaFor need at least one argument to parse the property',
			);
	}

	// @ts-expect-error
	public parse(value: string): Options[keyof Options]['_output'] {
		// @ts-expect-error
		return this.options[Bun.env.NODE_ENV ?? 'test'].parse(value);
	}
}
