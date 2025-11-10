// game.js

/* ...existing code... */
    setNextRequiredOrientation() {
        const possibleOrientations = ORIENTATIONS.filter(o => o !== this.requiredOrientation && o !== this.nextRequiredOrientation);
        this.nextRequiredOrientation = possibleOrientations[Math.floor(Math.random() * possibleOrientations.length)];
        
        // Defer style update to the next frame to prevent visual glitch
        requestAnimationFrame(() => {
            this.nextOrientationIndicator.style.backgroundColor = getOrientationColor(this.nextRequiredOrientation);
            const nextPos = getIndicatorPosition(this.nextRequiredOrientation);
            Object.assign(this.nextOrientationIndicator.style, nextPos);
        });
    }

    onTimerEnd() {
/* ...existing code... */

