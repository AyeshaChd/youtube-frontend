# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
  //============================================================
  Optimized search:
  ->search is using live api
  ->search is using debouncing
  ->search is using caching-- the searched query is stored with its suggestions in store, next time if same is searched then the result suggestions are given from store and an api call is not made tp give suggestions

->if we go back in our search in input box , that time also api call is not made bcz these keywords are also stored in store and if condtion in useEffect in header is fullfilling here.
