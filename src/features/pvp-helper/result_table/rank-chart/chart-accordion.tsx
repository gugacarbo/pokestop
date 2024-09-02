'use client';

import {ScatterPokemonChart} from './scatter-ranking.chart';

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import {Button} from '@/components/ui/button';
import {CardHeader} from '@/components/ui/card';

import {RankedSpread} from '@/lib/generateRankedSpreads';
import {useState} from 'react';
import {AtkDefDisplay} from './atk-def-display';

function ChartAccordion({matchingSpreads}: {matchingSpreads: RankedSpread[]}) {
	const [open, setOpen] = useState(false);

	return (
		<div className="flex flex-col items-start gap-2 w-full">
			<Accordion
				type="single"
				collapsible
				className="w-full"
				value={open ? 'item-1' : ''}
				onValueChange={v => setOpen(v === 'item-1')}
			>
				<AccordionItem value="item-1" className="py-0 w-full">
					<CardHeader className="flex flex-row justify-start pt-0">
						<Button
							onClick={() => setOpen(!open)}
							variant="secondary"
							size="sm"
							className="text-center"
						>
							{open ? 'Close' : 'Open'} Spread Chart
						</Button>
					</CardHeader>
					<AccordionContent className="py-0 w-full">
						<AtkDefDisplay matchingSpreads={matchingSpreads} />
						<ScatterPokemonChart matchingSpreads={matchingSpreads} />
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export {ChartAccordion};
