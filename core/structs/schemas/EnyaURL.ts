import type { EnyaSchemaOptions, EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaURL extends EnyaBase<EnyaType.URL> {
	public constructor(
		options: EnyaSchemaOptions<EnyaType.URL>,
		public base?: string,
	) {
		super(options);
	}
}
