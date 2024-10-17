import type { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaEmail extends EnyaBase<EnyaType.Email> {
	public parse(value: string) {
		const EMAIL_PATTERN = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

		if (!EMAIL_PATTERN.test(value)) throw new Error('Invalid email');

		return value;
	}
}
