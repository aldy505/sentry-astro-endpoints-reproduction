import type { APIRoute } from "astro";

export const GET: APIRoute = async (): Promise<Response> => {
  // adding an external fetch request to the mix
  const res = await (await fetch("https://httpbin.org/get")).json();

  const response = new Response(
    JSON.stringify({ msg: "hi mom", res: JSON.stringify(res, null, 2) }),
    {
      status: 200,
      headers: {
        "Set-Cookie": "foo=; HttpOnly; Secure; Same-Site=Strict;",
      },
    }
  );

  return response;
};

// Ignore, this is not relevant for the reproduction,
// just playing around with a general wrapper
// type WrapperOptions = {
//   setClientIp?: boolean;
// };

// function wrapEndpoint(
//   endpoint: APIRoute,
//   options: WrapperOptions = { setClientIp: false }
// ) {
//   return new Proxy(endpoint, {
//     apply(
//       originalEndpointFunction,
//       thisArg,
//       argumentsList: Parameters<APIRoute>
//     ) {
//       const ctx = argumentsList[0];
//       const method = ctx.request.method;

//       console.log("ctx", ctx);

//       return Sentry.trace(
//         {
//           name: `${method} ${ctx.url.pathname}`,
//           op: `function.astro.${method.toLowerCase()}`,
//           metadata: {
//             request: {
//               headers: Object.fromEntries(ctx.request.headers.entries()),
//               method: method,
//               url: ctx.request.url,
//             },
//             source: "route",
//           },
//         },
//         () => {
//           return originalEndpointFunction.apply(thisArg, argumentsList);
//         }
//       );
//     },
//   });
// }
