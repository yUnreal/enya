import { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaRegExp extends EnyaBase<EnyaType.RegExp> {
	public constructor(public readonly flags?: string) {
		super(EnyaType.RegExp);
	}
}
