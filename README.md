Gallery Map to pełnostackowa aplikacja webowa umożliwiająca interaktywną eksplorację galerii sztuki lub muzeum. Użytkownik może przeglądać mapę obiektu, wybierać sale i uzyskiwać informacje o eksponatach. Aplikacja składa się z:

Frontendu zbudowanego w React z mapą SVG i dynamicznym panelem informacji.

Backendu zbudowanego w Node.js (Express), służącego do obsługi danych związanych z salami i dziełami sztuki.

Projekt może być wykorzystywany jako wizualna prezentacja dla instytucji kultury, muzeów lub galerii.

⚙️ Technologie
Frontend:
React (SPA)

Vite (dev server + bundler)

JSX

CSS Modules

SVG jako mapa interaktywna

Backend:
Node.js

Express

SQLite (lub inna baza danych lokalna)

REST API

🚀 Jak uruchomić projekt lokalnie
1. Klonowanie repozytoriów
bash
Kopiuj
Edytuj
git clone https://github.com/JackieHare/gallery-map.git
git clone https://github.com/JackieHare/gallery-backend.git
2. Frontend (React)
bash
Kopiuj
Edytuj
cd gallery-map
npm install
npm run dev
Aplikacja uruchomi się pod adresem: http://localhost:5173

3. Backend (Node.js + Express)
bash
Kopiuj
Edytuj
cd gallery-backend
npm install
node server.js
Backend nasłuchuje domyślnie na porcie 3001. Dane są dostępne pod adresami API, np.:

bash
Kopiuj
Edytuj
GET http://localhost:3001/rooms
GET http://localhost:3001/artworks
Backend używa SQLite jako bazy lokalnej — wystarczy plik db.js.

🔄 Komunikacja między frontendem a backendem
Frontend wysyła zapytania HTTP (np. fetch) do backendu w celu pobrania informacji o salach i eksponatach.

W komponencie GalleryMap.jsx dane są pobierane i przypisywane do konkretnych regionów mapy SVG.

Po kliknięciu w salę uruchamiany jest InfoBox z dynamiczną zawartością.

🧪 Testy
Frontend:
App.test.js używa React Testing Library

bash
Kopiuj
Edytuj
npm test
Backend:
Można dodać testy przy pomocy np. Jest lub Supertest.

📦 Deployment
Projekt można wdrożyć w następujący sposób:

Frontend:
Vercel / Netlify (obsługuje React + Vite out of the box)

Backend:
Render / Railway / VPS (Express + Node.js)

Upewnij się, że frontend ma odpowiedni BASE_URL do backendu (http://localhost:3001 lub produkcyjny adres).
