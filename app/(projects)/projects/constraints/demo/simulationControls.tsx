import { useState } from 'react'
import ConstraintsButton from '../button'

interface SimulationControlsProps {
  generation: number,
  isRunning: boolean,
  onStep: () => void,
  onRunPauseClick: () => void
}

export default function SimulationControls(props: SimulationControlsProps) {

  return (
    <div className="flex justify-center items-center gap-4 p-4 ">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Generations:</span>
        <span className="text-sm tabular-nums">{props.generation}</span>
      </div>
      <div className="flex gap-2">
        <ConstraintsButton
          onClick={props.onStep}
          disabled={props.isRunning}
        >
          Step
        </ConstraintsButton>
        <ConstraintsButton
          onClick={props.onRunPauseClick}
        >
          {props.isRunning ? 'Pause' : 'Run'}
        </ConstraintsButton>
      </div>
    </div>
  )
}

