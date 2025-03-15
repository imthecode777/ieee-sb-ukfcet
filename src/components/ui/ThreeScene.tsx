
import React, { useRef, useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const ThreeScene = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    if (!context) return;
    
    // Set canvas width and height
    const updateCanvasSize = () => {
      if (canvas) {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
      }
    };
    
    window.addEventListener('resize', updateCanvasSize);
    updateCanvasSize();
    
    // Create particles
    const particlesArray: Particle[] = [];
    const numberOfParticles = isMobile ? 50 : 100;
    
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // IEEE colors
        const colors = ['#00629B', '#0076B6', '#009CA6', '#FFD100'];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }
      
      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        
        if (this.x > canvas.width) this.x = 0;
        else if (this.x < 0) this.x = canvas.width;
        
        if (this.y > canvas.height) this.y = 0;
        else if (this.y < 0) this.y = canvas.height;
      }
      
      draw() {
        if (!context) return;
        context.fillStyle = this.color;
        context.beginPath();
        context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        context.closePath();
        context.fill();
      }
    }
    
    function createParticles() {
      for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
      }
    }
    
    function connectParticles() {
      if (!context) return;
      
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < (canvas.width / 10)) {
            context.strokeStyle = `rgba(0, 98, 155, ${0.8 - distance / (canvas.width / 10)})`;
            context.lineWidth = 0.5;
            context.beginPath();
            context.moveTo(particlesArray[a].x, particlesArray[a].y);
            context.lineTo(particlesArray[b].x, particlesArray[b].y);
            context.stroke();
          }
        }
      }
    }
    
    function animate() {
      if (!context) return;
      
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesArray.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      connectParticles();
      requestAnimationFrame(animate);
    }
    
    createParticles();
    animate();
    
    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, [isMobile]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute inset-0 w-full h-full z-0"
    />
  );
};

export default ThreeScene;
