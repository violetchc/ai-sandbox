import Sandbox from '@/components/sandbox';
import { scenarios,tools,departments,policies,prompts } from '@/content';
export const dynamic='force-dynamic';
export default function Page(){return <Sandbox provider={process.env.LLM_PROVIDER||'mock'} seed={{scenarios,tools,departments,policies,prompts}}/>}
