import { EnyaError } from '@/errors/EnyaError';
import type { EnyaType } from '@/types/schema';
import { EnyaBase } from './EnyaBase';

export class EnyaPort extends EnyaBase<EnyaType.Port> {
	public parse(value: string) {
		const coerced = Number(value);

		if (coerced < 1 || coerced > 65535)
			throw new EnyaError(
				'Value is NOT a valid TCP port. See more about: https://en.wikipedia.org/wiki/Transmission_Control_Protocol',
				this.options.description,
			);

		return coerced;
	}
}
