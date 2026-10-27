import { NextResponse } from 'next/server';
import { z } from 'zod';
import { hasPII } from '@/lib/privacy';
import { generateValidated } from '@/lib/llm';
export async function POST(req:Request){try{const {prompt}=z.object({prompt:z.string().min(1).max(30000)}).parse(await req.json());if(hasPII(prompt))return NextResponse.json({error:'Sensitive-looking text detected. Redact before running.'},{status:422});return NextResponse.json(await generateValidated({system:'Return JSON only: {title:string,sections:Record<string,string>,requirements:[{id,title,priority:"P0"|"P1"|"P2",rationale,acceptance}],metrics:string[],risks:string[]}. Produce a useful, honest workflow document. Mark assumptions and unknowns; do not invent facts or approvals.',messages:[{role:'user',content:prompt}]}));}catch{return NextResponse.json({error:'Could not process that input. Check its length and try again.'},{status:400});}}
