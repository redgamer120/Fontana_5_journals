window.onload = function(){
    var anim = new Animation("myCanvas");
    var canvas = anim.getCanvas();
    var context = anim.getContext();
    
    var clockRadius = 75;
    
    anim.setDrawStage(function(){
        
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        
        hours = hours > 12 ? hours - 12 : hours;
        
        var hour = hours + minutes / 60;
        var minute = minutes + seconds / 60;
        
        this.clear();
        
        var context = anim.getContext();
        context.save();
        context.translate(canvas.width / 2, canvas.height / 2);
        
        context.beginPath();
        context.arc(0, 0, clockRadius, 0, Math.PI * 2, true);
        
        var grd = context.createLinearGradient(-clockRadius, -clockRadius, clockRadius, clockRadius);
        grd.addColorStop(0, "#F8FCFF");
        grd.addColorStop(1, "#A1CCEE");
        context.fillStyle = grd;
        context.fill();
        
        context.font = "16pt Calibri";
        context.fillStyle = "#024F8C";
        context.textAlign = "center";
        context.textBaseline = "middle";
        for (var n = 1; n <= 12; n++) {
            var theta = (n - 3) * (Math.PI * 2) / 12;
            var x = clockRadius * 0.8 * Math.cos(theta);
            var y = clockRadius * 0.8 * Math.sin(theta);
            context.fillText(n, x, y);
        }
        
        context.save();
        
        context.shadowColor = "#bbbbbb";
        context.shadowBlur = 5;
        context.shadowOffsetX = 1;
        context.shadowOffsetY = 1;
        
        context.lineWidth = 3;
        context.strokeStyle = "#005EA8";
        context.stroke();
        
        context.restore();
        
        context.save();
        var theta = (hour - 3) * 2 * Math.PI / 12;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -4);
        context.lineTo(-10, 4);
        context.lineTo(clockRadius * 0.6, 1);
        context.lineTo(clockRadius * 0.6, -1);
        context.fill();
        context.restore();
        
        context.save();
        var theta = (minute - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -3);
        context.lineTo(-10, 3);
        context.lineTo(clockRadius * 0.9, 1);
        context.lineTo(clockRadius * 0.9, -1);
        context.fill();
        context.restore();
        
        context.save();
        var theta = (seconds - 15) * 2 * Math.PI / 60;
        context.rotate(theta);
        context.beginPath();
        context.moveTo(-10, -2);
        context.lineTo(-10, 2);
        context.lineTo(clockRadius * 0.8, 1);
        context.lineTo(clockRadius * 0.8, -1);
        context.fillStyle = "red";
        context.fill();
        context.restore();
        
        context.restore();
    });
    
    anim.start();
};