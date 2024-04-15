export const FETCH_GET = async (
  url: string,
  params?: any, //  { param1: 'aaa', ... }
  options: any = {}
) => {
  // process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  const requestHeader = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin":
      "https://sgisapi.kostat.go.kr/OpenAPI3/auth/authentication.json",
  });

  const queryString = new URLSearchParams(params).toString();

  try {
    const response = await fetch(`${url}`, {
      method: "get",
      // mode: "cors", //  no-cors, cors, same-origin
      // credentials: "include",
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      headers: requestHeader,
    });

    if (response.ok) {
      return await response.json();
    }

    if (response.status !== 200) {
      // 에러 처리 추가(예정)
      console.log(response.json());

      throw new Error(response.status + "에러 발생");
    }
  } catch (error) {
    throw error;
  }
};

export const FETCH_POST = async (
  url: string,
  body: object,
  userId: string = ""
) => {
  const requestHeader = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  try {
    const response = await fetch(`${url}`, {
      method: "post",
      mode: "cors",
      credentials: "include",
      cache: "no-cache",
      headers: requestHeader,
      body: JSON.stringify(body),
    });

    if (response.ok) {
      return await response.json();
    }

    if (response.status !== 200) {
      throw await response.json();
    }
  } catch (error) {
    throw error;
  }
};
