import React, { useState } from "react";
import { useTrail, a } from "@react-spring/web";

export const TrailWrapper: React.FC<{
  open: boolean;
  children: any;
  height?: number;
}> = ({ open, children, height }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 5, tension: 2000, friction: 300 },
    opacity: open ? 1 : 0,
    x: open ? 0 : 20,
    height: height ? height : "auto",
    from: { opacity: 0, x: 0, height: 0 },
  });
  return (
    <div>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={"basic-tail-item-" + index} style={style}>
          <a.div style={{ height: height }}>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};
