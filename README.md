# Game Room - Modern Arcade Collection

## Windows 11 Quick Start (PowerShell)

This project is a **static website**, not a Python package. There is no `pip install`, `requirements.txt`, `venv`, or Node build step. Install [Git](https://git-scm.com/downloads/win) and Python 3 if missing, then open PowerShell. Run **each command individually** in the folder where you want the project downloaded:

```powershell
git --version
```

```powershell
python --version
```

```powershell
git clone https://github.com/Tyler-Keesee/Game-Room.git
```

```powershell
Set-Location .\Game-Room
```

```powershell
python -m http.server 8000
```

With the server running, open **http://localhost:8000/** in Edge or Chrome. Press **Ctrl+C** in PowerShell to stop it.

**What to expect / caveats:** Use http://localhost:8000 instead of opening index.html with file:// so service-worker behavior and assets are tested correctly.

**Verification:** The HTTP server starting proves only that files are served; it does not prove every browser feature or third-party API is functioning. Open browser Developer Tools (F12) and check Console and Network for failures.

---


A cutting-edge collection of classic arcade games reimagined with modern web technologies. Experience nostalgic gameplay with contemporary design and features.

## Features

- **Responsive Design**: Play on any device with adaptive layouts
- **Modern UI**: Clean, intuitive interface with dark mode support
- **Enhanced Game Mechanics**: Improved versions of classic games
- **High Scores & Achievements**: Compete for top scores and unlock achievements
- **Customization Options**: Personalize gameplay with settings and themes
- **Local Storage**: Save progress and settings between sessions
- **Accessibility Features**: Designed for all players

## Games

- 🐍 Snake: Classic snake game with modern controls
- 🧱 Tetris: The iconic block-stacking puzzle
- ⭕ Tic Tac Toe: Classic game with AI opponent
- 🟡 Pac-Man: Navigate mazes with enhanced graphics
- 🃏 Memory Match: Test your memory with beautiful card designs
- 👾 Space Invaders: Defend Earth with upgraded weapons and enemies

## Getting Started

1. Clone this repository
2. Open `index.html` in your browser
3. Select a game to play
4. Use arrow keys or on-screen controls for gameplay

## Development

This project uses vanilla JavaScript with modern ES6+ features. To contribute:

1. Fork the repository
2. Make your changes
3. Submit a pull request

## License

MIT License - Use, modify, and share freely!
