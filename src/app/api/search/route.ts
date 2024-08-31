import { NextResponse, NextRequest } from "next/server";
import { search, SearchType } from "@navetacandra/ddg";

const types = ["regular", "image", "video", "news", "map"];

export async function GET(req: NextRequest) {
  const { query, type, next } = Object.fromEntries(new URL(req.url).searchParams);
  const currentType = type ?? "regular";
  const isValidType = !!types.find(t => t == currentType);

  if(!query) return NextResponse.json({ status: "error", code: 400, message: "query is required" }, { status: 400 });
  if(!isValidType) return NextResponse.json({ status: "error", code: 400, message: "Invalid type" }, { status: 400 });

  try {
    const result = await search({ query, next }, currentType as SearchType);
    const data = {...result, results: result.results.filter(f => !('title' in f && f.title == 'EOF' && 'domain'in f && f.domain == 'www.google.com'))};

    if(data.results.length < 1) return NextResponse.json({ status: "error", code: 404, message: "results not found" }, { status: 404 });
    return NextResponse.json({ status: "success", code: 200, data }, { status: 200 });
  } catch(err: any) {
    console.error(err);
    return NextResponse.json({ status: "error", code: 500, message: "Internal server error" }, { status: 500 });
  }
}
