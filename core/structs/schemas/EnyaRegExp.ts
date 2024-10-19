import type { EnyaSchemaOptions, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaRegExp extends EnyaBase<EnyaType.RegExp> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.RegExp>,
		public flags?: string,
	) {
		super(options);
	}
}
