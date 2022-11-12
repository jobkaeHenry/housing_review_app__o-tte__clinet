import { rest } from "msw";
export const handlers = [
  // 로그인 테스트
  rest.post("/auth/token", async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  rest.post("/logout", async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
  // 기본형
  rest.post("/login", async (req, res, ctx) => {
    return res(
      ctx.json({
        userId: 1,
        userImage:
          "https://learnenglish.britishcouncil.org/sites/podcasts/files/2021-10/RS6715_492969113-hig.jpg",
        userNickname: "준구짱",
      })
    );
  }),
];
