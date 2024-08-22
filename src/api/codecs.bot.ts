import { makeHandler } from './makeHandler';
import {TELEGRAM_BOT_TOKEN} from "../const/general.constants";
import {WebAppUser} from "../hooks/useInitData";

export const sendText = makeHandler(
  'sendText',
  (data: SendTextParams) => ({
    method: 'POST',
    path: `/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
    data,
  }),
  (res: SendTextResponse) => res.data
);

export const createInlineQuery = makeHandler(
  'createInlineQuery',
  (data: SendInlineQueryParams) => ({
    method: 'POST',
    path: `/bot${TELEGRAM_BOT_TOKEN}/InlineQuery`,
    data,
  }),
  (res: SendTextResponse) => res.data
);

export const answerInlineQuery = makeHandler(
  'answerInlineQuery',
  (data: AnswerInlineQueryParams) => ({
    method: 'POST',
    path: `/bot${TELEGRAM_BOT_TOKEN}/answerWebAppQuery`,
    data,
  }),
  (res: SendTextResponse) => res.data
);

export type SendTextParams = {
  /** chat_id */
  chat_id: string;
  /** text */
  text: string;
};

export type SendInlineQueryParams = {
  /** id */
  id: string;
  /** from */
  from?: WebAppUser;
  /** query */
  query: string;
  /** offset */
  offset: string;
};

export type InlineQueryResultArticle = {
  id: string;
  type: string;
  title: string;
  input_message_content: {
    message_text: string
  };
};

export type AnswerInlineQueryParams = {
  /** inline_query_id */
  web_app_query_id: string;
  /** results */
  result: InlineQueryResultArticle;
};

export type SendTextResponse = {
  data: any
};
