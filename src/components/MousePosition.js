import React from 'react'

function MousePosition() {
    const el = document.querySelector("#module");

    el.addEventListener("mousemove", (e) => {
        el.style.backgroundPositionX = -e.offsetX + "px";
        el.style.backgroundPositionY = -e.offsetY + "px";
    });
    return (
        <div className='Mouse_Position' style={{ height: "100vh", margin: "0", display: "flex", justifyContent: "center", alignItems: "center", background: "radial-gradient(#666, #222)" }}>
            <div class="module" id="module" style={{ width: "300px", height: "300px", border: "1px solid white", backgroundImage: "url(https://images.unsplash.com/photo-1499162526249-f5b8b9ba9923?ixlib=rb-0.3.5&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjE0NTg5fQ&s=865bf5c0b77ceb22e88de9fd41c5a671)", backgroundSize: " 1000px" }}>

            </div>

        </div>
    )
}

export default MousePosition