import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const body = await request.json(); // 클라이언트에서 받은 데이터
  // console.log(body);

  try {
    // 외부 API로 통신
    const response = await axios.get(body.url);
    // 통신 성공 하면 클라이언트에서 알리기

    return new NextResponse(JSON.stringify(response.data), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new NextResponse("server error", {
      status: 500,
    });
  }
};
