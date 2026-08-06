import "./Header.css"
function Header({onToggletheme,theme}){
    return (
         <div className="header">
            <div className="logo">
                
                <h1>Task Manager</h1>
            </div>

            <button className="theme-btn" onClick={onToggletheme}>
                {theme === "light" ? "🌙" : "☀️"}
            </button>
        </div>

    )
}


export default Header