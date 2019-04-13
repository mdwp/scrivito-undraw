import * as Scrivito from "scrivito";
import * as ScrivitoPicks from 'scrivito-picks';

Scrivito.provideEditingConfig("UndrawWidget", {
  title: "Illustration from Undraw",



  propertiesGroups: [
    {
      title: 'SVG',
      component: ScrivitoPicks.createComponent([

        {
          attribute: 'svg',
              values: [
                { value: "address", title: "Address", previewClassName: 'address mask' },
                { value: "agreement", title: "Agreement", previewClassName: 'agreement mask' },
                { value: "blog", title: "Blogpost", previewClassName: 'blog mask' },
                { value: "browser", title: "Browser", previewClassName: 'browser mask' },
                { value: "business-plan", title: "Business Plan", previewClassName: 'business-plan mask' },
                { value: "calendar", title: "Calendar", previewClassName: 'calendar mask' },
                { value: "charts", title: "Charts", previewClassName: 'charts mask' },
                { value: "creative-team", title: "Creative Team", previewClassName: 'creative-team mask' },
                { value: "dashboard", title: "Dashboard", previewClassName: 'dashboard mask' },
                { value: "data", title: "Data", previewClassName: 'data mask' },
                { value: "devices", title: "Devices", previewClassName: 'devices mask' },
                { value: "fastloading", title: "Fastloading", previewClassName: 'fast-loading mask' },
                { value: "hiring", title: "Hiring", previewClassName: 'hiring mask' },
                { value: "insync", title: "In Sync", previewClassName: 'insync mask' },
                { value: "map", title: "Map", previewClassName: 'map mask' },
                { value: "messages", title: "Messages", previewClassName: 'messages mask' },
                { value: "onboarding", title: "Onboarding", previewClassName: 'onboarding mask' },
                { value: "organize-resume", title: "Organice Resume", previewClassName: 'organize-resume mask' },
                { value: "photo", title: "Photo", previewClassName: 'photo mask' },
                { value: "pie-chart", title: "Pie Chart", previewClassName: 'pie-chart mask' },
                { value: "portfolio", title: "Portfolio", previewClassName: 'portfolio mask' },
                { value: "posts", title: "Posts", previewClassName: 'posts mask' },
                { value: "programming", title: "Programming", previewClassName: 'programming mask' },
                { value: "realtime-sync", title: "Realtime Sync", previewClassName: 'realtime-sync mask' },
                { value: "report", title: "Report", previewClassName: 'report mask' },
                { value: "resume-folder", title: "Resume Folder", previewClassName: 'resume-folder mask' },
                { value: "safe", title: "Safe", previewClassName: 'safe mask' },
                { value: "search", title: "Search", previewClassName: 'search mask' },
                { value: "secure-data", title: "Secure Data", previewClassName: 'secure-data mask' },
                { value: "server", title: "Server", previewClassName: 'server mask' },
                { value: "setup", title: "Setup", previewClassName: 'setup mask' },
                { value: "site-stats", title: "Site Stats", previewClassName: 'site-stats mask' },
                { value: "static-assets", title: "Static Assets", previewClassName: 'static-assets mask' },
                { value: "tabs", title: "Tabs", previewClassName: 'tabs mask' },

              ],
            }

          ]),
        },
      ],
});

