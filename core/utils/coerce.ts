import { EnyaType } from '@/types/schema';

interface CoerceOptions {
	base?: string;
	flags?: string;
}

export const coerce = (
	value: string,
	type: EnyaType,
	{ base, flags }: CoerceOptions,
) => {
	switch (type) {
		case EnyaType.String:
			return value;
		case EnyaType.BigInt:
			return BigInt(value);
		case EnyaType.Boolean:
			return value.toLowerCase() === 'true';
		case EnyaType.Number:
			return Number(value);
		case EnyaType.URL:
			return new URL(value, base);
		case EnyaType.Object:
			return JSON.parse(value);
		case EnyaType.RegExp:
			return new RegExp(value, flags);
	}
};
