<h1 align="center">Enya</h1>
<p align="center">An ergonomic env parsing library</p>

```bash
bun add enya
```

## Quick Start

Enya is an ergonomic env parsing library supercharged by Bun. Designed to be fast and with an extensive support for TypeScript.

Parsing your env from process.env.

```ts
import { e } from 'enya';

const env = e
	.env({
		DATABASE_URL: e.url(),
		PORT: e.port().default(() => 8080),
	})
	.parse();
```

Now we can infer the type of the enviroment easily.

```ts
/**
 * type Env = {
 *    DATABASE_URL: URL;
 *    PORT: number;
 * }
 */
type Env = typeof env;
```

## Installing

Enya was created with [Bun](https://bun.sh/), so you need to install it.

Install Bun with the command below:

### Linux & macOS

```bash
curl -fsSL https://bun.sh/install | bash
```

### Windows

```bash
powershell -c "irm bun.sh/install.ps1 | iex"
```

Then you can easily install Enya as a package.

```bash
bun add enya
bun add -d @types/bun
```

## Using dotenv or any env var loader

Enya lets you load your environment variables however you want, even though Bun already loads them automatically. For this, you can look at the example below:

```ts
import { e } from 'enya';
import { config } from 'dotenv';

/**
 * {
 * 		USER_EMAIL: string;
 * 		PORT: number;
 * }
 */
const env = e
	.env({
		USER_EMAIL: e.email(),
		PORT: e.for({
			production: e.never(),
			development: e.number(),
		}),
	})
	.parse(config());

console.log(env);
```

## Enya API

Enya has a **great** API for customizing each property of your environment variables which were not shown in the examples above, but you can find them in the [documentation](https://github.com/yUnreal/enya/blob/main/docs/API.md).

In a short period Enya will provide more support for customizations and more schemes.

## Why not envalid or env-var?

<p align="center">Enya is supercharged by Bun and end-to-end type safety, being <strong>80x</strong> faster than env-var and <strong>7x</strong> faster than envalid. With an ergonomic and modern API.</p>
