import React from "react";
import Instruction from "./Instruction";

export default function InstructionList({ instructionList, page }) {
    const pageIndex = page * 4;
    return (
        <div className="instruction-list">
            <Instruction instruction={instructionList[pageIndex]} index={pageIndex} />
            <Instruction instruction={instructionList[pageIndex + 1]} index={pageIndex + 1} />
            <Instruction instruction={instructionList[pageIndex + 2]} index={pageIndex + 2} />
            <Instruction instruction={instructionList[pageIndex + 3]} index={pageIndex + 3} />

        </div>
    )
}