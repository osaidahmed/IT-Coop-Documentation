import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router'
import FSRALogo from './components/FSRALogo'
import { components as mdxComponents } from './components/mdx-components'

const config: DocsThemeConfig = {
  logo: <FSRALogo />,
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
  // Force light mode only
  darkMode: false,
  theme: 'light',
  primaryHue: {
    light: 195,
  },
 
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
  search: {
    placeholder: 'Search FSRA IT Docs...',
    inputProps: {
      style: {
        borderRadius: '8px',
        border: '1px solid #0072CE',
        padding: '8px 12px',
        background: '#f7fafc',
        color: '#003366',
        fontSize: '5rem',
      },
    },
  },
  docs: {
  },
  components: mdxComponents,
}

export default config
