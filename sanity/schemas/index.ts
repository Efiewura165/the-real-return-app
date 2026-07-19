import type { SchemaTypeDefinition } from "sanity";

import { sharedObjectSchemas } from "./objects";
import { homepageSchemas, homepageSingletonNames } from "./homepage";
import { pageSchemas, pageSingletonNames } from "./pages";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [...sharedObjectSchemas, ...homepageSchemas, ...pageSchemas],
};

export const singletonNames = [...homepageSingletonNames, ...pageSingletonNames];
