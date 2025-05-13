import React from "react";
import { TattooDesign } from "@/models/TattooModel";

interface DesignGridProps {
  designs: TattooDesign[];
  onSelectDesign: (design: TattooDesign) => void;
  isScrollable?: boolean;
}

const DesignGrid: React.FC<DesignGridProps> = ({
  designs,
  onSelectDesign,
  isScrollable = false,
}) => {
  if (isScrollable) {
    const containerHeight = designs.length >= 5 ? 320 : 160;
    const gridRowsClass = designs.length >= 5 ? "grid-rows-2" : "grid-rows-1";

    return (
      <>
        {designs.length > 0 && (
          <div
            className="overflow-x-auto pb-4 hide-scrollbar"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            <div
              className={`grid ${gridRowsClass} grid-flow-col gap-4`}
              style={{ height: `${containerHeight}px`, minWidth: "100%" }}
            >
              {designs.map((design) => (
                <div
                  key={design.id}
                  className="bg-gray-600 cursor-pointer"
                  style={{ width: "150px", height: "150px" }}
                  onClick={() => onSelectDesign(design)}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-full h-full bg-gray-600"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {designs.map((design) => (
        <div
          key={design.id}
          className="bg-gray-600 aspect-square cursor-pointer"
          onClick={() => onSelectDesign(design)}
        >
          <div className="w-full h-full flex items-center justify-center">
            {/* This would be the actual design image in a real app */}
            <div className="w-full h-full bg-gray-600"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DesignGrid;
