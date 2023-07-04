
 
        function showTooltip() {
            const tooltip = document.getElementById("tooltip");
            tooltip.style.display = "block";
        }
    
     
        function hideTooltip() {
            const tooltip = document.getElementById("tooltip");
            tooltip.style.display = "none";
        }
    
        
        const userImg = document.getElementById("info-img");
    
        
        userImg.addEventListener("mouseenter", showTooltip);
        userImg.addEventListener("mouseleave", hideTooltip);
