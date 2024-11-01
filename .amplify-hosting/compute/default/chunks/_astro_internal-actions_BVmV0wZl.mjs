import { d as db, N as Negotiations, S as Sessions } from './_astro_db_gWVhekhy.mjs';
import './_astro_actions_CayrvuKZ.mjs';
import 'neotraverse/modern';
import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import './astro/server_B0OQd9WE.mjs';
import 'clsx';
import * as z from 'zod';
import { z as z$1 } from 'zod';
import { A as AstroError, Q as ActionCalledFromServerError } from './astro/assets-service_CfhXJX0c.mjs';
import { c as callSafely, a as ActionError, b as ActionInputError } from './shared_DAcLkIRN.mjs';
import { eq } from '@astrojs/db/dist/runtime/virtual.js';

function defineAction({
  accept,
  input: inputSchema,
  handler
}) {
  const serverHandler = accept === "form" ? getFormServerHandler(handler, inputSchema) : getJsonServerHandler(handler, inputSchema);
  async function safeServerHandler(unparsedInput) {
    if (typeof this === "function") {
      throw new AstroError(ActionCalledFromServerError);
    }
    return callSafely(() => serverHandler(unparsedInput, this));
  }
  Object.assign(safeServerHandler, {
    orThrow(unparsedInput) {
      if (typeof this === "function") {
        throw new AstroError(ActionCalledFromServerError);
      }
      return serverHandler(unparsedInput, this);
    }
  });
  return safeServerHandler;
}
function getFormServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (!(unparsedInput instanceof FormData)) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts FormData."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const baseSchema = unwrapBaseObjectSchema(inputSchema, unparsedInput);
    const parsed = await inputSchema.safeParseAsync(
      baseSchema instanceof z$1.ZodObject ? formDataToObject(unparsedInput, baseSchema) : unparsedInput
    );
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function getJsonServerHandler(handler, inputSchema) {
  return async (unparsedInput, context) => {
    if (unparsedInput instanceof FormData) {
      throw new ActionError({
        code: "UNSUPPORTED_MEDIA_TYPE",
        message: "This action only accepts JSON."
      });
    }
    if (!inputSchema) return await handler(unparsedInput, context);
    const parsed = await inputSchema.safeParseAsync(unparsedInput);
    if (!parsed.success) {
      throw new ActionInputError(parsed.error.issues);
    }
    return await handler(parsed.data, context);
  };
}
function formDataToObject(formData, schema) {
  const obj = schema._def.unknownKeys === "passthrough" ? Object.fromEntries(formData.entries()) : {};
  for (const [key, baseValidator] of Object.entries(schema.shape)) {
    let validator = baseValidator;
    while (validator instanceof z$1.ZodOptional || validator instanceof z$1.ZodNullable || validator instanceof z$1.ZodDefault) {
      if (validator instanceof z$1.ZodDefault && !formData.has(key)) {
        obj[key] = validator._def.defaultValue();
      }
      validator = validator._def.innerType;
    }
    if (!formData.has(key) && key in obj) {
      continue;
    } else if (validator instanceof z$1.ZodBoolean) {
      const val = formData.get(key);
      obj[key] = val === "true" ? true : val === "false" ? false : formData.has(key);
    } else if (validator instanceof z$1.ZodArray) {
      obj[key] = handleFormDataGetAll(key, formData, validator);
    } else {
      obj[key] = handleFormDataGet(key, formData, validator, baseValidator);
    }
  }
  return obj;
}
function handleFormDataGetAll(key, formData, validator) {
  const entries = Array.from(formData.getAll(key));
  const elementValidator = validator._def.type;
  if (elementValidator instanceof z$1.ZodNumber) {
    return entries.map(Number);
  } else if (elementValidator instanceof z$1.ZodBoolean) {
    return entries.map(Boolean);
  }
  return entries;
}
function handleFormDataGet(key, formData, validator, baseValidator) {
  const value = formData.get(key);
  if (!value) {
    return baseValidator instanceof z$1.ZodOptional ? void 0 : null;
  }
  return validator instanceof z$1.ZodNumber ? Number(value) : value;
}
function unwrapBaseObjectSchema(schema, unparsedInput) {
  while (schema instanceof z$1.ZodEffects || schema instanceof z$1.ZodPipeline) {
    if (schema instanceof z$1.ZodEffects) {
      schema = schema._def.schema;
    }
    if (schema instanceof z$1.ZodPipeline) {
      schema = schema._def.in;
    }
  }
  if (schema instanceof z$1.ZodDiscriminatedUnion) {
    const typeKey = schema._def.discriminator;
    const typeValue = unparsedInput.get(typeKey);
    if (typeof typeValue !== "string") return schema;
    const objSchema = schema._def.optionsMap.get(typeValue);
    if (!objSchema) return schema;
    return objSchema;
  }
  return schema;
}

function createCollectionToGlobResultMap({
  globResult,
  contentDir
}) {
  const collectionToGlobResultMap = {};
  for (const key in globResult) {
    const keyRelativeToContentDir = key.replace(new RegExp(`^${contentDir}`), "");
    const segments = keyRelativeToContentDir.split("/");
    if (segments.length <= 1) continue;
    const collection = segments[0];
    collectionToGlobResultMap[collection] ??= {};
    collectionToGlobResultMap[collection][key] = globResult[key];
  }
  return collectionToGlobResultMap;
}

// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {};

new Set(Object.keys(lookupMap));

const renderEntryGlob = /* #__PURE__ */ Object.assign({});
createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const server = {
  newNegotiation: defineAction({
    input: z.object({
      name: z.string()
    }),
    handler: async (input) => {
      await db.insert(Negotiations).values({
        id: Math.floor(Math.random() * 1e6),
        name: input.name,
        created_at: /* @__PURE__ */ new Date(),
        updated_at: /* @__PURE__ */ new Date()
      });
      return { message: `Negotiation ${input.name} created successfully` };
    }
  }),
  removeNegotiation: defineAction({
    input: z.object({
      id: z.number()
    }),
    handler: async (input) => {
      await db.delete(Negotiations).where(eq(Negotiations.id, input.id));
      return { message: `Negotiation ${input.id} removed successfully` };
    }
  }),
  newSession: defineAction({
    input: z.object({
      name: z.string(),
      nId: z.number(),
      qna: z.array(z.object({ q: z.string(), a: z.string() }))
    }),
    handler: async (input) => {
      await db.insert(Sessions).values({
        id: Math.floor(Math.random() * 1e6),
        name: input.name,
        nId: input.nId,
        qna: input.qna,
        chatHistory: [],
        created_at: /* @__PURE__ */ new Date(),
        updated_at: /* @__PURE__ */ new Date()
      });
      return { message: `Session ${input.name} created successfully` };
    }
  }),
  addMessageToSession: defineAction({
    input: z.object({
      id: z.number(),
      type: z.enum(["s", "c"]),
      message: z.string()
    }),
    handler: async (input) => {
      const session = await db.select().from(Sessions).where(eq(Sessions.id, input.id)).then((res) => res[0]);
      if (!session) throw new Error(`Session ${input.id} not found`);
      if (input.type === "c") {
        const newMessageHistory2 = [...session.chatHistory, { c: input.message }];
        await db.update(Sessions).set({ chatHistory: newMessageHistory2 }).where(eq(Sessions.id, input.id));
        return { message: `Message added to session ${input.id} successfully` };
      }
      const newMessageHistory = [...session.chatHistory, { s: input.message }];
      await db.update(Sessions).set({ chatHistory: newMessageHistory }).where(eq(Sessions.id, input.id));
      return { message: `Message added to session ${input.id} successfully` };
    }
  })
};

export { server };
