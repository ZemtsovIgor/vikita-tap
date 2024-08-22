import {
  sendText,
  createInlineQuery,
  answerInlineQuery,
} from './codecs.bot';

const handlers = [
  sendText,
  createInlineQuery,
  answerInlineQuery,
] as const;

const handlersMap: Map<ApiHandlerTypes, ApiHandlers> = new Map();
for (const h of handlers) {
  handlersMap.set(h.type, h);
}

type DiscriminateUnion<T, K extends keyof T, V extends T[K]> = T extends Record<K, V> ? T : never;

type ApiHandlers = typeof handlers[number];
export type ApiHandlerTypes = ApiHandlers['type'];
export type ApiHandler<Type extends ApiHandlerTypes = ApiHandlerTypes> = DiscriminateUnion<
ApiHandlers,
'type',
Type
>;

export type ApiHandlerParams<Type extends ApiHandlerTypes> = Parameters<
ApiHandler<Type>['prepare']
>[0] extends {}
  ? Parameters<ApiHandler<Type>['prepare']>[0]
  : undefined;
export type ApiHandlerResponse<Type extends ApiHandlerTypes> = ReturnType<
ApiHandler<Type>['decode']
>;

export function getHandler<Type extends ApiHandlerTypes>(type: Type): ApiHandler<Type> {
  return handlersMap.get(type) as ApiHandler<Type>;
}
