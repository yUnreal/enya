import { EnyaArray } from './structs/schemas/EnyaArray';
import { EnyaBigInt } from './structs/schemas/EnyaBigInt';
import { EnyaBoolean } from './structs/schemas/EnyaBoolean';
import { EnyaDefer } from './structs/schemas/EnyaDefer';
import { EnyaEmail } from './structs/schemas/EnyaEmail';
import { EnyaEnum } from './structs/schemas/EnyaEnum';
import { EnyaFor } from './structs/schemas/EnyaFor';
import { EnyaNever } from './structs/schemas/EnyaNever';
import { EnyaNumber } from './structs/schemas/EnyaNumber';
import { EnyaObject } from './structs/schemas/EnyaObject';
import { EnyaOptional } from './structs/schemas/EnyaOptional';
import { EnyaPort } from './structs/schemas/EnyaPort';
import { EnyaRegExp } from './structs/schemas/EnyaRegExp';
import { EnyaSchema } from './structs/schemas/EnyaSchema';
import { EnyaString } from './structs/schemas/EnyaString';
import { EnyaURL } from './structs/schemas/EnyaURL';
import {
	type EnyaAnySchema,
	type EnyaForOptions,
	type EnyaShape,
	EnyaType,
} from './types/schema';

export const e = {
	env<Shape extends EnyaShape>(shape: Shape) {
		return new EnyaSchema(shape);
	},
	url(base?: string) {
		return new EnyaURL({ type: EnyaType.URL }, base);
	},
	for<Options extends EnyaForOptions>(options: Options) {
		return new EnyaFor({ type: EnyaType.For }, options);
	},
	port() {
		return new EnyaPort({ type: EnyaType.Port });
	},
	enum<const Values extends string[]>(...values: Values) {
		return new EnyaEnum({ type: EnyaType.Enum }, values);
	},
	defer<Schema extends EnyaAnySchema>(schema: Schema) {
		return new EnyaDefer({ type: EnyaType.Defer }, schema);
	},
	email() {
		return new EnyaEmail({ type: EnyaType.Email });
	},
	string() {
		return new EnyaString({ type: EnyaType.String });
	},
	regex(flags?: string) {
		return new EnyaRegExp({ type: EnyaType.RegExp }, flags);
	},
	never() {
		return new EnyaNever({ type: EnyaType.Never });
	},
	number() {
		return new EnyaNumber({ type: EnyaType.Number });
	},
	bigint() {
		return new EnyaBigInt({ type: EnyaType.BigInt });
	},
	boolean() {
		return new EnyaBoolean({ type: EnyaType.Boolean });
	},
	array<Items extends EnyaAnySchema[]>(...items: Items) {
		return new EnyaArray({ type: EnyaType.Array }, items);
	},
	object<Shape extends EnyaShape>(shape: Shape) {
		return new EnyaObject({ type: EnyaType.Object }, shape);
	},
	optional<Schema extends EnyaAnySchema>(schema: Schema) {
		return new EnyaOptional({ type: EnyaType.Optional }, schema);
	},
};

export * from './types/schema';
