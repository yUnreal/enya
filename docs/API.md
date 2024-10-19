# Enya API

<p align="center">Enya supports a handful of types for schemas based on ergonomics and performance for environment variables.</p>

## Structure

We can define our enviroment schema using EnyaSchema class with `e.env` function:

```ts
export const env = e
	.env({
		DB_URL: e.string(),
		PORT: e.number(),
		AUTH_MODE: e.enum('JWT', 'OAuth', 'Saml'),
	})
	.parse();

console.log(env);
```

We have created our env schema, so the type of the env will be:

```ts
/**
 * type Env = {
 *      DB_URL: string;
 *      PORT: number;
 *      AUTH_MODE: 'JWT' | 'OAuth' | 'Saml';
 * };
 */
export type Env = typeof env;
```

### Enya Types

#### Primitives

```ts
e.string();
e.number();
e.bigint();
e.object();
e.boolean();
```

#### Customs

```ts
e.url();
e.enum();
e.port();
e.email();
e.regex();
e.array();
e.defer();
e.optional();
```

### Making Key Optional

Enya allows you to define optional enviroment keys in your env schema. For that, you will need to use `e.optional()` function to create an optional property:

```ts
const env = e
	.env({
		ADMIN_EMAIL: e.optional(e.email()),
	})
	.parse();

/**
 * type Env = {
 *      ADMIN_EMAIL: string | undefined;
 * };
 */
type Env = typeof env;
```

### Deferring Keys

Sometimes you don't need the value of a key at that moment or parse it at that moment.

So Enya implemented deferred keys, see the example below:

```ts
const env = e
	.env({
		PORT: e.port(),
		AUTH_MODE: e.defer(e.enum('JWT', 'OAuth')),
	})
	.parse();

env.PORT; // Looks fine, it's NOT deferred
env.AUTH_MODE(); // Enya will parse the key here, not in the .parse() function
```

### Env-For

Enya has a built-in way to define a property based on the **NODE_ENV** property value.

See the example below:

```ts
const schema = e.env({
    PORT: e.for({
        development: e.port(),
        production: e.never(),
    }),
});
```

In the example above, the **PORT** key is mandatory when NODE_ENV is equal to "development", but it should NOT appear when NODE_ENV is "production".

#### Nesting

Enya also lets you freely use nested env-for to make development easier.

Let's modify the example above to create something nested.

```ts
import { Infer } from 'enya';

const { shape } = e.env({
    REDIS: e.object({
        URL: e.for({
            production: e.never(),
            development: e.string(),
        }),
    }),
});

/**
 * type Env = {
 *      REDIS: {
 *          URL: string;
 *      };
 * };
 */
type Env = Infer<typeof shape>;
```

### Objects

Use Enya Objects when you need to create an object (nested or not) and parse them.

Enya calls JSON.parse internally to parse the object, then Enya validates each key of the object based in the object shape schema.

```ts
/**
 * type Env = {
 *      DB: {
 *          USERNAME: string;
 *          PASSWORD: string;
 *      };
 * };
 */
const schema = e.env({
    DB: e.object({
        USERNAME: e.string(),
        PASSWORD: e.string(),
    });
});
```

Your **.env** environment variable file should look something like:

```env
DB={ "USERNAME": "username", "PASSWORD": "password" }
```

Note, Enya supports nested objects, be free!

### Arrays

Creating an array schema is easy, but take care the ordem you can the functions.

```ts
const schema = e.env({
    PASSWORDS: e.array(e.string()), // string[]
    USERNAMES: e.array(e.optional(e.string())); // (string | undefined)[];
    SOME_PROP: e.optional(e.array(e.string())); // string[] | undefined;
});
```

### URLs

EnyaURL schema automatically parse the URL string to an URL instance with the string.

You can optionally pass the base of the URL in the first argument.

```ts
const schema = e.env({
    DB_URL: e.url(), // URL
    REDIS_URL: e.url('redis://'), // URL
});
```
