# ZSTPlusPlus

**ZSTPlusPlus** to platforma stworzona, żeby móc dodawać notatki z przedmiotów zawodowych na profilu Technik programista. Notatki są dodawane w plikach JSON w folderze data

## Preview

Aplikacja dostępna jest pod linkiem https://karimink.github.io/zstplusplus/

## Wymagania

- git
- NodeJS + npm

### Instalacja

- Sklonuj repozytorium do wybranego folderu:

  ```bash
  git clone https://github.com/karimink/ZSTPlusPlus.git
  cd ZSTPlusPlus
  ```

- Zainstaluj zależności za pomocą npm:

  ```bash
  npm install
  ```

### Uruchom serwer

Aby uruchomić serwer:

```bash
npm run dev
```

Aplikacja będzie dostępna pod linkiem http://localhost:5173/zstplusplus/

### Writer

Dla łatwiejszego tworzenia notatek, dostępny jest pod ścieżką /Writer formularz, który ułatwia przekształcanie notatek na json.

## Struktura notatek

Każdy "temat" to osoba właściwość. Jako klucz podaje się nazwe tematu, a jej wartością jest tablica, w której zamieszczane są obiekty z notatkami. Każdy obiekt notatki musi mieć tytuł. Może mieć ona opis, tabelę, czy też blok kodu.

### Przykład

```json
{
  "pliki c++": [
    {
      "title": "ifstream",
      "description": "ifstream służy do odczytu danych plików",
      "code": "ifstream nazwa(\"nazwa_pliku\");"
    },
    {
      "title": "ofstream",
      "description": "ofstream służy do zapisu danych do pliku",
      "code": "ofstream nazwa(\"nazwa_pliku\");"
    }
    //...
  ]
}
```
