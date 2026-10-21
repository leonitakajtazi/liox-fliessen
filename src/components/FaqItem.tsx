import { useId, useState } from 'react';

export function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="bg-white border border-[#a09282]/30">
      <h3>
        <button type="button" id={`${id}-question`} aria-expanded={open} aria-controls={`${id}-answer`}
          onClick={() => setOpen(!open)}
          className="flex w-full items-center justify-between gap-4 p-6 text-left text-base font-semibold text-[#2f2e2e] hover:bg-[#ece7e1]/25">
          <span>{question}</span>
          <span aria-hidden="true" className={`shrink-0 text-[#756451] text-xl font-light transition-transform duration-500 ${open ? 'rotate-45' : ''}`}>+</span>
        </button>
      </h3>
      <div id={`${id}-answer`} role="region" aria-labelledby={`${id}-question`} aria-hidden={!open} inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 overflow-hidden">
          <div className="px-6 pb-6">
            <p className="border-t border-[#a09282]/20 pt-4 text-sm text-[#2f2e2e]/80 leading-relaxed">{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
