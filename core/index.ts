import { EnyaArray } from './structs/schemas/EnyaArray';
import { EnyaBigInt } from './structs/schemas/EnyaBigInt';
import { EnyaBoolean } from './structs/schemas/EnyaBoolean';
import { EnyaEmail } from './structs/schemas/EnyaEmail';
import { EnyaEnum } from './structs/schemas/EnyaEnum';
import { EnyaNumber } from './structs/schemas/EnyaNumber';
import { EnyaObject } from './structs/schemas/EnyaObject';
import { EnyaOptional } from './structs/schemas/EnyaOptional';
import { EnyaPort } from './structs/schemas/EnyaPort';
import { EnyaRegExp } from './structs/schemas/EnyaRegExp';
import { EnyaSchema } from './structs/schemas/EnyaSchema';
import { EnyaString } from './structs/schemas/EnyaString';
import { EnyaURL } from './structs/schemas/EnyaURL';
import { type EnyaAnySchema, type EnyaShape, EnyaType } from './types/schema';

export const e = {
	env<Shape extends EnyaShape>(shape: Shape) {
		return new EnyaSchema(shape);
	},
	url(base?: string) {
		return new EnyaURL(base);
	},
	port() {
		return new EnyaPort(EnyaType.Port);
	},
	enum<const Values extends string[]>(...values: Values) {
		return new EnyaEnum(values);
	},
	email() {
		return new EnyaEmail(EnyaType.Email);
	},
	string() {
		return new EnyaString(EnyaType.String);
	},
	regex(flags?: string) {
		return new EnyaRegExp(flags);
	},
	number() {
		return new EnyaNumber(EnyaType.Number);
	},
	bigint() {
		return new EnyaBigInt(EnyaType.BigInt);
	},
	boolean() {
		return new EnyaBoolean(EnyaType.Boolean);
	},
	array<Items extends EnyaAnySchema[]>(...items: Items) {
		return new EnyaArray(items);
	},
	object<Shape extends EnyaShape>(shape: Shape) {
		return new EnyaObject(shape);
	},
	optional<Schema extends EnyaAnySchema>(schema: Schema) {
		return new EnyaOptional(schema);
	},
};
