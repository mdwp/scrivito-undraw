import * as Scrivito from "scrivito";

const UndrawWidget = Scrivito.provideWidgetClass("UndrawWidget", {
  attributes: {

    svg: [
      "enum",
      {
        values: [
          "address",
          "agreement",
          "blogpost",
          "browser",
          "business-plan",
          "calendar",
          "charts",
          "coding",
          "dashboard",
          "data",
          "devices",
          "everywhere",
          "fastloading",
          "hiring",
          "insync",
          "map-dark",
          "messages",
          "onboarding",
          "organize-resume",
          "photo",
          "pie-chart",
          "portfolio",
          "posts",
          "programming",
          "realtime-sync",
          "report",
          "resume-folder",
          "safe",
          "search",
          "secure-data",
          "server",
          "setup",
          "site-stats",
          "static-assets",
          "tabs",
          "web-devices"
        ]
      }
    ]
  },
});

export default UndrawWidget;
