import { Post } from '../../share/interfaces/post';

export const isValidPositiveInteger = (param: string) => {
  return !!param.match(/[1-9]\d*$/);
};

export const validatePostRequest = (body: Partial<Post>) => {
  return body.moodId !== undefined && body.content !== undefined;
};
