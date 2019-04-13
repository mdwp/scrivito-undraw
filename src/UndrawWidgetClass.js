import * as Scrivito from "scrivito";

const UndrawWidget = Scrivito.provideWidgetClass("UndrawWidget", {
  attributes: {

    svg: [
      "enum",
      {
        values: [
          "address",
          "agreement",
          "blog",
          "browser",
          "business-plan",
          "calendar",
          "charts",
          "creative-team",
          "dashboard",
          "data",
          "devices",
          "fastloading",
          "hiring",
          "insync",
          "map",
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
        ]
      }
    ]
  },
});

export default UndrawWidget;
