import * as React from "react";
import * as Scrivito from "scrivito";
import {
  UndrawAddress, UndrawBlogPost, UndrawBrowser, UndrawBusinessPlan, UndrawCalendar, UndrawCharts,
  UndrawDashboard, UndrawData, UndrawDevices, UndrawEverywhere, UndrawFastLoading, UndrawHiring,
  UndrawInSync, UndrawMapDark, UndrawMessages, UndrawOnboarding, UndrawOrganizeResume, UndrawPhoto,
  UndrawPieChart, UndrawPortfolio, UndrawPosts, UndrawProgramming, UndrawReport, UndrawResumeFolder,
  UndrawSafe, UndrawSearch, UndrawServer, UndrawSetup, UndrawSiteStats, UndrawStaticAssets, UndrawTabs, UndrawWebDevices,
  UndrawCoding, UndrawSecureData, UndrawRealTimeSync, UndrawAgreement } from 'react-undraw-illustrations';


Scrivito.provideComponent("UndrawWidget", ({ widget }) => {
  const svg = widget.get("svg");

  return (
    getSVG(svg)
  );
});

function getSVG (svg) {
  switch (svg) {
    case 'address':
      return <UndrawAddress />
    case 'agreement':
      return <UndrawAgreement />
    case 'blogpost':
      return <UndrawBlogPost />
    case 'browser':
      return <UndrawBrowser />
    case 'business-plan':
      return <UndrawBusinessPlan />
    case 'calendar':
      return <UndrawCalendar />
    case 'charts':
      return <UndrawCharts />
    case 'coding':
      return <UndrawCoding />
    case 'dashboard':
      return <UndrawDashboard />
    case 'data':
      return <UndrawData />
    case 'devices':
      return <UndrawDevices />
    case 'everywhere':
      return <UndrawEverywhere />
    case 'fastloading':
      return <UndrawFastLoading />
    case 'hiring':
      return <UndrawHiring />
    case 'insync':
      return <UndrawInSync />
    case 'map-dark':
      return <UndrawMapDark />
    case 'messages':
      return <UndrawMessages />
    case 'onboarding':
      return <UndrawOnboarding />
    case 'organice-resume':
      return <UndrawOrganizeResume />
    case 'photo':
      return <UndrawPhoto />
    case 'pie-chart':
      return <UndrawPieChart />
    case 'pie-chart':
      return <UndrawPortfolio />
    case 'posts':
      return <UndrawPosts />
    case 'programming':
      return <UndrawProgramming />
    case 'realtime-sync':
      return <UndrawRealTimeSync />
    case 'report':
      return <UndrawReport />
    case 'report':
      return <UndrawResumeFolder />
    case 'report':
      return <UndrawSafe />
    case 'report':
      return <UndrawSearch />
    case 'secure-data':
      return <UndrawSecureData />
    case 'server':
      return <UndrawServer />
    case 'setup':
      return <UndrawSetup />
    case 'site-stats':
      return <UndrawSiteStats />
    case 'static-assets':
      return <UndrawStaticAssets />
    case 'tabs':
      return <UndrawTabs />
    case 'web-devices':
      return <UndrawWebDevices />
    default:
      return <UndrawCoding />
    }
}

