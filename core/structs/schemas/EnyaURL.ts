import { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaURL extends EnyaBase<EnyaType.URL> {
	public constructor(public readonly base?: string) {
		super(EnyaType.URL);
	}
}
