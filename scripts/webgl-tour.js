// ===== VIRTUAL TOUR - Beauty Salon Website =====
// Interactive Virtual Tour Implementation with 2D Canvas

class VirtualTour {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = null;
        this.currentScene = 'reception';
        this.isInitialized = false;
        this.scenes = {};
        this.animationId = null;
        
        this.init();
    }
    
    init() {
        if (!this.canvas) return;
        
        // Use 2D canvas for better compatibility
        this.ctx = this.canvas.getContext('2d');
        
        if (!this.ctx) {
            console.error('Canvas 2D context not supported');
            return;
        }
        
        this.setupCanvas();
        this.createScenes();
        this.setupEventListeners();
        this.render();
        
        this.isInitialized = true;
    }
    
    setupCanvas() {
        // Set canvas size
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        
        // Set up canvas properties for high DPI displays
        const dpr = window.devicePixelRatio || 1;
        const rect = this.canvas.getBoundingClientRect();
        
        this.canvas.width = rect.width * dpr;
        this.canvas.height = rect.height * dpr;
        this.ctx.scale(dpr, dpr);
        
        this.canvas.style.width = rect.width + 'px';
        this.canvas.style.height = rect.height + 'px';
    }
    
    createScenes() {
        this.scenes = {
            reception: {
                name: 'Reception Area',
                description: 'Welcome to our elegant reception area',
                image: 'assets/images/reception.jpg',
                bg: '#f5f1eb',
                accent: '#d4a574',
                secondary: '#e8ddd4'
            },
            styling: {
                name: 'Hair Styling Stations',
                description: 'Professional styling stations with modern equipment',
                image: 'assets/images/styling.jpg',
                bg: '#f9f7f4',
                accent: '#c29660',
                secondary: '#f0ede7'
            },
            spa: {
                name: 'Spa Treatment Room',
                description: 'Relaxing spa environment for rejuvenating treatments',
                image: 'assets/images/spa.jpg',
                bg: '#e8f5e8',
                accent: '#8fbc8f',
                secondary: '#d4f0d4'
            },
            nail: {
                name: 'Nail Care Station',
                description: 'Dedicated area for manicure and pedicure services',
                image: 'assets/images/nail-station.jpg',
                bg: '#faf0f0',
                accent: '#dda0dd',
                secondary: '#f5e5f5'
            }
        };
        
        // Preload images
        this.loadSceneImages();
    }
    
    loadSceneImages() {
        this.loadedImages = {};
        
        Object.keys(this.scenes).forEach(sceneKey => {
            const scene = this.scenes[sceneKey];
            if (scene.image) {
                const img = new Image();
                img.onload = () => {
                    this.loadedImages[sceneKey] = img;
                    if (sceneKey === this.currentScene) {
                        this.drawScene();
                    }
                };
                img.onerror = () => {
                    // Image load failed - use fallback
                };
                img.src = scene.image;
            }
        });
    }
    
    drawScene() {
        const ctx = this.ctx;
        const scene = this.scenes[this.currentScene];
        const canvas = this.canvas;
        
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw background image if loaded, otherwise use color
        if (this.loadedImages && this.loadedImages[this.currentScene]) {
            const img = this.loadedImages[this.currentScene];
            
            // Calculate dimensions to fill canvas while maintaining aspect ratio
            const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
            const x = (canvas.width / 2) - (img.width / 2) * scale;
            const y = (canvas.height / 2) - (img.height / 2) * scale;
            
            ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
            
            // Add overlay for text readability
            ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        } else {
            // Fallback to solid color background
            ctx.fillStyle = scene.bg;
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
        
        // Draw title and description with better styling
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;
        
        // Title
        ctx.fillStyle = 'white';
        ctx.font = 'bold 42px Arial';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
        ctx.shadowBlur = 10;
        ctx.shadowOffsetX = 2;
        ctx.shadowOffsetY = 2;
        ctx.fillText(scene.name, centerX, centerY - 30);
        
        // Description
        ctx.font = '20px Arial';
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.shadowBlur = 5;
        ctx.fillText(scene.description, centerX, centerY + 30);
        
        // Reset shadow
        ctx.shadowColor = 'transparent';
        ctx.shadowBlur = 0;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
    }
    
    drawReceptionScene(ctx, scene) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Reception desk
        ctx.fillStyle = scene.accent;
        ctx.fillRect(w * 0.3, h * 0.7, w * 0.4, h * 0.15);
        
        // Chairs
        ctx.fillStyle = scene.secondary;
        for (let i = 0; i < 3; i++) {
            ctx.fillRect(w * 0.1 + i * w * 0.25, h * 0.6, w * 0.08, w * 0.08);
        }
        
        // Welcome area decorations
        ctx.fillStyle = scene.accent;
        ctx.beginPath();
        ctx.arc(w * 0.8, h * 0.3, w * 0.05, 0, Math.PI * 2);
        ctx.fill();
    }
    
    drawStylingScene(ctx, scene) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Styling stations
        ctx.fillStyle = scene.accent;
        for (let i = 0; i < 4; i++) {
            const x = (i % 2) * w * 0.4 + w * 0.1;
            const y = Math.floor(i / 2) * h * 0.3 + h * 0.2;
            ctx.fillRect(x, y, w * 0.15, h * 0.2);
            
            // Mirrors
            ctx.fillStyle = scene.secondary;
            ctx.fillRect(x + w * 0.02, y + h * 0.02, w * 0.11, h * 0.16);
            ctx.fillStyle = scene.accent;
        }
    }
    
    drawSpaScene(ctx, scene) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Spa treatment beds
        ctx.fillStyle = scene.accent;
        ctx.fillRect(w * 0.1, h * 0.3, w * 0.3, h * 0.4);
        ctx.fillRect(w * 0.6, h * 0.3, w * 0.3, h * 0.4);
        
        // Relaxation elements
        ctx.fillStyle = scene.secondary;
        for (let i = 0; i < 5; i++) {
            ctx.beginPath();
            ctx.arc(w * 0.1 + i * w * 0.2, h * 0.8, w * 0.03, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    drawNailScene(ctx, scene) {
        const w = this.canvas.width;
        const h = this.canvas.height;
        
        // Nail stations
        ctx.fillStyle = scene.accent;
        for (let i = 0; i < 6; i++) {
            const x = (i % 3) * w * 0.25 + w * 0.1;
            const y = Math.floor(i / 3) * h * 0.25 + h * 0.2;
            ctx.fillRect(x, y, w * 0.2, h * 0.15);
            
            // Nail polish displays
            ctx.fillStyle = scene.secondary;
            for (let j = 0; j < 3; j++) {
                ctx.fillRect(x + w * 0.03 + j * w * 0.04, y - h * 0.05, w * 0.02, h * 0.04);
            }
            ctx.fillStyle = scene.accent;
        }
    }
    
    setupEventListeners() {
        // Scene change buttons
        document.querySelectorAll('.tour-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const scene = e.target.dataset.scene;
                if (scene && this.scenes[scene]) {
                    this.changeScene(scene);
                    
                    // Update button states
                    document.querySelectorAll('.tour-btn').forEach(b => b.classList.remove('active'));
                    e.target.classList.add('active');
                }
            });
        });
        
        // Window resize
        window.addEventListener('resize', () => {
            this.setupCanvas();
            this.drawScene();
        });
    }
    
    changeScene(newScene) {
        if (this.scenes[newScene]) {
            this.currentScene = newScene;
            this.drawScene();
            
            // Add smooth transition effect
            const canvas = this.canvas;
            canvas.style.opacity = '0';
            setTimeout(() => {
                canvas.style.opacity = '1';
            }, 100);
        }
    }
    
    render() {
        // Initial render
        this.drawScene();
    }
}

// Initialize virtual tour when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const tourCanvas = document.getElementById('virtual-tour-canvas');
    if (tourCanvas) {
        const virtualTour = new VirtualTour('virtual-tour-canvas');
        
        // Set first button as active
        const firstBtn = document.querySelector('.tour-btn');
        if (firstBtn) {
            firstBtn.classList.add('active');
        }
        
        const loadingDiv = document.createElement('div');
        loadingDiv.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            color: #d4a574;
            font-weight: bold;
        `;
        loadingDiv.textContent = 'Loading Virtual Tour...';
        tourCanvas.parentElement.appendChild(loadingDiv);
        
        setTimeout(() => {
            if (loadingDiv.parentElement) {
                loadingDiv.remove();
            }
        }, 2000);
    }
});