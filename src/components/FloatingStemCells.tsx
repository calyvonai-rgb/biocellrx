import { useEffect, useState } from 'react';

interface StemCell {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
  rotationSpeed: number;
}

const FloatingStemCells = () => {
  const [stemCells, setStemCells] = useState<StemCell[]>([]);

  useEffect(() => {
    // Generate initial stem cells
    const cells: StemCell[] = [];
    for (let i = 0; i < 15; i++) {
      cells.push({
        id: i,
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        size: Math.random() * 20 + 10, // 10-30px
        speed: Math.random() * 0.5 + 0.2, // 0.2-0.7
        direction: Math.random() * 360,
        opacity: Math.random() * 0.6 + 0.4, // 0.4-1.0
        rotationSpeed: Math.random() * 2 + 0.5, // 0.5-2.5
      });
    }
    setStemCells(cells);

    // Animation loop
    const animationFrame = () => {
      setStemCells(prevCells => 
        prevCells.map(cell => {
          let newX = cell.x + Math.cos(cell.direction * Math.PI / 180) * cell.speed;
          let newY = cell.y + Math.sin(cell.direction * Math.PI / 180) * cell.speed;

          // Wrap around screen edges
          if (newX > window.innerWidth + 50) newX = -50;
          if (newX < -50) newX = window.innerWidth + 50;
          if (newY > window.innerHeight + 50) newY = -50;
          if (newY < -50) newY = window.innerHeight + 50;

          return {
            ...cell,
            x: newX,
            y: newY,
          };
        })
      );
      
      requestAnimationFrame(animationFrame);
    };

    const animationId = requestAnimationFrame(animationFrame);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {stemCells.map((cell) => (
        <div
          key={cell.id}
          className="absolute stem-cell-animation"
          style={{
            left: `${cell.x}px`,
            top: `${cell.y}px`,
            width: `${cell.size}px`,
            height: `${cell.size}px`,
            opacity: cell.opacity,
            animation: `stem-cell-float ${20 + cell.id * 2}s infinite linear, stem-cell-pulse ${3 + cell.id * 0.5}s infinite ease-in-out`,
          }}
        >
          <div 
            className="w-full h-full rounded-full border-2 border-medical-gold/60 bg-gradient-to-br from-medical-gold/40 to-medical-gold/20 relative shadow-lg shadow-medical-gold/30"
            style={{
              animation: `stem-cell-rotate ${cell.rotationSpeed * 10}s infinite linear`,
            }}
          >
            <div 
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 rounded-full bg-medical-gold/70 border border-medical-gold/80 shadow-sm"
              style={{
                animation: `stem-cell-nucleus-pulse ${4 + cell.id * 0.3}s infinite ease-in-out alternate`,
              }}
            >
              {/* Inner nucleus */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/2 h-1/2 rounded-full bg-medical-gold/90"></div>
            </div>
            
            <div 
              className="absolute top-1/4 right-1/4 w-1/6 h-1/6 rounded-full bg-medical-gold/50"
              style={{
                animation: `stem-cell-organelle ${6 + cell.id * 0.4}s infinite ease-in-out`,
              }}
            ></div>
            <div 
              className="absolute bottom-1/4 left-1/4 w-1/8 h-1/8 rounded-full bg-medical-gold/45"
              style={{
                animation: `stem-cell-organelle ${5 + cell.id * 0.6}s infinite ease-in-out reverse`,
              }}
            ></div>
            <div 
              className="absolute top-3/4 right-3/4 w-1/10 h-1/10 rounded-full bg-medical-gold/55"
              style={{
                animation: `stem-cell-organelle ${7 + cell.id * 0.2}s infinite ease-in-out`,
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FloatingStemCells;