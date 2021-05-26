import { Post } from 'share/interfaces/post';

export const getMockdata = (): Promise<any> => {
  return new Promise((res) => {
    res(posts.slice(0, 10));
  });
};

export const posts: Post[] = [
  {
    id: 1,
    userId: 1,
    content:
      'Consequat consequat ea occaecat aute incididunt dolore cupidatat. Aliqua pariatur cupidatat aliqua pariatur non. Culpa velit velit adipisicing eu. Nulla qui incididunt eiusmod esse quis nostrud eiusmod. Et sint nostrud consectetur aute. Mollit ipsum veniam laborum sit dolor officia ad reprehenderit consectetur est quis tempor ullamco.',
    createdAt: '2021-05-17',
    isCompleted: true,
    moodId: 1,
  },
  {
    id: 2,
    userId: 1,
    content:
      '오늘은 비가 주룩주룩 Veniam excepteur pariatur eiusmod laboris non eiusmod dolore quis non aliquip do et. Eiusmod mollit nisi exercitation exercitation nulla ut ipsum Lorem est. Cupidatat anim mollit amet id ullamco enim ex minim esse minim. Culpa pariatur voluptate dolore Lorem minim ad consequat adipisicing. Sint aute ex officia excepteur dolore aliqua qui exercitation adipisicing cupidatat fugiat occaecat duis elit. Non adipisicing sint qui pariatur laboris sit ipsum tempor anim.',
    createdAt: '2021-05-17',
    isCompleted: true,
    moodId: 1,
  },
];
