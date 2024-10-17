import type { EnyaArray } from '@/structs/schemas/EnyaArray';
import type { EnyaBigInt } from '@/structs/schemas/EnyaBigInt';
import type { EnyaBoolean } from '@/structs/schemas/EnyaBoolean';
import type { EnyaEmail } from '@/structs/schemas/EnyaEmail';
import type { EnyaEnum } from '@/structs/schemas/EnyaEnum';
import type { EnyaNumber } from '@/structs/schemas/EnyaNumber';
import type { EnyaObject } from '@/structs/schemas/EnyaObject';
import type { EnyaOptional } from '@/structs/schemas/EnyaOptional';
import type { EnyaPort } from '@/structs/schemas/EnyaPort';
import type { EnyaRegExp } from '@/structs/schemas/EnyaRegExp';
import type { EnyaString } from '@/structs/schemas/EnyaString';
import type { EnyaURL } from '@/structs/schemas/EnyaURL';

export enum EnyaType {
	String = 'String',
	Number = 'Number',
	BigInt = 'BigInt',
	Boolean = 'Boolean',
	URL = 'URL',
	Array = 'Array',
	Object = 'Object',
	Port = 'Port',
	Email = 'Email',
	Enum = 'Enum',
	RegExp = 'RegExp',
	Optional = 'Optional',
	Default = 'Default',
}

export interface MappedEnyaType {
	[EnyaType.BigInt]: bigint;
	[EnyaType.Boolean]: boolean;
	[EnyaType.Number]: number;
	[EnyaType.String]: string;
	[EnyaType.URL]: URL;
	[EnyaType.Port]: number;
	[EnyaType.Email]: string;
	[EnyaType.RegExp]: RegExp;
}

export type EnyaShape = Record<string, EnyaAnySchema>;
export type EnyaAnySchema =
	| EnyaBigInt
	| EnyaBoolean
	| EnyaNumber
	| EnyaString
	| EnyaURL
	| EnyaArray<EnyaAnySchema[]>
	| EnyaObject<EnyaShape>
	| EnyaPort
	| EnyaEmail
	| EnyaEnum<string[]>
	| EnyaRegExp
	| EnyaOptional<EnyaAnySchema>;

export type Infer<Shape extends EnyaShape> = {
	[K in keyof Shape]: Shape[K] extends { type: EnyaType.Optional }
		? Shape[K]['_output'] | undefined
		: Shape[K]['_output'];
};
