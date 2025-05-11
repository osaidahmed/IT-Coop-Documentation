import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import FSRALogo from './components/FSRALogo'

const config: DocsThemeConfig = {
  logo: <FSRALogo />,
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: 'Financial Services Regulatory Authority of Ontario - IT Support Documentation',
  },
  // Enhanced theme customizations
  banner: {
    key: 'fsra-docs-release',
    text: <a href="#">Learn about the new IT support documentation site ✨</a>,
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: true,
  },
  toc: {
    float: true,
    title: 'On This Page',
  },
  primaryHue: {
    dark: 195,
    light: 195,
  },
  // FSRA blue colors based on the provided colors
  useNextSeoProps() {
    const { asPath } = useRouter()
    return {
      titleTemplate: asPath !== '/' ? '%s - FSRA IT Support' : 'FSRA IT Support Documentation',
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="FSRA IT Support Documentation" />
      <meta name="og:title" content="FSRA IT Support Documentation" />
      <link rel="icon" href="/favicon.ico" />
      <style>{`
        body {
          font-family: Arial, sans-serif;
        }
      `}</style>
    </>
  ),
}

export default config
