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
  rest.get("/room", async (req, res, ctx) => {
    return res(
      ctx.json([
        {
          roomId: 1,
          title: "소라빌라",
          image: "https://picsum.photos/640/360",
          price: "50/300",
          roomType: "1",
          heatingType: "중앙난방",
        },
        {
          roomId: 2,
          title: "장미원룸",
          image: "https://www.stevensegallery.com/640/360​​",
          price: "50/300",
          roomType: "2",
          heatingType: "중앙난방",
        },
        {
          roomId: 3,
          title: "노송지대",
          image: "https://placebear.com/640/360",
          price: "50/300",
          roomType: "1",
          heatingType: "중앙난방",
        },
      ])
    );
  }),
  rest.get("/room/detail/1/review", async (req, res, ctx) => {
    return res(
      ctx.json({
        reviewStar: 4,
        text: "냄새가 조금 납니다",
        date: "2022-11-12",
      })
    );
  }),
  rest.post("/room/detail/1/review", async (req, res, ctx) => {
    return res(ctx.status(200));
  }),
];
