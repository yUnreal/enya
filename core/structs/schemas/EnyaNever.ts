import { EnyaError } from '@/errors/EnyaError';
import type { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaNever extends EnyaBase<EnyaType.Never> {
	public parse(): never {
		throw new EnyaError('You should not pass this key in the enviroment.');
	}
}
