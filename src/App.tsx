import React from "react"
import { StylesProvider } from '@mui/styles';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { I18nextProvider } from 'react-i18next';
import { GlobalStyle } from './App.Styles';
import WebAppProvider from './providers/webAppProvider';
import Layout from "./components/Layout/Layout";
import {PATHS} from "./const/paths.constants";

import i18n from './common/utils/i18n';

import HomeApp from "./pages/Home/Home"
import Tap from "./pages/Tap/Tap";
import Unknown from "./pages/Unknown";
import Friends from "./pages/Friends/Friends";

function App() {
  return (
    <WebAppProvider>
      <I18nextProvider i18n={i18n}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <BrowserRouter>
            <Routes>
              <Route index element={
                <Layout>
                  <HomeApp />
                </Layout>
              } />
              <Route path={PATHS.HOME} element={
                <Layout>
                  <HomeApp />
                </Layout>
              } />
              <Route path={PATHS.TAP} element={
                <Layout>
                  <Tap />
                </Layout>
              } />
              <Route path={PATHS.REF} element={
                <Layout>
                  <Friends />
                </Layout>
              } />
              <Route path={PATHS.EARN} element={
                <Layout>
                  <Unknown />
                </Layout>
              } />
              <Route path={PATHS.WAREHOUSE} element={
                <Layout>
                  <Unknown />
                </Layout>
              } />
            </Routes>
          </BrowserRouter>
        </StylesProvider>
      </I18nextProvider>
    </WebAppProvider>
  )
}

export default App
